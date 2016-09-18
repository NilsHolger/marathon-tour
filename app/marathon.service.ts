import { Injectable } from '@angular/core';

import { Marathon } from './marathon';
import { MARATHONS } from './mock-marathons';


@Injectable()
export class MarathonService{

    getMarathons(): Promise<Marathon[]> {
            return Promise.resolve(MARATHONS);
    }

    getMarathon(id : number): Promise<Marathon> {
        return this.getMarathons().then(marathons => marathons.find(marathon => marathon.id === id));
    }

    getMarathonsSlowly(): Promise<Marathon[]> {
        return new Promise<Marathon[]>(resolve =>
        setTimeout(resolve, 5000))
        .then(() => this.getMarathons());
    }
}