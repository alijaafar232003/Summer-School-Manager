package com.example.summer_camp_app;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("chatbot")
public class ChatbotController {


    @PostMapping
    public String chat(@RequestBody MessageResource messageResource) {
        // TODO
    }

}
