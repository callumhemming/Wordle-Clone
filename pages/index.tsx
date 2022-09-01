import React from 'react'
import styles from '../styles/Home.module.css'
import Keyboard from '../Components/Keyboard'


export default function Home(): JSX.Element{
  return (

    
    <Keyboard onEnter={((value: any)=>{console.log(value)})}>
     <Keyboard.Row>
      QWERTYUIOP
     </Keyboard.Row>

     <Keyboard.Row>
      ASDFGHJKL
     </Keyboard.Row>

     <Keyboard.Row
     prepend={<Keyboard.Enter/>}
     append={<Keyboard.Backspace/>}
     >
      ZXCVBNM
     </Keyboard.Row>


      
    </Keyboard>


  )
}


