import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDoListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  @ViewChild('productList',{static:true})
  productList: ToDoListComponent;

  title: string;

ngOnInit(): void {
  this.productList.products = [
    {
      id: 1,
      name:'Wakeup',
      description:'Getup from Bed'
    },
    {
      id:2,
      name:'Breakfast',
      description:'Eat Morning Meal'
    },
    { id:3,
      name:'Exercise',
      description:'Run for 40 mins'
    }
  ];
}
constructor () {}
}
