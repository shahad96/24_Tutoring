package com.example.demo.TeacherGradeSubjectLink;

import com.example.demo.Grade.Grade;
import com.example.demo.Subject.Subject;
import com.example.demo.Teacher.Teacher;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "teacher_grade_subject_link")
public class TeacherGradeSubjectLink {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="teacher_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Teacher teacher;

    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="grade_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Grade grade;

    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="subject_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Subject subject;

    public TeacherGradeSubjectLink() {
    }

    public TeacherGradeSubjectLink(Long id, Teacher teacher, Grade grade, Subject subject) {
        this.id = id;
        this.teacher = teacher;
        this.grade = grade;
        this.subject = subject;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}
