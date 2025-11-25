
import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { Page } from '../types';

interface TermsAndConditionsProps {
  setPage: (page: Page) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ setPage }) => {
  const { t } = useI18n();
  const content = t('legal.termsConditions', { returnObjects: true }) as any;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <button onClick={() => setPage('home')} className="mb-8 text-primary font-bold hover:underline">
         &larr; {t('productDetail.backToProducts')}
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-black text-primary mb-2">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-6 font-bold">{content.lastUpdated}</p>
        
        <p className="mb-6 font-bold text-gray-800 leading-relaxed">{content.intro}</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.entity.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.entity.content}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.pricing.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.pricing.content}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.orders.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.orders.content}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.delivery.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.delivery.content}</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.returns.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.returns.content}</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-black mb-2">{content.law.title}</h2>
            <p className="text-gray-700 leading-relaxed font-semibold">{content.law.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
