package com.lawfirm.lawyer.templates;

import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.text.Document;

import java.awt.*;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.Writer;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.lawfirm.lawyer.templates.Affidavit.getCurrentTime;

public class AffidavitE {
    /*-------------------Generate Current Date -----------------*/
//    public static String getCurrentDate() {
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//        Date date = new Date();
//        String newDate = dateFormat.format(date);
//
//        return newDate;
//    }

    public void generateTemplatePdf(String letter) throws IOException {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        String newDate = dateFormat.format(date);

        String fileName = "AffidavitEn_" + newDate + "_" + getCurrentTime() + ".pdf";
        File file = new File("/home/pasindu/Documents/" + fileName);

        try {
            HtmlConverter.convertToPdf(letter, new PdfWriter(file));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
