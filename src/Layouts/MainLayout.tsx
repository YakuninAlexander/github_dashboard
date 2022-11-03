import React, {  ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children } : MainLayoutProps) {
  return(
    <>
      <nav className='h-14 bg-emerald-400 p-2'>
        <h1 className='text-4xl text-center font-light text-gray-700'>Github Dashboard</h1>
      </nav>
      <div className='mx-10'>{children}</div>
      
    </>
  )
}