import { useState } from "react";
import Modal from "..";
import {
  Button,
  CloseButton,
  InnerContainer,
  Input,
  ModalTitle,
} from "../styles";

export interface IAddItemModalProps {
  isOpen: boolean;
  handleCreateItem: (name: string, quantity: number, price: number) => void;
  closeModal: () => void;
}

export const AddItemModal = (props: IAddItemModalProps) => {
  const { isOpen, handleCreateItem, closeModal } = props;

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Modal open={isOpen} onCancel={closeModal}>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <InnerContainer>
        <ModalTitle>Adicionar Item</ModalTitle>

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
            handleCreateItem(name, Number(quantity), Number(price));
            setName("");
            setQuantity("");
            setPrice("");
          }}
        >
          Salvar
        </Button>
      </InnerContainer>
    </Modal>
  );
};
