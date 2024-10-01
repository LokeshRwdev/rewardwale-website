import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import React from 'react'

const HeroSection = () => {
  return (
    <main style={{ minHeight: '100vh' }} className='flex justify-center items-center'>
<<<<<<< Updated upstream
      <div style={{ height:'95px', display:"flex", flexDirection:'column', gap:'40px' }}>
        <div style={{fontSize:'40px'}} className="font-medium">Rewardwale version 2.0</div>
        <div style={{fontSize:'40px'}} className='text-center'>HERO section</div>
        
        <div className='flex justify-center items-center ms-5'>
          
=======
      <div>
        <div className="text-4xl font-medium">Rewardwale version 2.0</div>
        <div className='text-8xl text-center'>HERO section</div>
        
        <div className='flex justify-center items-center ms-5'>
>>>>>>> Stashed changes
          <ThemeModeToggle />
        </div>
      </div>
    </main>
  )
}

export default HeroSection