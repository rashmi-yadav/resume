import React from 'react'
import Contact from '../contact/Contact'
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Header from '../header/header'
import Project from '../project/Project';
import Skills from '../skills/Skills';
const Resume = () => {
  return (
    <div className="relative">
         <div className="absolute right-16 bg-white -top-8 border-2 border-black px-5 w-1/4">
            <Contact></Contact>
            <Skills></Skills>
            <Education></Education>
      </div>
      <div className="body md:w-3/4 p-10 mx-auto mt-16 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Header></Header>
          <div className="flex-auto w-full">
            <Experience></Experience>
            <Project></Project>
          </div>
        
      </div>
    </div>
  )
}

export default Resume