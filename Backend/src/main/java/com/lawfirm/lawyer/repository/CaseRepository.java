package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CaseRepository extends MongoRepository<Case, Long> {

}
