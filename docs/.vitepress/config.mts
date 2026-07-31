import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: './src',
    base: '/',
    title: 'Mubai Coder',
    description: '分享笔记',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide' },
            // {
            //     text: 'APP',
            //     items: [{ text: 'Android', link: '/app/android' }]
            // },

            {
                text: 'Python',
                items: [
                    {
                        text: 'Tools',
                        items: [
                            { text: 'miniforge', link: '/python/tools/miniforge' },
                            { text: 'uv', link: '/python/tools/uv' },
                            { text: 'Anaconda', link: '/python/tools/anaconda' },
                            { text: 'miniconda', link: '/python/tools/miniconda' },
                            { text: 'pip', link: '/python/tools/pip' },
                            { text: 'pyenv', link: '/python/tools/pyenv' },
                            { text: 'jupyter', link: '/python/tools/jupyter' }
                        ]
                    },
                    { text: 'Django', link: '/python/django' }
                ]
            },
            {
                text: 'JavaScript',
                items: [
                    {
                        text: 'Tools',
                        items: [
                            { text: 'pnpm', link: '/js/tools/pnpm' },
                            { text: 'npm', link: '/js/tools/npm' },
                            { text: 'yarn', link: '/js/tools/yarn' },
                            { text: 'nvm', link: '/js/tools/nvm' }
                        ]
                    },
                    { text: 'React', link: '/js/react' },
                    { text: 'Electron', link: '/js/electron' }
                ]
            },
            {
                text: 'AI',
                items: [
                    {
                        text: 'Agent',
                        items: [
                            { text: 'LangChain', link: '/ai/agent/langchain/index' },
                            { text: 'LangGraph', link: '/ai/agent/langgraph/index' }
                        ]
                    },
                    {
                        text: 'Code',
                        items: [
                            { text: 'Qwen Code', link: '/ai/code/qwen-code' },
                            { text: 'Claude Code', link: '/ai/code/claude-code' },
                            { text: 'Spec-Kit', link: '/ai/code/spec-kit' },
                            { text: 'OpenSpec', link: '/ai/code/openspec' }
                        ]
                    },
                    { text: 'Skills', link: '/ai/skills' },
                    {
                        text: 'Ollama',
                        link: '/ai/ollama'
                    }
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'Docker', link: '/tools/docker' },
                    { text: 'Git', link: '/tools/git' },
                    { text: 'WSL', link: '/tools/wsl' },
                    { text: 'Vim', link: '/tools/vim' },
                    { text: 'VS Code', link: '/tools/vscode' },
                    { text: 'Ubuntu', link: '/tools/ubuntu' },
                    { text: 'Centos', link: '/tools/centos' },
                    { text: 'Linux', link: '/tools/linux' },
                    { text: 'Mac', link: '/tools/mac' }
                ]
            }
        ],

        sidebar: {
            '/js/': [
                {
                    text: 'Tools',
                    collapsed: false,
                    items: [
                        { text: 'pnpm', link: '/js/tools/pnpm' },
                        { text: 'npm', link: '/js/tools/npm' },
                        { text: 'yarn', link: '/js/tools/yarn' },
                        { text: 'nvm', link: '/js/tools/nvm' },
                        { text: 'verdaccio', link: '/js/tools/verdaccio' },
                        { text: 'lerna', link: '/js/tools/lerna' }
                    ]
                },
                {
                    text: 'React',
                    link: '/js/react'
                },
                {
                    text: 'Electron',
                    link: '/js/electron'
                }
            ],
            '/python/': [
                {
                    text: 'Tools',
                    collapsed: false,
                    items: [
                        { text: 'miniforge', link: '/python/tools/miniforge' },
                        { text: 'uv', link: '/python/tools/uv' },
                        { text: 'Anaconda', link: '/python/tools/anaconda' },
                        { text: 'miniconda', link: '/python/tools/miniconda' },
                        { text: 'pip', link: '/python/tools/pip' },
                        { text: 'pyenv', link: '/python/tools/pyenv' },
                        { text: 'py.exe', link: '/python/tools/py-exe' },
                        { text: 'rye', link: '/python/tools/rye' },
                        { text: 'jupyter', link: '/python/tools/jupyter' },
                        { text: 'More', link: '/python/tools/more' }
                    ]
                },
                {
                    text: 'Django',
                    link: '/python/django'
                }
            ],
            '/app/': [
                {
                    text: 'Android',
                    link: '/app/android'
                }
            ],
            '/tools/': [
                {
                    text: 'Docker',
                    link: '/tools/docker'
                },
                {
                    text: 'Git',
                    link: '/tools/git'
                },
                {
                    text: 'WSL',
                    link: '/tools/wsl'
                },
                {
                    text: 'Vim',
                    link: '/tools/vim'
                },
                {
                    text: 'VS Code',
                    link: '/tools/vscode'
                },
                {
                    text: 'Ubuntu',
                    link: '/tools/ubuntu'
                },
                {
                    text: 'Centos',
                    link: '/tools/centos'
                },
                {
                    text: 'Linux',
                    link: '/tools/linux'
                },
                {
                    text: 'Mac',
                    link: '/tools/mac'
                }
            ],
            '/ai/': [
                {
                    text: 'Agent',
                    collapsed: false,
                    items: [
                        {
                            text: 'LangChain',
                            collapsed: false,
                            items: [
                                { text: '入门', link: '/ai/agent/langchain/index' },
                                { text: 'Model IO', link: '/ai/agent/langchain/io' },
                                { text: 'PromptTemplate', link: '/ai/agent/langchain/prompt' },
                                { text: 'Paser', link: '/ai/agent/langchain/paser' },
                                { text: 'LCEL', link: '/ai/agent/langchain/lcel' },
                                { text: 'Memory', link: '/ai/agent/langchain/memory' },
                                { text: 'Tools', link: '/ai/agent/langchain/tools' },
                                { text: 'Vector', link: '/ai/agent/langchain/vector' },
                                { text: 'RAG', link: '/ai/agent/langchain/rag' },
                                { text: 'MCP', link: '/ai/agent/langchain/mcp' },
                                { text: 'Agent', link: '/ai/agent/langchain/agent' }
                            ]
                        },
                        {
                            text: 'LangGraph',
                            collapsed: false,
                            items: [
                                { text: '入门', link: '/ai/agent/langgraph/index' },
                                { text: 'API', link: '/ai/agent/langgraph/api' },
                                { text: '高级特性', link: '/ai/agent/langgraph/advanced' },
                                { text: 'A2A', link: '/ai/agent/langgraph/a2a' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Code',
                    collapsed: false,
                    items: [
                        { text: 'Qwen Code', link: '/ai/code/qwen-code' },
                        { text: 'Claude Code', link: '/ai/code/claude-code' },
                        { text: 'Spec-Kit', link: '/ai/code/spec-kit' },
                        { text: 'OpenSpec', link: '/ai/code/openspec' }
                    ]
                },
                {
                    text: 'Skills',
                    link: '/ai/skills'
                },
                {
                    text: 'Ollama',
                    link: '/ai/ollama'
                }
            ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/mubaicoder/docs' }],
        outline: {
            level: 'deep',
            label: 'On this page'
        },
        docFooter: {
            prev: 'Previous page',
            next: 'Next page'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present Mubai Coder'
        },
        editLink: {
            pattern: 'https://github.com/mubaicoder/docs/edit/main/docs/src/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        externalLinkIcon: true,
        search: {
            provider: 'local'
        }
    }
})
