import React from "react";
import Image from "next/image";

export default function MiniHero() {
  const items = [
    {
      id: 1,
      image: "/img/hero-1.svg",
      name: "Mac",
    },
    {
      id: 2,
      image: "/img/hero-2.svg",
      name: "Mac Pro",
    },
    {
      id: 3,
      image: "/img/hero-3.svg",
      name: "Mac Studio",
    },
    {
      id: 4,
      image: "/img/hero-4.svg",
      name: "Mac Mini",
    },
    {
      id: 5,
      image: "/img/hero-5.svg",
      name: "Mac Air",
    },
    {
      id: 6,
      image: "/img/hero-6.svg",
      name: "Mac",
    },
    {
      id: 7,
      image: "/img/hero-3.svg",
      name: "Mac Pro",
    },
    {
      id: 7,
      image: "/img/hero-4.svg",
      name: "Mac Pro",
    },
  ];
  return (
    <div className="min-h-28 bg-zinc-900 flex justify-center">
      <div className="container mx-auto flex flex-wrap items-center max-w-6xl my-6">
        <ul className="grid mx-auto lg:grid-cols-8 md:grid-cols-6 grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="mx-6">
              <Image src={item.image} height={65} width={65} alt="img" />
              <p className="text-white text-center text-sm">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
