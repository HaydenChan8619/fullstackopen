import { useState } from 'react'

const StatisticLine = (props) => {
  return (
      <tr><td>{props.name}</td> <td>{props.number}</td> {props.add}</tr>
  )
}

const Statistics = (props) => {
  return (
      <table>
        <tbody>
          <StatisticLine name = "good" number = {props.n1}></StatisticLine>
          <StatisticLine name = "neutral" number = {props.n2}></StatisticLine>
          <StatisticLine name = "bad" number = {props.n3}></StatisticLine>
          <StatisticLine name = "all" number = {(props.n3 + props.n1 + props.n2)}></StatisticLine>
          <StatisticLine name = "average" number = {(props.n1 -props.n3) / (props.n3 + props.n1 + props.n2)}></StatisticLine>
          <StatisticLine name = "positive" number = {props.n1 / (props.n3 + props.n1 + props.n2) * 100} add = "%"></StatisticLine>
        </tbody>
      </table>
  )
}

const Button = (props) => {
  return (<button onClick={props.onClick}>{props.text}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    console.log(good)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    console.log(bad)
  }


  if (good != 0 || neutral != 0 || bad != 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick = {increaseGood} text = "good"></Button>
        <Button onClick = {increaseNeutral} text = "neutral"></Button>
        <Button onClick = {increaseBad} text = "bad"></Button>
        <h1>statistics</h1>
        <Statistics n1 = {good} n2 = {neutral} n3 = {bad}></Statistics>
      </div>
    )
  } else {
    return (
      <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  
}

export default App