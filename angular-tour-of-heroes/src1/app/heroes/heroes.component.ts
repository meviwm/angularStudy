import { Component, OnInit } from '@angular/core';
//导入类
import {Hero} from '../hero';

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

  // 创建组件后立即执行的函数
  ngOnInit() {

  }

}
