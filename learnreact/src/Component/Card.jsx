import React from 'react'
function Card({Data,Data2,btn="Click",Image}) {
  return (
       <div className=''style={{height:"450px ",width:"330px",backgroundColor:"white",
       border:"2px solid black"}}>
        <div className="img" style={{height:"250px", width:"300px",margin:"15px",marginTop:"15px"}}> 
        <img src={Image}/> 
        </div>
        <div style={{height:"100px", width:"300px",margin:"15px"}}>
           <h1 style={{height:"35px", width:"300px"}}>{Data}</h1>
           <h3 style={{height:"30px", width:"300px"}}>{Data2}</h3>
        </div>
        <div style={{height:"50px", width:"110px",marginLeft:"110px"}} >
          <button style={{height:"40px", width:"100px",backgroundColor:"green",color:
        "white",borderRadius:"15px"}}>{btn}</button>
        </div>
        </div>
    
  )
}

export default Card
