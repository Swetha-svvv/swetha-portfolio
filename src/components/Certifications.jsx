function Certifications() {
  const certifications = [
    "☁️ AWS Certified Developer Associate",
    "🔴 Red Hat Certified System Administrator (RHCSA)",
    "☕ Oracle Java Foundations Associate",
    "🗄️ Oracle Database Foundations Associate",
    "🌐 IT Specialist - HTML & CSS",
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl
            font-bold
            text-cyan-400
            text-center
            mb-20
          "
        >
          Certifications
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                bg-[#081121]
                border border-cyan-400/20
                rounded-2xl
                p-6
                text-white
                font-medium
                text-lg
                min-h-[120px]
                flex items-center
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                transition-all
                duration-300
              "
            >
              {cert}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;