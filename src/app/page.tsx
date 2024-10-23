
import ContactSection from "@/sections/home/contact-section";
import HeroSection from "@/sections/home/hero-section";
import HowtoSection from "@/sections/home/hero-wrapper";
import MediaSection from "@/sections/home/media-section";
import RewardSection from "@/sections/home/reward-section";
import TestimonalsSection from "@/sections/home/testimonals-section";
import WhatToSection from "@/sections/home/whatto-section";
import {categoriesData} from '../constant/landingPage'
import YouTubeShorts from "@/sections/home/hero-wrapper";
import HeroWrapper from "@/sections/home/hero-wrapper";


export default function Home() {

  return (
    <div className="!scroll-smooth">
      <main>
        <ol
          className="list-inside list-decimal text-sm text-center sm:text-left
            font-[family-name:var(--font-geist-mono)]"
        >

          <div>
            {/* <HeroSection/> */}
            <HeroWrapper categoriesData={categoriesData}/>
        
          </div>


        </ol>
      </main>
    </div>
  );
}
