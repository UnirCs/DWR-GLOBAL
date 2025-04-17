module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            gimnasio: {
              primario: '#2b6777',
              secundario: '#c8d26f',
            },
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
          spacing: {
            '72': '18rem',
            '84': '21rem',
            '96': '24rem',
          },
          borderRadius: {
            'xl': '1.25rem',
            '2xl': '1.5rem',
          },
          boxShadow: {
            'gimnasio': '0 4px 10px rgba(0, 0, 0, 0.1)',
          },
        },
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }