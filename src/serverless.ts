import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

const expressApp = express();
let server: any;

async function bootstrap() {
  if (!server) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    await app.init();
    server = serverless(expressApp);
  }
  return server;
}

export default async function (req: any, res: any) {
  const srv = await bootstrap();
  return srv(req, res);
}
