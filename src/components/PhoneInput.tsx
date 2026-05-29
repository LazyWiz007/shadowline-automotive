"use client";

import React, { useState, useEffect, useRef } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { parsePhoneNumberFromString, AsYouType } from "libphonenumber-js";
import { Check, ChevronDown, Search } from "lucide-react";
import { ALL_COUNTRIES, CountryOption } from "@/lib/countries";

interface PhoneInputProps extends UseControllerProps<any> {
  control: any;
  label?: string;
}

export default function PhoneInput({ control, name, rules, defaultValue = "", label = "Phone Number" }: PhoneInputProps) {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    ALL_COUNTRIES.find((c) => c.iso2 === "IN") || ALL_COUNTRIES[0]
  );
  
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [displayValue, setDisplayValue] = useState("");
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionsRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Filter countries based on search query (name, code, or ISO code)
  const filteredCountries = ALL_COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.includes(searchQuery) ||
    c.iso2.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sync initial phone value from controller
  useEffect(() => {
    if (value) {
      const phoneNumber = parsePhoneNumberFromString(value);
      if (phoneNumber) {
        const matched = ALL_COUNTRIES.find((c) => c.code === `+${phoneNumber.countryCallingCode}`);
        if (matched) setSelectedCountry(matched);
        setDisplayValue(phoneNumber.formatNational());
      }
    }
  }, [value]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // Handle outside clicks to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountryChange = (country: CountryOption) => {
    setSelectedCountry(country);
    setIsOpen(false);
    
    const cleanNational = displayValue.replace(/\D/g, "");
    const fullNumber = cleanNational ? `${country.code}${cleanNational}` : "";
    onChange(fullNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;
    const digitsOnly = rawInput.replace(/\D/g, "");
    
    // Dynamic formatting using AsYouType formatter
    const formatter = new AsYouType(selectedCountry.iso2);
    setDisplayValue(formatter.input(digitsOnly));
    
    // Store in clean E.164 format inside the form controller
    const fullNumber = digitsOnly ? `${selectedCountry.code}${digitsOnly}` : "";
    onChange(fullNumber);
  };

  // Keyboard navigation logic
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % filteredCountries.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        setFocusedIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && filteredCountries[focusedIndex]) {
          handleCountryChange(filteredCountries[focusedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  useEffect(() => {
    if (focusedIndex >= 0 && optionsRefs.current[focusedIndex]) {
      optionsRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <div className="space-y-2 w-full font-sans" ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
          {label}
        </label>
      )}

      {/* Field Wrapper */}
      <div 
        className={`flex rounded-lg overflow-visible bg-white/5 border relative transition-colors ${
          error ? "border-red-500 focus-within:border-red-500" : "border-white/10 focus-within:border-brand-cyan"
        }`}
      >
        {/* Country Selector Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Select Country Code"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 md:px-4 py-3 border-r border-white/10 focus:outline-none transition-colors select-none text-sm md:text-base font-semibold cursor-pointer shrink-0"
        >
          <span className="text-base leading-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <span className="tracking-tight">{selectedCountry.code}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu (WAI-ARIA Role listbox) - Made full-width of container for ultimate responsiveness */}
        {isOpen && (
          <div
            className="absolute left-0 right-0 top-[110%] bg-[#0F0F0F] border border-white/15 rounded-xl shadow-2xl z-[150] py-2 flex flex-col backdrop-blur-md overflow-hidden max-h-72"
          >
            {/* Search Input Box */}
            <div className="px-3 pb-2 pt-1 border-b border-white/10 flex items-center gap-2 relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-6" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setFocusedIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search country name or code..."
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan/50"
              />
            </div>

            {/* Scrollable Country List */}
            <ul
              role="listbox"
              aria-label="Country Codes"
              className="overflow-y-auto divide-y divide-white/5 scrollbar-thin focus:outline-none flex-1 max-h-52"
            >
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => {
                  const isSelected = selectedCountry.iso2 === country.iso2;
                  return (
                    <li role="option" aria-selected={isSelected} key={country.iso2}>
                      <button
                        ref={(el) => { optionsRefs.current[index] = el; }}
                        type="button"
                        onClick={() => handleCountryChange(country)}
                        onKeyDown={handleKeyDown}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left text-xs md:text-sm transition-all focus:outline-none hover:bg-white/5 cursor-pointer ${
                          isSelected ? "text-brand-cyan font-bold bg-brand-cyan/5" : "text-gray-300"
                        } ${focusedIndex === index ? "bg-white/5" : ""}`}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <span className="text-lg leading-none shrink-0" aria-hidden="true">
                            {country.flag}
                          </span>
                          <span className="text-gray-500 text-xs w-6 shrink-0">{country.iso2}</span>
                          <span className="font-semibold shrink-0">{country.code}</span>
                          <span className="text-gray-400 text-xs truncate max-w-[120px] md:max-w-[200px]">
                            {country.name}
                          </span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-brand-teal shrink-0" />}
                      </button>
                    </li>
                  );
                })
              ) : (
                <div className="py-8 text-center text-xs text-gray-500 font-sans">
                  No matching countries found
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Formatted Number Input */}
        <input
          type="tel"
          ref={ref}
          value={displayValue}
          onChange={handlePhoneChange}
          placeholder="12345 67890"
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className="flex-1 bg-transparent text-white px-3 md:px-4 py-3 focus:outline-none text-sm md:text-base font-medium placeholder:text-gray-600 border-none outline-none w-full"
        />
      </div>

      {error && (
        <span 
          id={`${name}-error`}
          role="alert"
          className="block text-xs font-medium text-red-500 tracking-wide mt-1"
        >
          {error.message}
        </span>
      )}
    </div>
  );
}
