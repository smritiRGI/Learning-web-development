import React , {useContext} from 'react';
import {MyContext , Context}  from './Context.js';


const YourComponent = () => {
  const { count, increment } = useContext(MyContext)

  return (
    <div  onClick={increment}>
        price: {count}</div>
  )
}

function Test() {
  return (
       <Context>
        <YourComponent />
      </Context>
  )
}

export default Test