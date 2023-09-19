package com.fiapzada.godigital.Transaction;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transaction {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  private Timestamp created_at;
  private Timestamp modified_at;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
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
