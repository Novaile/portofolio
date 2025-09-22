// src/components/Sidebar.jsx
export default function Sidebar() {
  return (
    <div className="flex flex-col items-center text-center">
      <br/><br/><br/><br/><br/>
      {/* Foto Profil */}
      {/* <img
        src="https://via.placeholder.com/150"
        className="w-32 h-32 rounded-full mb-4"/> */}
      {/* Nama & Role */}
      <h2 className="text-2xl font-bold text-white">Wisnu</h2>
      <p className="text-white">Web Developer</p>

      {/* Kontak */}
      <div className="mt-6 space-y-2 text-sm">
        <p className="text-white">
          wisnumahendra06@gmail.com
        </p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 dark:text-indigo-400 hover:underline">
          GitHub
        </a>
        <br/>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 dark:text-indigo-400 hover:underline">
          LinkedIn
        </a>
      </div>

      {/* Tombol Download CV */}
      <a
        href="/cv.pdf"
        download
        className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500">
        Download CV
      </a>
    </div>
  );
}
