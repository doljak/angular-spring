import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  name;

  isDisabled:boolean = false;
  isHidden:boolean = false;
  isUpperCase:boolean = true;
  isDarkTheme:boolean = false;

  click(e){
    console.log(e)
  }

  mouseOver(e){
    console.log(e)
  }

  keyUp(e){
    console.log(e)
    this.name = e.srcElement.value
  }
}
