import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))

  const [maxVote,setMaxVote] = useState(0)
  const [maxIndex,setMaxIndex] = useState(0)

  const randomSelected = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const addVote = () => {
    const copy = [...points]
    // increment the value in position 2 by one
    copy[selected] += 1     
    if (copy[selected] > maxVote) {
      setMaxVote(copy[selected])
      setMaxIndex(selected)
    }
    setPoints(copy)
    console.log(points[selected])
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>

      <div>
        <button onClick = {addVote}>vote</button>
        <button onClick = {randomSelected}>next anecdote</button>
      </div>
      
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
      <div>has {points[maxIndex]} votes</div>



    </div>
  )
}

export default App