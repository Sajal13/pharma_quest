'use client'

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

type Props = {};

const TypeWriter = (props: Props) => {
  return (
    <Typewriter
      words={[
        'Explore the world, solve medicine challenges, and become a global health expert!'
      ]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={0}
      delaySpeed={1000}
    />
  );
};

export default TypeWriter;
