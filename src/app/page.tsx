'use client';

import { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import LottieBackground from '@/components/lottie/LottieBackground';
import GameStartModal from '@/components/modal/GameStartModal';
import TypeWriter from '@/components/module/home/TypeWriter';

export default function Home() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isPlayerExist, setIsPlayerExist] = useState(false);

  const handleStartButtonClicked = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const isExist = localStorage.getItem('playerName');
    if (isExist) {
      router.push('/mcq-test');
    }
  }, []);

  return (
    <>
      <main className="min-h-screen min-w-screen bg-white z-0 relative flex justify-center items-center">
        <LottieBackground />
        <div className="text-center max-w-xl w-full backdrop-blur-xs bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight font-press-start ">
            PharmaQuest
          </h2>
          <h4 className="text-lg md:text-xl lg:text-2xl text-blue-500 font-semibold min-h-[8rem] max-w-xs mx-auto mb-6">
            <TypeWriter />
          </h4>
          <div className="flex justify-center">
            <Button
              title="Start"
              className="group hover:scale-105 uppercase font-press-start"
              endIcon={
                <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-linear duration-200" />
              }
              onClick={handleStartButtonClicked}
            />
          </div>
        </div>
      </main>
      {isOpen && <GameStartModal setIsOpen={setIsOpen} />}
    </>
  );
}
