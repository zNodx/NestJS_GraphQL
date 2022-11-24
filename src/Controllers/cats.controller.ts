import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";
import { CreateCatDto, UpdateCatDto, ListAllEntities } from "./types/cats.dto";

@Controller("cats")
export class CatsController {
  @Get(":id")
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(["HIHIHIHI"]);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat ${createCatDto.name}`;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes a #${id} cat`;
  }
}
