import React from 'react'
import CommonTitle from './commonTitle'

export default function VideoSection() {
  return (
     <section className="bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <CommonTitle title={"From Loan to Freedom"} />
          <h2 className="font-poppins text-heading text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Turning Your Pledged Gold
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Back Into Your Hands
          </h2>
        </div>
        
        {/* Video Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            {/* Mobile Video */}
            <div className="md:hidden">
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/D2PZUB_lDCk"
                  title="Video Title"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Desktop/Tablet Video */}
            <div className="hidden md:block">
              <iframe
                className="w-full h-[350px] lg:h-[450px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/D2PZUB_lDCk"
                title="Video Title"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  )
}
