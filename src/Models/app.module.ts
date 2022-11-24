import { Module } from "@nestjs/common";
import { AppController } from "../Controllers/app.controller";
import { CatsController } from "../Controllers/cats.controller";
import { AppService } from "../Services/app.service";

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
