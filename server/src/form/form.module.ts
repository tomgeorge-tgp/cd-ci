// form.module.ts
import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the path as necessary

@Module({
  imports: [PrismaModule], // Import PrismaModule
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
