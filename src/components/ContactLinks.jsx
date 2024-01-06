import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function ContactLinks({ className = "" }) {
  return (
    <div className={className}>
      <a
        className="hover:text-[var(--color-brand-500)]"
        href="https://www.linkedin.com/in/ahmed-tharwat-at/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="hover:text-[var(--color-brand-500)]"
        href="https://github.com/AhmedTharwat-AT/AhmedTharwat-AT"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <span className="flex items-center gap-2 text-base hover:text-[var(--color-brand-500)]">
        <FaPhone /> <span className="text-sm">+201092977348</span>
      </span>
    </div>
  );
}

export default ContactLinks;
