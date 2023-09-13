import { useState } from 'react'
import './App.css'

function App() {

  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const [currentDate, setDAte] = useState(new Date())

  const DateFormate = currentDate.toLocaleDateString('en-US',{
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const dateHandler = () => {
    const newdate = new Date(currentDate)
    if(count === 0){
      return " today date " + DateFormate
    }else{
      newdate.setDate(newdate.getDate() + count)
      const newDateFormate = currentDate.toLocaleDateString('en-US',{
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      return count + " day from today is " + DateFormate
    }
  }

  const IncreaseStep = () => {
    setStep(step + 1)
  }
  const DecreaseStep = () => {
    setStep(step - 1)
  }
  const DecreaseCount = () => {
    setCount(count - step)
  }
  const increaseCount = () => {
    setCount(count + step)
  }
  

  return (
    <>
    <h1 style={{textAlign:"center", fontSize: "50px", backgroundColor: "blue", color:"#fff"}}>My Counter</h1>
      <div className='main'>
        <div className='sec'>          
            <h1 className='stepnum'>Step:</h1>
          <div className='btn'>
              <button onClick={DecreaseStep}style={{backgroundColor: "red"}}>DECREASE</button>
              <p className='stepnum'>{step}</p>
              <button onClick={IncreaseStep} style={{backgroundColor: "green"}}>INCREASE</button>
          </div>
        </div>
        <div className='sec'>          
            <h1 className='stepnum'>Count</h1>
          <div className='btn'>
              <button onClick={DecreaseCount} style={{backgroundColor: "red"}}>DECREASE</button>
              <p className='stepnum'>{count}</p>
              <button onClick={increaseCount} style={{backgroundColor: "green"}}>INCREASE</button>
          </div>
              <p style={{fontSize: "22px"}}>{dateHandler()}</p>
              {/* 1 days from Today is Wed, Sep 13, 2023 */}
        </div>

      </div>

    </>
  )
}

export default App
