function Projects() {

  const projectData = [
    {
      title: "ICU Face Recognition Access System",
      description:
        "A real-time ICU security system using AWS Rekognition and S3 for visitor authentication and unauthorized access detection.",
      tech: "React, AWS S3, Rekognition, Lambda, Flask",
      github: "https://github.com/Swetha-svvv/face-access-system.git",
    },

    {
      title: "AI Helmet Detection System",
      description:
        "An AI-powered helmet detection system using YOLOv8 and OpenCV with AWS cloud integration and alert notifications.",
      tech: "Python, YOLOv8, OpenCV, AWS S3, Streamlit",
      github: "https://github.com/Swetha-svvv/Vision-Guard-AI.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 text-lg leading-8 mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                className="
inline-block
bg-cyan-400
text-black
px-6 py-3
rounded-xl
text-lg font-semibold
hover:scale-105
transition-all
duration-300
"
              >
                GitHub
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;