package com.fiapzada.godigital;

import org.springframework.data.repository.CrudRepository;

import com.fiapzada.godigital.Item;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}