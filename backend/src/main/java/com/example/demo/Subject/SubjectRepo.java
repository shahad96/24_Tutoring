package com.example.demo.Subject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepo extends JpaRepository<Subject, Long> {
    @Query(value ="select subjects.* from subjects join grades_subjects on grades_subjects.subject_id =subjects.id where grades_subjects.grade_id=?1",nativeQuery = true)
    public List<Subject> findStudentSubjectsByGradeId(Long gradeId);
}
