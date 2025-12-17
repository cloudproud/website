import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getInitialDarkMode(): boolean {
    if (!browser) return false;

    const stored = sessionStorage.getItem('darkMode');
    if (stored !== null) {
        return stored === 'true';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const darkMode = writable(getInitialDarkMode());

if (browser) {
    darkMode.subscribe((value) => {
        sessionStorage.setItem('darkMode', value ? 'true' : 'false');

        if (value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}