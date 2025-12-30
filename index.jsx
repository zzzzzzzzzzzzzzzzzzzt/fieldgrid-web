import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Globe, Menu, X, ChevronRight, Cpu, Zap, 
  ShieldCheck, TrendingUp, Mail, Phone, MapPin, Award 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans text-gray-800 selection:bg-[#064E3B] selection:text-white antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-100 py-1.5' : 'bg-transparent py-4'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-1.5 cursor-pointer group" onClick={(e) => handleNavClick(e, 'hero')}>
            <Globe size={16} className="text-[#064E3B]" />
            <span className="text-[14px] font-black tracking-tighter text-[#064E3B]">FieldGrid</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold tracking-widest text-gray-400">
            {[
              { label: 'Product', id: 'product' },
              { label: 'Mechanism', id: 'how-it-works' },
              { label: 'Innovation', id: 'innovation' },
              { label: 'Impact', id: 'impact' },
              { label: 'Team', id: 'team' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)} 
                className="hover:text-[#064E3B] transition-colors uppercase cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <button onClick={(e) => handleNavClick(e, 'contact')} className="bg-[#064E3B] text-white px-4 py-1.5 rounded-full hover:bg-black transition-all text-[9px] uppercase">Contact Us</button>
          </div>
          <button className="md:hidden text-[#064E3B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative pt-24 pb-12 flex flex-col items-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 via-emerald-100 to-transparent blur-[120px] rounded-full scale-150"></div>
        </div>

        <div className="animate-fade-in relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 mb-4 bg-emerald-100/50 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
            <Award size={12} className="text-[#064E3B]" />
            <span className="text-[9px] font-black text-[#064E3B] uppercase tracking-[0.2em]">Conrad Challenge 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#064E3B]">FieldGrid</h1>
          <p className="text-sm md:text-base text-gray-500 font-medium leading-tight mb-8">
            AI-Driven Grid-based Microclimate Monitoring <br />Precision Supports for 390 Million Smallholders
          </p>
          <div className="flex justify-center space-x-6 text-[12px] font-bold">
            <a href="#product" onClick={(e) => handleNavClick(e, 'product')} className="text-[#064E3B] flex items-center hover:translate-x-1 transition-transform cursor-pointer uppercase">Product Details <ChevronRight size={14} /></a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-400 hover:text-black transition-colors underline underline-offset-4 cursor-pointer uppercase">Partnership</a>
          </div>
        </div>
        
        {/* ★★★ 主视觉图片 (Main Device Image) ★★★ */}
        <div className="mt-12 w-full max-w-4xl h-72 md:h-[500px] bg-white rounded-[2.5rem] overflow-hidden border border-emerald-50 flex items-center justify-center relative shadow-2xl group">
           <img 
             src="https://i.ibb.co/YFSt9Vdr/ai.png" 
             alt="FieldGrid AI Device" 
             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             onError={(e) => { e.target.src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000'; }}
           />
        </div>
      </section>

      {/* 2. Product Description */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-[#064E3B]">What is FieldGrid?</h2>
              <p className="text-[12px] text-gray-600 leading-relaxed max-w-sm">
                A highly integrated microclimate monitoring terminal. By deploying high-resolution sensor networks, we eliminate data blind spots found in traditional weather stations, providing real-time sensing of Temperature, Humidity, and CO₂ concentrations in every individual field.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <p className="text-[8px] font-bold text-emerald-700 uppercase mb-1">Unit Cost</p>
                  <p className="text-lg font-black text-[#064E3B]">{`<$100`}</p>
                </div>
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <p className="text-[8px] font-bold text-emerald-700 uppercase mb-1">Deployment Density</p>
                  <p className="text-lg font-black text-[#064E3B]">10+ Nodes/Hectare</p>
                </div>
              </div>
            </div>
            {/* ★★★ 设备渲染图占位 (Detail Rendering) ★★★ */}
            <div className="aspect-[16/10] bg-gray-50 rounded-3xl flex items-center justify-center border border-emerald-50 shadow-inner overflow-hidden relative">
               <span className="relative z-10 text-emerald-800/10 text-[9px] font-bold uppercase italic">Device Detail Rendering</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-20 bg-[#064E3B] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-12 text-center uppercase tracking-widest">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Grid-based Deployment", d: "Flexible node arrangement across plots to capture subtle environmental fluctuations." },
              { t: "Real-time Sync", d: "Synchronize localized data to the encrypted AI cloud every second for timely predictions." },
              { t: "Intelligent Alerts", d: "Deliver specific cultivation advice directly to farmers via mobile interface." }
            ].map((s, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[10px] font-black text-emerald-400">0{i+1}</span>
                  <h4 className="font-bold text-[12px]">{s.t}</h4>
                </div>
                <p className="text-[11px] text-emerald-100/50 leading-tight">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Innovations */}
      <section id="innovation" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-2">Core Innovations</h2>
            <h3 className="text-2xl font-black tracking-tighter text-[#064E3B]">Breaking Barriers in Agricultural Monitoring</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { i: <TrendingUp size={14}/>, t: "Cost & Density", d: "Unit cost reduced to 1/20 of traditional devices, enabling true large-scale grid deployment." },
              { i: <Zap size={14}/>, t: "AI Forecasting", d: "Predictive alerts for frost and extreme heat based on localized real-time data." },
              { i: <Cpu size={14}/>, t: "Scalability", d: "Modular design allows integration of soil and pest monitoring sensors." },
              { i: <ShieldCheck size={14}/>, t: "Weatherproof", d: "Field-tested in high humidity and extreme mountain climates." }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-emerald-50/30 rounded-2xl space-y-3 border border-emerald-100/50 hover:bg-emerald-100/40 transition-all group">
                <div className="text-[#064E3B] bg-white w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{item.i}</div>
                <h4 className="font-bold text-[10px] text-[#064E3B] uppercase tracking-wider">{item.t}</h4>
                <p className="text-[10px] text-gray-500 leading-tight">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Impact */}
      <section id="impact" className="relative py-24 overflow-hidden min-h-[500px] flex items-center">
        {/* ★★★ 背景图 (Background Image) ★★★ */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Agriculture Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B]/95 via-[#064E3B]/80 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-white">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black tracking-tight mb-8 uppercase tracking-widest">Global Impact</h2>
            <div className="space-y-10">
              <div className="border-l-2 border-emerald-400 pl-6 py-2">
                <h3 className="font-bold text-[14px] mb-2 text-emerald-300 uppercase tracking-widest">Empowering Smallholders</h3>
                <p className="text-[12px] leading-relaxed text-emerald-50/80">At a cost of only $99, FieldGrid gives farmers proactive control, reducing potential losses from extreme weather by up to 20%.</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-6 py-2">
                <h3 className="font-bold text-[14px] mb-2 text-emerald-300 uppercase tracking-widest">Data-Driven Ecosystem</h3>
                <p className="text-[12px] leading-relaxed text-emerald-50/80">Providing transparent data for agricultural insurance and supply chains, reducing systemic risk across Asia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Team Members */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold tracking-tight mb-12 text-[#064E3B] uppercase tracking-widest">Team Members</h2>
          <div className="grid grid-cols-3 gap-10">
            {[
              { n: 'Zhao Tai', r: 'Project Lead', d: 'Expert in embedded systems.' },
              { n: 'Xu Ziyang', r: 'Strategy', d: 'Focused on market entry.' },
              { n: 'Yan Siyao', r: 'Design', d: 'Architect of product branding.' }
            ].map((m) => (
              <div key={m.n} className="group">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full mb-4 border border-emerald-100 flex items-center justify-center">
                   <span className="text-[8px] text-emerald-800/30 uppercase font-bold italic">Photo</span>
                </div>
                <p className="text-[12px] font-black text-[#064E3B]">{m.n}</p>
                <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter mb-2">{m.r}</p>
                <p className="text-[10px] text-gray-400 leading-tight px-2">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 bg-[#0A120D] text-white rounded-t-[3rem] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">Join Our Mission</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] font-bold tracking-[0.1em] uppercase opacity-40">
            <div className="flex items-center space-x-1.5"><Mail size={12}/> <span>261173568@qq.com</span></div>
            <div className="flex items-center space-x-1.5"><Phone size={12}/> <span>+86 13261910892</span></div>
            <div className="flex items-center space-x-1.5"><MapPin size={12}/> <span>BEIJING</span></div>
          </div>
          <p className="opacity-20 text-[8px] uppercase tracking-[0.4em]">© 2025 FieldGrid | Triple-T Team | Conrad Challenge</p>
        </div>
      </footer>
    </div>
  );
};

// --- 渲染逻辑 ---
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
