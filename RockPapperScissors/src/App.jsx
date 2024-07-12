import { useState ,useEffect} from 'react'



function App() {
  const [userChoice, setUserChoice]=useState('rock')
  const [computerChoice, setComputerChoice]=useState('rock')
  const [userPoint, setUserPoint]=useState(0)
  const [computerPoint, setComputerPoint]=useState(0)
  const [turnResult,setTurnResult] = useState(null)
  const[finalResult,setFinalResult] =useState('Let\'s see who wins ')
  const [gameOver,setGameOver]=useState(false)

  const choice =['rock ','paper','seissors']
  return (
        <div className=''>
          <h1 className='pl-32'>Rock-Paper-Scissors</h1>
           
          <div>
            <h2>User Points: {userPoint}</h2>
            <h2>Computer Points: {computerPoint}</h2>
          </div>
          <div className=''>
            <div className=''>
              <img className='' src={`../images/${userChoice}.png`}/>
            </div>
            <div className=''>
              <img className='' src={`../images/${computerChoice}.png`}/>
            </div>
          </div>

        </div>
    
  )
}

export default App
