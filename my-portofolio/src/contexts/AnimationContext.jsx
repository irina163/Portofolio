import { createContext, useContext, useState } from "react";

//Context lets the parent component make some information available to any component 
//in the tree below it—no matter how deep—without passing it explicitly through props.
//createContext lets you create a context that components can provide or read.
//const SomeContext = createContext(defaultValue)

//createContext returns a context object.
//The context object itself does not hold any information. 
//It represents which context other components read or provide
//SomeContext.Provider lets you provide the context value to components.
//useContext(SomeContext) or SomeContext.Consumer for reading the context value.

const AnimationContext = createContext({})

export function CharacterAnimationsProvider(props) {
    const [animationIndex, setAnimationIndex] = useState(0)
    const [animations, setAnimations] = useState([])

    return (
        //Wrap components into a context provider to specify the context value
        // for all components inside:
        <AnimationContext.Provider value={{
            animationIndex, setAnimationIndex,
            animations, setAnimations,
        }}>
            {/* props.children used to accesss the children of CharacterAnimationsProvider */}
            {props.children}
        </AnimationContext.Provider>
    )
}

export function useCharacterAnimations(){
    return(
        useContext(AnimationContext)
    )
}