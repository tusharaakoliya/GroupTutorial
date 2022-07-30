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
      title: 'Schitih',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
      ingredients: ['peper', 'potato', 'milk'],
    },
    {
      id: 'r2',
      title: 'Sandwitch',
      imageUrl:
        'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      ingredients: ['peper', 'potato', 'cucumber', 'bread'],
    },
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
      }) ;
  }
}
