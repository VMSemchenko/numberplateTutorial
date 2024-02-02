import { Controller, Post, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyC2g8OCYq2cYqzDsxsnRv0uq-NyMl14hbU",
  authDomain: "node-js-tutorial-microservice.firebaseapp.com",
  databaseURL: "https://node-js-tutorial-microservice-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "node-js-tutorial-microservice",
  storageBucket: "node-js-tutorial-microservice.appspot.com",
  messagingSenderId: "1039714272143",
  appId: "1:1039714272143:web:bce12f39411a1491b241fa"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

// OCR key K86156759888957

// gs://node-js-tutorial-microservice.appspot.com

// Free OCR endpoint https://api.ocr.space/parse/image

@Controller('images')
export class ImageController {
  constructor(private readonly ImageService: ImageService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const timestamp = Date.now();
    const extension = `${file.originalname.split('.')[1]}`;
    const storageFilename = `${timestamp}.${extension}`;
    const fileRef = ref(storage, storageFilename);
    const cloudUrl = await getDownloadURL(fileRef);
    return this.ImageService.createImage({ cloudUrl });
  }

  @Get('download')
  async parseNumberplate(cloudUrl: string) {
    try {
      const cloudUrl = 'https://firebasestorage.googleapis.com/v0/b/node-js-tutorial-microservice.appspot.com/o/1706133912252.jpeg?alt=media&token=11c35d6e-afa3-4db5-b9cb-90d18960effb';
      const data = new FormData();
      data.append('url', cloudUrl);
      data.append('filetype', 'JPG');

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.ocr.space/parse/image',
        headers: {
          'apikey': 'K86156759888957',
        },
        data
      };

      const ocrResponse = await axios(config);
      console.log(ocrResponse.data);
      const textData = ocrResponse.data.ParsedResults[0].ParsedText;
      const result = textData.split('\r\n')[0].trim();
      return result;
    } catch (error) {
      console.log('ERROR AT FETCHING IMAGE', error);
    }
  }
}
