interface CustomTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 1,
}) => {
  return (
    <div className="space-y-2 mb-5">
      <label className="block text-gray-700 text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="resize-none w-full px-4 py-3 bg-gray-100 rounded-md text-gray-500 text-base placeholder-gray-400 placeholder:font-medium placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200"
        />
      </div>
    </div>
  );
};

export default CustomTextInput;
