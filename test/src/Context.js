import React, { useState } from 'react'

const MyContext = React.createContext()

function Context({children}) {
    const [count, updateCount] = useState(0)

    function increment() {
    updateCount(count + 1)
  }

  return (
      
    <MyContext.Provider value={{ count, increment }}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext , Context};