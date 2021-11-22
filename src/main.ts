import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const port = 3001;
  const app: INestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  console.log(`Server is running to port http://localhost:${port}`);
}

bootstrap();
