import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
     {
       id:1,
       name : 'Kebab Shawarma',
       cookTime : '10-20',
       price : 10,
       favorite: false,
       origins: ['turkey'],
       stars : 4.5,
       imageUrl : '/assets/images/foods/food1.jpeg',
       tags : ['FastFood', 'Shawarma']
     }, 
     {
       id:2,
       name : 'Hamburger',
       cookTime : '10-15',
       price : 20,
       favorite: true,
       origins: ['germany'],
       stars : 3.4,
       imageUrl : '/assets/images/foods/food2.jpeg',
       tags : ['FastFood', 'Burger']
     },
     {
       id:3,
       name : ' Meat Balls',
       cookTime : '10- 25',
       price : 40,
       favorite: true,
       origins: ['italy'],
       stars : 4.0,
       imageUrl : '/assets/images/foods/food3.jpeg',
       tags : ['FastFood', 'Shawarma', 'Lunch']
     },
     {
       id:4,
       name : 'Lasagna',
       cookTime : '10-25',
       price : 25,
       favorite: true,
       origins: ['italy'],
       stars : 4.5,
       imageUrl : '/assets/images/foods/food4.jpeg',
       tags : ['FastFood', 'Lasagna']
     },
     {
       id:5,
       name : 'Tacos',
       cookTime : '10-30',
       price : 20,
       favorite: false,
       origins: ['mexico'],
       stars : 3.0,
       imageUrl : '/assets/images/foods/food5.jpeg',
       tags : ['FastFood', 'Tacos']
     },
     {
       id:6,
       name : 'Chicken Burger',
       cookTime : '10-20',
       price : 10,
       favorite: false,
       origins: ['india'],
       stars : 3.2,
       imageUrl : '/assets/images/foods/food6.jpeg',
       tags : ['FastFood', 'Chicken Burger']
     },
     {
       id:7,
       name : 'Gimbap',
       cookTime : '10-15',
       price : 25,
       favorite: true,
       origins: ['Korea'],
       stars : 4.5,
       imageUrl : '/assets/images/foods/food7.jpeg',
       tags : ['FastFood', 'Gimbap']
     },
     {
       id:8,
       name : 'Malawax',
       cookTime : '10-30',
       price : 25,
       favorite: true,
       origins: ['somalia'],
       stars : 4.5,
       imageUrl : '/assets/images/foods/food8.jpeg',
       tags : ['FastFood', 'Malawax']
     }, 
     {
       id:1,
       name : 'Bread pinet',
       cookTime : '10-30',
       price : 25,
       favorite: false,
       origins: ['germany'],
       stars : 3.5,
       imageUrl : '/assets/images/foods/food9.jpeg',
       tags : ['FastFood', 'Bread Pinet']
     }

    ]

  }
}
