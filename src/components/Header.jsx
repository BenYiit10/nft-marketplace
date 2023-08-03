import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { HiMoon, HiBars3BottomLeft} from "react-icons/hi2";
import HeaderLink from './HeaderLink';


export default function Header() {

    const location = useLocation();

    const [isAbsolute,setIsAbsolute] = useState(false)
    useEffect(() => {
        if (location.pathname !== "/") {
            setIsAbsolute(true)
        }
    },[location])


    return (
        <header className={`py-8 bg-[#14141F] ${isAbsolute&&'absolute w-full'}`}>
            <div className='px-[85px] max-[1280px]:px-[42px] max-[1024px]:px-[30px] flex justify-between items-center gap-4 max-lg:gap-2 '>
                <div className='header-start flex gap-4 max-[1440px]:gap-6 max-[1300px]:gap-4 items-center w-2/5 max-[1200px]:w-2/6 max-lg:justify-between max-lg:w-full'>
                    <Link to={"/"} className='text-white text-[48px] max-2xl:text-[40px] max-[1200px]:text-[32px] font-[700]'>
                      Logo
                    </Link>
                    <form className='search border border-1 rounded-full flex items-center gap-4 py-4 max-[1200px]:py-3 px-6 w-full'>
                        <BsSearch className='text-white text-[24px]'/>
                        <input type="text" className='bg-transparent w-full focus:outline-none text-white' placeholder='Type to search...' />
                    </form>
                    <button className="text-white text-4xl hidden max-lg:block" >
                        <HiBars3BottomLeft/>
                    </button>
                </div>
                <div className='header-end flex items-center gap-10 text-white max-[1440px]:gap-7 max-lg:hidden '>
                    <div className='links flex gap-5 max-[1440px]:gap-4'>
                        <HeaderLink dropdown="true">
                            Home
                        </HeaderLink>
                        <HeaderLink dropdown="true">
                            Explore
                        </HeaderLink>
                        <HeaderLink dropdown="true">
                            Pages
                        </HeaderLink>
                        <HeaderLink dropdown="true">
                            Community
                        </HeaderLink>
                        <HeaderLink >
                            Contacts
                        </HeaderLink>
                    </div>
                    <div className='flex gap-6 items-center max-[1440px]:gap-4'>
                        <div className='rounded-full bg-[#343444] w-8 h-8 flex justify-center items-center cursor-pointer'>
                            <HiMoon className='text-[19px]'/>
                        </div>
                        <Link to="/" className='wallet px-[24px] py-4 max-[1440px]:py-3 border border-purple-600 rounded-full cursor-pointer max-[1440px]:text-[12px] w-max max-lg:px-5'>
                            Connect Wallet
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
