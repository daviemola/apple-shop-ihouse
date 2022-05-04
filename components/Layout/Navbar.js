import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="text-gray-600 h-12 md:bg-zinc-800 bg-gray-50 flex justify-center z-40">
        <div className="md:flex hidden flex-wrap items-center mx-auto container max-w-7xl">
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:block">
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
        <div className="md:hidden flex justify-between items-center w-full mx-4">
          <div className="mr-4">
            <AiOutlineShoppingCart className="text-4xl text-black" />
          </div>
          <div>
            <Link href="#">
              <a className="text-lg">iHouse</a>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-2">
              <button>
                <BiSearch className="text-3xl" />
              </button>
            </div>
            {isOpen ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <IoCloseOutline className="text-black text-4xl" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <IoIosMenu className="text-black text-4xl" />
              </button>
            )}
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className={`bg-zinc-900 z-30 h-[93vh] md:hidden transition-all ease-out duration-500 md:transition-none pt-3`}
        >
          <div className="mx-6">
            <ul className="list-none">
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Mac
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  iPhone
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  iPad
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Watch
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Music
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Accessories
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Used
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  More
                </a>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  Call Us
                </a>
              </li>
              <li className="text-right my-4 ">
                <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                  <span className="ml-3 text-xl">
                    <Image
                      src="/authorized_reseller.png"
                      height={20}
                      width={65}
                      alt="logo"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
