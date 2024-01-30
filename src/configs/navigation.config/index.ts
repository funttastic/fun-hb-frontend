import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'funttastic',
        path: '',
        title: 'Funttastic',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'funttasticDiscord',
                path: 'https://discord.com/invite/zNzpPhHF86',
                title: 'Discord',
                isExternalLink: true,
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'funttasticInstagram',
                path: 'https://www.instagram.com/funttastic/',
                isExternalLink: true,
                title: 'Instagram',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'funttasticTelegram',
                path: 'https://t.me/FunttasticLabs',
                isExternalLink: true,
                title: 'Telegram',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'funttasticGithub',
                path: 'https://github.com/funttastic/',
                isExternalLink: true,
                title: 'Github',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'funttasticWebsite',
                path: 'https://www.funttastic.com/',
                isExternalLink: true,
                title: 'Website',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'funttasticMail',
                path: 'mailto:contact@funttastic.com',
                title: 'E-Mail',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'kujira',
        path: '',
        title: 'Kujira',
        translateKey: '',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'kujiraWebsite',
                path: 'https://kujira.network/',
                isExternalLink: true,
                title: 'Website',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'kujiraFIN',
                path: 'https://fin.kujira.network/',
                isExternalLink: true,
                title: 'Kujira FIN',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'kujiraBLUE',
                path: 'https://blue.kujira.network/',
                isExternalLink: true,
                title: 'Kujira BLUE',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'hummingbot',
        path: '',
        title: 'Hummingbot',
        translateKey: '',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'hummingbotWebsite',
                path: 'https://hummingbot.org/',
                isExternalLink: true,
                title: 'Website',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'hummingbotGuide',
                path: 'https://hummingbot.org/installation/',
                isExternalLink: true,
                title: 'Hummingbot Installation Guide',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
