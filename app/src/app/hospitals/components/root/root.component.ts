import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

@Component({
  selector: 'bh-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(map(links => links.filter(l => l.route.startsWith('/hospitals'))));

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }

}
