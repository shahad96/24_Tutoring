package com.example.demo.Offer;

import com.example.demo.Grade.Grade;
import com.example.demo.Student.Student;
import com.example.demo.Teacher.Teacher;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String note;
    private Long subjectId;
    private boolean studentAccept;
    private boolean teacherAccept;
    private String zoomLink;
    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="student_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Student student;
    @ManyToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="teacher_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Teacher teacher;

    public Offer() {
    }

    public Offer(Long id, String note, Long subjectId, boolean studentAccept, boolean teacherAccept, String zoomLink, Student student, Teacher teacher) {
        this.id = id;
        this.note = note;
        this.subjectId = subjectId;
        this.studentAccept = studentAccept;
        this.teacherAccept = teacherAccept;
        this.zoomLink = zoomLink;
        this.student = student;
        this.teacher = teacher;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public boolean isStudentAccept() {
        return studentAccept;
    }

    public void setStudentAccept(boolean studentAccept) {
        this.studentAccept = studentAccept;
    }

    public boolean isTeacherAccept() {
        return teacherAccept;
    }

    public void setTeacherAccept(boolean teacherAccept) {
        this.teacherAccept = teacherAccept;
    }

    public String getZoomLink() {
        return zoomLink;
    }

    public void setZoomLink(String zoomLink) {
        this.zoomLink = zoomLink;
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
