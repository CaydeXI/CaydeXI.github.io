import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Import each of the individual pages
import Body from "./Components/AboutMe/Body.jsx"
//import Projects from "./Components/Projects/Projects.jsx"
//import Spotify from "./Components/Music/Spotify.jsx"
//import Games from "./Components/Games/Games.jsx"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className = "Website">
        
      <Nameplate />
      <Body />
      <Projects />
      <Music />
      <Games />
        
    </div>
  )
}

export default App
