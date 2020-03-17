import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id: number, public description: string, 
    public done: boolean, public target: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [

    new Todo(1, 'Learn SpringBoot', false, new Date()),
    new Todo(2, 'Learn Angular', true, new Date()),
    new Todo(3, 'Build Home', true, new Date()),
    new Todo(4, 'Visit Australia', true, new Date())

    // {id: 1, description: 'Learn to fight'},
    // {id: 2, description: 'Learn to drive'},
    // {id: 3, description: 'Get a job at Google'},
    // {id: 1, description: 'Visit Goa'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
