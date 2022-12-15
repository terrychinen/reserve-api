import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const openApi = new DocumentBuilder()
    .setTitle('Reserve Api')
    .setDescription('This is a reserve api example')
    .setVersion('1.0')
    .addTag('reserve')
    .build();

  const document = SwaggerModule.createDocument(app, openApi);
  SwaggerModule.setup('api', app, document);

  const config: ConfigService = app.get<ConfigService>(ConfigService);
  await app.listen(config.get('port'));
}
bootstrap();
