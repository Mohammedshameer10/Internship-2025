function About() {
  return (
    <section
      id="about"
      className="bg-[#161616] text-[#b5b5b5] min-h-screen flex flex-col items-center px-6 py-24"
      data-aos="fade-right"
    >
      <div className="w-full max-w-6xl text-center mb-8" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-white mb-3 animate-pulse">Who Am I?</h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
      </div>

      <div
        className="bg-gray-800 border border-gray-700 hover:border-white rounded-2xl p-12 max-w-5xl w-full min-h-[400px] flex items-center justify-center transition-all duration-500 shadow-md hover:shadow-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-2xl leading-relaxed text-center">
          👋 I'm a highly motivated and enthusiastic fresher, eager to kickstart my career as a Software Engineer.
          <br /><br />
          🚀 Passionate about building scalable and efficient software solutions.
          <br /><br />
          💡 Always eager to learn, grow, and collaborate with innovative teams.
        </p>
      </div>
    </section>
  );
}

export default About;
