import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { timer, Subscription, count } from 'rxjs';

import { TASK } from '../mock-task';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;
 
  public taskVenc: boolean = false;

  public taskAlert: boolean = false;
  
  faTimes = faTimes;
  faPen = faPen;

  count : number = 3;

  

  constructor() { }

  ngOnInit(): void {
    
   let fecha = new Date(this.task.day);
  
   let diff = fecha.getTime() - new Date().getTime();

   let aviso = diff - 300000;

   if (diff < 0){
    
    this.taskVenc = true;
    
    if(this.task.reminder){
      this.onToggleReminder.emit(this.task)
    }
    
   } else {
    const alerta = timer(aviso);
    const vencer = timer(diff);
    
    const subscribe = alerta.subscribe(x => {
      this.taskAlert = true;
      console.log(this.taskAlert);
    })

    const sub = vencer.subscribe(x => {
      this.taskVenc = true;
      this.taskAlert = false;
    })

    if(diff < 300000){
      this.taskAlert = true;
    }

   }


   console.log(diff);
   console.log(this.taskAlert);


  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    if(!this.taskVenc){
      this.onToggleReminder.emit(task);
    }
  }




}
