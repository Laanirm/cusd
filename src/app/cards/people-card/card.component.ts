import { Component, Input } from '@angular/core';
import { People } from './../../models/people.model';

@Component({
  selector: 'app-card-people',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class PeopleCardComponent {
  @Input() data: People;
}
