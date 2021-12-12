package com.example.demo.TeacherGradeSubjectLink;

import com.example.demo.Subject.Subject;
import com.example.demo.Teacher.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherGradeSubjectLinkService {
    private final TeacherGradeSubjectLinkRepo teacherGradeSubjectLinkRepo;

    @Autowired
    public TeacherGradeSubjectLinkService(TeacherGradeSubjectLinkRepo teacherGradeSubjectLinkRepo) {
        this.teacherGradeSubjectLinkRepo = teacherGradeSubjectLinkRepo;
    }

//    public List<Long> getTeacherGradeSubject(){
//        return teacherGradeSubjectLinkRepo.findAll();
//    }

    public void createLink(TeacherGradeSubjectLink teacherGradeSubjectLink){
        teacherGradeSubjectLinkRepo.save(teacherGradeSubjectLink);
    }

    public void deleteLink(String id){
        Long Link_id = Long.parseLong(id);
        teacherGradeSubjectLinkRepo.deleteById(Link_id);
    }
}
