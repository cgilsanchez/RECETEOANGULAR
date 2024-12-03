import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform) {}

  // Redirige a la página de Recetas
  goToRecipes() {
    this.router.navigate(['/recipes']);
  }

  // Redirige a la página de Cocineros
  goToCooks() {
    this.router.navigate(['/cooks']);
  }

  // Redirige a la página de Favoritos
  goToFavorites() {
    this.router.navigate(['/favorites']);
  }

  // Cierra la sesión y redirige al login
  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión
    // Ejemplo: borrar token de autenticación, etc.
    this.router.navigate(['/login']);
  }
}
