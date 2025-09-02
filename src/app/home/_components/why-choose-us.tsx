'use client';
import Image from "next/image";
import React from "react";
import CommonTitle from "./commonTitle";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const row1 = [
  {
    title: "Best Market Rates",
    description: "Get the higest value for your gold at today's prices",
    image: "/why-rupee.png", // replace with your image path
  },
  {
    title: "Fast & Transparent Process",
    description: "No hidden charges or delays, completely transparent",
    image: "/why-icon2.png", // replace with your image path
  },
];

const row2 = [
      {
    title: "Secure Handling",
    description: "Your gold is safe with our trusted team",
    image: "/why-icon3.png",
  },
  {
    title: "Expert Guidance",
    description: "We handle negotiations and paperwork for you",
    image: "/why-icon4.png",
  },
]

  return (
    <motion.section 
    
    className="w-full min-h-screen lg:px-20 bg-[#EEF8FE] mx-auto px-6 py-16 pb-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <CommonTitle title={"Why us"} />
        <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Why Customers Choose Us
        </h2>
      </div>

    <motion.div className="absolute z-0"
     whileInView={{transform:'translateX(0px)', opacity:1}}
      initial={{transform:'translateX(-100px)', opacity:0}}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
          <Image src='/Rectangle-why.svg'
      alt="rectangle"
       height={400}
       width={1000}
       className="w-full "
      />

    </motion.div>
<div className="flex flex-col  gap-y-10 justify-center py-10">
          <motion.div className=" flex flex-row mx-auto self-center z-10 gap-x-10   w-full h-full justify-center items-center "
   
    
          >
            {row1.map((item, index) => (
              <motion.div
                 whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
                key={index}
                className="bg-white rounded-lg  p-6 w-[350px] h-[250px] flex flex-col items-center justify-center"
                >
                <Image
                  src={item.image}
                  alt={item.title}
                    width={50}
                    height={50}
                  className="w-18 h-16 mb-4"
                />
                <h3 className="font-poppins text-gray-800 mb-2 text-lg font-semibold">
                        
                  {item.title}
                </h3>

                <p className="font-poppins text-gray-600 text-sm text-center">
                  {item.description}
                </p>
                </motion.div>

            ))}
   
</motion.div>

      <motion.div className=" mx-20  flex flex-row   z-10 gap-x-10   w-full h-full justify-center items-center ">
   {row2.map((item, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                   whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg p-6 w-[350px] h-[250px] flex flex-col items-center justify-center"
                >
                <Image
                  src={item.image}
                  alt={item.title}
                    width={55}
                    height={52}
                  className="w-14 h-16 mb-4"
                />
                <h3 className="font-poppins text-gray-800 mb-2 text-lg font-semibold">
                {item.title}
                </h3>

                <p className="font-poppins text-gray-600 text-sm text-center">
                  {item.description}
                </p>
                </motion.div>

            ))}
     
   
</motion.div>
</div>
    


{/* // cards */}



    </motion.section>
  );
}
