import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Marathon } from './marathon';
import { MarathonService } from './marathon.service';
import { MarathonFirebaseService } from './marathon.firebase.service';


@Component({
    selector: 'my-marathon-detail',
    templateUrl: './app/marathon-detail.component.html',
    styleUrls: ['./app/marathon-detail.component.css']
})
export class MarathonDetailComponent implements OnInit{
    @Input()
    marathons: Marathon[];
    marathon: Marathon;
    id: number;
    ngOnInit() : void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
            this.marathonFirebaseService.getAllMarathons().then(marathons => this.marathons = marathons);
        });
    }

    constructor(private marathonService : MarathonService, private route : ActivatedRoute,
    private marathonFirebaseService: MarathonFirebaseService){

    }
    save():void {
        //this.marathonFirebaseService.update(this.marathon)
        //.then(this.goBack());
        this.goBack();
    }
    goBack() : void {
        window.history.back();
    }


}