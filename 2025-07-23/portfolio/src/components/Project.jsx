function Project() {
  const projects = [
    {
      title: "Shopping Cart App",
      icon: "🛒",
      description: [
        "Developed a shopping cart web application using HTML, CSS, and JavaScript.",
        "Responsive UI with product browsing, cart add/remove features.",
        "DOM manipulation for dynamic updates without page reload.",
      ],
    },
    {
      title: "General Management System",
      icon: "🩺",
      description: [
        "Built a system to maintain and display patient records efficiently.",
        "User-friendly UI for healthcare providers to manage data.",
      ],
    },
    {
      title: "Online Voting Using Blockchain",
      icon: "🗳️",
      description: [
        "Designed a decentralized voting system using Solidity, Truffle, and MetaMask.",
        "Secure, transparent, tamper-proof voting with a DApp interface.",
      ],
    },
  ];

  return (
<section
  id="projects"
  className="bg-[#161616] text-[#b5b5b5] min-h-screen py-24 px-6 flex flex-col items-center scroll-mt-5"
>


      <div className="w-full max-w-6xl mb-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-4 animate-pulse">What I’ve Built

</h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-white transition duration-300 border border-gray-700"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="text-5xl mb-4 text-center">{project.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center text-white">
              {project.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-xl">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
