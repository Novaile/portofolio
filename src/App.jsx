// App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {
  const [activePage, setActivePage] = useState("about"); // default tampilan
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center p-6">
      <div className="w-full max-w-7xl flex gap-6">
        
        {/* Sidebar kiri (hilang pas contact) */}
        <AnimatePresence>
          {activePage !== "contact" && (
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-1/3 lg:w-1/4">
              <div className="bg-gray-900 rounded-2xl shadow p-6 sticky top-6">
                <Sidebar />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Container kanan */}
        <motion.div
          key={activePage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`flex-1 bg-gray-900 rounded-2xl shadow flex flex-col p-6 gap-6 ${
            activePage === "contact" ? "w-full" : ""
          }`}>
          {/* Navbar → lempar fungsi setActivePage */}
          <Navbar onNavigate={setActivePage} />

          {/* Konten berdasarkan activePage */}
          <div className="flex-1">
            {activePage === "about" && <About />}
            {activePage === "resume" && <Resume />}
            {activePage === "projects" && <Projects />}
            {activePage === "contact" && <Contact />}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


