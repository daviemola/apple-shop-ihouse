import React from "react";
import Layout from "../../components/Layout/Layout";
import MacBookPro from "../../components/Mac/MacBookPro";
import Contact from "../../components/Home/Contact";
import MiniHero from "../../components/Layout/MiniHero";
import { Tab } from "@headlessui/react";

export default function macbookpro({}) {
  return (
    <Layout>
      <MiniHero />
      <div>
        <div>
          <h1 className=" text-4xl text-center my-6">MacBook Pro</h1>
        </div>
        <Tab.Group>
          <div className="mx-auto flex flex-wrap md:flex-row flex-col justify-center">
            <Tab.List className="p-1 space-x-1">
              <Tab>
                <button className="px-5 py-3 mx-2 my-1 text-blue-600 border border-gray-200 focus:outline-none">
                  MacBook Pro 14 inch
                </button>
              </Tab>
              <Tab>
                <button className="text-blue-600  focus:outline-none">
                  MacBook Pro 16 inch
                </button>
              </Tab>
              <Tab>
                <button className="px-5 py-3 mx-2 my-1 text-blue-600 border border-gray-200 focus:outline-none">
                  MacBook Pro 13 inch
                </button>
              </Tab>
            </Tab.List>
          </div>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <Tab.Panels>
                <Tab.Panel>
                  <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                      <MacBookPro />
                      <MacBookPro />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                      <MacBookPro />
                      <MacBookPro />
                      <MacBookPro />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                      <MacBookPro />
                      <MacBookPro />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
      <Contact />
    </Layout>
  );
}
