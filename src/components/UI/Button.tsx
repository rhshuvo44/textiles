// import Link from "next/link";
// import { IconType } from "react-icons";

// interface ButtonProps {
//   href: string;
//   text: string;
//   icon?: IconType;
//   variant?: "solid" | "outline" | "gradient";
//   color?: "primary" | "info";
//   ariaLabel?: string;
// }

// const Button = ({
//   href,
//   text,
//   icon: Icon,
//   variant = "solid",
//   color = "primary",
//   ariaLabel,
// }: ButtonProps) => {
//   const baseClass =
//     "relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden group cursor-pointer capitalize";

//   const variantClass =
//     variant === "solid"
//       ? "bg-primary text-white shadow-md hover:shadow-xl hover:-translate-y-1"
//       : variant === "outline"
//       ? "border border-primary text-white hover:bg-primary hover:text-white"
//       : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl";

//   return (
//     <Link
//       href={href}
//       aria-label={ariaLabel}
//       className={`${baseClass} ${variantClass}`}
//     >
//       {text}
//       {Icon && (
//         <Icon className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
//       )}
//       {/* Hover Shine Effect */}
//       <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
//     </Link>
//   );
// };

// export default Button;
import Link from "next/link";
import { forwardRef } from "react";
import { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// The props for the button, making href and onClick optional
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  icon?: IconType;
  variant?: "solid" | "outline" | "gradient";
  color?: "primary" | "info";
  ariaLabel?: string;
  isSubmitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      onClick,
      text,
      icon: Icon,
      variant = "solid",
      color = "primary",
      ariaLabel,
      isSubmitting = false,
    },
    ref
  ) => {
    const baseClass =
      "relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden group capitalize";

    // Conditionally set the class based on color and variant
    const variantClass = {
      primary: {
        solid:
          "bg-primary text-white shadow-md hover:shadow-xl hover:-translate-y-1",
        outline:
          "border border-primary text-white hover:bg-primary hover:text-white",
        gradient:
          "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl",
      },
      info: {
        solid:
          "bg-info text-white shadow-md hover:shadow-xl hover:-translate-y-1",
        outline: "border border-info text-white hover:bg-info hover:text-white",
        gradient:
          "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl",
      },
    };

    const buttonContent = isSubmitting ? (
      <>
        <AiOutlineLoading3Quarters className="animate-spin" />
        Sending...
      </>
    ) : (
      <>
        {text}
        {Icon && (
          <Icon className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );

    const buttonClass = `${baseClass} ${variantClass[color][variant]}`;

    if (href) {
      return (
        <Link
          href={href}
          aria-label={ariaLabel}
          className={buttonClass}
          onClick={onClick}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        type="submit"
        aria-label={ariaLabel}
        className={`${buttonClass} btn btn-primary w-full text-white`}
        onClick={onClick}
        disabled={isSubmitting}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
