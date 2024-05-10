import { createContext } from "react";

const CounterContext = createContext( {
    Count : 1,
})

export const CounterContextProvider = CounterContext.Provider
export const CounterContextConsumer = CounterContext.Consumer

export default CounterContext