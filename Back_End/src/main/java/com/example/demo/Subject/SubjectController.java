package com.example.demo.Subject;

import com.example.demo.Grade.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="subjects")
public class SubjectController {
    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping
    public List<Subject> getSubjects(){
        return subjectService.getSubjects();
    }

    @PostMapping
    public void createSubject(@RequestBody Subject subject){

        subjectService.createSubject(subject);
    }

    @DeleteMapping("/{id}")
    public void deleteSubject(@PathVariable String id){
        subjectService.deleteSubject(id);
    }

    @PutMapping("/{id}")
    public void updateSubject(@PathVariable String id){
        subjectService.updateSubject(id);
    }

    @GetMapping("/{id}")
    public List<Subject> getStudentSubjects(@PathVariable String id){
        System.out.println(id);
        return subjectService.getStudentSubjects(id);
    }
}
