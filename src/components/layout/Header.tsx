'use client'

import React, { useEffect, useState } from "react";

export default function Header() {
  const [input, setinput] = useState("");


  const handleEnterPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // router.push("/search?i=" + input);
      location.href = "/search?i=" + input;
    }
  };

  const handleSearchOnClick = (e: any) => {
    e.preventDefault();
    // router.push("/search?i=" + input);
    location.href = "/search?i=" + input;
  };


  return (
    <div className="flex justify-between items-center p-4 dark:bg-dark-background2 max-lg:hidden ">
 
      <div className="flex-1  w-8/12">
        {/* <input
          type="text"
          className="bg-slate-100 dark:bg-neutral-800 h-10 px-5 rounded-xl border text-sm focus:outline-none w-2/3 text-gray-900 dark:text-gray-100"
          placeholder="Search Here"
          onKeyDown={handleEnterPress}
          onChange={(e) => setinput(e.target.value)}
        /> */}

        <form className="w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="flex w-full justify-center">
            <div className="relative w-1/2 flex">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-auto">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm
         text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 
           dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white
            "
                placeholder="Search Here"
                onKeyDown={handleEnterPress}
                onChange={(e) => setinput(e.target.value)}
                required
              />

              <button
                type="submit"
                className="text-white bg-purple-500 hover:bg-purple-600 
        focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-r-lg text-sm px-4 py-2
         dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                onClick={handleSearchOnClick}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
   

      <div className=" block justify-start items-center ml-2 w-2/12">
        {/* <div className=" w-full"> */}
        <div className="flex justify-start">
          <p
            className=" text-neutral-700 dark:text-white font-medium min-w-0 max-w-24 mx-1"
            style={{
              overflow: "clip",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            {/* {profile?.indFirstName} */}
          </p>
          <p
            className=" text-neutral-700 dark:text-white font-medium min-w-0 max-w-24 "
            style={{
              overflow: "clip",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            {/* {profile?.indLastName} */}
          </p>
        </div>

    
      </div>
    </div>
    // </div>
  );
}
