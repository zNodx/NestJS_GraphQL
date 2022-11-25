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
import { CreateCatDto } from "./types/cats.dto";
import { CatsService } from "../Services/cats.service";
import { Cat } from "../interfaces/cat.interface";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
