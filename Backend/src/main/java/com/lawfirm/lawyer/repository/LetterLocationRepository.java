package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.model.LetterLocation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface LetterLocationRepository extends MongoRepository<LetterLocation, Long> {

    @Query("{ 'clientID' : ?0 }")
    List<LetterLocation> getAllpdfByClient(String regexp);

}
