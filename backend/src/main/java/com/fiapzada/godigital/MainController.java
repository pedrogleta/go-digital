package com.fiapzada.godigital;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path="/") // This means URL's start with /demo (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private ItemRepository itemRepository;

  @PostMapping(path="/add") // Map ONLY POST Requests
  public @ResponseBody String addNewItem (@RequestParam String name, @RequestParam Double price, @RequestParam Integer quantity) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Item n = new Item();
    n.setName(name);
    n.setPrice(price);
    n.setQuantity(quantity);
    itemRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Item> getAllUsers() {
    // This returns a JSON or XML with the users
    return itemRepository.findAll();
  }

  @DeleteMapping(path="/delete")
  public @ResponseBody String removeItem (@RequestParam Integer id) {
    itemRepository.deleteById(id);
    return "Item removed successfully";
  }

  @PatchMapping(path="/update")
  public @ResponseBody String updateItem (@RequestParam Integer id) {
    Item newItem = new Item();
    itemRepository.findById(id);
    return "Item updated successfully";
  }
}