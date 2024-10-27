import {
  Controller,
  Get,
} from '@nestjs/common';
import { bodyOrders } from './data/points-map'




@Controller('gis')
export class GisController {
  /*Common requests*/

  @Get('/gis-api/orders')
  getOrders() {
    return bodyOrders;
  }



}
