import { useState } from 'react'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-green-100 min-h-screen flex px-[80px]">
      <Header />
    </div>
  )
}

export default App
