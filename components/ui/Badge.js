const variants = {
  default: "bg-ink/5 text-ink",
  sale: "bg-accent text-white",
  new: "bg-surface text-ink",
  "out-of-stock": "bg-ink text-white",
};

const labels = {
  default: "Details",
  sale: "Sale",
  new: "New",
  "out-of-stock": "Out of stock",
};

export default function Badge({
  children,
  className = "",
  variant = "default",
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] ${variants[variant] ?? variants.default} ${className}`}
    >
      {children ?? labels[variant] ?? labels.default}
    </span>
  );
}