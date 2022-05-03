import React from "react";
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Home/Contact";
import MacItem from "../../components/Mac/MacItem";
import SimilarItems from "../../components/Mac/SimilarItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
      <div className="sm:h-42 h-48 border-t border-gray-300 bg-gray-100 sticky bottom-0">
        <div className="container px-5 pt-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow sm:flex  flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 w-1/2 px-4">
              <h2 className="font-medium text-gray-500 text-sm mb-1">
                15,966 shekels
              </h2>
              <h2 className="font-medium text-gray-900 text-base">13,890</h2>
            </div>
            <div className="lg:w-1/4 w-1/2 px-4">
              <h2 className="font-medium text-gray-900 text-sm mb-1">
                Price before discount
              </h2>
              <div className="mb-10">
                <p className="text-gray-600 hover:text-gray-800">
                  Price after discount
                </p>
                <p className="text-gray-600 hover:text-gray-800">
                  inclusive 13%, discount for students and teachers on Mac
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 w-1/2 px-4">
              <nav className="list-none mb-4">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Delivery Mechanism
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Calculating Installments
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Printing</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Laser Drilling Capacity
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 w-1/2 px-4">
              <nav className="list-none mb-4">
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
                <li className="flex items-center gap-2 justify-center">
                  <button className="bg-green-500 px-6 text-white py-1 mr-2">
                    Direct
                  </button>
                  <button className="bg-green-500 px-6 text-white py-1 flex items-center">
                    <AiOutlineShoppingCart className="text-white" />
                    <span className="text-green-500">1</span>
                  </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
