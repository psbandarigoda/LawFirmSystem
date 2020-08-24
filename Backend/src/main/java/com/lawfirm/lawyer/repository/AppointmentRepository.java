package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Appointment;
import com.lawfirm.lawyer.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface AppointmentRepository extends MongoRepository<Appointment, Long> {

    @Query("{ 'status' : 'pending' }")
    List<Appointment> findAllPending(String pending);
}
