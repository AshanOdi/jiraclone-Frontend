import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} forge.</p>
        <nav className="flex gap-6">
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
