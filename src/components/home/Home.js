import React from 'react'
import rashmi from '../../assets/image.jpeg'
const Home = () => {
  return (
    <div className="card w-3/4 mx-auto my-24 cursor-pointer rounded-2xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-last lg:order-first bg-white border border-r-gray-800 rounded-tl-2xl rounded-bl-2xl  border-r-1 contaniner">
              <div className="padding">
              <div className="flex flex-col padding-top">
                <p className="text-4xl xxl:text-6xl uppercase font-sans text-gray-700 mb-3 font-semibold tracking-widest">Rashmi R Yadav</p>
                <p className="text-1xl xxl:text-2xl uppercase font-extralight font-serif mb-3 text-gray-600 tracking-wider"> Frontend Developer </p>
                <p className="text-sm xl:text-lg text-gray-700">Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences. Proficient in JavaScript and Typescript, have over a year experience working in Angular.</p>
              </div>
              <div className="flex flex-col md:flex-row mt-6">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Work</button>
                <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Project</button>
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Contact</button>
              </div>
              </div>
             
            </div>
            <div className="image-bg bg-purple-100 rounded-tr-2xl rounded-br-2xl">
            <img src={rashmi} alt=""/>
                {/* https://38b732f972d36118.demo.carrd.co/#
                https://bf1fadca097677b6.demo.carrd.co */}
            </div>
        </div>
    </div>
  )
}

export default Home

// hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200