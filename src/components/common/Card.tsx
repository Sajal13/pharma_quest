import React, { PropsWithChildren } from 'react';
import TypeWriter from '@/components/module/home/TypeWriter';
import Button from './Button';
import { FaArrowRightLong } from 'react-icons/fa6';
interface CardProps {
  title: string;
  isWriting?: boolean;
  description?: string;
}

const Card = ({
  title,
  isWriting = false,
  description,
  children
}: PropsWithChildren<CardProps>) => {
  return (
    <div className="text-center max-w-xl w-full backdrop-blur-xs bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight font-press-start ">
        {title}
      </h2>
      <h4 className="text-lg md:text-xl lg:text-2xl text-blue-500 font-semibold min-h-[8rem] max-w-xs mx-auto mb-6">
        {isWriting ? <TypeWriter /> : description}
      </h4>
      {children}
    </div>
  );
};

export default Card;
