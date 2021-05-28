import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //Definios que vamos a centralizar los datos
  items:Item [] = [];
  //Para getTotal
  total:number=0;

  //Hacemos una inyección
  constructor(private itemService: ItemService) { }

  //Creamos el componente dentro del ciclo de vida en angular
  ngOnInit(): void {  
    this.items= this.itemService.getItems();
    this.getTotal();
  }

deleteItem(item:Item){
  //La función *filter* regresa todos los elementos que su id 
  //sea diferente al id que se esta recibiendo 
this.items=this.items.filter(x => x.id != item.id);
this.getTotal();
  }

toggleItem(item:Item){
this.getTotal();

  }

//Función que nos permite modificar una variable-*total*
  getTotal(){
this.total = this.items
            //Encontramos los elementos
            .filter(item => !item.completed)
            //Realizamos la operación de precio con cantidad y acumulamos el total
            .map(item => item.quantity * item.price)
            .reduce((acc, item) => acc += item, 0);

            console.log(this.total);
            }
}
