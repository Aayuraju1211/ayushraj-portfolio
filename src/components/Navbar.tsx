import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[12px] bg-background/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-end h-16 gap-8">
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="nav-link text-foreground hover:text-foreground/80 pb-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#connect")}
            className="font-sub uppercase text-[12px] tracking-[0.1em] px-5 py-2 border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-md"
          >
            Connect
          </button>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
