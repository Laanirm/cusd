import { Component, Input, OnInit } from '@angular/core';
import { SheetsService } from './../services/sheets.service';
import { ViewService } from './../services/view.service';
import { People } from './../models/people.model';
import { Startup } from './../models/startup.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [SheetsService]
})
export class FeedComponent {
  
  @Input() view: Number;

  temporaryResponseBuffer: Array<Array<String>>;
  results: Array<any> = [];
  cachedStorage: Array<Array<any>>

  constructor(private sheetsService: SheetsService, private viewService: ViewService) {}

  ngOnInit() {

    /** Load People Sheet */
    this.sheetsService.retrieveResponses("1E3WX_i23FlH4EV9nNHHYsBpEiSHGRno60p-9vxf100A").subscribe((response) => {
      this.temporaryResponseBuffer = response["values"].filter((item, i) => ( i != 0));
      this.parseResponseValues("people", this.temporaryResponseBuffer);
      console.log(response);
    });

    /** @todo: Load Startup Sheet */
    this.sheetsService.retrieveResponses("16XK9ZXv96kFVXx5xsChGIwEvqZW9rdFlGDLky6Gowlk").subscribe((response) => {
      this.temporaryResponseBuffer = response["values"].filter((item, i) => ( i != 0));
      this.parseResponseValues("startup", this.temporaryResponseBuffer);
      console.log(response);
    });

  }

  parseResponseValues = (model, responseBuffer: Array<any>) => {
    if (model === "people") {
      responseBuffer.map((dataPoint) => {
        let person = new People(dataPoint);
        this.staticFeedData[2].data.push(person);
      })
    }

    if (model === "startup") {
      responseBuffer.map((dataPoint) => {
        let startup = new Startup(dataPoint);
        this.staticFeedData[1].data.push(startup);
      })
    }
  }

  convertViewToString = (view: Number) => {
    return view.toString();
  }


  staticFeedData: Array<{
    view: Number,
    icon: String,
    title: String,
    backgroundColor: String,
    description: String,
    sheetId: String,
    model: String,
    data: Array<any>,
    formLink: String,
  }> = [
    {
      "view": 0,
      "icon": "snowplow",
      "title": "Home",
      "backgroundColor": "#f46fad",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "sheetId": "",
      "model": "",
      "data": [],
      "formLink": ""
    },
    {
      "view": 1,
      "icon": "snowplow",
      "title": "Startups",
      "backgroundColor": "#f46fad",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "sheetId": "",
      "model": "startup",
      "data": [],
      "formLink": "https://docs.google.com/forms/u/2/d/1KQsah8sOWzk5UZi9Yiv3PI7o6Qrv_UKH7GioRHuJV0g/edit?usp=drive_web"
    },
    {
      "view": 2,
      "icon": "address-book",
      "title": "People",
      "backgroundColor": "#44d46b",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "sheetId": "1wbi9G6zTspzhZK6fhACb0ZVNxuugkfXB9p6jvGds8oE",
      "model": "people",
      "data": [],
      "formLink": "https://docs.google.com/forms/u/2/d/19AYXK7puYLU7Keh1ATUTD9mpRF6MY-1TuaMDU1fsn-8/edit?usp=drive_web"
    },
    {
      "view": 3,
      "icon": "flask",
      "title": "Resources",
      "backgroundColor": "#44d4cf",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "sheetId": "",
      "model": "",
      "data": [],
      "formLink": ""
    }
  ]

  toggleFilter = (model) => {
    if (model == "startup")
      this.toggleStartupFilter();
    else if (model == "people")
      this.togglePeopleFilter();
    else
      console.log("Error: Invalid model filter requested");
  }

  toggleStartupFilter = () => {
    this.viewService.toggleStartupFilter();
  }

  togglePeopleFilter = () => {
    this.viewService.togglePeopleFilter();
  }


}
