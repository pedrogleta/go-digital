package com.fiapzada.godigital.Transaction;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.fiapzada.godigital.LineItem.LineItem;
import com.fiapzada.godigital.LineItem.LineItemRepository;

@Controller
@RequestMapping(path="/transaction")
public class TransactionController {
  @Autowired
  private TransactionRepository transactionRepository;
  
  @Autowired
  private LineItemRepository lineItemRepository;

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping(path="")
  public @ResponseBody Iterable<Transaction> getAllTransactions() {
    return transactionRepository.findAll();
  }
  
  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path="")
  public @ResponseBody Transaction addNewTransaction (@RequestBody LineItem[] lineItems) {
    Transaction transaction = new Transaction();
    transaction.setCreatedAt(new Timestamp(System.currentTimeMillis()));
    transaction.setModifiedAt(new Timestamp(System.currentTimeMillis()));

    transaction = transactionRepository.save(transaction);

    for (LineItem lineItem : lineItems) {
      LineItem newLineItem = new LineItem();
      newLineItem.setItemId(lineItem.getItemId());
      newLineItem.setTransactionId(transaction.getId());
      newLineItem.setPrice(lineItem.getPrice());
      newLineItem.setQuantity(lineItem.getQuantity());
      newLineItem.setCreatedAt(new Timestamp(System.currentTimeMillis()));
      newLineItem.setModifiedAt(new Timestamp(System.currentTimeMillis()));

      lineItemRepository.save(newLineItem);
    }

    return transaction;
  }
}