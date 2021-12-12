package com.example.demo.Rating;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface RatingRepo extends JpaRepository<Rating, Long> {
    @Query(value="select rate from rates where teacher_id=?1",nativeQuery = true)
    public ArrayList<Integer> findTeacherAllRates(Long teacherId);
}
