function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#161616] text-white min-h-screen py-24 px-6 flex flex-col items-center"
      data-aos="fade-up"
    >
      <h2 className="text-5xl font-extrabold text-white mb-3 animate-pulse">Reach Out to Me</h2>
      <div className="w-24 h-1 bg-white mx-auto rounded-full mb-10" />

      <div className="w-full max-w-3xl space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg text-lg"
          data-aos="fade-right"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg text-lg "
          data-aos="fade-left"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg text-lg "
          data-aos="fade-right"
        />
        <textarea
          placeholder="Message"
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg text-lg  h-48 "
          data-aos="fade-left"
        />
        <button
          className="bg-gray-800 text-white font-extrabold py-4 px-10 rounded-lg hover:bg-white hover:text-black transition text-xl"
          data-aos="zoom-in"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
