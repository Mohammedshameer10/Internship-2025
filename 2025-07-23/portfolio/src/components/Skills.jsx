function Skills() {
  const skills = [
    { name: "Python", level: 80 },
    { name: "CSS", level: 75 },
    { name: "HTML", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
    { name: "GitHub", level: 90 },
    { name: "Docker", level: 60 },
  ];

  return (
    <section
      id="skills"
      className="bg-[#161616] text-[#b5b5b5] min-h-screen px-6 py-24 flex flex-col items-center"
      data-aos="fade-left"
    >
      <div className="w-full max-w-6xl text-center mb-8" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-white mb-3 animate-pulse">My SuperPowers</h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
      </div>

      <div className="max-w-2xl w-full space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                style={{
                  width: `${skill.level}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
