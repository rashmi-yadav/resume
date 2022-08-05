import React from 'react'

const Education = () => {
  return (
    <div className='mt-3'>
        <h1 className='font-semibold uppercase'>EDUCATION</h1>
        <ul className='list-none space-y-2 mt-2'>
            <li className="flex flex-col">
                <p className="font-semibold">Masters in Computer Application, Nowrosjee Wadia College, Pune</p>
                <p className='text-xs text-gray-400'>June 2014 - June  2017</p>
            </li>
            <li className="flex flex-col">
                <p className="font-semibold">Bachelors in Computer Science, Nowrosjee Wadia College, Pune</p>
                <p className='text-xs text-gray-400'>June 2010 - Oct  2013</p>
            </li>
        </ul>
    </div>
  )
}

export default Education