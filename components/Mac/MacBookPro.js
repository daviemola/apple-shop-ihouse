import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";

export default function MacBookPro() {
  return (
    <div className="rounded-md border border-gray-200 px-4 py-4 mx-2 w-[320px] my-4">
      <Image src="/mac/mac-pro-1.jpg" height={300} width={300} alt="img" />
      <div className="my-4">
        <div>
          <p className="text-xl text-zinc-600 text-center">
            MacBook Pro 16 M1 Max (10-CPU / 32-GPU) 32GB 1TB
          </p>
        </div>
        <div className="my-4">
          <p className="text-green-600 text-center">
            Choose color to check availability.
          </p>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-gray-600 "></div>
              <div>
                <p className="text-xs mr-3 text-center">
                  Astronomical
                  <br /> gray
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-gray-400"></div>
              <p className="text-xs">
                Silver
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 my-8">
          <ul className="list-disc text-zinc-500">
            <li>Production end of 2021</li>
            <li>MacBook Pro 16-inch</li>
            <li>
              Apple M1 Max chip with 10 core CPU and 32 core graphics processing
              unit
            </li>
            <li>32GB unified memory</li>
            <li>1TB SSD disc</li>
          </ul>
        </div>
        <div className="mx-4">
          <div>
            <p className="text-base text-zinc-600 text-center">
              A Laser drilling capability
            </p>
            <p className="text-base text-zinc-600 text-center">350 Shekels</p>
            <p className="text-xl text-zinc-600 text-center">1389 Shekels</p>
            <div className="text-green-600 flex items-center justify-center">
              <AiFillCheckCircle className="mr-1" /> Available
            </div>
          </div>
        </div>
        <button className="w-full text-sm bg-zinc-700 hover:bg-blue-700 my-3 text-white py-3 px-4 rounded-md transition-all">
          For details and demand
        </button>
      </div>
    </div>
  );
}
