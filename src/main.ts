import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // seting up swagger
  const config = new DocumentBuilder()
    .setTitle('Recipes API') 
    .setDescription('Recipes API description')
    .setVersion('0.1') 
    .build(); 

    // document instance 

    const document = SwaggerModule.createDocument(app , config);
    SwaggerModule.setup('api',app , document);

    await app.listen(3000)

}
bootstrap();
