import React from 'react'
import work from '../../assets/work.jpeg';

const Work = () => {
    return (
        <div className="card w-3/4 mx-auto my-24 cursor-pointer rounded-2xl ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-white border border-r-gray-800 rounded-tl-2xl rounded-bl-2xl  border-r-1 contaniner">
                    <div className="pt-20 px-5">
                        <p className="text-3xl font-thin border-b pb-4">Work Experience</p>
                        <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2021 - Present</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer 
                                    <a target='_blank' className="hover:underline" href="https://www.iraitech.com/home"> (Iraitech Innovations & Technologies)</a></h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2020 - Apr 2021</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Frontend Developer Intern
                                    <a target='_blank' className="hover:underline" href="https://www.iraitech.com/home"> (Iraitech Innovations & Technologies)</a>
                                </h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            </li>
                            <li class="ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2017 - Jun 2017</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Software Developer Intern 
                                    <a target='_blank' className="hover:underline" href="https://www.suzlon.com/"> (Suzlon)</a>
                                </h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            </li>
                        </ol>
 
                    </div>                
                </div>
                <div className="image-bg bg-purple-100 rounded-tr-2xl rounded-br-2xl">
                <img src={work} alt=""/>
                    
                </div>
            </div>
        </div>
      )
}

export default Work