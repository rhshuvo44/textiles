"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import FooterBottom from "./FooterBottom";
import { navLinks } from "@/db/data";

const Footer = () => {
  return (
    <>
      {/* <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Our factories</a>
          <a className="link link-hover">Mission & strategy</a>
          <a className="link link-hover">Charitable actions</a>
          <a className="link link-hover">Environment</a>
        </nav>
        <nav>
          <h6 className="footer-title">Production</h6>
          <a className="link link-hover">products</a>
          <a className="link link-hover">Quality</a>
          <a className="link link-hover">Sales geography</a>
          <a className="link link-hover">Our customers</a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact us</h6>
          <a className="link link-hover">Addresses of factories</a>
          <a className="link link-hover">Dealers</a>
          <a className="link link-hover">Trading houses</a>
          <a className="link link-hover">Brand shops</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <FooterBottom /> */}

      <footer className="  bg-neutral text-neutral-content p-10">
        <div className=" grid md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks?.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="link link-hover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:sarkartextilesapperal@gmail.com">
                sarkartextilesapperal@gmail.com
              </a>
            </p>
            <p>
              Phone:
              <a href="tel:+8801704172061"> +88 01704172061</a>,
              <a href="tel:+8801688679780"> +88 01688679780</a>
            </p>
            <p>WhatsApp: +88 01989624626</p>
            <p>Address: 13 No, New Haziganj, Narayanganj -1400, Bangladesh</p>
            <p>Working Hours: 8am - 7pm (Sat - Thu)</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com/sarkartextilesandapparel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-info"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-info"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-info"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-info"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
