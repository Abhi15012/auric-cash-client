import CommonTitle from "../app/home/_components/commonTitle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Phone } from "lucide-react";

export default function QuickContact() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Free Consultation Label */}
         

          {/* Main Heading */}
          {CommonTitle({ title: "Quick Contact" })}

          {/* Form Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-end max-w-7xl  mx-auto">
            {/* Name Input */}
            <div className="flex-1 w-full">
              <label
                htmlFor="fullName"
                className="block text-left text-sm font-medium text-gray-700 mb-2 font-poppins"
              >
                Enter your full name
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="e.g. Anil Kumar"
                className="w-full h-12 px-4 border text-gray-400 border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Phone Input */}
            <div className="flex-1 w-full">
              <label
                htmlFor="phoneNumber"
                className="block text-left text-sm font-medium text-gray-700 mb-2 font-poppins"
              >
                Enter number
              </label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Add 10 digit number"
                className="w-full h-12 px-4 border text-gray-400 border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Call Back Button */}
            <Button className="w-full sm:w-auto h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-poppins">
              <Phone className="w-4 h-4" />
              Request a Call Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
