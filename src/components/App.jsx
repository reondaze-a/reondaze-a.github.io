import { useState } from 'react'
import Header from './Header'
import Main from './Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Main />  
    </div>
  )
}

export default App
