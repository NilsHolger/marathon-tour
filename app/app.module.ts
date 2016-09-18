import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  './rxjs-extensions';
import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { MarathonsComponent } from './marathons.component';
import { MarathonDetailComponent } from './marathon-detail.component';
import { MarathonService } from './marathon.service';
import { MarathonFirebaseService } from './marathon.firebase.service';
import { MarathonSearchService } from './marathon-search.service';
import { Marathons } from './marathon.animation.service';
import { DashboardComponent } from './dashboard.component';
import { MarathonSearchComponent } from './marathon-search.component';
import { AnimationShowComponent } from './animationshow.component';
import { AnimationComponent } from './animation.component';
import { AnimationOneComponent } from './animationone.component';
import { AnimationTwoComponent } from './animationtwo.component';
import { ValuesPipe } from './app.valuepipe';
import { FilterPipe } from './app.filterpipe';
import { ReduceCharactersPipe } from './app.reducecharacterspipe';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ValuesPipe, FilterPipe, ReduceCharactersPipe, DashboardComponent, AnimationShowComponent ,MarathonsComponent, MarathonDetailComponent, MarathonSearchComponent, AnimationComponent, AnimationOneComponent, AnimationTwoComponent ],
  providers: [MarathonService, MarathonFirebaseService, MarathonSearchService, Marathons],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
