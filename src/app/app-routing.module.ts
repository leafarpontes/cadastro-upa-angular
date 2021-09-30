import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRoutes } from './cadastros';

export const router : Routes = [
  {
    path: '',
    redirectTo: '/cadastros/listar',
    pathMatch: 'full'
  },
  ...CadastroRoutes
];



@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
