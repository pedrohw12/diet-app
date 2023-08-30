import { Repository } from 'typeorm';
import { Food } from '../entity/Food';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import FoodInterface from 'src/domain/food/entity/food';

@Injectable()
export class FoodRepository implements FoodInterface {
  constructor(
    @InjectRepository(Food)
    private ormRepo: Repository<Food>,
  ) {}
  async getFood({ carb, protein, fat }): Promise<Food[]> {
    return this.ormRepo.find();
  }
}
