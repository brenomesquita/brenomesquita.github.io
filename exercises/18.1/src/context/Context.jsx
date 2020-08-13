import React, { useState, Children } from 'react';
import { SuperContext } from './SuperContext';

export const Context = ({children}) => {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const sum1 = (value) => {
    setNumOne({numOne:value.target.value})
  }
  const sum2 = (value) => {
    setNumTwo({numTwo:value.target.value})
  }
    const contextValue = {
      numOne,
      sum1,
      numTwo,
      sum2,
    };

    return (
      <SuperContext.Provider value={contextValue}>
        {children}
      </SuperContext.Provider>
    )
  }
