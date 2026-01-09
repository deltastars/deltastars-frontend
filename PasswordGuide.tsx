
import React from 'react';
import { useI18n } from '../lib/contexts/I18nContext';

interface PasswordGuideProps {
  onClose: () => void;
}

export const PasswordGuide: React.FC<PasswordGuideProps> = ({ onClose }) => {
  const { t, language } = useI18n();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[150] flex justify-center items-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg relative p-10 border border-gray-100">
        <button onClick={onClose} className="absolute top-6 end-8 text-gray-400 hover:text-black text-4xl font-black transition-colors">&times;</button>
        <h2 className="text-3xl font-black text-primary mb-6 text-center">{language === 'ar' ? 'دليل الدخول التجريبي' : 'Demo Login Guide'}</h2>
        <p className="text-center text-gray-500 font-bold mb-8 leading-relaxed">استخدم بيانات الاعتماد التالية لاستكشاف خصائص النظام المتقدمة</p>

        <div className="space-y-6 text-black">
          {/* Admin */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
            <h3 className="font-black text-xl mb-4 text-slate-800">{language === 'ar' ? 'لوحة التحكم المركزية' : 'Central Admin'}</h3>
            <div className="space-y-2 text-sm font-bold">
                <p><span className="text-gray-400">Email:</span> <span className="font-mono text-primary">deltastars777@gmail.com</span></p>
                <p><span className="text-gray-400">Password:</span> <span className="font-mono bg-white px-3 py-1 rounded-lg border">12345</span></p>
            </div>
          </div>

          {/* VIP */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
            <h3 className="font-black text-xl mb-4 text-slate-800">{language === 'ar' ? 'بوابة الشركات (VIP)' : 'Corporate VIP Portal'}</h3>
            <div className="space-y-2 text-sm font-bold">
                <p><span className="text-gray-400">Phone:</span> <span className="font-mono text-primary">966558828009</span></p>
                <p><span className="text-gray-400">Password:</span> <span className="font-mono bg-white px-3 py-1 rounded-lg border">vip</span></p>
            </div>
          </div>

          {/* Internal Sections */}
          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
            <h3 className="font-black text-xl mb-2 text-orange-800">{language === 'ar' ? 'الأقسام الداخلية' : 'Internal Sections'}</h3>
            <p className="text-xs font-bold text-orange-600 mb-4">كافة الأقسام (المحاسبة، الرادار، المستودع) محمية برمز موحد:</p>
            <p><strong>PIN:</strong> <span className="font-mono bg-white px-4 py-1 rounded-lg border border-orange-200 text-orange-800">12345</span></p>
          </div>
        </div>
        
        <button onClick={onClose} className="w-full mt-10 bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-light transition-all shadow-xl">
            {t('common.ok')}
        </button>
      </div>
    </div>
  );
};
