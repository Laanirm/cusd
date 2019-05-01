import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  
})
export class ResultsComponent {

  @Input() sheetId: String = "";
  @Input() model: String = "";
  @Input() data: Array<any> = [];

}
