import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'nambi1302';
  password = 'nambi1302';
  invalid = false;
  constructor(private router: Router,
    private hardCodedAuthentication: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }


  login() {
    if (this.hardCodedAuthentication.authenticate(this.username,this.password)) {
      this.invalid = false
      this.router.navigate(['welcome',this.username])
    } else {
      this.invalid = true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalid = false
      },
      error => {
        console.log(error);
        this.invalid = true
      }
    )
  }
}
