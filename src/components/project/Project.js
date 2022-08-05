import React from 'react'

const Project = () => {
  return (
    <div className='mt-3'>
        <h1 className='font-semibold uppercase border-b-2 border-b-black'>Projects</h1>
        <div className="flex flex-col">
            <p className="font-semibold">Landing Page</p>
            <ul className="text-xs text-gray-400 list-disc pl-6">
                <li>Used Angular 8 and Angular Material to develop a website for chatbot company.</li>
                <li>Designed and Developed Landing, Contacts and Pricing Page</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <p className="font-semibold">Marketing Website Backend</p>
            <p className="text-xs text-gray-400 pl-6">
            Used Node, Express and MongoDB to add details of the marketing product using an excel sheet and entering the detail through HTML form.
            </p>
        </div>
     </div>
  )
}

export default Project