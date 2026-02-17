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

        // Simulate server submission
        // In a real app, you'd send this data to your API route
        setTimeout(() => {
            console.log("Form Submitted:", { ...formData, turnstileToken });
            setIsSubmitting(false);
            setStep("success");
        }, 1500);
    };

    const handleClose = () => {
        closeModal();
        // Reset state after close animation finishes (approx)
        setTimeout(() => {
            setStep("form");
            setFormData({ name: "", email: "", phone: "", countryCode: "+91" });
            setTurnstileToken(null);
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
                        className="fixed inset-0 m-auto z-[101] w-full max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {step === "form" ? (
                            <div className="space-y-6">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white font-brand uppercase tracking-tighter">
                                        Secure Your Slot
                                    </h2>
                                    <p className="text-white/60 text-sm">
                                        Enter your details below to start the booking process.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-widest text-white/60 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-widest text-white/60 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-widest text-white/60 ml-1">
                                            Phone Number
                                        </label>
                                        <div className="flex gap-2">
                                            <select
                                                value={formData.countryCode}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, countryCode: e.target.value })
                                                }
                                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none min-w-[80px]"
                                            >
                                                {countryCodes.map((c) => (
                                                    <option key={c.code} value={c.code} className="bg-[#111] text-white">
                                                        {c.code} ({c.country})
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="flex-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                                placeholder="1234567890"
                                            />
                                        </div>
                                    </div>

                                    {/* Turnstile */}
                                    <div className="pt-2 flex justify-center">
                                        <Turnstile
                                            sitekey="0x4AAAAAAA9_E1r8v7f_K8lP" // Replace with your actual site key
                                            onVerify={(token) => setTurnstileToken(token)}
                                            theme="dark"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !turnstileToken}
                                        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                    >
                                        {isSubmitting ? "Processing..." : "Submit Request"}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <Check className="w-10 h-10 text-green-500" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white font-brand uppercase">
                                        Request Received
                                    </h3>
                                    <p className="text-white/60 max-w-xs mx-auto">
                                        Thank you for your interest. Our team will contact you shortly to finalize your booking.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors uppercase tracking-widest text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
