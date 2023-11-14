export default function CustomInput({
  label,
  id,
  name,
  type,
  onBlur,
  onChange,
  refer,
  errorsMessage,
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type || "text"}
          onBlur={onBlur}
          onChange={onChange}
          ref={refer}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      {errorsMessage && <span className="text-red-500">{errorsMessage}</span>}
    </div>
  );
}
