import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { UserData } from '@prisma/client';

@Controller('users')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Body() formData: UserData) {
    return this.formService.handleFormData(formData);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // id is received as a string
    const numericId = Number(id); // Manually convert id to a number
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format'); // Optional: handle invalid numeric conversion
    }
    return this.formService.getUserData(numericId);
  }
}
