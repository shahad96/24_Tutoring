package com.example.demo.Student;

import com.example.demo.Subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class StudentService /*implements UserDetailsService*/ {

    private final StudentRepo studentRepo;

    @Autowired
    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Student student= studentRepo.findByUsername(username);
//        if(student == null){
//            System.out.println("student does not exist");
//            throw new UsernameNotFoundException("student does not exist");
//        }
//        else{
//            System.out.println("student does exist"+username);
//        }
//        return new org.springframework.security.core.userdetails.User(student.getUsername(),student.getPassword(),null);
//    }

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
        return studentRepo.save(student);
    }

    public void updateStudent(String id){
        long longId = parseLong(id);
        Student student = studentRepo.findById(longId).orElse(null);
        studentRepo.save(student);
    }




}
