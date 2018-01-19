import { Injectable } from '@angular/core';

import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';



@Injectable()

/*export class Hero {
	id : number;
	name : string;
}

export const HEROES: Hero[] = [
	{id:0,name:'me0'},
	{id:1,name:'me1'},
	{id:2,name:'me2'},
	{id:3,name:'me3'},
	{id:4,name:'me4'},
	{id:5,name:'me5'},
	{id:6,name:'me6'},
	{id:7,name:'me7'},
	{id:8,name:'me8'}
]*/

export class HeroService {

  constructor() { }

  // 返回数据的方法
  getHeroes():Hero[]{
  	return HEROES;
  }

}
