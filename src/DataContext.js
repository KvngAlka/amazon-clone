import React, { createContext, useContext, useReducer } from 'react'


const DataContext = createContext();



export const DataProvider = ({children,initialState,reducer})=>{
    return(
        <DataContext.Provider value = {useReducer(reducer,initialState)}>
            {children}
        </DataContext.Provider>
    )
}

export  const StateValue = ()=> useContext(DataContext)
