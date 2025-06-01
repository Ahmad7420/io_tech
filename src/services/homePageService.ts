/* eslint-disable @typescript-eslint/no-explicit-any */

export class HomePageService {
    public baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl ?? (process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:1337/api");
        console.log('outside');
    }

    public async get<T>(endpoint: string): Promise<T> {

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorMessage = await this.parseError(response);
                throw new Error(errorMessage);
            }

            return await response.json();
        } catch (error: any) {
            console.error("Fetch failed at:", `${this.baseUrl}${endpoint}`);
            console.error("Reason:", error.message || error);
            throw error;
        }
    }

    public async parseError(response: Response): Promise<string> {
        try {
            const data = await response.json();
            return data?.message ?? response.statusText;
        } catch {
            return response.statusText;
        }
    }
}

export const homePageService = new HomePageService();
