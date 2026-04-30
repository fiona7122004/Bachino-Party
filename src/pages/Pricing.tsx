import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const priceImages = [
    'https://lh3.googleusercontent.com/sitesv/AA5AbUA9n4sNEVvxtOJFrIIjRsqLipFkS8ZRMlMhAVNBl8r6P2QQCIzSCnB-_XqcPSVOY3DG03_RU0Sm57TltHctUJ6R7bj22RSMMFzbDIaHP2ldXhap8hOZIXCk6awr5AEdGiy86kbg_Xi5bK9-XVWtttYp7mR1KLHPDS5FQdXtEnahqBIBqLZhwRT-TwJmT8xcNCmFTwoV9mkmJqV2IJQTa1hr5TvM3SiVzNkn=w1280',
    'https://lh3.googleusercontent.com/sitesv/AA5AbUCuGCEDiegia1XmnbC_pphvjRfK0UYXAb-VWf3FTSY4b8sYgALhYMyCJfxtI6pX_4YMZit6Kw-VW4fZLBSGslCm12my9POxcm2dmJ6rlXBIhuhEiVN-GJfxBgS4gcoWLwm-cmby8EiBpNlVEQfY2-a859I8O3OalS2RAQebo90KPiWPIH_tW6dYpKLJjiEWBhQsYGRxLRQvXMK_x4roWrhfrrDDdvAd8AZfc7w=w1280'
  ];

  return (
    <div className="min-h-screen bg-[var(--color-sand)] pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--color-espresso)] hover:text-[var(--color-terracotta)] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          返回前頁
        </motion.button>

        <div className="mb-20">
          <span className="text-[var(--color-terracotta)] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">收費詳情</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Price List</h1>
          <p className="text-lg text-[var(--color-espresso)]/70 max-w-2xl leading-relaxed">
            我們提供靈活的配套方案，無論是小型私人聚會還是大型企業活動，都能滿足您的預算與需求。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {priceImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 rounded-[2rem] shadow-xl border border-[var(--color-sand)]"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-square">
                <img 
                  src={img} 
                  alt={`Price List ${index + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[var(--color-espresso)] text-[var(--color-sand)] rounded-[4rem] text-center">
          <h2 className="text-3xl font-serif italic mb-6 text-white">準備好預約您的空間了嗎？</h2>
          <p className="text-sm uppercase tracking-widest opacity-60 mb-10">如有特別活動需求或大型包場，歡迎隨時與我們聯絡。</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#contact');
              }
            }}
            className="bg-[var(--color-terracotta)] text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl"
          >
            立即聯絡我們
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
