package com.example.summer_camp_app;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class ProfessorFeedback {

    @Id
    private long id;

    @ManyToOne
    private Student student;

    @Column
    private String feedback;

}
