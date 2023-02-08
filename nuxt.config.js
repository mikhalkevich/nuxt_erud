export default defineNuxtConfig({
    app: {
        head: {
            title: 'Разработка web-приложения на Laravel!',
            meta: [
                { name: 'description', content: 'Разработка web-приложения с разделением на фронтенд и бэкенд части' }
            ],
        }
    },
    css: ['~/assets/css/main.css'],
    plugins: ['~/plugins/axios.js'],
    modules: ['@vuestic/nuxt', '@nuxt/ui'],
    vuestic: {
        config: {
            colors: {
                variables: {
                    // Базовые цвета
                    primary: '#23e066',
                    secondary: '#002c85',
                    success: '#40e583',
                    info: '#2c82e0',
                    danger: '#e34b4a',
                    warning: '#ffc200',
                    gray: '#babfc2',
                    dark: '#34495e',
                    // Пользовательские цвета
                    yourCustomColor: '#d0f55d',
                },
            }
        }
    }
})

