import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <div
        className={`z-20 h-20vh w-[100vw] fixed bg-zinc-100 min-w-screen top-0 left-0 ease-in-out duration-300  ${
          showSearchBar ? "translate-y-0" : "-translate-y-[100vh]"
        }`}
      >
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <div className="md:w-96">
              <input
                type="search"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleSearch2"
                placeholder="Search products, accessories..."
              />
            </div>
          </div>
          <div>
            <button
              className="px-4 py-6 flex items-center focus:outline-none"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <FiX className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
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

          <nav className="md:ml-auto md:mr-auto inline-flex items-center text-base justify-center sm:flex">
            <div className="mr-5 text-white cursor-pointer">
              <AiOutlineShoppingCart />
            </div>
            <div
              className="mr-5 text-white cursor-pointer"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <BiSearch />{" "}
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Call Us
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Used
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Resellers
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Accessories
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Music
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Watch
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Iphone
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Ipad
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              Mac
            </div>
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
            <div
              className="mt-2"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <button className="focus:outline-none">
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
