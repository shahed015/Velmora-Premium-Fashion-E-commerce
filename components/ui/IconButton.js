import Link from "next/link";

const baseStyles =
  "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-45";

export default function IconButton({
  "aria-label": ariaLabel,
  className = "",
  disabled = false,
  href,
  icon,
  type = "button",
  ...props
}) {
  const classes = `${baseStyles} ${className}`;
  const content = <span aria-hidden="true" className="size-5">{icon}</span>;

  if (href) {
    return (
      <Link
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        className={classes}
        href={href}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
        tabIndex={disabled ? -1 : props.tabIndex}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      type={type}
      {...props}
    >
      {content}
    </button>
  );
}