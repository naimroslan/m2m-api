import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

///// default
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

///// with /api
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule); // nest tooling
//   app.setGlobalPrefix('api');
//   await app.listen(3000);
// }
// bootstrap();

///// with swagger
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('M2M Tyre Trading')
    .setDescription('The M2M Api description')
    .setVersion('1.0')
    .addTag('tyres')
    .build();
  
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();