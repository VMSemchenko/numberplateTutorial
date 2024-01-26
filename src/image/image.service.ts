import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>,
  ) { }

  async createImage(data: Pick<Image, 'cloudUrl'>): Promise<Image> {
    const { cloudUrl } = data;
    return this.ImageRepository.save({
      cloudUrl, unixTimestamp: Date.now()
    });
  }
}
