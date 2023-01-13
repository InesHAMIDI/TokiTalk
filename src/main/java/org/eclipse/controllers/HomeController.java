package org.eclipse.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {
	
	private String adresse = "http://api.voicerss.org/?key=7752ff267a4547ba914bce6d0ff0a23f&hl=fr-fr&v=Iva&src=";


	@GetMapping({"/tokitalk", "/"})
	public String Home() {
		return "Home";
	}
	
	@GetMapping("/blabla/{phrase}")
	public String TTS(@PathVariable String phrase) {
		return(adresse + phrase);
	}
	
	@PostMapping("Error")
	public String Error() {
		return "error";
	}
}
