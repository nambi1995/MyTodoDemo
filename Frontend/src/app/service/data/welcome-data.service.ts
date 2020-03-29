import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpService:HttpClient) { }


  executeHelloWorldBean(){
    return this.httpService.get<HelloWorldBean>("http://localhost:8080/helloworld-bean");
  }

  executeHelloWorlWithPathVar(name){
    // let basicAuthHeaderStr = this.createHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization : basicAuthHeaderStr
    // })
    return this.httpService.get<HelloWorldBean>(`http://localhost:8080/helloworld-bean/${name}`);
  }

  // createHttpHeader(){
  //   let username = 'nambi'
  //   let password = 'nambi'
  //   let basicAuthHeaderString = 'Basic '+window.btoa(username+':'+password)
  //   return basicAuthHeaderString;
  // }

}


export class HelloWorldBean{
  constructor(public message:string){}
}