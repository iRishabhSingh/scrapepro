import React from "react";
import GradientText from "./GradientText";
import Link from "next/link";

interface LinkItem {
  title: string;
  href: string;
  target?: string;
}

const links: LinkItem[] = [
  { title: "Pricing", href: "/pricing" },
  { title: "Services", href: "/services" },
  { title: "FAQ", href: "/faq" },
  { title: "Blog", href: "/blog" },
];

const contactLinks: LinkItem[] = [
  {
    title: "info@scrapepro.com",
    href: "mailto:info@scrapepro.com",
    target: "_blank",
  },
  { title: "+91 0123 456 789", href: "tel:+910123456789", target: "_blank" },
  {
    title: "123 Web Scraping Lane, Mohali, India",
    href: "#",
    target: "_blank",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap justify-between p-8 py-12 sm:px-8">
      {/* App Name and About Section - 50% Width */}
      <div className="w-full pb-8 md:w-1/2">
        <p className="relative z-20 bg-clip-text py-8 pt-0 text-2xl font-bold text-black text-transparent dark:text-white sm:text-4xl">
          Scrape
          <GradientText text="Pro" />
        </p>
        <p className="opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100 sm:w-1/2">
          ScrapePro is a leading web scraping service provider, offering
          cutting-edge solutions for data extraction and analysis.
        </p>
      </div>

      {/* Links and Contact Sections - 50% Width Shared */}
      <div className="flex w-full justify-between md:w-1/2">
        <div className="mt-8 flex w-1/2 flex-col md:mt-0">
          <h2 className="mb-4 text-lg font-semibold sm:hidden">Links</h2>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target={link.target || "_self"}
                  className="text-sm text-[#fafafa99] transition-colors duration-200 ease-in-out hover:text-[#fafafacc] focus:text-[#fafafacc] active:text-[#fafafacc]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex w-1/2 flex-col md:mt-0">
          <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
          <ul className="space-y-4">
            {contactLinks.map((link, index) => (
              <li key={index}>
                {link.href === "#" ? (
                  <span className="text-sm text-[#fafafa99]">{link.title}</span>
                ) : (
                  <Link
                    href={link.href}
                    target={link.target || "_self"}
                    className="text-sm text-[#fafafa99] transition-colors duration-200 ease-in-out hover:text-[#fafafacc] focus:text-[#fafafacc] active:text-[#fafafacc]"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
