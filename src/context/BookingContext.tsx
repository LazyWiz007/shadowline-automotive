"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SelectedVariant {
    id: string;
    label: string;
    price: string;
    subtext: string;
    image: string;
}

interface BookingContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    selectedVariant: SelectedVariant | null;
    setVariant: (variant: SelectedVariant) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<SelectedVariant | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const setVariant = (variant: SelectedVariant) => setSelectedVariant(variant);

    return (
        <BookingContext.Provider value={{ isModalOpen, openModal, closeModal, selectedVariant, setVariant }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
