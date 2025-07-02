import { CountryData } from '@/data/country';
import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';

interface LockedCountryModalProps {
  onClose: () => void;
  selectedCountry: CountryData;
}

const LockedCountryModal = ({
  onClose,
  selectedCountry
}: LockedCountryModalProps) => {
  return (
    <Modal setCloseButtonClick={onClose}>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-red-600 mb-4">Locked!</h3>
        <p className="text-lg text-gray-700 mb-6">
          {selectedCountry.name} is locked. You need to unlock it first by
          completing the current country's challenge.
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

export default LockedCountryModal;
