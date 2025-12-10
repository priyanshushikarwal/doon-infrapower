import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw, TreeDeciduous, Wallet, Zap } from 'lucide-react';
import { getSolarAssessment } from '../services/geminiService';

const Calculator: React.FC = () => {
  const [bill, setBill] = useState<number>(5000);
  const [roofSize, setRoofSize] = useState<number>(1500);
  const [city, setCity] = useState<string>('Jaipur');
  
  // Calculated values (simplified logic for India context)
  // Assuming approx 8-9 INR per unit, 1300 units per kW per year
  const systemSize = (bill / 8 / 110).toFixed(1); // Rough kW calc based on monthly bill
  const monthlySavings = Math.round(bill * 0.9);
  const annualSavings = monthlySavings * 12;
  const trees = Math.round(annualSavings / 500); // Adjusted tree calc

  // AI State
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleAiAnalysis = async () => {
    setLoadingAi(true);
    setAiAnalysis(null);
    const result = await getSolarAssessment(bill, city, roofSize);
    setAiAnalysis(result);
    setLoadingAi(false);
  };

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-amber-50/50 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Input Section */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-amber-500 font-semibold tracking-wide uppercase text-xs mb-2 block">Savings Calculator</span>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">Estimate Your Impact</h2>
            <p className="text-neutral-500 text-lg">See how much you can save with PM Surya Ghar Scheme and Doon Infrapower.</p>
          </div>

          <div className="space-y-6 p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Monthly Electricity Bill (₹)</label>
              <div className="relative flex items-center">
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={bill} 
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
                <span className="ml-4 w-20 text-right font-semibold text-neutral-900">₹{bill}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Available Roof Area (sq ft)</label>
              <div className="relative flex items-center">
                <input 
                  type="range" 
                  min="200" 
                  max="5000" 
                  step="50"
                  value={roofSize} 
                  onChange={(e) => setRoofSize(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
                <span className="ml-4 w-16 text-right font-semibold text-neutral-900">{roofSize}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">City</label>
              <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors bg-white"
              />
            </div>
            
            <button
              onClick={handleAiAnalysis}
              disabled={loadingAi}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-200 hover:shadow-xl transition-all active:scale-95 disabled:opacity-70"
            >
              {loadingAi ? <RefreshCw className="animate-spin" size={18} /> : <Sparkles size={18} />}
              {loadingAi ? "Analyzing..." : "Get AI Assessment"}
            </button>
          </div>
          
          {/* AI Result Card */}
          {aiAnalysis && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-900 text-sm leading-relaxed shadow-inner"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p>{aiAnalysis}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Output Section */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              className="p-8 rounded-[32px] bg-white border border-neutral-100 shadow-xl shadow-neutral-100 flex flex-col items-center justify-center text-center aspect-square"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Wallet size={24} />
              </div>
              <p className="text-neutral-500 text-sm font-medium uppercase tracking-wide mb-1">Annual Savings</p>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">₹{annualSavings.toLocaleString()}</p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-[32px] bg-white border border-neutral-100 shadow-xl shadow-neutral-100 flex flex-col items-center justify-center text-center aspect-square"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <p className="text-neutral-500 text-sm font-medium uppercase tracking-wide mb-1">System Size</p>
              <p className="text-5xl font-bold text-neutral-900 tracking-tight">{systemSize} <span className="text-2xl text-neutral-400">kW</span></p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-[32px] bg-neutral-900 text-white shadow-xl shadow-neutral-400 flex flex-col items-center justify-center text-center aspect-square sm:col-span-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-4">
                <TreeDeciduous size={24} />
              </div>
              <p className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">Environmental Impact</p>
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Equivalent to planting {trees} trees per year</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;