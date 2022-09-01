import React from "react";

interface Props {
  removeLetter?: Function;
}

export default function Backspace({ removeLetter }: Props): JSX.Element {

    if(removeLetter === undefined){
        throw new Error("remove letter undefined")
    }

  return (
    <button
      onClick={() => {
        try {
          removeLetter();
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {"<=="}
    </button>
  );
}
