'use client';

import { useEffect, useState } from 'react';
import { Item } from './Item';
import { IAPIItem } from '@/types/items';
import { api } from '@/utils/axios';
import { AddItemModal } from './AddItemModal';
import { EditItemModal } from './EditItemModal';

export const MainSection = () => {
  const [_, setNewItem] = useState<Omit<IAPIItem, 'id'>>({
    name: '',
    price: 0,
    quantity: 0,
  });
  const [items, setItems] = useState<IAPIItem[]>([]);
  const [currentItemId, setCurrentItemId] = useState<number>(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    api.get('/').then((response) => setItems(response.data));
  }, [setItems]);

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
    price: number,
  ) {
    api
      .put(`/?id=${id}&name=${name}&quantity=${quantity}&price=${price}`)
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
    <div className="w-full bg-purple-300 p-2 rounded-md h-full min-h-full shadow">
      <div className="flex flex-row w-full mb-1">
        <h2 className="mr-auto">Nome</h2>
        <h2 className="mr-8">Quantidade</h2>
        <h2 className="min-w-[100px] flex justify-end mr-3">Preço</h2>
        <div className="flex flex-row min-w-[100px]"></div>
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

      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        type="button"
        onClick={() => setIsAddModalOpen(true)}
      >
        + Add Item
      </button>

      <AddItemModal
        isOpen={isAddModalOpen}
        handleCreateItem={handleCreateItem}
        closeModal={() => setIsAddModalOpen(false)}
      />

      <EditItemModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        handleEditItem={(name, quantity, price) =>
          handleEditItem(currentItemId, name, quantity, price)
        }
      />
    </div>
  );
};
