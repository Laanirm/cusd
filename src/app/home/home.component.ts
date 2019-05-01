import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor() {}

    @Output() viewChanged: EventEmitter<Number> = new EventEmitter();
    changeView = (view: Number) => {
        this.viewChanged.emit(view);
    }

}
