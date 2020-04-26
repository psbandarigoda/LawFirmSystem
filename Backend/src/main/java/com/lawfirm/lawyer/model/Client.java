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
@Document( collection = "client")
public class Client {

    @Id
    private String id;

    String nic;
    String firstName;
    String lastName;
    String userName;
    String address;
    String phone;
    String email;
    String postal;
    String aboutCus;
    String country;

    @CreatedDate
    private Date createdOn;

    @LastModifiedDate
    private Date updatedOn;

//    public Client(String id, String nic, String firstName, String lastName, String userName, String address, String phone, String email, String postal, String type, String aboutCus, String country) {
//        this.id = id;
//        this.nic = nic;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.userName = userName;
//        this.address = address;
//        this.phone = phone;
//        this.email = email;
//        this.postal = postal;
//        this.type = type;
//        this.aboutCus = aboutCus;
//        this.country = country;
//    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }

    public String getAboutCus() {
        return aboutCus;
    }

    public void setAboutCus(String aboutCus) {
        this.aboutCus = aboutCus;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
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