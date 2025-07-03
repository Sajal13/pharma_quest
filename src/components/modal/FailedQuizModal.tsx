import React from 'react';
import Modal from '@/components/common/Modal';
import Button from '@/components/common/Button';

interface FailedQuizModalProps {
  onClose: () => void;
  quizScore: number;
}
const FailedQuizModal = ({ onClose, quizScore }: FailedQuizModalProps) => {
  return (
    <Modal setCloseButtonClick={onClose}>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 font-inter flex items-center">
          Sorry! You have failed 😣
        </h2>
        <p className="text-xl text-gray-800 mb-6 font-inter">
          You scored{' '}
          <span className="font-bold text-red-600">
            {quizScore.toFixed(0)}%
          </span>{' '}
          on the quiz!
        </p>
        <p className="text-xl text-gray-800 mb-6 font-inter">
          Score more than <span className="font-bold text-green-600">80%</span>{' '}
          to unlock next country!
        </p>
        <Button
          title="Continue Game"
          className="group hover:scale-105 uppercase font-press-start"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
};

export default FailedQuizModal;
