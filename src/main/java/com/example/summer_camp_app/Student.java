package com.example.summer_camp_app;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.processing.Generated;
import java.util.Date;

@Entity

public class Student {

    @Id
    private long id;

    @Column
    private String name;

    @Column
    private double grade;

    @Column
    private int age;

    @Column
    private Date dateOfJoin;

    public Student() {
    }

    public Student(long id, String name, double grade, int age, Date dateOfJoin) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.dateOfJoin = dateOfJoin;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getGrade() {
        return grade;
    }

    public int getAge() {
        return age;
    }

    public Date getDateOfJoin() {
        return dateOfJoin;
    }
}
