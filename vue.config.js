module.exports = {
    pwa: {
      manifestOptions: {
        name: "System Wyborczy Samorządu Studentów UP",
        short_name: "System Wyborczy",
        start_url: ".",
        display: "standalone",
        theme_color: "#160066",
        background_color:"#000000",
        icons: [
            {
               "src":"./img/icons/android-chrome-192x192.png",
               "sizes":"192x192",
               "type":"image/png"
            },
            {
               "src":"./img/icons/android-chrome-512x512.png",
               "sizes":"512x512",
               "type":"image/png"
            },
            {
               "src":"./img/icons/android-chrome-maskable-192x192.png",
               "sizes":"192x192",
               "type":"image/png",
               "purpose":"maskable"
            },
            {
               "src":"./img/icons/android-chrome-maskable-512x512.png",
               "sizes":"512x512",
               "type":"image/png",
               "purpose":"maskable"
            }
         ],
      },
  
      themeColor: "#160066",
      msTileColor: "#000000",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "black",
      iconPaths: {
        favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
        appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/msapplication-icon-144x144.png'
      },
      // configure the workbox plugin
      //workboxPluginMode: "GenerateSW",
    },
  };