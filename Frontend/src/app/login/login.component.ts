import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='nambi1302';
  password='nambi1302';
  invalid=false;
  constructor(private router:Router, private hardCodedAuthentication:HardcodedAuthenticationService) { }

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
}
