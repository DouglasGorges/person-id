import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material';
import { PersonViewComponent } from './views/person/person-view/person-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatCardModule,

    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
