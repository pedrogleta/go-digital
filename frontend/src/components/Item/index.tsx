import Image from "next/image";

import deleteIcon from "@/../public/delete.svg";
import editIcon from "@/../public/edit.svg";
import { TableData, TableRow } from "./styles";

interface ItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  handleEditItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
}

export const Item = (props: ItemProps) => {
  return (
    <TableRow>
      <TableData>{props.name}</TableData>
      <TableData>{props.quantity}</TableData>
      <TableData>R${props.price}</TableData>
      <TableData>
        <Image
          src={editIcon}
          alt="Edit"
          width={22}
          className="hover:cursor-pointer"
          onClick={() => props.handleEditItem(props.id)}
        />
        <Image
          src={deleteIcon}
          alt="Delete"
          width={22}
          className="hover:cursor-pointer"
          style={{ marginLeft: 20 }}
          onClick={() => props.handleDeleteItem(props.id)}
        />
      </TableData>
    </TableRow>
  );
};
