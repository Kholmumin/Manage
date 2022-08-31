/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
      },
      colors: {
        body:"#242D52;",
        myOrange:"#F3603C",
        myBlack:"#1D1E25",
        myPink:"#FFF0EC",
        itemBg:"#FFF0EC",
        hoverOrange:"#EFA997",
      },
      fontFamily:{
        body:['Be Vietnam'],
      },
      boxShadow:{
        orangeShadow:"0px 15px 15px -10px #FF9F8E;",
      }
    },
  },
  plugins: [],
}
