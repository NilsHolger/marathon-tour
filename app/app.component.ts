import { Component } from '@angular/core';
//import { MarathonsComponent } from './app/marathons.component';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
title: string = 'Tour of Marathons, Powered by Angular 2 and Firebase';
}