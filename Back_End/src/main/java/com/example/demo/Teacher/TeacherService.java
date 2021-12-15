package com.example.demo.Teacher;

import com.example.demo.Student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class TeacherService {
    private final TeacherRepo teacherRepo;

    @Autowired
    public TeacherService(TeacherRepo teacherRepo) {
        this.teacherRepo = teacherRepo;
    }

    public List<Teacher> getTeachers(){
        return teacherRepo.findAll();
    }

    public Teacher getTeacher(String username){
        return teacherRepo.findByUsername(username);
    }

    public void createTeacher(Teacher teacher){
        teacherRepo.save(teacher);
    }

    public void updateTeacher(String id){
        long longId = parseLong(id);
        Teacher teacher = teacherRepo.findById(longId).orElse(null);
        teacherRepo.save(teacher);
    }
}
