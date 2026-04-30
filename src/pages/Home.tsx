import { useState, useEffect, useRef, type FormEvent } from 'react';
import { 
  ArrowRight, Mail, Phone, MapPin, 
  Sparkles, Clock, Coffee, ShieldCheck, Check,
  ArrowUp, Instagram, Facebook, Twitter, Users,
  Music, Tv, Camera, Gamepad2, Star
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

// --- Components ---

const StatCounter = ({ end, label, prefix = '' }: { end: number; label: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 border border-[rgba(61,53,34,0.1)] rounded-2xl bg-[var(--color-cream)] shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl font-serif mb-2 text-[var(--color-terracotta)]">
        {prefix}{count}+
      </div>
      <div className="text-[10px] uppercase tracking-widest text-[var(--color-espresso)] opacity-60">
        {label}
      </div>
    </div>
  );
};

const RoomCard = ({ id, title, capacity, image, theme, price }: { id: string; title: string; capacity: string; image: string; theme: string; price?: number }) => {
  return (
    <Link to={`/room/${id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-[var(--color-cream)] rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 text-left h-full"
      >
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-[var(--color-terracotta)]">
            {theme}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[var(--color-espresso)] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm shadow-xl hover:bg-[var(--color-terracotta)]">
            詳情及預約
            <ArrowRight size={16} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-xs text-[var(--color-sage)] font-medium uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <Users size={14} />
              {capacity}
            </div>
            <div className="text-[var(--color-terracotta)] font-bold">
              ${price || 188}/hr 起
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "The Zen Loft 環境真係好舒服，採光度十足，非常適合我哋搞瑜伽工作坊。設計簡約，令人好容易放鬆心情。",
      author: "Tiffany Wong",
      role: "專業瑜伽導師"
    },
    {
      text: "生日 Party 搵到位喇！Midnight Lounge 嘅音響設備真係一流，加上員工服務周到，成個慶祝過程都好流暢。",
      author: "Kevin Lau",
      role: "資深內容創作者"
    },
    {
      text: "我哋公司喺 Garden Room 搞咗個 Team Workshop，環境完全唔似開緊會，反而似係喺大自然入面輕鬆交流。",
      author: "Rachel Ho",
      role: "創意總監"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div id="reviews" className="relative max-w-4xl mx-auto px-12 py-20 bg-[var(--color-cream)] rounded-[4rem] border border-[var(--color-sand)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[var(--color-terracotta)] text-[var(--color-terracotta)]" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed text-[var(--color-espresso)]">
            "{testimonials[current].text}"
          </blockquote>
          <p className="font-bold text-sm uppercase tracking-widest text-[var(--color-terracotta)]">{testimonials[current].author}</p>
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-espresso)] opacity-50 mt-1">{testimonials[current].role}</p>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className="absolute left-10 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors">
        <ArrowLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-10 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[var(--color-sand)] transition-colors">
        <ArrowRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-[var(--color-terracotta)] w-6' : 'bg-[var(--color-sand)]'}`}
          />
        ))}
      </div>
    </div>
  );
};

// Add ArrowLeft icon that was missing in previous imports but used here
import { ArrowLeft } from 'lucide-react';

const Home = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedLocation, setSelectedLocation] = useState('全部地區');

  const districts = ['全部地區', '旺角', '牛頭角', '荃灣', '葵興'];

  const filteredRooms = selectedLocation === '全部地區' 
    ? rooms 
    : rooms.filter(room => room.location === selectedLocation);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center py-20 px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-[var(--color-terracotta)]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--color-sage)]">您的都市世外桃源</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-[var(--color-espresso)]">
              Enjoy Your <br />
              <span className="italic text-[var(--color-terracotta)] underline decoration-1 underline-offset-8">Party</span> Time
            </h2>
            <p className="text-lg text-[var(--color-espresso)]/80 mb-10 max-w-lg leading-relaxed">
              8 間精心設計的專屬埸地，朋友聚會、生日派對、公司活動，一個地方全部搞掂！
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--color-espresso)] text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[var(--color-terracotta)] hover:scale-105 transition-all shadow-lg flex items-center gap-3 group"
              >
                探索空間
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-sand)] overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 50}/100`} alt="user" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[var(--color-espresso)] uppercase tracking-wider">
                  <span className="font-bold">500+</span> 顧客好評
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] lg:aspect-square"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-terracotta)]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--color-sage)]/10 rounded-full blur-3xl" />
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AA5AbUCoY69JG68XyW6CwTDGrcMkH4ZFxrniRsbpoW48NEs4xG04LOfSKF_iw3qjEDWYBeLrEjG_Elda0xKFKz1_ll3vKGmLUm8dFEeg_Voj70RaEnE2vvbg8s1hhfj8pXfu2xThUrkht2fb1lH-OPraPh0JlM0BplAp9EuoaCfA5ytujbJQZds_hy0vWI-kowi1wJv7fwhq7jHRFzvDF-ulJzattApXujVzXUfZFd4=w1280" 
              alt="Zen Party Room" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-[var(--color-cream)] p-6 rounded-3xl shadow-xl z-20 max-w-[200px] border border-[var(--color-sand)]">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-terracotta)]">
                <Sparkles size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">尊貴設施</span>
              </div>
              <p className="text-xs text-[var(--color-espresso)]/70 leading-tight">專業音響設備與精心策劃的美學設計，為每位場主而設。</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 px-6 bg-[var(--color-cream)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 italic">聚會的藝術</h2>
            <p className="text-[var(--color-espresso)]/50 uppercase tracking-[0.2em] text-[10px]">您的空間、您的慶祝、我們的集體回憶</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter end={8} label="獨特空間" />
            <StatCounter end={1200} label="聚會場數" prefix="" />
            <StatCounter end={4} label="香港分店區域" prefix="" />
            <StatCounter end={50} prefix="" label="佈置選項" />
          </div>
          
          <div className="mt-24 grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="group space-y-4 px-6 transition-all duration-300">
              <div className="inline-block p-4 rounded-full bg-[var(--color-sand)] text-[var(--color-terracotta)] group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-serif">靈活租借時間</h3>
              <p className="text-sm text-[var(--color-espresso)]/70 leading-relaxed">可按小時或全日租用。我們的空間能靈活配合您的日程。</p>
            </div>
            <div className="group space-y-4 px-6 transition-all duration-300">
              <div className="inline-block p-4 rounded-full bg-[var(--color-sand)] text-[var(--color-terracotta)] group-hover:scale-110 transition-transform">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-serif">價錢全包任飲</h3>
              <p className="text-sm text-[var(--color-espresso)]/70 leading-relaxed">指定收費已包含過百款飲品任飲，讓您無憂享受聚會時光。</p>
            </div>
            <div className="group space-y-4 px-6 transition-all duration-300">
              <div className="inline-block p-4 rounded-full bg-[var(--color-sand)] text-[var(--color-terracotta)] group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-serif">私人進出空間</h3>
              <p className="text-sm text-[var(--color-espresso)]/70 leading-relaxed">採用智能門鎖，保障您和親友的私人聚會空間。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section id="spaces" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[var(--color-terracotta)] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">精選空間</span>
              <h2 className="text-5xl font-serif">我們的 8 個分店位置</h2>
            </div>
            <div id="pricing" className="space-y-4">
              <p className="text-sm uppercase tracking-widest font-bold border-b border-[var(--color-terracotta)] pb-2 inline-block">選擇地區</p>
              <div className="flex flex-wrap gap-2">
                {districts.map(district => (
                  <button 
                    key={district}
                    onClick={() => setSelectedLocation(district)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${selectedLocation === district ? 'bg-[var(--color-espresso)] text-white' : 'hover:border-[var(--color-terracotta)] text-[var(--color-espresso)]'}`}
                  >
                    {district}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredRooms.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <RoomCard id={p.id} title={p.title} capacity={p.capacity} theme={p.location} price={p.price} image={p.mainImage || `https://picsum.photos/seed/${p.img}/800/1000`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 text-center">
            <button className="text-sm uppercase tracking-widest font-bold border-b-2 border-[var(--color-espresso)] pb-1 hover:text-[var(--color-terracotta)] hover:border-[var(--color-terracotta)] transition-all">
              查看所有空間與設施
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-24 px-6 lg:px-12 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ rotate: -5, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                className="relative z-10 w-full aspect-square bg-[var(--color-sand)] rounded-[3rem] overflow-hidden rotate-2"
              >
                <img 
                  src="https://picsum.photos/seed/party-room-featured/1000/1000" 
                  alt="Featured Space" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -inset-4 border border-[var(--color-terracotta)]/20 rounded-[3rem] -rotate-3 z-0" />
              
              <div className="absolute -bottom-10 -right-10 bg-[var(--color-terracotta)] text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center z-20 animate-pulse">
                <span className="text-xs uppercase tracking-widest mb-1 font-bold">New Addition</span>
                <span className="text-2xl font-serif leading-[1.1]">The Bamboo Atelier</span>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-[var(--color-terracotta)] font-bold uppercase tracking-[0.4em] text-xs">BaChino 獨特體驗</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-[var(--color-espresso)]">精心設計主題， <br /> 創造 <span className="italic">無限可能</span></h2>
              <p className="text-lg text-[var(--color-espresso)]/80 leading-relaxed font-light">
                每一個 BaChino 空間都唔單止係一個場地，更加係一個俾大家發揮創意嘅平台。由專業攝影燈光到復古遊戲機，我哋為您提供說故事嘅工具。
              </p>
              <div className="grid grid-cols-2 gap-6 pb-4">
                {[
                  { icon: Music, label: '高傳真音響' },
                  { icon: Tv, label: '4K 投影設備' },
                  { icon: Camera, label: '專業影棚器材' },
                  { icon: Gamepad2, label: '懷舊遊戲機' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-terracotta)]/10 flex items-center justify-center text-[var(--color-terracotta)]">
                      <item.icon size={20} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">{item.label}</span>
                  </div>
                ))}
              </div>
              <button className="bg-[var(--color-espresso)] text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[var(--color-terracotta)] transition-all shadow-xl">
                探索更多設施
              </button>
            </div>
          </div>

          <div className="mt-32">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-serif mb-8 leading-tight text-[var(--color-espresso)]">即刻預約 <br /> <span className="italic text-[var(--color-terracotta)]">您的專屬聚會</span></h2>
              <p className="text-[var(--color-espresso)]/70 mb-12 text-lg max-w-md">
                需要預約多個空間或有特別要求？請填寫表格，我們的場主會為您製作專屬方案。
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start group cursor-pointer">
                  <div className="p-4 bg-[var(--color-cream)] border border-[var(--color-sand)] rounded-2xl group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-terracotta)] mb-1">電郵聯絡</p>
                    <p className="font-serif text-xl border-b border-[var(--color-sand)] pb-1">hello@theescapecollective.hk</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group cursor-pointer">
                  <div className="p-4 bg-[var(--color-cream)] border border-[var(--color-sand)] rounded-2xl group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-terracotta)] mb-1">預約熱線</p>
                    <p className="font-serif text-xl border-b border-[var(--color-sand)] pb-1">+852 2345 6789</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group cursor-pointer">
                  <div className="p-4 bg-[var(--color-cream)] border border-[var(--color-sand)] rounded-2xl group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-terracotta)] mb-1">工作室地址</p>
                    <p className="font-serif text-xl border-b border-[var(--color-sand)] pb-1">觀塘創意中心 8A 室</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-[var(--color-sand)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-terracotta)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-espresso)]/60 ml-2">聯絡人真實姓名</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="陳大文"
                      className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-[var(--color-sand)] focus:border-[var(--color-terracotta)] focus:outline-none transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-espresso)]/60 ml-2">電郵地址</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="hello@escape.com"
                      className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-[var(--color-sand)] focus:border-[var(--color-terracotta)] focus:outline-none transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-espresso)]/60 ml-2">活動類型</label>
                  <select className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-[var(--color-sand)] focus:border-[var(--color-terracotta)] focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzRDM1MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[position:right_1.5rem_center] bg-[length:1rem] bg-no-repeat">
                    <option>生日派對</option>
                    <option>創意工作坊</option>
                    <option>專業商務聚會</option>
                    <option>攝影/影片拍攝</option>
                    <option>私人晚宴</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-espresso)]/60 ml-2">特別要求</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="話我哋聽您嘅活動需要..."
                    className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-[var(--color-sand)] focus:border-[var(--color-terracotta)] focus:outline-none transition-colors resize-none" 
                  />
                </div>
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-3
                    ${formStatus === 'success' ? 'bg-green-600 text-white' : 'bg-[var(--color-espresso)] text-white hover:bg-[var(--color-terracotta)]'}
                  `}
                >
                  {formStatus === 'idle' && <>查詢預約情況 <ArrowRight size={18} /></>}
                  {formStatus === 'submitting' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === 'success' && <>預約申請已發送 <Check size={18} /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
