package com.example.demo.Student;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
    @Query(value ="select grade_id from students where id =?1",nativeQuery = true)
    public int findGradeIdByUsername(String id);
    public Student findById(String id);
    public Student findByEmail(String email);
    @Query(value ="select students.* ,grades.id ,users.id from students join grades on students.grade_id =grades.id join users on students.user_id = users.id where user_id =?1",nativeQuery = true)
    public Student findByUserId(String userId);
}
