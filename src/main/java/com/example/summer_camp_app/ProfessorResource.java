package com.example.summer_camp_app;


import com.fasterxml.jackson.annotation.JsonProperty;

public record ProfessorResource(
        @JsonProperty
        long id,
        @JsonProperty
        String name
) {

}
