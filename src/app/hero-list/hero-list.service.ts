import {Injectable, OnInit} from '@angular/core';
import {Hero} from './hero-list.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


export interface IHeroesService {
  getHeroes(): Observable<Hero[]>;
}

@Injectable()
export class HeroesService  implements OnInit, IHeroesService {
  //#region behavior
  constructor() { }

  ngOnInit(): void {
  }

  getHeroes(): Observable<Hero[]> {
    return of([
      new Hero(11, 'Mr. Nice'),
      new Hero(12, 'Narco'),
      new Hero( 13, 'Bombasto'),
      new Hero( 14,  'Celeritas'),
      new Hero(15, 'Magneta' ),
      new Hero(16, 'RubberMan'),
      new Hero(  17, 'Dynama'),
      new Hero( 18, 'Dr IQ' ),
      new Hero( 19, 'Magma' ),
      new Hero( 20, 'Tornado' )
    ]);
  }
  //#endregion
}
