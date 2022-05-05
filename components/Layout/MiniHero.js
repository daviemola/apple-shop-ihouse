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
    <div className="bg-zinc-900 py-2 min-h-40">
      <div className="min-h-36 max-w-[90%] mx-auto bg-zinc-900 flex justify-center lg:border-none border-x border-zinc-700 my-2">
        <div className="mx-auto my-6 max-w-6xl overflow-x-auto no-scrollbar">
          <div className="inline-flex gap-2 space-x-1 mx-auto">
            {items.map((item) => (
              <div key={item.id} className="mx-2 h-24 w-24 px-4">
                <Image src={item.image} height={75} width={75} alt="img" />
                <p className="text-white text-center text-xs sm:text-sm">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
