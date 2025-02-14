/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{ts,tsx}" // ✅ Ensures Tailwind applies to your component library
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")], // ✅ Enables Typography plugin
};
