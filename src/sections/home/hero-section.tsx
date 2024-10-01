import { ThemeColorToggle } from '@/components/theme-color-toggle'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
    <h1>Rewardwale version 2.0</h1>
    <h1>Hero section</h1>
    <ThemeColorToggle />
    <ThemeModeToggle />
  </div>
  )
}

export default HeroSection