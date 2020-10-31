package com.lawfirm.lawyer.templates;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.File;
import java.io.FileOutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class Affidavit {

    private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.BOLD);
    private static Font redFont = new Font(Font.FontFamily.TIMES_ROMAN, 12,
            Font.NORMAL, BaseColor.RED);
    private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16,
            Font.BOLD);
    private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12,
            Font.BOLD);
    private static Font sinhalaFont = new Font(Font.FontFamily.TIMES_ROMAN, 12,
            Font.BOLD);
    String fileName = "AffidavitSin_"+getCurrentDate() + "_" + getCurrentTime() + ".pdf";


    /*-------------------Generate Current Date -----------------*/
    public static String getCurrentDate() {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        String newDate = dateFormat.format(date);

        return newDate;
    }

    /*-------------------Generate Current Time -----------------*/
    public static String getCurrentTime() {

        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("HH-mm-ss");

        return (sdf.format(cal.getTime()));

    }

    private static void addTitlePage(Document document)
            throws DocumentException {
        Paragraph preface = new Paragraph();
        // We add one empty line
        addEmptyLine(preface, 1);
        // Lets write a big header
        preface.add(new Paragraph("Customer Order Report", catFont));

        addEmptyLine(preface, 1);
        // Will create: Report generated by: _name, _date
        preface.add(new Paragraph(
                "Report generated by: " + System.getProperty("user.name") + ", " + new Date(), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
                smallBold));
        addEmptyLine(preface, 3);

        document.add(preface);

    }

    private static void createLetter(Document subCatPart, String letter) throws BadElementException {

        Paragraph preface = new Paragraph();

        preface.add(new Paragraph(letter, catFont));


        try {
            subCatPart.add(preface);
        } catch (DocumentException e) {
            e.printStackTrace();
        }

    }

    private static void addEmptyLine(Paragraph paragraph, int number) {
        for (int i = 0; i < number; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }

    public void generateReport() {

    }

    public void generateTemplatePdf(String letterContent, String cid) {

//        Linux Command
        String FILE = "/home/pasindu/Downloads/"+cid+"/"+fileName;
        String FILE2 = ("/home/pasindu/Documents/nCinga/Programming/LawFirmSystem/FrontEnd1/src/assets/data/"+cid+"/"+fileName);

//        Windows Command
//        String FILE = "C:/Users/" + System.getProperty("user.name") + "/Documents/LawFirmSystemLetters/"+cid+"/"+fileName;


        try {

            Document document = new Document();
            PdfWriter.getInstance(document, new FileOutputStream(FILE));
            document.open();
            addMetaData(document);
            addTitlePage(document);
            createLetter(document, letterContent);
            document.close();

            try {

                Document document2 = new Document();
                PdfWriter.getInstance(document2, new FileOutputStream(FILE2));
                document2.open();
                addMetaData(document2);
                addTitlePage(document2);
                createLetter(document2, letterContent);
                document2.close();

            } catch (Exception e) {
                e.printStackTrace();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }


    }

    private void addMetaData(Document document) {

        document.addTitle("Customer Order Report");

    }

    public String fileLocation(){

        return fileName;
    }


}
