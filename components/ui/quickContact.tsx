"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonTitle from "../../src/app/buy-gold/_components/commonTitle";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Label } from "./label";
import { cn } from "../lib/utils";
import { Input } from "./input";
import { Switch } from "./switch";
import { useForm } from "react-hook-form";

export default function QuickContact({ title }: { title: string }) {
 interface FormData {
    fullName: string;
    phone: string;
    address?: string;
    whatsapp: boolean;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      address: "",
      whatsapp: false,
    },
  });

  const onSubmit = (data:  FormData ) => {
    console.log("Form data:", data);
    alert("Request submitted!");
    reset(); // Optional: reset form after submission
  };

  return (
    <motion.section className="bg-white md:py-16 lg:py-20 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center md:mb-10 lg:mb-10">
          <CommonTitle title={title} />
          <h2 className="font-poppins text-heading text-2xl md:text-4xl font-medium lg:text-5xl md:font-semibold leading-tight">
            Get Instant Help with Your Gold 👋
          </h2>
        </div>
        <div className="my-20 mx-auto max-w-2xl">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="inline-flex items-center gap-1"
              >
                Enter your full name
                <span aria-hidden="true" className="text-red-600">
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="fullName"
                {...register("fullName", {
                  required: "Name is required",
                  pattern: {
                    value: /^[^\d]+$/,
                    message: "Name must not contain numbers",
                  },
                })}
                placeholder="Anil Mehra"
            
                aria-required="true"
              />
              {errors.fullName && (
                <span className="text-xs text-red-600">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            {/* Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="inline-flex items-center gap-1">
                Enter your Mobile number
                <span aria-hidden="true" className="text-red-600">
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="2345623456"
                {...register("phone", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Mobile number must be 10 digits, no alphabets or symbols",
                  },
                })}
                aria-required="true"
              />
              {errors.phone && (
                <span className="text-xs text-red-600">
                  {errors.phone.message}
                </span>
              )}
            </div>
            {/* WhatsApp toggle */}
            <div className="flex items-center justify-end space-x-4 p-3">
              <span className="text-sm font-medium text-slate-800">
                Number linked to WhatsApp?
              </span>
              <Switch id="whatsapp" {...register("whatsapp")} />
            </div>
            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">
                Address
                <span className="text-xs font-normal text-slate-500">
                  (optional)
                </span>
              </Label>
              <textarea
                id="address"
                rows={3}
                placeholder="1-2/2, Jubili hills, Punjagutta, Telangana"
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                {...register("address")}
              />
            </div>
            {/* CTA */}
            <div className="pt-1">
              <Button className="h-14 w-full font-poppins rounded-lg bg-primary text-white hover:bg-orange-400">
                Request a Free Call Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}