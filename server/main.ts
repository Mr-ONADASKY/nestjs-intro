import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  await server.listen(process.env.ENVIRONMENT === 'prod' ? 8080 : 3000);
}
bootstrap();
