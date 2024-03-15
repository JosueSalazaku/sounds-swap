import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Quicksand", ...defaultTheme.fontFamily.sans], // Use Quicksand font
            },
            colors: {
                primary: "#59D45F", // Change to your primary color
                secondary: "#ECFEE7", // Change to your secondary color (removed extra space)
                accent: "#85FF33", // Change to your accent color
                "light-bg": "#F1FFF2", // Change to your light background color
                "dark-bg": "#85FF33", // Change to your dark background color
            },
        },
    },

    plugins: [forms],
};
