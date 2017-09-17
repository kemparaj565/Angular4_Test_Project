import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-formvalidations',
  templateUrl: './formvalidations.component.html',
  styleUrls: ['./formvalidations.component.css']
})
export class FormvalidationsComponent implements OnInit {

  constructor() { }

form;
  ngOnInit() {
  this.form=new FormGroup({
  firstname: new FormControl("",Validators.compose([
  Validators.required,
  Validators.minLength(3),
  Validators.pattern('[\\w\\-\\s/]+')
  ])),
lastname:new FormControl(""),
languages:new FormControl("")
  }); 
}

textValidator(control){
	if(control.value.length<3){
	return{'lastname':true};
	}
}

onSubmit=function(user){
	console.log(user);
}

}
