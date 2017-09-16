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

  decimalChanged=function(oldValue,newValue){
  console.log(newValue);
  }

}
