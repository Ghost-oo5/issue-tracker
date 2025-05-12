"use client";
import {
  DashboardIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";

export default function Footer() {
  const quickLinks = [
    { label: "Dashboard", href: "/", icon: DashboardIcon },
    { label: "Issues", href: "/issues", icon: MdReportProblem },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Ghost-oo5",
      icon: GitHubLogoIcon,
    },
    {
      label: `Creator's Portfolio`,
      href: "https://abdul-basit-portfolio-website.vercel.app/",
      icon: GlobeIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdulbasit005/",
      icon: LinkedInLogoIcon,
    },
    {
      label: "Email",
      href: "mailto:rajaabdulbasit005@gmail.com",
      icon: BiMailSend,
    },
  ];

  return (
    <footer className="bg-gray-100 px-5 flex flex-col lg:gap-5 items-center dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-12 pb-4">
      <div className="container mx-auto border-b pb-5 border-gray-700 flex items-start  justify-around md:gap-36">
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Quick Links
          </h4>
          <ul className="flex flex-col space-y-2">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <li key={href} className="flex items-center space-x-2">
                {Icon && (
                  <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 shrink-0" />
                )}
                <Link
                  href={href}
                  className="text-sm hover:underline text-gray-600 dark:text-gray-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col" aria-labelledby="social-links-title">
          <h4
            id="social-links-title"
            className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
          >
            Social Links
          </h4>
          <ul className="flex flex-col space-y-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={href} className="flex items-center space-x-2">
                {Icon && (
                  <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 shrink-0" />
                )}
                <Link
                  href={href}
                  className="text-sm hover:underline text-gray-600 dark:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400 mt-4 lg:mt-0">
        © {new Date().getFullYear()} Ghost Issue Tracker — professionally
        crafted & passionately maintained by Abdul Basit
      </div>
    </footer>
  );
}
