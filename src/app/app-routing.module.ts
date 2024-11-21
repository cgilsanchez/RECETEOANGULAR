import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./folder/home/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./folder/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./folder/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'vistareceta',
    loadChildren: () => import('./folder/vistareceta/vistareceta.module').then( m => m.VistarecetaPageModule)
  },
  {
    path: 'addreceta',
    loadChildren: () => import('./folder/addreceta/addreceta.module').then( m => m.AddrecetaPageModule)
  },
  {
    path: 'cocineros',
    loadChildren: () => import('./folder/cocineros/cocineros.module').then( m => m.CocinerosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
