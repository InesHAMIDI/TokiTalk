package org.eclipse.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping({"/tokitalk", "/"})
	public String Home() {
		return "Home";
	}
}
