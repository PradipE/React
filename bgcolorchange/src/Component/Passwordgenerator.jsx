import { useState,useEffect,useCallback,useRef} from "react"

function Passwordgenerator() {
    const [length,setLength]=useState(6);
    const [number,setNumber]=useState(false);
    const [char, setChar]=useState(false);
    const [password,setPassword]=useState(" ")
    //use callback for for the rerender the all the function ata time
    // const Passwordgenerator1= useCallback(()=>{
    //         let pass="";
    //         let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //         if(number)
    //         {
    //            string+="0123456789";
    //         }
    //         if(char)
    //         {
    //             string+="~!@#$%^&*(){}"
    //         }
    //         for (let index = 1; index <=length; index++) {
    //            let char=Math.floor(Math.random()*string.length+1);
    //            pass+=string.charAt(char)
    //            setPassword(pass)
    //         }
    // },[length,number,char,setPassword])
    const copypass=useRef(null)
    const copypasswordinkeyboard=useCallback(()=>{
      window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(() =>{
      let pass="";
      let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number)
      {
         string +="0123456789";
      }
      if(char)
      {
          string +="~!@#$%^&*(){}"
      }
      for (let index = 1; index <=length; index++) {
         let char=Math.floor(Math.random()*string.length+1);
         pass += string.charAt(char)
         setPassword(pass)
      }
    } ,[length,number,char])
  return (
    <>
    <div className="w-full max-w-lg mx-auto  bg-gray-400 justify-center h-52 mt-12 rounded-xl ">
        <h1 className="text-black text-3xl font-bold ml-28 pt-6 pb-3">Passwordgenerator</h1>
      <div className="flex flex-row justify-center pt-4 ">
        <input
        type="text"
        value={password} 
        placeholder="Password"
        ref={copypass}
        readOnly
        className="h-12 w-72 rounded-s-lg pl-20 "></input>
        <button 
        onClick={copypasswordinkeyboard}
        className="h-12 w-16 bg-green-500 hover:bg-green-700 rounded-e-lg text-xl text-white font-semibold">Copy</button>
      </div>
      <div className="flex flex-row mt-5 justify-center gap-5">
        <input
        type="range"
        min={6}
        max={15}
        value={length}
        className="cursor-pointer "
        onChange={(ev)=>{
            setLength(ev.target.value)
        }}/>
        <h3 className="text-xl  font-medium text-white mb-1 pr-3">Size: {length}</h3>
        <input
        type="checkbox"
        defaultChecked={number}
        className="h-4 w-4 mt-2 " 
        onChange={(previous)=>{
            setNumber((previous)=>!previous);
        }}/>
        <h3 className="text-xl  font-medium text-white mb-1 ">Number</h3>
        <input
        type="checkbox"
        className="h-4 w-4 mt-2 "
        defaultChecked={char}
         onChange={(previous)=>{
            setChar((previous) => !previous);
         }}/>
        <h3 className="text-xl  font-medium text-white mb-1">Character</h3>
      </div>

    </div>
    </>
  )
}

export default Passwordgenerator
