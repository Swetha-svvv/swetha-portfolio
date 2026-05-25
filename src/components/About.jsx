const About = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen
        flex items-center
        justify-center
        px-6 md:px-16
        py-24
        bg-black
      "
    >
      <div
  className="
    max-w-6xl
    mx-auto
    bg-[#081121]
    border border-cyan-400/20
    rounded-3xl
    p-10 md:p-14
    shadow-[0_0_30px_rgba(34,211,238,0.08)]
  "
>
  <h2
    className="
      text-4xl md:text-5xl
      font-bold
      text-cyan-400
      text-center
      mb-12
    "
  >
    About Me
  </h2>

  <div className="space-y-2 text-gray-300 text-lg leading-9">

    <p>
      I am <span className="text-cyan-300 font-semibold">
      Siripurapu Veera Venkata Vishnu Swetha</span>, a passionate
      Computer Science student interested in software development,
      cloud computing, and AI-powered applications.
    </p>

    <p>
      I have hands-on experience with AWS services including
      EC2, S3, Lambda, IAM, VPC, Rekognition, SNS, and CloudWatch,
      along with DevOps tools like Git, Docker, Kubernetes, and Jenkins.
    </p>

    <p>
      I worked on real-time projects such as ICU Face Recognition
      Access System and AI Helmet Detection System, exploring
      cloud services and AI-based applications.
    </p>

    <p>
      I enjoy building scalable applications, learning modern
      technologies, and continuously improving my development
      and problem-solving skills.
    </p>

  </div>
</div>
    </section>
  );
};

export default About;