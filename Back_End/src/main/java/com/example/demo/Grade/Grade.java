package com.example.demo.Grade;

import com.example.demo.Student.Student;
import com.example.demo.Subject.Subject;
import com.example.demo.TeacherGradeSubjectLink.TeacherGradeSubjectLink;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "grades")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToMany
    @JoinTable(name = "grades_subjects", joinColumns = @JoinColumn(name = "grade_id",
            referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "subject_id",
            referencedColumnName = "id"))
    private Collection<Subject> subjects;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "grade")
    private List<Student> students = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<TeacherGradeSubjectLink> teacherGradeSubjectLinks = new ArrayList<>();
    public Grade() {
    }

    public Grade(Long id, String name, Collection<Subject> subjects, List<Student> students) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
        this.students = students;
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

    public Collection<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Collection<Subject> subjects) {
        this.subjects = subjects;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
