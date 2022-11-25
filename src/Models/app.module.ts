import { Module } from "@nestjs/common";
import { AppController } from "../Controllers/app.controller";
import { CatsController } from "../Controllers/cats.controller";
import { AppService } from "../Services/app.service";
import { CatsService } from "../Services/cats.service";

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
