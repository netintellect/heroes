import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero-list/hero-list.model';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //#region state
  @Input()public  hero: Hero;
  //#endregion

  //#region behavior
  constructor() { }

  ngOnInit() {
  }
  //#endregion
}
