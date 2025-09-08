"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Switch } from "./switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type GoldHelpDialogProps = {
  open: boolean;
  onClose: () => void;
  defaultIntent?: "sell" | "sell-pledged" | "release";
};

// Zod schema for validation
const goldContactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .refine((val) => /^[^\d]+$/.test(val), {
      message: "Name must not contain numbers",
    }),
  phone: z
    .string()
    .length(10, "Mobile number must be exactly 10 digits")
    .refine((val) => /^[0-9]{10}$/.test(val), {
      message: "Mobile number must be 10 digits, no alphabets or symbols",
    }),
  whatsapp: z.boolean().optional(),
  intent: z.string().optional(),
  address: z.string().optional(),
});

export function GoldHelpDialog({
  open,
  onClose,
  defaultIntent,
}: GoldHelpDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(goldContactSchema),
    defaultValues: {
      intent: defaultIntent,
    },
  });
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
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
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Title only (no subheading/tags as requested) */}
            <h2
              id="gold-help-title"
              className="text-balance pr-12 text-center text-2xl font-poppins  font-semibold tracking-tight text-slate-900 md:text-3xl"
            >
              Get Instant Help with Your Gold 👋
            </h2>

            <form
              className="mt-6 space-y-5"
              onSubmit={handleSubmit(() => {
                alert("Request submitted!");
              })}
            >
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
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="2345623456"
                  {...register("phone")}
                  aria-required="true"
                />
                {errors.phone && (
                  <span className="text-xs text-red-600">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* WhatsApp toggle */}
              <div className="flex items-center justify-end space-x-4  p-3">
                <span className="text-sm font-medium text-slate-800">
                  Number linked to WhatsApp ?
                </span>
               
                <Switch id="whatsapp" {...register("whatsapp")} />
              </div>

              {/* Optional Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="intent" className="flex items-center gap-2">
                  What do you want to do?
                  <span className="text-xs font-normal text-slate-500">
                    (optional)
                  </span>
                </Label>
                <Select name="intent" defaultValue={defaultIntent}>
                  <SelectTrigger id="intent" className="w-full justify-between">
                    <SelectValue placeholder="Choose an option (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">Sell your gold</SelectItem>
                    <SelectItem value="sell-pledged">
                      Sell pledged gold
                    </SelectItem>
                    <SelectItem value="release">Release pledged gold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Address */}
              <div className="space-y-2 ">
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
                <Button className="h-11 w-full font-poppins  rounded-xl bg-primary text-white hover:bg-orange-400">
                  Request a Free Call Back
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
