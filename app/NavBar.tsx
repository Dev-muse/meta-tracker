import Link from 'next/link'
import { RiAiGenerate } from "react-icons/ri";

const NavBar = () => {
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
                <Link className='text-slate-500 hover:text-slate-800 transition-colors ' href={link.link}>{link.label}</Link>
            </li>

           ))}
        </ul>
    </nav>
  )
}

export default NavBar