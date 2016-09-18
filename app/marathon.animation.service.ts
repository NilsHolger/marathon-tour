import { Injectable } from '@angular/core';

class Marathon {
  constructor(public name: string,
              public state = 'inactive') {
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

let ALL_MARATHONS = [
  'Berlin',
  'Frankfurt',
  'Karlsruhe',
  'Hannover',
  'Freiburg',
  'New York',
  'Los Angeles',
  'London',
  'Paris',
  'Tokio',
  'Sydney'
].map(name => new Marathon(name));

@Injectable()
export class Marathons implements Iterable<Marathon> {

  currentMarathons: Marathon[] = [];

  [Symbol.iterator]() {
    return this.currentMarathons.values();
  }

  canAdd() {
    return this.currentMarathons.length < ALL_MARATHONS.length;
  }

  canRemove() {
    return this.currentMarathons.length > 0;
  }

  addActive() {
    let marathon = ALL_MARATHONS[this.currentMarathons.length];
    marathon.state = 'active';
    this.currentMarathons.push(marathon);
  }

  addInactive() {
    let marathon = ALL_MARATHONS[this.currentMarathons.length];
    marathon.state = 'inactive';
    this.currentMarathons.push(marathon);
  }

  remove() {
    this.currentMarathons.splice(this.currentMarathons.length - 1, 1);
  }

}