package com.rajan13.todo.restfulwebservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rajan13.todo.restfulwebservices.entity.Todo;
import com.rajan13.todo.restfulwebservices.service.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@GetMapping("/users/{username}/todos")
	private List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();
	}

	@GetMapping("/users/{username}/todos/{id}")
	private Todo getTodos(@PathVariable String username, @PathVariable Long id) {
		return todoService.findById(id);
	}

	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
		Todo todo = todoService.deleteById(id);
		if (null != todo) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable Long id,
			@RequestBody Todo todo) {
		Todo updatedTodo = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,
			@RequestBody Todo todo) {
		Todo createdTodo = todoService.save(todo);
		URI uri =ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}

}
