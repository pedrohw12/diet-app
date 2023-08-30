import { Seeder } from 'typeorm-extension';
import { DataSource, DeepPartial } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Category } from 'src/infra/db/orm/entity/Category';

export const generateCategory = () => {
  const categories = [
    {
      name: 'Proteins',
      description: 'High protein foods like meats, tofu, beans, etc.',
    },
    {
      name: 'Whole Grains',
      description: 'Foods rich in fiber and whole grains like oats, quinoa.',
    },
    {
      name: 'Fruits',
      description: 'Fresh fruits of all types',
    },
    {
      name: 'Leafy Greens',
      description: 'Vegetables like spinach, kale, lettuce, etc.',
    },
    {
      name: 'Dairy & Alternatives',
      description: 'Milk, yogurt, almond milk, soy milk, etc.',
    },
  ];

  const category: DeepPartial<any> = {
    categories,
  };

  return category;
};

export default class CategorySeed implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Category);
    const count = 10;

    for (let i = 0; i < count; i++) {
      await repository.save(generateCategory());
      Logger.log(`Category ${i + 1} of ${count} created`);
    }
  }
}
