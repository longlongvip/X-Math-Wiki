/* config/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: 'Home', link: '/' },
    {
        text: '基础',
        items: [
            { text: '运算', link: '/compute/' },
            { text: '分析', link: '/analyze/' },
            { text: '几何', link: '/geometry/' },
            { text: '公式', link: '/formula/'},
        ],
    },
    {
        text: '高级',
        items: [
            { text: '分形', link: '/fractal/' },
            { text: '悖论', link: '/paradox/' },
            { text: '问题', link: '/problems/' },
        ],
    },
    {
        text: '书',
        items: [
            { text: '中国', link: '/chinese/' },

        ],
    },

    { text: '数学家', link: '/mathematician/' },

    {
        text: '工具',
        items: [
            { text: '工具', link: '/tools/' },
            { text: '软件', link: '/software/' },

        ],
    },

    {
        text: '应用',
        items: [
            { text: '动漫', link: '/comic' },
            { text: '物理', link: '/physics' },
        ],
    },
]
