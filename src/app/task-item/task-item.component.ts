import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-product-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  product: Task;

  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();
  
  isSelected: boolean;

  constructor() {}

  ngOnInit () {}

  select() {
     this.OnSelected.emit(this); 
     
  }
} 
