const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "Java", "Python", "SQL"],
    },

    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "Cloud & AWS",
      skills: [
        "EC2",
        "S3",
        "IAM",
        "VPC",
        "RDS",
        "Lambda",
        "SNS",
        "SES",
        "CloudWatch",
      ],
    },

    {
      title: "DevOps",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD",
      ],
    },

    {
      title: "AI & ML",
      skills: [
        "OpenCV",
        "YOLOv8",
        "AWS Rekognition",
        "AWS Comprehend",
        "Textract",
      ],
    },

    {
      title: "Core Subjects",
      skills: [
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
        "DBMS",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-6 md:px-12
        py-16
        bg-gradient-to-b
        from-black
        via-[#03122b]
        to-black
      "
    >
      <h2
        className="
text-4xl md:text-5xl
font-semibold
text-cyan-400
text-center
mb-16
"
      >
        Skills & Technologies
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          max-w-6xl
          mx-auto
        "
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="
              bg-[#0b1120]/70
              border border-cyan-400/20
              rounded-2xl
              p-6
              hover:shadow-[0_0_20px_#22d3ee]
              transition-all
              duration-300
            "
          >
            <h3
              className="
                text-2xl font-semibold
                text-white
                mb-5
              "
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-4
                    py-2
                    text-sm
                    rounded-full
                    border
                    border-cyan-400/30
                    text-gray-300
                    bg-[#111827]
                    hover:bg-cyan-400
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;