'use client';

import React, { useEffect, useState } from 'react';
import MapBox from '@/components/map/MapBox';
import { useRouter } from 'next/navigation';
import { CountryData } from '@/data/country';
import QuizModal from '@/components/modal/QuizModal';
import LockedCountryModal from '@/components/modal/LockedCountryModal';
import CongratulationsModal from '@/components/modal/CongratulationsModal';
import CompletedQuizModal from '@/components/modal/CompletedQuizModal';

const Page = () => {
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

  const handleUnlockCountry = (countryId: number) => {
    setUnlockedCountries(prev => [...prev, countryId]);
    setCurrentCountryToComplete(countryId);
    setShowCongratulationModal(false);
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
    score: number,
    countryId: number
  ) => {
    setShowQuizModal(false);
    if (passed) {
      setScore(prev => prev + score);
      setQuizResult('pass');
      setLatestQuizScore(score)
      if (currentCountryToComplete === countryId) {
        setShowCongratulationModal(true);
      }
    } else {
      setQuizResult('fail');
    }
  };
  useEffect(() => {
    const name = localStorage.getItem('playerName');
    const totalScore = localStorage.getItem('totalScore')
    if (!name || name?.trim() === '') {
      router.push('/');
      return;
    }
    setPlayerName(name);
    setScore(totalScore ? Number(totalScore) : 0);
    console.log(name);
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
          onClose={() => {
            setShowCongratulationModal(false);
            localStorage.setItem("totalScore", score.toString())
          }}
        />
      )}
      {showCompletedQuizModal && selectedCountry && (
        <CompletedQuizModal
          onClose={() => SetShowCompletedQuizModal(false)}
          selectedCounter={selectedCountry}
        />
      )}
    </>
  );
};

export default Page;
