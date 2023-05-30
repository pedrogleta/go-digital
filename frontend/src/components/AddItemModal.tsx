import { IAPIItem } from '@/types/items';
import { useState } from 'react';
import Modal from 'react-modal';
import { MainSection } from './MainSection';

export interface IAddItemModalProps {
  isOpen: boolean;
  handleCreateItem: (name: string, quantity: number, price: number) => void;
}

Modal.setAppElement('#main');

export const AddItemModal = (props: IAddItemModalProps) => {
  const { isOpen, handleCreateItem } = props;

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState('');

  return (
    <Modal isOpen={isOpen}>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        name="price"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        type="submit"
        onClick={() => handleCreateItem(name, quantity, Number(price))}
      >
        Salvar
      </button>
    </Modal>
  );
};
