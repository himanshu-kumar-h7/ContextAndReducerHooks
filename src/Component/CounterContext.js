import { createContext } from "react";
import ReducerExample from "./ReducerExample";

const CounterContext = createContext( {
   
})

export const CounterContextProvider = CounterContext.Provider
export const CounterContextConsumer = CounterContext.Consumer

export default CounterContext