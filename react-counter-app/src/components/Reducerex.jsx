import React, { useReducer } from 'react'

const Reducerex = () => {
    const initialValue = 0;
    const [state,dispatch] = useReducer(reducer,initialValue);
    function reducer(state,action){
        switch(action.type){
            case "add":
                return {count:state.count+1};
            case "sub":
                return {count:state.count-1};
            case "reset":
                return {count:0};
            default:
                throw new Error("Unexpected Action");
        }
    }
  return (
    <div>
        <h1>Reducerex</h1>
        <h1>Counter:{state.count}</h1>
    
    </div>
    
  )
}

export default Reducerex