import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class RecipeDetailsPage implements OnInit {
  recipeId: number | undefined;
  recipe: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeId = +params['id'];  // Obtiene el ID de la receta desde la URL
      this.fetchRecipeDetails(this.recipeId);
    });
  }

  fetchRecipeDetails(id: number) {
    // Simula los datos de la receta, en tu caso harías una consulta a la API
    const allRecipes = [
      { id: 1, name: 'Tortilla de Patatas', ingredients: 'Huevos, Patatas, Cebolla', description: 'Fría las patatas y mezcle con los huevos.' },
      { id: 2, name: 'Paella', ingredients: 'Arroz, Mariscos, Caldo', description: 'Cocine el arroz con caldo y mariscos.' },
    ];

    this.recipe = allRecipes.find((recipe) => recipe.id === id);
  }
}
