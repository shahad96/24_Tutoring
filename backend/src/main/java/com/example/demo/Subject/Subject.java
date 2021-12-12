package com.example.demo.Subject;

import com.example.demo.Grade.Grade;
import com.example.demo.Teacher.Teacher;
import com.example.demo.TeacherGradeSubjectLink.TeacherGradeSubjectLink;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "subjects")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<TeacherGradeSubjectLink> teacherGradeSubjectLinks = new ArrayList<>();

    public Subject() {
    }

    public Subject(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
