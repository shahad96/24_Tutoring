package com.example.demo.Teacher;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Long> {

    public Teacher findById(String id);
    public Teacher findByEmail(String email);

    @Query(value ="select * from teachers where user_id =?1",nativeQuery = true)
    public Teacher findByUserId(String userid);
}
