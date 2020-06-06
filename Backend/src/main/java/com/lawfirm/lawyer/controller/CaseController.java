package com.lawfirm.lawyer.controller;

import com.lawfirm.lawyer.model.Case;
import com.lawfirm.lawyer.model.CaseImages;
import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.repository.CaseRepository;
import com.lawfirm.lawyer.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
