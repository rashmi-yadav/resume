import React from 'react'

const Experience = () => {
  return (
    <div className='mt-3'>
       <h1 className='font-semibold uppercase border-b-2 border-b-black'>Work Experience</h1>
       <div className="flex flex-col">
            <p className="font-semibold">Frontend Developer, Iraitech Innovations & Technologies pvt. ltd, Remote</p>
            <p className='text-xs text-gray-400'>Nov 2020 - Present</p>
            <ul className="text-xs text-gray-400 list-disc pl-6">
                <li>Followed SDLC best practices within Agile environment to produce rapid iterations for clients</li>
                <li>Liaised between marketing and IT on web development projects integrating front-end assets to back-end systems.</li>
                <li>Tested web-based product functionality and delivered iterations to customer.</li>
                <li>Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.</li>
                <li>Coordinated with digital content manager to obtain content for updates and expansions.</li>
                <li>Designed and updated layouts to meet usability and performance requirements.</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <p className="font-semibold">Software Developer Intern, Suzlon, Pune</p>
            <p className='text-xs text-gray-400'>Jan 2017 - Jun 2017</p>
            <ul className="text-xs text-gray-400 list-disc pl-6">
                <li>Developed a workflow for HR Department using Savvion BPM tools, JavaScript and Java</li>
                <li>Generated the flow of the project using BPM Tools • Created UI using BPM Tools</li>
                <li>Wrote Java/JavaScript Code for the following:</li>
                <ul className='list-disc pl-6'>
                    <li>Validation</li>
                    <li>PDF Generation</li>
                    <li>Sending email to user</li>
                    <li>Create Project Report and User Manual for the workflow</li>
                </ul>
                <li>Updated, edited and tested Savvion Workflows:</li>
                <ul className='list-disc pl-6'>
                    <li>Studied existing workflows</li>
                    <li>Made changes in the workflow when required</li>
                    <li>Performed various manual testing on the workflows</li>
                </ul>
                <li>Handled Savvion Tickets using Microsoft SQL queries</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience