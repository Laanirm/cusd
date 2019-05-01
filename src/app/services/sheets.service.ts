import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SheetsService {

  constructor(private httpClient: HttpClient) {}

  retrieveFullSheet(sheetId: String) {
    return this.httpClient.get("https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "/values/Sheet1?majorDimension=ROWS&key=AIzaSyDVnIzPE9fJorsRVLctiwrQjkU5HlKTAeU");
  }

  retrieveResponses(sheetId: String) {
    return this.httpClient.get("https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "/values/Form Responses 1?majorDimension=ROWS&key=AIzaSyDVnIzPE9fJorsRVLctiwrQjkU5HlKTAeU");
  }


}