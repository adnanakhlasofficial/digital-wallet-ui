import { Link } from "react-router-dom";
import { Github, Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="mx-auto  flex flex-col gap-4 md:gap-6">
      {/* top section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0 max-w-7xl px-6 md:px-12">
        <Logo />

        <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
          <Link
            to="/about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      <Separator />

      {/* bottom section */}
      <div className="flex flex-col sm:flex-row justify-between items-center   space-y-4 sm:space-y-0 px-6 md:px-12">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digital Wallet. All rights reserved.
        </p>

        <div className="flex space-x-5 text-muted-foreground">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
