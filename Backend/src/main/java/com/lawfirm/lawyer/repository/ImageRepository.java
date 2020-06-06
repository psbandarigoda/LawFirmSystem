package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.CaseImages;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageRepository extends MongoRepository<CaseImages, Long> { }
