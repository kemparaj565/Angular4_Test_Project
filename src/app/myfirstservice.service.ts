import { Injectable } from '@angular/core';


@Injectable()
export class MyfirstserviceService {

  constructor() { }

  obj={
  id:1,
  name:'Shiva',
  rollno:'555'
  }

  success(){
  return "successful";
  }

}
