import React from 'react'
import { MdEmail,MdPhone } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
const Contact = () => {
  return (
    <div className='m-3'>
       <h1 className='font-semibold uppercase'>Contact</h1>
       <div className="flex flex-col space-y-2 mt-2 pl-6">
            <div className="flex space-x-1">
                <MdEmail />
                <p className='text-xs text-gray-400'>yadav.rashmi0602@gmail.com</p>
            </div>
            <div className="flex space-x-1">
                <MdPhone />
                <p className='text-xs text-gray-400'>9422505154</p>
            </div>
            <div className="flex space-x-1">
                <IoLogoGithub />
                <p className='text-xs text-gray-400'>/rashmi-yadav</p>
            </div>
       </div>
       
    </div>
  )
}

export default Contact