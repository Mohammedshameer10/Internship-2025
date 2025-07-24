import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "education", "contact"];
      let current = null;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#161616] text-white py-5 px-6 flex justify-between items-center shadow-lg shadow-white/10">
     <a href="#hero"> <h1 className="text-2xl font-bold animate-pulse hover:text-blue-400 ">MS</h1></a>

      <div className="hidden md:flex space-x-5 text-xl">
        <a
          href="#about"
          className={`hover:text-blue-400 ${
            active === "about" ? "text-blue-400 border-b-2 border-blue-400" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`hover:text-blue-400 ${
            active === "projects" ? "text-blue-400 border-b-2 border-blue-400" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`hover:text-blue-400 ${
            active === "skills" ? "text-blue-400 border-b-2 border-blue-400" : ""
          }`}
        >
          Skills
        </a>
        <a
          href="#education"
          className={`hover:text-blue-400 ${
            active === "education" ? "text-blue-400 border-b-2 border-blue-400" : ""
          }`}
        >
          Education
        </a>
        <a
          href="#contact"
          className={`hover:text-blue-400 ${
            active === "contact" ? "text-blue-400 border-b-2 border-blue-400" : ""
          }`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
