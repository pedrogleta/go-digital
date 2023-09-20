import Image from "next/image";

import deleteIcon from "@/../public/delete.svg";
import editIcon from "@/../public/edit.svg";
import { TableData, TableRow } from "./styles";

interface TransactionItemProps {
  id: number;
  name: string;
  quantity: number;
  unitCost: number;
  handleEditItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
}

export const TransactionItem = (props: TransactionItemProps) => {
  9;
  return (
    <TableRow>
      <TableData>{props.name}</TableData>
      <TableData>{props.quantity}</TableData>
      <TableData>R${props.unitCost}</TableData>
      <TableData>R${props.quantity * props.unitCost}</TableData>
    </TableRow>
  );
};
