function Button({ children, variant = "primary", onClick }) {
  const variants = {
    primary:
      "bg-[var(--color-brand-500)] border-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white",
    secondary: " border-gray-700 hover:bg-gray-800 hover:text-white",
    danger: "bg-red-600 border-red-600 hover:bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
      ${variants[variant]} whitespace-nowrap rounded border px-3 py-2 text-sm font-medium capitalize tracking-wider  sm:px-4  sm:py-2 sm:text-base `}
    >
      {children}
    </button>
  );
}

export default Button;
