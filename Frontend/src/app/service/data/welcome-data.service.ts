import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpService:HttpClient) { }


  executeHelloWorldBean(){
    return this.httpService.get<HelloWorldBean>("http://localhost:8080/helloworld-bean");
  }

  executeHelloWorlWithPathVar(name){
    return this.httpService.get<HelloWorldBean>(`http://localhost:8080/helloworld-bean/${name}`);
  }

}


export class HelloWorldBean{
  constructor(public message:string){}
}