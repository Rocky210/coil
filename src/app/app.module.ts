import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoilComponent } from './coil/coil.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    CoilComponent,
    MainComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
