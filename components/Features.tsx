import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Factory, UtilityPole, Award, Briefcase } from 'lucide-react';
import { client } from '../src/lib/sanity';

const iconMap: Record<string, any> = {
  Zap, Factory, UtilityPole, Briefcase, ShieldCheck, Award
};

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

const Features: React.FC = () => {
  const [features, setFeatures] = useState<Service[]>([]);

  useEffect(() => {
    client.fetch(`*[_type == "service"]`).then(setFeatures).catch(console.error);
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">Our Business Divisions</h2>
          <p className="text-lg text-neutral-500">
            A multi-dimensional engineering company delivering reliable solutions since 2015.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.length === 0 ? (
            <p className="text-center w-full col-span-4 text-neutral-400">Loading services...</p>
          ) : features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap;
            return (
              <motion.div
                key={feature._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-[32px] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-xl hover:shadow-neutral-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;