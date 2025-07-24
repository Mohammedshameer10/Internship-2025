import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const titles = [
    "Aspiring Software Engineer",
    "Front-End Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="bg-[#161616] text-[#b5b5b5] min-h-screen py-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
      data-aos="fade-up"
    >
      <div className="flex justify-center md:w-1/2">
        <img
          src={profileImg}
          alt="Profile"
          className="w-64 h-64 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-center md:items-start ">
        <h2 className="text-5xl font-extrabold mb-6 text-white">
          Hey there! I’m Mohammed Shameer.
        </h2>
        <p className="text-2xl font-medium max-w-3xl mb-10">{titles[index]}</p>

        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transition-transform duration-500 hover:text-blue-400 hover:rotate-360"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl transition-transform duration-500 hover:text-blue-400 hover:rotate-360"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yourgmail@gmail.com"
            className="text-white text-4xl transition-transform duration-500 hover:text-blue-400 hover:rotate-360"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="#contact"
          className="bg-gray-600 hover:bg-white text-black px-8 py-4 rounded-full shadow-lg text-xl font-bold transition duration-300 animate-bounce"
        >
          Team Up with me!
        </a>
      </div>
    </section>
  );
}

export default Hero;
