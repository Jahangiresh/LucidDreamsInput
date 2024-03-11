import React from "react";
import Tags from "./Tags";

const FormulaInput = () => {
  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="bg-[#e5e7ea] flex items-center !border-sm justify-end flex-row-reverse w-full px-5 p-2 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-md    dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span className="text-black text-xs font-medium">
              New Customer Count
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0 text-black text-xs font-medium"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          <div className="py-2 px-4 flex items-center gap-x-5 bg-gray-100 w-full">
            <span className=" text-3xl w-4">♨️</span>ERROR
          </div>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="py-5 px-10 border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div className="border-sm border border-gray-200 rounded-sm p-1">
              <Tags />
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
    </div>
  );
};

export default FormulaInput;
