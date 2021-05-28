import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

//Hacemos saber a este componente que va a recibir un objeto
@Input() item: Item = new Item();
//Evento que devuelve un objeto
@Output() deleteItem:EventEmitter<Item> = new EventEmitter;
//Evento que permite mandar la información a items.component.ts
@Output() toggleItem:EventEmitter<Item> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

//Método para eliminar un registro
onDelete(item :Item){
  this.deleteItem.emit(item);
}

//Método que recibe un elemento de tipo item para modificar el dato 
onToggle(item:Item){
  item.completed = !item.completed;
  this.toggleItem.emit(item);
}
}
