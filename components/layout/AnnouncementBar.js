import Link from "next/link";

export default function AnnouncementBar({
  href = "/shop",
  message = "A more considered way to dress",
  linkLabel = "Explore the collection",
}) {
  return (
    <div className="bg-ink px-4 py-2 text-center text-[0.65rem] tracking-[0.08em] text-canvas sm:text-xs">
      <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span>{message}</span>
        <Link className="underline underline-offset-4 transition-opacity hover:opacity-75" href={href}>
          {linkLabel}
        </Link>
      </p>
    </div>
  );
}