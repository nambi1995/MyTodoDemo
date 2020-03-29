package com.rajan13.todo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthController {
	
	@GetMapping(path="/basicAuth")
	private AuthenticationBean helloWorldBean() throws Exception {
		return new AuthenticationBean("You are authenticated");
	}

}
