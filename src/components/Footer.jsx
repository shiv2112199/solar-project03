import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Quote", href: "#quote" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

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


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Address</h4>
            <p className="mb-2 flex gap-1 items-center">< FaLocationDot/> 123 Street, New York, USA</p>
            <p className="mb-2 flex gap-1 items-center"><FaPhone/> +012 345 67890</p>
            <p className="mb-2 flex gap-1 items-center"><MdEmail/> info@example.com</p>

            <div className="flex gap-3 py-3">
              <p
                className="flex items-center justify-center text-white/90 border border-white text-xl 
                            w-10 h-10 rounded-full hover:text-green-400 hover:bg-white "
              >
                <FaFacebookF />
              </p>
              <p
                className="flex items-center justify-center text-white/90 border border-white text-xl 
                             w-10 h-10 rounded-full hover:text-green-400 hover:bg-white">
                < FaLinkedinIn />
              </p>
              <p
                className="flex items-center justify-center text-white/90 border border-white text-xl 
                              w-10 h-10 rounded-full hover:text-green-400 hover:bg-white">
                < FaInstagram />
              </p>

              <p
                className="flex items-center justify-center text-white/90 border border-white text-xl  
                                             w-10 h-10 rounded-full hover:text-green-400 hover:bg-white">
                < IoLogoWhatsapp />
              </p>

            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className=" flex gap-1 items-center hover:text-white "
            >
             <IoMdArrowDropright/>  {item.label}
            </a>
          ))}
          </div>


        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between">
          <p>© Your Site Name, All Right Reserved.</p>
          <p>
            Designed By <a className="text-white hover:text-primary" href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
