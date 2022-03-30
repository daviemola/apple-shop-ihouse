import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col max-w-6xl mx-auto text-center w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
            Collect points and redeem them for
            <br />
            discounts.
          </h1>
          <div className="md:mx-36 mx-0">
            <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-sm">
              With every purchase through the site, you get points and you can
              redeem them for discounts on the next purchase.
              <br />
              Terms and more details here
            </p>
          </div>
          <Image src="/heroimg.jpg" height={400} width={1000} alt="heroimage" />
        </div>
      </div>
    </section>
  );
}
