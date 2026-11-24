"use client";

import { useState } from "react";
import Link from "next/link";
import IconButton from "../ui/IconButton";

const links = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop?sort=newest", label: "New arrivals" },
  { href: "/shop?category=clothing", label: "Clothing" },
  { href: "/wishlist", label: "Wishlist" },
];

function MenuIcon({ open }) {
  return open ? (
    <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <IconButton
        aria-controls="mobile-primary-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        icon={<MenuIcon open={isOpen} />}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-y border-line bg-canvas px-4 py-3 shadow-lg"
          id="mobile-primary-navigation"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {links.map(({ href, label }) => (
              <li className="border-b border-line last:border-b-0" key={href}>
                <Link
                  className="block py-4 text-sm tracking-[0.04em] transition-colors hover:text-accent-strong"
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}