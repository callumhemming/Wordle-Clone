import React, {Children, cloneElement} from "react"
import { useState } from "react"
import Style from "./Keyboard.module.css" 
import Row from "./Row"
import Backspace from "./Backspace"
import Enter from "./Enter"

interface Props{
    onEnter?:Function;
    children: JSX.Element[];
}



function Keyboard({onEnter, children}:Props): JSX.Element{

    const [keyboardValue, setKeyboardValue] = useState("")


    function addLetter(letter:string):string{
        if(keyboardValue.length >= 6){
            throw new Error("keyboardValue is limited to 6 characters")
        }
        setKeyboardValue(()=>keyboardValue+letter)
        return keyboardValue
    }

    function removeLetter():string{
        if(keyboardValue.length === 0){ throw new Error("No more characters can be deleted")}
        setKeyboardValue(()=>keyboardValue.slice(0,-1))
        return keyboardValue
    }
    const props={
        keyboardValue,
        setKeyboardValue,
        addLetter,
        removeLetter
    }

    

    return(
        <div className={Style.keyboard}>
         <h1>{keyboardValue}</h1>
         
            {
            Children.map(children, (Child)=>{
                return(
                    cloneElement(Child, {...props}, [Child.props.children]) 
                )
            }) 
            }
        

         
         
        </div>
    )
}

Keyboard.Row = Row
Keyboard.Backspace = Backspace
Keyboard.Enter = Enter
export default Keyboard

