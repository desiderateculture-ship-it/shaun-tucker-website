import { useState } from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  id: number;
  name: string;
  title: string;
  company: string;
  headline: string;
  quote: string;
  result: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    name: "Tim Beanland",
    title: "Founder",
    company: "Bean Filming",
    headline: "10kg in 3 weeks",
    quote: "Sick and tired of being sick and tired. Cracking a wine every night just to de-stress.",
    result: "Lost 10kg in 3 weeks. Found a guide through a serious mental health breakdown.",
  },
  {
    id: 2,
    name: "Karim",
    title: "CEO & Founder",
    company: "The Business Life Coach",
    headline: "5kg in week one",
    quote: "Stressed, burnt out, stuck. Training 4 days a week but still getting fatter.",
    result: "Lost 5kg in the first week — not by doing more, but by releasing stress.",
  },
  {
    id: 3,
    name: "Ed",
    title: "Business Owner",
    company: "",
    headline: "22kg lost",
    quote: "30 years of binge eating and adult acne. I thought this was just who I was.",
    result: "Lost 22kg, cleared his skin, and now looks like he's in his 20s again.",
  },
  {
    id: 4,
    name: "Paul Barrett",
    title: "Director",
    company: "International Trade",
    headline: "Breakthrough clarity",
    quote: "Pretending to have it all together while struggling to connect on a deeper level.",
    result: "Found a rare, raw environment to be honest with himself and strip things back.",
  },
  {
    id: 5,
    name: "Sridhar Sumalapalli",
    title: "Owner & Director",
    company: "Affluence Financials",
    headline: "CEO decision-making",
    quote: "Deep within the business, unable to make conscious decisions. My diet and mindset were a mess.",
    result: "Fixed diet, fitness, and mindset — now makes quick, wise decisions as a CEO.",
  },
  {
    id: 6,
    name: "Adam",
    title: "Founder",
    company: "Visualize",
    headline: "Limiting beliefs cleared",
    quote: "Trapped by limiting beliefs I didn't even know were running my life.",
    result: "A clear roadmap for business and personal life, with tools to stay in control.",
  },
  {
    id: 7,
    name: "Greg Nicolacopoulos",
    title: "Business Owner",
    company: "",
    headline: "Personalised reset",
    quote: "The cookie-cutter, one-size-fits-all approach wasn't working for my busy life.",
    result: "A personalised, science-backed approach that makes health simple for the time-poor.",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Header */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-indigo-400 mb-4 tracking-widest">
              REAL RESULTS. REAL MEN.
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              From "Always On"<br />
              <span className="text-indigo-400">to Grounded Presence.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              High-performing men and fathers who traded the internal pressure cooker for sustainable impact — without losing their edge.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-3xl font-bold text-indigo-400 mb-2">22kg</p>
                <p className="text-sm text-slate-400">Largest single transformation</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-3xl font-bold text-indigo-400 mb-2">5★</p>
                <p className="text-sm text-slate-400">Google Business rating</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-3xl font-bold text-indigo-400 mb-2">15+</p>
                <p className="text-sm text-slate-400">LinkedIn recommendations</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-3xl font-bold text-indigo-400 mb-2">7</p>
                <p className="text-sm text-slate-400">Video testimonials</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Video Transformations
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Hear it from the men themselves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <h3 className="text-lg font-bold text-indigo-400 mb-2">
                  {study.headline}
                </h3>
                <p className="text-slate-300 mb-4 italic">
                  "{study.quote}"
                </p>
                <p className="text-sm text-slate-400 mb-4">
                  → {study.result}
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="font-semibold text-white">{study.name}</p>
                  <p className="text-sm text-slate-400">
                    {study.title}
                    {study.company && `, ${study.company}`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Reset?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            The results above are waiting for you. If you're a high-performing man or father who's winning on paper but hasn't felt truly present in years — it might be time for your own reset.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
            Apply for a Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}
