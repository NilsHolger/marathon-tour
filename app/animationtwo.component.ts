import { Component, OnInit } from '@angular/core';

import { Marathon } from './marathon';
import { MarathonService } from './marathon.service';



@Component({
    selector: 'my-animationtwo',
    templateUrl: 'app/animationtwo.component.html'
})
export class AnimationTwoComponent implements OnInit{

    marathons: Marathon[] = [];

    constructor(private marathonService : MarathonService){}

    ngOnInit() : void {
        this.marathonService.getMarathons().then(marathons => this.marathons = marathons)
    }

    gotoDetail(marathon: Marathon): void{

    } 

}