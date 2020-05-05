package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Client;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ClientRepository extends MongoRepository<Client, Long> {

//    @Query("{'nic : ?0'}")
//    Client findByNIC(String nic);

    @Query("{ 'nic' : ?0 }")
    Client findByNIC(String regexp);

//    Client findByNIC( String nic );

}
