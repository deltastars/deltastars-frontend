
import React from 'react';
import { useI18n } from './contexts/I18nContext';

export const PrivacyPolicyPage: React.FC = () => {
    const { language } = useI18n();
    
    return (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-primary max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-primary mb-8 border-b-4 border-secondary/20 pb-4">
                    {language === 'ar' ? 'سياسة الخصوصية - متجر دلتا ستارز' : 'Privacy Policy - Delta Stars Store'}
                </h1>
                
                <div className="space-y-8 text-black leading-relaxed" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <section>
                        <p className="font-bold text-gray-500 mb-2 italic">آخر تحديث: 23 أكتوبر 2025</p>
                        <p className="font-black text-xl mb-4">المادة 1: مقدمة</p>
                        <p className="font-bold">تلتزم شركة دلتا ستارز بحماية خصوصيتك وبياناتك الشخصية وفقًا لأنظمة المملكة العربية السعودية، وخاصة نظام حماية البيانات الشخصية الصادر بالمرسوم الملكي رقم (م/19).</p>
                    </section>

                    <section>
                        <p className="font-black text-xl mb-4">المادة 2: أنواع البيانات التي نجمعها</p>
                        <ul className="list-disc list-inside space-y-2 font-bold ps-4">
                            <li>بيانات التعريف: الاسم الكامل، رقم الجوال، البريد الإلكتروني.</li>
                            <li>بيانات المعاملات: سجل الطلبات، طريقة الدفع، سجل المراسلات.</li>
                            <li>بيانات تقنية: عنوان IP، نوع المتصفح.</li>
                        </ul>
                    </section>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-12">
                        <p className="font-black text-lg mb-4 text-primary">الاتصال بمسؤول حماية البيانات</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold">
                            <p><span className="opacity-50">الاسم:</span> علي الدحان</p>
                            <p><span className="opacity-50">المنصب:</span> مسؤول حماية البيانات</p>
                            <p><span className="opacity-50">البريد:</span> vipservicesyemen@outlook.sa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
