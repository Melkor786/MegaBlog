import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-1 pl-1 text-sm font-semibold text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`block w-full px-3 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:border-blue-500 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
