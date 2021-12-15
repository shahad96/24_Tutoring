package com.example.demo.Offer;

import com.example.demo.Grade.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class OfferService {
    private final OfferRepo offerRepo;

    @Autowired
    public OfferService(OfferRepo offerRepo) {
        this.offerRepo = offerRepo;
    }

    public List<Offer> getOffers(){
        return offerRepo.findAll();
    }

    public List<Offer> getTeacherOffers(String teacherId){
        Long id = Long.parseLong(teacherId);
        return offerRepo.findTeacherOffers(id);
    }

    public void createOffer(Offer offer){
        offerRepo.save(offer);
    }

    public void deleteOffer(String id){
        Long offer_id = Long.parseLong(id);
        offerRepo.deleteById(offer_id);
    }

    public void updateOffer(String id,String type,Offer data){
        long longId = parseLong(id);
        Offer offer = offerRepo.findById(longId).orElse(null);
        if (offer != null){
            if(type.equals("teacher-accept")){
                offer.setTeacherAccept(data.isTeacherAccept());
                offerRepo.save(offer);
            }
            else if(type.equals("student-accept")){
                offer.setStudentAccept(data.isStudentAccept());
                offer.setTeacher(data.getTeacher());
                offer.setZoomLink(data.getZoomLink());
                offerRepo.save(offer);
            }
        }


    }
}
