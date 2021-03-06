import Image from "next/image";
import React from "react";

const ModalDetails = ({ id }) => {
  return (
    <div className="relative flex flex-col bg-gray-50 rounded-3xl">
      <div className="relative">
        {/*image*/}
        <div className="w-[355px] h-[360px] sm:w-[565px] sm:h-[570px]">
          <Image
            src={`/${id}.jpeg`}
            className="rounded-t-3xl"
            layout="fill"
            alt="hashira"
          />
        </div>
      </div>
      {/*Description*/}
      <div className="px-5 pt-4 pb-6 sm:pt-6 sm:pb-10 sm:px-6">
        <h1 className="tracking-widest text-xxs sm:text-base">HASHIRA</h1>
        <div className="flex justify-between">
          <h1 className="text-1.5xl font-extrabold sm:text-3xl">
            {id} <span className="text-gray-500">//</span>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 sm:h-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
