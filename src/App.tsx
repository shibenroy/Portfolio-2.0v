import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tab Variants for smooth animation
const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Navbar Component
const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="absolute top-8 right-8">
      <ul className="flex gap-6 text-sm">
        {["home", "skills", "contact"].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-green-700 
              ${activeTab === tab ? "text-green-900 font-bold" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-green-900"
                  layoutId="underline"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Tab Content Component
const TabContent = ({ activeTab }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={tabVariants}
        className="w-full max-w-3xl text-center px-6"
      >
        {activeTab === "home" && (
          <div>
            <div className="bg-green-900 inline-block p-4 mb-4 text-white rounded-lg shadow-lg">
              <h1 className="text-5xl font-mono">Shiben Roy</h1>
              <span className="text-sm">(he/him/ChatGPT)</span>
            </div>
            <p className="text-lg leading-relaxed opacity-80">
              15, Also known as Astericc. I make stuff :P. I'm interested in making many different things like Web, Games, 3D Models, Edits, and more.
              I started taking interest in tech when my father taught me Python at 12. Trying to improve every day ~_~.
            </p>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h2 className="text-2xl border-b border-dashed mb-6">Skills & Tooling</h2>
            <p className="opacity-80 text-lg">
              <strong>Languages & Frameworks:</strong> TypeScript, React, Next.js <br />
              <strong>Design & 3D:</strong> Blender, Adobe After Effects, Figma <br />
              <strong>Tools:</strong> GitHub, VS Code
            </p>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="text-2xl mb-6">Contact Me</h2>
            <p className="text-lg opacity-80">Feel free to reach out via email or connect with me on Discord.</p>
            <div className="mt-6 space-y-4">
              <p className="text-lg">
                <strong>Email:</strong> <a href="mailto:shibenroy145@gmail.com" className="underline">shibenroy145@gmail.com</a>
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <ContactButton href="https://github.com/shibenroy" label="GitHub" />
                <ContactButton href="http://discordapp.com/users/769549219333406772" label="Discord" />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Contact Button Component
const ContactButton = ({ href, label }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 border border-green-900 text-green-900 rounded-md hover:bg-green-900 hover:text-white transition-all duration-300"
      >
        {label}
      </motion.button>
    </a>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#d9ffe3] text-green-950 flex flex-col items-center justify-center px-8 relative">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex items-center justify-center w-full">
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  );
}

export default App;
