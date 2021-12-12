package com.example.demo.Student;

import com.example.demo.Subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="students")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents(){
        return studentService.getStudents();
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student){


        return studentService.createStudent(student);
    }

    @PutMapping("/{id}")
    public void updateStudent(@PathVariable String id){
        studentService.updateStudent(id);
    }

}
