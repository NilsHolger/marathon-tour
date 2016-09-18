import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Marathon } from './marathon';
import { MarathonFirebaseService } from './marathon.firebase.service';

@Component({
    selector: 'my-dashbard',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['./app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    response: string;
    marathons: Marathon[] = [];
    constructor(private router: Router, private marathonFirebaseService: MarathonFirebaseService) { }

    ngOnInit(): void {
        this.marathonFirebaseService.getAllMarathons().then(marathons => this.marathons = marathons);
    }

    gotoDetail(marathon: Marathon): void {
        let link = ['/detail', marathon.id];
        this.router.navigate(link);
    }

}