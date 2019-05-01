import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ViewService {

  constructor() { }

  activeView: Subject<Number> = new Subject();
  viewMap: Array<{
      viewNumber: Number,
      viewName: String
  }> = [
    {
        "viewName": "Home",
        "viewNumber": 0
    },
    {
        "viewName": "Startups",
        "viewNumber": 1
    },
    {
        "viewName": "Students",
        "viewNumber": 2
    },
    {
        "viewName": "Resources",
        "viewNumber": 3
    },
    {
        "viewName": "About",
        "viewNumber": 4
    }
    ]

  getView = () => {
      return this.activeView.asObservable();
  }

  updateView = (newView: Number) => {
      this.activeView.next(newView);
  }

  /** Functionality to trigger startup search overlay */
  startupFilterIsActive: Subject<Boolean> = new Subject();
  startupFilterLastActivity: Boolean = false;
  startupFilterListUpdated: Subject<Boolean> = new Subject();
  startupFilterList: Array<{filter: String, value: String}> = [];

  toggleStartupFilter = () => {
    this.startupFilterLastActivity = !this.startupFilterLastActivity;
    this.startupFilterIsActive.next(this.startupFilterLastActivity)
  }

  getStartupFilterStatus = () => {
      return this.startupFilterIsActive.asObservable();
  }

  addStartupFilter = (data: {filter: String, value: String}) => {
    this.startupFilterList.push(data);
    this.startupFilterListUpdated.next(true);
  }

  /** Functionality to trigger people search overlay */
  peopleFilterIsActive: Subject<Boolean> = new Subject();
  peopleFilterLastActivity: Boolean = false;
  peopleFilterListUpdated: Subject<Boolean> = new Subject();
  peopleFilterList: Array<{filter: String, value: String}> = [];

  togglePeopleFilter = () => {
    this.peopleFilterLastActivity = !this.peopleFilterLastActivity;
    this.peopleFilterIsActive.next(this.peopleFilterLastActivity)
  }

  getPeopleFilterStatus = () => {
      return this.peopleFilterIsActive.asObservable();
  }

  addPeopleFilter = (data: {filter: String, value: String}) => {
    this.peopleFilterList.push(data);
    this.peopleFilterListUpdated.next(true);
  }

  








}