import { Injectable } from '@angular/core';

@Injectable()
export class CommonPatientDetailService {
    constructor() { }
    //State Management
    setSession(key: string, value: string): void {
        //sessionStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem(key, JSON.stringify(value));
    }
    getSession(key: string): string {
        if (typeof window !== 'undefined') {
            //let retrievedObject = sessionStorage.getItem(key) as string;
            let retrievedObject = localStorage.getItem(key);
            return retrievedObject;
        }
    }
    clearSession(): void {
        localStorage.clear();
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}