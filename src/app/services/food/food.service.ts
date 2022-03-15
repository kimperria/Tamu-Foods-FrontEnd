import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/food/photo1.jpeg',
      '/assets/images/food/photo2.jpeg',
      '/assets/images/food/photo3.jpeg',
      '/assets/images/food/photo4.jpeg',
      '/assets/images/food/photo5.jpeg',
      '/assets/images/food/photo6.jpeg',
      '/assets/images/food/photo7.jpeg',
      '/assets/images/food/photo8.jpeg',
      '/assets/images/food/photo9.jpeg',
    ]
  }
}
