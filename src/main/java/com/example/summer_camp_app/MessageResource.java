package com.example.summer_camp_app;

import com.fasterxml.jackson.annotation.JsonProperty;

public record MessageResource(
        @JsonProperty
        String message,
        @JsonProperty
        String context
) {
}
