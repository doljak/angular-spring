import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  hobby;

  @Input() name:string;
  @Output() changeHobby:EventEmitter<string> = new EventEmitter()

  constructor() { }
  
  ngOnInit() {
  }

  keyUp(e:any){
    console.log('keyUo hobby: '+ e.srcElement.value);
  }

  changingHobby(e){
    this.changeHobby.emit(e)
  }

}
