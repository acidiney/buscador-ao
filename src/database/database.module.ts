import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URL) ]
})
export class DatabaseModule {}
