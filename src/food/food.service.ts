import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/infra/db/orm/entity/Food';
import { FoodRepository } from 'src/infra/db/orm/repository/food.repository';
import { Repository } from 'typeorm';

export const FoodRepositoryKey = 'FoodRepositoryKey';

@Injectable()
export class FoodService {
  // constructor(
  //   @InjectRepository(Food)
  //   private foodRepository: Repository<Food>,
  // ) {}

  async getFood({ carb, protein, fat }): Promise<any> {
    return 'hello';
  }
}
