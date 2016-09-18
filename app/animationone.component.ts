import { Component, OnInit } from '@angular/core';

import { Marathon } from './marathon';
import { MarathonService } from './marathon.service';



@Component({
    selector: 'my-animationone',
    templateUrl: 'app/animationone.component.html'
})
export class AnimationOneComponent implements OnInit{

    marathons: Marathon[] = [];

    constructor(private marathonService : MarathonService){}

    ngOnInit() : void {
        this.marathonService.getMarathons().then(marathons => this.marathons = marathons)
    }

    gotoDetail(marathon: Marathon): void{

    } 

}