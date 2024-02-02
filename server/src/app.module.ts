import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FormModule } from './form/form.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule,FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
