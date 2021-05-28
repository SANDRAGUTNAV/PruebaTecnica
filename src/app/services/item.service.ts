import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'Pan',
      price: 5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'Salsa de botella',
      price: 11.50,
      quantity: 8,
      completed: true
    },
    {
      id: 3,
      title: 'Botella de agua',
      price: 14,
      quantity: 4,
      completed: false
    },
    {
      id: 5,
      title: 'Papel higiénico',
      price: 10,
      quantity: 7,
      completed: false
    }
  ];
  constructor() { }


  //Creamos la función que nos regresa los datos
  getItems() {

    return this.items;
  }

  addItem(item: Item) {
    //Unshift nos agrega un elemmento al inicio 
    this.items.unshift(item);

  }
}
