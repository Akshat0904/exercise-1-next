interface IProps {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  require?: boolean;
}

const Input = ({ type, id, placeholder, require, label }: IProps) => {
  return (
    <div className="mb-4 font-dmSans text-at-gray-500">
      {label && (
        <label htmlFor={id} className="ml-1 font-medium text-sm">
          {label}
          {require && <span className="text-at-red-500">*</span>}
        </label>
      )}
      <div className="border rounded-lg relative focus-within:border-at-primary border-at-light-700">
        {(require && (
          <input
            type={type}
            className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
            id={id}
            placeholder={placeholder}
            name={id}
            required
          />
        )) || (
          <input
            type={type}
            className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
            id={id}
            placeholder={placeholder}
            name={id}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
