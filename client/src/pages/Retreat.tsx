import { ArrowRight, CheckCircle2, Shield, Flame, Anchor } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Retreat() {
  return (
    <div className="min-h-screen bg-[#0A0A20] text-slate-200 selection:bg-cyan-500/30">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[#0A0A20]/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Strictly for Founder-Dads & Leaders
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Being the Ghost in the Room. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Become Unforgettable.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              A 2-Day immersive crucible to release your compression, regulate your nervous system, and reclaim your presence—so you can lead your family and your business without burning out.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#apply" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0A0A20] font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-lg">
                Apply for The Retreat
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-slate-400 sm:ml-4">Takes 3 minutes • Invite Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PAIN / THE PROBLEM */}
      <section className="py-24 bg-[#0A0A20] relative border-t border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              You’re winning in business, but you're losing at home.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                Let’s cut the shit. You’ve built the business. You provide for the family. From the outside, you have it all figured out. 
              </p>
              <p>
                But on the inside? You’re carrying the weight of the world alone. You're sleeping 4 to 6 hours a night, waking up with racing thoughts. You’ve gained 10 kilos since the kids were born. 
              </p>
              <p className="text-white font-medium border-l-4 border-cyan-500 pl-6 py-2 bg-slate-900/30">
                And worst of all—when you're finally sitting in the living room with your kids, you aren't really there. You're a ghost in the room. Physically present, mentally a million miles away.
              </p>
              <p>
                You snap at the people you love most. You rely on caffeine to wake up and alcohol or mindless scrolling to shut down. You’ve tried the "beast mode" gym routines and the extreme diets, but they just add more stress to an already overloaded system.
              </p>
              <p className="text-xl text-white font-semibold text-center mt-12">
                It’s not a discipline problem. It’s a compression problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION / THE RETREAT */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Unforgettable Retreat
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              This isn't a ra-ra motivation seminar. This is a nervous-system reset designed specifically for men who have spent years performing, providing, and suppressing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#0A0A20] p-8 rounded-2xl border border-slate-800">
              <Anchor className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Regulate Your System</h3>
              <p className="text-slate-400">
                Learn advanced breathwork and somatic practices to discharge years of stored stress. Shift from a constant state of fight-or-flight back into deep, restorative safety.
              </p>
            </div>
            
            <div className="bg-[#0A0A20] p-8 rounded-2xl border border-slate-800">
              <Flame className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Reclaim Your Fire</h3>
              <p className="text-slate-400">
                Drop the "fake calm" and the people-pleasing. We'll strip away the performative layers and rebuild your physical and mental capacity from a place of truth, not force.
              </p>
            </div>
            
            <div className="bg-[#0A0A20] p-8 rounded-2xl border border-slate-800">
              <Shield className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Enter the Brotherhood</h3>
              <p className="text-slate-400">
                Growth is not a solo act. Step into a room of men who actually "get it." No judgment, no posturing. Just raw honesty, accountability, and lifelong connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 bg-[#0A0A20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Happens Over The 2 Days
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Decompression</h4>
                  <p className="text-slate-400">We start by getting you out of your head and into your body. Through deep breathwork and physical exertion, we bleed off the accumulated stress of your daily life.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Mirror</h4>
                  <p className="text-slate-400">Honest, confronting, but compassionate group work. We identify where you are self-sabotaging, where you are hiding, and what stories are keeping you trapped in the loop.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
                  03
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Integration</h4>
                  <p className="text-slate-400">You don't leave with just a "high." You leave with a concrete, identity-based system. You will know exactly how to train, how to breathe, and how to communicate when you return home to your family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU? */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">This IS For You If:</h3>
              <ul className="space-y-4">
                {[
                  "You are a founder, business owner, or leader.",
                  "You are a father who wants to be truly present.",
                  "You are tired of the 'hustle at all costs' culture.",
                  "You are ready to do the deep internal work.",
                  "You want a brotherhood of men holding you to a higher standard."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">This is NOT For You If:</h3>
              <ul className="space-y-4">
                {[
                  "You want a quick-fix weight loss magic pill.",
                  "You want an 'alpha male' chest-beating bootcamp.",
                  "You are unwilling to be vulnerable in a group setting.",
                  "You blame your wife, your kids, or the market for your problems.",
                  "You aren't willing to invest in yourself."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="apply" className="py-32 bg-[#0A0A20] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Family Deserves the Best Version of You.
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Spots are strictly limited to ensure intimacy and impact. Submit your application below, and I will personally review it to see if you are a fit for the brotherhood.
            </p>
            
            <a href="mailto:shaun@shauntucker.com.au?subject=Retreat Application" className="inline-flex px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0A0A20] font-bold rounded-lg transition-all items-center justify-center gap-3 text-xl w-full sm:w-auto shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
              Apply For The Retreat Now
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Clicking this will open your email client. Send me a message and we'll start the conversation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
