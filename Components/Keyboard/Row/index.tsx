import React,{cloneElement} from "react";
import Style from "./Row.module.css";
import Key from "../Key";

interface Props {
  children: string;
  prepend?: any;
  append?: any;
  keyboardValue?:string;
  setKeyboardValue?:Function;
  addLetter?: Function;
  removeLetter?: Function;
}

export default function Row({ children, prepend, append, addLetter, removeLetter }: Props): JSX.Element {
  const keys = children[0]?.split("");
  console.log(append)
  return (
    <div className={Style.row}>
      {prepend&&cloneElement(prepend, {removeLetter})}

      
        {keys.map(key=>{
            return(
                <Key addLetter={addLetter} key={key}>
                    {key}
                </Key>
            )
        })}
     
      {append&&cloneElement(append, {removeLetter})}
    </div>
  );
}
