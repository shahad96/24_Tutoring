package com.example.demo.Offer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="offers")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping
    public List<Offer> getOffers(){
        return offerService.getOffers();
    }

    @GetMapping("/{teacherId}")
    public List<Offer> getTeacherOffers(@PathVariable String teacherId){
        return offerService.getTeacherOffers(teacherId);
    }

    @PostMapping
    public void createOffer(@RequestBody Offer offer){

        offerService.createOffer(offer);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable String id){
        offerService.deleteOffer(id);
    }

    @PutMapping("/{id}/{type}")
    public void updateOffer(@PathVariable String id,@PathVariable String type, @RequestBody Offer data){
        offerService.updateOffer(id,type,data);
    }
}
