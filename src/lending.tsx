import  { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const AILandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

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
          ⚡ <span className="text-purple-400 ml-1">AI</span>Project
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

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mt-24"
        >
          <motion.h1
            variants={textReveal}
            custom={0}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Revolutionize Your Workflow with
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              AI Power
            </span>
          </motion.h1>
          <TypeAnimation
            sequence={[
              "Automating Workflows 🚀",
              2000,
              "Predicting Outcomes 📊",
              2000,
              "Enhancing Decisions 🤖",
              2000,
              "Learning Continuously 🔄",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-300 mb-8"
          />
          <motion.div variants={textReveal} custom={1} className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover:opacity-90 transition shadow-lg shadow-purple-500/30">
              Start Free Trial
            </button>
            <button className="border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20 relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Powerful <span className="text-purple-400">AI Features</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Predictive Analysis", desc: "Forecast trends with high accuracy.", icon: "📊" },
            { title: "Natural Language Processing", desc: "Understand human language seamlessly.", icon: "💬" },
            { title: "Computer Vision", desc: "Extract insights from images & videos.", icon: "👁️" },
            { title: "Automated Decisions", desc: "Make real-time AI-driven decisions.", icon: "⚡" },
            { title: "Pattern Recognition", desc: "Spot anomalies & hidden insights.", icon: "🔍" },
            { title: "Continuous Learning", desc: "Models improve over time.", icon: "📈" },
          ].map((f, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition shadow-md"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-4xl mb-4"
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-purple-300">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          See Our <span className="text-purple-400">AI in Action</span>
        </motion.h2>
        <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-400/10"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-300 mb-4 relative z-10">Simulated AI console output:</p>
          <div className="font-mono text-sm text-green-400 h-48 overflow-hidden relative z-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.3 }}>
                {`> Analyzing dataset ${i + 1}... [OK]`}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {[
            { title: "Free", price: "$0", features: ["Basic AI Tools", "Community Support"] },
            { title: "Pro", price: "$49", features: ["Advanced AI", "Priority Support", "Custom Reports"] },
            { title: "Enterprise", price: "Custom", features: ["Full AI Suite", "Dedicated Team"] },
          ].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-300">{plan.title}</h3>
              <p className="text-3xl font-bold text-pink-400 mb-6">{plan.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg w-full hover:opacity-90">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} AI Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AILandingPage;
