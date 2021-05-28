import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
//Definimos dos propiedades, una que muestre el total y la otra un mensaje
  @Input() total: number=0;
  @Input() mensaje: string ='';


  constructor() { }
  ngOnInit(): void {
  }

}
