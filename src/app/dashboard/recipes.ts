import { Service } from '@angular/core';
import { Recipent } from './recipent.model';

@Service()
export class Recipes {
  private listOfRecipents: Recipent[] = [
    {
      id: '1',
      title: 'Recipe 1',
      imageUrl: 'https://placehold.co/100x100?text=Hello+World',
      ingredients: ['ingredient1', 'ingredient2'],
    },
    {
      id: '2',
      title: 'Recipe 2',
      imageUrl: 'https://placehold.co/100x100?text=Hello+World',
      ingredients: ['ingredient3', 'ingredient4'],
    },
    {
      id: '3',
      title: 'Recipe 3',
      imageUrl: 'https://placehold.co/100x100?text=Hello+World',
      ingredients: ['ingredient5', 'ingredient6'],
    },
  ];
  getRecipents() {
    return [...this.listOfRecipents];
  }
  addRecipent(recipent: Recipent) {
    //check if recipent already exists
    if (this.listOfRecipents.find((r) => r.id === recipent.id)) {
      return;
    }
    this.listOfRecipents.push(recipent);
  }
  updateRecipent(recipent: Recipent) {
    const index = this.listOfRecipents.findIndex((r) => r.id === recipent.id);
    if (index !== -1) {
      this.listOfRecipents[index] = recipent;
    }
  }
  deleteRecipent(recipentId: string) {
    this.listOfRecipents = this.listOfRecipents.filter(
      (r) => r.id !== recipentId,
    );
  }
    getRecipentById(recipentId: string): Recipent | undefined {
    return this.listOfRecipents.find((r) => r.id === recipentId);
    }
}
