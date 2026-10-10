package com.wildlife.conservationservice.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Starter endpoint only. Replace with real controllers and CRUD APIs.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/conservation")
public class ConservationServiceController {
    @GetMapping("/status")
    public Map<String, String> status() {
        return Map.of(
            "module", "conservation",
            "message", "Skeleton endpoint ready. Implement module APIs here."
        );
    }
}
