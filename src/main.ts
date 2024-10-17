import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Nest js Blog API')
    .setDescription('Blog API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 8000);
  
  console.log("Application is running on: " + (process.env.PORT ?? 8000));
}
bootstrap();
