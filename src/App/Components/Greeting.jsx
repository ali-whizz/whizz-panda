import { useState } from "react";

const Greeting = () => {
    const [state, setState] = useState({name:"ali", age:24});
    console.log("testapp", state)

    
    function handleClick(){
        console.log("handleClick1", state)
        setState(prevState => ({ ...prevState, age: prevState.age + 1 }));
        setState({...state, age : state.age + 1});
        console.log("handleClick2", state)
    }
 return(
    <>
        <h1>This is for you</h1>
        <button onClick={handleClick}>click it</button>   
    </>
 );     
}

export default Greeting;