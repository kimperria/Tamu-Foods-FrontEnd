import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/photo1.jpeg',
      '/assets/images/photo2.jpeg',
      '/assets/images/photo3.jpeg',
      '/assets/images/photo4.jpeg',
      '/assets/images/photo5.jpeg',
      '/assets/images/photo6.jpeg',
      '/assets/images/photo7.jpeg',
      '/assets/images/photo8.jpeg',
      '/assets/images/photo9.jpeg',
    ]
  }
}
