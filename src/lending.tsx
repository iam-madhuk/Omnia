import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import aiHead from "./assets/ai-head.png";

const AILandingPage = () => {



  // Mouse glow effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Stagger animation

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden relative">
      {/* Animated gradient background orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-20 blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 opacity-20 blur-3xl"
        animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Mouse follower glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.15), transparent 80%)`,
        }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/20 border-b border-gray-800 z-40"
      >
        <div className="text-2xl font-bold flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="font-bold text-xl">Robotix</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {["Features", "Demo", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-purple-300 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </motion.nav>

      <section className="bg-[#0a0f1c] w-full text-white min-h-screen flex justify-between items-center  px-12 relative p-8">
        {/* Left Side Content */}
        <div className="flex max-w-xl justify-between space-y-6 relative">
          {/* Headline */}
          <div className="flex flex-1 flex-col ">
            <h1 className="text-5xl font-extrabold leading-snug">
              Specialized <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
                Artificial Intelligence
              </span>
              <br />
              Design service
            </h1>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere vehicula dolor nec bibendum. Nam eget posuere justo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere vehicula dolor nec bibendum. Nam eget posuere justo.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3">
                Get Started
              </button>
              <button
                className="border border-gray-500 rounded-full px-6 py-3 text-white hover:bg-gray-800"
              >
                Watch Video
              </button>
            </div>
          </div>

        </div>

        <div className="relative ">
          <motion.img
            src={aiHead}
            alt="AI Head"
            className="w-[450px] [transform-style:preserve-3d]"
            initial={{ opacity: 0, rotateY: -20 }}
            animate={{
              opacity: 1,
              rotateY: [0, 20, -20, 0], // side-to-side rotation
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Cards */}
          <motion.div
            className="absolute top-5 left-[-60px] bg-[#111827] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-6 h-6 bg-blue-400 flex items-center justify-center rounded">
              📄
            </div>
            <div>
              <p className="text-sm font-semibold">Document Lab</p>
              <p className="text-xs text-gray-400">You Gave Access</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-5 right-[-20px] bg-[#111827] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-6 h-6 bg-orange-400 flex items-center justify-center rounded">
              💡
            </div>
            <div>
              <p className="text-sm font-semibold">Quickly Generate</p>
              <p className="text-xs text-gray-400">Feeling Good With Us</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-[-40px] bg-[#111827] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="w-6 h-6 bg-pink-500 flex items-center justify-center rounded">
              ❤️
            </div>
            <div>
              <p className="text-sm font-semibold">Lovely Place</p>
              <p className="text-xs text-gray-400">You Can Enjoy More</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[-40px] left-[-60px] bg-[#111827] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-6 h-6 bg-blue-400 flex items-center justify-center rounded">
              📄
            </div>
            <div>
              <p className="text-sm font-semibold">Document Lab</p>
              <p className="text-xs text-gray-400">You Gave Access</p>
            </div>
          </motion.div>


        </div>



      </section>
    </div>
  );
};

export default AILandingPage;



