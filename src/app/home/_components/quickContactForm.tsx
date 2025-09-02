import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Phone } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters").regex(/^[A-Za-z ]+$/, "Name must contain only letters and spaces"),
  phoneNumber: z.string().length(10, "Phone number must be exactly 10 digits").regex(/^\d{10}$/, "Phone number must be 10 digits, no letters or symbols"),
});

type FormData = z.infer<typeof schema>;

export default function QuickContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // handle form submission
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto flex flex-col gap-4">
      <div>
        <label htmlFor="fullName" className="block text-left text-sm font-medium text-gray-700 mb-2 font-poppins">
          Enter your full name
        </label>
        <Input
          id="fullName"
          type="text"
          placeholder="e.g. Anil Kumar"
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className="text-red-500 text-xs font-poppins">{errors.fullName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-left text-sm font-medium text-gray-700 mb-2 font-poppins">
          Enter number
        </label>
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="Add 10 digit number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-xs font-poppins">{errors.phoneNumber.message}</span>
        )}
      </div>
      <Button type="submit" className="w-full sm:w-auto h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-poppins" disabled={isSubmitting}>
        <Phone className="w-4 h-4" />
        Request a Call Back
      </Button>
    </form>
  );
}
