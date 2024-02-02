import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Make sure the path is correct
import { Prisma, UserData } from '@prisma/client';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async handleFormData(formData: UserData): Promise<UserData> {
    // Check if the email is already in the database
    const emailExists = await this.prisma.userData.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (emailExists) {
      throw new Error('Email already exists in the database');
    }

    // Save the new user data to the database
    const newUser = await this.prisma.userData.create({
      data: formData,
    });

    return newUser;
  }

  // New method to get user data by ID
  async getUserData(id: number): Promise<UserData | null> {
    const user = await this.prisma.userData.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      console.log(`User with ID ${id} not found`);
    }

    return user;
  }
}
