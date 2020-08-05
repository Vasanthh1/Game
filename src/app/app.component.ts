import { Component, VERSION ,OnInit} from '@angular/core';

@Component({
  selector: 'my-app', 
  template:`
  <p>{{name}}</p>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  color = "r";
  cond = true;
  dat = "";
  name:string ='hai vasanth';
  getName(){return this.name;}
  save(data){this.dat = data;}
}
