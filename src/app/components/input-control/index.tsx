import React from "react";

interface InputControlProps {
  label: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  placeholder?: string;
  labelPosition?: "top" | "side"; // nova prop
}

export default function InputControl({
  label,
  value,
  setValue,
  type = "text",
  placeholder = "",
  labelPosition = "top",
}: InputControlProps) {
  const isSide = labelPosition === "side";

  return (
    <div
      className={`flex ${isSide ? "items-center space-x-4" : "flex-col mb-4"}`}
    >
      <label
        className={`text-sm font-medium text-gray-700 ${
          isSide ? "whitespace-nowrap" : "mb-1"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        // onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition flex-grow"
      />
    </div>
  );
}
