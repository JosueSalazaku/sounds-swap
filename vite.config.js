import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input:  ['resources/js/app.jsx', 'resources/js/Pages/Welcome.jsx', 'resources/js/Pages/AboutUs.jsx', 'resources/js/Pages/Products.jsx', 'resources/js/Pages/Contact.jsx', 'resources/js/Pages/Checkout.jsx'],
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {

            includePaths: ['/resources/css'],
        },
    },
});
