package com.rajan13.todo.restfulwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rajan13.todo.restfulwebservices.entity.Todo;

@Service
public class TodoService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static Long idCounter = 0L;

	static {
		todos.add(new Todo(++idCounter, "Nambi", "Learn DS", new Date(), false));
		todos.add(new Todo(++idCounter, "Rajan", "Learn Oracle", new Date(), false));
		todos.add(new Todo(++idCounter, "PN Rajan", "Learn Kubernate", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {

		Todo todo = findById(id);
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
