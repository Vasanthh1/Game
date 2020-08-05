import { Component, VERSION ,OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'my-app', 
  templateUrl:'./app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private i:ElementRef){}
  
  s(obj){
    console.log('hello');
    console.log(obj);
  }
}
