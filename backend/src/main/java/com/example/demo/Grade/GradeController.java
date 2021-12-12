package com.example.demo.Grade;

import com.example.demo.Teacher.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="grades")
public class GradeController {
    private final GradeService gradeService;

    @Autowired
    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    @GetMapping
    public List<Grade> getGrades(){
        return gradeService.getGrades();
    }

    @PostMapping
    public void createGrade(@RequestBody Grade grade){

        gradeService.createGrade(grade);
    }

    @DeleteMapping("/{id}")
    public void deleteGrade(@PathVariable String id){
        gradeService.deleteGrade(id);
    }

    @PutMapping("/{id}")
    public void updateGrade(@PathVariable String id){
        gradeService.updateGrade(id);
    }
}
