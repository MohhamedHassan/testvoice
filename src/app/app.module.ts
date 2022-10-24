import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
