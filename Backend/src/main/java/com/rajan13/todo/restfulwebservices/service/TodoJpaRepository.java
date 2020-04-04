package com.rajan13.todo.restfulwebservices.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rajan13.todo.restfulwebservices.entity.Todo;

public interface TodoJpaRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);
}
