"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/assets/images/shalom.webp";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);
  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="py-1 px-4 md:px-0 sticky top-0 z-50 bg-white dark:bg-slate-800 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={logo}
              height={100}
              alt="logo"
              className="rounded-full"
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#99c25c] transition-colors duration-200 ${
                pathname === link.href ? "text-blue-700 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed inset-y-0 left-0 w-[75%] max-w-xs bg-white dark:bg-slate-800 z-50 overflow-y-auto flex flex-col pt-8 px-6"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src={logo}
                    alt="company logo"
                    height={100}
                    width={100}
                  />
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-2xl text-primary dark:text-white"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 px-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-800 dark:text-gray-100"
                    } hover:text-[#99c25c]`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
