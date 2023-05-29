"use client";

import { useEffect, useState } from "react";
import { Item } from "./Item";
import { IAPIItem } from "@/types/items";
import { axiosClient } from "@/utils/axios";

export const MainSection = () => {
  const [items, setItems] = useState<IAPIItem[]>([]);

  useEffect(() => {
    axiosClient.get("/").then((response) => setItems(response.data));
  }, [setItems]);

  return (
    <div className="w-full bg-purple-300 p-2 rounded-md h-full min-h-full shadow">
      <div className="flex flex-row w-full mb-1">
        <h2 className="mr-auto">Nome</h2>
        <h2 className="mr-8">Quantidade</h2>
        <h2>Preço</h2>
      </div>

      <div className="overflow-auto h-[97%]">
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
    </div>
  );
};
