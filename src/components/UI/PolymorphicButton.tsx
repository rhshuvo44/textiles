import Link from "next/link";
import { forwardRef } from "react";
import { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// The props for the button, making href and onClick optional
interface PolymorphicButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  icon?: IconType;
  variant?: "solid" | "outline" | "gradient";
  color?: "primary" | "info";
  ariaLabel?: string;
  isSubmitting?: boolean;
  className?: string; // <-- New optional className prop
}

const PolymorphicButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PolymorphicButtonProps
>(
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
      className = "", // default to empty string
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

    const buttonClass = `${baseClass} ${variantClass[color][variant]} ${className}`; // <-- merge className

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
        className={buttonClass}
        onClick={onClick}
        disabled={isSubmitting}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {buttonContent}
      </button>
    );
  }
);

PolymorphicButton.displayName = "PolymorphicButton";

export default PolymorphicButton;
