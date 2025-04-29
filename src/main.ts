import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.NEST_PORT || 3001;
  app.enableCors({
    origin: '*', // 🔥 for development only (allow any origin)
    credentials: true,
  });
  await app.listen(port);
  console.log(`NestJS application running on port ${port}`);
}
bootstrap();
