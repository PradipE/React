import { useState } from "react";

import Card from "./Component/Card.jsx"
import buycar from './Component/buycar1.jpg'
function App() {
  return(
    <>
    {/* <Add/> */}
    <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
    <Card Data="This is card " Data2="This is card component "btn="Visit"/>
    <Card Data="Buy this  " Data2="Buy this car at low price "/>
    </div>
    </>
  );
}

export default App
