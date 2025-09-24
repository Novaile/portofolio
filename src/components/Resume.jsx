// src/components/Resume.jsx
export default function Resume() {
  return (
    <section id="resume"className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Pendidikan</h3>
          <ul className="list-disc list-inside">
            <li>Universitas Kristen Satya Wacana - Teknik Informatika (2020–2024), <br />
              dengan IPK 3.60 (Cumlaude)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Pengalaman</h3>
          <ul className="list-disc list-inside">
            <li>BPS – Enumerator (2022)<br />
            Mengelola dan input data Sensus Penduduk Long Form.</li>
            <li>Diskominfo – Mangang Web Developer (2023)<br />
              Mengembangkan platform E-Bakesbang dan website pemerintah yang modern, responsif, dan user-friendly.
            </li>
            <li>Indikator – Surveyor (2023)<br />
            Mengumpulkan data lapangan untuk persiapan Pemilu.</li>
            <li>Pt Phicos – Pelatihan dan Magang (2025)<br />
            Mempelajari Javascript, php, Laravel, Mysql, dan membuat Project Inventaris</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            <li>Programming: C, C++, Java, PHP, HTML, CSS</li>
            <li>Database: MySQL, phpMyAdmin</li>
            <li>Pengembangan Web</li>
            <li>IT & Komunikasi</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Project</h3>
          <ul className="list-disc list-inside">
            <li>Website Inventaris (php,Laravel, tailwind, Javascript) </li>
            <li>Sistem Manajemen Restoran (PHP, MySQL, Laravel)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
