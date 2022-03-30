import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto max-w-7xl flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-600 text-gray-500">Call Us</a>
        <a className="mr-5 hover:text-gray-600 text-gray-500">Return Policy</a>
        <a className="mr-5 hover:text-gray-600 text-gray-500">1-800-403080 </a>
        <a className="mr-5 hover:text-gray-600 text-gray-500">
          +970 (567) 423 086
        </a>
      </nav>

      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">iHouse</span>
      </a>
    </div>
  );
}
