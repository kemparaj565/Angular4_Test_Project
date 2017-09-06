import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Shiva';
  
  name='Shambo';
  
  obj={
  id:"1",
  name:"Shiva"
  
  };
  
  arr=["Shiva","is","Great"];
  
  isTrue="false";
  
  myName="Shiva";
  
  item=['Angular 4','React JS','Node JS'];
  
  newItem="";
  
  pushItem=function(){
  if(this.newItem !=""){
  this.item.push(this.newItem);
  this.newItem="";
  }

  }

  popItem=function(index){
    this.item.splice(index,1); //Remove element at index & remove 1 element only
  }

  day= new Date(2017,4,6);

  arrs=[3,1,5,9,4,8];

  onSubmit=function(user){
  console.log(user);
  }

}
