import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-baseconverter',
  templateUrl: './baseconverter.component.html',
  styleUrls: ['./baseconverter.component.css']
})
export class BaseconverterComponent implements OnInit {

  constructor() { }

  form;

  ngOnInit() {
  this.form=new FormGroup({
  decimal: new FormControl(""),
  binary: new FormControl(""),
  hexa: new FormControl(""),
  octal: new FormControl("")
  });
  }

  b=0;
  h=0;
  o=0;

  decimalChanged=function(oldValue,newValue){
  //console.log(newValue);
  if(newValue!=""){
  this.form.patchValue({binary:parseInt(newValue,10).toString(2)});
  this.form.patchValue({octal:parseInt(newValue,10).toString(8)});
  this.form.patchValue({hexa:parseInt(newValue,10).toString(16).toUpperCase()});
  }
  else{
   this.form.patchValue({binary:oldValue});
  this.form.patchValue({octal:""});
  this.form.patchValue({hexa:""});
  }
  }

binaryChanged=function(oldValue,newValue){
	this.b=this.b +1;
	if(this.b==1){
	if(newValue!= ""){
	this.form.patchValue({decimal:parseInt(newValue,2).toString(10)});
	}
	else{
	this.form.patchValue({decimal:""});
	}
	this.b=0;
	}
	
}

octalChanged=function(oldValue,newValue){
	this.o=this.o+1;
	if(this.o==1){
	if(newValue!=""){
	this.form.patchValue({decimal:parseInt(newValue, 8).toString(10)});
	}
	else{
	this.form.patchValue({decimal:""});
	}
	this.o=0;
	}
	
}

hexaChanged=function(oldValue,newValue){
	this.h=this.h+1;
	if(this.h==1){
	if(this.h!=""){
	this.form.patchValue({decimal:parseInt(newValue,16).toString(10)});
	}
	else{
	this.form.patchValue({decimal:""});
	}
	this.h=0;
	}

}

}
