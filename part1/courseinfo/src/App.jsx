import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundementals of React",
        excercise: 10
      },
      {
        name: "Using props to pass data",
        excercise: 7
      },
      {
        name: "State of a component",
        excercise: 14
      }
    ]
  }

  return (
    <>
      <Header course = {course}></Header>
      <Content course = {course}></Content>
      <Total course = {course}></Total>
    </>
  )
}

export default App