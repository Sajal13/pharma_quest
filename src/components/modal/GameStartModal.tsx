'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal';
import Button from '@/components/common/Button';
import { FaArrowRightLong } from 'react-icons/fa6';

const GameStartModal = ({
  setIsOpen
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [playerName, setPlayerName] = useState('');
  const router = useRouter()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('playerName', playerName);
    router.push('/mcq-test')
    setPlayerName('')
  }
  return (
    <>
      <Modal setCloseButtonClick={() => setIsOpen(false)}>
        <form className="text-center" onSubmit={handleFormSubmit}>
          <label
            htmlFor="playerName"
            className="font-press-start italic text-blue-500"
          >
            Enter Your Name
          </label>
          <input
            type="text"
            name="playerName"
            id="playerName"
            placeholder="Enter your name..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="py-2 px-4 mt-3 w-100 focus:outline-none border-blue-300 border-1 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg font-press-start text-blue-400"
          />

          <div className='flex justify-center mt-5'>
            <Button
              type="submit"
              title="Continue"
              className="w-100 group hover:scale-105 uppercase font-press-start disabled:cursor-not-allowed disabled:bg-blue-200 disabled:border-blue-200 disabled:hover:scale-100"
              endIcon={
                <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-linear duration-200" />
              }
              onClick={() => setIsOpen(true)}
              disabled={playerName === ''}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default GameStartModal;
