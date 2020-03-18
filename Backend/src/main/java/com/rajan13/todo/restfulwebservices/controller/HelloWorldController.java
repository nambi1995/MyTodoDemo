package com.rajan13.todo.restfulwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rajan13.todo.restfulwebservices.bean.HelloWorldBean;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	
	@GetMapping(path="/helloworld")
	private String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/helloworld-bean")
	private HelloWorldBean helloWorldBean() throws Exception {
		return new HelloWorldBean("Hello World Nambi");
		//throw new Exception("Internal server Error");
	}
	
	@GetMapping(path="/helloworld-bean/{name}")
	private HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World %s",name));
	}

}
