import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
    console.log('Param value', this.activatedRoute.snapshot.params['name']);
  }

  getWelcomeMessage() {
    console.log(this.dataService.executeHelloWorldBean());
    this.dataService.executeHelloWorldBean().subscribe(
      response => {
        console.log(response.message);
        this.welcomeMessageFromService = response.message;
      }
    );

    console.log('Last line')
  }

}
