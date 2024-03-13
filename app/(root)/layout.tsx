import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children }:{children:React.ReactNode}) => {
  return (
    <main className="root">
        <div className='root-container'>
          <div className='root-container'>
             <Sidebar/>
             <div className='wrapper'>
             {children}
             </div>
            </div>
        </div>
     
    </main>
  )
}

export default layout