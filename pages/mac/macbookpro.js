import React from "react";
import Layout from "../../components/Layout/Layout";
import MacBookPro from "../../components/Mac/MacBookPro";
import Contact from "../../components/Home/Contact";
import MiniHero from "../../components/Layout/MiniHero";

export default function macbookpro({}) {
  return (
    <Layout>
      <MiniHero />
      <div>
        <div>
          <h1 className=" text-4xl text-center my-6">MacBook Pro</h1>
        </div>
        <div>
          <div className="mx-auto flex flex-wrap md:flex-row flex-col justify-center">
            <button className="px-5 py-3 mx-2 my-1 text-blue-600 border border-gray-200">
              MacBook Pro 14 inch
            </button>
            <button className="px-5 py-3 mx-2 my-1 text-blue-600 border border-gray-200">
              MacBook Pro 16 inch
            </button>
            <button className="px-5 py-3 mx-2 my-1 text-blue-600 border border-gray-200">
              MacBook Pro 13 inch
            </button>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <MacBookPro />
              <MacBookPro />
              <MacBookPro />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  );
}
