import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ToDoListComponent implements OnInit {
    @ViewChildren(TaskComponent)
    produtItem: QueryList<TaskComponent>;

    products: Task[];
    name: string;
    description: string;
    
  constructor() {
      this.products = [];
  }

  ngOnInit() {}
  selectedProduct(productComponent: TaskComponent,index) {
      this.produtItem.forEach(p => {
          p.isSelected = false;
      });
      productComponent.isSelected = true;
      this.products.splice(index,1);
    }
    
    toAdd(){
      this.products.push({
        id: 0,
        name: this.name,
        description: this.description
      });
    }
    
}


