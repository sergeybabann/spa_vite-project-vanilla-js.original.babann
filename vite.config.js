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
        open: true, // Автоматически открывать браузер

        historyApiFallback: {
            rewrites: [
                // Исключение для папки public (например, /run_code/*)
                { from: /^\/run_code\/.*$/, to: (context) => context.parsedUrl.pathname },
            ],
        },
    },
    middlewareMode: true,
    configureServer: (server) => {
        server.middlewares.use((req, res, next) => {
            if (req.url.startsWith('/run_code/')) {
                return next(); // Пропускаем запрос
            }
            next();
        });
    },
    historyApiFallback: true,
});
