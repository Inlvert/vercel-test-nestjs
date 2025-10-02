"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const expressApp = (0, express_1.default)();
let server;
async function bootstrap() {
    if (!server) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        await app.init();
        server = (0, serverless_http_1.default)(expressApp);
    }
    return server;
}
async function default_1(req, res) {
    const srv = await bootstrap();
    return srv(req, res);
}
//# sourceMappingURL=serverless.js.map