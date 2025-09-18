'use client'
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonTitle from "../../src/app/buy-gold/_components/commonTitle";

import { motion } from "framer-motion";

export default function ServiceComp({title, data}: {title: string, data : string[]}) {


  return (
    <motion.section 
  
    className="bg-white  md:py-16 lg:py-20 flex justify-center ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center  md:mb-10 lg:mb-10">
                <CommonTitle title={"our services"} />
          <h2 className="font-poppins text-heading text-2xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide  lg:text-5xl  md:font-semibold leading-tight">
          What we do for{" "} 
            <br className="hidden  capitalize" />
    
          </h2>

              <h2 className="font-poppins text-heading text-2xl md:text-4xl font-medium line-clamp-5 letter-spacing-wide  lg:text-5xl  md:font-semibold leading-tight">
          {title}
          </h2>
        </div>

        <div className="my-20 mx-auto max-w-3xl">
{data && data.length > 0 && data.map((item, index) => (
  <div key={index} className="flex flex-row gap-4 items-center">
  <Image src={'/check.png'} alt={item} width={20} height={20} key={index} className="inline-block mr-2 mb-2"/>
 
  <p key={index} className="text-gray-700 text-lg md:text-xl font-poppins mb-4 inline-block">{item}</p>
 </div>
  )
)
  }
        </div>

      </div>
    </motion.section>
  );
}