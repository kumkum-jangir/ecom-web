import {React,useReducer} from "react";



function reducer(state, action) {
  
  if (action.value === 'input') {
    
    var val= document.getElementById('t1').value;
    let a;
      a=parseInt(val) + parseInt(action.number);
    
    
    return {
      value: a
    };
  }
  

  throw Error('Unknown action.');
}


function Practice()
{
  const [state, dispatch] = useReducer(reducer, { value: 0 });

    return(<>
    
   <h1>Welcome to About us page</h1>
   <input type="text" id="t1" value={state.value}></input>
   <br></br>
   <button onClick={() => {
        dispatch({ value: 'input',number:0 })
      }}>
       0
      </button>
      
      <button onClick={() => {
        dispatch({ value: 'input',number:1 })
      }}>
      1
      </button>
      
      <button onClick={() => {
        dispatch({ value: 'input',number:2 })
      }}>
      2
      </button>
      <button onClick={() => {
        dispatch({ value: 'input',number:3 })
      }}>
      3
      </button>
      <button onClick={() => {
        dispatch({ value: 'input',number:4 })
      }}>
      4
      </button>
      <button onClick={() => {
        dispatch({ value: 'input',number:5 })
      }}>
      5
      </button>

<br></br>

<button onClick={() => {
        dispatch({ value: 'input',number:6 })
      }}>
      6
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:7})
      }}>
      7
      </button>


      <button onClick={() => {
        dispatch({ value: 'input',number:8 })
      }}>
      8
      </button>


      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      9
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      Clear
      </button>

    <br></br> 

    <button onClick={() => {
        dispatch({ value: 'input',number:0 })
      }}>
      +
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      -
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      *
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      %
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      /
      </button>

      <button onClick={() => {
        dispatch({ value: 'input',number:9 })
      }}>
      =
      </button>
<br></br>
   <button onClick={() => {
        dispatch({ type: 'check_age' })
      }}>
       Check age
      </button>
      
  <br></br>
      <button onClick={() => {
        dispatch({ type: 'edit' })
      }}>
       edit
      </button>

      <button onClick={() => {
        dispatch({ type: 'view' })
      }}>
       View
      </button>

      <button onClick={() => {
        dispatch({ type: 'delete' })
      }}>
       Delete
      </button>

      

    </>)
}
    


export default Practice;
