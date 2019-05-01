import { Component, Input } from '@angular/core';
import { Startup } from './../../models/startup.model';

@Component({
  selector: 'app-card-startup',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class StartupCardComponent {
  @Input() data: Startup;

  activeTab: Number = 0;

  changeTab = (newTab: Number) => {
    this.activeTab = newTab;
  } 
}
