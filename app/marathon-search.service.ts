import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Marathon } from './marathon';


@Injectable()
export class MarathonSearchService {

    private marathonUrl = 'https://marathon-tour.firebaseio.com/.json';

    constructor(private http: Http) {

    }

    search(term: string): Observable<Marathon[]> {

        return this.http.get(this.marathonUrl)
            .map((r: Response) => r.json() as Marathon[])
            .map((marathons: Array<any>) => {
                let result: Array<Marathon> = [];
                if (marathons) {
                    console.log(marathons);
                    console.log(term);
                    let keyArr: any[] = Object.keys(marathons),
                        dataArr: Array<Marathon> = [];
                    keyArr.forEach((key: any) => {
                        dataArr.push(marathons[key]);
                    });
                    var searchTerm = term,
                        index = -1;
                    for (var i = 0, len = dataArr.length; i < len; i++) {
                        if (dataArr[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            result.push(dataArr[i]);
                        }
                    }
                }

                return result;
            })
    };

}