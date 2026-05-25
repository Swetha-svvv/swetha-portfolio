const Footer = () => {
  return (
    <footer
      className="
        border-t border-cyan-400/10
        bg-[#050816]
        px-6 md:px-20
        py-7
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Swetha
          </h2>

          <p className="text-gray-400 text-sm">
            Aspiring Software Engineer | Cloud & AI Enthusiast
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
            "
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
            "
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              border border-cyan-400
              px-5 py-2
              rounded-xl
              text-white
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            Resume
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          border-t border-cyan-400/10
          mt-8 pt-5
          text-center
          text-gray-500
          text-sm
        "
      >
        © 2026 Swetha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;