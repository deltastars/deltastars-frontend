
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    
    // Auto-Repair Logic:
    // Check if we just reloaded due to an error to avoid infinite loops
    const lastErrorTimestamp = sessionStorage.getItem('delta_last_crash');
    const now = Date.now();
    
    // If no error in the last 10 seconds, try to auto-recover by reloading once
    if (!lastErrorTimestamp || (now - parseInt(lastErrorTimestamp, 10) > 10000)) {
        sessionStorage.setItem('delta_last_crash', now.toString());
        window.location.reload();
    }
  }

  private handleReload = () => {
    sessionStorage.removeItem('delta_last_crash');
    window.location.reload();
  }

  private handleSafeReset = () => {
      // Self-healing: Clear potentially corrupted app state from local storage
      // We preserve critical database keys to prevent data loss.
      const keysToKeep = [
          'delta-products-db', 
          'delta-invoices-db', 
          'delta-vip-clients-db', 
          'delta-transactions-db', 
          'delta-app-settings',
          'delta-auth-token' // Keep login session if possible
      ]; 
      const allKeys = Object.keys(localStorage);
      
      let clearedCount = 0;
      allKeys.forEach(key => {
          if (key.startsWith('delta-') && !keysToKeep.includes(key)) {
              localStorage.removeItem(key);
              clearedCount++;
          }
      });
      
      sessionStorage.clear();
      alert(`تم إصلاح النظام. تم مسح ${clearedCount} ملفات مؤقتة. جاري إعادة التحميل...`);
      window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800 p-4" dir="rtl">
          <div className="text-center max-w-lg p-8 bg-white rounded-xl shadow-2xl border-t-8 border-red-600">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-black mb-4 text-red-700">تنبيه استقرار النظام</h1>
            <p className="text-lg font-bold mb-6 text-gray-700">
              حدث خطأ غير متوقع. قام النظام بإيقاف التشغيل مؤقتاً لحماية بياناتك.
            </p>
            
            <div className="flex flex-col gap-4">
                <button
                onClick={this.handleReload}
                className="bg-blue-600 text-white font-black py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors w-full shadow-lg"
                >
                إعادة تحميل الصفحة
                </button>
                
                <button
                onClick={this.handleSafeReset}
                className="bg-green-600 text-white font-black py-4 px-8 rounded-lg hover:bg-green-700 transition-colors w-full shadow-lg"
                >
                إصلاح تلقائي ومسح الذاكرة المؤقتة
                </button>
            </div>

            <details className="mt-8 text-left text-xs text-red-700 bg-red-100 p-4 rounded-md border border-red-200 font-mono" dir="ltr">
              <summary className="font-bold cursor-pointer mb-2">عرض تفاصيل الخطأ (للدعم الفني)</summary>
              <pre className="whitespace-pre-wrap break-all">
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
