import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown } from "react-icons/fa6";

const Menu = [{
  id : 1,
  name : "Home",
  link : "#"
},
{
  id : 2,
  name : "Best Selling",
  link : "#"
}]

const DropdownLinks = [
  {
    name : "Trending Books",
    link : "/#",
  },
  {
    name : "Best Selling",
    link : "/#",
  },
  {
    name : "Authors",
    link : "/#",
  }
]

function NavBar() {
  return (
  <div className='shadow-lg'> 
    <div className='container py-3 sm:y-0'>
      <div className='flex justify-between items-center'>
        <div>
          <a href="#"
            className='flex gap-2 font-bold text-2xl sm:text-3xl'
          >
            <img src={Logo} alt="blue book" className='w-10' />
            Books
          </a>
        </div>
        <div>
          <ul className='hidden sm:flex items-center gap-4'>
            {Menu.map((menu)=>(
              <li>
                <a href={menu.link}
                   className='inline-block py-4 px-4 hover:text-primary duration-200'
                >{menu.name}</a>
              </li>
            ))}
            {/*dropdown section*/}
            <li className='group relative cursor-pointer  '>
              <a href="/#"
                 className='flex h-[72px] items-center gap[2px]'>
                Quick Links
                  <FaCaretDown 
                   className='transition duration-300 group-hover:rotate-180'
                  />
                  </a>
            </li>
            {/*dropdown Link Section*/}
              <div>
                <li>

                </li>
              </div>
          </ul>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default NavBar