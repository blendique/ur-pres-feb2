import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Users, MessageSquare, Search, ThumbsUp, Wallet, Database, BrainCircuit, MousePointerClick, TrendingUp, Bot, Repeat, Car, PlayCircle, ChevronLeft, ChevronRight, FileBarChart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// --- Helper: Browser Window Mockup ---
const BrowserWindow: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = "uremont.com" }) => (
  <div className="w-full h-full bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl flex flex-col border border-gray-700">
    {/* Browser Header */}
    <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-3 border-b border-gray-800">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="ml-4 flex-1 bg-[#1e293b] rounded-md h-7 flex items-center px-3 text-xs text-gray-400 font-mono border border-gray-700/50">
        <span className="text-gray-500 mr-2">🔒</span> https://{title}
      </div>
    </div>
    {/* Browser Content */}
    <div className="flex-1 bg-[#020617] overflow-hidden relative p-4 md:p-8 flex flex-col">
       <div className="w-full h-full bg-white rounded-lg border border-gray-800 overflow-hidden relative text-black">
          {children}
       </div>
    </div>
  </div>
);

// --- Slide 1: Welcome ---
export const WelcomeSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
           <span className="px-3 py-1 rounded-full border border-uremont-blue text-uremont-blue text-sm uppercase tracking-widest">
             Релиз 01'2026
           </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-white leading-tight"
        >
          UREMONT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-uremont-blue to-cyan-400">
            AI 2.0
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-3xl text-gray-400 font-light max-w-4xl">
          Глобальные изменения в продукте.
          <br />
          Улучшение пользовательского опыта и новый взгляд на УТП сервиса.
        </motion.p>
      </motion.div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-uremont-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
};

// --- Slide 2: Agenda ---
export const AgendaSlide: React.FC = () => {
  const points = [
    { id: 1, title: "Основа изменений", desc: "Проблемы старой версии" },
    { id: 2, title: "CustDev и цифры", desc: "Данные, на которых основаны решения" },
    { id: 3, title: "Новые решения", desc: "Переработанное УТП, новая база данных автомобилей и услуг, улучшенные AI алгоритмы" },
    { id: 4, title: "План доработок", desc: "Список запланированных работ на Q1 2026" },
    { id: 5, title: "Свободное обсуждение", desc: "Q&A сессия" },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">Содержание</h2>
        <div className="h-1 w-20 bg-uremont-blue rounded-full"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {points.map((point) => (
          <motion.div 
            key={point.id} 
            variants={itemVariants}
            className="group flex items-start gap-6 p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-uremont-blue/50 transition-all duration-300 cursor-default"
          >
            <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-uremont-blue/20 text-uremont-blue font-bold text-xl group-hover:bg-uremont-blue group-hover:text-white transition-colors">
              {point.id}
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-uremont-blue transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 font-light text-base group-hover:text-gray-300">
                {point.desc}
              </p>
            </div>
            <ArrowRight className="ml-auto text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Slide 3: Problems (Interactive) ---
export const ProblemSlide: React.FC = () => {
  const [activeProblem, setActiveProblem] = useState<number>(1);

  // Map hover index to image URL.
  // NOTE: Replace these placeholder URLs with your actual screenshot paths.
  const problemImages: Record<number, string> = {
    1: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Old+Landing+(Screen+1)', // Screenshot 1
    2: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Old+Landing+(Screen+1)', // Screenshot 1 (Same as 1)
    3: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Map+Interface+(Screen+2)', // Screenshot 2
    4: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Car+Database+(Screen+3)'  // Screenshot 3
  };

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
             <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / ПРОБЛЕМАТИКА</span>
             <h2 className="text-5xl font-bold mt-2 leading-tight">
               Точки роста <br />
               <span className="text-uremont-blue">предыдущей версии</span>
             </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
             {/* Problem 1 */}
             <div 
               className={`flex items-start gap-4 p-4 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 1 ? 'bg-white/10 border-red-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(1)}
             >
                <div className="min-w-[24px] pt-1"><MousePointerClick className={`${activeProblem === 1 ? 'text-red-500' : 'text-gray-500'} w-6 h-6 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Нет действия в один клик</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        С главной страницы нельзя было сразу рассчитать стоимость или записаться.
                    </p>
                </div>
             </div>
             {/* Problem 2 */}
             <div 
               className={`flex items-start gap-4 p-4 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 2 ? 'bg-white/10 border-orange-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(2)}
             >
                <div className="min-w-[24px] pt-1"><Zap className={`${activeProblem === 2 ? 'text-orange-500' : 'text-gray-500'} w-6 h-6 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Размытое УТП</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Ключевое предложение не цепляло глаз и не закрывало боль клиента.
                    </p>
                </div>
             </div>
             {/* Problem 3 */}
             <div 
               className={`flex items-start gap-4 p-4 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 3 ? 'bg-white/10 border-yellow-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(3)}
             >
                <div className="min-w-[24px] pt-1"><Search className={`${activeProblem === 3 ? 'text-yellow-500' : 'text-gray-500'} w-6 h-6 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Сложный поиск услуг</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Из 78 услуг в списке пользователи часто не находили нужную.
                    </p>
                </div>
             </div>
             {/* Problem 4 */}
             <div 
               className={`flex items-start gap-4 p-4 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 4 ? 'bg-white/10 border-blue-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(4)}
             >
                <div className="min-w-[24px] pt-1"><Database className={`${activeProblem === 4 ? 'text-blue-500' : 'text-gray-500'} w-6 h-6 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Ограниченная база авто</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Отсутствовали редкие или новые модели.
                    </p>
                </div>
             </div>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="h-[500px] w-full hidden lg:block"
        >
           <BrowserWindow title="uremont.com (v1.0)">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={problemImages[activeProblem]} 
                  alt={`Problem Screen ${activeProblem}`}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
              </div>
           </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 4: Data (CustDev) ---
export const DataSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-8"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">02 / CUSTDEV И ЦИФРЫ</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          В основе решений — <span className="text-uremont-blue">реальные боли</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {/* Stat 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-5xl font-bold text-red-500 mb-2">65.7%</div>
                <div className="text-lg font-medium text-white">Боятся навязывания лишних услуг</div>
             </div>
             <ShieldCheck className="text-gray-500 w-8 h-8" />
          </div>
          <div className="mt-4 text-sm text-gray-400">
             Самый частый страх клиентов перед обращением в новый сервис.
          </div>
        </motion.div>

        {/* Stat 2 */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-5xl font-bold text-uremont-blue mb-2">69.3%</div>
                <div className="text-lg font-medium text-white">Важно знать цену заранее</div>
             </div>
             <Wallet className="text-gray-500 w-8 h-8" />
          </div>
          <div className="mt-4 text-sm text-gray-400">
             Пользователи считают критически важным понимать рыночную стоимость до визита.
          </div>
        </motion.div>

        {/* Stat 3 */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-5xl font-bold text-uremont-accent mb-2">4.8+</div>
                <div className="text-lg font-medium text-white">Вызывает больше доверия, чем сертификаты</div>
             </div>
             <ThumbsUp className="text-gray-500 w-8 h-8" />
          </div>
          <div className="mt-4 text-sm text-gray-400">
             56.9% пользователей доверяют высокому рейтингу, и только 17.5% — сертификатам.
          </div>
        </motion.div>

         {/* Stat 4 */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-5xl font-bold text-purple-500 mb-2">68.6%</div>
                <div className="text-lg font-medium text-white">Предпочитают пошаговый сценарий</div>
             </div>
             <Search className="text-gray-500 w-8 h-8" />
          </div>
          <div className="mt-4 text-sm text-gray-400">
             Удобнее выбрать Марку → Модель → Проблему, чем писать в свободной форме.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 5: Solution 1 (Landing & USP) ---
export const SolutionSlide1: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // NOTE: Replace these with the actual screenshot URLs you have.
  const screenshots = [
    "https://placehold.co/800x600/2563EB/white?text=Landing+Variant+1",
    "https://placehold.co/800x600/10B981/white?text=Landing+Variant+2",
    "https://placehold.co/800x600/F59E0B/white?text=Landing+Variant+3",
    "https://placehold.co/800x600/EF4444/white?text=Landing+Variant+4"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % screenshots.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="h-full flex flex-col justify-center px-6 md:pl-12 md:pr-28">
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-8 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="order-2 md:order-1"
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #1</span>
           <h2 className="text-3xl font-bold mt-2 mb-4">Акцент на <br /><span className="text-uremont-blue">главном</span></h2>
           <div className="space-y-4">
             <div className="bg-white/5 p-3 rounded-lg border-l-2 border-uremont-blue">
               <h3 className="text-white font-semibold text-sm mb-1">Выделено УТП</h3>
               <p className="text-gray-400 text-xs">Полностью изменена структура лендинга, фокус на решении проблем пользователя.</p>
             </div>
             <div className="bg-white/5 p-3 rounded-lg border-l-2 border-uremont-accent">
               <h3 className="text-white font-semibold text-sm mb-1">Действие в 1 клик</h3>
               <p className="text-gray-400 text-xs">Добавлена возможность перейти на карту с активным действием. Всё внимание акцентировано вокруг него.</p>
             </div>
           </div>
        </motion.div>

        <div className="flex flex-col gap-4 order-1 md:order-2 w-full">
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7 }}
               className="h-[550px] w-full relative"
            >
              <BrowserWindow title="uremont.com/ab-test">
                 <div className="relative w-full h-full group">
                    <img 
                      src={screenshots[currentImage]} 
                      alt={`Landing Variant ${currentImage + 1}`}
                      className="w-full h-full object-cover object-top transition-all duration-500"
                    />
                    
                    {/* Controls */}
                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronLeft size={16} />
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {screenshots.map((_, idx) => (
                           <div 
                              key={idx} 
                              onClick={() => setCurrentImage(idx)}
                              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentImage === idx ? 'bg-white' : 'bg-white/50'}`} 
                           />
                        ))}
                    </div>
                 </div>
              </BrowserWindow>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-gray-400 font-mono"
            >
              4 варианта лендингов, основанные на CustDev. <br/>
              Подготовлены для A/B тестирования на трафике
            </motion.p>
        </div>
      </div>
    </div>
  );
};

// --- Slide 6: Solution 2 (Database & Services) ---
export const SolutionSlide2: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="order-2 md:order-1"
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #2</span>
           <h2 className="text-4xl font-bold mt-2 mb-6">Масштабирование <br /><span className="text-uremont-blue">базы данных</span></h2>
           
           <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl text-center flex flex-col items-center justify-center">
                 <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-lg">78</span>
                    <div className="text-4xl font-bold text-uremont-blue mb-1">400+</div>
                 </div>
                 <div className="text-xs text-gray-400">Услуг</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center flex flex-col items-center justify-center">
                 <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-lg">2023</span>
                    <div className="text-4xl font-bold text-uremont-accent mb-1">2025</div>
                 </div>
                 <div className="text-xs text-gray-400">Модельный год</div>
              </div>
           </div>

           <p className="text-lg text-gray-300 leading-relaxed mb-6">
             Мы полностью переработали справочники. Теперь пользователи могут найти любую специфическую услугу и выбрать автомобиль любой комплектации, включая новинки рынка.
           </p>
        </motion.div>

        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.7 }}
           className="h-[400px] w-full order-1 md:order-2"
        >
          <BrowserWindow title="uremont.com/catalog">
             <div className="p-6 flex flex-col gap-4 h-full text-white bg-[#020617]">
                <div className="w-full h-8 bg-gray-800 rounded flex items-center px-3 gap-2 border border-gray-700">
                   <Search className="w-4 h-4 text-gray-500" />
                   <div className="w-32 h-2 bg-gray-600 rounded"></div>
                </div>
                
                <div className="flex gap-2 overflow-hidden">
                   <div className="px-3 py-1 bg-uremont-blue/20 text-uremont-blue rounded-full text-[10px] border border-uremont-blue/50">Audi</div>
                   <div className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-[10px] border border-gray-700">BMW</div>
                   <div className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-[10px] border border-gray-700">Exeed</div>
                   <div className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-[10px] border border-gray-700">Tank</div>
                </div>

                <div className="flex-1 overflow-hidden grid grid-cols-2 gap-3 content-start">
                   {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-uremont-blue transition-colors">
                         <div className="w-8 h-8 bg-gray-700 rounded mb-2"></div>
                         <div className="w-3/4 h-2 bg-gray-600 rounded mb-1"></div>
                         <div className="w-1/2 h-2 bg-gray-700 rounded"></div>
                      </div>
                   ))}
                </div>
             </div>
          </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 7: Solution 3 (AI Algorithm) ---
export const SolutionSlide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="order-2 md:order-1"
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #3</span>
           <h2 className="text-4xl font-bold mt-2 mb-6">Доработки в <br /><span className="text-uremont-blue">алгоритм искусственного интеллекта</span></h2>
           <p className="text-xl text-gray-300 leading-relaxed mb-6">
             Обновили алгоритм сопоставления запросов пользователей и ИИ-ответа. <br/><br/>
             Система теперь понимает контекст и предлагает максимально релевантные решения.
           </p>
        </motion.div>

        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.7 }}
           className="h-[400px] w-full order-1 md:order-2"
        >
          <BrowserWindow title="uremont.com/ai-chat">
             <div className="p-6 flex flex-col h-full justify-between bg-[#020617] text-white">
                <div className="space-y-4">
                   {/* User Message */}
                   <div className="flex justify-end">
                      <div className="bg-uremont-blue px-4 py-2 rounded-2xl rounded-tr-none text-white text-sm max-w-[80%]">
                         Стук в двигателе при разгоне, Audi Q8 2024
                      </div>
                   </div>
                   
                   {/* Processing Animation */}
                   <div className="flex gap-2 items-center text-xs text-gray-500 my-2">
                      <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                      AI анализирует симптомы...
                   </div>

                   {/* AI Response */}
                   <div className="flex justify-start">
                      <div className="bg-gray-800 border border-purple-500/30 px-4 py-3 rounded-2xl rounded-tl-none text-gray-200 text-sm max-w-[90%] shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                         <div className="font-bold text-purple-400 mb-1 text-xs uppercase tracking-wider">Рекомендация</div>
                         Вероятно проблема с ТНВД или гидрокомпенсаторами. <br/>
                         Подобрал 3 профильных сервиса по VAG:
                         <div className="mt-2 space-y-1">
                            <div className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs">🛠 VAG-Expert (2.1 км)</div>
                            <div className="bg-gray-900/50 p-2 rounded border border-gray-700 text-xs">🛠 Audi-Center (5.4 км)</div>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="w-full h-10 bg-gray-800 rounded border border-gray-700 mt-4 flex items-center px-4 text-gray-500 text-sm">
                   Напишите сообщение...
                </div>
             </div>
          </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 8: Future Plans (PlanSlide) ---
export const PlanSlide: React.FC = () => {
  const plans = [
    {
       icon: TrendingUp,
       title: "Экспертное УТП",
       desc: "Доработка текстов и лендингов для помощи в принятии сложных решений без экспертизы у клиента."
    },
    {
       icon: Bot,
       title: "ИИ-автомеханик",
       desc: "Создание умного помощника, который поддерживает пользователя как друг-эксперт 24/7."
    },
    {
       icon: Repeat,
       title: "Retention & LTV",
       desc: "Внедрение подписочных и купонных механик для удержания клиентов."
    },
    {
       icon: Car,
       title: "Новые вертикали",
       desc: "Расширение в мойки, детейлинг и другие смежные услуги."
    },
    {
       icon: FileBarChart,
       title: "Data-driven Dev",
       desc: "Доработки по данным, полученным в ходе A/B тестирования и анализа воронки на трафике."
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-10"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">04 / ПЛАНЫ</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
           Планы по улучшениям на <span className="text-uremont-blue">Q1 2026</span>
        </h2>
      </motion.div>

      <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
         {plans.map((plan, i) => (
            <motion.div 
               key={i}
               variants={itemVariants}
               className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-uremont-blue hover:bg-white/10 transition-all flex items-start gap-6 group"
            >
               <div className="bg-uremont-blue/20 p-4 rounded-xl text-uremont-blue group-hover:bg-uremont-blue group-hover:text-white transition-colors shrink-0">
                  <plan.icon size={24} />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                     {plan.desc}
                  </p>
               </div>
            </motion.div>
         ))}
      </motion.div>
    </div>
  );
};

// --- Slide 9: Discussion (DiscussionSlide) ---
export const DiscussionSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-8"
        >
           <h2 className="text-5xl font-bold text-white mb-4">Свободное обсуждение</h2>
           <p className="text-xl text-gray-400">Готов ответить на ваши вопросы</p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="w-full max-w-4xl aspect-video"
        >
           <BrowserWindow title="uremont.com/demo">
              <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden group cursor-pointer">
                 {/* Video Placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                 <div className="relative z-10 flex flex-col items-center text-gray-500 group-hover:text-uremont-blue transition-colors">
                    <PlayCircle size={64} className="mb-4" />
                    <span className="font-mono text-sm uppercase tracking-widest">Демонстрация работы</span>
                 </div>
                 {/* Simulated Progress Bar */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                    <div className="w-1/3 h-full bg-uremont-blue"></div>
                 </div>
              </div>
           </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};