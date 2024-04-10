import React from "react";

interface IProps {
  id: string;
  placeholder?: string;
  label?: string;
  optionValues: string[];
  require?: boolean;
}

const Select = ({
  id,
  optionValues,
  label,
  placeholder,
  require,
}: IProps): JSX.Element => {
  return (
    <div className="p-1 mb-4 font-dmSans text-at-gray-500">
      {label && (
        <label htmlFor={id} className="font-medium text-sm">
          {label}
          {require && <span className="text-at-red-500">*</span>}
        </label>
      )}
      <select
        name={id}
        id={id}
        className="p-2 border bg-white rounded-lg border-at-light-700 focus-within:border-at-primary w-full outline-none ring-0 focus:ring-0 focus:outline-none"
      >
        {placeholder && <option value={placeholder}>{placeholder}</option>}
        {optionValues.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
