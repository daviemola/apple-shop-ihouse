import React from "react";
import Image from "next/image";

export default function GridCards() {
  return (
    <div className="max-w-6xl grid sm:grid-cols-2 grid-cols-1 gap-8 mb-12 mx-auto rounded mt-4">
      <div className="relative overflow-hidden bg-gray-100 rounded-md">
        <Image
          src="/phone.png"
          height={300}
          width={600}
          className="absolute inset-0 h-full w-screen object-cover rounded-md"
          alt="heroimg"
        />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 pt-4 flex items-center">
          <div className="py-4 w-full flex items-center justify-center">
            <h1 className="text-xl text-center text-white">
              iPhone 13. In your hands is a superpower
            </h1>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-gray-100 rounded-md">
        <Image
          src="/phone.png"
          height={300}
          width={600}
          className="absolute inset-0 h-full w-screen object-cover rounded-md"
          alt="heroimg"
        />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 pt-4 flex items-center">
          <div className="py-4 w-full flex items-center justify-center">
            <h1 className="text-xl text-center text-white">
              iPhone 13. In your hands is a superpower
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
