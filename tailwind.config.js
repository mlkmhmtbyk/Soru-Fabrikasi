/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        roboto: ["Roboto-Regular", "sans-serif"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],
        "roboto-extrabold": ["Roboto-ExtraBold", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-semibold": ["Roboto-SemiBold", "sans-serif"],
        "roboto-light": ["Roboto-Light", "sans-serif"],
        notoSans: ["NotoSans-Regular", "sans-serif"],
        "notoSans-bold": ["NotoSans-Bold", "sans-serif"],
        "notoSans-extrabold": ["NotoSans-ExtraBold", "sans-serif"],
        "notoSans-medium": ["NotoSans-Medium", "sans-serif"],
        "notoSans-semibold": ["NotoSans-SemiBold", "sans-serif"],
        "notoSans-light": ["NotoSans-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
