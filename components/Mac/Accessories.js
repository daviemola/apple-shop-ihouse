import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import AccessoryItem from "./AccessoryItem";

export default function Accessories() {
  return (
    <div className="container px-5 py-6 mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-right my-4">Accessories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
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
