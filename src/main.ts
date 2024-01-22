// import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
// import { AppModule } from './app.module';
// import { WalletModule } from './wallet/wallet.module';
// import { CreateWalletDto, FindByCompanyNameParams } from './wallet/wallet.dto';
// import { CreateTransactionDto } from './transaction/transaction.dto';
// import { TransactionModule } from './transaction/transaction.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  // const options: SwaggerDocumentOptions = {
  //   include: [WalletModule, TransactionModule],
  //   extraModels: [CreateWalletDto, FindByCompanyNameParams, CreateTransactionDto]
  // };
  // const config = new DocumentBuilder()
  //   .setTitle('Wallets')
  //   .setDescription('The wallets API description')
  //   .setVersion('0.0.1')
  //   .addTag('wallets')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config, options);
  // SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

