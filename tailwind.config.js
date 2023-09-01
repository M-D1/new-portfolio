/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // grid-template-columns: repeat(auto-fit,minmax(250px , 1fr));
  darkMode:'class',
  theme: {
   
    extend: {
      colors:{
        primary: '#070808',
        accent:' rgba(129, 141, 141 , .5)',
        secondary:'#444B4B',
        shadeOfBlack:'#1F2323'
      },
      boxShadow:{
        imgsShadow:'0px 0px 20px #fff'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}

