
import { mockProducts } from './vip/products';
import { Product } from '../../types';
import { setFetcher } from './api';

const originalFetch = window.fetch;

const mockApi = (url: RequestInfo | URL, options?: RequestInit): Promise<Response> => {
    const path = typeof url === 'string' ? url : (url instanceof URL ? url.pathname : new URL(url.url).pathname);
    const method = options?.method || 'GET';

    const ADMIN_AUTH_KEY = 'delta-stars-admin-auth';
    const getAdminAuth = () => {
        try {
            const data = localStorage.getItem(ADMIN_AUTH_KEY);
            if (data) return JSON.parse(data);
        } catch (e) {}
        const defaultAuth = { password: '12345', isDefault: true };
        localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(defaultAuth));
        return defaultAuth;
    };

    if (path === '/api/auth/token/' && method === 'POST') {
        if (options?.body) {
            const { username, password } = JSON.parse(options.body as string);
            const auth = getAdminAuth();
            if (username.toLowerCase() === 'deltastars777@gmail.com' && password === auth.password) {
                return Promise.resolve(new Response(JSON.stringify({ 
                    access: 'mock-token-' + Date.now(),
                    isDefaultPassword: auth.isDefault 
                }), { status: 200, headers: { 'Content-Type': 'application/json' } }));
            }
        }
        return Promise.resolve(new Response(JSON.stringify({ detail: 'Invalid credentials' }), { status: 401 }));
    }

    if (path === '/api/products/' && method === 'GET') {
        const saved = localStorage.getItem('delta-products-v10');
        const data = saved ? JSON.parse(saved) : mockProducts;
        return Promise.resolve(new Response(JSON.stringify(data), { status: 200 }));
    }

    return originalFetch(url, options);
};

export const setupMockApi = () => {
    setFetcher(mockApi);
    console.log('Delta Sovereignty Layer v10.0 Locked.');
};
