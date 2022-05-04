import React from "react";
import Item from "./Item";

export default function SimilarItems() {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
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
