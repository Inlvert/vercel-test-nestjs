// lambda.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const expressApp = express();

let server: any;

async function bootstrap() {
  if (!server) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), {
      logger: ['error', 'warn', 'log'],
    });
    await app.init(); // ініціалізуємо Nest у Express
    server = serverless(expressApp);
  }
  return server;
}

export const handler = async (event: any, context: any) => {
  const server = await bootstrap();
  return server(event, context);
};
