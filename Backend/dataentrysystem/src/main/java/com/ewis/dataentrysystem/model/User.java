package com.ewis.dataentrysystem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "app_user") // Maps this class to the "app_user" table in the database
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    //Getters and setters (methods to access and modify the data)

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
