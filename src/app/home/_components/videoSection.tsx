import React from 'react'
import CommonTitle from './commonTitle'

export default function VideoSection() {
  return (
     <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
      <CommonTitle title={"From Loan to Freedom"} />
          <h2 className="font-poppins text-heading text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight">
            Turning Your Pledged Gold
            <br />
            Back Into Your Hands
          </h2>
        </div>
        {/* Video Section */}

 


        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <iframe
                className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/D2PZUB_lDCk"
                title="Video Title"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
 
  )
}
