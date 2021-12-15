package com.example.demo.Offer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfferRepo extends JpaRepository<Offer, Long> {
    @Query(value="SELECT offers.* from offers " +
            "join students on students.id = offers.student_id " +
            "join teacher_grade_subject_link on students.grade_id = teacher_grade_subject_link.grade_id  " +
            "and offers.subject_id = teacher_grade_subject_link.subject_id  " +
            "join teachers on teachers.id = teacher_grade_subject_link.teacher_id  " +
            "where offers.student_accept=0 and teachers.id=?1",nativeQuery = true)
    public List<Offer> findTeacherOffers(Long teacherId);
}
