const colorList = [
     {
        name: "Color Wheel",
        icon_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sLLsckpfvVzJG5QkFXKr2QAAAA%26pid%3DApi&f=1",
        link: "https://color.adobe.com/create"
    },
    {
        name: "Color Safe",
        icon_url: "https://www.w3schools.com/colors/pic_ryb_itten.jpg",
        link: "http://colorsafe.co/"
    },
    {
        name: "WebAIM",
        icon_url: "https://external-content.duckduckgo.com/ip3/webaim.org.ico",
        link: "https://webaim.org/resources/contrastchecker/"
    },
    {
        name: "Bootstrap Colors",
        icon_url: "data:image/png;base64,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",
        link: "https://getbootstrap.com/docs/4.2/getting-started/introduction/",
        link: "https://mdbootstrap.com/docs/jquery/css/colors/"
    },
    {
        name: "Brand Colors",
        icon_url: "https://external-content.duckduckgo.com/ip3/usbrandcolors.com.ico",
        link: "https://usbrandcolors.com/"
    },
    {
        name: "Convert a Color",
        icon_url: "https://external-content.duckduckgo.com/ip3/www.convertacolor.com.ico",
        link: "https://convertacolor.com/"
    },
    {
        name: "Color Hunt",
        icon_url: "https://colorhunt.co/img/logo-gif.gif",
        link: "https://colorhunt.co/palette/181665"
    },
    {
        name: "Color and Fonts",
        icon_url: "https://www.w3schools.com/colors/pic_ryb_itten.jpg",
        link: "https://www.colorsandfonts.com/index.html"
    }
]

export default colorList