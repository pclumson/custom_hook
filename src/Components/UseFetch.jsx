import { useState, useEffect } from "react";



const UseFetch = (url) => {

    const[data,setData]=useState();

    /*
     u seEffect: Th*is is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any
     other side effects that don’t involve rendering.
     fetch(url): This initiates an HTTP request to the specified url.
     .then((res) => res.json()): This converts the response from the server to JSON format.
     .then((data) => setData(data)): This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional
     components.*/

    useEffect(()=>{

        fetch(url).then((res)=>res.json())

        .then((data)=>setData(data))

    },[])
    return [data]

    
}





export default UseFetch


