package com.example.demo.Student;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
    @Query(value ="select grade_id from students where username =?1",nativeQuery = true)
    public int findGradeIdByUsername(String username);
    public Student findByUsername(String username);

}
