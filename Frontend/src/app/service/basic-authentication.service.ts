import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private httpService: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(null === user)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  executeJWTAuthenticationService(username, password) {
    return this.httpService.post<any>(`${API_URL}/authenticate`,{username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          return data
        }
      )
    );
  }


  executeAuthenticationService(username, password) {

    let basicAuthHeaderStr = 'Basic ' + window.btoa(username + ':' + password)

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderStr
    })
    return this.httpService.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers: header }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderStr)
          return data
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }
}


export class AuthenticationBean {
  constructor(public message: string) {
  }
}