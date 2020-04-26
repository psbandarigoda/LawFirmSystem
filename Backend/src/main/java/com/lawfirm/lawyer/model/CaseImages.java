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
@Document( collection = "caseImages")
public class CaseImages {

    @Id
    private String id;

    String caseNo;
    String imagesArray[];

    @CreatedDate
    private Date createdOn;

    @LastModifiedDate
    private Date updatedOn;

}
