// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 覆盖默认的 sans 字体，全局使用我们自托管的字体
        sans: ['"JetBrainsMono"', 'monospace'], 
        // 如果想让标题使用 Oswald，可以再定义一个：
        heading: ['"Oswald Heading"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}