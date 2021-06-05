import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task: Task | null = null; 
  @Output() edit = new EventEmitter<Task>();


  constructor() { }

  ngOnInit(): void {
  }

}
