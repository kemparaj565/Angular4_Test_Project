import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MyfirstserviceService } from './myfirstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Shiva';
  
  constructor(private firstService:MyfirstserviceService){

  }


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

  

  form;

  ngOnInit(){

  console.log(this.firstService.success());
  
  console.log(this.firstService.obj);

this.form= new FormGroup({
      firstname:new FormControl("Shiva"), // Loading default values for constructor
      lastname:new FormControl(),
      languages:new FormControl(),


  })

  }
  onSubmit=function(user){
  console.log(user);
  }

}
