// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    theme: {
        colors: {
            'red-padel': '#dc2626',
            'white': '#ffffff',
            'black': '#ffffff'
        },
        extend: {
            backgroundImage: {
                'padel-image': "url('./src/img/08191.jpg')",
            }

        },
    },
    variants: {},
    plugins: [],
}
