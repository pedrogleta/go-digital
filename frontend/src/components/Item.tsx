import Image from 'next/image';
import editIcon from '../../public/edit.svg';
import deleteIcon from '../../public/delete.svg';

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
    <h2 className="min-w-[100px] flex justify-end">{props.price}</h2>
    <div className="flex flex-row min-w-[100px] justify-end">
      <Image
        src={editIcon}
        alt="Edit"
        width={22}
        className="hover:cursor-pointer"
      />
      <Image
        src={deleteIcon}
        alt="Delete"
        width={22}
        className="hover:cursor-pointer"
        style={{ marginLeft: 20 }}
      />
    </div>
  </div>
);
