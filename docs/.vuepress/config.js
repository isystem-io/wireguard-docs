module.exports  = ctx => ({
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'Wireguard VPN',
            description: 'Бесплатный VPN сервис Wireguard на AWS'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Wireguard VPN',
            description: 'Free Wireguard VPN service on AWS',
        },
        '/kk/': {
            lang: 'kk-KZ',
            title: 'Wireguard VPN',
            description: 'AWS-te tegin Wireguard VPN qızmeti'
        }
    },
  head: [ 
      ['link', { rel: 'icon', href: '/images/logo.png' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  port: 4302,
  theme: '@vuepress/vue',
  themeConfig: {
        logo: '/images/logo.png',
        repo: 'https://github.com/isystem-io/wireguard-docs',
        repoLabel: 'Github',
        editLinks: true,
        docsRepo: 'https://github.com/isystem-io/wireguard-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        locales: {
            '/': {
                label: 'Русский',
                selectText: 'Языки',
                editLinkText: 'Отредактировать в Github',
                lastUpdated: 'Последнее обновление',
                serviceWorker: {
                    updatePopup: {
                    message: "Доступен новый контент.",
                    buttonText: "Обновить"
                    }
                },
                nav: require('./navbar/ru'),
                sidebar: {
                  '/ru/': getRootSidebar('Wireguard VPN', 'Краткое описание'),
                },        
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on Github',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                    message: "New content available.",
                    buttonText: "Refresh"
                    }
                },
                nav: require('./navbar/en'),
                sidebar: {
                  '/en/': getRootSidebar('Wireguard VPN', 'Description'),
                },        
            },
            '/kk/': {
                label: 'Qazaqşa',
                selectText: 'Tilder',
                editLinkText: 'Github-da öñdew',
                lastUpdated: 'Soñğı jañartw',
                serviceWorker: {
                    updatePopup: {
                    message: "Jaña mazmun bar.",
                    buttonText: "Jañartw"
                    }
                },
                nav: require('./navbar/kk'),
                sidebar: {
		              '/kk/': getRootSidebar('Wireguard VPN', 'Qısqaşa sïpattaması'),
                },        
           }       
        },
        plugins: [
            ['@vuepress/back-to-top', true],
            ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
            }],
            ['@vuepress/medium-zoom', true], 
            ['@vuepress/google-analytics', {
              ga: 'UA-138588888-1'
            }],
        ],
        extraWatchFiles: [
            '.vuepress/navbar/ru.js',
            '.vuepress/navbar/en.js',
            '.vuepress/navbar/kk.js',
        ],
        markdown: {
            // options for markdown-it-anchor
            anchor: { permalink: false },
            // options for markdown-it-toc
            toc: { includeLevel: [1, 2] },
        },
   }
})

function getRootSidebar (groupName, introduction) {
    return [
      {
        title: groupName,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['',introduction],
          'aws-account-registration',
          'create-aws-instance',
          'connection-to-instance',
          'configure-wireguard',
          'configure-vpn-clients',
          'check-the-installation-of-vpn',
        ]
      }
    ]
}