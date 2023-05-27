'use client';

import { useEffect, useState } from 'react';
import { Item } from './Item';
import { IAPIItem } from '@/types/items';

export const MainSection = () => {
  const [items, setItems] = useState<IAPIItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [setItems]);

  return (
    <div className="ml-4 w-1/2">
      <div className="flex flex-row w-full">
        <h2 className="mr-auto">Nome</h2>
        <h2 className="mr-8">Quantidade</h2>
        <h2>Preço</h2>
      </div>

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
  );
};
