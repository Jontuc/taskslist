import { Component, Input, OnInit } from '@angular/core';
import { TASK } from '../mock-task';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0];

  constructor() { }

  ngOnInit(): void {
  }

}
