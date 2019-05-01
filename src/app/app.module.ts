import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { CardComponent } from './card/card.component';
import { StartupCardComponent } from './cards/startup-card/card.component';
import { PeopleCardComponent } from './cards/people-card/card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedComponent,
    SearchComponent,
    ResultsComponent,
    CardComponent,
    HomeComponent,
    StartupCardComponent,
    PeopleCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
