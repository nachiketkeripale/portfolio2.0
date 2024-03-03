import React from 'react'

const liClassname = 'list-none w-[250px] h-[30px] text-center no-underline'
const aClassName = 'p-[10px_35px] bg-[#481afe] rounded text-[#fff] no-underline hover:bg-[#fff] hover:text-[#481afe] hover:border-2 hover:border-[#481afe]'

export default function ProjectCard(props) {
  return (
    <div>
         <div class="bg-[#fff] p-[15px_10px_15px_10px] shadow-[5px_5px_5px_#f0e9e9] text-[#481afe] rounded">
            <img class="m-[10px_auto] lg:w-[500px] sm:w-[auto] b-[1px_solid_#1f1f1f] rounded" src={props.src}/>
            <h3 className='text-center mb-[30px] text-2xl font-light'>{props.name}</h3>
            <ul className='mt-[10px] flex  justify-between align-center'>
              <li className={liClassname}><a className={aClassName} href={props.github} target="_blank">GitHub</a></li>
              <li className={liClassname}><a className={aClassName} href={props.live} target="_blank">Live Site</a></li>
            </ul>
        </div>
    </div>
  )
}
