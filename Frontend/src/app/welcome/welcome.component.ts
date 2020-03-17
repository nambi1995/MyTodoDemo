import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name='';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
    console.log('Param value',this.activatedRoute.snapshot.params['name']);
  }

}
