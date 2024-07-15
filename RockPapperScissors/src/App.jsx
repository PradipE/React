import { useState, useEffect } from "react";

function App() {
  {/* all variable decleration*/ }
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [finalResult, setFinalResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
{/*Choice or rock paper secissors decleration */}
  const choices = ["rock","paper","scissors"];
  //here we are choice both user choose manually and computer number will be automatically generated 
  const handleOnclick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };
  //here the computer number will be generated 
  const generateComputerChoice = () => {
    const computerNumber = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerNumber);
  };
  const reset = () => {
    window.location.reload();
  };
  //here all function of combination where computer combination to win the game and vieceverse
  useEffect(()=>{
    const comboMoves = userChoice+computerChoice 
    if(userPoint<=4 && computerPoint<=4)
    {
       if(comboMoves === 'rockscissors'|| comboMoves === 'paperrock' || comboMoves === 'scissorspaper')
       {
        const updatedUserPoints = userPoint+1
        setUserPoint(updatedUserPoints)
        setTurnResult('User got the point')
        if(updatedUserPoints === 5)
        {
          setGameOver(true)
          setFinalResult('User wins')
        }
       }
       if(comboMoves ==='rockpaper' || comboMoves === 'paperscissors' || comboMoves =='scissorsrock')
       {
         const updatedComputerPoints =computerPoint+1
         setComputerPoint(updatedComputerPoints)
         setTurnResult('Computer got a point')
         if(updatedComputerPoints === 5)
         {
          setGameOver(true)
          setFinalResult('Computer wins')
         }
       }
       if(comboMoves ==='rockrock' || comboMoves === 'paperpaper' || comboMoves =='scissorsscissors')
       {
           setTurnResult('No one get a point')
       }

    }
    
  },[computerChoice,userChoice])
  return (
    <div className="bg-sky-500  h-screen w-full flex flex-col justify-items-center">
      <h1 className="flex text-4xl font-semibold justify-center mt-10">
        Rock-Paper-Scissors
      </h1>

      <div className="text-2xl font-semibold flex gap-20 justify-center mt-20">
        <h2>User Points: {userPoint}</h2>
        <h2>Computer Points: {computerPoint}</h2>
      </div>
      <div className="flex gap-20 justify-center mt-20">
        <div className="">
          <img className="" src={`../images/${userChoice}.png`} style={{ transform: 'rotateY(180deg)' }} />
        </div>
        <div className="">
          <img className="" src={`../images/${computerChoice}.png`} />
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-20">
        {choices.map((choice, index) => (
          <button
            className="text-white text-xl font-medium h-10 w-28 bg-black pb-1 rounded-lg"
            key={index}
            onClick={() => handleOnclick(choice)} disabled ={gameOver}>
            {choice}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-10 text-2xl font-medium gap-20">
        <h1 className="">Turn Result: {turnResult}</h1>
        <h1 className="">Final Result: {finalResult}</h1>
      </div>
      <div className="flex justify-center mt-10 text-2xl font-medium">
        {gameOver && (
          <button className="text-white text-xl font-medium h-10 w-40 bg-black pb-1 rounded-lg" onClick={() => reset()}>
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
