// src/components/Projects.jsx
export default function Projects() {
  const projectList = [
    {
      title: "Project 1",
      desc: "Web Inventaris digunakan untuk mengelola data barang",
      img: "/portofolio/images/image.png",
      demo: "https://inventaris1.infinityfreeapp.com/",
      github: "https://github.com/Novaile/inventaris",
    },
    // {
    //   title: "Project 2",
    //   desc: "Deskripsi singkat project.",
    //   img: "https://via.placeholder.com/300x200",
    //   demo: "#",
    //   github: "#",
    // },
    // {
    //   title: "Project 3",
    //   desc: "Deskripsi singkat project.",
    //   img: "https://via.placeholder.com/300x200",
    //   demo: "#",
    //   github: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="relative group bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
          >
            {/* Gambar */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Konten */}
            <div className="p-5">
              <h3 className="font-semibold text-xl text-white">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            </div>

            {/* Overlay tombol saat hover */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
              >
                Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
