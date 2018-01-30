import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';

import {MessageService} from '../service/message/message.service';




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

  constructor(private messageService:MessageService) { }

  // 返回数据的方法
  // getHeroes():Hero[]{
  	// console.log(HEROES);
  	// return HEROES;
  // }


  getHeroes():Observable<Hero[]>{
  	this.messageService.add('HeroService:fetched heroes.');
  	return of(HEROES);
  }

}
