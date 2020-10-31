package com.lawfirm.lawyer.services;

import com.lawfirm.lawyer.model.LetterLocation;
import com.lawfirm.lawyer.repository.LetterLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class LetterLocationService {

    @Autowired
    private LetterLocationRepository letterLocationRepository;

    public void saveLetterLocation(String nic, String caseid, String location){

        LetterLocation location1 = new LetterLocation();
        if(caseid != null){
            location1.setCaseID(caseid);
        }
        location1.setCaseID("common");
        location1.setClientID(nic);
        location1.setLetterLocation(location);

        letterLocationRepository.save(location1);

    }
}
