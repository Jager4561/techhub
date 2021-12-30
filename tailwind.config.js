module.exports = {
  content: [],
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  theme: {
    extend: {
      colors: {
        main: {
          black0: "#1b1b1b",
          black1: "#292929",
          gray: "#808080",
          orange: "#f7971d"
        }
      }
    },
  },
  plugins: [],
}
