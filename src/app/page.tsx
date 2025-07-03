'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LottieBackground from '@/components/lottie/LottieBackground';
import GameStartModal from '@/components/modal/GameStartModal';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Home() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isPlayerExist, setIsPlayerExist] = useState(false);

  const handleStartButtonClicked = () => {
    if (isPlayerExist) {
      router.push('/mcq-test');
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const isExist = localStorage.getItem('playerName');
    if (isExist) {
      setIsPlayerExist(true);
    }
  }, []);

  return (
    <>
      <main className="min-h-screen min-w-screen bg-white z-0 relative flex justify-center items-center">
        <LottieBackground />
        <Card
          title="PharmaQuest"
          isWriting={true}
        >
          <div className="flex justify-center">
            <Button
              title='Start'
              className="group hover:scale-105 uppercase font-press-start"
              endIcon={
                <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-linear duration-200" />
              }
              onClick={handleStartButtonClicked}
            />
          </div>
        </Card>
      </main>
      {isOpen && <GameStartModal setIsOpen={setIsOpen} />}
    </>
  );
}
