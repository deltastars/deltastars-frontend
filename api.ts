
export class ApiError extends Error {
    constructor(
        public status: number,
        public detail: string | undefined,
    ) {
        super(detail || `API Error: ${status}`);
        this.name = 'ApiError';
    }
}

let fetcher: typeof fetch = fetch;

export const setFetcher = (newFetcher: typeof fetch) => {
    fetcher = newFetcher;
};

class ApiClient {
    async get<T = any>(path: string): Promise<T> {
        const response = await fetcher(path, { method: 'GET' });
        return this.handleResponse(response);
    }

    async post<T = any>(path: string, data: any): Promise<T> {
        const response = await fetcher(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async put<T = any>(path: string, data: any): Promise<T> {
        const response = await fetcher(path, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async delete<T = any>(path: string): Promise<T> {
        const response = await fetcher(path, { method: 'DELETE' });
        return this.handleResponse(response);
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            let detail: string | undefined;
            try {
                const errorData = await response.json();
                detail = errorData.detail || errorData.message;
            } catch (e) {
                // Ignore JSON parse error
            }
            throw new ApiError(response.status, detail);
        }

        if (response.status === 204) {
            return null as T;
        }

        try {
            return await response.json() as T;
        } catch (e) {
            return {} as T;
        }
    }
}

export default new ApiClient();
