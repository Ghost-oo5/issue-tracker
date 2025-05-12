"use client";
import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "GitHub", href: "https://github.com/Ghost-oo5" },
    {
      label: `Creator's Portfolio`,
      href: "https://abdul-basit-portfolio-website.vercel.app/",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulbasit005/" },
    { label: "Email", href: "mailto:rajaabdulbasit005@gmail.com" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Ghost Issue Tracker. All rights reserved.
        </div>
        <nav>
          <ul className="flex flex-wrap items-center space-x-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm hover:underline text-gray-600 dark:text-gray-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
