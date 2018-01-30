import { Component, OnInit } from '@angular/core';
//导入类
import {Hero} from '../hero';

// import {HEROES} from '../mock-heroes';

import {HeroService} from '../service/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  hero1 = 'meme';

  // 使用类
  hero:Hero = {
  	id:1,
  	name:'meme'
  };

  // heroes = HEROES;
  heroes:Hero[];

  selectedHero:Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    console.log(hero);
  }

  getHeroes():void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }

  // 创建组件后立即执行的函数
  ngOnInit() {
    this.getHeroes();
  }

}
