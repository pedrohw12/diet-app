import { Module } from '@nestjs/common';
// import { FoodRepositoryKey, FoodService } from './food.service';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from 'src/infra/db/orm/entity/Food';
// import { FoodRepository } from 'src/infra/db/orm/repository/food.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
