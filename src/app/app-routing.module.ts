import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { ItemsComponent } from './components/items/items.component';

//Especificamos las rutas
const routes: Routes = [
  {
    //Hace referencia al Index tradicional
    path: '',
    component: ItemsComponent
  },
  {
    //Hace referencia a *Agregar artículo nuevo*
    path: 'add',
    component: AdditemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
