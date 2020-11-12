package com.lawfirm.lawyer.templates;

import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.lawfirm.lawyer.services.LetterLocationService;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.lawfirm.lawyer.templates.Affidavit.getCurrentTime;

public class DeedOFGift {
    String FileName;

    @Autowired
    private LetterLocationService letterLocationService;


    public void generateTemplatePdf(String letterContent, String cid) throws IOException {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        String newDate = dateFormat.format(date);

        String fileName = "DeedOFGiftEn_" + newDate + "_" + getCurrentTime() + ".pdf";

//        Linux Command
        File file = new File("/home/pasindu/Downloads/LowyerSystem/"+cid+"/"+fileName);
        File file2 = new File("/home/pasindu/Documents/nCinga/Programming/LawFirmSystem/FrontEnd1/src/assets/data/"+cid+"/"+fileName);
//        Windows Command
//        File file = new File("C:/Users/" + System.getProperty("user.name") + "/Documents/LawFirmSystemLetters/"+cid+"/"+fileName);


        FileName = fileName.toString();

        try {
            HtmlConverter.convertToPdf(letterContent, new PdfWriter(file));
            try {
                HtmlConverter.convertToPdf(letterContent, new PdfWriter(file2));
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String fileLocation(){

        return FileName;
    }
}
