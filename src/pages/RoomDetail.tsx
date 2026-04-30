import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users, MapPin, Calendar, Star, Info, Share2, Heart, Check } from 'lucide-react';
import { rooms } from '../data/rooms';
import { useEffect } from 'react';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find(r => r.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-sand)]">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">找不到房間</h1>
          <Link to="/" className="text-[var(--color-terracotta)] hover:underline">返回首頁</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-sand)] text-[var(--color-espresso)] pb-24">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/80 backdrop-blur-md border-b border-[var(--color-sand)] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[var(--color-terracotta)] transition-colors">
            <ArrowLeft size={18} />
            返回列表
          </Link>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-[var(--color-sand)] rounded-full transition-colors"><Share2 size={18} /></button>
            <button className="p-2 hover:bg-[var(--color-sand)] rounded-full transition-colors text-[var(--color-terracotta)]"><Heart size={18} /></button>
          </div>
        </div>
      </nav>

      {/* Hero Gallery */}
      <section className="pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img src={room.mainImage || room.detailedImages[0]} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden md:block relative group overflow-hidden">
              <img src={room.detailedImages[1]} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden md:block md:row-span-2 relative group overflow-hidden">
              <img src={`https://picsum.photos/seed/${room.img}/800/1200`} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden md:block relative group overflow-hidden">
              <img src={room.detailedImages[2]} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mt-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)] rounded-full text-[10px] font-bold uppercase tracking-widest">{room.location}</span>
                <div className="flex items-center gap-1 text-[var(--color-terracotta)] text-xs font-bold">
                  <Star size={14} className="fill-current" />
                  <span>4.9 (120+ 評價)</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif mb-6">{room.title}</h1>
              <div className="flex flex-wrap gap-8 py-8 border-y border-[var(--color-sand)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-terracotta)] shadow-sm">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">容納人數</p>
                    <p className="font-bold">{room.capacity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-terracotta)] shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">地點</p>
                    <p className="font-bold">{room.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-terracotta)] shadow-sm">
                    <Info size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">場地類型</p>
                    <p className="font-bold">私人派對空間</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif italic">關於此空間</h3>
              <p className="text-lg leading-relaxed text-[var(--color-espresso)]/80 font-light">
                {room.description}
              </p>
              
              {/* Detailed Feature Sections */}
              {room.details && room.details.length > 0 && (
                <div className="pt-8 space-y-16">
                  {room.details.map((detail, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
                    >
                      <div className="flex-1 space-y-6">
                        <h4 className="text-2xl font-serif">{detail.title}</h4>
                        <div className="w-12 h-1 bg-[var(--color-terracotta)]/30" />
                        <p className="text-base text-[var(--color-espresso)]/70 leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-[var(--color-sand)]">
                          <img 
                            src={detail.image} 
                            alt={detail.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <p className="text-sm border-l-4 border-[var(--color-terracotta)] pl-6 py-2 italic text-[var(--color-espresso)]/60">
                本場所已完成深度消毒，客人進場前需配合量度體溫。我們致力為您提供一個安全、衛生的聚會環境。
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif italic">設施設備</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {room.amenities.map((item, i) => (
                  <div key={i} className="p-6 bg-[var(--color-cream)] rounded-[2rem] border border-[var(--color-sand)] shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-10 h-10 mb-4 rounded-xl bg-[var(--color-sand)] flex items-center justify-center text-[var(--color-terracotta)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[var(--color-cream)] p-8 rounded-[3.5rem] shadow-2xl border border-[var(--color-sand)] space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">時租價錢</p>
                  <p className="text-4xl font-serif">${room.price}<span className="text-sm font-sans italic opacity-60 ml-2">/hr</span></p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-[var(--color-terracotta)] text-xs font-bold">
                    <Star size={14} className="fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 bg-[var(--color-espresso)] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-terracotta)] transition-colors shadow-lg flex items-center justify-center gap-3">
                  <Calendar size={18} />
                  立即預約
                </button>
                <button className="w-full py-5 border-2 border-[var(--color-sand)] rounded-full font-bold uppercase tracking-widest text-sm hover:border-[var(--color-terracotta)] transition-colors">
                  聯絡場主
                </button>
              </div>

              <div className="pt-8 border-t border-[var(--color-sand)]">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-xs opacity-70">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <Check size={12} />
                    </div>
                    <span>可於 48 小時前免費取消</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs opacity-70">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <Check size={12} />
                    </div>
                    <span>不設清潔費，只需基本還原場地</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs opacity-70">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <Check size={12} />
                    </div>
                    <span>接受 PayMe / FPS / 信用卡付款</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
