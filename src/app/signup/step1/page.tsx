// components/FirstPage.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const FirstPage: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/slide 1.png", alt: "Slide 1" },
    { src: "/slide 2.png", alt: "Slide 2" },
    { src: "/slide 3.png", alt: "Slide 3" },
    { src: "/slide 4.png", alt: "Slide 4" },
    { src: "/slide 5.png", alt: "Slide 5" },
    { src: "/slide 6.png", alt: "Slide 6" },
    { src: "/slide 7.png", alt: "Slide 7" },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      {/* Page Layout */}
      <div className="flex flex-col md:flex-row w-screen h-screen">
        {/* Carousel Section */}
        <div className="hidden md:block relative w-full max-w-2xl mx-auto md:w-8/12 lg:w-7/12">
          <div className="flex justify-center my-24 text-3xl">
            <Image src="/logo.png" alt="logo" height={80} width={180} />
          </div>
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <Image
                    src={image.src}
                    width={320}
                    height={320}
                    alt={image.alt}
                    className="w-80 object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Carousel buttons */}
            <Button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-2 bg-gray-300 text-white h-10 w-10"
            >
              &#10094;
            </Button>
            <Button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full p-2 bg-gray-300 text-white h-10 w-10"
            >
              &#10095;
            </Button>
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Signup form */}
        <div className="w-full lg:rounded-s-3xl md:rounded-s-3xl h-full lg:h-screen bg-purple-200 flex flex-col justify-between md:justify-start">
          <header className="text-right p-8 text-sm font-medium text-dark-background">
            <span>Already have an account? </span>
            <span>
              <Link href="/signup/sign" className="underline">
                Sign in
              </Link>
            </span>
          </header>
          <main className="flex flex-col justify-center items-center flex-grow px-4">
            <div className="w-full md:max-w-md">
              <div className="text-4xl font-semibold text-dark-background">
                Create your account
              </div>
              <p className="mt-5 text-dark-background">
                Choose a username for your page.
              </p>
              <Input
                type="text"
                placeholder="Username"
                className="rounded border-0 bg-slate-100 w-full mt-1 p-5"
              />

              {/* Continue button visible on small screens */}
              <Button
                onClick={onContinue}
                className="inline-flex items-center justify-center px-7 py-6 rounded-full text-white mt-4 md:hidden"
              >
                Continue
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Button>
            </div>
          </main>

          {/* Footer with right-corner continue button - visible on large screens */}
          <footer className="px-8 py-4 md:py-4 flex justify-between items-center text-dark-background">
            <div className="text-sm">
              <span>By continuing, you agree to the </span>
              <Link href="" className="underline">
                terms of service
              </Link>
              <span> and </span>
              <Link href="/companydetails" className="underline">
                privacy policy
              </Link>
              .
            </div>
            <Button
              onClick={onContinue}
              className="inline-flex items-center justify-center px-7 py-6 rounded-full text-white hidden md:inline-flex"
            >
              Continue
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
