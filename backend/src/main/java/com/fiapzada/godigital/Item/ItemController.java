package com.fiapzada.godigital.Item;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/item")
public class ItemController {
  @Autowired
  private ItemRepository itemRepository;

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path="")
  public @ResponseBody Item addNewItem (@RequestBody Item item) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Item n = new Item();
    n.setName(item.getName());
    n.setPrice(item.getPrice());
    n.setQuantity(item.getQuantity());
    n.setCreatedAt(new Timestamp(System.currentTimeMillis()));
    n.setModifiedAt(new Timestamp(System.currentTimeMillis()));
    return itemRepository.save(n);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping(path="")
  public @ResponseBody Iterable<Item> getAllItems() {
    return itemRepository.findAll();
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping(path="")
  public @ResponseBody String removeItem (@RequestParam Integer id) {
    itemRepository.deleteById(id);
    return "Item removed successfully";
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PatchMapping(path="")
  public @ResponseBody Item updateItem (@RequestBody Item item) {
    Item newItem = itemRepository.findById(item.getId()).get();
    newItem.setModifiedAt(new Timestamp(System.currentTimeMillis()));
    newItem.setName(item.getName());
    newItem.setPrice(item.getPrice());
    newItem.setQuantity(item.getQuantity());
    itemRepository.save(newItem);
    return newItem;
  }
}