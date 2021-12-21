// Sitas leidzia naudoti Injectable decorator zemiau ir ji naudoti bet kuriai class kuria ten apibudiname kaip providedIn: root tipo ta standartine paima
import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Dish[] {
    // supplyina data
    return DISHES;
  }
}
