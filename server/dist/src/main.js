"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder().setTitle("VOWD").setDescription("Api pour l'agence VOWD.fr").setVersion("1.0").build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix("api");
    app.enableCors({
        origin: configService.get("ORIGIN_URL"),
    });
    const PORT = configService.get("PORT") || 9000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map