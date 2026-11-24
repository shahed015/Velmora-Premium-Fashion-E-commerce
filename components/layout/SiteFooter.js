import Link from "next/link";
import Container from "../ui/Container";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/shop", label: "Shop all" },
      { href: "/shop?sort=newest", label: "New arrivals" },
      { href: "/wishlist", label: "Wishlist" },
    ],
  },
  {
    title: "Client care",
    links: [
      { href: "/account", label: "Your account" },
      { href: "/account/orders", label: "Order history" },
      { href: "mailto:hello@velmora.com", label: "Contact us" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 md:py-16">
        <div className="sm:col-span-2">
          <Link className="font-serif text-xl tracking-[0.18em]" href="/">
            VELMORA
          </Link>
          <p className="mt-3 max-w-sm text-sm text-ink-muted">
            Modern essentials, chosen with care and made to be worn for years.
          </p>
        </div>

        {footerGroups.map(({ links: groupLinks, title }) => (
          <nav aria-label={title} key={title}>
            <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em]">
              {title}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {groupLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link className="text-sm text-ink-muted transition-colors hover:text-ink" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <p className="border-t border-line pt-5 text-xs text-ink-muted sm:col-span-2 md:col-span-4">
          © {new Date().getFullYear()} Velmora. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}