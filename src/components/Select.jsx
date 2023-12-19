import { createContext, useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectContext = createContext();

function Select({ children }) {
  const [open, setOpen] = useState("");
  return (
    <SelectContext.Provider value={{ open, setOpen }}>
      {children}
    </SelectContext.Provider>
  );
}

function Toggle({ title }) {
  const { open, setOpen } = useContext(SelectContext);
  function handleClick() {
    setOpen((t) => (t == title ? "" : title));
  }
  return (
    <div
      className="group my-3 flex cursor-pointer items-center justify-between"
      onClick={handleClick}
    >
      <h1 className="text-base font-medium uppercase">{title}</h1>

      <IoIosArrowDown
        className={`text-2xl opacity-80 transition-all group-hover:animate-pulse ${
          open === title ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
}

function Options({ title, options, onClick }) {
  const { open } = useContext(SelectContext);

  return (
    <div
      className={`origin-top space-y-1 overflow-y-scroll capitalize transition-all duration-300 ${
        open === title ? `max-h-48 ` : "max-h-0 "
      }`}
    >
      {options.map((op, i) => (
        <h2
          onClick={onClick}
          className="cursor-pointer text-sm tracking-wide text-gray-500 transition-all hover:text-black"
          key={i}
        >
          {op.replace("-", " ")}
        </h2>
      ))}
    </div>
  );
}

Select.Toggle = Toggle;
Select.Options = Options;

export default Select;
