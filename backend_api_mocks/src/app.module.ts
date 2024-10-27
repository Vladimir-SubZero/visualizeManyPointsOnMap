import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './models/test/test.controller';
import { TestService } from './models/test/test.service';
import { GisController } from './models/gis/gis.controller';


@Module({
  imports: [],
  controllers: [AppController, TestController, GisController],
  providers: [AppService, TestService],
})
export class AppModule {}
