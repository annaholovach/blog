import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validaion.pipe";

async function start () {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('очень крутой бекэнд')
        .setDescription('документация REST API')
        .setVersion('1.0.0')
        .addTag('даже на контрольной думаю о тебе')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => {
        console.log('started on port ' + PORT)
    })

}

start()