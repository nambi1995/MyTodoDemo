package com.rajan13.todo.restfulwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rajan13.todo.restfulwebservices.bean.TodoBean;

@Service
public class TodoService {

	private static List<TodoBean> todos = new ArrayList<TodoBean>();
	private static long idCounter = 0;

	static {
		todos.add(new TodoBean(++idCounter, "Nambi", "Learn DS", new Date(), false));
		todos.add(new TodoBean(++idCounter, "Rajan", "Learn Oracle", new Date(), false));
		todos.add(new TodoBean(++idCounter, "PN Rajan", "Learn Kubernate", new Date(), false));
	}

	public List<TodoBean> findAll() {
		return todos;
	}

	public TodoBean deleteById(long id) {

		TodoBean todo = findById(id);
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public TodoBean findById(long id) {
		for (TodoBean todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

	public TodoBean save(TodoBean todo) {
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
