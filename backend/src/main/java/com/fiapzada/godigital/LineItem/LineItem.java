package com.fiapzada.godigital.LineItem;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LineItem {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  private Integer item_id;
  private Integer transaction_id;
  private Integer quantity;
  private Double  price;
  private Date created_at;
  private Date modified_at;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getItemId() {
    return item_id;
  }
  public void setItemId(Integer item_id) {
    this.item_id = item_id;
  }

  public Integer getTransactionId() {
    return transaction_id;
  }
  public void setTransactionId(Integer transaction_id) {
    this.transaction_id = transaction_id;
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

  public Date getCreatedAt() {
    return created_at;
  }
  public void setCreatedAt(Date created_at) {
    this.created_at = created_at;
  }

  public Date getModifiedAt() {
    return modified_at;
  }
  public void setModifiedAt(Date modified_at) {
    this.modified_at = modified_at;
  }
}
