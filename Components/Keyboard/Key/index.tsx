import Style from "./Key.module.css"

interface Props{
    children:string;
    addLetter:Function | undefined;
}

export default function Key({children, addLetter}:Props){
    if(addLetter === undefined){
        throw new Error("addLetter prop cannot be undefined. Did you use Keyboard.Row outside of a Keyboard element?")
    }
    return (
        <button onClick={()=>{
            try{
                addLetter(children)

            } catch(err){
                console.log(err)
            }
            
            }} className={Style.key}>
            {children}
        </button>
    )
    
}