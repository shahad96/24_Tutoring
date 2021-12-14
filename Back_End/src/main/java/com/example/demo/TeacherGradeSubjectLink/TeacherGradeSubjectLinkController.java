package com.example.demo.TeacherGradeSubjectLink;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="link")
public class TeacherGradeSubjectLinkController {

    private final TeacherGradeSubjectLinkService teacherGradeSubjectLinkService;

    @Autowired
    public TeacherGradeSubjectLinkController(TeacherGradeSubjectLinkService teacherGradeSubjectLinkService) {
        this.teacherGradeSubjectLinkService = teacherGradeSubjectLinkService;
    }

    @PostMapping
    public void createLink(@RequestBody ArrayList<TeacherGradeSubjectLink> teacherGradeSubjectLink){

        teacherGradeSubjectLinkService.createLink(teacherGradeSubjectLink);
    }

    @DeleteMapping("/{id}")
    public void deleteLink(@PathVariable String id){
        teacherGradeSubjectLinkService.deleteLink(id);
    }
}
