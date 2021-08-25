import React from 'react';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  const name = useSelector((state) => state);
  return <h1>Hello, {name}</h1>;
};
