import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { bodyOrders } from './data/points-map'




@Controller('gis')
export class GisController {
  /*Common requests*/

  @Get('/gis-api/orders')
  getOrders(@Query('countOrders') countOrders: string) {
    return bodyOrders(Number(countOrders));
  }



}
