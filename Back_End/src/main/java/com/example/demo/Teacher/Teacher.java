package com.example.demo.Teacher;

import com.example.demo.Offer.Offer;
import com.example.demo.Rating.Rating;
import com.example.demo.TeacherGradeSubjectLink.TeacherGradeSubjectLink;
import org.springframework.security.core.userdetails.UserDetailsService;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fName;
    private String lName;
    @Column(unique=true)
    private String username;
    @Column(unique=true)
    private String email;
    private String password;
    private Long phone;
    private String role="teacher";
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<Offer> offers = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<Rating> ratings = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<TeacherGradeSubjectLink> teacherGradeSubjectLinks = new ArrayList<>();


    public Teacher() {
    }

    public Teacher(Long id, String fName, String lName, String username, String email, String password, Long phone, List<Offer> offers, List<Rating> ratings) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.offers = offers;
        this.ratings = ratings;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
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
}
