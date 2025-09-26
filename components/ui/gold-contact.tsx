"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Switch } from "./switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { getUserLocation } from "../lib/getLoction";

type GoldHelpDialogProps = {
  open: boolean;
  onClose: () => void;
  defaultIntent?: "sell" | "sell-pledged" | "release";
};

// Updated Zod schema with CountryCode
export const userContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  CountryCode: z.string().min(1, "Country code is required"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 characters long").max(10, "Mobile number must be at most 10 characters long"),
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

export function GoldHelpDialog({
  open,
  onClose,
  defaultIntent,
}: GoldHelpDialogProps) {
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
      customerType: defaultIntent
        ? defaultIntent === "sell"
          ? "sellgold"
          : defaultIntent === "release"
          ? "releasegold"
          : defaultIntent === "sell-pledged"
          ? "loangold"
          : "quickContact"
        : "quickContact",
      address: "",
      isVerified: false,
      isWhatsApp: false,
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // API call function

  // Popup state for existing user
  const [existingUserPopup, setExistingUserPopup] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

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
        isVerified: true,
      });

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Request submitted successfully! We'll call you back soon.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        reset();
        onClose();
        setSubmitStatus({ type: null, message: "" });
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
    } finally {
      setIsSubmitting(false);
    }
  }

  // Keyboard and body scroll handlers
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Reset status when dialog opens
  useEffect(() => {
    if (open) {
      setSubmitStatus({ type: null, message: "" });
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gold-help-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={containerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 8, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className={cn(
                "relative w-full max-w-md md:max-w-lg lg:max-w-2xl",
                "rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200"
              )}
            >
              {/* Close button */}
              <button
                aria-label="Close dialog"
                onClick={onClose}
                disabled={isSubmitting}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title */}
              <h2
                id="gold-help-title"
                className="text-balance pr-12 text-center text-2xl font-poppins font-semibold tracking-tight text-slate-900 md:text-3xl"
              >
                Get Instant Help with Your Gold 👋
              </h2>

              {/* Success/Error Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "mt-4 flex items-center gap-2 rounded-lg p-3 text-sm",
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

              {/* Existing User Popup */}
              {existingUserPopup.show && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
                >
                  <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full flex flex-col items-center">
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
                  </div>
                </motion.div>
              )}

              <form
                className="mt-6 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* ...existing form fields... */}
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
                    placeholder="Kiran Kumar"
                    autoFocus
                    aria-required="true"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-600">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Country Code and Mobile Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="inline-flex items-center gap-1"
                  >
                    Enter your Mobile number
                    <span aria-hidden="true" className="text-red-600">
                      *
                    </span>
                    <span className="sr-only">(required)</span>
                  </Label>

                  <div className="flex-1">
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="9876543210"
                      {...register("mobile")}
                      aria-required="true"
                      disabled={isSubmitting}
                    />
                  </div>
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

                {/* Customer Type Dropdown */}
                <div className="space-y-2">
                  <Label
                    htmlFor="customerType"
                    className="inline-flex items-center gap-1"
                  >
                    What do you want to do?
                    <span aria-hidden="true" className="text-red-600">
                      *
                    </span>
                  </Label>
                  <Controller
                    control={control}
                    name="customerType"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={isSubmitting}
                        
                      >
                        <SelectTrigger className="w-full justify-between text-black">
                          <SelectValue  className="text-black">
                            {field.value === "sellgold"
                              ? "Sell your gold"
                              : field.value === "releasegold"
                              ? "Release pledged gold"
                              : field.value === "loangold"
                              ? "Sell pledged gold"
                              : field.value === "quickContact"
                              ? "Choose an option"
                              : "Other"}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border border-gray-400">
                          <SelectItem
                            className="!rounded-none overflow-auto h-10 hover:bg-gray-100"
                            value="sellgold"
                          >
                            Sell your gold
                          </SelectItem>
                          <SelectItem
                            className="!rounded-none overflow-auto h-10 hover:bg-gray-100 "
                            value="releasegold"
                          >
                            Release pledged gold
                          </SelectItem>
                          <SelectItem
                            className="!rounded-none overflow-auto h-10 hover:bg-gray-100 "
                            value="loangold"
                          >
                            Sell pledged gold
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.customerType && (
                    <span className="text-xs text-red-600">
                      {errors.customerType.message}
                    </span>
                  )}
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
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
