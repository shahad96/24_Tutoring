package com.example.demo.Grade;

import com.example.demo.Subject.Subject;
import com.example.demo.Teacher.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class GradeService {

    private final GradeRepo gradeRepo;

    @Autowired
    public GradeService(GradeRepo gradeRepo) {
        this.gradeRepo = gradeRepo;
    }

    public List<Grade> getGrades(){
        return gradeRepo.findAll();
    }

    public void createGrade(Grade grade){
        gradeRepo.save(grade);
    }

    public void deleteGrade(String id){
        Long grade_id = Long.parseLong(id);
        gradeRepo.deleteById(grade_id);
    }

    public void updateGrade(String id){
        long longId = parseLong(id);
        Grade grade = gradeRepo.findById(longId).orElse(null);
        gradeRepo.save(grade);
    }
}
