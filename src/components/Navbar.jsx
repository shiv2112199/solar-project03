import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Quote", href: "#quote" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isSticky }) {
  const [menuOpen, setMenuOpen] = useState(false);      // intent (open/close)
  const [renderMenu, setRenderMenu] = useState(false);  // actually show in DOM

  useEffect(() => {
    if (menuOpen) setRenderMenu(true);
    else {
      const t = setTimeout(() => setRenderMenu(false), 200);
      return () => clearTimeout(t);
    }
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // sticky navbar height offset (75px)
      const y = el.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    // close mobile menu
    setMenuOpen(false);

    // optional: update url hash
    window.history.pushState(null, "", href);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all ${isSticky ? "shadow-sm" : ""
        }`}
    >
      <div className="mx-auto flex h-[75px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 border-r pr-6"
        >
          <h2 className="text-3xl font-extrabold text-yellow-500">Solartec</h2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-medium uppercase tracking-wide text-dark hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden rounded-md border px-3 py-2 text-lg transition active:scale-95"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
        >
          {!menuOpen ? <CiMenuKebab/> : <RxCross2/>  }
        </button>
      </div>

      {/* Mobile Menu */}
      {renderMenu && (
        <div
          className={`lg:hidden fixed inset-x-0 top-[75px] z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl border-t bg-white shadow-lg max-h-[calc(100vh-75px)] overflow-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(e, item)}
                  className="py-1 text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-yellow-500 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );

}
