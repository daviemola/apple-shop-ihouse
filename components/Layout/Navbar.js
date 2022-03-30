import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="text-gray-600 h-12 bg-zinc-800 flex justify-center">
      <div className="container mx-auto flex flex-wrap items-center max-w-6xl">
        <a className=" text-gray-100">
          <span className="ml-3 text-xl">
            <Image
              src="/authorized_reseller.png"
              height={20}
              width={65}
              alt="logo"
            />
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Call Us
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Used
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Resellers
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Accessories
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Music
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Watch
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Iphone
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Ipad
          </a>
          <a className="mr-5 hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
            Mac
          </a>
        </nav>
        <span className="ml-3 text-xl">
          <Image src="/logo-light.png" height={20} width={65} alt="logo" />
        </span>
      </div>
    </header>
  );
}
