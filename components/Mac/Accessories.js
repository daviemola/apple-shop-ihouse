import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import AccessoryItem from "./AccessoryItem";

export default function Accessories() {
  return (
    <div className="container px-5 pt-12 pb-24 mx-auto max-w-7xl">
      <div>
        <h2 className="text-3xl pb-12 text-right my-4">Accessories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
      </div>
    </div>
  );
}
