import React from "react";
import { Button } from "../../../../components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-gradient-to-r from-[#0F172A] via-[#282f3f61] to-[#2d3038cf] flex flex-col lg:flex-row items-start  justify-between  max-h-screen  md:pt-10 lg:pl-20  pb-8 md:pb-12 lg:pb-16">
      <div className="flex-1  py-[70px] pb-[30px]  max-w-3xl mb-8 lg:mb-0 lg:pr-4 text-center lg:text-left mt-6">
        <h1 className="font-poppins md:text-4xl lg:text-5xl font-semibold  text-white mb-4 md:mb-6 line-clamp-2  ">
         Sell Your Gold
          <br />
          at the Best Market Price
        </h1>


<div className="space-y-3 md:space-y-4 lg:space-y-6 mb-6 md:mb-8 w-full">
  <p className="font-poppins text-white text-base md:text-lg lg:text-xl line-clamp-5 letter-spacing-wide my-2">
    We <span className="text-gold">buy your gold</span>{" "} hassle-free,
  </p>
  <p className="font-poppins text-white text-base md:text-lg lg:text-xl line-clamp-5 letter-spacing-wide my-2">
      whether it is in hand or pledged with banks.
  </p>
  <p className="font-poppins text-white text-base md:text-lg lg:text-xl line-clamp-5 letter-spacing-wide my-2">
    giving you instant cash at the best value.
  </p>
  <p className="font-poppins text-white text-base md:text-lg lg:text-xl line-clamp-5 letter-spacing-wide my-2">
    Enjoy a transparent process, save on interest,
  </p>
  <p className="font-poppins text-white text-base md:text-lg lg:text-xl line-clamp-5 letter-spacing-wide my-2">
    and take advantage of today’s high gold prices.
  </p>
</div>

        <Button
          className="bg-gold h-14 mt-14 mb-6 font-poppins text-black px-8 py-4 md:px-10 md:py-5 lg:px-8 lg:py-4 rounded-lg
         flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors duration-500 ease-in-out
         w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]
         text-sm md:text-lg lg:text-xl 
        "
        >
          <Phone
            width={25}
            height={20}
            className="w-5 h-5 md:w-6 text-black md:h-6 lg:w-7 lg:h-10"
          />
         Get Best Price Now
        </Button>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-center lg:items-start">
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" }}
              src="/check.png"
              alt="Secure Icon"
              width={12}
              height={12}
            />
            <span className="text-gray-200 text-sm font-poppins">
        Highest Market Value
            </span>
          </div>
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" }}
              src="/lock.png"
              alt="Secure Icon"
              width={10}
              height={10}
            />
            <span className="text-gray-200 font-poppins text-sm">
              100% Secure Process
            </span>
          </div>
          <div className="flex items-center bg-[#FFFFFF17] px-4 py-2 rounded-3xl gap-2">
            <Image
              style={{ width: "14px", height: "14px" ,
                color:"yellow"
              }}
              src="/fast.png"
              alt="Secure Icon"
              width={16}
              height={16}
            />
            <span className="text-gray-200 text-sm font-poppins">
              Instant Cash Settlement
            </span>
          </div>
        </div>
      </div>

      <div className="hidden  md:flex flex-1 lg:flex-none lg:max-w-[600px] lg:h-[500px] mt-20  justify-start lg:justify-center">
        <Image
          src="/buy-gold.png"
          alt="Hands holding gold jewelry"
          width={1500}
          height={500}
          className="max-w-full w-full"
        />
      </div>
    </main>
  );
}
