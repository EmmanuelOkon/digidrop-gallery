import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-10 lg:flex-row px-4 lg:pb20  md:pt-40 pt-20 lg:px-20">
      <div className="m-auto py-5 text-center lg:text-left flex-1">
        <div className="sm:px-1 xl:pr-16">
          <h1 className="font-grotesk text-3xl lg:tracking-wide font-bold text-blue lg:text-5xl">
            Building Startups for Africa’s next Generation
          </h1>
          <p className="mt-3 max-w-md font-manrope text-lg sm:text-xl md:mt-5 md:max-w-3xl">
            Take your time to build your talent in the digital space, whether a
            novice or an experienced individual, you deserves a place to assist
            you achieve your goals.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md shadow sm:mt-0 ">
              <a
                href="https://forms.gle/r6uQfJpXPJVZbPk86"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue hover:bg-opacity-30 md:py-4 md:text-lg md:px-10"
              >
                See what we do
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pb-5">
        <img
          src="../../images/training.jpeg"
          formats={["auto", "webp", "avif"]}
          alt="matriks training"
        />
      </div>
    </div>
  )
}