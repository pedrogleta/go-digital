package com.fiapzada.godigital.Transaction;

import java.sql.Date;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.fiapzada.godigital.LineItem.LineItem;
import com.fiapzada.godigital.LineItem.LineItemRepository;

@Controller // This means that this class is a Controller
@RequestMapping(path="/transaction") // This means URL's start with /demo (after Application path)
public class TransactionController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private TransactionRepository transactionRepository;
  private LineItemRepository lineItemRepository;

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping(path="")
  public @ResponseBody Iterable<Transaction> getAllTransactions() {
    return transactionRepository.findAll();
  }
  
  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path="") // Map ONLY POST Requests
  public @ResponseBody Transaction addNewTransaction (@RequestBody LineItem[] lineItems) {
    Transaction transaction = new Transaction();
    transaction.setCreatedAt(new Timestamp(System.currentTimeMillis()));
    transaction.setModifiedAt(new Timestamp(System.currentTimeMillis()));

    for (LineItem lineItem : lineItems) {
      LineItem newLineItem = new LineItem();
      newLineItem.setItemId(lineItem.getItemId());
      newLineItem.setTransactionId(transaction.getId());
      newLineItem.setPrice(lineItem.getPrice());
      newLineItem.setQuantity(lineItem.getQuantity());
      newLineItem.setCreatedAt(new Date(System.currentTimeMillis()));
      newLineItem.setModifiedAt(new Date(System.currentTimeMillis()));

      lineItemRepository.save(newLineItem);
    }

    return transaction;
  }
}