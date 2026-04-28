"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Turnstile from "react-turnstile";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
    const { isModalOpen, closeModal } = useBooking();
    const [step, setStep] = useState<"form" | "success">("form");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        teamName: "",
    });
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const countryCodes = [
        { code: "+1", country: "USA/Canada" },
        { code: "+44", country: "UK" },
        { code: "+91", country: "India" },
        { code: "+61", country: "Australia" },
        { code: "+81", country: "Japan" },
        { code: "+49", country: "Germany" },
        { code: "+33", country: "France" },
        { code: "+86", country: "China" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!turnstileToken) {
            alert("Please complete the security check.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStep("success");
            } else {
                alert(data.error || "Something went wrong. Please try again.");
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
        // Reset state after close animation finishes (approx)
        setTimeout(() => {
            setStep("form");
            setFormData({ name: "", email: "", phone: "", countryCode: "+91", teamName: "" });
            setTurnstileToken(null);
        }, 300);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                        className="fixed inset-0 m-auto z-[101] w-full max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
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
                                    <p className="text-justify text-gray-400 font-sans text-sm mb-8">
                                        Enter your details below to schedule a private consultation or test ride.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-500"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Team Name */}
                                    <div className="space-y-1">
                                        <label htmlFor="teamName" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Team Name
                                        </label>
                                        <input
                                            type="text"
                                            id="teamName"
                                            name="teamName"
                                            value={formData.teamName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-500"
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1">
                                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="flex">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleInputChange}
                                                className="bg-white/5 border border-white/10 text-white px-3 py-3 w-24 focus:outline-none focus:border-brand-cyan transition-colors border-r-0"
                                            >
                                                {countryCodes.map((c) => (
                                                    <option key={c.code} value={c.code} className="bg-black text-white">
                                                        {c.code}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                                                placeholder="123 456 7890"
                                            />
                                        </div>
                                    </div>

                                    {/* Turnstile */}
                                    <div className="pt-2 flex justify-center">
                                        <Turnstile
                                            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                                            onVerify={(token) => setTurnstileToken(token)}
                                            theme="dark" // Changed to dark theme for dark background
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !turnstileToken}
                                        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                                <h3 className="text-2xl font-brand font-bold uppercase text-white mb-4">Request Received</h3>
                                <p className="text-justify text-gray-400 font-sans">
                                    Thank you for your interest. Our team will contact you shortly to schedule your consultation.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="mt-8 bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors uppercase tracking-widest text-sm font-medium"
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
