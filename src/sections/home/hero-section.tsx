import { ThemeColorToggle } from '@/components/theme-color-toggle'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import React from 'react'

const HeroSection = () => {
  return (
    <main style={{ minHeight: '100vh' }} className='flex justify-center items-center'>
      <div>
        <div className="text-4xl font-medium">Rewardwale version 2.0</div>
        <div className='text-4xl text-center'>HERO section</div>
        
        <div className='flex justify-center items-center ms-5'>
          <ThemeColorToggle /> 
          <ThemeModeToggle />
        </div>
      </div>
    </main>
  )
}

export default HeroSection