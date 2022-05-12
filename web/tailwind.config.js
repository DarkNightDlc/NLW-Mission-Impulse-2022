module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#ffffff",
        "surface-secondary": "#f4f4f5",
        "surface-tertiary": "#e4e4e7",
        "surface-quaternary": "#d4d4d8",
        "surface-quinary": "#27272a",
        "text-primary": "27272a",
        "text-secondary": "#71717a",
        "text-on-tooltip": "#f4f4f5",
        "text-on-brand-color": "#ffffff",
        "brand" : "#8257e5",
        "brand-hover" : "#996dff",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
