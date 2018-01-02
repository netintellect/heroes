import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule} from '@angular/forms';
import { HeroesService, IHeroesService} from './heroes/heroes.service';


export let HEROES_SERVICE = new InjectionToken<IHeroesService>('heroes.service');

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ { provide: HEROES_SERVICE, useValue: HeroesService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
