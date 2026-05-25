import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        w-full
        fixed
        top-0
        left-0
        z-50
        bg-black/80
        backdrop-blur-md
        border-b border-cyan-400/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6 md:px-10
          py-5
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <a
          href="#home"
          className="
            text-3xl
            font-bold
            text-cyan-400
            hover:text-cyan-300
            transition
          "
        >
          Swetha
        </a>

        {/* DESKTOP MENU */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-10
            text-lg
            font-medium
            text-white
          "
        >
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="
            md:hidden
            text-3xl
            text-cyan-400
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-[#0f172a]
            border-t border-cyan-400/10
            px-6
            py-6
          "
        >
          <ul
            className="
              flex
              flex-col
              gap-5
              text-lg
              text-white
            "
          >
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;