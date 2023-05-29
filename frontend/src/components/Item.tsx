interface ItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export const Item = (props: ItemProps) => (
  <div className="flex flex-row w-full bg-white shadow rounded px-5 py-2 my-2">
    <h2 className="mr-auto">{props.name}</h2>
    <h2 className="mr-8">{props.quantity}</h2>
    <h2>{props.price}</h2>
  </div>
);
