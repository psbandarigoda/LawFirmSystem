package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Appointment;
import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/AppointmentController")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping(value = "/addAppointments")
    public Map<String, Object> saveAppointment(@RequestBody Appointment addAppointment) {
        Appointment savedAppointment = appointmentRepository.save(addAppointment);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("appointment", savedAppointment);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @GetMapping(value = "/getAllAppointments")
    public List<Appointment> getAllAppointments() {
        String pending = "pending";
        List<Appointment> appointments = appointmentRepository.findAllPending(pending);

        return appointments;
    }
}
