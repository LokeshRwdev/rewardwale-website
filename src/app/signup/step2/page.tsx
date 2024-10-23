"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SecondPage: React.FC<{ onContinue: () => void; onBack: () => void }> = ({
  onContinue,
  onBack,
}) => {
  const [open, setOpen] = useState(false); // State to control dialog visibility

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Navbar */}
      <header className="w-full py-4 px-6 bg-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="h-5 w-28">
            <Image src="/logo.png" alt="Logo" width={100} height={20} />
          </div>
        </div>

        {/* Adjusted "Already have an account?" text for responsive design */}
        <div>
          <a href="#" className="text-sm font-medium text-gray-700 hover:underline hidden sm:block">
            Already have an account? <span className="text-blue-500">Sign in</span>
          </a>
          <a href="#" className="text-sm font-medium text-blue-500 hover:underline block sm:hidden">
            Sign in
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome back</h1>
        <Input
          type="text"
          placeholder="Mobile no."
          className="w-full max-w-xs mb-2 p-5"
        />

        {/* Send OTP Button - opens the OTP dialog */}
        <Button
          className="w-full max-w-xs px-7 py-6 rounded-full text-white"
          onClick={() => setOpen(true)} // Open dialog on click
        >
          Send OTP
        </Button>

        {/* OTP Dialog */}
        <Dialog open={open} onOpenChange={setOpen}  >
          <DialogTrigger asChild>
            {/* Trigger is handled by the button, so no content here */}
          </DialogTrigger>
          <DialogContent className="sm:mx-6 mx-auto">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl text-center">Submit OTP</DialogTitle> {/* Adjusted text size */}
            </DialogHeader>
            <div className="flex flex-col items-center">
              <p className="mb-4 text-base sm:text-sm">Enter the 6-digit OTP sent to your mobile number</p> {/* Adjusted text size */}
              <Input
                type="text"
                placeholder="Enter OTP"
                maxLength={6} // Restrict to 6 digits
                className="w-full max-w-xs mb-4"
              />
              <Button className="w-full max-w-xs px-7 py-6 rounded-full text-white">
                Verify OTP
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Back and Continue buttons */}
        <div className="w-full flex justify-between max-w-xs mt-2 gap-2">
          <Button
            variant="outline"
            className="w-full inline-flex justify-center items-center max-w-xs px-7 py-6 rounded-full"
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            className="w-full inline-flex justify-center items-center max-w-xs px-7 py-6 rounded-full"
            onClick={onContinue}
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
    </div>
  );
};

export default SecondPage;
