import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Summary from './Summary'
import Experiance from './Experiance'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <NavBar/>
    <Summary/>
    <Experiance/>
    <Projects/>
   </div>
  )
}

export default App