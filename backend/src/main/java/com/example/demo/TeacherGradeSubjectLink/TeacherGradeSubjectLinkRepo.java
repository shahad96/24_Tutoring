package com.example.demo.TeacherGradeSubjectLink;

import com.example.demo.Teacher.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherGradeSubjectLinkRepo extends JpaRepository<TeacherGradeSubjectLink, Long> {
}
