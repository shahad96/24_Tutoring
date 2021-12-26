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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<TeacherGradeSubjectLink> teacherGradeSubjectLinks = new ArrayList<>();

    public Subject() {
    }

    public Subject(Long id, String name,String image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
