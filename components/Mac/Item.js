import React from "react";
import Image from "next/image";

export default function Item() {
  return (
    <div className="p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden text-center">
        <Image
          src="/mac/mac-pro-1.jpg"
          height={150}
          width={180}
          layout="fixed"
          alt="img"
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 text-center text-base font-medium">
          MacBook Pro 13 Retina M1 (8-CPU Core / 8-GPU Core) - 8GB - 256GB
        </h2>
        <h2 className="text-blue-700 text-center text-base font-medium">
          A laser drilling capability
        </h2>
        <p className="mt-1 text-sm text-center">2115 shekels</p>
        <p className="mt-1 text-sm text-center">2115 shekels</p>
      </div>
    </div>
  );
}
