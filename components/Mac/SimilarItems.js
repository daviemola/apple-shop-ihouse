import React from "react";
import Item from "./Item";

export default function SimilarItems() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-6">
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
