package com.lawfirm.lawyer.model;

public class Letters {

    String letter;
    String cID;

    public Letters(String letter, String cID) {
        this.letter = letter;
        this.cID = cID;
    }

    public String getLetter() {
        return letter;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    public String getcID() {
        return cID;
    }

    public void setcID(String cID) {
        this.cID = cID;
    }
}
