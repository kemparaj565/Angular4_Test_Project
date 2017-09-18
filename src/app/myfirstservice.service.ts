import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 


@Injectable()
export class MyfirstserviceService {

  constructor(private httpService: Http) { }

  fetchData(){
  return this.httpService.get('src/data/student.json').map(response => response.json()).subscribe((data) => console.log(data))

  }

  obj={
  id:1,
  name:'Shiva',
  rollno:'555'
  }

  success(){
  return "successful";
  }

}
