// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // This makes sure Tailwind scans your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
