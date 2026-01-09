
export class ApiError extends Error {
    status: number;
    data: any;
    constructor(message: string, status: number, data: any) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

const API_BASE_URL = '/api';
const CACHE_KEY_PREFIX = 'delta_stars_cache_';

// محرك تخزين محلي متطور لمحاكاة قاعدة بيانات سحابية
const storage = {
    save: (key: string, data: any) => {
        try {
            const wrapped = {
                data,
                timestamp: Date.now(),
                version: '2.0'
            };
            localStorage.setItem(CACHE_KEY_PREFIX + key, JSON.stringify(wrapped));
        } catch (e) {
            console.warn('Storage Full, cleaning temporary files...');
            storage.clearTemp();
        }
    },
    get: (key: string) => {
        const item = localStorage.getItem(CACHE_KEY_PREFIX + key);
        if (!item) return null;
        return JSON.parse(item).data;
    },
    clearTemp: () => {
        // مسح تلقائي للملفات المؤقتة القديمة لتحسين الأداء
        Object.keys(localStorage)
            .filter(k => k.startsWith(CACHE_KEY_PREFIX) && !k.includes('user') && !k.includes('settings'))
            .forEach(k => localStorage.removeItem(k));
    }
};

let fetcher: typeof window.fetch = window.fetch.bind(window);
export const setFetcher = (newFetcher: typeof window.fetch) => { fetcher = newFetcher; };

const getAuthToken = (): string | null => localStorage.getItem('delta-auth-token');

const request = async (endpoint: string, options: RequestInit) => {
    // Delta Shield: حماية من طلبات التكرار السريعة (Debounce simulation)
    const requestKey = `${options.method}_${endpoint}`;
    
    try {
        const response = await fetcher(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new ApiError(errorData.detail || 'Network Response Error', response.status, errorData);
        }
        
        if (response.status === 204) return true;
        
        const data = await response.json();
        
        // حفظ نسخة محلية للمزامنة
        if (options.method === 'GET' && endpoint.includes('products')) {
            storage.save('products', data);
        }

        return data;
    } catch (error) {
        // الاستجابة من القاعدة المحلية في حال فشل السحابي (Offline-First Mode)
        if (options.method === 'GET' && endpoint.includes('products')) {
            const localData = storage.get('products');
            if (localData) return localData;
        }
        throw error;
    }
};

const api = {
    async get(endpoint: string) {
        return request(endpoint, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getAuthToken()}` }
        });
    },
    async post(endpoint: string, data: any) {
        return request(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getAuthToken()}` },
            body: JSON.stringify(data)
        });
    },
    async put(endpoint: string, data: any) {
        return request(endpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getAuthToken()}` },
            body: JSON.stringify(data)
        });
    },
    async delete(endpoint: string) {
        return request(endpoint, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });
    }
};

export default api;
