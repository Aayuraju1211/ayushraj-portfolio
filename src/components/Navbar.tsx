import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const navItems = [
  { label: "About", href: "/#hero" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <button
          onClick={() => handleNavClick("/#")}
          className="font-heading text-xl font-bold tracking-tight text-foreground hover:text-foreground/80 transition-colors"
        >
          Ayush's Portfolio
        </button>
        <div className="flex items-center gap-8">
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
            className="font-sub uppercase text-[12px] tracking-[0.1em] px-5 py-2 border-2 border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-[8px]"
          >
            Connect
          </button>
        </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
