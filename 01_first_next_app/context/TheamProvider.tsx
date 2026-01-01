import React, { Children, createContext, useContext } from "react"

interface IState {
    theam: "dark" | "light"
}

interface IAction {
    type: "CHANGE_THEAM"
}
// type ActionType = IAction1 | IAction2 
// when we have multiple action types this is the solution
// why we need multiple action types : when we have multiple ways to change the state

interface IContext {
    state: IState,
    dispatch: React.Dispatch<IAction>
}

const INITIAL_STATE: IState = {
    theam: "dark"
}

export const TheamContext = createContext<IContext>({ state: INITIAL_STATE, dispatch: () => { } })

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "CHANGE_THEAM":
            return {
                ...state, // no need here but for info
                theam: state.theam === "dark" ? "light" : "dark"
            }

        default:
            return state
    }
}

export default function TheamProvider({children}: {children: React.ReactNode}){

    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

    return <>
        <TheamContext value={{state, dispatch}}>
            {children}
        </TheamContext>
    </>
}

export const useTheam = () => {
    return useContext(TheamContext)
}
