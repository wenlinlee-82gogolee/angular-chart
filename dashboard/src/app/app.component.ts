

import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Dashboard';
  line = true;
  bar = true;
  pie = true;
  radar = true;


  lineChangeNotice() {
    console.log('line changed!!!')
  }
}
