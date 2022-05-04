import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Campaign() {
  const compaigns = [
    {
      id: 1,
      text: " Fixie offal mixtape venmo air plant.",
      img: "/mac/acc-1.jpg",
    },
    {
      id: 2,
      text: "low-carb you probably haven't heard of them leggings, single-origin",
      img: "/mac/acc-1.jpg",
    },
    {
      id: 3,
      text: "Single-origin coffee chicharrones tofu, fam offal vegan DIY direct trade",
      img: "/mac/acc-1.jpg",
    },
    {
      id: 4,
      text: "daptogen before they sold out waistcoat la croix gochujang raw denim",
      img: "/mac/acc-1.jpg",
    },
    {
      id: 5,
      text: " Fixie offal mixtape venmo air plant.",
      img: "/mac/acc-1.jpg",
    },
    {
      id: 6,
      text: "Succulents messenger bag snackwave kale chips direct trade aesthetic",
      img: "/mac/acc-1.jpg",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="container px-5 py-24 mx-auto max-w-7xl ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl text-right mb-4 text-gray-900">
            Campaign and Presentations
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <Swiper
            style={{
              "--swiper-pagination-color": "#301434",
            }}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={25}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {compaigns.map((item) => (
              <SwiperSlide key={item.id}>
                <>
                  <div className="p-4 bg-white mb-12 mx-4 sm:mx-2 rounded">
                    <div className="h-full flex flex-col items-center text-center">
                      <Image
                        src="/mac/acc-1.jpg"
                        height={250}
                        width={250}
                        alt="img"
                      />
                      <div className="w-full">
                        <p className="mb-4 text-right text-sm">
                          DIY tote bag drinking vinegar cronut adaptogen squid
                          fanny pack vaporware.
                        </p>
                      </div>
                    </div>
                    <div className="my-4 ml-2">
                      <Link href="#">
                        <a className="text-blue-600 text-left">Details</a>
                      </Link>
                    </div>
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
