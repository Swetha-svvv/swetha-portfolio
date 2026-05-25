import profile from "../assets/Swetha.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        justify-center
        px-6 md:px-16
        pt-24
        bg-gradient-to-br
        from-[#020617]
        via-[#03122e]
        to-[#0f172a]
      "
    >
      <div
        className="
          max-w-7xl
          w-full
          grid md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div>
          <p
            className="
              text-cyan-300
              tracking-[6px]
              uppercase
              mb-4
              text-sm
            "
          >
            Siripurapu
          </p>

          <h1
            className="
              text-6xl md:text-8xl
              font-extrabold
              leading-tight
              bg-gradient-to-r
              from-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            SWETHA
          </h1>

          <h2
            className="
              text-cyan-300
              text-2xl
              md:text-3xl
              font-semibold
              mt-6
              mb-8
            "
          >
            Aspiring Software Engineer | Cloud & AI Enthusiast
          </h2>

          <p
            className="
              text-gray-300
              text-lg
              leading-9
              max-w-xl
              mb-10
            "
          >
            I build cloud-based applications, AI-powered systems,
            and modern web applications using AWS, Python,
            React, and DevOps technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="
                px-8 py-3
                rounded-xl
                text-lg font-semibold
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                hover:scale-105
                transition-all
                duration-300
              "
            >
              View Projects
            </a>

            <a
              href="/Swetha_Resume.pdf"
              download
              className="
                px-8 py-3
                rounded-xl
                text-lg font-semibold
                border border-cyan-400
                text-white
                hover:bg-cyan-400
                hover:text-black
                transition-all
                duration-300
              "
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div
            className="
              bg-[#111827]/40
              border border-cyan-400/20
              backdrop-blur-lg
              rounded-[40px]
              p-6
              shadow-[0_0_50px_rgba(34,211,238,0.2)]
            "
          >
            <img
              src={profile}
              alt="Swetha"
              className="
                w-[320px]
                h-[320px]
                md:w-[420px]
                md:h-[420px]
                rounded-full
                object-cover
                border-4 border-cyan-400/30
                animate-float
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;