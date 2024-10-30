"use client"
import { Action, initState, reducer } from "@/reducers/AppReducer"
import { Dispatch,createContext, ReactNode, useMemo, useContext, useReducer } from "react"


type State = {
    displayNavigation: boolean
    themeMode: 'light' | 'dark'
    currentModel: string
}

type AppcontextProps = {
    state: State
    dispatch: Dispatch<Action>
}


const AppContext = createContext<AppcontextProps>(null!)


export default function AppContextProvider({children}: {children: ReactNode}) {

   
    const [state, dispatch] = useReducer(reducer,initState)

    const contextValue = useMemo(()=>{
        return {state , dispatch}
    },[state,dispatch])

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
}