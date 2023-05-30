import { IAPIItem } from '@/types/items';
import { useState } from 'react';
import Modal from 'react-modal';
import { MainSection } from './MainSection';

export interface IEditItemModalProps {
  isOpen: boolean;
  handleEditItem: (name: string, quantity: number, price: number) => void;
  closeModal: () => void;
}

Modal.setAppElement('#main');

export const EditItemModal = (props: IEditItemModalProps) => {
  const { isOpen, handleEditItem, closeModal } = props;

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          width: 500,
          height: 380,
          margin: 'auto',
        },
      }}
    >
      <div className="w-fit ml-auto cursor-pointer" onClick={closeModal}>
        X
      </div>
      <div className="h-fit flex flex-col justify-center mt-8">
        <h1 className="font-extrabold leading-none tracking-tight text-gray-900 text-4xl mx-auto mb-8">
          Editar Item
        </h1>

        <input
          name="name"
          type="text"
          placeholder="Nome do item"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2.5 shadow"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="quantity"
          type="text"
          placeholder="Quantidade"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2.5 shadow"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          name="price"
          type="text"
          placeholder='Preço (ex: "1.99")'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2.5 shadow"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow"
          type="submit"
          onClick={() => {
            handleEditItem(name, Number(quantity), Number(price));
            setName('');
            setQuantity('');
            setPrice('');
          }}
        >
          Salvar
        </button>
      </div>
    </Modal>
  );
};
