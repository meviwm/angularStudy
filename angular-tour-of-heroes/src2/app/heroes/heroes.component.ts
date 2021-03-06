import { Component, OnInit } from '@angular/core';
//导入类
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero1 = 'meme';

  // 使用类
  hero:Hero = {
  	id:1,
  	name:'meme'
  };

  heroes = HEROES;

  selectedHero:Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    console.log(hero);
  }

  // 创建组件后立即执行的函数
  ngOnInit() {

  }

}
