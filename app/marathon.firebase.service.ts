import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

//import { Firebase } from 'firebase';

import { Marathon } from './marathon';
import { MARATHONS } from './mock-marathons';


@Injectable()
export class MarathonFirebaseService {

    private marathonUrl = 'https://marathon-tour.firebaseio.com/.json';
    constructor(private http: Http) {

    }

    getAllMarathons(): Promise<Marathon[]> {
        return this.http.get(this.marathonUrl)
            .toPromise()
            .then(response => response.json() as Marathon[])
            .catch(this.handleError);

    }
    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(marathon: Marathon): Promise<Marathon> {
        return this.http
            .post(this.marathonUrl, JSON.stringify(marathon), { headers: this.headers })
            .toPromise()
            .then(() => marathon)
            .catch(this.handleError);
    }
    delete(marathonID:any[]): Promise<void>{
        console.log('DELETE ' + marathonID);

         return this.http.delete(`https://marathon-tour.firebaseio.com/${marathonID}.json`)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);

        //https://marathon-tour.firebaseio.com/-KRuWJx6T97Eq1RdAyph.json

        //return null;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(id: number, name: string, description: string) : Promise<Marathon> {
        return this.http
            .post(this.marathonUrl, JSON.stringify({id: id, name: name, description: description}), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
        
    }

    // getMarathons(): Promise<Marathon[]> {
    //         return Promise.resolve(MARATHONS);
    // }

    // getMarathon(id : number): Promise<Marathon> {
    //     return this.getMarathons().then(marathons => marathons.find(marathon => marathon.id === id));
    // }

    // getMarathonsSlowly(): Promise<Marathon[]> {
    //     return new Promise<Marathon[]>(resolve =>
    //     setTimeout(resolve, 5000))
    //     .then(() => this.getMarathons());
    // }
}