import React from "react";
import Item from "./Item";

export default function SimilarItems() {
  return (
    <div className="container px-5 pt-12 pb-24 mx-auto max-w-7xl">
      <div>
        <h2 className="text-3xl py-12 text-right my-4">Similar Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
