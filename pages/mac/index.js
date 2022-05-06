import React from "react";
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Home/Contact";
import MiniHero from "../../components/Layout/MiniHero";
import Link from "next/link";
import Image from "next/image";

export default function Mac({}) {
  return (
    <Layout>
      <MiniHero />
      <div className="my-4 mx-4 sm:rounded-xl md:rounded-xl rounded-lg min-h-[30vh] bg-zinc-900">
        <div className="py-12">
          <h1 className="sm:text-5xl text-3xl text-gray-500 text-center">
            Mac Studio
          </h1>
          <h1 className="sm:text-4xl text-2xl font-semibold pt-8 text-gray-500 text-center">
            Power plant. <br /> It&apos;s amazing in its small size.
            <br /> It has a multi-pronged.
            <br /> scary with its performance.
            <br /> are you ready?
          </h1>
          <Link href="#">
            <a className="text-center text-blue-500 text-xl flex items-center justify-center py-6">
              Prices and specification from here.{" "}
            </a>
          </Link>
          <div className="flex justify-center">
            <Image src="/mac/mac-1.png" height={350} width={1200} alt="img" />
          </div>
        </div>
      </div>
      <div className="my-4 mx-4 sm:rounded-xl md:rounded-xl rounded-lg min-h-[30vh] bg-zinc-900">
        <div className="py-12">
          <h1 className="sm:text-5xl text-3xl text-gray-500 text-center">
            MacBook Pro
          </h1>
          <h1 className="sm:text-4xl text-2xl font-semibold pt-8 text-gray-500 text-center">
            He bends the power professionally.
          </h1>
          <p className="sm:text-3xl text-xl pt-8 max-w-5xl text-center mx-auto text-gray-400 px-8">
            The strongest MacBook Pro ever arrived. Terrifying performance,
            rocket speed for the M1 Pro or M1 Max, Apple silicons first
            professional-designed chipset, means youll have unprecedented
            performance and tremendous battery life. Add to this the stunning
            Liquid Retina XDR screen, the best camera and sound on your Notebook
            Mac ever, and all the outlets you need. Its the first notebook of
            its kind. Its a MacBook Pro with its terrifying abilities.
          </p>
          <Link href="#">
            <a className="text-center text-blue-500 text-xl flex items-center justify-center py-6">
              measuring 14 inches &gt; measuring 16 inches &gt;
            </a>
          </Link>
          <div className="flex justify-center">
            <Image src="/mac/mac-2.png" height={450} width={1200} alt="img" />
          </div>
        </div>
      </div>

      <Contact />
    </Layout>
  );
}
