// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    theme: {
        colors: {
            'red-padel': '#dc2626',
            'white': '#ffffff',
            'black': '#000000',
            'testing1': '#c29d32',
            'testing2': '#4b6af5',
            'testing3': '#d528e8'

        },
        extend: {
            backgroundImage: {
                'padel-image': "url('../img/08191.jpg')",
            }

        },
    },
    variants: {},
    plugins: [],
}
