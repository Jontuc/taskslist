import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Mi Lista de Tareas';

  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
