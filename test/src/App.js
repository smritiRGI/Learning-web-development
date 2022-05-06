import React , {useContext} from 'react';
import Test from './Test.js';
import {MyContext,Context} from './Context.js';



const MyComponent = () => {
  const { count, increment } = useContext(MyContext)

  return (
    <div onClick={increment}>price: {count}</div>
  )
}


const App = () => {
  return (
    <>
        <Test/>
    <Context>
        <MyComponent />
    </Context>
  
    </>
  )
}

export default App;