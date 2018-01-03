import { Component, OnInit } from '@angular/core';
import {Hero} from './heroes.model';
import {HeroesService} from './heroes.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [ HeroesService ]
})
export class HeroesComponent implements OnInit {

  //#region state
  public selectedHero: Hero;
  public heroes: Hero[];
  //#endregion

  //#region behavior
  constructor(private heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes();
  }

  ngOnInit() {
    this.selectedHero = new Hero(1, 'Windstorm');
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //#endregion
}
