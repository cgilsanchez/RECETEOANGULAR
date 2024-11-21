import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'mail' },
    { title: 'Recetas', url: '/folder/recetas', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'star' },
    { title: 'Cerrar Sesión', url: '/folder/archived', icon: 'archive' },
    
    
  ];
  constructor() {}
}
