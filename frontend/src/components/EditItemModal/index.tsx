import { IAPIItem } from "@/types/items";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { Button, CloseButton, Container, Input, ModalTitle } from "./styles";

export interface IEditItemModalProps {
  isOpen: boolean;
  handleEditItem: (name: string, quantity: number, price: number) => void;
  closeModal: () => void;
  currentItem?: Omit<IAPIItem, "id">;
}

export const EditItemModal = (props: IEditItemModalProps) => {
  const { isOpen, handleEditItem, closeModal, currentItem } = props;

  const [name, setName] = useState(currentItem?.name || "");
  const [quantity, setQuantity] = useState(currentItem?.quantity.toString());
  const [price, setPrice] = useState(currentItem?.price.toString());

  useEffect(() => {
    setName(currentItem?.name || "");
    setQuantity(currentItem?.quantity.toString() || "");
    setPrice(currentItem?.price.toString() || "");
  }, [setName, setPrice, setQuantity, currentItem]);

  return (
    <Modal open={isOpen} onCancel={closeModal}>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <Container>
        <ModalTitle>Editar Item</ModalTitle>

        <Input
          name="name"
          type="text"
          placeholder="Nome do item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="quantity"
          type="text"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          name="price"
          type="text"
          placeholder='Preço (ex: "1.99")'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button
          type="submit"
          onClick={() => {
            handleEditItem(name, Number(quantity), Number(price));
            setName("");
            setQuantity("");
            setPrice("");
          }}
        >
          Salvar
        </Button>
      </Container>
    </Modal>
  );
};
