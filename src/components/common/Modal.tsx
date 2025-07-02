import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';

interface ModalProps {
  setCloseButtonClick: () => void;
}

const Modal = ({
  setCloseButtonClick,
  children
}: PropsWithChildren<ModalProps>) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-lg w-full relative">
        <button
          onClick={setCloseButtonClick}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
        >
          <RiCloseLargeLine />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
