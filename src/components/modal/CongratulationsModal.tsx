'use client';

import React, { useMemo } from 'react';
import Modal from '@/components/common/Modal';
import { countries } from '@/data/country';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import Button from '@/components/common/Button';

interface CongratulationsModal {
  quizScore: number;
  unlockedCountries: number[];
  onUnlockCountry: (countryId: number) => void;
  onClose: () => void;
}

const CongratulationsModal = ({
  quizScore,
  unlockedCountries,
  onUnlockCountry,
  onClose
}: CongratulationsModal) => {
  const router = useRouter();
  const remainingLockedCountries = useMemo(
    () => countries.filter(country => !unlockedCountries.includes(country.id)),
    [unlockedCountries]
  );
  const handleContinueButtonClick = () => {
    onClose();
    if (remainingLockedCountries.length === 0) {
      router.push('/game-over');
    }
  };
  const handleUnlock = (countryId: number) => {
    onUnlockCountry(countryId);
  };
  return (
    <Modal setCloseButtonClick={onClose}>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 font-inter">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-gray-800 mb-2 font-inter">
          You scored{' '}
          <span className="font-bold text-green-600">
            {quizScore.toFixed(0)}%
          </span>{' '}
          on the quiz!
        </p>

        {remainingLockedCountries.length > 0 ? (
          <>
            <p className="text-lg text-gray-700 mb-6 font-inter">
              Choose a new country to unlock:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {remainingLockedCountries.map(country => (
                <Button
                  key={country.id}
                  title={country.name}
                  className="group hover:scale-105 uppercase font-press-start !bg-red-600 !border-red-600 hover:!border-green-600 hover:!bg-green-600"
                  onClick={() => handleUnlock(country.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-xl text-gray-700 mb-6 font-inter">
            You've unlocked all available countries! Great job!
          </p>
        )}

        <div className='flex justify-center mt-6'>
          <Button
            title="Continue Game"
            className="group hover:scale-105 uppercase font-press-start"
            onClick={handleContinueButtonClick}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CongratulationsModal;
