const path = require("path");

module.exports = {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
    path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
