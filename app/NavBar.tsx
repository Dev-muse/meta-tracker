'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classNames from 'classnames';


import { RiAiGenerate } from "react-icons/ri";
 
const NavBar = () => {

 const currentPath = usePathname()

const navLinks = [
    {label: 'Dashboard', link: '/'},
    {label: 'Issues', link: '/issues'},
  ]



  return (
    <nav className="flex space-x-6 items-center mb-4 px-4 h-14 border-2 border-b ">
        <Link href='/' className="flex  items-center"><RiAiGenerate size='28px' /><span className="ml-2 text-[28px]">Meta<span className="font-bold">Tracker</span></span></Link>
        <ul className='flex space-x-6 '>
           
           {navLinks.map((link,key)=>(
            <li key={key}>
                <Link className={classNames({
                  
                    'text-pink-700 hover:text-pink-900 transition-colors' : link.link === currentPath,
                    'text-slate-400 hover:text-slate-900 transition-colors': link.link !== currentPath,
                

                })} href={link.link}>{link.label}</Link>
            </li>

           ))}
        </ul>
    </nav>
  )
}

export default NavBar