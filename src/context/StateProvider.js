import React,{createContext,useContext,useReducer} from "react"

// creating a context [a place where our user info is pushed once logged in ]
export const stateContext=createContext()

// creating a provider to wrap our app within it to provide stateContext functionality [higher order component]

export const StateProvider=({reducer,initialState,children})=>{

  return  <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>


}

// pulling something from context layer
export const useStateValue=()=>useContext(stateContext)
