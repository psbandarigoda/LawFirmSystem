package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.model.CaseImages;
import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.repository.CaseRepository;
import com.lawfirm.lawyer.repository.ImageRepository;
import com.lawfirm.lawyer.templates.Affidavit;
import com.lawfirm.lawyer.templates.AffidavitE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/CaseController")
@CrossOrigin(origins = "http://localhost:4200")
public class CaseController {

    @Autowired
    private CaseRepository caseRepository;

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping(value = "/addCaseImages")
    public Map<String, Object> saveCaseImages(@RequestBody CaseImages caseImages) {
        CaseImages savedCaseImage = imageRepository.save(caseImages);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("caseImage", savedCaseImage);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @PostMapping(value = "/addCase")
    public Map<String, Object> saveCase(@RequestBody Case addCase) {

//      Folder Creation Start
//      Linux Command
        String dir = "/home/pasindu/Downloads/"+addCase.getNic()+"/"+addCase.getCaseNo();
//        Windows Command
//        String dir = "C:\\Users\\ACER\\Documents\\LawFirmSystemImages\\"+addCase.getNic()+"\\"+addCase.getCaseNo();
        File file = new File(dir);
        if (file.mkdirs()) {
            System.out.println("Directory is created!");
        } else {
            System.out.println("Failed to create directory!");
        }
    //  End Folder Creation

        Case savedCase = caseRepository.save(addCase);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("case", savedCase);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @GetMapping(value = "/getAllCases")
    public List<Case> getAllCases() {

        List<Case> cases = caseRepository.findAll();

        return cases;
    }

    @GetMapping(value = "/getCasesByNIC/{nic}")
    public List<Case> getCasesByNIC(@PathVariable String nic) {

        List<Case> cases = caseRepository.findByNIC(nic);

        return cases;
    }

    @GetMapping(value = "/getCasesByCaseNo/{caseNo}")
    public List<Case> getCasesByCaseNo(@PathVariable String caseNo) {

        List<Case> cases = caseRepository.findByCaseNo(caseNo);

        return cases;
    }

    @GetMapping(value = "/getCasesByCaseType/{caseType}")
    public List<Case> getCasesByCaseType(@PathVariable String caseType) {

        List<Case> cases = caseRepository.findByCaseType(caseType);

        return cases;
    }

//    @PostMapping(value = "/printLetter")
//    public String printReport(@RequestBody String letter){
//        Affidavit l1 = new Affidavit();
//        l1.generateTemplatePdf(letter);
//        return "9";
//    }
//
//    @PostMapping(value = "/printLetterE")
//    public String printLetterE(@RequestBody String letter) throws IOException {
//        AffidavitE l1 = new AffidavitE();
//        l1.generateTemplatePdf(letter);
//        return "9";
//    }
}
