import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  variant?: "solid" | "outline" | "gradient";
  color?: "primary" | "info";
  ariaLabel?: string;
}

const Button = ({
  href,
  text,
  icon: Icon,
  variant = "solid",
  color = "primary",
  ariaLabel,
}: ButtonProps) => {
  const baseClass =
    "relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden group cursor-pointer capitalize";

  const variantClass =
    variant === "solid"
      ? "bg-primary text-white shadow-md hover:shadow-xl hover:-translate-y-1"
      : variant === "outline"
      ? "border border-primary text-white hover:bg-primary hover:text-white"
      : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${baseClass} ${variantClass}`}
    >
      {text}
      {Icon && (
        <Icon className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {/* Hover Shine Effect */}
      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
    </Link>
  );
};

export default Button;
