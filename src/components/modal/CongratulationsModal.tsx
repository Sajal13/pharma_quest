import React, { useMemo } from 'react';
import Modal from '../common/Modal';
import { countries } from '@/data/country';

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
  const remainingLockedCountries = useMemo(
    () => countries.filter(country => !unlockedCountries.includes(country.id)),
    [unlockedCountries]
  );

  console.log(remainingLockedCountries);
  const handleUnlock = (countryId: number) => {
    onUnlockCountry(countryId);
    onClose();
  };
  return (
    <Modal setCloseButtonClick={onClose}>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 font-inter">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-gray-800 mb-6 font-inter">
          You scored{' '}
          <span className="font-bold text-green-600">
            {quizScore.toFixed(0)}%
          </span>{' '}
          on the quiz!
        </p>

        {remainingLockedCountries.length > 0 ? (
          <>
            <p className="text-lg text-gray-700 mb-4 font-inter">
              Choose a new country to unlock:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {remainingLockedCountries.map(country => (
                <button
                  key={country.id}
                  onClick={() => handleUnlock(country.id)}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 font-inter"
                >
                  {country.name}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-xl text-gray-700 mb-6 font-inter">
            You've unlocked all available countries! Great job!
          </p>
        )}
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 font-inter"
        >
          Continue Game
        </button>
      </div>
    </Modal>
  );
};

export default CongratulationsModal;
