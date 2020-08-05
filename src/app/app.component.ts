import { Component, VERSION ,OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'my-app', 
  templateUrl:'./app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //constructor(private i:ElementRef){}
  obj2: HTMLElement;
  won = true;
  getObj(obj){
    this.obj2 = obj;
  }

  changeValue(obj1,obj2){
    let pos1 = obj1.innerHTML;
    let pos2 = obj2.innerHTML;
    obj1.innerHTML = pos2; 
    obj2.innerHTML = pos1;  
    this.obj2 = obj1;
  }
  sendObj(obj1){
    try{
    let pos1 = Number.parseInt(obj1.getAttribute('value'));
    let pos2 = Number.parseInt(this.obj2.getAttribute('value'));
    //console.log(pos1+" "+pos2);
    if(pos1>3 && (pos1-3 == pos2)){
      //console.log('a');
      this.changeValue(obj1,this.obj2);
    }
    if(pos1%3!=1 &&(pos1-1 == pos2)){
      this.changeValue(obj1,this.obj2);
      //console.log('b');
    }
    if(pos1%3!=0 && (pos1+1 ==pos2)){
      this.changeValue(obj1,this.obj2);
      //console.log('c');
    }
    if((pos1<7) && (pos1+3 ==pos2)){
      //console.log('d');
      this.changeValue(obj1,this.obj2);
      
    }
    }
    catch(Exception){
    }
  }
  checkItIsWon(tag1,tag2,tag3,tag4,tag5,tag6,tag7,tag8){
    if(tag1.innerHTML==1 && tag2.innerHTML==2 && tag3.innerHTML==3 &&
    tag4.innerHTML==4 && tag5.innerHTML==5 && tag6.innerHTML==6 &&
    tag7.innerHTML==7 && tag8.innerHTML==8)
      this.won =  false;
    else
    this.won =  true;

}
}