import React from 'react'
import Header from './Components/Header'
import SkillCard from './Components/SkillCard'
import Meet from './Components/Meet'
import Project from './Components/Project'


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Project/>
      <SkillCard/>
      <Meet/>
    </React.Fragment>
  )
}

export default App