import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marathon } from './marathon';
import { MarathonFirebaseService } from './marathon.firebase.service';

@Component({
  selector: 'my-marathons',
  templateUrl: './app/marathons.component.html',
  styleUrls: ['./app/marathons.component.css']
})
export class MarathonsComponent implements OnInit {
  minimum: number = 100;
  maximum: number = 1000000;
  selectedMarathon: Marathon;
  marathons: Marathon[];

  ngOnInit(): void {
    this.getMarathons();
  }

  constructor(private router: Router, private marathonFirebaseService: MarathonFirebaseService) {

  }
  getMarathons(): void {
    this.marathonFirebaseService.getAllMarathons().then(marathons => this.marathons = marathons);
  }

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) { return; }
    this.marathonFirebaseService.create(this.getRandomNumber(), name, description)
      .then(marathon => {
        this.selectedMarathon = null;
      });
  }

  delete(marathon: Marathon): void {
    this.marathonFirebaseService.getAllMarathons().then(function (data) {
      console.log('ID ' + marathon.id);
      console.log('DELETE DATA ' + data);

      if (data === undefined || data === null) {
        return;
      }
      let keyArr: any[] = Object.keys(data),
        dataArr = [];
      keyArr.forEach((key: any) => {
        console.log(key);
        dataArr.push(key);
        dataArr.push(data[key]);

      });
      var foundArray = [];
      var searchTerm = marathon.id,
        index = -1;
      for (var i = 0; i < dataArr.length; i++) {
        if (foundArray.length === 1) { break; }
        for (var k = 0; k < dataArr.length; k++) {
          if (dataArr[k].id === searchTerm) {
            foundArray.push(dataArr[k - 1]);
            console.log(foundArray);
            break;
          }
        }
      }
    });

    // this.marathonFirebaseService.delete(foundArray)
    //   .then(() => {
    //     this.marathons = this.marathons.filter(m => m != marathon);
    //     if (this.selectedMarathon === marathon) { this.selectedMarathon === null; }
    //   });


  }



  onSelect(marathon: Marathon): void {
    this.selectedMarathon = marathon;
  }
  gotoDetail(id: number): void {
    this.router.navigate(['/detail', this.selectedMarathon.id]);
  }
  getRandomNumber() {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum;
  }

}
