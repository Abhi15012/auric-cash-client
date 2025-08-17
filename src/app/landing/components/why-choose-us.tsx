import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
    const row1 = [
  {
    title: "Lowest Commission Rates",
    description: "Pay less than market rates and save more",
    image: "/why-icon1.png", // replace with your image path
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
    <section className="w-full min-h-screen lg:px-20 bg-[#EEF8FE] mx-auto px-6 py-16 pb-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <div className="flex items-center justify-center mb-6">
          <div className="w-1 h-8 bg-primary mr-3"></div>
          <span className="font-poppins font-bold text-sm md:text-base uppercase tracking-wide text-gray-700">
            WHY US
          </span>
        </div>
        <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Why Customers Choose Us
        </h2>
      </div>

    <div className="absolute z-0">
          <Image src='/Rectangle-why.svg'
      alt="rectangle"
       height={400}
       width={1000}
       className="w-full "
      />

    </div>
<div className="flex flex-col  gap-y-10 justify-center py-10">
          <div className=" flex flex-row mx-auto self-center z-10 gap-x-10   w-full h-full justify-center items-center ">
            {row1.map((item, index) => (
              <div
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
                </div>

            ))}
   
</div>

      <div className=" mx-20  flex flex-row   z-10 gap-x-10   w-full h-full justify-center items-center ">
   {row2.map((item, index) => (
              <div
                key={index}
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
                </div>

            ))}
     
   
</div>
</div>
    


{/* // cards */}



    </section>
  );
}
