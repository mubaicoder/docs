import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: './src',
    base: '/',
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
            { text: 'App', link: '/app/android' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            },
            {
                text: 'App',
                items: [{ text: 'Android', link: '/app/android' }]
            }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    }
})
