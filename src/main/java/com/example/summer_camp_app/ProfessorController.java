package com.example.summer_camp_app;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "professors")
public class ProfessorController {

    private final ProfessorRepository professorRepository;

    @Autowired
    public ProfessorController(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @PostMapping
    public ProfessorResource createProfessor(@RequestBody ProfessorResource professor) {

        Professor savedProfessor = professorRepository.save(
                new Professor(0, professor.name())
        );

        return new ProfessorResource(
                savedProfessor.getId(),
                savedProfessor.getName()
        );
    }


}
