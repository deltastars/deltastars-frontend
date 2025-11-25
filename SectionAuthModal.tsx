
import React, { useState, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';
import { useToast } from '../contexts/ToastContext';
import { MailIcon, FingerprintIcon } from './lib/Icons';
import { isWebAuthnSupported, isFingerprintRegistered, loginWithFingerprint } from './lib/webAuthn';

// This component handles password authentication for protected dashboard sections.
export const SectionAuthModal: React.FC<{
  section: 'developer' | 'gm.portal' | 'accounts';
  onUnlock: () => void;
  onClose: () => void;
}> = ({ section, onUnlock, onClose }) => {
    const { t } = useI18n();
    const { addToast } = useToast();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
    
    const [isFingerprintAvailable, setIsFingerprintAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Configuration for the 3 secured sections with specific emails
    const AUTH_CONFIG = { 
        developer: { 
            KEY: 'delta-stars-dev-auth', 
            EMAIL: 'vipservicesyemen@outlook.sa', 
            t_prefix: 'dashboard.developer.auth',
            label: 'Developer Access'
        }, 
        'gm.portal': { 
            KEY: 'delta-stars-gm-auth', 
            EMAIL: 'deltastars777@gmail.com', 
            t_prefix: 'dashboard.gm.auth',
            label: 'GM Access' 
        },
        accounts: { 
            KEY: 'delta-stars-accounts-auth', 
            EMAIL: 'INFO@DELTASTARS-KSA.COM',
            t_prefix: 'dashboard.accounts.auth',
            label: 'Accounts Access' 
        }
    };
    const config = AUTH_CONFIG[section];

    const getAuth = () => {
        const data = localStorage.getItem(config.KEY);
        if (data) return JSON.parse(data);
        // Default password logic
        const defaultAuth = { password: '12345', isDefault: true };
        localStorage.setItem(config.KEY, JSON.stringify(defaultAuth));
        return defaultAuth;
    };

    const login = (pass: string) => {
        const auth = getAuth();
        return pass === auth.password ? { success: true, isDefault: auth.isDefault } : { success: false, isDefault: false };
    };

    const changePassword = (newPassword: string) => {
        localStorage.setItem(config.KEY, JSON.stringify({ password: newPassword, isDefault: false }));
    };

    useEffect(() => {
        getAuth();
        // Check for biometric availability
        if (isWebAuthnSupported() && isFingerprintRegistered()) {
            setIsFingerprintAvailable(true);
        }
    }, [section]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const result = login(password);
        if (result.success) {
            if (result.isDefault) {
                setShowPasswordChangeModal(true);
            } else {
                onUnlock();
            }
        } else {
            setError(t(`${config.t_prefix}.passwordError`) || 'Incorrect Password');
        }
    };
    
    const handleBiometricAuth = async () => {
        setIsLoading(true);
        setError('');
        const result = await loginWithFingerprint();
        setIsLoading(false);
        
        if (result) {
            addToast("Authentication successful", 'success');
            onUnlock();
        } else {
             setError("Biometric authentication failed.");
        }
    };

    const handlePasswordChangeSuccess = () => {
        setShowPasswordChangeModal(false);
        setPassword('');
        addToast(t('auth.passwordChangedSuccess'), 'success');
        onUnlock();
    };

    const handleSendRecovery = () => {
        addToast(t(`${config.t_prefix}.recoverySent`, { email: config.EMAIL }) || `Recovery sent to ${config.EMAIL}`, 'info');
        setIsForgotPassword(false);
        onClose();
    };

    const PasswordChangeModal: React.FC = () => {
      const [newPassword, setNewPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [pwdError, setPwdError] = useState('');
      const handlePwdSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setPwdError('');
          if (newPassword !== confirmPassword) {
              setPwdError(t('auth.passwordMismatch'));
              return;
          }
          changePassword(newPassword);
          handlePasswordChangeSuccess();
      };
      return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 border-4 border-green-700">
                <h2 className="text-2xl font-black text-primary mb-2">{t('auth.changePasswordTitle')}</h2>
                <p className="text-black font-bold mb-4">{t('auth.forceChangePasswordSubtitle') || "Please change the default password to continue."}</p>
                <form onSubmit={handlePwdSubmit} className="space-y-4">
                    <input type="password" placeholder={t('auth.newPassword')} value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full p-3 border-2 border-green-700 rounded font-bold" required/>
                    <input type="password" placeholder={t('auth.confirmPassword')} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full p-3 border-2 border-green-700 rounded font-bold" required/>
                    {pwdError && <p className="text-red-600 font-black text-sm">{pwdError}</p>}
                    <div className="flex justify-end gap-4 pt-2">
                        <button type="button" onClick={() => setShowPasswordChangeModal(false)} className="bg-gray-200 text-black py-2 px-4 rounded font-black hover:bg-gray-300">{t('auth.cancel')}</button>
                        <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded font-black hover:bg-green-800">{t('auth.changePasswordButton')}</button>
                    </div>
                </form>
            </div>
        </div>
      );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
            {showPasswordChangeModal && <PasswordChangeModal />}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative p-8 border-t-8 border-green-700">
                <button onClick={onClose} className="absolute top-2 end-3 text-gray-400 hover:text-gray-800 text-3xl font-black">&times;</button>
                {isForgotPassword ? (
                    <div>
                        <h2 className="text-2xl font-black text-primary mb-2 text-center">{t(`${config.t_prefix}.recoveryTitle`) || "Password Recovery"}</h2>
                        <p className="text-center text-black font-bold mb-6">{t(`${config.t_prefix}.recoverySubtitle`) || "A reset link will be sent to:"}</p>
                        <div className="mb-4">
                            <label className="block text-sm font-black mb-2 text-black">{t(`${config.t_prefix}.emailLabel`) || "Registered Email"}</label>
                            <input type="email" value={config.EMAIL} disabled className="w-full p-3 border-2 border-gray-300 rounded bg-gray-100 text-black font-mono text-center font-bold"/>
                        </div>
                        <button onClick={handleSendRecovery} className="w-full bg-green-700 text-white font-black py-3 px-6 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2 border-b-4 border-green-900 active:border-b-0 active:translate-y-1">
                            <MailIcon /> {t(`${config.t_prefix}.sendLinkButton`) || "Send Recovery Link"}
                        </button>
                        <div className="text-center mt-6">
                            <button onClick={() => setIsForgotPassword(false)} className="font-bold text-primary hover:text-green-800 underline">{t(`${config.t_prefix}.backToLogin`) || "Back to Login"}</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-3xl font-black text-primary mb-2 text-center">{t(`${config.t_prefix}.title`) || config.label}</h2>
                        <p className="text-center text-black font-bold mb-4">{t(`${config.t_prefix}.subtitle`) || "Restricted Access"}</p>
                        
                        <div className="bg-green-50 p-3 rounded border border-green-200 mb-6 text-center">
                             <p className="text-xs text-green-800 font-bold uppercase tracking-wider">Authorized Account</p>
                             <p className="font-black text-green-900">{config.EMAIL}</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="sec-password" className="sr-only">{t(`${config.t_prefix}.password`)}</label>
                                <input id="sec-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t(`${config.t_prefix}.password`) || "Password"} required className="w-full p-4 border-2 border-green-700 rounded-lg font-black text-lg placeholder-gray-400"/>
                            </div>
                            {error && <p className="text-red-600 text-sm text-center font-black bg-red-100 p-2 rounded">{error}</p>}
                            <button type="submit" className="w-full bg-green-700 text-white font-black py-4 px-6 rounded-lg hover:bg-green-800 transition-all border-b-4 border-green-900 active:border-b-0 active:translate-y-1 text-lg shadow-none">
                                {t(`${config.t_prefix}.loginButton`) || "LOGIN"}
                            </button>
                        </form>
                        
                        {isFingerprintAvailable && (
                            <button
                                type="button"
                                onClick={handleBiometricLogin}
                                disabled={isLoading}
                                className="w-full flex justify-center items-center gap-2 py-3 px-4 border-2 border-gray-300 text-sm font-black rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors mt-4"
                            >
                                <FingerprintIcon className="w-6 h-6" />
                                <span>Login with Fingerprint</span>
                            </button>
                        )}
                        
                        <div className="text-center mt-6">
                            <button onClick={() => setIsForgotPassword(true)} className="font-bold text-sm text-gray-500 hover:text-primary transition-colors">{t(`${config.t_prefix}.forgotPassword`) || "Forgot Password?"}</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    
    async function handleBiometricLogin() {
        await handleBiometricAuth();
    }
};
