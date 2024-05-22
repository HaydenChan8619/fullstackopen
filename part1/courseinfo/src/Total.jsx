const Total = (props) => {
    console.log(props.course.parts[0].name)
    return (
        <>
            <p>Number of excercises {props.course.parts[0].excercise + props.course.parts[1].excercise + props.course.parts[2].excercise}</p>
        </>
    )
}

export default Total