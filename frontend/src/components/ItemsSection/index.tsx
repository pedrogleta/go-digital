"use client";

import { useEffect, useMemo, useState } from "react";
import { Item } from "../Item";
import { IAPIItem } from "@/types/items";
import { api } from "@/utils/axios";
import { AddItemModal } from "../Modal/AddItemModal";
import { EditItemModal } from "../Modal/EditItemModal";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "./styles";

export const MainSection = () => {
  const [items, setItems] = useState<IAPIItem[]>([]);
  const [currentItemId, setCurrentItemId] = useState<number>(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    api.get("/item").then((response) => setItems(response.data));
  }, [setItems]);

  const currentItem = useMemo(
    () => items.find((item) => item.id === currentItemId),
    [items, currentItemId]
  );

  function handleCreateItem(name: string, quantity: number, price: number) {
    api.post("/item", { name, quantity, price }).then((response) => {
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
    api.patch("/item", { id, name, quantity, price }).then(() => {
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
    api.delete(`/item?id=${id}`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  }

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Quantidade</TableHeader>
            <TableHeader>Preço</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
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
        </TableBody>
      </Table>

      <Button type="button" onClick={() => setIsAddModalOpen(true)}>
        + Adicionar Item
      </Button>

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
    </Container>
  );
};
