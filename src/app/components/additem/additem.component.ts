import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  id : number=0;
  title:string='';
  price:number=0;
  quantity:number=0;

//Haacemos una inyección
  constructor( private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }
//Creamos un nuevo elemento
onSubmit(){
const item= new Item();
item.id = this.id;
item.title= this.title;
item.price=this.price;
item.quantity=this.quantity;
item.completed=false;

this.itemService.addItem(item);
this.router.navigate(['/']);
  }
}
