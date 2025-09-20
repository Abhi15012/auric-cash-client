"use client";
import React, { useState } from "react";
import CommonTitle from "../../src/app/buy-gold/_components/commonTitle";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Switch } from "./switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userContactSchema } from "./gold-contact";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";

export default function QuickContact({ title }: { title: string }) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
      type: "success" | "error" | null;
      message: string;
    }>({ type: null, message: "" });
  

  const defaultIntent = typeof window !== "undefined" ? (window.location.href.includes("sell-gold") ? "sell" : window.location.href.includes("release-gold") ? "release" : window.location.href.includes("loan-gold") ? "sell-pledged" : null) : null;

  type UserContactFormData = z.infer<typeof userContactSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm <UserContactFormData>({
    resolver: zodResolver(userContactSchema),
   defaultValues: {
      fullName: "",
      CountryCode: "+91",
      mobile: "",
      customerType: defaultIntent
        ? (defaultIntent === "sell"
            ? "sellgold"
            : defaultIntent === "release"
            ? "releasegold"
            : defaultIntent === "sell-pledged"
            ? "loangold"
            : "quickContact")
        : "quickContact",
      address: "",
      isVerified: false,
      isWhatsApp: false,
    },
  });

  const submitUserContact = async (data: UserContactFormData): Promise<string> => {
    const response = await fetch("https://api.prcgoldbuyers.com/api/user/verifyuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        countryCodes:"+91",
        isVerified: true, // Set to true as per API example
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  };


  async function onSubmit(values: UserContactFormData) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitUserContact({
        ...values,
        isVerified: true,
      });

      setSubmitStatus({
        type: "success",
        message: result.message || "Request submitted successfully! We'll call you back soon.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        reset();
        setSubmitStatus({ type: null, message: "" });
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to submit request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }


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
                autoFocus
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
              <Label htmlFor="mobile" className="inline-flex items-center gap-1">
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
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Mobile number must be 10 digits, no alphabets or symbols",
                  },
                })}
                aria-required="true"
              />
              {errors.mobile && (
                <span className="text-xs text-red-600">
                  {errors.mobile.message}
                </span>
              )}
            </div>
            {/* WhatsApp toggle */}
            <div className="flex items-center justify-end space-x-4 p-3">
              <span className="text-sm font-medium text-slate-800">
                Number linked to WhatsApp?
              </span>
              <Switch id="whatsapp" {...register("isWhatsApp")} />
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
                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus.type === "success"}
                  className="h-11 w-full font-poppins rounded-xl bg-primary text-white hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </div>
                  ) : submitStatus.type === "success" ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Request Submitted
                    </div>
                  ) : (
                    "Request a Free Call Back"
                  )}
                </Button>
              </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}