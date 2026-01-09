
import React, { useState, useEffect, useRef } from 'react';
import { useI18n, useGeminiAi } from './lib/contexts/I18nContext';
import { Product, ChatMessage, CartItem } from '../types';
import { COMPANY_INFO, PARTNERS_LIST } from './constants';
import { SparklesIcon, XIcon } from './lib/contexts/Icons';

interface AiAssistantProps {
  products: Product[];
  onClose: () => void;
  browsingHistory: Product[];
  purchaseHistory: CartItem[];
}

const TypingIndicator: React.FC = () => (
    <div className="flex items-center gap-3 p-3 bg-white/80 rounded-2xl w-fit shadow-sm border border-gray-100">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        <span className="text-xs text-gray-400 font-black uppercase tracking-widest">Oday Processing...</span>
    </div>
);

export const AiAssistant: React.FC<AiAssistantProps> = ({ products, onClose }) => {
  const { t, language } = useI18n();
  const { ai, status } = useGeminiAi();
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  useEffect(() => {
    const welcome = language === 'ar' ? 
        'يا هلا والله بك في نجوم دلتا للتجارة! أنا "عُدي"، مساعدك الرقمي الذكي. أسطولنا الحين في وضع الجاهزية التامة لتوريد طلباتكم.. وش اللي بخاطرك اليوم؟ 🍎🚚' : 
        'Welcome to Delta Stars Trading! I am "Oday", your smart AI agent. Our logistics fleet is ready to supply your orders. How can I assist you today?';
    
    setMessages([{ role: 'model', text: welcome }]);

    if (ai && status === 'ready') {
      const productContext = products.map(p => `${language === 'ar' ? p.name_ar : p.name_en}: ${p.price} SAR`).join(', ');

      const systemInstruction = language === 'ar' ? 
      `أنت "عُدي" (Oday)، المساعد الذكي الرسمي لشركة نجوم دلتا للتجارة في السعودية. تحدث بلهجة سعودية بيضاء محترمة ومرحبة.
       نحن نورد الخضروات والفواكه والتمور الفاخرة لكبار الفنادق والشركات مثل: ${PARTNERS_LIST.join(', ')}.
       هدفنا: المعايير العالمية، الجودة الفائقة، التوصيل السريع بأسطول مبرد.
       قائمة الأسعار المتاحة: ${productContext}.
       إذا سأل العميل عن الأسعار، كن دقيقاً جداً. شجع الشركات على التسجيل في بوابة VIP للحصول على أسعار الجملة وتسهيلات الدفع.` : 
      `You are "Oday", the official smart assistant for Delta Stars Trading Co. in Saudi Arabia. 
       Speak in a professional, friendly, and helpful tone.
       We supply premium produce to elite partners like: ${PARTNERS_LIST.join(', ')}.
       Our values: Global standards, extreme freshness, and rapid refrigerated logistics.
       Inventory Data: ${productContext}.
       Provide precise pricing. Always encourage B2B clients to join the VIP Portal for credit limits and bulk rates.`;

      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction, temperature: 0.7 },
      });
    }
  }, [ai, products, status, language]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const msg = input.trim();
    if (!msg || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatRef.current) throw new Error("Oday Engine Offline");
      const result = await chatRef.current.sendMessage({ message: msg });
      setMessages(prev => [...prev, { role: 'model', text: result.text || '' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: language === 'ar' ? 'عذراً، يبدو أن هناك ضغط على أنظمة التوريد، تقدر تحاول ثانية؟' : 'Sorry, the supply systems are under high load, please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-24 ${language === 'ar' ? 'left-8' : 'right-8'} z-[400] w-[95vw] max-w-xl h-[75vh] bg-white rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border-4 border-primary/10 animate-fade-in-up`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="bg-primary text-white p-10 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 animate-pulse"></div>
        <div className="flex items-center gap-6 relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner border border-white/20">👨‍🌾</div>
            <div>
                <h3 className="text-3xl font-black tracking-tight">عُدي (Oday)</h3>
                <p className="text-[11px] font-bold text-secondary uppercase tracking-[0.3em]">Delta Smart Logistics Agent</p>
            </div>
        </div>
        <button onClick={onClose} className="hover:bg-red-500 hover:rotate-90 p-4 rounded-full transition-all relative z-10 bg-white/10 border border-white/20 shadow-2xl"><XIcon className="w-8 h-8"/></button>
      </header>

      <div className="flex-1 p-10 overflow-y-auto bg-gray-50/80 space-y-8 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-7 rounded-[2.5rem] text-lg font-bold shadow-xl leading-relaxed animate-fade-in ${msg.role === 'user' ? 'bg-primary text-white rounded-te-none border-b-8 border-primary-dark' : 'bg-white text-slate-800 border border-gray-200 rounded-ts-none border-b-8 border-gray-100'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-8 bg-white flex gap-5 border-t-2 border-gray-100 items-center shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={language === 'ar' ? 'اكتب استفسارك هنا..' : 'Type your inquiry here..'}
          className="flex-1 p-6 border-2 border-gray-100 rounded-[2.5rem] focus:border-secondary outline-none font-black text-lg bg-gray-50 text-slate-800 transition-all placeholder:opacity-30 shadow-inner"
        />
        <button type="submit" disabled={isLoading} className="bg-secondary text-white p-7 rounded-full hover:scale-110 transition-all shadow-3xl disabled:opacity-30 active:scale-95">
          <SparklesIcon className="w-10 h-10" />
        </button>
      </form>
    </div>
  );
};
