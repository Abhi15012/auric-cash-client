import React from 'react'
import CommonTitle from './commonTitle'
import { Button } from '../../../../components/ui/button'
import { Phone } from 'lucide-react'

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

        <Button
          className="bg-primary h-14 mb-6 font-poppins text-white px-8 py-4 md:px-10 md:py-5 lg:px-8 lg:py-4 rounded-lg
         flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors duration-500 ease-in-out
         w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]
         text-sm md:text-lg lg:text-xl 
         mx-auto
        "
        >
          <Phone
            width={25}
            height={20}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-10"
          />
          Request a Call Back
        </Button>


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
