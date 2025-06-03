package com.example.summer_camp_app;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "students")
public class StudentController {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping
    public StudentResource createProfessor(@RequestBody StudentResource studentResource) {

        Student savedStudent = studentRepository.save(
                new Student(0, studentResource.name(), studentResource.grade(), studentResource.age(), studentResource.dateOfJoin())
        );

        return new StudentResource(
                savedStudent.getId(),
                savedStudent.getName(),
                savedStudent.getGrade(),
                savedStudent.getAge(),
                savedStudent.getDateOfJoin()
        );
    }


}
