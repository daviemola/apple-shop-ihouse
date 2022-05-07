import React, { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { MdOutlineSummarize, MdLogin } from "react-icons/md";
import { BiBox } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";

const solutions = [
  {
    name: "Cart is empty",
    description: "Measure actions your users take",
    href: "##",
    icon: <AiOutlineShoppingCart className="text-xl mr-2 text-black" />,
  },
  {
    name: "My requests",
    description: "Create your own targeted content",
    href: "##",
    icon: <BiBox className="text-xl mr-2 text-black" />,
  },
  {
    name: "Arithmetical",
    description: "Keep track of your growth",
    href: "##",
    icon: <MdOutlineSummarize className="text-xl mr-2 text-black" />,
  },
  {
    name: "My Points",
    description: "Keep track of your growth",
    href: "##",
    icon: <AiFillStar className="text-xl mr-2 text-black" />,
  },
  {
    name: "Log In",
    description: "Keep track of your growth",
    href: "##",
    icon: <MdLogin className="text-xl mr-2 text-black" />,
  },
];

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
              <PopOver color="white" size="lg" />
            </div>
            <div
              className="mr-5 text-white cursor-pointer"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <BiSearch />
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Call Us</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Used</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Resellers</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Accessories</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Music</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Watch</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Iphone</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="#">
                <a>Ipad</a>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-300 cursor-pointer text-white text-sm tracking-wider font-semibold">
              <Link href="/mac">
                <a>Mac</a>
              </Link>
            </div>
          </nav>
          <span className="ml-3 text-xl">
            <Image src="/logo-light.png" height={20} width={65} alt="logo" />
          </span>
        </div>
        <div className="md:hidden flex justify-between items-center w-full mx-4">
          <div className="mr-4 text-black">
            <PopOver color="black" size="3xl" />
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
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-80 transform scale-95"
        enterTo="opacity-100 transform scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="tranform opacity-100 scale-95"
        leaveTo="tranform opacity-0 scale-95"
      >
        <div
          className={`bg-zinc-900 z-30 h-[93vh] md:hidden transition-all ease-out duration-500 md:transition-none pt-3`}
        >
          <div className="mx-6">
            <ul className="list-none">
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="/mac">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Mac
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    iPhone
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    iPad
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Watch
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Music
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Accessories
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Used
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    More
                  </a>
                </Link>
              </li>
              <li className="text-right my-4 border-b border-zinc-600 pb-1">
                <Link href="#">
                  <a className="hover:text-gray-300 text-white text-sm tracking-wider font-semibold">
                    Call Us
                  </a>
                </Link>
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
      </Transition>
    </>
  );
}

function PopOver({ color, size }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-4xl font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <AiOutlineShoppingCart
              className={`${open ? "" : `text-white text-${size} mt-1`}
                  text-${color} transition duration-150 ease-in-out group-hover:text-opacity-80 text-${size} mt-1`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-28 sm:left-1/2 z-10 mt-3 sm:w-56 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded border border-gray-200 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid bg-white px-3 py-3">
                  <div className="py-4 mb-2 border-b border-gray-200">
                    <p className="text-xs font-medium text-gray-600 text-center">
                      There are no items in your cart.
                    </p>
                  </div>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-0 flex items-center">
                        {item.icon}
                        <p className="text-sm font-medium text-gray-700">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
