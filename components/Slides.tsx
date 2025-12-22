import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Users, MessageSquare, Search, ThumbsUp, Wallet, Database, BrainCircuit, MousePointerClick, TrendingUp, Bot, Repeat, Car, PlayCircle, ChevronLeft, ChevronRight, FileBarChart, Phone, Star, CheckCircle, Headphones, LayoutGrid, MapPin, Wrench, MessageCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
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
    <div className="bg-[#0f172a] px-4 py-2 flex items-center gap-3 border-b border-gray-800 shrink-0">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
      <div className="ml-4 flex-1 bg-[#1e293b] rounded-md h-6 flex items-center px-3 text-[10px] text-gray-400 font-mono border border-gray-700/50">
        <span className="text-gray-500 mr-2">🔒</span> https://{title}
      </div>
    </div>
    {/* Browser Content */}
    <div className="flex-1 bg-[#020617] overflow-hidden relative p-2 flex flex-col">
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
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
           <span className="px-3 py-1 rounded-full border border-uremont-blue text-uremont-blue text-xs md:text-sm uppercase tracking-widest">
             Релиз 01'2026
           </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-tight"
        >
          UREMONT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-uremont-blue to-cyan-400">
            AI 2.0
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 font-light max-w-4xl">
          Улучшение пользовательского опыта.
          <br />
          Новый взгляд на УТП.
        </motion.p>
      </motion.div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-uremont-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
};

// --- Slide 2: Agenda ---
export const AgendaSlide: React.FC = () => {
  const points = [
    { id: 1, title: "Основа изменений", desc: "Проблемы старой версии" },
    { id: 2, title: "CustDev и цифры", desc: "Данные, на которых основаны решения" },
    { id: 3, title: "Новые решения", desc: "Переработанное УТП, новая база данных, AI алгоритмы" },
    { id: 4, title: "План доработок", desc: "Список запланированных работ на Q1 2026" },
    { id: 5, title: "Свободное обсуждение", desc: "Q&A сессия" },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Содержание</h2>
        <div className="h-1 w-20 bg-uremont-blue rounded-full"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-4 lg:gap-5 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {points.map((point) => (
          <motion.div 
            key={point.id} 
            variants={itemVariants}
            className="group flex items-center gap-4 lg:gap-6 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-uremont-blue/50 transition-all duration-300 cursor-default"
          >
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-uremont-blue/20 text-uremont-blue font-bold text-lg group-hover:bg-uremont-blue group-hover:text-white transition-colors">
              {point.id}
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-0.5 group-hover:text-uremont-blue transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 font-light text-sm group-hover:text-gray-300">
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

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-8 lg:gap-12 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-4 lg:mb-6">
             <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / ПРОБЛЕМАТИКА</span>
             <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-tight">
               Точки роста <br />
               <span className="text-uremont-blue">предыдущей версии</span>
             </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
             {/* Problem 1 */}
             <div 
               className={`flex items-start gap-3 p-3 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 1 ? 'bg-white/10 border-red-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(1)}
             >
                <div className="min-w-[20px] pt-1"><MousePointerClick className={`${activeProblem === 1 ? 'text-red-500' : 'text-gray-500'} w-5 h-5 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-0.5 text-base lg:text-lg">Нет действия в один клик</h4>
                    <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                        Нельзя сразу рассчитать стоимость или записаться.
                    </p>
                </div>
             </div>
             {/* Problem 2 */}
             <div 
               className={`flex items-start gap-3 p-3 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 2 ? 'bg-white/10 border-orange-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(2)}
             >
                <div className="min-w-[20px] pt-1"><Zap className={`${activeProblem === 2 ? 'text-orange-500' : 'text-gray-500'} w-5 h-5 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-0.5 text-base lg:text-lg">Размытое УТП</h4>
                    <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                        Ключевое предложение не цепляло глаз и не закрывало боль клиента.
                    </p>
                </div>
             </div>
             {/* Problem 3 */}
             <div 
               className={`flex items-start gap-3 p-3 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 3 ? 'bg-white/10 border-yellow-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(3)}
             >
                <div className="min-w-[20px] pt-1"><Search className={`${activeProblem === 3 ? 'text-yellow-500' : 'text-gray-500'} w-5 h-5 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-0.5 text-base lg:text-lg">Сложный поиск услуг</h4>
                    <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                        Из 78 услуг в списке пользователи часто не находили нужную.
                    </p>
                </div>
             </div>
             {/* Problem 4 */}
             <div 
               className={`flex items-start gap-3 p-3 rounded-lg border-l-4 transition-all cursor-pointer ${activeProblem === 4 ? 'bg-white/10 border-blue-500' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
               onMouseEnter={() => setActiveProblem(4)}
             >
                <div className="min-w-[20px] pt-1"><Database className={`${activeProblem === 4 ? 'text-blue-500' : 'text-gray-500'} w-5 h-5 transition-colors`} /></div>
                <div>
                    <h4 className="font-bold text-white mb-0.5 text-base lg:text-lg">Ограниченная база авто</h4>
                    <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
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
           className="w-full aspect-[16/10] relative hidden lg:block"
        >
           <BrowserWindow title="uremont.com (v1.0)">
              <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/6.png" 
                  alt="Старый интерфейс лендинга"
                  className="w-full h-full object-cover"
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
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          В основе решений — <span className="text-uremont-blue">реальные боли</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl">
        {/* Stat 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-1">65.7%</div>
                <div className="text-base lg:text-lg font-medium text-white">Боятся навязывания услуг</div>
             </div>
             <ShieldCheck className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-xs lg:text-sm text-gray-400">
             Самый частый страх клиентов перед обращением в новый сервис, согласно проведенному опросу.
          </div>
        </motion.div>

        {/* Stat 2 */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-4xl lg:text-5xl font-bold text-uremont-blue mb-1">69.3%</div>
                <div className="text-base lg:text-lg font-medium text-white">Важно знать цену заранее</div>
             </div>
             <Wallet className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-xs lg:text-sm text-gray-400">
             Пользователи считают критически важным понимать рыночную стоимость до визита.
          </div>
        </motion.div>

        {/* Stat 3 */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-4xl lg:text-5xl font-bold text-uremont-accent mb-1">56.9%</div>
                <div className="text-base lg:text-lg font-medium text-white">Доверяют рейтингу больше</div>
             </div>
             <ThumbsUp className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-xs lg:text-sm text-gray-400">
             Пользователи в большей части доверяют рейтингу и живым отзывам на платформе, и только 17.5% — сертификатам.
          </div>
        </motion.div>

         {/* Stat 4 */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div>
                <div className="text-4xl lg:text-5xl font-bold text-purple-500 mb-1">68.6%</div>
                <div className="text-base lg:text-lg font-medium text-white">Нужен пошаговый сценарий</div>
             </div>
             <Search className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-xs lg:text-sm text-gray-400">
             Удобнее выбрать Марку → Модель из предоставленного списка, а проблему - описывать в свободной форме.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 5: Solution 1 (Landing & USP) ---
export const SolutionSlide1: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Mixed content from Public folder
  const content = [
    { type: 'video', src: 'https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/1.mp4' },
    { type: 'image', src: 'https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/2.jpg' },
    { type: 'image', src: 'https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/3.jpg' },
    { type: 'video', src: 'https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/4.mp4' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, 150000); // 15 seconds
    return () => clearInterval(timer);
  }, [content.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % content.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);

  const currentItem = content[currentIndex];

  return (
    <div className="h-full flex flex-col justify-center px-6 md:pl-12 md:pr-28">
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-6 lg:gap-10 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="order-2 md:order-1"
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #1</span>
           <h2 className="text-3xl font-bold mt-2 mb-4">Акцент на <br /><span className="text-uremont-blue">главном</span></h2>
           <div className="space-y-3">
             <div className="bg-white/5 p-3 rounded-lg border-l-2 border-uremont-blue">
               <h3 className="text-white font-semibold text-sm mb-1">Выделено УТП</h3>
               <p className="text-gray-400 text-xs">Переработана структура лендинга. <br />Фокус смещен на решение основного запроса пользователя.</p>
             </div>
             <div className="bg-white/5 p-3 rounded-lg border-l-2 border-uremont-accent">
               <h3 className="text-white font-semibold text-sm mb-1">Действие в 1 клик</h3>
               <p className="text-gray-400 text-xs">Добавлена возможность перейти на карту с активным действием. <br />Всё внимание акцентировано вокруг него.</p>
             </div>
             <div className="bg-white/5 p-3 rounded-lg border-l-2 border-purple-500">
               <h3 className="text-white font-semibold text-sm mb-1">AI-Ready Дизайн</h3>
               <p className="text-gray-400 text-xs">Минималистичный интерфейс, привычный пользователям современных нейросетей.</p>
             </div>
           </div>
        </motion.div>

        <div className="flex flex-col gap-4 order-1 md:order-2 w-full">
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7 }}
               className="w-full aspect-[16/10] relative"
            >
              <BrowserWindow title="uremont.com/ab-test">
                 <div className="relative w-full h-full group bg-black">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {currentItem.type === 'image' ? (
                                <img 
                                  src={currentItem.src} 
                                  alt={`Slide ${currentIndex + 1}`}
                                  className="w-full h-full object-cover"
                                />
                            ) : (
                                <video
                                  src={currentItem.src}
                                  autoPlay
                                  muted
                                  playsInline
                                  loop // Loop video in case it's shorter than 10s
                                  className="w-full h-full object-cover"
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Controls */}
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <ChevronLeft size={16} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <ChevronRight size={16} />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {content.map((_, idx) => (
                           <div 
                              key={idx} 
                              onClick={() => setCurrentIndex(idx)}
                              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentIndex === idx ? 'bg-white' : 'bg-white/50'}`} 
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
              className="text-center text-xs lg:text-sm text-gray-400 font-mono"
            >
              4 варианта лендингов, основанные на CustDev.
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
       <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="max-w-4xl mx-auto text-center"
        >
           <motion.span variants={itemVariants} className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #2</motion.span>
           <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mt-2 mb-10">Масштабирование <br /><span className="text-uremont-blue">базы данных</span></motion.h2>
           
           <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
              <div className="bg-white/5 p-6 rounded-xl text-center flex flex-col items-center justify-center border border-white/10 hover:border-uremont-blue transition-colors">
                 <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-base">78</span>
                    <div className="text-5xl font-bold text-uremont-blue mb-1">400+</div>
                 </div>
                 <div className="text-sm text-gray-400 uppercase tracking-widest mt-2">Услуг</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl text-center flex flex-col items-center justify-center border border-white/10 hover:border-uremont-accent transition-colors">
                 <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-base">2023</span>
                    <div className="text-5xl font-bold text-uremont-accent mb-1">2025</div>
                 </div>
                 <div className="text-sm text-gray-400 uppercase tracking-widest mt-2">Модельный год</div>
              </div>
           </motion.div>

           <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed mx-auto max-w-2xl">
             Полностью переработанные справочники. Теперь пользователи могут найти любую специфическую услугу и выбрать автомобиль любой комплектации, включая новинки рынка.
           </motion.p>
        </motion.div>
    </div>
  );
};

// --- Slide 7: Solution 3 (AI Algorithm) ---
export const SolutionSlide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
           className="order-2 md:order-1"
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #3</span>
           <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">Доработки алгоритма <br /><span className="text-uremont-blue">искусственного интеллекта</span></h2>
           <p className="text-lg text-gray-300 leading-relaxed mb-6">
             Обновили алгоритм сопоставления запросов пользователей и ИИ-ответа. Система теперь понимает контекст и предлагает максимально релевантные решения. В настоящее время алгоритм проходит дообучение, точность будет улучшаться в процессе использования.
           </p>
        </motion.div>

        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.7 }}
           className="w-full max-w-[700px] aspect-square mx-auto order-1 md:order-2"
        >
          <BrowserWindow title="uremont.com/ai-chat">
             <div className="w-full h-full bg-black overflow-hidden">
                <video
                   src="https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/5.mp4"
                   autoPlay
                   muted
                   loop
                   playsInline
                   className="w-full h-full object-cover"
                />
             </div>
          </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 8: Solution 4 (Customer Path & Quality) ---
export const SolutionSlide4: React.FC = () => {
  const [animStep, setAnimStep] = useState(0);

  // Cycle through 0 (Inputs) -> 1 (Map) -> 2 (Call) -> 3 (SMS) -> 4 (Reset)
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStep(prev => (prev + 1) % 5);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  const otherPins = [
      { top: '30%', left: '20%' },
      { top: '45%', left: '75%' },
      { top: '65%', left: '30%' },
      { top: '25%', left: '60%' },
      { top: '70%', left: '80%' }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           variants={containerVariants}
        >
           <span className="text-uremont-accent font-mono text-sm tracking-wider">РЕШЕНИЕ #4</span>
           <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">Новый <span className="text-uremont-blue">клиентский путь</span> и качество сервиса</h2>
           
           <div className="flex flex-col gap-3">
               <div className={`flex items-center gap-4 p-3 rounded-xl border transition-colors ${animStep === 3 ? 'bg-white/10 border-uremont-blue' : 'bg-white/5 border-white/10'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${animStep === 3 ? 'bg-uremont-blue text-white' : 'bg-green-500/20 text-green-500'}`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Звонок в 1 клик</h3>
                    <p className="text-xs text-gray-400">Минимизация шагов до контакта с сервисом</p>
                  </div>
               </div>
               <div className={`flex items-center gap-4 p-3 rounded-xl border transition-colors ${animStep === 2 ? 'bg-white/10 border-yellow-500' : 'bg-white/5 border-white/10'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${animStep === 2 ? 'bg-yellow-500 text-white' : 'bg-yellow-500/20 text-yellow-500'}`}>
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Стандарт качества</h3>
                    <p className="text-xs text-gray-400">Строгий отбор и регулярная проверка партнеров</p>
                  </div>
               </div>
               <div className={`flex items-center gap-4 p-3 rounded-xl border transition-colors ${animStep === 3 ? 'bg-white/10 border-purple-500' : 'bg-white/5 border-white/10'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${animStep === 3 ? 'bg-purple-500 text-white' : 'bg-purple-500/20 text-purple-500'}`}>
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Улучшения в процессах СП</h3>
                    <p className="text-xs text-gray-400">Переработанные скрипты, ускоренное взаимодействие с пользователем</p>
                  </div>
               </div>
           </div>
        </motion.div>

        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.7 }}
           className="relative flex justify-center items-center h-[40vh] min-h-[350px]"
        >
             {/* Phone Container */}
             <div className="w-[220px] h-[400px] lg:w-[260px] lg:h-[460px] bg-gray-900 rounded-[2rem] border-4 border-gray-700 overflow-hidden relative shadow-2xl flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-950 relative overflow-hidden">
                    
                    {/* Background Map Effect */}
                    <img 
                        src="https://placehold.co/300x600/111827/374151?text=Moscow+Map+Dark" 
                        alt="Map"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />

                    <AnimatePresence mode='wait'>
                        {/* Step 0 & 1: Form Input */}
                        {animStep <= 1 && (
                            <motion.div 
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col justify-center px-4 space-y-3 z-10 bg-gray-900/80 backdrop-blur-sm"
                            >
                                <motion.div 
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-gray-800 p-3 rounded-lg border border-gray-600 flex items-center gap-3"
                                >
                                    <Car size={16} className="text-uremont-blue" />
                                    <div className="text-xs text-white">Audi Q8, 2024</div>
                                </motion.div>
                                <motion.div 
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-gray-800 p-3 rounded-lg border border-gray-600 flex items-center gap-3"
                                >
                                    <Wrench size={16} className="text-uremont-accent" />
                                    <div className="text-xs text-white">Замена масла</div>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-uremont-blue text-white text-xs font-bold py-2 rounded-lg text-center mt-2"
                                >
                                    Найти сервисы
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Step 2: Map & Pin */}
                        {animStep === 2 && (
                            <motion.div 
                                key="map"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-10"
                            >
                                {/* Background Pins */}
                                {otherPins.map((pos, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 0.7, scale: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="absolute text-gray-500"
                                        style={{ top: pos.top, left: pos.left }}
                                    >
                                        <MapPin size={24} className="fill-current" />
                                    </motion.div>
                                ))}

                                {/* Main Active Pin */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                     <motion.div 
                                        initial={{ scale: 0, y: 20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
                                        className="relative"
                                     >
                                         <MapPin size={40} className="text-red-500 fill-current" />
                                         <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                                         >
                                            5 400 ₽
                                         </motion.div>
                                     </motion.div>
                                </div>
                                <motion.div 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-6 w-full px-4"
                                >
                                    <div className="bg-green-500 text-white text-xs font-bold py-2 rounded-lg text-center shadow-lg flex items-center justify-center gap-2">
                                        <Phone size={12} />
                                        Позвонить
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Step 3: SMS Success */}
                        {animStep >= 3 && (
                            <motion.div 
                                key="sms"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 z-10 bg-gray-900/90 backdrop-blur-sm flex flex-col pt-12 px-4"
                            >
                                <motion.div 
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring" }}
                                    className="bg-gray-800 rounded-2xl p-3 border border-gray-700 shadow-xl flex gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                        <MessageCircle size={16} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-bold text-white text-[10px]">UREMONT</span>
                                            <span className="text-[8px] text-gray-500">Сейчас</span>
                                        </div>
                                        <p className="text-[10px] text-gray-300 leading-tight">
                                            Вы записаны на сервис. <br/> Audi Q8, 14:00. Предварительная стоимость: 3.000 рублей.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-auto mb-8 text-center"
                                >
                                    <CheckCircle size={48} className="text-green-500 mx-auto mb-2" />
                                    <h3 className="text-white font-bold">Готово!</h3>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Finger Cursor Simulating Interaction */}
                    {animStep === 1 && (
                         <motion.div 
                            initial={{ x: 100, y: 100, opacity: 0 }}
                            animate={{ x: 40, y: 140, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute z-30"
                         >
                            <div className="w-8 h-8 bg-white/20 rounded-full border border-white/50 backdrop-blur-sm"></div>
                         </motion.div>
                    )}
                </div>
             </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 9: Future Plans (PlanSlide) ---
export const PlanSlide: React.FC = () => {
  const mainPlans = [
    {
       icon: TrendingUp,
       title: "Экспертное УТП",
       desc: "Доработка текстов и лендингов в сторону помощи в принятии решений."
    },
    {
       icon: Bot,
       title: "ИИ-автомеханик",
       desc: "Умный помощник, который помогает пользователю с автомобильными вопросами 24/7."
    },
    {
       icon: Repeat,
       title: "Retention & LTV",
       desc: "Проработка подписочных механик для удержания клиентов."
    },
    {
       icon: Car,
       title: "Новые вертикали",
       desc: "Расширение в мойки, детейлинг и смежные услуги."
    }
  ];

  const dataPlan = {
       icon: FileBarChart,
       title: "Data-driven Dev",
       desc: "Доработки по данным, полученным в ходе A/B тестирований и анализа воронки на трафике."
  };

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-6 lg:mb-10"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">04 / ПЛАНЫ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
           Планы по улучшениям на <span className="text-uremont-blue">Q1 2026</span>
        </h2>
      </motion.div>

      <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl h-auto"
      >
         {/* Left Column: 2x2 Grid */}
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {mainPlans.map((plan, i) => (
                <motion.div 
                   key={i}
                   variants={itemVariants}
                   className="bg-white/5 p-4 lg:p-6 rounded-2xl border border-white/10 hover:border-uremont-blue hover:bg-white/10 transition-all flex flex-col justify-between group min-h-[140px]"
                >
                   <div className="bg-uremont-blue/20 w-10 h-10 flex items-center justify-center rounded-xl text-uremont-blue group-hover:bg-uremont-blue group-hover:text-white transition-colors mb-3">
                      <plan.icon size={20} />
                   </div>
                   <div>
                      <h3 className="text-base lg:text-lg font-bold text-white mb-1">{plan.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                         {plan.desc}
                      </p>
                   </div>
                </motion.div>
            ))}
         </div>

         {/* Right Column: Big Highlighted Block */}
         <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 bg-gradient-to-br from-uremont-blue/20 to-uremont-dark border border-uremont-blue/50 p-6 lg:p-8 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[200px]"
         >
            <div className="absolute inset-0 bg-uremont-blue/10 blur-3xl group-hover:bg-uremont-blue/20 transition-colors" />
            
            <div className="relative z-10">
                <div className="bg-uremont-blue w-16 h-16 lg:w-20 lg:h-20 mx-auto flex items-center justify-center rounded-2xl text-white shadow-lg shadow-uremont-blue/30 mb-4 lg:mb-6 scale-100 group-hover:scale-110 transition-transform duration-500">
                    <dataPlan.icon size={32} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{dataPlan.title}</h3>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                   {dataPlan.desc}
                </p>
                <div className="mt-6 px-4 py-1 rounded-full border border-uremont-blue/50 text-uremont-blue text-[10px] font-mono">
                    ОСНОВА ИЗМЕНЕНИЙ
                </div>
            </div>
         </motion.div>
      </motion.div>
    </div>
  );
};

// --- Slide 10: Discussion (DiscussionSlide) ---
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
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Свободное обсуждение</h2>
           <p className="text-lg md:text-xl text-gray-400">Готов ответить на ваши вопросы</p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="w-full max-w-3xl aspect-video h-[40vh] min-h-[300px]"
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