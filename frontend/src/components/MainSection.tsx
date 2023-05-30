'use client';

import { useEffect, useState } from 'react';
import { Item } from './Item';
import { IAPIItem } from '@/types/items';
import { api } from '@/utils/axios';
import { AddItemModal } from './AddItemModal';

export const MainSection = () => {
  const [_, setNewItem] = useState<Omit<IAPIItem, 'id'>>({
    name: '',
    price: 0,
    quantity: 0,
  });
  const [items, setItems] = useState<IAPIItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    api.get('/').then((response) => setItems(response.data));
  }, [setItems]);

  function handleCreateItem(name: string, quantity: number, price: number) {
    api
      .post(`/?name=${name}&quantity=${quantity}&price=${price}`)
      .then((response) => {
        const createdItem = response.data;
        setItems([...items, createdItem]);
        setIsModalOpen(false);
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
          />
        ))}
      </div>

      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Item
      </button>

      <AddItemModal isOpen={isModalOpen} handleCreateItem={handleCreateItem} />
    </div>
  );
};
