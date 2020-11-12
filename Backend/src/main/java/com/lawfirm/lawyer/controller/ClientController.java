package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.model.LetterLocation;
import com.lawfirm.lawyer.model.Letters;
import com.lawfirm.lawyer.repository.ClientRepository;
import com.lawfirm.lawyer.repository.LetterLocationRepository;
import com.lawfirm.lawyer.templates.Affidavit;
import com.lawfirm.lawyer.templates.AffidavitE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ClientController")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private LetterLocationRepository letterLocationRepository;

    @PostMapping(value = "/addClient")
    public Map<String, Object> saveUser(@RequestBody Client client) {
//        Folder Creation Start
//        Linux Command
        String dir = "/home/pasindu/Downloads/"+client.getNic();
        String dir2 = "/home/pasindu/Documents/nCinga/Programming/LawFirmSystem/FrontEnd1/src/assets/data/"+client.getNic();
//        Windows Command
//        String dir = "C:\\Users\\ACER\\Documents\\LawFirmSystemImages\\"+client.getNic();
        File file = new File(dir);
        File file2 = new File(dir2);
        if (file.mkdirs()) {
            System.out.println("Directory is created!");
            if (file2.mkdirs()) {
                System.out.println("Directory is created!");
            } else {
                System.out.println("Failed to create directory!");
            }
        } else {
            System.out.println("Failed to create directory!");
        }
//          End Folder Creation

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

    @GetMapping(value = "/getAllClientsByDate/{date}")
    public List<Client> getAllClientsByDate(@PathVariable String date) {
        List<Client> client = clientRepository.getAllClientsByDate(date);

        System.out.println(client);

        return client;
    }

    @GetMapping(value = "/getAllClient")
    public List<Client> getAllUsers() {

        List<Client> clients = clientRepository.findAll();
//        Map<String, Object> responseMap = new HashMap<>();
//
//        responseMap.put("client", clients);
//        responseMap.put("status", 200);
//        responseMap.put("message", "success");

        return clients;

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


    @PostMapping(value = "/printLetterS")
    public Letters printReport(@RequestBody Letters letter){
        String letterContent = letter.getLetter();
        String cid = letter.getcID();
        Affidavit l1 = new Affidavit();
        l1.generateTemplatePdf(letterContent,cid);

        String File = l1.fileLocation();

        LetterLocation location1 = new LetterLocation();

        location1.setCaseID("common");
        location1.setClientID(cid);
        location1.setLetterLocation(File);
        location1.setName("Affidavit_Sinhala");

        letterLocationRepository.save(location1);
        return letter;
    }

    @PostMapping(value = "/printLetterE")
    public Letters printLetterE(@RequestBody Letters letter) throws IOException {
        String letterContent = letter.getLetter();
        String cid = letter.getcID();
        AffidavitE l1 = new AffidavitE();
        l1.generateTemplatePdf(letterContent,cid);

        String File = l1.fileLocation();

        LetterLocation location1 = new LetterLocation();

        location1.setCaseID("common");
        location1.setClientID(cid);
        location1.setLetterLocation(File);
        location1.setName("Affidavit_English");

        letterLocationRepository.save(location1);
        return letter;
    }

}
