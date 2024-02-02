import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        // db: {
        //     url: process.env.DATABASE_URL,
        // }
        db: {
          url: 'postgresql://postgres:postgres_password@postgres:5432/postgres?schema=public',
        },
      },
    });
  }
  // Initialize connection when module is initialized
  async onModuleInit() {
    await this.$connect();
  }
  // Disconnect when module is destroyed
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
