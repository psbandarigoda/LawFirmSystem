package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CaseRepository extends MongoRepository<Case, Long> {

    @Query("{ 'nic' : ?0 }")
    List<Case> findByNIC(String regexp);

    @Query("{ 'caseNo' : ?0 }")
    List<Case> findByCaseNo(String regexp);

    @Query("{ 'caseType' : ?0 }")
    List<Case> findByCaseType(String regexp);

    @Query("{ 'date' : ?0 }")
    List<Case> getAllCasesByDate(String regexp);

}
