import React from 'react'
import Image from 'next/image'
import { GoSearch } from 'react-icons/go'
import { BsActivity, BsJournalBookmark } from "react-icons/bs";
import "../styling/Header.css"

function Header() {
    return (
        <div className='header'>
            <button className='button'>MOLI</button>
            <button className='button'>Create</button>
            <div className='searchField'>
                <GoSearch color='white'/>
                <input className='searchInput' type="text" placeholder='what inspires you?' />
            </div>
            <button className='button'><BsActivity/></button>
            <button className='button'> <BsJournalBookmark/> </button>
            <Image src="/default_pfp.webp" alt='user-image' width={60} height={20} className='profile'/>
        </div >
    )
}

export default Header