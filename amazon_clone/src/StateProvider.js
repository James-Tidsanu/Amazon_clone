import React, { createContext, useContext, useReducer } from 'react'

// Prepare the datalayer
export const StateContext = createContext();

// wrap our app and provide the datalayer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>

);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);
