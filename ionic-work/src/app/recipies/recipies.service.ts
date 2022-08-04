
import { Injectable } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  // make it private to restrict

  private recipies: Recipie[] = [
    {
      id: 'r1',
      title: 'Franch Toast',
      imageUrl:
        'assets/images/freanchtoast.jpg',
      ingredients: ['White Bread', 'Eggs', 'Milk', 'Butter', 'Salt', 'Vanilla and Cinnamon'],
    },
    {
      id: 'r2',
      title: 'The Real Mojito',
      imageUrl:
        'assets/images/realmojito.jpg',
      ingredients: ['Rum', 'Mint', 'Lime', 'Sugar', 'Club soda'],
    },
    {
      id: 'r3',
      title: 'Banana Bread',
      imageUrl:
        'assets/images/bananabread.jpg',
      ingredients: ['Banana', 'All-purpose flour', 'Baking soda', 'Salt', 'Butter', 'Brown Sugar', 'Eggs'],
    },
    {
      id: 'r4',
      title: 'Perfact Chicken',
      imageUrl:
        'assets/images/chicken.jpg',
      ingredients: ['Chicken', 'Wine', 'Onions-Garlic', 'Mushroom', 'Butter-Cream', 'Herbs', 'Lemon'],
    }
  ];

  constructor() {}

  // ... (spreade operator) will give all the properties like all elements , fields


  getAllRecipies() {
    return [...this.recipies];
  }

  // return {} mean return object (wrap selected recipe into object)
  // ... spread operator give all info of recipe like pic , ingedints  etc..
  getRecipie(recipieId: string) {
    return {
      ...this.recipies.find((recipe) => {
        return recipe.id === recipieId;
      }),
    };
  }

  deleteRecipie(recipieId: string) {
    this.recipies = this.recipies.filter(recipie =>
      {
        return recipie.id !== recipieId;
      });
  }
}
