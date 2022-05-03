import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Accessories() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-right">Accessories</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6">
        <div className="p-4 w-full border border-gray-200 rounded">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image
              src="/mac/acc-1.jpg"
              height={180}
              width={200}
              layout="fixed"
              alt="img"
            />
          </a>
          <div className="mt-4">
            <h2 className="text-gray-900 text-center text-base font-medium">
              CableTime 8K/60Hz 4K/144Hz HDMI 2.1 Cable 2M / Grey
            </h2>
            <div className="flex items-center text-green-700 text-center justify-center">
              <AiFillCheckCircle />
              <h2 className=" text-base font-medium">Available</h2>
            </div>

            <p className="mt-1 text-sm text-center">2115 shekels</p>
            <p className="mt-1 text-lg text-center">2115 shekels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
