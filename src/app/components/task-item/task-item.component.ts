import { Component, Input, OnInit} from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  
@Input() task: Task = {id:1,text:'',day:'',remainder:false};
  constructor() {
  }
  ngOnInit(): void {
    
  }
}
