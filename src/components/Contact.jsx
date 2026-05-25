function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20
        px-6
        bg-black
        text-white
      "
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2
          className="
            text-4xl md:text-5xl
            font-bold
            text-cyan-400
            mb-8
          "
        >
          Contact Me
        </h2>

        <p
          className="
            text-gray-300
            text-lg
            leading-8
            mb-12
          "
        >
          Feel free to connect with me for collaborations,
          internships, or software development opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:siripurapuswetha05@gmail.com"
            className="
              px-8 py-4
              rounded-xl
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-105
              hover:bg-cyan-300
              transition-all
              duration-300
            "
          >
            Email Me
          </a>

          <a
            href="https://github.com/Swetha-svvv"
            target="_blank"
            rel="noreferrer"
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              text-white
              font-semibold
              hover:bg-cyan-400
              hover:text-black
              transition-all
              duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/swetha-siripurapu-655000298/"
            target="_blank"
            rel="noreferrer"
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              text-white
              font-semibold
              hover:bg-cyan-400
              hover:text-black
              transition-all
              duration-300
            "
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;