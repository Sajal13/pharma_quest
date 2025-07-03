'use client';

import React, { useMemo, useState } from 'react';
import { quizItems } from '@/data/quizQuestions';
import { countries } from '@/data/country';
import Modal from '../common/Modal';
import Button from '../common/Button';

interface QuizModalProps {
  countryId: number;
  onQuizComplete: (passed: boolean, score: number, countryId: number) => void;
  onClose: () => void;
}

const QuizModal = ({ countryId, onQuizComplete, onClose }: QuizModalProps) => {
  const quizQuestions = useMemo(() => {
    return quizItems[
      countries.find(country => country.id === countryId)?.quizId || ''
    ];
  }, [countryId]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <Modal setCloseButtonClick={onClose}>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 ">
          Quiz Not Found
        </h2>
        <p className="text-gray-600 font-inter">
          No quiz questions available for this country.
        </p>
      </Modal>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(false);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      setShowFeedback(true);
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newCorrectCount = isCorrect
      ? correctAnswersCount + 1
      : correctAnswersCount;

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCorrectAnswersCount(newCorrectCount);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScore = (newCorrectCount / quizQuestions.length) * 100;
      console.log(finalScore);
      setCorrectAnswersCount(newCorrectCount);
      setIsQuizSubmitted(true);
      onQuizComplete(finalScore >= 80, finalScore, countryId);
    }
  };

  return (
    <Modal setCloseButtonClick={onClose}>
      <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-6 font-inter text-center">
        Quiz for {countries.find(c => c.id === countryId)?.name}
      </h2>

      {!isQuizSubmitted ? (
        <>
          <p className="text-lg text-gray-800 mb-4 font-inter">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}:
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-6 font-inter">
            {currentQuestion.question}
          </p>

          <div className="flex flex-col gap-4 mb-6">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`px-3 py-2 cursor-pointer rounded-lg border-1 text-left text-lg font-inter transition duration-200 ease-in-out
                  ${
                    selectedAnswer === option
                      ? 'bg-blue-200 border-blue-500 text-blue-800 shadow-md'
                      : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showFeedback && !selectedAnswer && (
            <p className="text-red-500 text-md mb-6 font-inter">
              Please select an answer before proceeding.
            </p>
          )}
          <div className="flex justify-center">
            <Button
              title={
                currentQuestionIndex < quizQuestions.length - 1
                  ? 'Next Question'
                  : 'Submit Quiz'
              }
              className="group hover:scale-105 uppercase font-press-start"
              onClick={handleNextQuestion}
            />
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600 mb-4 font-inter">
            Quiz Completed!
          </p>
          <p className="text-xl text-gray-800 mb-6 font-inter">
            You answered {correctAnswersCount} out of {quizQuestions.length}{' '}
            questions correctly.
          </p>
          <Button
            title={
              currentQuestionIndex < quizQuestions.length - 1
                ? 'Next Question'
                : 'Submit Quiz'
            }
            className="group hover:scale-105 uppercase font-press-start"
            onClick={onClose}
          />
        </div>
      )}
    </Modal>
  );
};

export default QuizModal;
