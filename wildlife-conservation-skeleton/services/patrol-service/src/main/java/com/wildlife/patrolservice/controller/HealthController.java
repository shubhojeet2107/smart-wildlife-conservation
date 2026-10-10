package com.wildlife.patrolservice.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class HealthController {
    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
            "service", "patrol-service",
            "status", "UP"
        );
    }
}
