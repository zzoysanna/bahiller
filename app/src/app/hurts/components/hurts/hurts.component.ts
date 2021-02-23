import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

@Component({
  selector: 'bh-hurts',
  templateUrl: './hurts.component.html',
  styleUrls: ['./hurts.component.scss']
})
export class HurtsComponent implements OnInit {
  // links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(map(links => links.filter(l => l.route.startsWith('/hurts'))));

  constructor(
    private scully: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    // debug current pages
    // this.links$.subscribe((links) => {
    //   console.log(links);
    // });
  }

}
