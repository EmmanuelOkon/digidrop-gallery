import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col align-middle md:gap-10 lg:flex-row px-4  md:pt40 pt20 lg:px-2 h-[90vh] ">
      <div className="mx-auto my-auto py-5 text-center">
        <div className="sm:px-1">
          <h1 className="font-raleway text-center text-3xl lg:tracking-wide font-bold text-blue lg:text-5xl">
            Welcome to Digidrop
          </h1>
          <p className="mt-3 max-w-md text-center font-poppins text-lg sm:text-xl md:mt-5 md:mx-20 md:max-w-3xl">
            Digidrop is a platform for sharing and viewing digital art. It is
            also a place for artists to connect with each other and share their
            work.
          </p>
          <div className="mt-10 sm:flex sm:justify-center ">
            <div className="mt-3 rounded-md shadow sm:mt-0 ">
              <a
                href="/gallery"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-deepBlue hover:bg-blue -30 md:py-4 md:text-lg md:px-10"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
