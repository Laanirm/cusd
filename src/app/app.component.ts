import { Component } from '@angular/core';
import { ViewService } from './services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ViewService]
})
export class AppComponent {
  title = 'app';
  activeView: Number = 0;

  /* Filter Overlay Management */
  startupFilterStatus: Boolean = false;
  peopleFilterStatus: Boolean = false;
  filterModel: String;

  constructor(private viewService: ViewService) {
    this.viewService.getView().subscribe((changedView) => {
      this.activeView = changedView;
    })

    this.viewService.getStartupFilterStatus().subscribe((status) => {
      this.startupFilterStatus = status;
      /* Set model to startup if status is true */
      if (this.startupFilterStatus)
        this.filterModel = "startup";
    })

    this.viewService.getPeopleFilterStatus().subscribe((status) => {
      this.peopleFilterStatus = status;
      /* Set model to people if status is true */
      if (this.peopleFilterStatus)
        this.filterModel = "people"
    })
  }

  changeView = (newView: Number) => {
    this.viewService.updateView(newView);
  }
}
