package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ClientController")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping(value = "/addClient")
    public Map<String, Object> saveUser(@RequestBody Client client) {
        Client savedUser = clientRepository.save(client);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("client", savedUser);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @GetMapping(value = "/client/{nic}")
    public Object findUser(@PathVariable String nic) {

        Client client = clientRepository.findByNIC(nic);
//        Map<String, Object> responseMap = new HashMap<>();
//
//        responseMap.put("client", client);
//        responseMap.put("status", 200);
//        responseMap.put("message", "success");
        return client;
    }

    @GetMapping(value = "/getAllClient")
    public Map<String, Object> getAllUsers() {

        List<Client> clients = clientRepository.findAll();
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("client", clients);
        responseMap.put("status", 200);
        responseMap.put("message", "success");

        return responseMap;

//    public void getAllUsers(DBCollection collection){
//        {
//            BasicDBObject whereQuery = new BasicDBObject();
//            whereQuery.put("nic", "763783");
//            DBCursor cursor = collection.find(whereQuery);
//            while(cursor.hasNext()) {
//                System.out.println(cursor.next());
//            }
//        }
//    }
    }

    @PostMapping(value = "/updateClient")
    public Map<String, Object> updateUser(@RequestBody Client client) {
        Client savedUser = clientRepository.save(client);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("client", savedUser);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

}
