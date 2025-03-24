import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ from './component/FQA';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <FAQ/>
    </div>
  )
}

export default App
