import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'


export default function Baselayout({children}) {
  return (
    <div className='min-w-screen min-h-screen flex flex-col overflow-x-hidden'>
        <Header />
        <div className='mt-24'>
        {children}
        </div>
        <Footer />
    </div>
  )
}
