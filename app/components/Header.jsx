"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { GoSearch } from 'react-icons/go'
import { BsActivity, BsJournalBookmark } from "react-icons/bs";
import "../styling/Header.css"
import { signIn, useSession } from 'next-auth/react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from "./../Shared/firebaseConfig"

function Header() {
    const { data: session } = useSession()
    console.log(session)
    const db = getFirestore(app)

    useEffect(()=>{
        saveUserInfo
    }, [session])

    const saveUserInfo=async()=>{
        if(session.user)
        {
            await setDoc(doc(db, "user", session.user.email), {
                userName: session.user.name,
                userEmail: session.user.email,
                userImage: session.user.image
            })
        }
    }

    return (
        <div className='header'>
            <button className='button'>MOLI</button>
            <button className='button'>Create</button>
            <div className='searchField'>
                <GoSearch color='white' />
                <input className='searchInput' type="paragraph" placeholder='what inspires you?' />
            </div>
            <button className='button'><BsActivity /></button>
            <button className='button'> <BsJournalBookmark /> </button>
            {session?.user ? <Image src={session.user.image} alt='user-image' width={40} height={30} className='profile' /> :
                <button className='button' onClick={() => signIn()}>Login</button>}

        </div >
    )
}

export default Header