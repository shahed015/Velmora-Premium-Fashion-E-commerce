import Link from "next/link";

const baseStyles =
  "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45";

export default function IconButton({
  "aria-label": ariaLabel,
  className = "",
  disabled = false,
  href,
  icon,
  onClick,
  ref,
  type = "button",
  ...props
}) {
  const classes = `${baseStyles} ${className}`;
  const content = <span aria-hidden="true" className="size-5">{icon}</span>;

  if (href && disabled) {
    return (
      <span {...props} aria-disabled="true" className={classes}><span className="sr-only">{ariaLabel}</span>
        {content}
      </span>
    );
  }

  if (href) {
    return (
      <Link
        {...props}
        aria-label={ariaLabel}
        className={classes}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
    >
      {content}
    </button>
  );
}