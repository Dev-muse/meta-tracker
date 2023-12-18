'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classNames from 'classnames';


import { RiAiGenerate } from "react-icons/ri";
import { text } from 'stream/consumers';

const NavBar = () => {

 const currentPath = usePathname()

  const navLinks = [
    {label: 'Dashboard', link: '/'},
    {label: 'Issues', link: '/issues'},
  ]

  return (
    <nav className="flex space-x-6 items-center mb-4 px-4 h-14 border-2 border-b ">
        <Link href='/'><RiAiGenerate size='28px' /></Link>
        <ul className='flex space-x-6 '>
           
           {navLinks.map((link,key)=>(
            <li key={key}>
                <Link className={classNames({
                    'text-slate-700' : link.link === currentPath,
                    'text-slate-400': link.link !== currentPath,
                    'hover:text-slate-900 transition-colors': true 

                })} href={link.link}>{link.label}</Link>
            </li>

           ))}
        </ul>
    </nav>
  )
}

export default NavBar