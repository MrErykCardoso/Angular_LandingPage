import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1-intro/comp1.component';
import { Comp2Component } from './components/comp2-top3/comp2.component';
import { TopNavComponent } from './components/comp0-topNav/top-nav.component';
import { Comp5Component } from './components/comp5-contact/comp5.component';
import { Comp3Component } from './components/comp3-gallery/comp3.component';
import { Comp4Component } from './components/comp4-work/comp4.component';
import { Comp6Component } from './components/comp6-footer/comp6.component';
import { Comp00Component } from './components/comp00-top3job/comp00.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    TopNavComponent,
    Comp5Component,
    Comp3Component,
    Comp4Component,
    Comp6Component,
    Comp00Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
