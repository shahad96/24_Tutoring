package com.example.demo.Rating;

import com.example.demo.Student.Student;
import com.example.demo.Teacher.Teacher;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "rates")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int rate;
    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="student_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Student student;
    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="teacher_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Teacher teacher;

    public Rating() {
    }

    public Rating(Long id, int rate, Student student, Teacher teacher) {
        this.id = id;
        this.rate = rate;
        this.student = student;
        this.teacher = teacher;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
