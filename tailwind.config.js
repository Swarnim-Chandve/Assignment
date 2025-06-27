// export default {
//   content: ["./src/**/*.tsx", "./src/**/*.css"],
//   plugins: [require("@tailwindcss/forms")],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['NotoSans', 'sans-serif'], // use as 'font-notosans'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
