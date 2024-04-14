/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max550px': {'max' : '550px'},
      },
    },
  },
  plugins: [],
}


