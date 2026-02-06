"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white p-4">
            <h2 className="mb-4 text-2xl font-bold font-brand tracking-widest text-[#2A909B]">Something went wrong!</h2>
            <p className="mb-8 text-gray-400 text-center max-w-md">
                An unexpected error occurred. Our team has been notified.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className={cn(
                    "px-6 py-3 rounded bg-white text-black font-bold uppercase tracking-wider",
                    "hover:bg-gray-200 transition-colors"
                )}
            >
                Try again
            </button>
        </div>
    );
}
