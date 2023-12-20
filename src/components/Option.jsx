function Option({ children, onClick, isActive }) {
  return (
    <h2
      onClick={onClick}
      className={`cursor-pointer text-sm tracking-wider text-gray-400 transition-all hover:text-black ${
        isActive && "!text-black "
      }`}
    >
      {children}
    </h2>
  );
}

export default Option;
