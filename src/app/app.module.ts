import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairsCardsComponent } from './shared/components/fairs-cards/fairs-cards.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairsCardsComponent,
    FairsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
