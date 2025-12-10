import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Project } from '../types';
import { getProjects } from '../src/lib/content';

const categories = ["All", "Residential", "Commercial", "Industrial", "Infrastructure"];


const Portfolio: React.FC = () => {
  const projects = useMemo(() => getProjects(), []);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">Major Projects</h2>
            <p className="text-neutral-500 max-w-md">
              From large-scale installations for WAAREE Group to critical infrastructure for L&T.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-lg'
                  : 'bg-white text-neutral-500 hover:bg-neutral-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium mb-3 border border-white/10">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {project.location}
                    </span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span>{project.capacity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Map Placeholder */}
        <div className="mt-24 p-8 md:p-12 rounded-[40px] bg-white border border-neutral-100 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Rajasthan & Beyond</h3>
            <p className="text-neutral-500 mb-8">Successfully serving clients across residential, commercial, and government sectors.</p>
            <div className="inline-flex items-center justify-center w-full h-64 bg-neutral-50 rounded-3xl border border-neutral-100 text-neutral-400">
              <span className="flex items-center gap-2"><MapPin className="animate-bounce" /> Map Module Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;