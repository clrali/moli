"use client"
import { SessionProvider } from 'next-auth/react'
import React, { Component } from 'react'

function Providers({children}) {
  return (
    <SessionProvider>
       {children}
    </SessionProvider>
  )
}

export default Providers