"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import CommonTitle from "../../src/app/buy-gold/_components/commonTitle";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./button";
import { Label } from "./label";
import { cn } from "../lib/utils";
import { Input } from "./input";
import { Switch } from "./switch";
import { getUserLocation } from "../lib/getLoction";

// Updated Zod schema with CountryCode
export const userContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  CountryCode: z.string().min(1, "Country code is required"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 characters long")
    .max(10, "Mobile number must be at most 10 characters long"),
  customerType: z.enum([
    "sellgold",
    "releasegold",
    "loangold",
    "quickContact",
    "other",
  ]),
  address: z.string().optional(),
  isVerified: z.boolean(),
  isWhatsApp: z.boolean(),
});

type UserContactFormData = z.infer<typeof userContactSchema>;

export default function QuickContact({ title }: { title: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleGetLocation = async () => {
    try {
      const loc = await getUserLocation();
      setLocation(loc);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    }
  };

  // Popup state for existing user
  const [existingUserPopup, setExistingUserPopup] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  // Popup state for success response
  const [successPopup, setSuccessPopup] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserContactFormData>({
    resolver: zodResolver(userContactSchema),
    defaultValues: {
      fullName: "",
      CountryCode: "+91",
      mobile: "",
      customerType: "quickContact",
      address: "",
      isVerified: false,
      isWhatsApp: false,
    },
  });

  const submitUserContact = async (
    data: UserContactFormData
  ): Promise<{ message: string }> => {
    const response = await fetch(
      "https://api.prcgoldbuyers.com/api/user/verifyuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          countryCodes: "+91",
          isVerified: true, // Set to true as per API example
        }),
      }
    );

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      // If user already exists, show popup
      if (
        result &&
        result.message &&
        result.message.toLowerCase().includes("already exists")
      ) {
        setExistingUserPopup({ show: true, message: result.message });
        throw new Error(result.message);
      }
      throw new Error(
        result.message || `HTTP error! status: ${response.status}`
      );
    }

    // If user already exists, show popup
    if (
      result &&
      result.message &&
      result.message.toLowerCase().includes("already exists")
    ) {
      setExistingUserPopup({ show: true, message: result.message });
      throw new Error(result.message);
    }
    return result;
  };

  // Form submission handler
  async function onSubmit(values: UserContactFormData) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitUserContact({
        ...values,
        customerType: "quickContact", // Always pass quickContact
        isVerified: true,
      });

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Request submitted successfully! We'll call you back soon.",
      });

      // Show success popup for 200/success response
      setSuccessPopup({ 
        show: true, 
        message: result.message || "Request submitted successfully! We'll call you back soon." 
      });

      // Reset form after successful submission
      setTimeout(() => {
        reset();
        setSubmitStatus({ type: null, message: "" });
        // Refresh the page after successful submission
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit request. Please try again.",
      });
      
      // Refresh the page after error response as well
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Existing User Popup */}
      <AnimatePresence>
        {existingUserPopup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full flex flex-col items-center mx-4"
            >
              <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-lg font-bold mb-2">
                User Already Exists
              </h3>
              <p className="text-center text-gray-700 mb-4">
                {existingUserPopup.message}
              </p>
              <Button
                onClick={() =>
                  setExistingUserPopup({ show: false, message: "" })
                }
              >
                OK
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {successPopup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full flex flex-col items-center mx-4"
            >
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="text-lg font-bold mb-2">
                Success!
              </h3>
              <p className="text-center text-gray-700 mb-4">
                {successPopup.message}
              </p>
              <Button
                onClick={() =>
                  setSuccessPopup({ show: false, message: "" })
                }
              >
                OK
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section className="bg-white py-10 md:py-16 lg:py-20 flex justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center md:mb-10 lg:mb-10">
            <CommonTitle title={title} />
            <h2 className="font-poppins text-heading text-2xl md:text-4xl font-medium lg:text-5xl md:font-semibold leading-tight">
              Get Instant Help with Your Gold 👋
            </h2>
          </div>

          {/* Success/Error Messages */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "mt-4 mx-auto max-w-2xl flex items-center gap-2 rounded-lg p-3 text-sm mb-6",
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              )}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
              )}
              <span>{submitStatus.message}</span>
            </motion.div>
          )}

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
                  {...register("fullName")}
                  placeholder="Anil Mehra"
                 
                  aria-required="true"
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <span className="text-xs text-red-600">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="mobile"
                  className="inline-flex items-center gap-1"
                >
                  Enter your Mobile number
                  <span aria-hidden="true" className="text-red-600">
                    *
                  </span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="9876******"
                  {...register("mobile")}
                  aria-required="true"
                  disabled={isSubmitting}
                />
                {(errors.mobile || errors.CountryCode) && (
                  <span className="text-xs text-red-600">
                    {errors.mobile?.message || errors.CountryCode?.message}
                  </span>
                )}
              </div>

              {/* WhatsApp toggle */}
              <div className="flex items-center justify-end space-x-4 p-3">
                <span className="text-sm font-medium text-slate-800">
                  Number linked to WhatsApp?
                </span>
                <Controller
                  control={control}
                  name="isWhatsApp"
                  render={({ field }) => (
                    <Switch
                      id="whatsapp"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                    />
                  )}
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">
                  Address
                  <span className="text-xs font-normal text-slate-500 ml-1">
                    (optional)
                  </span>
                </Label>
                <textarea
                  id="address"
                  rows={3}
                  placeholder="123 MG Road, Bangalore, India"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 disabled:opacity-50"
                  {...register("address")}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus.type === "success"}
                  className="h-14 w-full font-poppins rounded-lg bg-primary text-white hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
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
    </>
  );
}