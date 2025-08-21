"use client";
import { navLinks, socialLinks } from "@/db/data";
import Link from "next/link";
import ContactList from "./ContactList";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-neutral text-neutral-content p-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks?.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="link link-hover transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ContactList variant="simple" />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-primary transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="bg-neutral text-neutral-content border-t border-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-4 text-center">
        <p>
          Copyright © {year} — Designed By{" "}
          <span className="font-semibold">Ripon</span>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
