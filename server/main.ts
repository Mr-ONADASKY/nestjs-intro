import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule, {
    cors: { origin: ['*'] },
  });

  const config = new DocumentBuilder()
    .setTitle('ViNiBlock')
    .setDescription('ViNiBlock API description')
    .addApiKey()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(server, config);
  SwaggerModule.setup('api', server, document, {
    swaggerOptions: { swaggerUI: false },
  });

  await server.listen(process.env.ENVIRONMENT === 'prod' ? 8080 : 3000);
}
bootstrap();
