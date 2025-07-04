import { useState } from 'react'
import Nav from'./Nav'
import Home from './Home'
import Contact from './Contact'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <Contact></Contact>
      <About></About>
    </>
  )
}

export default App
