package com.example.summer_camp_app;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


public record StudentResource(
        @JsonProperty
        long id,
        @JsonProperty
        String name,
        @JsonProperty
        double grade,
        @JsonProperty
        int age,
        @JsonProperty
        Date dateOfJoin
) {

}
