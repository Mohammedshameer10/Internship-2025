function Education() {
  const education = [
    {
      degree: "B.Tech Information Technology",
      school: "SNS College Of Technology",
      score: "CGPA 7.6",
      year: "2025",
    },
    {
      degree: "HSC",
      school: "National Matric Hr Sec School",
      score: "87%",
      
      year: "2021",
    },
    {
      degree: "SSLC",
      school: "Rose Garden Matric Hr Sec School",
      score: "82%",
      year: "2019",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#161616] text-[#b5b5b5] min-h-screen px-6 py-24 "
      data-aos="fade-up-right"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-3 text-center animate-pulse">
            My Journey
        </h2>
        <div className="w-24 h-1 bg-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative pl-8 border-l-4 border-gray-600 space-y-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="absolute -left-[18px] top-4 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#161616]" />
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-white transition-all duration-300 ">
              <h3 className="font-bold text-2xl mb-1">{edu.degree}</h3>
              <p className="text-lg">{edu.school}</p>
              <p className="text-sm mt-2 text-gray-300">
                {edu.score} <br /> {edu.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
