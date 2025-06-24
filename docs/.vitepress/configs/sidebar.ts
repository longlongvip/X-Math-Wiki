import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'analyze/',
        resolvePath: '/analyze/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'chinese/',
        resolvePath: '/chinese/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'comic/',
        resolvePath: '/comic/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'compute/',
        resolvePath: '/compute/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'formula/',
        resolvePath: '/formula/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'fractal/',
        resolvePath: '/fractal/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'geometry/',
        resolvePath: '/geometry/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'software/',
        resolvePath: '/software/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'mathematician/',
        resolvePath: '/mathematician/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'chinese/',
        resolvePath: '/chinese/',
        useTitleFromFileHeading: true,
    },

];

export const sidebar = generateSidebar(vitepressSidebarOptions);
