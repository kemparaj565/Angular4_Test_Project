import { Component, OnInit } from '@angular/core';
import { MyfirstserviceService } from './../myfirstservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private fService:MyfirstserviceService) { }

  ngOnInit() {
  this.fService.obj.name="Shambo";
  console.log(this.fService.obj.name);
  }

}
