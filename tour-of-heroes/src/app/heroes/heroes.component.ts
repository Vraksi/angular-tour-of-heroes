import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  //vi kalder vores funktion på init fordi ellers er den tom, og skal sætte det op via en anden metode
  ngOnInit(): void {
    this.getHeroes();
  }

  // heroes er heroes er fra vores subscribe metode, og this.heroes bliver = vores return object af en observable
  // dette objekt bliver lagt i vores liste og kan dermed blive brugt af ngFor
  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}