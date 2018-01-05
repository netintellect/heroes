import { Component, OnInit } from '@angular/core';
import {Hero} from './hero-list.model';
import {HeroesService, IHeroesService} from './hero-list.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css'],
  providers: [ HeroesService ]
})
export class HeroListComponent implements OnInit {

  //#region state
  public selectedHero: Hero;
  public heroes: Hero[];
  //#endregion

  //#region behavior
  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.selectedHero = new Hero(1, 'Windstorm');

    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroesService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  public delete(hero: Hero): void {
    this.heroesService.delete(hero)
      .subscribe(() => {
        this.heroes = this.heroes.filter((h) => h !== hero);
      });
  }
  //#endregion
}
