import { Navlinks } from '@/constant/constant'
import { MenuIcon, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className= "flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200 ">
        {/*logo */}
        <h1 className= "text-3xl text-white font-bold ml-8 md:ml-16"> Imagine.AI</h1>
        <div className= " md:flex items-center space-x-10 hidden">
            {/* Navlink */} 
            {Navlinks.map((link) => {
                return(
                    <Link key={link.id} href={link.url} className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <p> {link.label}</p>
                    </Link>
                )
            })}     
     </div>
     {/*Buttons */}
     <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <MenuIcon className="cursor-pointer w-6 h-6 md:hidden" />
     </div>
    </div>
  )
}

export default Nav