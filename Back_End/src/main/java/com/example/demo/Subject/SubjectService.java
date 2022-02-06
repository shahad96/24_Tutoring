package com.example.demo.Subject;

import com.example.demo.Grade.Grade;
import com.example.demo.Teacher.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class SubjectService {

    private final SubjectRepo subjectRepo;

    @Autowired
    public SubjectService(SubjectRepo subjectRepo) {
        this.subjectRepo = subjectRepo;
    }

    public List<Subject> getSubjects(){
        return subjectRepo.findAll();
    }

    public Subject getSubject(String id){
        System.out.println(id);
        Long subject_id = Long.parseLong(id);
        return subjectRepo.getById(subject_id);
    }
    public void createSubject(Subject subject){
        subjectRepo.save(subject);
    }

    public void deleteSubject(String id){
        Long subject_id = Long.parseLong(id);
        subjectRepo.deleteById(subject_id);
    }

    public void updateSubject(String id){
        long longId = parseLong(id);
        Subject subject = subjectRepo.findById(longId).orElse(null);
        subjectRepo.save(subject);
    }

    public List<Subject> getStudentSubjects(String gradeId){
        long longId = parseLong(gradeId);
        return subjectRepo.findStudentSubjectsByGradeId(longId);
    }

}
