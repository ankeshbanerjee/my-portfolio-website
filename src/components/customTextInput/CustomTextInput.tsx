import React, { useState } from "react";

interface CustomTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
  validate?: (value: string) => string | undefined;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 1,
  validate,
}) => {
  const [error, setError] = useState<string | undefined>();
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    } else if (required && !value.trim()) {
      setError("This field is required");
    } else {
      setError(undefined);
    }
  };

  return (
    <div className="space-y-2 mb-5">
      <label className="block text-gray-700 text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`resize-none w-full px-4 py-3 bg-gray-100 rounded-md text-gray-500 text-base 
            placeholder-gray-400 placeholder:font-medium placeholder:text-sm focus:outline-none 
            focus:ring-2 transition duration-200 ${
              touched && error
                ? "border-red-500 focus:ring-red-200"
                : "focus:ring-blue-200"
            }`}
          aria-invalid={touched && error ? "true" : "false"}
        />
        {touched && error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
};

export default CustomTextInput;
