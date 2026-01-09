
const VIP_CREDENTIALS_KEY = 'delta_stars_biometric_vault';

export const isWebAuthnSupported = (): boolean => {
  return window.PublicKeyCredential !== undefined;
};

// محاكاة تسجيل البصمة بأداء عالٍ
export const registerVipFingerprint = async (phone: string): Promise<boolean> => {
    if (!isWebAuthnSupported()) return false;
    
    // في النظام الحقيقي نستخدم navigator.credentials.create
    return new Promise((resolve) => {
        const confirm = window.confirm("هل ترغب في تفعيل الدخول السريع عبر بصمة الإصبع لهذا الجهاز؟");
        if (confirm) {
            const vault = JSON.parse(localStorage.getItem(VIP_CREDENTIALS_KEY) || '{}');
            vault[phone] = {
                id: Math.random().toString(36).substr(2, 9),
                timestamp: Date.now(),
                device: navigator.userAgent
            };
            localStorage.setItem(VIP_CREDENTIALS_KEY, JSON.stringify(vault));
            resolve(true);
        } else {
            resolve(false);
        }
    });
};

// Fixed: Added and exported isVipFingerprintRegistered
export const isVipFingerprintRegistered = async (phone: string): Promise<boolean> => {
    const vault = JSON.parse(localStorage.getItem(VIP_CREDENTIALS_KEY) || '{}');
    return !!vault[phone];
};

export const loginWithVipFingerprint = async (phone: string): Promise<string | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const vault = JSON.parse(localStorage.getItem(VIP_CREDENTIALS_KEY) || '{}');
            if (vault[phone]) {
                console.log('Biometric Match Found');
                resolve(phone);
            } else {
                resolve(null);
            }
        }, 800); // محاكاة وقت المعالجة الحيوية
    });
};
