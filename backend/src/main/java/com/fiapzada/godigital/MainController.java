package com.fiapzada.godigital;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path="/item") // This means URL's start with /demo (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private ItemRepository itemRepository;

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path="/") // Map ONLY POST Requests
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

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping(path="/")
  public @ResponseBody Iterable<Item> getAllUsers() {
    // This returns a JSON or XML with the users
    return itemRepository.findAll();
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping(path="/")
  public @ResponseBody String removeItem (@RequestParam Integer id) {
    itemRepository.deleteById(id);
    return "Item removed successfully";
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PutMapping(path="/")
  public @ResponseBody String updateItem (@RequestParam Integer id, @RequestParam String name, @RequestParam Double price, @RequestParam Integer quantity) {

    Item newItem = new Item();
    newItem.setId(id);
    newItem.setName(name);
    newItem.setQuantity(quantity);
    newItem.setPrice(price);

    itemRepository.deleteById(id);
    itemRepository.save(newItem);
    return "Item updated successfully";
  }
}