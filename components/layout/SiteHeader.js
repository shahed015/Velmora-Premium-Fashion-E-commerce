import Link from "next/link";
import Container from "../ui/Container";
import IconButton from "../ui/IconButton";
import MobileNavigation from "./MobileNavigation";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?sort=newest", label: "New arrivals" },
  { href: "/shop?category=clothing", label: "Clothing" },
];

function AccountIcon() {
  return (
    <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20c.45-3.3 2.8-5.25 6.5-5.25s6.05 1.95 6.5 5.25" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 8h14l1 12H4L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line bg-canvas">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-20">
        <div className="flex items-center gap-7">
          <MobileNavigation />
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="text-xs tracking-[0.06em] transition-colors hover:text-accent-strong"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link
          aria-label="Velmora home"
          className="font-serif text-lg font-medium tracking-[0.2em] sm:text-xl"
          href="/"
        >
          VELMORA
        </Link>

        <div className="flex items-center justify-self-end gap-1 sm:gap-2">
          <IconButton aria-label="Account" className="hidden sm:inline-flex" href="/account" icon={<AccountIcon />} />
          <IconButton aria-label="Shopping bag" href="/cart" icon={<BagIcon />} />
        </div>
      </Container>
    </header>
  );
}