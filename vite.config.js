import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: './', // Указывает корневую директорию проекта
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html'), // Укажите основной файл входа для SPA
        },
    },
    server: {
        open: true,
    },
});


