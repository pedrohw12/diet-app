import { Controller, Get, Query, Res } from '@nestjs/common';
import { FoodService } from './food.service';
import { Response } from 'express';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('/')
  async getMeal(
    @Query('carb') carb: string,
    @Query('protein') protein: string,
    @Query('fat') fat: string,
  ): Promise<any> {
    return this.foodService.getFood({ carb, protein, fat });
  }
}
