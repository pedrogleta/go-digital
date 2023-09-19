package com.fiapzada.godigital.Item;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  private String name;
  private Integer quantity;
  private Double price;
  private Timestamp created_at;
  private Timestamp modified_at;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public Integer getQuantity() {
    return quantity;
  }
  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Double getPrice() {
    return price;
  }
  public void setPrice(Double price) {
    this.price = price;
  }

  public Timestamp getCreatedAt() {
    return created_at;
  }
  public void setCreatedAt(Timestamp created_at) {
    this.created_at = created_at;
  }

  public Timestamp getModifiedAt() {
    return modified_at;
  }
  public void setModifiedAt(Timestamp modified_at) {
    this.modified_at = modified_at;
  }
}