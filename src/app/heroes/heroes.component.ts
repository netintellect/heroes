import { Component, OnInit } from '@angular/core';
import {Hero} from './heroes.model';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //#region state
  public hero: Hero
  //#endregion

  //#region behavior
  constructor() { }

  ngOnInit() {
    this.hero = new Hero(1, 'Windstorm');
  }
  //#endregion
}
