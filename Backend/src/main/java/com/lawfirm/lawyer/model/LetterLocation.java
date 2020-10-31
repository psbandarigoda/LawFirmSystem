package com.lawfirm.lawyer.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Document( collection = "LetterLocation")
public class LetterLocation {

    @Id
    private String _id;

    String letterLocation;
    String clientID;
    String caseID;
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @CreatedDate
    private Date createdOn;

    @LastModifiedDate
    private Date updatedOn;

    public LetterLocation(String letterLocation, String clientID, String caseID) {
        this.letterLocation = letterLocation;
        this.clientID = clientID;
        this.caseID = caseID;
    }

    public LetterLocation() {

    }

    public String getLetterLocation() {
        return letterLocation;
    }

    public void setLetterLocation(String letterLocation) {
        this.letterLocation = letterLocation;
    }

    public String getClientID() {
        return clientID;
    }

    public void setClientID(String clientID) {
        this.clientID = clientID;
    }

    public String getCaseID() {
        return caseID;
    }

    public void setCaseID(String caseID) {
        this.caseID = caseID;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }
}
