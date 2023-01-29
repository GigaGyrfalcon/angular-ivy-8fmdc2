import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { EmailCounterComponent } from './components/email-counter/email-counter.component';

@NgModule({
  imports: [BrowserModule, FlexLayoutModule, MatIconModule, MatButtonModule, MatBadgeModule],
  declarations: [AppComponent, EmailCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
