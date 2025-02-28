import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FooterProps {
  navigationLinks?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks?: {
    platform: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

const Footer = ({
  navigationLinks = [
    {
      title: "Products",
      links: [
        { label: "Smart Toilets", href: "/products/smart" },
        { label: "Eco-Friendly", href: "/products/eco-friendly" },
        { label: "Modern Designs", href: "/products/modern" },
        { label: "Accessories", href: "/products/accessories" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Buying Guides", href: "/guides/buying" },
        { label: "Maintenance Tips", href: "/guides/maintenance" },
        { label: "DIY Repairs", href: "/guides/diy" },
        { label: "Installation Help", href: "/guides/installation" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Find a Plumber", href: "/services/plumbers" },
        { label: "Contractors", href: "/services/contractors" },
        { label: "Emergency Services", href: "/services/emergency" },
        { label: "Maintenance Plans", href: "/services/maintenance" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  contactInfo = {
    email: "info@toilets.org",
    phone: "(555) 123-4567",
    address: "123 Bathroom Ave, Flushington, FL 12345",
  },
  socialLinks = [
    {
      platform: "Facebook",
      href: "https://facebook.com",
      icon: <Facebook size={20} />,
    },
    {
      platform: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter size={20} />,
    },
    {
      platform: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram size={20} />,
    },
    {
      platform: "YouTube",
      href: "https://youtube.com",
      icon: <Youtube size={20} />,
    },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Newsletter Signup */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Toilets.org</h2>
              <p className="mt-2 text-slate-300 text-sm">
                The Ultimate Bathroom & Toilet Resource
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-bold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-slate-400" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-slate-300 hover:text-white"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-slate-400" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-slate-300 hover:text-white"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-400" />
              <span className="text-slate-300">{contactInfo.address}</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={`Follow us on ${social.platform}`}
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Toilets.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
