package com.example.demo.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class StudentService implements UserDetailsService {

    private final StudentRepo studentRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public StudentService(StudentRepo studentRepo, PasswordEncoder passwordEncoder) {
        this.studentRepo = studentRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Student student= studentRepo.findByUsername(username);
        if(student == null){
            System.out.println("student does not exist");
            throw new UsernameNotFoundException("student does not exist");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(student.getRole()));

        return new org.springframework.security.core.userdetails.User(student.getUsername(),student.getPassword(),authorities);
    }

    public List<Student> getStudents(){
        return studentRepo.findAll();
    }

    public int getStudentGradeId(String username){
        return studentRepo.findGradeIdByUsername(username);
    }

    public Student getStudentByUsername(String username){
        return studentRepo.findByUsername(username);
    }

    public Student createStudent(Student student){

        student.setPassword(passwordEncoder.encode(student.getPassword()));
        return studentRepo.save(student);
    }

    public void updateStudent(String id){
        long longId = parseLong(id);
        Student student = studentRepo.findById(longId).orElse(null);
        studentRepo.save(student);
    }




}
