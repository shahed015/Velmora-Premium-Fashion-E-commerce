import Link from "next/link";

const variants = {
  primary: "bg-ink text-canvas hover:bg-accent-strong",
  secondary: "bg-accent text-white hover:bg-accent-strong",
  outline: "border border-line bg-transparent text-ink hover:border-ink hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizes = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-12 px-6 text-sm",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.04em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45";

export default function Button({
  children,
  className = "",
  disabled = false,
  href,
  onClick,
  size = "md",
  tabIndex,
  type = "button",
  variant = "primary",
  ...props
}) {
  const classes = `${baseStyles} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;

  if (href && disabled) {
    return (
      <span {...props} aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <Link
        {...props}
        className={classes}
        href={href}
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  );
}