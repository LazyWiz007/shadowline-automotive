"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import PhoneInput from "./PhoneInput";

const bookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    teamName: z.string().optional(),
    phone: z.string()
        .min(1, "Phone number is required")
        .refine((val) => {
            const phoneNumber = parsePhoneNumberFromString(val);
            return phoneNumber ? phoneNumber.isValid() : false;
        }, {
            message: "Please enter a valid phone number for the selected country",
        }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingModal() {
    const { isModalOpen, closeModal, selectedVariant } = useBooking();
    const [step, setStep] = useState<"form" | "success">("form");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            teamName: "",
        },
    });

    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true);

        // Parse the E.164 phone string into backward-compatible parts for the backend API
        const parsedPhone = parsePhoneNumberFromString(data.phone);
        const countryCode = parsedPhone ? `+${parsedPhone.countryCallingCode}` : "+91";
        const nationalNumber = parsedPhone ? parsedPhone.nationalNumber as string : data.phone;

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    teamName: data.teamName,
                    phone: nationalNumber,
                    countryCode: countryCode,
                    variant: selectedVariant ? {
                        id: selectedVariant.id,
                        label: selectedVariant.label,
                        price: selectedVariant.price,
                        subtext: selectedVariant.subtext,
                    } : null,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                setStep("success");
            } else {
                alert(responseData.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        closeModal();
        setTimeout(() => {
            setStep("form");
            reset();
        }, 300);
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto z-[101] w-[92%] sm:w-full max-w-lg h-fit max-h-[95vh] md:overflow-visible overflow-y-auto bg-[#0A0A0A] border border-white/10 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        {step === "form" ? (
                            <div className="space-y-6">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-3xl md:text-4xl font-brand font-black uppercase italic tracking-tighter text-white mb-2">
                                        Book Your <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">
                                            Experience
                                        </span>
                                    </h2>
                                    {selectedVariant && (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mx-auto">
                                            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">{selectedVariant.label}</span>
                                            <span className="text-[10px] text-gray-400">·</span>
                                            <span className="text-[10px] font-mono text-white">{selectedVariant.price}</span>
                                        </div>
                                    )}
                                    <p className="text-justify text-gray-400 font-sans text-sm mb-8">
                                        Enter your details below to schedule a private consultation or test ride.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("name")}
                                            className={`w-full bg-white/5 border text-white px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder:text-gray-500 ${
                                                errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-cyan"
                                            }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <span role="alert" className="block text-xs text-red-500 mt-1">{errors.name.message}</span>
                                        )}
                                    </div>

                                    {/* Team Name */}
                                    <div className="space-y-1">
                                        <label htmlFor="teamName" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Team Name
                                        </label>
                                        <input
                                            type="text"
                                            id="teamName"
                                            {...register("teamName")}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-500"
                                            placeholder="Shadowline Racing"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email")}
                                            className={`w-full bg-white/5 border text-white px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder:text-gray-500 ${
                                                errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-cyan"
                                            }`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <span role="alert" className="block text-xs text-red-500 mt-1">{errors.email.message}</span>
                                        )}
                                    </div>

                                    {/* Phone Component */}
                                    <PhoneInput
                                        name="phone"
                                        control={control}
                                        label="Phone Number"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            "Confirm Booking"
                                        )}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-brand font-bold uppercase text-white mb-2">Request Received</h3>
                                {selectedVariant && (
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-brand-cyan/40 rounded-full mb-4">
                                        <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase font-bold">{selectedVariant.label}</span>
                                        <span className="text-xs text-gray-400">·</span>
                                        <span className="text-xs font-mono text-white">{selectedVariant.price}</span>
                                    </div>
                                )}
                                <p className="text-center text-gray-400 font-sans text-sm max-w-sm mx-auto leading-relaxed">
                                    Thank you for your interest{selectedVariant ? ` in the ${selectedVariant.label}` : ""}. Our team will contact you shortly to confirm your booking and schedule your consultation.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="mt-8 bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors uppercase tracking-widest text-sm font-medium cursor-pointer"
                                >
                                    Close
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
