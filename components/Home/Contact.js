import React from "react";

export default function Contact() {
  return (
    <section className="text-gray-600 bg-zinc-900">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-white">
            Get the latest offers and products
          </h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col-reverse mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full mt-5">
            <button className="text-white bg-indigo-500 border-0 w-full py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign Up
            </button>
          </div>
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="Your Name"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-full">
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
