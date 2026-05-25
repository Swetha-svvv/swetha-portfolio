const Education = () => {
  return (
    <section
      id="education"
      className="
        px-6 md:px-16
        py-20
        bg-black
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="
            text-4xl md:text-5xl
            font-bold
            text-cyan-400
            text-center
            mb-12
          "
        >
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* BTECH */}
          <div
            className="
              bg-[#081121]
              border border-cyan-400/20
              rounded-2xl
              p-6
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start mb-4">

              <div>
                <h3 className="text-2xl font-bold text-white">
                  B.Tech in Computer Science
                </h3>

                <p className="text-gray-400 mt-1 text-base">
                  Aditya College of Engineering and Technology
                </p>
              </div>

              <span className="text-cyan-400 font-semibold text-base">
                2023 – 2027
              </span>

            </div>

            <p className="text-gray-300 text-lg">
              CGPA:
              <span className="text-cyan-300 font-semibold"> 9.00/10</span>
            </p>
          </div>

          {/* INTER */}
          <div
            className="
              bg-[#081121]
              border border-cyan-400/20
              rounded-2xl
              p-6
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start mb-4">

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Intermediate (MPC)
                </h3>

                <p className="text-gray-400 mt-1 text-base">
                  Sri Chaitanya Junior College
                </p>
              </div>

              <span className="text-cyan-400 font-semibold text-base">
                2021 – 2023
              </span>

            </div>

            <p className="text-gray-300 text-lg">
              Percentage:
              <span className="text-cyan-300 font-semibold"> 97.1%</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;