// ThirdPage.tsx
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ThirdPage: React.FC<{ onBack: () => void; onContinue: () => void }> = ({ onBack, onContinue }) => {
  const [profilePhoto, setProfilePhoto] = useState("/default.jpg");

  // Handle profile photo upload
  const handleProfilePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-5">
        {/* Logo: visible on all screen sizes */}
        <div className="flex items-center">
          <Image
            className="h-5 w-auto"
            src="/logo.png"
            alt="Rewardwale Logo"
            width={100}
            height={28}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-gray-900 lg:mb-10 lg:mt-20">
        Complete your profile
      </h2>

      <div className="flex flex-col lg:flex-row w-full py-10 lg:px-64">
        <div className="w-full lg:w-1/4 mb-10 lg:mb-0 flex justify-center lg:justify-end">
          {/* Profile Photo Section */}
          <div className="text-center">
            <div className="relative">
              <Image
                className="mx-auto h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-50 lg:w-50 rounded-full object-cover"
                src={profilePhoto}
                alt="Profile"
                width={200}
                height={200}
              />
              {/* Camera Icon as Overlay */}
              <label className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer">
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePhotoUpload}
                />
                {/* Camera Icon */}
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM3 8.25v11.25A2.25 2.25 0 005.25 22h13.5A2.25 2.25 0 0021 19.5V8.25M16.5 3h-9l-1.5 1.5h12l-1.5-1.5z"
                  />
                </svg>
              </label>
            </div>
            {/* Upload Button Below the Profile Picture */}
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
            >
              Upload Profile Picture
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-8/12">
          {/* Form Section */}
          <div className="px-10">
            {/* Form Fields */}
            <form className="space-y-5">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="firstName"
                  placeholder="First Name"
                  required
                />
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              {/* Gender and DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  id="dob"
                  type="date"
                  placeholder="Date of Birth"
                  required
                />
              </div>

              {/* City */}
              <div>
                <Input
                  id="city"
                  placeholder="City"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  className="text-sm inline-flex items-center justify-center px-7 py-5 rounded-full text-black"
                  onClick={onBack}
                >
                  Back
                </Button>
                <Button type="submit" className="text-sm inline-flex items-center justify-center px-7 py-5 rounded-full text-white" onClick={onContinue}>
                  Complete
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

