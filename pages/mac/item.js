import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Home/Contact";
import MacItem from "../../components/Mac/MacItem";
import SimilarItems from "../../components/Mac/SimilarItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import Accessories from "../../components/Mac/Accessories";

export default function item() {
  return (
    <>
      <Layout>
        <MacItem />
        <SimilarItems />
        <Accessories />
        <Contact />
      </Layout>
      <div className="h-56 md:h-40 border-t border-gray-300 bg-gray-100 sticky bottom-0">
        <div className="container px-5 pt-4 max-w-7xl mx-auto">
          <div className="md:grid hidden grid-cols-2 md:grid-cols-4">
            <div>
              <h2 className="font-medium text-gray-500 text-xs sm:text-sm mb-1">
                15,966 shekels
              </h2>
              <h2 className="font-medium text-gray-900 text-base">13,890</h2>
            </div>

            <div>
              <h2 className="font-medium text-gray-900 text-xs sm:text-sm mb-1">
                Price before discount
              </h2>
              <div className="mb-10">
                <p className="text-gray-600 hover:text-gray-800 md:text-sm text-xs">
                  Price after discount
                </p>
                <p className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  inclusive 13%, discount for students and teachers on Mac
                </p>
              </div>
            </div>
            <ul className="list-none mb-0 sm:mb-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  Delivery Mechanism
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  Calculating Installments
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  Printing
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  Laser Drilling Capacity
                </a>
              </li>
            </ul>
            <div>
              <ul className="list-none sm:mb-4 mb-0  md:text-sm text-xs">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Currently Available
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Delivery is free for over 100 shekels, within 2-3 working
                    days
                  </a>
                </li>
              </ul>
              <div>
                <li className="flex items-center gap-2 justify-center">
                  <button className="bg-green-500 px-6 text-white py-1 mr-2 flex items-center text-sm">
                    <BsFillLightningFill className="text-white text-xl" />
                    Direct Purchase
                  </button>
                  <button className="bg-green-500 px-6 text-white py-1 text-sm flex items-center">
                    <AiOutlineShoppingCart className="text-white text-xl" />
                    <span className="text-white">Besides Basket</span>
                  </button>
                </li>
              </div>
            </div>
          </div>
          <div className="text-center text-xs md:hidden block">
            <p>
              Currently available - delivery is free for over 100 shekels,
              within 2-3 working days
            </p>
            <div className="flex items-center gap-2 justify-center">
              <button className="bg-green-500 px-6 text-white py-2 mr-2 flex items-center text-sm">
                <BsFillLightningFill className="text-white text-xl" />
                Purchase
              </button>
              <button className="bg-green-500 px-6 text-white py-2 text-sm flex items-center">
                <AiOutlineShoppingCart className="text-white text-xl" />
                <span className="text-white">Basket</span>
              </button>
            </div>
            <div className="text-blue-600">
              <div>
                <Link href="#">
                  <a>Delivery Mechanism</a>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <a>Calculating Installments</a>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <a>Printing</a>
                </Link>
              </div>
              <p className="text-black">Laser Drilling Capacity</p>
            </div>
            <div className="grid grid-cols-2 my-2">
              <div>
                <h2 className="font-medium text-gray-500 text-xs sm:text-sm mb-1">
                  15,966 shekels
                </h2>
                <h2 className="font-medium text-gray-900 text-base">13,890</h2>
              </div>
              <div className="text-left">
                <p className="text-gray-600 hover:text-gray-800 md:text-sm text-xs">
                  Price after discount
                </p>
                <p className="text-gray-600 hover:text-gray-800  md:text-sm text-xs">
                  inclusive 13%, discount for students and teachers on Mac
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
