import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-black",
    className = "",
    ...props
}) {
    return (
        <button className={` hover:bg-lime-500 bg-lime-300 px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}