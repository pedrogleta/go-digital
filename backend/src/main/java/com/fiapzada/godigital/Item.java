package com.fiapzada.godigital;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  private String name;
  private Integer qntd;
  private Double price;

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

  public Integer getQntd() {
    return qntd;
  }
  public void setQntd(Integer qntd) {
    this.qntd = qntd;
  }

  public Double getPrice() {
    return price;
  }
  public void setPrice(Double price) {
    this.price = price;
  }
}