import { useState } from 'react'
import Header from './Header'
import Main from './Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex px-[80px] flex-col">
      <Header />
      <Main />  
    </div>
  )
}

export default App
