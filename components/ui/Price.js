export default function Price({
  amount,
  className = "",
  compareAt,
  currency = "USD",
  locale = "en-US",
}) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });
  const hasDiscount = Number.isFinite(compareAt) && compareAt > amount;
  const discount = hasDiscount
    ? Math.round(((compareAt - amount) / compareAt) * 100)
    : null;

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}>
      <span className="font-medium text-ink">{formatter.format(amount)}</span>
      {hasDiscount && (
        <>
          <span className="text-sm text-ink-muted line-through">
            {formatter.format(compareAt)}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-accent-strong">
            {discount}% off
          </span>
        </>
      )}
    </span>
  );
}