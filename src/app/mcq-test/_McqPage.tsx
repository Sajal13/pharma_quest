'use client';

import React, { useEffect, useState } from 'react';
import MapBox from '@/components/map/MapBox';
import { useRouter } from 'next/navigation';
import { CountryData } from '@/data/country';
import QuizModal from '@/components/modal/QuizModal';
import LockedCountryModal from '@/components/modal/LockedCountryModal';
import CongratulationsModal from '@/components/modal/CongratulationsModal';
import CompletedQuizModal from '@/components/modal/CompletedQuizModal';
import FailedQuizModal from '@/components/modal/FailedQuizModal';

const McqPage = () => {
  const router = useRouter();
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const [latestQuizScore, setLatestQuizScore] = useState(0);
  const [unlockedCountries, setUnlockedCountries] = useState<number[]>([1]);
  const [currentCountryToComplete, setCurrentCountryToComplete] = useState(1);
  const [showLockedModal, setShowLockedModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showCongratulationModal, setShowCongratulationModal] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const [showCompletedQuizModal, SetShowCompletedQuizModal] = useState(false);
  const [quizResult, setQuizResult] = useState<'pass' | 'fail' | null>(null);
  const [showFailedQuizModal, setShowFailedQuizModal] = useState(false);

  const handleUnlockCountry = (countryId: number) => {
    const newUnlockCountry = [...unlockedCountries, countryId];
    setUnlockedCountries(newUnlockCountry);
    setCurrentCountryToComplete(countryId);
    setShowCongratulationModal(false);
    localStorage.setItem('unlockedCountries', JSON.stringify(newUnlockCountry));
  };

  const handleCountryButtonClicked = (country: CountryData) => {
    setSelectedCountry(country);
    if (unlockedCountries.includes(country.id)) {
      if (country.id === currentCountryToComplete) {
        setShowQuizModal(true);
      } else {
        SetShowCompletedQuizModal(true);
      }
    } else {
      setShowLockedModal(true);
    }
  };

  const handleQuizComplete = (
    passed: boolean,
    lastScore: number,
    countryId: number
  ) => {
    setShowQuizModal(false);
    setLatestQuizScore(lastScore);
    if (passed) {
      const newScore = lastScore + score;
      setScore(newScore);
      setQuizResult('pass');
      localStorage.setItem('totalScore', newScore.toString());

      if (currentCountryToComplete === countryId) {
        setShowCongratulationModal(true);
      }
    } else {
      setQuizResult('fail');
      setShowFailedQuizModal(true);
    }
  };

  useEffect(() => {
    const name = localStorage.getItem('playerName');
    const totalScore = localStorage.getItem('totalScore');
    const unlocked = localStorage.getItem('unlockedCountries');

    if (!name || name.trim() === '') {
      router.push('/');
      return;
    }

    setPlayerName(name);
    setScore(totalScore ? Number(totalScore) : 0);

    if (unlocked) {
      try {
        const parsedUnlocked = JSON.parse(unlocked);
        if (Array.isArray(parsedUnlocked) && parsedUnlocked.length > 0) {
          setUnlockedCountries(parsedUnlocked);
          setCurrentCountryToComplete(
            parsedUnlocked[parsedUnlocked.length - 1]
          );
        }
      } catch (e) {
        console.error(
          'Failed to parse unlocked countries from localStorage',
          e
        );
      }
    }
  }, []);

  return (
    <>
      <MapBox
        playerName={playerName}
        score={score}
        unlockCountries={unlockedCountries}
        currentCountryToComplete={currentCountryToComplete}
        onCountryButtonClick={handleCountryButtonClicked}
      />

      {showQuizModal && selectedCountry && (
        <QuizModal
          countryId={currentCountryToComplete}
          onClose={() => setShowQuizModal(false)}
          onQuizComplete={handleQuizComplete}
        />
      )}

      {showLockedModal && selectedCountry && (
        <LockedCountryModal
          onClose={() => setShowLockedModal(false)}
          selectedCountry={selectedCountry}
        />
      )}

      {showCongratulationModal && quizResult === 'pass' && (
        <CongratulationsModal
          quizScore={latestQuizScore}
          unlockedCountries={unlockedCountries}
          onUnlockCountry={handleUnlockCountry}
          onClose={() => setShowCongratulationModal(false)}
        />
      )}
      {showCompletedQuizModal && selectedCountry && (
        <CompletedQuizModal
          onClose={() => SetShowCompletedQuizModal(false)}
          selectedCounter={selectedCountry}
        />
      )}
      {showFailedQuizModal && quizResult === 'fail' && (
        <FailedQuizModal
          onClose={() => setShowFailedQuizModal(false)}
          quizScore={latestQuizScore}
        />
      )}
    </>
  );
};

export default McqPage;
