import React, { createContext, useState, useContext, useEffect } from 'react'

export const stateContext = createContext();

//return an object that saves the value of properties in the context
// data that is shared globally across the application
const getFreshContext = () => {
    if(localStorage.getItem('context') === null)
    {
        localStorage.setItem('context', JSON.stringify(
            {
                participantId:0,
                timeTaken:0,
                selectedOptions:[]
            }
        ));
    }
    
    return JSON.parse(localStorage.getItem('context'));
}

export default function useStateContext(){
    const {context, setContext }= useContext(stateContext)
    return { context, 
        setContext: obj => {setContext({...context,...obj})},
        resetContext: () => {
            localStorage.removeItem('context')
            setContext(getFreshContext());
        } };

}

export function ContextProvider({children}) {
    const [context, setContext] = useState(getFreshContext())

    //whenever there is a change in the context the callback function is called and localStorage is updated
    useEffect(() =>{
        localStorage.setItem('context', JSON.stringify(context))
    },[context])
    return (
        <stateContext.Provider value={{context, setContext}}>
            {children}
        </stateContext.Provider>
    )
}
