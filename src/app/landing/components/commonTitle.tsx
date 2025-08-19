import React from 'react'

export default function CommonTitle({
    title
}: any) {
  return (
         <div className="flex items-center justify-center mb-6">
            <div className="w-1 h-8 bg-primary mr-3"></div>
            <span className="font-poppins font-bold text-sm md:text-base uppercase tracking-wide text-gray-700">
            {title}
            </span>
          </div>
  )
}
