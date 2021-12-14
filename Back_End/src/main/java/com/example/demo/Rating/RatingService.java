package com.example.demo.Rating;

import com.example.demo.Grade.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class RatingService {

    private final RatingRepo ratingRepo;

    @Autowired
    public RatingService(RatingRepo ratingRepo) {
        this.ratingRepo = ratingRepo;
    }

    public double getTeacherRating(String teacherId){
        long longId = parseLong(teacherId);
        ArrayList<Integer> rates=ratingRepo.findTeacherAllRates(longId);
        double numberOfRates = rates.size();
        double sumOfRates=0.0;
        for (int i = 0; i < rates.size(); i++) {
            sumOfRates =sumOfRates+rates.get(i);
        }
        double rating = sumOfRates/numberOfRates;

        return rating;
    }

    public void createRate(Rating rating){
        ratingRepo.save(rating);
    }

}
