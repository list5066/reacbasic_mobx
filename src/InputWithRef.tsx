import React, { useRef, FC, useReducer, Reducer } from "react";

const myReducer: Reducer<any, any> = (state, action) => {
  console.log(state, action);
  
  switch(action.type) {
    case 'million':
      return {...state, amount: 'mil '+action.payload}
    case 'billion':
      return {...state, amount: 'bil '+action.payload}
  }
}

const InputWithRef: FC = () => {
  const [state, dispatch] = useReducer(myReducer, [])
    // const [amount, setAmount] = React.useState(false);

  const inpref = useRef<HTMLInputElement>(null)
  const onButtonClick = () => {
    if (inpref.current !== null)
    inpref.current.focus();
  }
  const onButton2Click = () => {
    if (inpref.current !== null)
    inpref.current.value = ''+Math.round(Math.random()*2000);
  }
  



  

  return <>
    <input ref={inpref} type="text"  />
    <button onClick={onButtonClick}>Focus the input</button>
    <button onClick={onButton2Click}>Set random value</button>
    <br/>
    <br/>
    <br/>
    
    <button onClick={e => dispatch({'type': 'million', payload: 'Set 1 000 000'})}>Set 1 000 000</button>
    <button onClick={e => dispatch({'type': 'billion', payload: 'Set 1 000 000 000'})}>Set 1 000 000 000</button>
    <br/>
    amount current value: {state.amount}
    <input type="text"  />
  </>
}
export default InputWithRef;