const Part = (props) => {
    //console.log(props)
    //console.log(props.name)
    //console.log(props.excercise)
    return (    
    <>
        <p>{props.name} {props.excercise}</p>
    </>
    )
}

const Content = (props) => {
    return (
    <>
        <Part name = {props.course.parts[0].name} excercise = {props.course.parts[0].excercise}></Part>
        <Part name = {props.course.parts[1].name} excercise = {props.course.parts[1].excercise}></Part>
        <Part name = {props.course.parts[2].name} excercise = {props.course.parts[2].excercise}></Part>
    </>
    )
}

export default Content