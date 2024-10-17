'use client';
import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#FFFFFF');

  const handleChangeColor = (newColor) => {
    setColor(newColor.target.value);
  };

  return <ColorContext.Provider value={{ color, handleChangeColor }}>{children}</ColorContext.Provider>;
};
