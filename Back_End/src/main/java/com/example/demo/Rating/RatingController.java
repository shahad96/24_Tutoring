package com.example.demo.Rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="ratings")
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @GetMapping("/{id}")
    public double getRatings(@PathVariable String id){
        return ratingService.getTeacherRating(id);
    }

    @PostMapping
    public void createRate(@RequestBody Rating rate){

        ratingService.createRate(rate);
    }
}
