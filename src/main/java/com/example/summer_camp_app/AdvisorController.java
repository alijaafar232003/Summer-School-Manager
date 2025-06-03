package com.example.summer_camp_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.NoSuchElementException;

@RestController(value = "advise")
public class AdvisorController {

    private final StudentRepository studentRepository;

    @Autowired
    public AdvisorController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("{studentName}")
    public String getAdvice(@PathVariable String studentName) {
        Student student = studentRepository.findByName(studentName);
        if (student == null) {
            throw new NoSuchElementException("Student does not exist");
        }
        double grade = student.getGrade();

        if (grade >= 85) {
            return "Explore transistor circuits and build a small amplifier.";
        } else if (grade >= 70) {
            return "Study voltage dividers and RC circuits.";
        } else {
            return "Review Ohm’s Law and practice breadboard basics.";
        }
    }
}
