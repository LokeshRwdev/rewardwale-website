"use client";
import React, { useState } from "react";
import FirstPage from "./step1/page";
import SecondPage from "./step2/page";
import ThirdPage from "./step3/page";

const MultiStepForm: React.FC = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to go to the next page
  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {currentPage === 1 && <FirstPage onContinue={handleNextPage} />}
      {currentPage === 2 && <SecondPage onContinue={handleNextPage} onBack={handlePreviousPage} />}
      {currentPage === 3 && <ThirdPage onBack={handlePreviousPage} onContinue={handleNextPage} />}
    </div>
  );
};

export default MultiStepForm;
