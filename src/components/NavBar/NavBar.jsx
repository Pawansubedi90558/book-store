import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

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
        <div className='flex  items-center justify-between gap-4'>
          <ul className='hidden sm:flex items-center gap-4 font-semibold'>
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
                <span>
                <FaCaretDown 
                   className='transition duration-300 group-hover:rotate-180'
                />
                </span>
                  
                </a>
            {/*dropdown Link Section*/}
              <div className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]'>
                <ul>
                  {
                    DropdownLinks.map((link)=>(
                      <li key={link.id}>
                        <a href={link.link}
                           className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                        >{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              </li>
          </ul>
          <button className='flex bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full items-center gap-3 hover:scale-105 duration-300'>
            Order
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
          </button>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default NavBar