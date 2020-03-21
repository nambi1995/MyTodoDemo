import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string,
    public done: boolean, public targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  // [

  // new Todo(1, 'Learn SpringBoot', false, new Date()),
  // new Todo(2, 'Learn Angular', true, new Date()),
  // new Todo(3, 'Build Home', true, new Date()),
  // new Todo(4, 'Visit Australia', true, new Date())

  // ]
  constructor(private todoService: TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.getAllTodos('user').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  message: string;
  deleteTodo(id:any) {
    this.todoService.deleteTodo('nambi', id).subscribe(
      response => {
        this.message = `Delete of ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:any) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

}
