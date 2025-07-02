import { CountryData } from '@/data/country';
import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';

interface CompletedQuizModalProps {
  onClose: () => void;
  selectedCounter: CountryData;
}

const CompletedQuizModal = ({
  onClose,
  selectedCounter
}: CompletedQuizModalProps) => {
  return (
    <Modal setCloseButtonClick={onClose}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Country Completed!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {selectedCounter.name} is completed. Go for the next country.
        </p>
        <div className='flex justify-center'>
          <Button
            title="Got it"
            className="bg-red-500 hover:bg-red-600 text-white font-press-start"
            onClick={onClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CompletedQuizModal;
