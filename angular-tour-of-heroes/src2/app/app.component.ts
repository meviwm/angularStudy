import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export:
// 定义了模块的对外接口
export class AppComponent {
  title = 'app';
  name = '雨林沐风';
}
