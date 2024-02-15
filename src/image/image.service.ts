import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import axios from 'axios';

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>,
  ) { }

  protected async fetchOCRResponse(cloudUrl: string) {
    console.log('CLOUD URL', cloudUrl);
    try {
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
      return ocrResponse.data;
    } catch (error) {
      console.log('ERROR AT FETCHING IMAGE', error);
    }
  }

  async createImage(data: Pick<Image, 'cloudUrl'>): Promise<Image> {
    const { cloudUrl } = data;
    return this.ImageRepository.save({
      cloudUrl, unixTimestamp: Date.now()
    });
  }

  async parseImages(): Promise<any> {
    const imageData = await this.ImageRepository.find();
    const ocrResponseData = await Promise.all([imageData[0]].map((dataItem) => this.fetchOCRResponse(dataItem.cloudUrl)));
    const parsedNumberPlateData = ocrResponseData.map((item, index) => (
      {
        numberPlate: item.ParsedResults[0].ParsedText.split('\r')[0],
        timestamp: imageData[index].unixTimestamp
      }
    ));
    console.log('OCR RESPONSE DATA', parsedNumberPlateData);
    return parsedNumberPlateData;
  }
}
