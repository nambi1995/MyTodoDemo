package com.rajan13.todo.restfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rajan13.todo.restfulwebservices.bean.TodoBean;
import com.rajan13.todo.restfulwebservices.service.TodoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/users/{username}/todos")
	private List<TodoBean> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")	
	public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable Long id){
		TodoBean todo = todoService.deleteById(id);
		if(null != todo) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

}
