'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Slider from "react-slick";

interface ShortCardProps {
  image: string;
  author: string;
  views: number;
}

interface SubHeadingContentProps {
  cards: ShortCardProps[];
}

interface Subheading {
  title: string;
  cards: ShortCardProps[];
}

interface Category {
  heading: string;
  subheadings: Subheading[];
}

interface HeroSlide {
  image: string;
  video?: string;
  title: string;
  description: string;
}

interface CategoryData {
  heroSlides: HeroSlide[];
  categories: Category[];
}

const HeroSection: React.FC<{ slides: HeroSlide[] }> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
    // style={{height:'100vh'}}
    className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="">
            {slide.video ? (
              <video
                src={slide.video}
                poster={slide.image}
                className="w-full object-cover"
                autoPlay
                loop
                muted
                style={{
                  height:'35rem',
                  width:'100%'
                }}
              />
            ) : (
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
              <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-white">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ShortCard: React.FC<ShortCardProps> = ({ image, author, views }) => (
  <Card className="w-[200px] flex-shrink-0">
    <CardContent className="p-0">
      <div className="relative w-full overflow-hidden">
        <img
          src={image}
          alt={author}
          className="rounded-t-lg"
          style={{
            height:'500px',
            minWidth:'300px',
            aspectRatio:'16/9',
            objectFit:'cover',
            borderRadius:'12px'
          }}
        />
      </div>
      <div className="p-2">
        <p className="font-semibold truncate">{author}</p>
        <p className="text-sm text-gray-500">{views} views</p>
      </div>
    </CardContent>
  </Card>
);

const SubHeadingContent: React.FC<SubHeadingContentProps> = ({ cards }) => (
  <ScrollArea className="w-full whitespace-nowrap rounded-md">
    <div className="flex space-x-4 p-4">
      {cards.map((card, index) => (
        <ShortCard key={index} {...card} />
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

const CategoryContent: React.FC<{ category: Category }> = ({ category }) => (
  <Tabs defaultValue={category.subheadings[0].title} className="w-full">
    <TabsList className="mb-4">
      {category.subheadings.map((subheading, index) => (
        <TabsTrigger key={index} value={subheading.title}>
          {subheading.title}
        </TabsTrigger>
      ))}
    </TabsList>
    {category.subheadings.map((subheading, index) => (
      <TabsContent key={index} value={subheading.title}>
        <SubHeadingContent cards={subheading.cards} />
      </TabsContent>
    ))} 
  </Tabs>
);

interface HeroWrapperProps {
  categoriesData: CategoryData[];
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ categoriesData }) => {
  return (
    <div className="min-h-screen">
      <HeroSection slides={categoriesData[0].heroSlides} />
      <div className="container mx-auto px-4">
        {categoriesData.map((data, index) => (
          <div key={index} className="mb-10">
            {data.categories.map((category, catIndex) => (
              <div key={catIndex}
              style={{
                marginBottom:'40px'
              }}
              className="mb-12">
                <div
                style={{
                  fontSize:'32px',
                  // color:'black',
                  fontWeight:'600',
                  paddingTop:'50px',
                  paddingBottom:'20px'

                }}
                className="text-2xl font-bold mb-4">{category.heading}</div>
                <CategoryContent category={category} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroWrapper;