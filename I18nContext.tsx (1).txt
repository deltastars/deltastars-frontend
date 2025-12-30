
import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode } from 'react';
import { translations, Translation } from '../../../translations';
import { GoogleGenAI } from '@google/genai';

type Language = 'ar' | 'en';
export type Currency = 'sar' | 'usd' | 'eur';

const CONVERSION_RATES: Record<Currency, number> = {
  sar: 1,
  usd: 0.27,
  eur: 0.25,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { [key: string]: string | number } | { returnObjects: true }) => any;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatCurrency: (price: number) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getNestedTranslation = (obj: Translation, key: string): string | Translation | undefined => {
    return key.split('.').reduce<string | Translation | undefined>((acc, cur) => {
        if (acc && typeof acc === 'object' && cur in acc) {
            return (acc as any)[cur];
        }
        return undefined;
    }, obj);
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('delta-lang');
    return (saved as Language) || 'ar';
  });

  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('delta-currency');
    return (saved as Currency) || 'sar';
  });

  const setLanguageWrapper = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('delta-lang', lang);
  };

  const setCurrency = (curr: Currency) => {
    localStorage.setItem('delta-currency', curr);
    setCurrencyState(curr);
  };

  const t = useCallback((key: string, options?: { [key: string]: string | number } | { returnObjects: true }): any => {
    let translation = getNestedTranslation(translations[language], key);

    if (options && (options as { returnObjects: true }).returnObjects) {
      if (typeof translation === 'object' && translation !== null) {
        return translation;
      }
      let fallback = getNestedTranslation(translations.en, key);
      return (typeof fallback === 'object' && fallback !== null) ? fallback : {};
    }

    if (typeof translation !== 'string') {
        translation = getNestedTranslation(translations.en, key);
        if (typeof translation !== 'string') {
            return key;
        }
    }

    if (options && !(options as { returnObjects: true }).returnObjects) {
        return (translation as string).replace(/\{\{(\w+)\}\}/g, (_, subKey) => String((options as any)[subKey] || `{{${subKey}}}`));
    }

    return translation;
  }, [language]);
  
  const formatCurrency = useCallback((price: number): string => {
    const convertedPrice = price * CONVERSION_RATES[currency];
    const currencyInfo: Record<Currency, { code: string }> = {
      sar: { code: 'SAR' },
      usd: { code: 'USD' },
      eur: { code: 'EUR' },
    };
    
    try {
        const locale = language === 'ar' ? 'ar-SA' : 'en-US';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyInfo[currency].code,
        }).format(convertedPrice);
    } catch (e) {
        const symbols: Record<Currency, string> = { sar: 'SAR', usd: '$', eur: '€' };
        return `${convertedPrice.toFixed(2)} ${symbols[currency]}`;
    }
  }, [currency, language]);

  const value = { language, setLanguage: setLanguageWrapper, t, currency, setCurrency, formatCurrency };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// --- Gemini AI Context ---
interface GeminiAiContextType {
  ai: GoogleGenAI | null;
  status: 'loading' | 'ready' | 'error';
}

const GeminiAiContext = createContext<GeminiAiContextType | undefined>(undefined);

export const GeminiAiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contextValue, setContextValue] = useState<GeminiAiContextType>({
    ai: null,
    status: 'loading',
  });

  useEffect(() => {
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.warn("AI Assistant disabled: API_KEY not found in environment.");
            setContextValue({ ai: null, status: 'error' });
            return;
        }
        const aiInstance = new GoogleGenAI({ apiKey });
        setContextValue({ ai: aiInstance, status: 'ready' });
    } catch (e) {
      setContextValue({ ai: null, status: 'error' });
    }
  }, []);

  return (
    <GeminiAiContext.Provider value={contextValue}>
      {children}
    </GeminiAiContext.Provider>
  );
};

export const useGeminiAi = () => {
  const context = useContext(GeminiAiContext);
  if (context === undefined) {
    throw new Error('useGeminiAi must be used within a GeminiAiProvider');
  }
  return context;
};
