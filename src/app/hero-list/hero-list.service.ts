import {Injectable, OnInit} from '@angular/core';
import {Hero} from './hero-list.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from '../messages/message.service';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';


export interface IHeroesService {
  getHeroes(): Observable<Hero[]>;
  updateHero(hero: Hero): Observable<any>;
  getHero(id: number): Observable<Hero>;
  addHero(hero: Hero): Observable<Hero>;
  delete(hero: Hero | number): Observable<any>;
  searchHeroes(term: string): Observable<Hero[]>;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroesService  implements OnInit, IHeroesService {
  //#region
  private _state: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan'),
    new Hero(17, 'Dynama'),
    new Hero(18, 'Dr IQ'),
    new Hero(19, 'Magma'),
    new Hero(20, 'Tornado')
  ];
  private heroesUrl = 'api/heroes';
  //#endregion

  //#region behavior
  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  public getHeroes(): Observable<Hero[]> {
    this.log('Hero service: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('tapped heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  public getHero(id: number): Observable<Hero> {
    this.log(`HeroesService: fetched hero id=${id}`);
    // return of(this._state.find(h => h.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(hero => this.log(`fetched hero ${hero.id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((h: Hero) => this.log(`added hero with id=${h.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  public delete(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(() => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes'))
      );
  }

  private log(message: string) {
    this.messageService.add(`Hero Service: ${message}`);
  }

  protected handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.toString()}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //#endregion
}
