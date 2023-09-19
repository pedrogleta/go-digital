"use client";

import { useEffect, useMemo, useState } from "react";
import { Item } from "./Item";
import { IAPIItem } from "@/types/items";
import { api } from "@/utils/axios";
import { AddItemModal } from "./AddItemModal";
import { EditItemModal } from "./EditItemModal";

export const MainSection = () => {
  const [items, setItems] = useState<IAPIItem[]>([]);
  const [currentItemId, setCurrentItemId] = useState<number>(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    api.get("/").then((response) => setItems(response.data));
  }, [setItems]);

  const currentItem = useMemo(
    () => items.find((item) => item.id === currentItemId),
    [items, currentItemId]
  );

  function handleCreateItem(name: string, quantity: number, price: number) {
    api
      .post(`/?name=${name}&quantity=${quantity}&price=${price}`)
      .then((response) => {
        const createdItem = response.data;
        setItems([...items, createdItem]);
        setIsAddModalOpen(false);
      });
  }

  function handleEditItem(
    id: number,
    name: string,
    quantity: number,
    price: number
  ) {
    api
      .patch(`/?id=${id}&name=${name}&quantity=${quantity}&price=${price}`)
      .then(() => {
        setItems((state) => {
          const itemIndex = state.findIndex((item) => item.id === id);
          const newState = [...state];
          newState[itemIndex] = { id, name, quantity, price };
          return newState;
        });
        setIsEditModalOpen(false);
      });
  }

  function handleDeleteItem(id: number) {
    api.delete(`/?id=${id}`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  }

  return (
    <div>
      <div>
        <h2>Nome</h2>
        <h2>Quantidade</h2>
        <h2>Preço</h2>
        <div></div>
      </div>

      <div className="overflow-auto">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={(id) => {
              setCurrentItemId(id);
              setIsEditModalOpen(true);
            }}
          />
        ))}
      </div>

      <button type="button" onClick={() => setIsAddModalOpen(true)}>
        + Adicionar Item
      </button>

      <AddItemModal
        isOpen={isAddModalOpen}
        handleCreateItem={handleCreateItem}
        closeModal={() => setIsAddModalOpen(false)}
      />

      <EditItemModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        currentItem={currentItem}
        handleEditItem={(name, quantity, price) =>
          handleEditItem(currentItemId, name, quantity, price)
        }
      />
    </div>
  );
};
