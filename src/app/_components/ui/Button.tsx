'use client';
import React from 'react';
import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';

const Button: React.FC<ButtonProps> = ({ btnType, text, link }) => {
  const buttonStyles: Record<string, string> = {
    primary:
      'm-3 flex items-center bg-primaryLightGreen justify-center px-8 py-3 rounded-xl text-white font-bold text-lg max-w-[200px]',
    secondary:
      'm-3 text-secondaryDarkGreen border-2 border-primaryLightGreen px-8 py-3 rounded-xl ',
  };

  const className: string = buttonStyles[btnType] || '';

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className={className}
    >
      <a href={link}>{text}</a>
    </motion.button>
  );
};

export default Button;
