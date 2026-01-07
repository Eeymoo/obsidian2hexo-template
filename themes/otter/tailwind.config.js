/** @type {import('tailwindcss').Config} */
module.exports = {
  // 扫描主题的所有模板文件（EJS/HTML）和 CSS 文件
  content: [
    "./layout/**/*.{ejs,html}",  // 主题的模板文件
    "./source/**/*.{ejs,html,js}" // 主题的静态页面/脚本
  ],
  theme: {
    extend: {
      // 自定义主题（可选，比如适配博客的配色）
      colors: {
        primary: "#0e83cd", // Hexo 常用主色示例
        secondary: "#3498db",
      },
    },
  },
  plugins: [],
}