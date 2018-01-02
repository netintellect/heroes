import {Component, Inject, OnInit} from '@angular/core';
import {Hero} from './heroes.model';
import {HEROES_SERVICE} from '../app.module';
import {HeroesService, IHeroesService} from './heroes.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //#region state
  public hero: Hero
  private heroesService: IHeroesService;
  //#endregion

  //#region behavior
  constructor(@Inject(HEROES_SERVICE) heroesService: IHeroesService) {
    this.heroesService = heroesService;
  }

  ngOnInit() {
    this.hero = new Hero(1, 'Windstorm');
  }
  //#endregion
}
