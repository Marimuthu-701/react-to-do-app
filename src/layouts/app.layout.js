import React from 'react'

export default function AppLayout({children}) {

  return (
    <main className='py-4'>
        <div className='container'>
            {children}
        </div>
    </main>
  )
}
