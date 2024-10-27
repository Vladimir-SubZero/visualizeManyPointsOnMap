import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Request } from 'express';
import { Option, TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getItems(): Option[] {
    return this.testService.getItems();
  }

  @Post()
  addItem(
    @Body() body: Request<unknown, unknown, { itemValue: Option }>['body'],
  ): Option[] {
    return this.testService.addItem(body.itemValue);
  }

  @Put(':key')
  changeItem(
    @Param() params: { key: string },
    @Body() body: Request<unknown, unknown, { itemValue: Option }>['body'],
  ): Option[] {
    return this.testService.changeItem(params.key, body.itemValue);
  }

  @Delete(':key')
  deleteItem(@Param() params: { key: string }): Option[] {
    return this.testService.deleteItem(params.key);
  }
}
