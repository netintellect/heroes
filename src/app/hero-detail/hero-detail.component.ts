import {Component, Input, OnInit} from '@angular/core';
import {Location} from  '@angular/common';
import {Hero} from '../hero-list/hero-list.model';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../hero-list/hero-list.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroesService]
})
export class HeroDetailComponent implements OnInit {
  //#region state
  @Input()public  hero: Hero;
  //#endregion

  //#region behavior
  constructor(private route: ActivatedRoute,
              private heroService: HeroesService,
              private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  private getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  //#endregion
}
