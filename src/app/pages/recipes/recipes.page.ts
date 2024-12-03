import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.css'],
})
export class RecipesPage {
  recipes = [
    { id: 1, name: 'Tortilla de Patatas', favorite: false },
    { id: 2, name: 'Paella', favorite: true },
    { id: 3, name: 'Gazpacho', favorite: false },
  ];

  constructor(private router: Router) {}

  goToRecipeDetails(recipeId: number) {
    this.router.navigate(['/recipe', recipeId]);  // Redirige a la página de detalles de la receta
  }

  toggleFavorite(recipe: any) {
    recipe.favorite = !recipe.favorite;
  }
}
