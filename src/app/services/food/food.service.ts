import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/foods/food1.jpeg',
      '/assets/images/foods/food2.jpeg',
      '/assets/images/foods/food3.jpeg',
      '/assets/images/foods/food4.jpeg',
      '/assets/images/foods/food5.jpeg',
      '/assets/images/foods/food6.jpeg',
      '/assets/images/foods/food7.jpeg',
      '/assets/images/foods/food8.jpeg',
    ]
  }
}
