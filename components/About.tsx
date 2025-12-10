import React from 'react';
import aboutData from '../src/content/about.json';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={aboutData.director_image}
                alt="Director"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 max-w-xs hidden md:block">
              <p className="font-serif italic text-xl text-neutral-800 leading-relaxed">
                "{aboutData.director_quote}"
              </p>
              <p className="mt-4 font-bold text-neutral-900">— {aboutData.director_name}</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">{aboutData.title}</h2>
            <div className="text-lg text-neutral-500 leading-relaxed whitespace-pre-line">
              {aboutData.description}
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-neutral-200">
              {aboutData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;