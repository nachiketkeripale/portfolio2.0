import React from 'react'

const liClassname = 'list-none w-[auto] h-[auto] md:w-[250px] md:h-[30px] text-center no-underline'
const aClassName = 'p-[5px] md:p-[10px_35px] bg-[#481afe] rounded text-[#fff] no-underline hover:bg-[#fff] hover:text-[#481afe] hover:border-2 hover:border-[#481afe]'

export default function ProjectCard(props) {
  return (
    <div>
         <div class="p-[10px_5px_10px_5px] md:p-[15px_10px_15px_10px] shadow-[5px_5px_5px_#f0e9e9] text-[#481afe] rounded">
            <img class="m-[10px_auto] w-[auto] p-[10px] lg:w-[500px]  b-[1px_solid_#1f1f1f] rounded" src={props.src}/>
            <h3 className='text-center mb-[10px] md:mb-[30px] text-xl md:text-2xl font-light'>{props.name}</h3>
            <ul className='mt-[5px] md:mt-[10px] justify-center sm:gap-[2px] flex  md:justify-between align-center'>
              <li className={liClassname}><a className={aClassName} href={props.github} target="_blank">GitHub</a></li>
              <li className={liClassname}><a className={aClassName} href={props.live} target="_blank">Live Site</a></li>
            </ul>
        </div>
    </div>
  )
}
