import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { MarathonSearchService } from './marathon-search.service';
import { Marathon } from './marathon';
@Component({
  selector: 'marathon-search',
  templateUrl: 'app/marathon-search.component.html',
  styleUrls:  ['app/marathon-search.component.css'],
  providers: [MarathonSearchService]
})
export class MarathonSearchComponent implements OnInit {
  marathons: Observable<Marathon[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private marathonSearchService: MarathonSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.marathons = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.marathonSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Marathon[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Marathon[]>([]);
      });
  }
  gotoDetail(marathon: Marathon): void {
    let link = ['/detail', marathon.id];
    this.router.navigate(link);
  }
}
