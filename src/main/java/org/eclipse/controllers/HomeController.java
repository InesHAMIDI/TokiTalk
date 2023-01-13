package org.eclipse.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@Value("${apiKey}")
	private String apiKey;
	
	@GetMapping({"/tokitalk", "/"})
	public String Home() {
		return "Home";
	}
	
	@PostMapping("/blabla")
	public String TTS(@RequestParam(name="phrase") String phrase) {
		return ("http://api.voicerss.org/?key=" + apiKey + "&hl=fr-fr&v=Iva&src=" + phrase);
	}
}
