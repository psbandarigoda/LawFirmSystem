package com.lawfirm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class LawFirmBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LawFirmBackendApplication.class, args);
	}

}
