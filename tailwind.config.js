const withMT = require("@material-tailwind/react/utils/withMT");
const { color } = require("framer-motion");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // light theme
    },
  },
  plugins: [],
});
