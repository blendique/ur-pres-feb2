import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Users, MessageSquare, Search, ThumbsUp, Wallet, Database, BrainCircuit, MousePointerClick, TrendingUp, Bot, Repeat, Car, PlayCircle, ChevronLeft, ChevronRight, FileBarChart, Phone, Star, CheckCircle, Headphones, LayoutGrid, MapPin, Wrench, MessageCircle, Percent, AlertCircle, FileCheck, PhoneCall, Timer, UserCheck, Building2, Map, Crosshair, ArrowDown, Activity, Clock, Coffee, MonitorCheck, MapPinned, LayoutDashboard, GripVertical, HelpCircle, FileText, Terminal, CreditCard, Calendar, QrCode, Filter, Send, MonitorPlay, Mic, RadioTower, Target, Navigation, Megaphone, X } from 'lucide-react';

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

// --- Slide 1: Funnel Results ---
export const FunnelResultsSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 lg:px-24">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mb-8">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / ИТОГИ ФЕВРАЛЯ</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-white">
          Оцифровка воронки и <span className="text-uremont-blue">результаты</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mb-6">
        <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="text-sm text-gray-400 mb-1">Бюджет (digital)</div>
          <div className="text-3xl lg:text-4xl font-bold text-white">402 696 <span className="text-uremont-accent text-xl">₽</span></div>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="text-sm text-gray-400 mb-1">Стоимость ИИ-запроса</div>
          <div className="text-3xl lg:text-4xl font-bold text-white">443 <span className="text-uremont-accent text-xl">₽</span></div>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="text-sm text-gray-400 mb-1">СТО на карте</div>
          <div className="text-3xl lg:text-4xl font-bold text-white">143 <span className="text-gray-500 text-xl font-normal">шт</span></div>
          <div className="text-xs text-green-400 mt-2 font-medium">+ подключено 8 новых</div>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="text-sm text-gray-400 mb-1">Средняя стоимость ремонта</div>
          <div className="text-3xl lg:text-4xl font-bold text-white">7 320 <span className="text-uremont-accent text-xl">₽</span></div>
          <div className="text-xs text-green-400 mt-2 font-medium">платит клиент в СТО</div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-[#0f172a] border border-uremont-blue/20 rounded-3xl p-6 lg:p-8 max-w-7xl shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-uremont-blue/10 to-transparent pointer-events-none"></div>
        <h3 className="text-lg font-bold text-uremont-blue uppercase tracking-widest mb-6 border-b border-uremont-blue/20 pb-4">Расчёт воронки</h3>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="text-center w-full lg:w-[18%] shrink-0">
            <div className="text-4xl lg:text-5xl font-black text-white mb-2">1 773</div>
            <div className="text-sm font-medium text-gray-300">Запросы ИИ (всего)</div>
            <div className="text-xs text-gray-400 mt-2 flex flex-col gap-1 border border-white/5 bg-black/20 p-2 rounded-lg">
              <div className="flex justify-between items-center gap-4"><span>Платные:</span> <span className="text-white font-bold">910</span></div>
              <div className="flex justify-between items-center gap-4"><span>Органика:</span> <span className="text-white font-bold">863</span></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full lg:w-[8%] shrink-0 lg:translate-y-4">
            <ArrowRight className="text-uremont-blue/50 hidden lg:block" size={32} />
            <ArrowDown className="text-uremont-blue/50 block lg:hidden my-2" size={24} />
            <div className="lg:absolute lg:-top-7 bg-uremont-blue/20 text-uremont-blue text-[10px] font-bold px-2 py-0.5 rounded-full border border-uremont-blue/30 whitespace-nowrap">
              CR 10%
            </div>
          </div>

          <div className="text-center bg-white/5 p-4 rounded-2xl border border-white/5 w-full lg:w-[42%] shrink-0 shadow-inner">
            <div className="text-4xl lg:text-5xl font-black text-white mb-2">173</div>
            <div className="text-sm font-medium text-gray-300 mb-3">Лиды (звонки 70% + 30% заявки)</div>
            <div className="flex xl:flex-row flex-col justify-center gap-2 xl:gap-4 text-[10px] lg:text-xs">
              <div className="bg-black/30 px-3 py-2 rounded-lg text-center flex-1 border border-white/5 whitespace-nowrap">
                <div className="text-gray-400">Звонки: <span className="text-white font-bold">120 шт.</span></div>
                <div className="text-gray-500 mt-1">CR в ремонт: <span className="font-bold text-gray-400">N/A</span></div>
              </div>
              <div className="bg-black/30 px-3 py-2 rounded-lg text-center flex-1 border border-white/5 whitespace-nowrap">
                <div className="text-gray-400">Заявки: <span className="text-white font-bold">53 шт.</span></div>
                <div className="text-green-400 mt-1">CR в ремонт: <span className="font-bold">38%</span></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full lg:w-[8%] shrink-0 lg:translate-y-4">
            <ArrowRight className="text-uremont-blue/50 hidden lg:block" size={32} />
            <ArrowDown className="text-uremont-blue/50 block lg:hidden my-2" size={24} />
            <div className="lg:absolute lg:-top-7 bg-uremont-blue/20 text-uremont-blue text-[10px] font-bold px-2 py-0.5 rounded-full border border-uremont-blue/30 whitespace-nowrap">
              CR 12%
            </div>
          </div>

          <div className="text-center w-full lg:w-[22%] shrink-0 lg:-translate-x-6">
            <div className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-uremont-blue drop-shadow-lg mb-2">20</div>
            <div className="text-sm font-bold text-white uppercase tracking-wider">Ремонты (итого)</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Slide 2: Detailed Call Funnel ---
export const CallFunnelSlide: React.FC = () => {
  const metrics: Array<{ label: string, value: string, sub?: string, icon: any, color: string, valueClass?: string, note?: string }> = [
    { label: "Всего звонков", value: "120", sub: " / 87 человек", icon: Phone, color: "text-white" },
    { label: "Дозвонились сразу", value: "99", sub: " / 83%", icon: CheckCircle, color: "text-green-400" },
    { label: "Переведено на ГЛ", value: "15", sub: " / 12%", icon: Headphones, color: "text-blue-400" },
    { label: "Потери", value: "6", valueClass: "text-red-500", sub: " / 5%", icon: AlertCircle, color: "text-red-500" },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 lg:px-24">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mb-10">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / ИТОГИ ФЕВРАЛЯ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
          Подробная воронка <span className="text-uremont-blue">по звонкам</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f172a] border border-white/5 p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <m.icon size={48} />
            </div>
            <div className={`text-[10px] lg:text-xs uppercase tracking-widest font-bold mb-4 ${m.color} opacity-80 min-h-[2rem]`}>{m.label}</div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <div className={`text-4xl lg:text-5xl font-black ${m.valueClass || 'text-white'}`}>{m.value}</div>
              {m.sub && <div className="text-gray-500 font-mono text-lg">{m.sub}</div>}
            </div>
            {m.note && <div className="text-xs text-gray-500 mt-2 font-mono">{m.note}</div>}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl w-fit"
      >
        <div className="text-uremont-blue font-bold mb-2 flex items-center gap-2">
          <Activity size={16} /> Эффективность Answer Rate
        </div>
        <p className="text-gray-400 text-sm">
          Answer Rate по СТО составил 83% — оставшийся объем звонков был переведен<br></br>на горячую линию для предотвращения упущенных обращений.
        </p>
      </motion.div>
    </div>
  );
};

// --- Slide 3: Detailed Request Funnel ---
export const RequestFunnelSlide: React.FC = () => {
  const metrics = [
    { label: "Всего заявок", value: "53", sub: "100%", icon: FileText, color: "text-white" },
    { label: "Взяли в работу (AR)", value: "32", sub: "60%", icon: UserCheck, color: "text-green-400" },
    { label: "Ремонт завершен (CR)", value: "20", sub: "38%", icon: Wrench, color: "text-uremont-blue", highlight: true },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 lg:px-24">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mb-10">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / ИТОГИ ФЕВРАЛЯ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
          Подробная воронка <span className="text-uremont-blue">по заявкам</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`p-8 rounded-3xl shadow-xl relative overflow-hidden group border transition-all ${m.highlight ? 'bg-uremont-blue/10 border-uremont-blue/30' : 'bg-[#0f172a] border-white/5 hover:border-white/10'
              }`}
          >
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${m.highlight ? 'text-uremont-blue' : ''}`}>
              <m.icon size={48} />
            </div>
            <div className={`text-[10px] lg:text-xs uppercase tracking-widest font-bold mb-4 ${m.color} opacity-80 min-h-[2rem]`}>{m.label}</div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <div className={`text-4xl lg:text-5xl font-black ${m.highlight ? 'text-uremont-blue' : 'text-white'}`}>{m.value}</div>
              {m.sub && <div className="text-gray-500 font-mono text-lg">{m.sub}</div>}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
      >
        <div className="p-5 bg-green-500/5 border border-green-500/20 rounded-2xl">
          <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
            <TrendingUp size={16} /> Высокий процент AR
          </div>
          <p className="text-gray-400 text-sm">СТО достаточно активно забирают заявки в работу.</p>
        </div>
        <div className="p-5 bg-uremont-blue/5 border border-uremont-blue/20 rounded-2xl">
          <div className="text-uremont-blue font-bold mb-2 flex items-center gap-2">
            <CheckCircle size={16} /> Высокий CR
          </div>
          <p className="text-gray-400 text-sm">Из заявки в итоговый ремонт подтверждает качество лидов.</p>
        </div>
      </motion.div>
    </div>
  );
};

// --- Slide 3: Agenda ---
interface AgendaSlideProps {
  onNavigate?: (index: number) => void;
}

export const AgendaSlide: React.FC<AgendaSlideProps> = ({ onNavigate }) => {
  const points = [
    { id: 1, title: "Результаты UREMONT AI 2.0", desc: "Ключевые метрики и показатели с момента релиза нового продукта", targetSlide: 1 },
    { id: 2, title: "Звонки -> Ремонты", desc: "Способ отслеживания ремонтов из звонков и обновление клиентского пути", targetSlide: 4 },
    { id: 3, title: "Программа лояльности", desc: "Статусы, скидки и преимущества клиентов", targetSlide: 6 },
    { id: 4, title: "Маркетинг-план", desc: "Спецпроект, выбранные каналы трафика и бюджетирование", targetSlide: 7 },
    { id: 5, title: "Таймлайн и бюджет", desc: "Детализация запуска и финансовые показатели", targetSlide: 8 },
    { id: 6, title: "Свободное обсуждение", desc: "Q&A сессия по результатам презентации", targetSlide: 13 },
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
            onClick={() => onNavigate && onNavigate(point.targetSlide)}
            className="group flex items-center gap-4 lg:gap-6 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-uremont-blue/50 transition-all duration-300 cursor-pointer active:scale-[0.99]"
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
            <ArrowRight className="ml-auto text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Slide 3: Results (Feb 2026) ---
export const ResultsSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-8"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">01 / РЕЗУЛЬТАТЫ ФЕВРАЛЯ 2026</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Ключевые метрики <span className="text-uremont-blue">продукта и продаж</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl">
        {/* Stat 1: Requests & Jan Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-uremont-blue mb-1">53 <span className="text-xl text-gray-400">заявки</span></div>
              <div className="text-sm lg:text-base font-medium text-white mt-2">СТО. Всего 143 на карте</div>
            </div>
            <FileText className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-4 p-3 bg-uremont-blue/10 border border-uremont-blue/20 rounded-lg">
            <div className="text-xs text-uremont-blue uppercase tracking-wider mb-1 font-semibold">Сравнение с Январем</div>
            <div className="text-sm text-white flex items-center gap-2">
              <TrendingUp size={16} className="text-green-400" />
              Рост заявок в 2.4 раза (было 22)
            </div>
          </div>
        </motion.div>

        {/* Stat 2: Dedicated Call Metrics block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500/10 to-transparent p-5 rounded-xl border border-purple-500/30 flex flex-col justify-between lg:col-span-2"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-2xl font-bold text-white">Разбор метрик звонков</div>
              <div className="text-sm text-gray-400">Ключевые показатели телефонии за период</div>
            </div>
            <PhoneCall className="text-purple-400 w-6 h-6 lg:w-8 lg:h-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
            <div className="bg-black/20 p-3 rounded-lg border border-white/5">
              <div className="text-xs text-gray-500 mb-1">Всего звонков</div>
              <div className="text-2xl font-bold text-white">120</div>
            </div>
            <div className="bg-black/20 p-3 rounded-lg border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-500/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="text-xs text-gray-500 mb-1 relative z-10">AR (Answer Rate)</div>
              <div className="text-2xl font-bold text-yellow-400 relative z-10">60% <span className="text-sm text-gray-500 font-normal">(32)</span></div>
            </div>
            <div className="bg-black/20 p-3 rounded-lg border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="text-xs text-gray-500 mb-1 relative z-10">CR (Conversion Rate)</div>
              <div className="text-2xl font-bold text-green-400 relative z-10">38% <span className="text-sm text-gray-500 font-normal">(20)</span></div>
            </div>
            <div className="bg-black/20 p-3 rounded-lg border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-uremont-blue/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="text-xs text-gray-500 mb-1 relative z-10 whitespace-nowrap">Успешные звонки</div>
              <div className="text-2xl font-bold text-uremont-blue relative z-10">98%</div>
            </div>
          </div>
        </motion.div>

        {/* Stat 3: Product CR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-uremont-accent mb-1">9.4%</div>
              <div className="text-base lg:text-lg font-medium text-white">CR ИИ → Действие</div>
            </div>
            <BrainCircuit className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-xs lg:text-sm text-gray-400 font-mono">
            CR Лендинг → Карта: 4.8%. <br />Корректное ИИ-распознавание: 92.4%.
          </div>
        </motion.div>

        {/* Stat 4: Feedback */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between lg:col-span-2"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">5.0</div>
              <div className="text-base lg:text-lg font-medium text-white">Средняя оценка по отзывам клиентов</div>
            </div>
            <Star className="text-gray-500 w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <div className="mt-3 text-sm text-gray-400">
            Собрано 7 отзывов. Высокий уровень удовлетворенности текущим продуктом. Решение проблемы 70/30 (перекос в звонки, которые не коллектятся) в процессе.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Slide 4: Solution (Call -> Repair) ---
export const SolutionSlide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Map,
      title: "1. Гостевая карта",
      desc: "На карте рядом с СТО изначально видны только «проценты» скидки и информация о том, что скидку можно получить, пройдя регистрацию.",
      image: "https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/sk1.png",
      imageAspect: "1/1"
    },
    {
      icon: PhoneCall,
      title: "2. Бесшовная регистрация",
      desc: "Клиент может пройти регистрацию прямо из карточки СТО, введя номер телефона.",
      image: "https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/sk2.png",
      imageAspect: "1/1"
    },
    {
      icon: Percent,
      title: "3. Скидка и выбор СТО",
      desc: "После регистрации, на карте видны все СТО, у которых есть скидка. СТО устанавливает скидку на запчасти, работы или чек целиком.",
      image: "https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/sk3.png",
      imageAspect: "1/1"
    },
    {
      icon: QrCode,
      title: "4. Клиенту — PDF с QR",
      desc: "Отправляется по SMS или в ЛК, клиент показывает QR при приемке.",
      image: "https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/naprav.png",
      imageAspect: "642/995"
    },
    {
      icon: MonitorCheck,
      title: "5. СТО берет в работу",
      desc: "У СТО есть возможность ручного доступа к заявке в своем кабинете, но сканирование QR также напрямую ведет в нужный раздел.",
      image: "https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/sk4.png",
      imageAspect: "1/1"
    },
    {
      icon: Star,
      title: "6. История и BigData",
      desc: "Ремонт остается в истории ремонтов в личном кабинете пользователя, а также отправляется в BigData для аналитики и персонализации.",
      image: null,
      imageAspect: "1/1"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-8"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">02 / ОТСЛЕЖИВАНИЕ РЕМОНТОВ ИЗ ЗВОНКОВ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Новый путь <span className="text-uremont-blue">обработки клиента</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 max-w-7xl items-center">
        {/* Left Column: Path Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative"
        >
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-0 md:before:translate-x-5 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative flex items-center justify-normal group cursor-pointer transition-all duration-300 ${isActive ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border shrink-0 z-10 shadow-md transition-colors duration-300 ${isActive ? 'bg-uremont-blue border-uremont-blue text-white' : 'border-white/20 bg-[#0f172a] text-gray-400 group-hover:bg-uremont-blue/50 group-hover:text-white'}`}>
                    <Icon size={18} />
                  </div>
                  <div className={`ml-6 w-full bg-white/5 border p-3 rounded-xl shadow transition-colors duration-300 ${isActive ? 'border-uremont-blue/50 bg-white/10' : 'border-white/10 group-hover:border-white/20'}`}>
                    <h3 className={`font-bold text-sm mb-0.5 transition-colors duration-300 ${isActive ? 'text-uremont-blue' : 'text-white'}`}>{step.title}</h3>
                    <p className="text-xs text-gray-400 leading-snug">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Column: Interactive Image Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <AnimatePresence mode="popLayout">
            {steps[activeStep]?.image ? (
              <motion.div
                key={`img-${activeStep}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={steps[activeStep].image!}
                  alt={steps[activeStep].title}
                  style={{
                    maxHeight: '65vh',
                    width: 'auto',
                    aspectRatio: steps[activeStep].imageAspect,
                    objectFit: 'contain'
                  }}
                  className="rounded-2xl border border-white/10 shadow-2xl"
                />
              </motion.div>
            ) : (
              <motion.div
                key={`text-${activeStep}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center items-center p-8 shadow-2xl"
              >
                <div className="text-gray-500 mb-6 opacity-40">
                  {React.createElement(steps[activeStep].icon, { size: 64 })}
                </div>
                <p className="text-gray-400 text-center leading-relaxed">{steps[activeStep].desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

// --- Slide 6: Customer Process Part 2 ---
export const CustomerProcessSlide2: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-8"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">03 / ПРОЦЕСС СО СТОРОНЫ КЛИЕНТА</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Направление на ремонт и <span className="text-uremont-blue">личный кабинет</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl">
        {/* Step 4: PDF Draft */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Направление на ремонт (PDF)</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Единый цифровой документ, который клиент может открыть по ссылке из SMS или в ЛК. Предъявляется на приемке в СТО.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <CheckCircle size={16} className="text-green-500 shrink-0" /> Запрос ИИ, авто и список работ
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <CheckCircle size={16} className="text-green-500 shrink-0" /> Выбранное СТО и стоимость
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <CheckCircle size={16} className="text-green-500 shrink-0" /> Итоговый размер скидки
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <CheckCircle size={16} className="text-green-500 shrink-0" /> QR-код для СТО
            </li>
          </ul>
        </motion.div>

        {/* Step 5: LK History */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center">
              <LayoutGrid size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">История ремонтов в ЛК</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Вся история обслуживания (направления и заказ-наряды от автосервисов) хранится в личном кабинете клиента, обеспечивая прозрачность, удобство и мотивирует возвращаться
          </p>
          <div className="mb-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex items-center gap-3">
              <Star className="text-yellow-500 shrink-0" size={20} />
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Рост лояльности</div>
                <div className="text-sm font-bold text-white">Ремонты учитываются для повышения статуса</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};



// --- Slide 8: Loyalty Program ---
export const LoyaltyProgramSlide: React.FC = () => {
  const statuses = [
    {
      name: "Гость",
      discount: "1%",
      color: "text-gray-400",
      bg: "bg-gray-400/10",
      border: "border-gray-400/20",
      req: "Нет аккаунта",
      prefs: [{ text: "Бонусы отсутствуют" }],
      icon: UserCheck
    },
    {
      name: "Серебряный ключ",
      discount: "5%",
      color: "text-gray-300",
      bg: "bg-gray-300/10",
      border: "border-gray-300/20",
      req: "Регистрация на платформе",
      prefs: [
        { text: "Скидка до 5% на работы" },
        { text: "Скидка на КАСКО 10%" },
        { text: "Приоритетная поддержка" }
      ],
      icon: FileCheck
    },
    {
      name: "Золотой ключ",
      discount: "7%",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
      req: "Ремонт или ОСАГО / 365 дней",
      prefs: [
        { text: "Скидка до 7% на работы" },
        { text: "Скидка на КАСКО 15%" },
        { text: "Бесплатный отчёт Автотеки" },
        { text: "Приоритетная поддержка" }
      ],
      icon: Star
    },
    {
      name: "Платиновый ключ",
      discount: "10%",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
      req: "4 ремонта или КАСКО / 365 дней",
      prefs: [
        { text: "Скидка до 10% на работы" },
        { text: "Скидка 20% на КАСКО" },
        { text: "Скидка на хранение шин", isDraft: true },
        { text: "Бесплатный отчёт Автотеки", isDraft: true },
        { text: "Бесплатный эвакуатор (1 в год)", isDraft: true },
        { text: "Бесплатная юр. консультация (1 в год)", isDraft: true },
        { text: "Бесплатные мойки у партнеров (2 в год)", isDraft: true },
        { text: "Приоритетная поддержка", isDraft: true }
      ],
      icon: Target
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-8 text-center"
      >
        <span className="text-uremont-accent font-mono text-sm tracking-wider">04 / ПРОГРАММА ЛОЯЛЬНОСТИ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Уровни статуса и <span className="text-uremont-blue">привилегии</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full max-w-[1440px] mx-auto items-stretch mt-4">
        {statuses.map((status, index) => {
          const Icon = status.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col p-6 rounded-2xl border ${status.border} ${status.bg} hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden h-full`}
            >
              {index === 3 && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-400/0 via-purple-400 to-purple-400/0"></div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 shrink-0 rounded-xl bg-black/30 flex items-center justify-center ${status.color} border border-white/5`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 line-clamp-2 md:line-clamp-1 leading-tight mb-1">{status.req}</div>
                  <div className={`font-bold text-lg md:text-xl leading-none ${index === 3 ? status.color : 'text-white'}`}>{status.name}</div>
                </div>
              </div>

              <div className={`text-5xl font-bold ${status.color} mb-8`}>{index === 0 ? '0%' : status.discount}</div>

              <div className="flex flex-col gap-3 mt-auto">
                {status.prefs.map((pref: any, i: number) => (
                  <div key={i} className={`flex items-start gap-2 text-[13px] leading-tight whitespace-nowrap ${pref.isDraft ? 'text-red-400/90 italic' : 'text-gray-300'}`}>
                    <CheckCircle className={`w-[16px] h-[16px] shrink-0 mt-0.5 ${index === 0 ? 'text-gray-600' : (pref.isDraft ? 'text-red-400/50' : status.color)}`} />
                    <span>{pref.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};



// --- Marketing Slide 1: Problem and Goal ---
export const MarketingProblemSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-8">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / МАРКЕТИНГ ПЛАН</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">
          Проблема и <span className="text-uremont-blue">цель</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-red-500/10 p-8 rounded-3xl border border-red-500/20">
          <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center mb-6"><AlertCircle size={28} /></div>
          <h3 className="text-2xl font-bold text-white mb-4">Проблема</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-lg text-gray-300">
              <div className="bg-red-500/20 text-red-500 p-1 rounded-full shrink-0 mt-0.5"><X size={16} strokeWidth={3} /></div>
              <span>Низкая узнаваемость у аудитории платформы за исключением старой базы</span>
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-300">
              <div className="bg-red-500/20 text-red-500 p-1 rounded-full shrink-0"><X size={16} strokeWidth={3} /></div>
              <span>Маленькое количество входного трафика</span>
            </li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-uremont-blue/10 p-8 rounded-3xl border border-uremont-blue/20">
          <div className="w-14 h-14 bg-uremont-blue/20 text-uremont-blue rounded-2xl flex items-center justify-center mb-6"><Crosshair size={28} /></div>
          <h3 className="text-2xl font-bold text-white mb-4">Цель</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-lg text-gray-300"><CheckCircle className="text-uremont-blue shrink-0" size={20} /> Рост новых пользователей</li>
            <li className="flex items-center gap-3 text-lg text-gray-300"><CheckCircle className="text-uremont-blue shrink-0" size={20} /> Рост запросов в AI-ассистент</li>
            <li className="flex items-center gap-3 text-lg text-gray-300"><CheckCircle className="text-uremont-blue shrink-0" size={20} /> Рост записей в автосервис</li>
            <li className="flex items-center gap-3 text-lg text-gray-300"><CheckCircle className="text-uremont-blue shrink-0" size={20} /> Рост завершенных ремонтов и заказ-нарядов</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

// --- Marketing Slide 2: Promo 2000L ---
export const MarketingPromoSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-8">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / МАРКЕТИНГ ПЛАН</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Спецпроект: <span className="text-yellow-400">UREMONT Заправляет</span>
        </h2>
        <p className="text-xl text-gray-400 mt-2">Тонна топлива за добавление автомобиля в гараж</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
          <div className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-2xl flex items-center justify-center mb-6"><Zap size={32} /></div>
          <h3 className="text-2xl font-bold text-white mb-4">Суть проекта</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Выиграй тонну топлива за добавление своего автомобиля в цифровой гараж UREMONT
          </p>
          <div className="bg-black/30 p-4 rounded-xl border border-white/5">
            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Стратегия</h4>
            <p className="text-base text-gray-300">Форсируем людей знакомиться с продуктом, добавлять автомобиль в гараж; результат: увеличение базы с целью дальнейшего допушинга через коммуникации.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="relative bg-[#0f172a] rounded-3xl border border-yellow-500/30 overflow-hidden flex items-center justify-center min-h-[300px]">
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes animate-wave {
              0% { transform: translateX(0) translateZ(0) scaleY(1) }
              50% { transform: translateX(-25%) translateZ(0) scaleY(0.9) }
              100% { transform: translateX(-50%) translateZ(0) scaleY(1) }
            }
            @keyframes liquid-fill {
              0% { height: 60%; }
              100% { height: 100%; }
            }
            @keyframes animate-bubble {
              0% {
                transform: translateY(100%) scale(0.5);
                opacity: 0;
              }
              50% {
                opacity: 0.8;
              }
              100% {
                transform: translateY(-500%) scale(1.2);
                opacity: 0;
              }
            }
            .liquid-container {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 0 0 1.5rem 1.5rem;
              z-index: 1;
              overflow: hidden;
            }
            .water-wave {
              position: absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: 40px;
              min-width: 200%;
              animation: animate-wave 6s infinite linear;
              background-image: radial-gradient(circle at 50% -20%, transparent 40%, rgba(234, 179, 8, 0.15) 41%);
              background-size: 80px 40px;
              background-repeat: repeat-x;
            }
            .water-wave:nth-child(2) {
              animation: animate-wave 9s infinite linear;
              opacity: 0.5;
              left: -50%;
              top: 5px;
              background-image: radial-gradient(circle at 50% -20%, transparent 40%, rgba(202, 138, 4, 0.25) 41%);
            }
            
            /* Bubbles Configuration */
            .bubble {
              position: absolute;
              bottom: 0;
              background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2) 60%, transparent);
              border-radius: 50%;
              box-shadow: inset 0 0 10px rgba(255,255,255,0.5);
              animation: animate-bubble infinite ease-in;
            }
            
            .bubble:nth-child(1) { left: 10%; width: 20px; height: 20px; animation-duration: 4s; animation-delay: -1.5s; }
            .bubble:nth-child(2) { left: 25%; width: 12px; height: 12px; animation-duration: 3s; animation-delay: -0.8s; }
            .bubble:nth-child(3) { left: 45%; width: 25px; height: 25px; animation-duration: 5s; animation-delay: -2.2s; }
            .bubble:nth-child(4) { left: 60%; width: 15px; height: 15px; animation-duration: 4.5s; animation-delay: -3.1s; }
            .bubble:nth-child(5) { left: 75%; width: 18px; height: 18px; animation-duration: 3.5s; animation-delay: -0.5s; }
            .bubble:nth-child(6) { left: 85%; width: 10px; height: 10px; animation-duration: 2.5s; animation-delay: -1.2s; }
            .bubble:nth-child(7) { left: 5%; width: 22px; height: 22px; animation-duration: 4.2s; animation-delay: -3.0s; }
            .bubble:nth-child(8) { left: 95%; width: 14px; height: 14px; animation-duration: 3.8s; animation-delay: -2.5s; }
            .bubble:nth-child(9) { left: 35%; width: 16px; height: 16px; animation-duration: 3.2s; animation-delay: -0.9s; }
            .bubble:nth-child(10) { left: 55%; width: 30px; height: 30px; animation-duration: 6s; animation-delay: -4.5s; }
          `}} />

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDEwdjEwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20 z-0"></div>

          {/* Animated Liquid */}
          <div className="liquid-container bg-gradient-to-t from-yellow-500/40 to-yellow-400/20">
            {/* Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
              <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
              <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </div>

          <div className="text-center z-10 px-8 relative pointer-events-none">
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-lg mb-2">
              1000
            </div>
            <div className="text-2xl font-bold text-white tracking-widest uppercase">литров топлива</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


// --- Marketing Slide 4: Postcampaign ---
export const MarketingPostcampSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-8">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / МАРКЕТИНГ ПЛАН</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Конвертация аудитории в <span className="text-uremont-blue">ремонты</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 max-w-5xl">
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-6">
          <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
            <Filter size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">1. Сегментация аудитории</h3>
            <p className="text-gray-300 leading-relaxed mb-4">Наш подход исключает массовые и нецелевые рассылки. Данные каждого добавленного автомобиля проходят скоринг, после чего формируется персонализированное сервисное предложение:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm font-bold text-white mb-1">Старые авто (например BMW {'>'} 5 лет)</div>
                <div className="text-xs text-gray-400">Оффер: скидка на диагностику ходовой.</div>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-sm font-bold text-white mb-1">Новые авто (например Skoda {'<'} 3 лет)</div>
                <div className="text-xs text-gray-400">Оффер: выгодная замена масла или регулярный ТО.</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-6">
          <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center shrink-0">
            <Send size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">2. Умные рассылки</h3>
            <p className="text-gray-300 leading-relaxed">
              Настраиваем Push-уведомления, SMS и Email-рассылки на собранную базу для конвертации регистрации в реальный визит на СТО
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Marketing Slide 5: Channels Ecosystem ---
export const MarketingChannelsSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-8">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / МАРКЕТИНГ ПЛАН</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Каналы <span className="text-uremont-blue">продвижения</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <MonitorPlay className="text-blue-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">DOOH (Медиафасады)</h4>
          <p className="text-sm text-gray-400">1-3 точки. Съемка для вирусного перепоста в соцсети.</p>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <Mic className="text-orange-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">Радио реклама</h4>
          <p className="text-sm text-gray-400">Утренние и вечерние слоты (дорожный трафик).</p>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <RadioTower className="text-purple-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">Подкаст на радио</h4>
          <p className="text-sm text-gray-400">Широкие охваты, нарезка на Reels, подогрев органикой.</p>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <TrendingUp className="text-green-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">Digital & Media Performance</h4>
          <p className="text-sm text-gray-400">Яндекс.Карты, РСЯ, пиратские кинотеатры (широкий охват).</p>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <MessageCircle className="text-yellow-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">Social / PR</h4>
          <p className="text-sm text-gray-400">Точечные рекламные посевы в профильных Telegram-каналах.</p>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <Car className="text-gray-400 mb-4" size={32} />
          <h4 className="font-bold text-white text-lg mb-2">Indoor</h4>
          <p className="text-sm text-gray-400">Автомойки и заправки (если позволит бюджет).</p>
        </motion.div>
      </div>
    </div>
  );
};


// --- Marketing Slide 12: Forecast ---
export const MarketingForecastSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-4">
        <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / ПЛАН-ПРОГНОЗ ВОРОНКИ</span>
      </motion.div>

      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="w-full max-w-6xl overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] lg:text-xs xl:text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-gray-400 font-medium tracking-wide">
                <th className="p-2 border-r border-white/10">Параметр</th>
                <th className="p-2 text-center w-28 border-r border-white/10">Февраль (факт)</th>
                <th className="p-2 text-center w-28 border-r border-white/10">Март (план)</th>
                <th className="p-2 text-center w-28 border-r border-white/10">Апрель (план)</th>
                <th className="p-2 text-center w-28">Май (план)</th>
              </tr>
            </thead>
            <tbody>
              {/* === SECTION 1 === */}
              <tr className="bg-blue-900/40 border-y border-blue-500/30">
                <td colSpan={5} className="p-1.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-[10px] xl:text-xs">Вводные параметры (можно менять для сценариев)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Маркетинг: бюджет, ₽ (охваты, PR, SEO)</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">278 000₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">753 600₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">6 280 000₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">2 778 160₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Охват Медийный</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">-</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">1 200 000</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">4 374 248</td>
                <td className="p-1.5 text-center font-mono text-gray-400">3 674 248</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Клики</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">-</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">4 800</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">17 497</td>
                <td className="p-1.5 text-center font-mono text-gray-400">14 697</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Запросы ИИ охватные</td>
                <td className="p-1.5 text-center font-mono text-gray-500 border-r border-white/10">-</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">240</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">875</td>
                <td className="p-1.5 text-center font-mono text-gray-400">1 176</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Стоимость охватного запроса в ИИ</td>
                <td className="p-1.5 text-center font-mono text-gray-500 border-r border-white/10">-</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">3 140₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">7 178₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">2 363₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Маркетинг: бюджет, ₽ (digital)</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">402 696₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">450 000₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">550 000₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">550 000₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Стоимость запроса ИИ (₽/запрос)</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">443₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">443₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">443₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">420₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Органика к платным запросам (доля), x</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">49%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">50%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">50%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">50%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-uremont-blue/10">
                <td className="p-1.5 px-3 text-white font-medium border-r border-uremont-blue/20">CR ИИ → лид (уникальные звонок+заявка)</td>
                <td className="p-1.5 text-center font-mono text-uremont-blue font-bold border-r border-uremont-blue/20">10%</td>
                <td className="p-1.5 text-center font-mono text-uremont-blue font-bold border-r border-uremont-blue/20">10%</td>
                <td className="p-1.5 text-center font-mono text-uremont-blue font-bold border-r border-uremont-blue/20">11%</td>
                <td className="p-1.5 text-center font-mono text-uremont-blue font-bold">12%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Доля звонков в лидах</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">69%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">70%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">70%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">70%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">CR звонок → ремонт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">0%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">0%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">10%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">15%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">CR заявка → ремонт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">38%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">30%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">30%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">30%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Повторы от лояльности к первичным</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">0%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">0%</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">0%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">2%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">СТО на карте, шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">143</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">150</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">160</td>
                <td className="p-1.5 text-center font-mono text-gray-400">170</td>
              </tr>

              {/* === SECTION 2 === */}
              <tr className="bg-blue-900/40 border-y border-blue-500/30">
                <td colSpan={5} className="p-1.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-[10px] xl:text-xs">Расчёт воронки (пересчитывается автоматически)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Запросы ИИ (платные), шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">910</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">1 016</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">1 242</td>
                <td className="p-1.5 text-center font-mono text-gray-400">1 310</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Запросы ИИ (всего), шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">1 773</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">2 032</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">2 483</td>
                <td className="p-1.5 text-center font-mono text-gray-400">2 619</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Лиды (звонок+заявка), шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">173</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">395</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">886</td>
                <td className="p-1.5 text-center font-mono text-gray-400">1 020</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Звонки, шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">120</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">277</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">620</td>
                <td className="p-1.5 text-center font-mono text-gray-400">714</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Заявки, шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">53</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">119</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">266</td>
                <td className="p-1.5 text-center font-mono text-gray-400">306</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Ремонты (первичные), шт</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">20</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">36</td>
                <td className="p-1.5 text-center font-mono border-r border-white/10 text-gray-400">177</td>
                <td className="p-1.5 text-center font-mono text-gray-400">199</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-uremont-blue/10">
                <td className="p-1.5 px-3 font-black text-uremont-blue border-r border-uremont-blue/20">Ремонты (итого), шт</td>
                <td className="p-1.5 text-center font-mono font-black text-uremont-blue border-r border-uremont-blue/20">20</td>
                <td className="p-1.5 text-center font-mono font-black text-uremont-blue border-r border-uremont-blue/20">37</td>
                <td className="p-1.5 text-center font-mono font-black text-uremont-blue border-r border-uremont-blue/20">184</td>
                <td className="p-1.5 text-center font-mono font-black text-uremont-blue">212</td>
              </tr>

              {/* Final CR */}
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">CR ИИ → ремонт</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">1%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">2%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">7%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">8%</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">CR: Лиды (звонок+заявка) → ремонт</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">12%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">9,5%</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">20,7%</td>
                <td className="p-1.5 text-center font-mono text-gray-400">20,8%</td>
              </tr>

              {/* === SECTION 3: Unit Economics === */}
              <tr className="bg-blue-900/40 border-y border-blue-500/30">
                <td colSpan={5} className="p-1.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-[10px] xl:text-xs">Юнит-экономика (контроль стоимости)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Стоимость запроса ИИ (факт по бюджету), ₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">227₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">222₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">222₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">210₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Стоимость Лиды (звонок+заявка), p</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">2 328₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">1 139₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">621₽</td>
                <td className="p-1.5 text-center font-mono text-gray-400">539₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-green-500/10">
                <td className="p-1.5 px-3 font-bold text-green-400 border-r border-green-500/20">Стоимость ремонта, ₽</td>
                <td className="p-1.5 text-center font-mono font-bold text-green-400 border-r border-green-500/20">34 035₽</td>
                <td className="p-1.5 text-center font-mono font-bold text-green-400 border-r border-green-500/20">32 109₽</td>
                <td className="p-1.5 text-center font-mono font-bold text-green-400 border-r border-green-500/20">37 185₽</td>
                <td className="p-1.5 text-center font-mono font-bold text-green-400">15 682₽</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-1.5 px-3 text-gray-400 border-r border-white/10">Лиды (звонок+заявка) шт на 1 СТО в месяц</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">1,2</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">2,6</td>
                <td className="p-1.5 text-center font-mono text-gray-400 border-r border-white/10">5,5</td>
                <td className="p-1.5 text-center font-mono text-gray-400">6,0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};


// --- Marketing Slide 11: Budget ---
export const MarketingBudgetSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 lg:px-24 relative overflow-hidden">

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-4 lg:mb-6 md:ml-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between max-w-7xl">
        <div>
          <span className="text-uremont-accent font-mono text-sm tracking-wider">05 / МАРКЕТИНГ ПЛАН</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Таймлайн и <span className="text-uremont-blue">бюджет</span>
          </h2>
        </div>
        <div className="text-white text-sm font-mono mt-4 md:mt-0 pb-2">
          Общий бюджет: 11 436 760 ₽ / Лидов: 2 301 (звонки и заявки) / Ремонтов: 433
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl w-full mx-auto mb-10 md:ml-12 relative z-10">
        {/* Март */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-[#0f172a] border border-blue-500/30 p-5 lg:p-6 rounded-3xl relative shadow-lg flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 text-blue-400 font-bold text-sm">03</div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Март</h3>
          </div>

          <div className="space-y-2.5 font-mono text-xs flex-grow mb-6">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Пиар (Охваты, SEO)</span>
              <span className="text-white font-medium">753 600₽</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Перформанс (digital)</span>
              <span className="text-white font-medium">450 000₽</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-auto">
            <div className="flex justify-between text-blue-400 font-bold text-lg">
              <span>Итого</span>
              <span>1 203 600₽</span>
            </div>
          </div>
        </motion.div>

        {/* Апрель */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-[#0f172a] border border-green-500/30 p-5 lg:p-6 rounded-3xl relative shadow-xl flex flex-col z-10 box-shadow-green">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400 font-bold text-sm">04</div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Апрель</h3>
          </div>

          <div className="space-y-2.5 font-mono text-xs flex-grow mb-6">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Охваты, PR, SEO</span>
              <span className="text-white font-medium">6 280 000₽</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Перформанс (digital)</span>
              <span className="text-white font-medium">550 000₽</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-green-500/30 mt-auto backdrop-blur-sm">
            <div className="flex justify-between text-green-400 font-bold text-lg">
              <span>Итого</span>
              <span>6 830 000₽</span>
            </div>
          </div>
        </motion.div>

        {/* Май */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="bg-[#0f172a] border border-yellow-500/30 p-5 lg:p-6 rounded-3xl relative shadow-lg flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50 text-yellow-500 font-bold text-sm">05</div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Май</h3>
          </div>

          <div className="space-y-2.5 font-mono text-xs flex-grow mb-6">
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Охваты, PR, SEO</span>
              <span className="text-white font-medium">2 778 160₽</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">Перформанс (digital)</span>
              <span className="text-white font-medium">550 000₽</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1.5">
              <span className="text-gray-400">1000 литров топлива</span>
              <span className="text-white font-medium">75 000₽</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-auto">
            <div className="flex justify-between text-yellow-500 font-bold text-lg">
              <span>Итого</span>
              <span>3 403 160₽</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Gantt Chart Section */}
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" className="w-full max-w-7xl mx-auto flex flex-col md:ml-12 relative z-10">
        <div className="relative w-full bg-black/20 rounded-2xl border border-white/5 p-6 lg:p-8 overflow-hidden">
          {/* Timeline Grid Markers */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="h-full"></div>
          </div>

          {/* Header Months */}
          <div className="grid grid-cols-3 gap-0 mb-6 border-b border-white/5 pb-2 relative z-10">
            <div className="text-[10px] text-gray-500 uppercase font-mono tracking-widest text-center">Март</div>
            <div className="text-[10px] text-gray-500 uppercase font-mono tracking-widest text-center">Апрель</div>
            <div className="text-[10px] text-gray-500 uppercase font-mono tracking-widest text-center">Май</div>
          </div>

          {/* Gantt Rows */}
          <div className="space-y-3 relative z-10">
            {/* Row 1: Preparation */}
            <div className="relative h-8 flex items-center">
              <div className="absolute left-[8%] w-fit h-6 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center px-4 shadow-lg shadow-green-500/5 whitespace-nowrap">
                <span className="text-[10px] font-medium text-green-400">Инфраструктура: AppsFlyer, Я.Карты, тесты трекинга</span>
              </div>
            </div>

            {/* Row 2: Promo Launch */}
            <div className="relative h-8 flex items-center">
              <div className="absolute left-[22%] w-fit h-6 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center px-4 shadow-lg shadow-blue-500/5 whitespace-nowrap">
                <span className="text-[10px] font-medium text-blue-400">Старт охватного спецпроекта «UREMONT Заправляет»</span>
              </div>
            </div>

            {/* Row 3: Scaling */}
            <div className="relative h-8 flex items-center">
              <div className="absolute left-[34%] right-[15%] h-6 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center px-4 shadow-lg shadow-yellow-500/5">
                <span className="text-[10px] font-medium text-yellow-500 text-center w-full">Медиа: Радио, DOOH, Яндекс Пины, SMM, PR</span>
              </div>
            </div>

            {/* Row 4: Optimization */}
            <div className="relative h-8 flex items-center">
              <div className="absolute left-[65%] right-[2%] h-6 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center px-4 shadow-lg shadow-purple-500/5">
                <span className="text-[10px] font-medium text-purple-400 text-center w-full">DATA & CRM: Retention, оценка CAC/LTV, масштабирование ROI</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Slide 17: Discussion ---
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
          <p className="text-lg md:text-xl text-gray-400">Готовы ответить на ваши вопросы</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-5xl aspect-[16/10]"
        >
          <BrowserWindow title="uremont.com/demo">
            <div className="w-full h-full bg-black">
              <img
                src="https://pim4y1v96ezxxeus.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-04%20%D0%B2%2011.07.27.png"
                alt="Demo screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </BrowserWindow>
        </motion.div>
      </div>
    </div>
  );
};