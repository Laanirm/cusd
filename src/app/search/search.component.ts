import { Component, Input } from '@angular/core';
import { ViewService } from './../services/view.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'search';
  @Input() model: String;

  startupFilterList:Array<{filter: String, value: String}> = []; 
  peopleFilterList: Array<{filter: String, value: String}> = [];

  constructor(private viewService: ViewService) {
    this.startupFilterList = this.viewService.startupFilterList;
    this.viewService.startupFilterListUpdated.subscribe((updated) => {
      this.startupFilterList = this.viewService.startupFilterList;
    });

    this.peopleFilterList = this.viewService.peopleFilterList;
    this.viewService.peopleFilterListUpdated.subscribe((updated) => {
      this.peopleFilterList = this.viewService.peopleFilterList;
    });
  }

  discardFilter = () => {
    if (this.model === "startup")
      this.viewService.toggleStartupFilter();
    else if (this.model == "people")
      this.viewService.togglePeopleFilter();
  }

  startupFilters: Array<{
    "title": String,
    "input": String,
    "icon": String
  }> = [{
    "title": "All Fields",
    "input": "text",
    "icon": "fas fa-globe"
  },
  {
    "title": "Industry",
    "input": "select",
    "icon": "fas fa-industry"
  },
  {
    "title": "Name",
    "input": "text",
    "icon": "fas fa-font"
  },
  {
    "title": "Openings",
    "input": "select",
    "icon": "fas fa-clipboard-list"
  }];

  peopleFilters: Array<{
    "title": String,
    "input": String,
    "icon": String
  }> = [{
    "title": "All Fields",
    "input": "text",
    "icon": "fas fa-globe"
  },
  {
    "title": "Name",
    "input": "text",
    "icon": "fas fa-font"
  },
  {
    "title": "Skills",
    "input": "select",
    "icon": "fas fa-tools"
  }];

  addStartupFilter = () => {
    this.viewService.addStartupFilter({filter: "hello", value: "world"});
  }

  addPeopleFilter = () => {
    this.viewService.addPeopleFilter({filter: "hello", value: "people"});
  }
  


}
