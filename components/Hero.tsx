import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Settings } from 'lucide-react';
import homeData from '../src/content/home.json';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAFAFA]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-50 rounded-full mix-blend-multiply filter blur-[128px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-orange-50 rounded-full mix-blend-multiply filter blur-[96px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-500 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {homeData.hero_badge}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 leading-[1.1] text-balance">
              {homeData.hero_title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-lg"
          >
            {homeData.hero_description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={homeData.cta_primary_link}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-900 text-white font-medium text-lg hover:shadow-lg hover:shadow-neutral-500/20 transition-all active:scale-95 shadow-xl border border-neutral-800"
            >
              {homeData.cta_primary_text}
              <ArrowRight size={18} />
            </a>
            <a
              href={homeData.cta_secondary_link}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-100 text-neutral-900 font-medium text-lg hover:bg-neutral-200 transition-all active:scale-95"
            >
              {homeData.cta_secondary_text}
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] hidden lg:block"
        >
          {/* Main Container - White Card Style */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-white shadow-2xl shadow-neutral-200/50 border border-white">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white/50"></div>

            {/* Top Right Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-12 right-12 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] max-w-[240px] z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/30">
                  <Zap size={20} className="text-white" />
                </div>
                <p className="font-bold text-lg text-neutral-900">Solar EPC</p>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">Residential, Commercial & Industrial Plants</p>
            </motion.div>

            {/* Bottom Left Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-12 left-12 p-6 rounded-2xl bg-neutral-800 text-white shadow-2xl shadow-neutral-900/30 max-w-[280px] z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                  <Settings size={20} className="text-white" />
                </div>
                <p className="font-bold text-lg">Manufacturing</p>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">Transformers up to 5 MVA & Electrical Panels</p>
            </motion.div>

            {/* Subtle Gradient Ball for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-amber-100 to-blue-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;