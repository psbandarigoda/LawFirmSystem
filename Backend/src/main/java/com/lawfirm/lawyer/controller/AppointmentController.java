package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Appointment;
import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
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

    @PostMapping(value = "/updateAppointmentStatus")
    public Map<String, Object> updateAppointmentStatus(@RequestBody Appointment updateAppointment) {
        Appointment updateAppointmentStatus = appointmentRepository.save(updateAppointment);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("appointment", updateAppointmentStatus);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @GetMapping(value = "/sendMessageToCustomer/{phoneNumber}/{password}/{accountName}/{message}")
    public String getItems(@PathVariable String phoneNumber, @PathVariable String password, @PathVariable String accountName, @PathVariable String message) throws IOException {

        String msg = "Dearvaluable customer, we started servicing your vehicle. -TurismoAuto";
        String number = "94" + accountName.substring(1);

        try {
            URL textit = new URL("http://textit.biz/sendmsg/index.php?id=94773638063&pw=5584&to="+number+"&text="+message+"");
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(textit.openStream()));

            String inputLine;
            while ((inputLine = in.readLine()) != null)
                System.out.println(inputLine);
            in.close();

        }catch (MalformedURLException e){
            e.printStackTrace();
        }


//        URL textit = null;
//        try {
//            textit = new URL("http://textit.biz/sendmsg/index.php?id="+accountName+"&pw="+password+"&to="+number +"&text=Dear%20valuable%20customer,%20we%20started%20servicing%20your%20vehicle.%20-TurismoAuto");
//            BufferedReader in = new BufferedReader(new InputStreamReader(textit.openStream()));
//            String inputLine;
//            while ((inputLine = in.readLine()) != null)
//                System.out.println(inputLine);
//            in.close();
//
//        } catch (MalformedURLException e) {
//            e.printStackTrace();
//        }
        return "0";
    }
}
