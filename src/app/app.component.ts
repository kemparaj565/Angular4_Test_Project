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
}
