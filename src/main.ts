import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import next from 'next';
import { AppModule } from './app.module';

async function bootstrap() {
 const server = await NestFactory.create(AppModule);

  await server.listen(3000);
}
bootstrap();
