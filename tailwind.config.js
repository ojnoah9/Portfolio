/** @type {import('tailwindcss').Config} */
// export const darkmode = [
//   "class",
// ];
// module.exports = {
//   darkMode: "class",
//   // other configuration options...
// };
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = [
  'class'
]
export const theme = {
  extend: {}
};
export const plugins = [];
