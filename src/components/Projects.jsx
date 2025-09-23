// src/components/Projects.jsx
export default function Projects() {
  const projectList = [
    {
      title: "Project 1",
      desc: "Web Inventaris digunakan untuk mengelola data barang",
      img: "https://via.placeholder.com/300x200",
      demo: "#",
      github: "https://github.com/Novaile/inventaris",
    },
    {
      title: "Project 2",
      desc: "Deskripsi singkat project.",
      img: "https://via.placeholder.com/300x200",
      demo: "#",
      github: "#",
    },
    {
      title: "Project 3",
      desc: "Deskripsi singkat project.",
      img: "https://via.placeholder.com/300x200",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects"className="min-h-screen flex flex-col justify-center px-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
            </div>

            {/* Overlay saat hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
                Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
