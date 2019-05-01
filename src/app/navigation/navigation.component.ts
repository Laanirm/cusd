import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() view: Number;
  @Output() viewChanged: EventEmitter<Number> = new EventEmitter();

  changeView = (view: Number) => {
    this.viewChanged.emit(view);
  }

}
