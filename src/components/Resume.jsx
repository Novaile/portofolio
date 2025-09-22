// src/components/Resume.jsx
export default function Resume() {
  return (
    <section id="resume"className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="list-disc list-inside">
            <li>Universitas Kristen Satya Wacana - Informatika (2020–2024)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="list-disc list-inside">
            <li>BPS – Enumerator (2022)</li>
            <li>Diskominfo – Intern Web Developer (2023)</li>
            <li>Indikator – Surveyor (2023)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
