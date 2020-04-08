import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './components/book/book.module'

@Module({

  imports: [
    TypeOrmModule.forRoot(), 
    BookModule
  ]
  
})
export class AppModule {}
