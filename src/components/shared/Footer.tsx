import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { DarkLogo, LightLogo } from "../shared/Logo";
import { useAppSelector } from "@/redux/hook";
import { cn } from "@/lib/utils";

export default function Footer() {
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <div className="container mx-auto max-w-7xl px-6 md:px-12 flex flex-col gap-10">
      {/* Top Section: Logo + Links */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(theme === "dark" ? "block" : "hidden")}>
            <DarkLogo className="w-60" />
          </span>
          <span className={cn(theme === "light" ? "block" : "hidden")}>
            <LightLogo className="w-60" />
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-muted-foreground">
          <Link
            to="/about"
            className="hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-primary transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="hover:text-primary transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="hover:text-primary transition-colors font-medium"
          >
            FAQ
          </Link>
        </nav>
      </div>

      <Separator />

      {/* Bottom Section: Copyright + Socials */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Digital Wallet. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
