"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/landingpage/Navbar";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export default function Home() {
  const works = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const process = works;
  const about = works;
  const t = useTranslations("landingPage");
  const headers = t.raw("headers");
  const router = useRouter();

  const pricingData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  return (
    <React.Fragment>
      <div className="h-screen overflow-y-scroll scroll-smooth relative">
        <Navbar />
        {/* hero section */}
        <section>
          <div className="relative  w-full my-6 max-w-[96%] md:max-w-[96%] lg:max-w-6xl lg:h-[80vh] max-md:max-h-72  aspect-video mx-auto flex flex-col items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/hero-theme.png')] bg-cover bg-center rounded-3xl z-0 h-full w-full" />

            {/*  Overlay Text */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2   z-10 max-w-[90%] md:max-w-2xl">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                {headers.hero}
              </h1>
            </div>
          </div>
        </section>
        {/* basic intro */}
        <section className="py-16 bg-gray-50 select-text">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-2xl md:text-4xl  font-bold mb-6 text-black">
              {headers.basicIntro}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {works.map((i) => {
                const item = t.raw(`working.${i.id.toString()}`);
                return (
                  <div key={i.id}>
                    {/* <div className="text-4xl mb-2">📍</div> */}
                    <h3 className="text-xl font-semibold">
                      {`${i.id}. ${item.header} `}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* process*/}
        <section className="pb-16 bg-white select-text">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              {headers.process.header}
            </h2>
            <p className="text-gray-600 mb-12">
            {headers.process.desc}
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
              {process.map((i) => {
                const item = t.raw(`process.${i.id.toString()}`);
                return (
                  <div key={i.id} className="p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold">{item.head}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* pricing */}
        <section className="py-20 bg-gray-50" id="pricing">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
             {headers.pricing.header}
            </h2>
            <p className="text-gray-600 mb-12">
              {headers.pricing.desc}
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingData.map((i) => {
                const item = t.raw(`pricing.${i.id.toString()}`);
                const details = item.features;
                return (
                  <div
                    key={i.id}
                    className="bg-white p-6 rounded-xl shadow-md  shadow-white  transition-all duration-100 ease-in-out hover:scale-[1.02] hover:shadow-gray-200  "
                  >
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {item.vehicle}
                    </h3>
                    <p className="text-gray-500 mb-4">{item.description}</p>
                    <div className="text-3xl font-bold mb-4">
                      ₹{item.price} / Trip
                    </div>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      {details.map((f: string, i: number) => {
                        return <li key={i}> ✔ {f}</li>;
                      })}
                    </ul>
                    <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition-all">
                      {item.buttonText}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/*  about*/}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
             {headers.about.header}
            </h2>
            <p className="text-gray-600 mb-12">
              {headers.about.desc}
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {about.map((i) => {
                const item = t.raw(`about.${i.id}`);
                return (
                  <div
                    key={i.id}
                    className="bg-gray-50 p-6 rounded-xl shadow-sm shadow-white hover:shadow-gray-300 transition-all ease-in-out duration-150 hover:scale-[1.02]"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {i.id + " " + item.header}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* final call */}
        <section className="py-16 bg-green-700 text-white px-6 md:px-12 max-w-[96%] md:max-w-6xl mx-auto rounded-3xl my-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">
           {t.raw("finalCell.heading")}
          </h2>
          <p className="mb-6">
           {t.raw("finalCell.paragraph")}
          </p>
          <button onClick={()=>{router.push('/auth')}} className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all ease-in-out duration-150 active:scale-95">
             {t.raw("finalCell.buttonText")}
          </button>
          <div className="absolute right-0 max-md:hidden top-0">
            <div className="h-[500px] w-[500px] bg-green-200 top-0 rotate-[55deg]  translate-x-[120px] -translate-y-[200px]  "></div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
}
