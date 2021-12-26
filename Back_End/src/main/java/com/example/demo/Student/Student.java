package com.example.demo.Student;

import com.example.demo.Grade.Grade;
import com.example.demo.Offer.Offer;
import com.example.demo.Rating.Rating;
import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "students")
public class Student implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fName;
    private String lName;
    @Column(unique=true)
    private String email;
    private Long phone;

    @ManyToOne (fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name ="grade_id")
    @JsonIgnoreProperties("students")
    private Grade grade;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student",fetch = FetchType.LAZY)
    private List<Offer> offers = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Rating> ratings = new ArrayList<>();
    @OneToOne (fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name ="user_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public Student() {
    }

    public Student(Long id, String fName, String lName, String email, Long phone, Grade grade, List<Offer> offers, List<Rating> ratings,User user) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.grade = grade;
        this.offers = offers;
        this.ratings = ratings;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public List<Offer> getOffers() {
        return offers;
    }

    public void setOffers(List<Offer> offers) {
        this.offers = offers;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", grade=" + grade +
                ", offers=" + offers +
                ", ratings=" + ratings +
                ", user=" + user +
                '}';
    }
}
