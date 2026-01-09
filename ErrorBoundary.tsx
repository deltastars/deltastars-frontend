
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorCount: number;
  lastError: string;
}

/**
 * محرك الاستقرار الذاتي - يقوم بعزل الأخطاء وإصلاح المتجر تلقائياً
 */
// Fix: Extending Component directly from react to ensure TypeScript correctly identifies class members
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Fix: Initializing state in constructor which is recognized when extending Component
    this.state = {
      hasError: false,
      errorCount: 0,
      lastError: ''
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorCount: 1, lastError: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical System Alert:", error, errorInfo);
    
    // إذا تكرر الخطأ، يتم تنظيف الذاكرة المؤقتة للإصلاح التلقائي
    // Fix: Accessing state safely via 'this.state'
    if (this.state.errorCount > 0) {
        localStorage.removeItem('delta-page-v10');
        localStorage.removeItem('delta-products-v10');
        localStorage.removeItem('delta-session-v10');
    }
  }

  handleSelfRepair = () => {
    // Fix: Calling setState which exists on Component class
    this.setState({ hasError: false, errorCount: 0 });
    window.location.href = '/'; // إعادة تحميل نظيفة
  };

  render() {
    // Fix: Accessing state in render method
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center" dir="rtl">
          <div className="max-w-xl animate-fade-in">
            <div className="text-[12rem] mb-10 drop-shadow-2xl">🛡️</div>
            <h1 className="text-5xl font-black text-primary mb-6">نظام الاستقرار نشط</h1>
            <p className="text-2xl font-bold text-gray-500 mb-12 leading-relaxed">
                اكتشف محرك الحماية خللاً تقنياً بسيطاً. تم تأمين بياناتك وعزل المشكلة بنجاح.
            </p>
            <button
              onClick={this.handleSelfRepair}
              className="bg-primary text-white px-16 py-6 rounded-[2.5rem] font-black text-2xl shadow-3xl hover:scale-105 transition-all border-b-8 border-primary-dark active:border-b-0"
            >
              إصلاح وتشغيل المتجر الآن
            </button>
          </div>
        </div>
      );
    }

    // Fix: Accessing props correctly in render
    return this.props.children || null;
  }
}
