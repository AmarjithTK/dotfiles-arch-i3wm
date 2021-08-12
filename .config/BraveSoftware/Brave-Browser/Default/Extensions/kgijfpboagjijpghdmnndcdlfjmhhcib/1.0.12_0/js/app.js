(function() {
    var configWallpapers = [
        {"author": "Elle Zhu", "location": "Yosemite National Park, United States", "url": "img/wallpapers/elle-zhu-22896-unsplash.jpeg"},
        {"author": "Daniel Olah", "location": "Zion National Park, United States", "url": "img/wallpapers/daniel-olah-161117-unsplash.jpeg"},
        {"author": "Ashim D'Silva", "location": "Lower Antelope Canyon, United States", "url": "img/wallpapers/ashim-d-silva-162286-unsplash.jpeg"},
        {"author": "Sander Wehkamp", "location": "Dead Vlei, Namibia", "url": "img/wallpapers/sander-wehkamp-712498-unsplash.jpeg"},
        {"author": "Luca Bravo", "location": "Giau Pass, Italy", "url": "img/wallpapers/luca-bravo-415111-unsplash.jpeg"},
        {"author": "Luca Bravo", "location": "Giau Pass, Italy", "url": "img/wallpapers/luca-bravo-415109-unsplash.jpeg"},
        {"author": "Luca Bravo", "location": "Lago di Sorapis, Italy", "url": "img/wallpapers/luca-bravo-423211-unsplash.jpeg"},
        {"author": "Andrey Grinkevich", "location": "Moab, United States", "url": "img/wallpapers/andrey-grinkevich-359417-unsplash.jpeg"},
        {"author": "Lorenzo Spoleti", "location": "Monte Generoso, Switzerland", "url": "img/wallpapers/lorenzo-spoleti-717378-unsplash.jpeg"},
        {"author": "Preben Nilsen", "location": "Ha Giang, Vietnam", "url": "img/wallpapers/preben-nilsen-451295-unsplash.jpeg"},
        {"author": "Cristina Gottardi", "location": "Giau Pass, Italy", "url": "img/wallpapers/cristina-gottardi-422394-unsplash.jpeg"},
        {"author": "Mishal Ibrahim", "location": "Huvadhu Atoll, Maldives", "url": "img/wallpapers/mishal-ibrahim-616127-unsplash.jpeg"},
        {"author": "Kaidi Guo", "location": "Dachstein Mountains, Austria", "url": "img/wallpapers/kaidi-guo-236880-unsplash.jpeg"},
        {"author": "Jay", "location": "Coalcliff, Australia", "url": "img/wallpapers/jay-6290-unsplash.jpeg"},
        {"author": "Ethan Robertson", "location": "Maui County, United States", "url": "img/wallpapers/ethan-robertson-182542-unsplash.jpeg"},
        {"author": "Andre Benz", "location": "Malibu, United States", "url": "img/wallpapers/andre-benz-230287-unsplash.jpeg"},
        {"author": "Jesse Echevarria", "location": "Valley of Fire, United States", "url": "img/wallpapers/jesse-echevarria-538968-unsplash.jpeg"},
        {"author": "Michel Catalisano", "location": "Lago di Sorapis, Italy", "url": "img/wallpapers/michel-catalisano-415709-unsplash.jpeg"},
        {"author": "Ron Whitaker", "location": "Tor Bay, Canada", "url": "img/wallpapers/ron-whitaker-657213-unsplash.jpeg"},
        {"author": "Federico Beccari", "location": "Monte Grappa, Italy", "url": "img/wallpapers/federico-beccari-477296-unsplash.jpeg"},
        {"author": "Stefan Stefancik", "location": "High Tatras, Slovakia", "url": "img/wallpapers/stefan-stefancik-105376-unsplash.jpeg"},
        {"author": "Austin Schmid", "location": "Valley of Fire, United States", "url": "img/wallpapers/austin-schmid-134030-unsplash.jpeg"},
        {"author": "Benjamin Voros", "location": "Moena, Italy", "url": "img/wallpapers/benjamin-voros-575800-unsplash.jpeg"},
        {"author": "Angel Origgi", "location": "Yosemite National Park, United States", "url": "img/wallpapers/angel-origgi-1198759-unsplash.jpeg"}
    ];  

    var configSearchEngines = [
        {"id": "google", "name": "Google", "url": "https://www.google.com/search", "input_name": "q", "placeholder": "Search the web", "icon": "img/assets/search-google.svg"},
        {"id": "bing", "name": "Bing", "url": "https://www.bing.com/search", "input_name": "q", "placeholder": "Search the web", "icon": "img/assets/search-bing.svg"},
        {"id": "yahoo", "name": "Yahoo!", "url": "https://search.yahoo.com/search", "input_name": "p", "placeholder": "Search the web", "icon": "img/assets/search-yahoo.svg"},
        {"id": "duckduckgo", "name": "DuckDuckGo", "url": "https://duckduckgo.com", "input_name": "q", "placeholder": "Search the web", "icon": "img/assets/search-duckduckgo.svg"},
        {"id": "qwant", "name": "Qwant", "url": "https://www.qwant.com", "input_name": "q", "placeholder": "Search the web", "icon": "img/assets/search-qwant.svg"}
    ];
  
    var configTilesBrandLogos = [
        {"name": "google", "color": "#4285f4", "graphic": "img/tiles-brand-logos/google.svg"},
        {"name": "youtube", "color": "#cd201f", "graphic": "img/tiles-brand-logos/youtube.svg"},
        {"name": "facebook", "color": "#3b5998", "graphic": "img/tiles-brand-logos/facebook.svg"},
        {"name": "baidu", "color": "#2319DC", "graphic": "img/tiles-brand-logos/baidu.svg"},
        {"name": "wikipedia", "color": "#000000", "graphic": "img/tiles-brand-logos/wikipedia.svg"},
        {"name": "reddit", "color": "#ff4500", "graphic": "img/tiles-brand-logos/reddit.svg"},
        {"name": "yahoo", "color": "#440099", "graphic": "img/tiles-brand-logos/yahoo.svg"},
        {"name": "qq", "color": "#ffa600", "graphic": "img/tiles-brand-logos/qq.svg"},
        {"name": "taobao", "color": "#ff4200", "graphic": "img/tiles-brand-logos/taobao.svg"},
        {"name": "amazon", "color": "#ff9900", "graphic": "img/tiles-brand-logos/amazon.svg"},
        {"name": "tmall", "color": "#a91e24", "graphic": "img/tiles-brand-logos/tmall.svg"},
        {"name": "twitter", "color": "#55acee", "graphic": "img/tiles-brand-logos/twitter.svg"},
        {"name": "sohu", "color": "#ffcc2a", "graphic": "img/tiles-brand-logos/sohu.svg"},
        {"name": "instagram", "color": "#3f729b", "graphic": "img/tiles-brand-logos/instagram.svg"},
        {"name": "vk", "color": "#45668e", "graphic": "img/tiles-brand-logos/vk.svg"},
        {"name": "yandex", "color": "#ffcc00", "graphic": "img/tiles-brand-logos/yandex.svg"},
        {"name": "360", "color": "#24ab38", "graphic": ""},
        {"name": "netflix", "color": "#E50914", "graphic": "img/tiles-brand-logos/netflix.svg"},
        {"name": "pornhub", "color": "#1b1b1b", "graphic": ""},
        {"name": "twitch", "color": "#6441a5", "graphic": "img/tiles-brand-logos/twitch.svg"},
        {"name": "linkedin", "color": "#007bb6", "graphic": "img/tiles-brand-logos/linkedin.svg"},
        {"name": "microsoft", "color": "#f65314", "graphic": "img/tiles-brand-logos/microsoft.svg"},
        {"name": "bing", "color": "#ffb900", "graphic": "img/tiles-brand-logos/bing.svg"},
        {"name": "ebay", "color": "#e53238", "graphic": "img/tiles-brand-logos/ebay.svg"},
        {"name": "alipay", "color": "#00a1e9", "graphic": "img/tiles-brand-logos/alipay.svg"},
        {"name": "xvideos", "color": "#141414", "graphic": ""}, 
        {"name": "gmail", "color": "#D14836", "graphic": "img/tiles-brand-logos/gmail.svg"},
        {"name": "mail", "color": "#168de2", "graphic": "img/tiles-brand-logos/mailru.svg"},
        {"name": "ok", "color": "#ed812b", "graphic": "img/tiles-brand-logos/ok.svg"},
        {"name": "whatsapp", "color": "#075e54", "graphic": "img/tiles-brand-logos/whatsapp.svg"},
        {"name": "spotify", "color": "#1ED760", "graphic": "img/tiles-brand-logos/spotify.svg"},
        {"name": "xhamster", "color": "#222222", "graphic": ""},
        {"name": "xnxx", "color": "#0707bd", "graphic": ""},
        {"name": "samsung", "color": "#0c4da2", "graphic": ""},
        {"name": "accuweather", "color": "#f15413", "graphic": "img/tiles-brand-logos/accuweather.svg"},
        {"name": "zalando", "color": "#ff6800", "graphic": "img/tiles-brand-logos/zalando.svg"},
        {"name": "behance", "color": "#1769ff", "graphic": "img/tiles-brand-logos/behance.svg"},
        {"name": "booking", "color": "#003580", "graphic": "img/tiles-brand-logos/booking.svg"},
        {"name": "aliexpress", "color": "#e52e05", "graphic": "img/tiles-brand-logos/aliexpress.svg"},
        {"name": "groupon", "color": "#82b548", "graphic": "img/tiles-brand-logos/groupon.svg"},
        {"name": "hootsuite", "color": "#003366", "graphic": "img/tiles-brand-logos/hootsuite.svg"},
        {"name": "ikea", "color": "#ffcc33", "graphic": "img/tiles-brand-logos/ikea.svg"},
        {"name": "pinterest", "color": "#cc2127", "graphic": "img/tiles-brand-logos/pinterest.svg"},
        {"name": "soundcloud", "color": "#ff7700", "graphic": "img/tiles-brand-logos/soundcloud.svg"},
        {"name": "apple", "color": "#999999", "graphic": "img/tiles-brand-logos/apple.svg"},
        {"name": "producthunt", "color": "#DA552F", "graphic": "img/tiles-brand-logos/producthunt.svg"},
        {"name": "blogspot", "color": "#f57d00", "graphic": "img/tiles-brand-logos/blogspot.svg"},
        {"name": "dropbox", "color": "#0061fe", "graphic": "img/tiles-brand-logos/dropbox.svg"},
        {"name": "ycombinator", "color": "#ff6600", "graphic": "img/tiles-brand-logos/ycombinator.svg"},
        {"name": "medium", "color": "#00ab6c", "graphic": "img/tiles-brand-logos/medium.svg"},
        {"name": "onet", "color": "#ffd301", "graphic": ""},
        {"name": "wp", "color": "#ed1c25", "graphic": ""},
        {"name": "allegro", "color": "#ff5902", "graphic": ""},
        {"name": "interia", "color": "#1d3e6f", "graphic": ""},
        {"name": "olx", "color": "#5a2c82", "graphic": ""},
        {"name": "web", "color": "#ffc800", "graphic": ""},
        {"name": "avito", "color": "#00aaff", "graphic": ""}
    ];
    
    var configTilesMaterialColors = {
        "red": {"300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "hex": "#f44336", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000"},
        "pink": {"300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "hex": "#e91e63", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162"},
        "purple": {"300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "hex": "#9c27b0", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff"},
        "deepPurple": {"300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "hex": "#673ab7", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea"},
        "indigo": {"300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "hex": "#3f51b5", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe"},
        "blue": {"300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "hex": "#2196f3", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff"},
        "lightBlue": {"300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "hex": "#03a9f4", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea"},
        "cyan": {"300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "hex": "#00bcd4", "a400": "#00e5ff", "a700": "#00b8d4"},
        "teal": {"300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "hex": "#009688", "a400": "#1de9b6", "a700": "#00bfa5"},
        "green": {"300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "hex": "#4caf50", "a400": "#00e676", "a700": "#00c853"},
        "lightGreen": {"300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "hex": "#8bc34a", "a700": "#64dd17"},
        "lime": {"300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "hex": "#cddc39", "a700": "#aeea00"},
        "yellow": {"300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "hex": "#ffeb3b", "a400": "#ffea00", "a700": "#ffd600"},
        "amber": {"300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "hex": "#ffc107", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00"},
        "orange": {"300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "hex": "#ff9800", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00"},
        "deepOrange": {"300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "hex": "#ff5722", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00"},
        "brown": {"300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723", "hex": "#795548"},
        "grey": {"300": "#e0e0e0", "400": "#bdbdbd", "500": "#9e9e9e", "600": "#757575", "700": "#616161", "800": "#424242", "900": "#212121", "hex": "#9e9e9e"},
        "blueGrey": {"300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238", "hex": "#607d8b"}
    };
    
    var configInitTiles_GENERIC = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.netflix.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_US = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.yahoo.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_GB = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.co.uk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.co.uk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.co.uk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://bbc.co.uk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_DE = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.de", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.de", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.de", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://ebay-kleinanzeigen.de", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://web.de", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_FR = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.fr", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://leboncoin.fr", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://orange.fr", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.fr", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.fr", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_ES = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.es", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.es", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://marca.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.es", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_PL = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.pl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://allegro.pl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.onet.pl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wp.pl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.olx.pl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_RU = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://vk.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://yandex.ru", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://mail.ru", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.google.ru", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://ok.ru", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.avito.ru", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.rambler.ru", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_IT = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.it", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.it", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://repubblica.it", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://subito.it", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.it", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_DA = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.dk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://ekstrabladet.dk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://dr.dk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://bt.dk", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.netflix.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configInitTiles_NL = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.nl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://live.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.nl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.nl", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];
    
    var configInitTiles_AU = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.ebay.com.au", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.com.au", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://reddit.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://bom.gov.au", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];
    
    var configInitTiles_IR = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://shabakaty.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://yahoo.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.twitter.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];
    
    var configInitTiles_IN = [
        [
            {"tab_name": "Start"},
            {"tile_url": "https://www.google.co.in", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.youtube.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.facebook.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.amazon.in", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://flipkart.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://cricbuzz.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://yahoo.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.aliexpress.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.booking.com", "tile_name": "", "tile_type": "personal"},
            {"tile_url": "https://www.wikipedia.org", "tile_name": "", "tile_type": "personal"}
        ]
    ];

    var configAffLinks = [
        {
            "domain": "amazon.com",
            "affLink": "https://www.amazon.com/?&_encoding=UTF8&tag=simpli019-20&linkCode=ur2&linkId=67848c5e9d6dcf4fcb9038965665cfbd&camp=1789&creative=9325"
        },
        {
            "domain": "amazon.de",
            "affLink": "https://www.amazon.de/?&_encoding=UTF8&tag=simpli03-21&linkCode=ur2&linkId=68a6b417eae5158ad976817c7debb1d6&camp=1638&creative=6742"
        },
        {
            "domain": "amazon.co.uk",
            "affLink": "https://www.amazon.co.uk/?&_encoding=UTF8&tag=simpli0f-21&linkCode=ur2&linkId=a00c3a4613908ef1ed5c6f4daa415958&camp=1634&creative=6738"
        },
        {
            "domain": "amazon.fr",
            "affLink": "https://www.amazon.fr?&_encoding=UTF8&tag=simpli0e-21&linkCode=ur2&linkId=ba1a7dfe69f846e21f74cbcf28aaf756&camp=1642&creative=6746"
        },
        {
            "domain": "amazon.ca",
            "affLink": "https://www.amazon.ca/?&_encoding=UTF8&tag=simpli0492-20&linkCode=ur2&linkId=3c04b2ae2159165bbf193f4f71e8bc34&camp=15121&creative=330641"
        },
        {
            "domain": "amazon.it",
            "affLink": "https://www.amazon.it/?&_encoding=UTF8&tag=simpli08-21&linkCode=ur2&linkId=9bd452e86e0a509bd38e7f98cab36349&camp=3414&creative=21718"
        },
        {
            "domain": "amazon.es",
            "affLink": "https://www.amazon.es/?&_encoding=UTF8&tag=simpli02-21&linkCode=ur2&linkId=c9e111496deace29ff3902c207349e52&camp=3638&creative=24630"
        },
        {
            "domain": "booking.com",
            "affLink": "https://www.booking.com/index.html?aid=1736198"
        },
        {
            "domain": "aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/b8c2ZhAY"
        },
        {
            "domain": "best.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/0kgRBtI"
        },
        {
            "domain": "ru.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/RiD9R6s"
        },
        {
            "domain": "pt.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/bVofXILm"
        },
        {
            "domain": "es.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/bTTdwyQ4"
        },
        {
            "domain": "fr.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/crjua5Y4"
        },
        {
            "domain": "pl.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/P7y0ujm"
        },
        {
            "domain": "he.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/bAptKSiU"
        },
        {
            "domain": "it.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/beAD2CV2"
        },
        {
            "domain": "tr.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/b5xg4cIc"
        },
        {
            "domain": "de.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/r2ykhSC"
        },
        {
            "domain": "ko.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/0fujBLw"
        },
        {
            "domain": "ar.aliexpress.com",
            "affLink": "http://s.click.aliexpress.com/e/bw8t1l1A"
        }
    ];

    // html tools
    HTMLElement.prototype.hasClass = function(c) {
        return (" " + this.className + " ").indexOf(" " + c + " ") !== -1;
    };

    HTMLElement.prototype.addClass = function(c) {
        if (!this.hasClass(c)) {
            this.className = (this.className + " " + c).trim();
            return true;
        }
        return false;
    };

    HTMLElement.prototype.removeClass = function(c) {
        if (this.hasClass(c)) {
            this.className = (" " + this.className + " ").replace(" " + c + " ", " ").trim();
            return true;
        }
        return false;
    };

    // the app
    var app = function() {
        window.removeEventListener("load", app);

        // GA code
        (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
        
        ga("create", "UA-121536159-1", "auto");
        ga("set", "checkProtocolTask", null);
        ga("send", "pageview", "Start page");
        
        function initTabsWithTiles() {            
            var tabsWrapperEl = document.createElement("div"),
                tabsNavEl = document.createElement("div"),
                tabsNavAddEl = document.createElement("div"),
                tabsEl = document.createElement("div");
                
            tabsWrapperEl.id = "tabs-wrapper";
            tabsNavEl.id = "tabs-nav";
            tabsNavAddEl.id = "tab-nav-item-add";
            tabsEl.id = "tabs";
            
            tabsNavAddEl.addEventListener("click", tabAdd);
            
            // drag and drop variables
            var parentElement; // Represents the container of the tiles
            var moveTile; // The moving tile
            var moveTileWrapper; // The parent of the moving tile
            var moveTileWrapperIndex; // Index of the moveTile variable
            
            /// top left x & y coordinates of the tile while it's moving
            var elementXCoord;
            var elementYCoord;
            
            var tilesFromStorage = "";
            // on first start, when tiles are not in storage, build them from config JSON
            if (getStorage("simpli_tilesConfig") == null) {
                tilesFromStorage = locationTilesConfig(_userLocation);
                ga("send", "event", "tiles", "initiated", "config-" + _userLocation);
            } else {
                tilesFromStorage = JSON.parse(getStorage("simpli_tilesConfig"));
            }
            
            _numberOfTabs = tilesFromStorage.length;
            
            // build tabs wits tiles based on obtained user's config from localStorage
            for (var i = 0; i < _numberOfTabs; i++) {
                var tabsNavItemEl = document.createElement("div"),
                    tabsNavRemoveEl = document.createElement("div"),
                    tabEl = document.createElement("div"),
                    tileAddEl = document.createElement("div");
                
                tabEl.addEventListener("mouseup", stopMove);
                
                // start from index = 1, as first element with index = 0 is reserved for tab_name
                for (var j = 1; j < tilesFromStorage[i].length; j++) {
                    tileBuildHTMLEl(tabEl,
                        tilesFromStorage[i][j].tile_url,
                        tilesFromStorage[i][j].tile_name,
                        (tilesFromStorage[i][j].tile_color == "" || typeof tilesFromStorage[i][j].tile_color == "undefined") ? "" : tilesFromStorage[i][j].tile_color,
                        (tilesFromStorage[i][j].tile_type == "" || typeof tilesFromStorage[i][j].tile_type == "undefined") ? "personal" : tilesFromStorage[i][j].tile_type);
                }
                
                // append "+" add tile element
                tileAddEl.className = "tile-add";
                tileAddEl.addEventListener("click", tileAdd);
                tabEl.appendChild(tileAddEl);

                tabEl.className = "tab";
                tabEl.setAttribute("data-tab-id", i + 1);
                tabEl.setAttribute("data-tab-name", tilesFromStorage[i][0].tab_name);
                
                tabsNavItemEl.className = "tab-nav-item";
                tabsNavItemEl.setAttribute("data-tab-nav-id", i + 1);
                // get tab name from first element (index = 0) in array
                tabsNavItemEl.setAttribute("data-tab-nav-name", tilesFromStorage[i][0].tab_name);
                tabsNavItemEl.innerHTML = tilesFromStorage[i][0].tab_name;
                
                tabsNavItemEl.addEventListener("click", function(event) {
                    event.stopPropagation();
                
                    var targetNavItem = event.target.hasClass("tab-nav-item") ? event.target : event.target.parentNode;
                    var targetNavItemId = targetNavItem.getAttribute("data-tab-nav-id");
                    showTabContent(targetNavItemId);
                });

                if (i == 0) {
                    tabsNavItemEl.addClass("active-tab-nav-item");
                    tabEl.addClass("active-tab");
                }
                
                tabsNavRemoveEl.addEventListener("click", tabRemove);
                tabsNavRemoveEl.className = "tab-nav-item-remove";
                
                // do not allow to remove Start tab
                if (i > 0) {
                    tabsNavItemEl.appendChild(tabsNavRemoveEl);
                }
                tabsNavEl.appendChild(tabsNavItemEl);

                tabsEl.appendChild(tabEl);
            }
            
            // when user will reach max. number of tabs, hide "+" option to add more tabs
            if (maxNumberOfTabReached()) {
                tabsNavAddEl.style.display = "none";
            }
            
            setNumberOfTilesColumns(tabsEl);
            
            tabsNavEl.appendChild(tabsNavAddEl);
            tabsWrapperEl.appendChild(tabsNavEl);
            tabsWrapperEl.appendChild(tabsEl);

            _appEl.appendChild(tabsWrapperEl);
            
            // on first run, after building tabs from config JSON, save them to storage
            // so they can be read on next page load from storage
            saveTilesToStorage();           
            
            // initTabsWithTiles() tools, together with add/remove tiles tools and drag and drop tools
            function tabAdd() {
                overlayBuilderAddWindow(_appEl, "Add a tab", 1, ["Name"], "Add", function(inputValues) {
                    var tabsNavEl = document.getElementById("tabs-nav"),
                        tabsNavRemoveEl = document.createElement("div"),
                        tabsEl = document.getElementById("tabs");
                        
                    // create empty tab and its nav item
                    var tabsNavItemEl = document.createElement("div"),
                        tabEl = document.createElement("div"),
                        tileAddEl = document.createElement("div");
                    
                    tabsNavItemEl.className = "tab-nav-item";
                    tabsNavItemEl.setAttribute("data-tab-nav-id", _numberOfTabs + 1);
                    tabsNavItemEl.setAttribute("data-tab-nav-name", inputValues[0]);          
                    tabsNavItemEl.innerHTML = inputValues[0];

                    // append "+" add tile element
                    tileAddEl.className = "tile-add";
                    tileAddEl.addEventListener("click", tileAdd);
                    tabEl.appendChild(tileAddEl);

                    tabEl.className = "tab";
                    tabEl.setAttribute("data-tab-id", _numberOfTabs + 1);
                    tabEl.setAttribute("data-tab-name", inputValues[0]);

                    tabsNavItemEl.addEventListener("click", function(event) {
                        event.stopPropagation();
                    
                        var targetNavItem = event.target.hasClass("tab-nav-item") ? event.target : event.target.parentNode;
                        var targetNavItemId = targetNavItem.getAttribute("data-tab-nav-id");
                        showTabContent(targetNavItemId);
                    });
                    
                    tabsNavRemoveEl.addEventListener("click", tabRemove);
                    tabsNavRemoveEl.className = "tab-nav-item-remove";
                    tabsNavItemEl.appendChild(tabsNavRemoveEl);
                    
                    // insert tab nav item before "+" item
                    tabsNavEl.insertBefore(tabsNavItemEl, tabsNavEl.lastChild);
                    tabsEl.appendChild(tabEl);
                    
                    // when new tab was added, update global number of tabs
                    _numberOfTabs = _numberOfTabs + 1;

                    // when user will reach max. number of tabs, do not show option to add more
                    if (maxNumberOfTabReached()) {
                        document.getElementById("tab-nav-item-add").style.display = "none";
                    }
                    
                    saveTilesToStorage();
                    ga("send", "event", "tabs", "add", "tabs after adding: " + _numberOfTabs);
                });
            }
            
            function tabRemove(event) {
                event.stopPropagation();

                var targetNavItem = event.target.hasClass("tab-nav-item") ? event.target : event.target.parentNode;
                var targetNavItemId = targetNavItem.getAttribute("data-tab-nav-id");
                var targetTab = document.querySelector("[data-tab-id='" + targetNavItemId + "']");

                // overlay with popup window - info about tab removal
                var overlayEl = document.createElement("div"),
                    popupWindowEl = document.createElement("div"),
                    popupWindowHeaderEl = document.createElement("h1"),
                    infoMsgEl = document.createElement("p"),
                    ctaButtonYesEl = document.createElement("div"),
                    ctaButtonNoEl = document.createElement("div");
    
                overlayEl.id = "overlay";
                popupWindowEl.id = "popup-window";             
                infoMsgEl.className = "info-message";
                ctaButtonYesEl.className = "button accept";
                ctaButtonNoEl.className = "button";
                
                popupWindowHeaderEl.innerHTML = "Remove a tab";
                infoMsgEl.innerHTML = 'Are you sure you want to remove "' + targetNavItem.getAttribute("data-tab-nav-name") + '" tab with all of its content?';
                ctaButtonYesEl.innerHTML = "Yes";
                ctaButtonNoEl.innerHTML = "No";
                
                ctaButtonYesEl.addEventListener("click", yesBtnFunction);
                ctaButtonNoEl.addEventListener("click", noBtnFunction);
                
                popupWindowEl.appendChild(popupWindowHeaderEl);
                popupWindowEl.appendChild(infoMsgEl);
                popupWindowEl.appendChild(ctaButtonYesEl);
                popupWindowEl.appendChild(ctaButtonNoEl);
                overlayEl.appendChild(popupWindowEl);
                
                _appEl.appendChild(overlayEl);               
                
                function yesBtnFunction(event) {
                    // if tab to be remove has class "active tab", move "active tab" to Start tab
                    if (targetNavItem.hasClass("active-tab-nav-item")) {
                        showTabContent(1);
                    }
                    // remove tab nav item, with respective tab
                    targetNavItem.remove();
                    targetTab.remove();
    
                    // when new tab removed, update global number of tabs
                    _numberOfTabs = _numberOfTabs - 1;
    
                    // check number of user's tabs after tab removal, and decide if to show "+" add new tab item
                    if (!maxNumberOfTabReached()) {
                        document.getElementById("tab-nav-item-add").style.display = "inline-block";
                    }
                    
                    saveTilesToStorage(); 
                    ga("send", "event", "tabs", "remove", "tabs after removal: " + _numberOfTabs); 
                    
                    // remove overlay
                    event.target.parentNode.parentNode.remove();                
                }
                
                function noBtnFunction(event) {
                    ga("send", "event", "tabs", "remove", "cancel");
                    // do nothing and remove overlay
                    event.target.parentNode.parentNode.remove();
                }
            }
            
            function showTabContent(dataTabId) {
                var targetNavItem = document.querySelector("[data-tab-nav-id='" + dataTabId + "']"),
                    currentActiveTabNavItem = document.getElementsByClassName("active-tab-nav-item")[0],
                    currentActiveTab = document.getElementsByClassName("active-tab")[0];

                currentActiveTabNavItem.removeClass("active-tab-nav-item");
                targetNavItem.addClass("active-tab-nav-item");

                currentActiveTab.removeClass("active-tab");
                var targetTab = document.querySelector("[data-tab-id='" + dataTabId + "']");
                targetTab.addClass("active-tab");
                
                ga("send", "event", "tabs", "clicked", "");
            }

            function maxNumberOfTabReached() {
                // user can have as many tabs as settings allow
                if (_numberOfTabs >= _maxNumberOfTabs) {
                    ga("send", "event", "tabs", "max number of tabs reached", "");
                    return true;
                }
                
                return false;
            }
            
            function tileAdd(event) {
                var target = event.target.hasClass("tile-add") ? event.target : event.target.parentNode;
                var tabToAddTileEl = target.parentNode;
              
                overlayBuilderAddWindow(_appEl, "Add a site", 2, ["domain.com", "Name"], "Add", function(inputValues) {
                    tileBuildHTMLEl(tabToAddTileEl,
                        inputValues[0],
                        inputValues[1],
                        "",
                        "personal");
                
                    saveTilesToStorage();
                    
                    var parsedTileUrl = urlParser(inputValues[0]);
                    ga("send", "event", "tiles", "add", parsedTileUrl.host);
                });
            }
            
            function tileRemove(event) {
                event.stopPropagation();
                var target = event.target;
                
                if (target.parentNode.hasClass("tile")) {
                    target.parentNode.parentNode.remove();
                    saveTilesToStorage();
                    
                    var parsedTileUrl = urlParser(target.parentNode.getAttribute("data-tile-url"));
                    ga("send", "event", "tiles", "remove", parsedTileUrl.host);
                }
            }

            function tileOpen(event) {
                var target = event.target.hasClass("tile") ? event.target : event.target.parentNode;
                var tileUrl = target.getAttribute("data-tile-url");                
                var affTile = tileGetAffiliation(tileUrl);
                
                var urlToLoad = tileUrl;
                var gaAction = "open";
                
                if (typeof affTile[0] != "undefined") {
                    urlToLoad = affTile[0].affLink;
                    gaAction = "open aff";
                }
                
                setTimeout(function() {
                    var parsedTileUrl = urlParser(tileUrl);
                    ga("send", "event", "tiles", gaAction, parsedTileUrl.host);
                    
                    window.location.href = urlToLoad;
                }, 100);              
            }
            
            function tileBuildHTMLEl(tabToAppendEl, tileUrl, tileName, tileColor, tileType) {
                var tileWrapperEl = document.createElement("div"),
                    tileEl = document.createElement("div"),
                    tileBrandLogoEl = document.createElement("span"),
                    tileRemoveEl = document.createElement("span"),
                    tileTextNameEl = document.createElement("p"),
                    tileTextUrlEl = document.createElement("p");
                    
                tileWrapperEl.className = "tile-wrapper";

                var tileBranding = tileGetBranding(tileUrl);
                // if branding is not available, do not display it
                // otherwise, get branding from config and load it for tile
                if (tileBranding.length == 0) {
                    tileBrandLogoEl.style.display = "none";
                    if (tileColor == "" || typeof tileColor == "undefined") {
                        tileColor = tileColorGenerator();
                    }
                } else {
                    tileBrandLogoEl.className = "tile-brand-logo";
                    // for some brands we don't have logo, so use only color and hide logo element
                    if (tileBranding[0].graphic == "") {
                        tileBrandLogoEl.style.display = "none";
                    } else {
                        tileBrandLogoEl.style.webkitMask = "url(" + tileBranding[0].graphic + ") no-repeat center center";
                    }
                    tileColor = tileBranding[0].color;
                }

                // add protocol to URL if not exists, otherwise it won't open from extension level
                tileUrl = tileUrl.match(/^[a-zA-Z]+:\/\//) ? tileUrl : "http://" + tileUrl;
                
                var parsedTileUrl = urlParser(tileUrl);

                // if there is no name for tile, use hostname URL for it
                if (tileName == "" || typeof tileName == "undefined") {
                    tileName = parsedTileUrl.domain;
                }

                tileEl.className = "tile";
                tileEl.setAttribute("data-tile-url", tileUrl);
                tileEl.setAttribute("data-tile-name", tileName);
                tileEl.setAttribute("data-tile-color", tileColor);
                tileEl.setAttribute("data-tile-type", tileType);
                tileEl.setAttribute("draggable", true);
                tileEl.style.backgroundColor = tileColor;
                tileEl.addEventListener("click", tileOpen);
                tileEl.addEventListener("dragstart", prepareMove);
                
                tileTextNameEl.className = "tile-name";
                tileTextUrlEl.className = "tile-url";
                
                tileRemoveEl.className = "tile-remove";
                tileRemoveEl.addEventListener("click", tileRemove);

                tileTextNameEl.innerHTML = tileName;
                tileTextUrlEl.innerHTML = parsedTileUrl.host;

                tileEl.appendChild(tileRemoveEl);
                tileEl.appendChild(tileTextNameEl);
                tileEl.appendChild(tileTextUrlEl);
                tileEl.appendChild(tileBrandLogoEl);
                
                tileWrapperEl.appendChild(tileEl);
                
                // if current tab already contains "+" add tile element, insert new tile before it
                // above happens when users adds tile manualy, does not occur when tiles config is read from storage
                var tileAddEls = document.getElementsByClassName("tile-add");
                var tileAddElOnCurrentTab;
                for (var i = 0; i < tileAddEls.length; i++) {
                    if (tileAddEls[i].parentNode == tabToAppendEl) {
                        tileAddElOnCurrentTab = tileAddEls[i];
                    }
                }
                
                if (tabToAppendEl.contains(tileAddElOnCurrentTab)) {
                    tabToAppendEl.insertBefore(tileWrapperEl, tileAddElOnCurrentTab);
                } else {
                    tabToAppendEl.appendChild(tileWrapperEl);
                }
            }
            
            function tileColorGenerator() {
                var colorList = configTilesMaterialColors[pickRandomProperty(configTilesMaterialColors)];
                var newColorKey = pickRandomProperty(colorList);
                var newColor = colorList[newColorKey];
                
                return newColor;
                
                // tools
                function pickRandomProperty(obj) {
                    var result;
                    var count = 0;
    
                    for (var prop in obj) {
                        if (Math.random() < 1 / ++count) {
                            result = prop;
                        }
                    }
                    
                    return result;
                }
            }
            
            function tileGetBranding(url) {
                return configTilesBrandLogos.filter(function(data) {
                    return url.indexOf(data.name + ".") != -1;
                });
            }
            
            function tileGetAffiliation(url) {
                return configAffLinks.filter(function(data) {
                    return url.indexOf(data.domain) != -1;
                });
            }

            // drag and drop tools
            // called once a user clicks down on a tile, the moveElement function is triggered once the user starts moving the tile around
            function prepareMove(event) {
                event.preventDefault();
                event.stopPropagation();
                
                parentElement = document.getElementsByClassName("active-tab")[0];

                elementXCoord = event.pageX - event.currentTarget.offsetLeft;
                elementYCoord = event.pageY - event.currentTarget.offsetTop;

                if (typeof event.currentTarget != "undefined") {
                    moveTileWrapper = event.currentTarget.parentNode;
                    moveTileWrapperIndex = getChildIndex(parentElement, moveTileWrapper);
                    moveTile = event.currentTarget;
                    
                    moveTile.style.opacity = 0.5;
                    
                    // once the mousedown event is called, it creates a clone of that tile to keep in the original position while user looks for a new position
                    moveTileWrapper.appendChild(moveTile.cloneNode(true));
                    
                    moveTile.style.position = "absolute";
                    moveTile.style.zIndex = 2;
                    
                    moveTile.onmousemove = moveElement;
                    moveElement(event);
                }
            }

            // called when the user is moving the tile around, it first finds the x & y mouse coordinates and calculates the new position of the moving tile
            function moveElement(event) {
                event.preventDefault();
                
                var mouseXCoord = event.pageX; // x coordinate of the mouse as it moves
                var mouseYCoord = event.pageY; //y coordinate of the mouse as it moves
                
                var newMouseXCoord = event.pageX - event.currentTarget.parentNode.offsetLeft;
                var newMouseYCoord = event.pageY - event.currentTarget.parentNode.offsetTop;
                
                // re-calculate the top & left positions of the moving box
                moveTile.style.left = (mouseXCoord - elementXCoord) + "px";
                moveTile.style.top = (mouseYCoord - elementYCoord) + "px";
                
                var block = parentElement.childNodes; // the container for all of the tiles (child nodes)
                
                // loop through the array containing all the boxes to determine new placement
                for (var i = 0; i < block.length - 1; i++) {
                    // targetIndex will be used to determine the new position in the array
                    var targetIndex = getChildIndex(parentElement, block[i]);
                    
                    // get the box constraints to compare with the coordinates of the moving box
                    if (targetIndex != moveTileWrapperIndex) {
                        var minTopConstraint = block[i].childNodes[0].offsetTop;
                        var maxTopConstraint = block[i].childNodes[0].offsetTop + block[i].childNodes[0].clientHeight;
                        var minLeftConstraint = block[i].childNodes[0].offsetLeft;
                        var maxLeftConstraint = block[i].childNodes[0].offsetLeft + block[i].childNodes[0].clientWidth;
                        
                        if (minTopConstraint <= newMouseYCoord && newMouseYCoord <= maxTopConstraint) {
                            if (minLeftConstraint <= newMouseXCoord && newMouseXCoord <= maxLeftConstraint) {
                                if (targetIndex < moveTileWrapperIndex) {
                                    parentElement.insertBefore(moveTile.parentNode, block[i]);
                                } else {
                                    insertAfter(block[i], moveTile.parentNode);
                                }

                                moveTileWrapperIndex = getChildIndex(parentElement, moveTileWrapper);
                                moveTileWrapper.addClass("currently-dragged");
                                break;
                            }
                        }
                    }
                }
            }

            // as the user moves the box around, this function is called to find what the current index is where the box would be re-positioned
            function getChildIndex(parent, child) {
                for (var i = 0; i < parentElement.childNodes.length; i++) {
                    if (child == parent.childNodes[i]) {
                        return i;
                    }
                }
            }

            // called when the moving box is to be placed after its original location in the node list; if referenceNode.nextSibling is null, then it will insertBefore that node
            function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }

            function stopMove(event) {
                event.preventDefault();

                if (moveTile && moveTileWrapper) {
                    moveTile.style.opacity = 1;
                    moveTile.style.position = "static";
                    moveTile.style.zIndex = 1;
                    moveTile.onmousemove = null;
                    moveTileWrapper.removeChild(moveTileWrapper.childNodes[1]);
                    moveTileWrapper.removeClass("currently-dragged");
                    
                    moveTile = null;
                    moveTileWrapper = null;
                    
                    saveTilesToStorage();
                    ga("send", "event", "tiles", "move", "");
                }
            }
        }
        
        function overlayBuilderAddWindow(appendToEl, windowHeaderText, numberOfInputs, inputsTextArray, ctaButtonText, submitFunction) {
            var overlayEl = document.createElement("div"),
                popupWindowEl = document.createElement("div"),
                popupWindowHeaderEl = document.createElement("h1"),
                formEl = document.createElement("form"),
                ctaButtonEl = document.createElement("button"),
                closeEl = document.createElement("div");

            overlayEl.id = "overlay";
            popupWindowEl.id = "popup-window";
            closeEl.id = "close-window";
            
            popupWindowHeaderEl.innerHTML = windowHeaderText;

            formEl.addEventListener("submit", function(event) {
                var enteredValues = [];
                for (var i = 0; i < numberOfInputs; i++) {
                    enteredValues[i] = event.target.childNodes[i].value;
                }
                submitFunction(enteredValues);
                document.getElementById("overlay").remove();
            });

            ctaButtonEl.type = "submit";
            ctaButtonEl.innerHTML = ctaButtonText;
            
            closeEl.addEventListener("click", function(event) {
                event.stopPropagation();
                document.getElementById("overlay").remove();
            });
            
            for (var i = 0; i < numberOfInputs; i++) {
                var inputEl = document.createElement("input");
                inputEl.type = "text";
                inputEl.autocomplete = "off";
                inputEl.autocorrect = "off";
                inputEl.autocapitalize = "off";
                inputEl.spellcheck = false;

                if (i == 0) {
                    inputEl.required = true;
                    inputEl.autofocus = true;
                }
                
                inputEl.placeholder = inputsTextArray[i];
                
                formEl.appendChild(inputEl);
            }
            formEl.appendChild(ctaButtonEl);

            popupWindowEl.appendChild(popupWindowHeaderEl);
            popupWindowEl.appendChild(closeEl);                
            popupWindowEl.appendChild(formEl);
            overlayEl.appendChild(popupWindowEl);
            
            appendToEl.appendChild(overlayEl);
            
            // ensure that focus will be in the input
            if (document.activeElement.nodeName != "INPUT") {
                formEl.childNodes[0].focus();
            }
        }
        
        function saveTilesToStorage() {
            var allTabNavItems = document.getElementsByClassName("tab-nav-item"),
                allTabs = document.getElementsByClassName("tab");
            
            // update number of tabs to reflect current page state
            _numberOfTabs = allTabNavItems.length;
            
            var tmpAllTiles = [];
            
            for (var i = 0; i < _numberOfTabs; i++) {
                var tmpTabTiles = [];
                // push tab_name as first element (index = 0)
                tmpTabTiles.push({
                    "tab_name": allTabNavItems[i].getAttribute("data-tab-nav-name")	
                });
                
                // start pushing tiles after tab_name element was pushed
                for (var j = 0; j < allTabs[i].childElementCount; j++) {
                    // check to ensure that we're pushing only tiles, without "+" add tiles element
                    if (allTabs[i].childNodes[j].hasClass("tile-wrapper")) {
                        tmpTabTiles.push({
                            "tile_url": allTabs[i].childNodes[j].childNodes[0].getAttribute("data-tile-url"),
                            "tile_name": allTabs[i].childNodes[j].childNodes[0].getAttribute("data-tile-name"),
                            "tile_color": allTabs[i].childNodes[j].childNodes[0].getAttribute("data-tile-color"),
                            "tile_type": allTabs[i].childNodes[j].childNodes[0].getAttribute("data-tile-type")
                        });
                    }
                }
                tmpAllTiles.push(tmpTabTiles);
            }
            
            setStorage("simpli_tilesConfig", JSON.stringify(tmpAllTiles));
        }
        
        function setStorage(key, value) {
            localStorage.removeItem(key);
            localStorage.setItem(key, value);
        }

        function getStorage(key) {
            return localStorage.getItem(key);
        }

        function setChromeStorage(key, value) {
            chrome.storage.local.set({[key]: value}, function() {
                // set the same value in localStorage as it is easier to obtain in app
                setStorage(key, value);
            });
        }

        function getChromeStorage(key) {
            chrome.storage.local.get(key, function(result) {
                var tmpValue = result[key];
                setStorage(key, tmpValue);
            });
        }
        
        function removeStorage(key) {
            return localStorage.removeItem(key);
        }

        function urlParser(url) {
            // add protocol to URL if not exists, otherwise it won't open from extension level
            url = url.match(/^[a-zA-Z]+:\/\//) ? url : "http://" + url;
            
            var tmpUrl = new URL(url);
            // remove www., www2., wwwX. from host and domain
            var host = tmpUrl.hostname.replace(/^www(|.)\./, "");;
            var domain = tmpUrl.hostname.replace(/^www(|.)\./, "");;

            // get only first part of host (e.g. "stats.opera.com" will return "stats")
            domain = domain.replace(/\.[a-zA-Z]+/ig, "");
            
            return {"host": host, "domain": domain};
        }        

        // user's geolocation via HTML5 and reverse geocoding with google maps       
        function locationHTML5GetLatLng() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(locationHTMLFallbackSuccess, locationHTML5FallbackError);
            } else {
                // if for some reason geolocation won't be supported, set country to GENERIC
                locationSaveToStorage("GENERIC");
            }
        }
        
        function locationHTML5FallbackError() {
            // if geolocation error will occur, do not block user and set country to GENERIC
            locationSaveToStorage("GENERIC");
        }
        
        function locationHTMLFallbackSuccess(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            locationHTML5GetCountryByPosition(lat, lng);
        }
        
        function locationHTML5GetCountryByPosition(latitude, longitude) {
            var geocoder = new google.maps.Geocoder(),
                latLng = new google.maps.LatLng(latitude, longitude);
            
            geocoder.geocode({'latLng': latLng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        for (var i = 0; i < results[0].address_components.length; i++) {
                            for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                                if (results[0].address_components[i].types[j] == "country") {
                                    locationSaveToStorage(results[0].address_components[i].short_name);
                                    ga("send", "event", "location", "method - html5", results[0].address_components[i].short_name); 
                                    break;
                                }
                            }
                        }
                    } else {
                        // no results
                    }
                } else {
                    // geocoder failed
                }
            })
        }

        // user's geolocation via geoip-db service       
        function locationGeoip() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://geoip-db.com/json/", true);
            xhr.send();
            
            xhr.addEventListener("load", function() {
                if (this.status == 200) {
                    var jsonResponse = JSON.parse(this.response)
                    locationSaveToStorage(jsonResponse.country_code);
                    ga("send", "event", "location", "method - geoip", jsonResponse.country_code);
                }
            });
        }
 
         // user's 'geolocation' via browser navigator.language
        function locationNavigatorLang() {
            // get browser language in xx-yy format
            var browserLang = navigator.language.toLowerCase(),
                country = "GENERIC";
            
            // map key markets to xx-yy format and return country short code
            if (browserLang.indexOf("us") != -1) {
                country = "US";
            } else if (browserLang.indexOf("gb") != -1) {
                country = "GB";
            } else if (browserLang.indexOf("de") != -1) {
                country = "DE";
            } else if (browserLang.indexOf("fr") != -1) {
                country = "FR";
            } else if (browserLang.indexOf("es") != -1) {
                country = "ES";
            } else if (browserLang.indexOf("pl") != -1) {
                country = "PL";
            } else if (browserLang.indexOf("ru") != -1) {
                country = "RU";
            } else if (browserLang.indexOf("it") != -1) {
                country = "IT";
            } else if (browserLang.indexOf("da") != -1) {
                country = "DA";
            } else if (browserLang.indexOf("nl") != -1) {
                country = "NL";
            } else if (browserLang.indexOf("au") != -1) {
                country = "AU";
            } else if (browserLang.indexOf("ir") != -1) {
                country = "IR";
            } else if (browserLang.indexOf("in") != -1) {
                country = "IN";
            } else {
                country = "GENERIC";
            }
            
            locationSaveToStorage(country);
            ga("send", "event", "location", "method - navigator", country);
        }
        
        function locationGetFromStorage() {
            return getStorage("simpli_userCountry");
        }
        
        function locationSaveToStorage(countryCode) {
            if (getStorage("simpli_userCountry") == null) {
                setStorage("simpli_userCountry", countryCode);
            }
        }
        
        function locationTilesConfig(userLocation) {
            switch (userLocation) {
                case "US":
                    return configInitTiles_US;
                    break;
                case "GB":
                    return configInitTiles_GB;
                    break;
                case "DE":
                    return configInitTiles_DE;
                    break;
                case "FR":
                    return configInitTiles_FR;
                    break;
                case "ES":
                    return configInitTiles_ES;
                    break;
                case "PL":
                    return configInitTiles_PL;
                    break;
                case "RU":
                    return configInitTiles_RU;
                    break;
                case "IT":
                    return configInitTiles_IT;
                    break;
                case "DA":
                    return configInitTiles_DA;
                    break;
                case "NL":
                    return configInitTiles_NL;
                    break;
                case "AU":
                    return configInitTiles_AU;
                    break;
                case "IR":
                    return configInitTiles_IR;
                    break;
                case "IN":
                    return configInitTiles_IN;
                    break;
                default:
                    return configInitTiles_GENERIC;
            }
        }

        // create clock component
        function initClock() {
            var clockEl = document.createElement("div");
            clockEl.id = "clock";
            
            function doTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                
                h = h < 10 ? "0" + h : h;
                m = m < 10 ? "0" + m : m;

                clockEl.innerHTML = h + ":" + m;
                
                // update time
                var time = setTimeout(doTime, 1000);
            }
            
            // start clock
            doTime();
            
            _appEl.appendChild(clockEl);
        }
        
        // create search box component
        function initSearchBox() {
            // on first extension run, set default serach engine (google) in storage
            if (getStorage("simpli_searchEngine") == null) {
                setStorage("simpli_searchEngine", configSearchEngines[0].id);
                setChromeStorage("simpli_searchEngineUrl", configSearchEngines[0].url + "?" + configSearchEngines[0].input_name + "=");
            }
            
            var searchEngineId = getStorage("simpli_searchEngine");

            // get search engine config by ID,
            // if, for some reason, ID won't match config then use google as fallback
            var searchEngineConfig = Object.keys(searchEngineGetConfig(searchEngineId)).length === 0 ? configSearchEngines[0] : searchEngineGetConfig(searchEngineId);

            var searchBoxEl = document.createElement("div"),
                formEl = document.createElement("form"),
                inputEl = document.createElement("input"),
                buttonEl = document.createElement("button"),
                searchProviderEl = document.createElement("div");
            
            searchBoxEl.id = "search-box";
            formEl.id = "search-form";
            formEl.action = searchEngineConfig[0].url;
            inputEl.id = "search-input";
            inputEl.type = "text";
            inputEl.autocomplete = "off";
            inputEl.autocorrect = "off";
            inputEl.autocapitalize = "off";
            inputEl.spellcheck = false;
            inputEl.placeholder = searchEngineConfig[0].placeholder;
            inputEl.name = searchEngineConfig[0].input_name;
            buttonEl.id = "search-button";
            buttonEl.type = "submit";
            searchProviderEl.id = "search-provider";
            searchProviderEl.style.backgroundImage = "url(" + searchEngineConfig[0].icon + ")";
            searchProviderEl.title = searchEngineConfig[0].name;
            
            formEl.addEventListener("submit", function(event) {
                // do nothing for empty phrase
                if (event.currentTarget[0].value.trim() == "") {
                    event.preventDefault();
                    event.currentTarget[0].value = "";
                    
                    return false;
                }
                ga("send", "event", "search", "submit", formEl.action);
            });
            
            formEl.appendChild(searchProviderEl);
            formEl.appendChild(inputEl);
            formEl.appendChild(buttonEl);
            searchBoxEl.appendChild(formEl);
            
            _appEl.appendChild(searchBoxEl);
            
            // tools for search box
            function searchEngineGetConfig(id) {
                return configSearchEngines.filter(function(data) {
                    return id.indexOf(data.id) != -1;
                });
            }
        }
        
        function uninitSearchBox() {
            var searchBoxEl = document.getElementById("search-box");
            
            if (searchBoxEl) {
                searchBoxEl.remove();
            }
        }
        
        // feedback component
        function initFeedback() {
            var feedbackEl = document.createElement("div"),
                feedbackLinkEl = document.createElement("a");
                
            feedbackEl.id = "feedback";
            feedbackLinkEl.href = "mailto:feedback@getsimpli.app";
            feedbackLinkEl.innerHTML = "feedback@getsimpli.app";
            
            feedbackLinkEl.addEventListener("click", function() {
                ga("send", "event", "feedback", "clicked", "");
            });
            
            feedbackEl.appendChild(feedbackLinkEl);
            _appEl.appendChild(feedbackEl);
        }
        
        // settings component
        function initSettings() {
            var settingsIconOpen = document.createElement("div"),
                settingsIconClose = document.createElement("div"),
                settingsContainer = document.createElement("div");
            
            settingsIconOpen.id = "settings-open";
            settingsIconClose.id = "settings-close";    
            settingsContainer.id = "settings";
            
            settingsIconOpen.addEventListener("click", function() {
                ga("send", "event", "settings", "open", "");
                settingsContainer.style.right = "0px";
            });
            
            settingsIconClose.addEventListener("click", function() {
                ga("send", "event", "settings", "close", "");
                
                // track final state of wallpaper
                var tmpWallpaperToggleEl = document.getElementById("settings-wallpaper-toggle");
                ga("send", "event", "settings", "wallpaper show", tmpWallpaperToggleEl.checked);
                if (getStorage("simpli_settingsWallpaperUserUpload") == null) {
                    ga("send", "event", "settings", "wallpaper user upload", "no");
                } else {
                    ga("send", "event", "settings", "wallpaper user upload", "yes");
                }
                
                // track final number of tiles columns
                if (getStorage("simpli_settingsTilesColumns") == null) {
                    ga("send", "event", "settings", "number of tiles columns", "auto");
                } else {
                    var tmpNumberOfTilesColumns = JSON.parse(getStorage("simpli_settingsTilesColumns")) == 0 ? "auto" : JSON.parse(getStorage("simpli_settingsTilesColumns"));
                    ga("send", "event", "settings", "number of tiles columns", tmpNumberOfTilesColumns);
                }
                
                // track final state of Smart Select
                if (getStorage("simpli_settingsSmartSelectEnable") == null) {
                    ga("send", "event", "settings", "smart select enabled", "true");
                } else {
                    var tmpSmartSelectState = getStorage("simpli_settingsSmartSelectEnable");
                    ga("send", "event", "settings", "smart select enabled", tmpSmartSelectState);
                }
                
                // track final state of selected search engine
                if (getStorage("simpli_searchEngine") == null) {
                    ga("send", "event", "settings", "selected search engine", "google");
                } else {
                    var tmpSelectedSearchEngine = getStorage("simpli_searchEngine");
                    ga("send", "event", "settings", "selected search engine", tmpSelectedSearchEngine);
                }
                
                settingsContainer.style.right = "-400px";
            });
            
            var settingsMainHeader = document.createElement("h1");
            settingsMainHeader.innerHTML = "Settings";
            
            _appEl.appendChild(settingsIconOpen);
            settingsContainer.appendChild(settingsMainHeader);
            settingsContainer.appendChild(settingsIconClose);
            // settings handlers append
            settingsWallpaper(settingsContainer);
            settingsTilesColumns(settingsContainer);
            settingsSmartSelect(settingsContainer);
            settingsSearchEngine(settingsContainer);
            
            _appEl.appendChild(settingsContainer);
            
            // settings handler: wallpaper show/hide, user upload
            function settingsWallpaper(appendToEl) {
                var section = document.createElement("div"),
                    sectionWallpaperToggle = document.createElement("div"),
                    titleWallpaperToggle = document.createElement("div"),
                    switchWallpaperToggle = document.createElement("input"),
                    userWallpaperUpload = document.createElement("div"),
                    userWallpaperUploadInput = document.createElement("input"),
                    userWallpaperUploadLabel = document.createElement("label"),
                    userWallpaperUploadReset = document.createElement("div");
                
                section.className = "settings-section";

                sectionWallpaperToggle.id = "settings-section-wallpaper-toggle";
                sectionWallpaperToggle.className = "settings-section-item";
                titleWallpaperToggle.className = "settings-section-item-title";
                titleWallpaperToggle.innerHTML = "Show wallpaper";
                switchWallpaperToggle.id = "settings-wallpaper-toggle";
                switchWallpaperToggle.className = "settings-section-item-switch";
                switchWallpaperToggle.type = "checkbox";

                userWallpaperUpload.id = "settings-section-wallpaper-user-upload";
                userWallpaperUpload.className = "settings-section-item";
                userWallpaperUploadInput.id = "settings-wallpaper-user-upload-input";
                userWallpaperUploadInput.type = "file";
                userWallpaperUploadLabel.id = "settings-wallpaper-user-upload-label";
                userWallpaperUploadLabel.htmlFor = "settings-wallpaper-user-upload-input";
                userWallpaperUploadLabel.innerHTML = "Add your wallpaper";
                userWallpaperUploadReset.id = "settings-wallpaper-user-upload-reset";
                userWallpaperUploadReset.innerHTML = "Reset";
                
                if (getStorage("simpli_settingsWallpaperShow") == "false") {
                    switchWallpaperToggle.checked = false;
                    userWallpaperUpload.style.display = "none";
                } else {
                    switchWallpaperToggle.checked = true;
                    userWallpaperUpload.style.display = "inline-block";
                }
                
                switchWallpaperToggle.addEventListener("click", function(event) {
                    var wallpaperToggleState = event.target.checked;
                    
                    setStorage("simpli_settingsWallpaperShow", wallpaperToggleState);
                    
                    if (wallpaperToggleState) {
                        initWallpaper();
                        userWallpaperUpload.style.display = "inline-block";
                    } else {
                        uninitWallpaper();
                        userWallpaperUpload.style.display = "none";
                    }
                });
                
                userWallpaperUploadInput.addEventListener("change", function() {
                    var inputEl = this;
                    
                    if (inputEl.files && inputEl.files[0]) {
                        // allow only to upload: png, jpg, jpeg, bmp
                        if (!/png|jpg|jpeg|bmp\ig/.test(inputEl.files[0].type)) {
                            return false;
                        }
                        
                        // as local + session storage can store up to 10MB,
                        // allow to upload max. 5MB images
                        if ((inputEl.files[0].size / 1000000) > 5) {
                            return false;
                        }
                        
                        var fileReader = new FileReader();
                        
                        fileReader.onload = function(event) {
                            var fileInBase64 = event.target.result;
                            removeStorage("simpli_settingsWallpaperUserUpload");
                            setStorage("simpli_settingsWallpaperUserUpload", fileInBase64);
                            
                            uninitWallpaper();
                            loadWallpaperFromStorage();
                        }
                        fileReader.readAsDataURL(inputEl.files[0]);
                    }
                });
                
                userWallpaperUploadReset.addEventListener("click", function(event) {
                    if (getStorage("simpli_settingsWallpaperUserUpload") != null) {
                        removeStorage("simpli_settingsWallpaperUserUpload");
                        initWallpaper();
                    
                        ga("send", "event", "settings", "wallpaper user upload", "reset");
                    }
                });
                
                sectionWallpaperToggle.appendChild(titleWallpaperToggle);
                sectionWallpaperToggle.appendChild(switchWallpaperToggle);
                userWallpaperUpload.appendChild(userWallpaperUploadInput);
                userWallpaperUpload.appendChild(userWallpaperUploadLabel);
                userWallpaperUpload.appendChild(userWallpaperUploadReset);
                
                section.appendChild(sectionWallpaperToggle);
                section.appendChild(userWallpaperUpload);
                appendToEl.appendChild(section);
            }
            
            // settings handler: set number of columns for tiles
            function settingsTilesColumns(appendToEl) {
                var section = document.createElement("div"),
                    sectionTilesColumns = document.createElement("div"),
                    titleTilesColumns = document.createElement("div"),
                    dropdownTilesColumns = document.createElement("select");
                
                section.className = "settings-section";
                
                sectionTilesColumns.id = "settings-section-tiles-columns";
                sectionTilesColumns.className = "settings-section-item";

                titleTilesColumns.className = "settings-section-item-title";
                titleTilesColumns.innerHTML = "Number of columns with tiles";
                dropdownTilesColumns.id = "settings-tiles-columns-select";
                dropdownTilesColumns.className = "settings-section-item-select";
                
                for (var i = 3; i < 12; i++) {
                    var dropdownOptionTilesColumns = document.createElement("option");
                    
                    if (i == 3) {
                        dropdownOptionTilesColumns.value = 0;
                        dropdownOptionTilesColumns.innerHTML = "Auto";
                        dropdownOptionTilesColumns.selected = true;
                    } else {
                        dropdownOptionTilesColumns.value = i;
                        dropdownOptionTilesColumns.innerHTML = i;
                    }
                    
                    dropdownTilesColumns.appendChild(dropdownOptionTilesColumns);
                }
                
                if (getStorage("simpli_settingsTilesColumns") != null) {
                    dropdownTilesColumns.value = JSON.parse(getStorage("simpli_settingsTilesColumns"));
                }
                
                dropdownTilesColumns.addEventListener("change", function() {
                    var selectedOptionValue = this.options[this.selectedIndex].value;
                    
                    setStorage("simpli_settingsTilesColumns", selectedOptionValue);
                    
                    var tabsContainerEl = document.getElementById("tabs");
                    setNumberOfTilesColumns(tabsContainerEl);
                });
                
                sectionTilesColumns.appendChild(titleTilesColumns);
                sectionTilesColumns.appendChild(dropdownTilesColumns);
                
                section.appendChild(sectionTilesColumns);
                appendToEl.appendChild(section);
            }
            
            // settings handler: smart select
            function settingsSmartSelect(appendToEl) {
                var section = document.createElement("div"),
                    sectionSmartSelectToggle = document.createElement("div"),
                    titleSmartSelectToggle = document.createElement("div"),
                    switchSmartSelectToggle = document.createElement("input");
                    
                section.className = "settings-section";
                
                sectionSmartSelectToggle.id = "settings-section-smart-select-toggle";
                sectionSmartSelectToggle.className = "settings-section-item";
                titleSmartSelectToggle.className = "settings-section-item-title";
                titleSmartSelectToggle.innerHTML = "Enable Smart Select when selecting text";
                switchSmartSelectToggle.id = "settings-smart-select-toggle";
                switchSmartSelectToggle.className = "settings-section-item-switch";
                switchSmartSelectToggle.type = "checkbox";

                if (getStorage("simpli_settingsSmartSelectEnable") == "false") {
                    switchSmartSelectToggle.checked = false;
                } else {
                    switchSmartSelectToggle.checked = true;
                }

                switchSmartSelectToggle.addEventListener("click", function(event) {
                    var smartSelectToggleState = event.target.checked;
                    
                    // sets value in local and chrome's storages:
                    // in chrome's storage so it could be available in content script on any website,
                    // in local storage so it could be available in app in easy way
                    setChromeStorage("simpli_settingsSmartSelectEnable", smartSelectToggleState);
                });

                sectionSmartSelectToggle.appendChild(titleSmartSelectToggle);
                sectionSmartSelectToggle.appendChild(switchSmartSelectToggle);
                
                section.appendChild(sectionSmartSelectToggle);
                appendToEl.appendChild(section);
            }
            
            // settings handler: select search engine
            function settingsSearchEngine(appendToEl) {
                var section = document.createElement("div"),
                    sectionSearchEngine = document.createElement("div"),
                    titleSearchEngine = document.createElement("div"),
                    dropdownSearchEngine = document.createElement("select");
                
                section.className = "settings-section";
                
                sectionSearchEngine.id = "settings-section-search-engine";
                sectionSearchEngine.className = "settings-section-item";

                titleSearchEngine.className = "settings-section-item-title";
                titleSearchEngine.innerHTML = "Set default search engine";
                dropdownSearchEngine.id = "settings-search-engine-select";
                dropdownSearchEngine.className = "settings-section-item-select";

                for (var i = 0; i < configSearchEngines.length; i++) {
                    var dropdownOptionSearchEngine = document.createElement("option");
                    
                    dropdownOptionSearchEngine.value = configSearchEngines[i].id;
                    dropdownOptionSearchEngine.setAttribute("data-search-engine-url", configSearchEngines[i].url);
                    dropdownOptionSearchEngine.setAttribute("data-search-engine-input-name", configSearchEngines[i].input_name);
                    dropdownOptionSearchEngine.innerHTML = configSearchEngines[i].name;
                    
                    if (i == 0) {
                        dropdownOptionSearchEngine.selected = true;
                    }
                    
                    dropdownSearchEngine.appendChild(dropdownOptionSearchEngine);
                }

                if (getStorage("simpli_searchEngine") != null) {
                    dropdownSearchEngine.value = getStorage("simpli_searchEngine");
                }

                dropdownSearchEngine.addEventListener("change", function() {
                    var selectedOptionValue = this.options[this.selectedIndex].value,
                        selectedOptionUrl = this.options[this.selectedIndex].getAttribute("data-search-engine-url"),
                        selectedOptionInputName = this.options[this.selectedIndex].getAttribute("data-search-engine-input-name");
                    
                    setStorage("simpli_searchEngine", selectedOptionValue);
                    setChromeStorage("simpli_searchEngineUrl", selectedOptionUrl + "?" + selectedOptionInputName + "=");
                    
                    // first remove current search box element from DOM,
                    // then append new search box element with user selected search engine
                    uninitSearchBox();
                    initSearchBox();
                });
                
                sectionSearchEngine.appendChild(titleSearchEngine);
                sectionSearchEngine.appendChild(dropdownSearchEngine);
                
                section.appendChild(sectionSearchEngine);
                appendToEl.appendChild(section);
            }
        }

        function setNumberOfTilesColumns(container) {
            if (getStorage("simpli_settingsTilesColumns") != null) {
                var numberOfColumns = JSON.parse(getStorage("simpli_settingsTilesColumns"));
                    
                if (numberOfColumns == 0) {
                    container.style.removeProperty("max-width");
                } else {
                    var widthToSet;
                    
                    if (numberOfColumns == 4) {
                        widthToSet = 700;
                    } else if (numberOfColumns == 5) {
                        widthToSet = 870;
                    } else if (numberOfColumns == 6) {
                        widthToSet = 1045;
                    } else if (numberOfColumns == 7) {
                        widthToSet = 1220;
                    } else if (numberOfColumns == 8) {
                        widthToSet = 1395;
                    } else if (numberOfColumns == 9) {
                        widthToSet = 1570;
                    } else if (numberOfColumns == 10) {
                        widthToSet = 1740;
                    } else if (numberOfColumns == 11) {
                        widthToSet = 1915;
                    }
                    
                    container.style.maxWidth = widthToSet + "px";
                }
            }
        }
        
        // wallpaper
        function initWallpaper() {
            // on first extension run, set default setting (wallpaper show = true) in storage
            if (getStorage("simpli_settingsWallpaperShow") == null) {
                setStorage("simpli_settingsWallpaperShow", true);
            }
            
            // if user has disabled wallpaper showing in Settings, then do not continue to init it
            if (getStorage("simpli_settingsWallpaperShow") == "false") {
                _appEl.style.opacity = "1";
                return false;
            }
            
            if (getStorage("simpli_settingsWallpaperUserUpload") != null) {
                loadWallpaperFromStorage();
                _appEl.style.opacity = "1";
                return false;
            }
            
            var backgroundInfoEl = document.createElement("div"),
                backgroundImgAuthor = document.createElement("p"),
                backgroundImgLocation = document.createElement("p");

            // randomize background image
            var imgIndex = Math.floor(Math.random() * (configWallpapers.length));
                
            backgroundInfoEl.id = "wallpaper-info";
            backgroundImgAuthor.id = "wallpaper-author";
            backgroundImgLocation.id = "wallpaper-location";
            
            _appEl.style.backgroundImage = "url(" + configWallpapers[imgIndex].url + ")";
            _appEl.style.opacity = "1";
            
            backgroundImgAuthor.innerHTML = configWallpapers[imgIndex].author;
            backgroundImgLocation.innerHTML = configWallpapers[imgIndex].location;
            backgroundImgLocation.setAttribute("data-wallpaper-location", configWallpapers[imgIndex].location);
            
            backgroundImgLocation.addEventListener("click", function(event) {
                var target = event.target,
                    bookingSearch = "https://www.booking.com/searchresults.html?ss=",
                    googleMapsSearch = "https://maps.google.com/?q=";
                
                var wallpaperLocation = target.getAttribute("data-wallpaper-location");
                    
                setTimeout(function() {
                    ga("send", "event", "wallpaper", "location", wallpaperLocation);
                    
                    window.open(bookingSearch + wallpaperLocation);
                    window.open(googleMapsSearch + wallpaperLocation);
                }, 100);
            });

            backgroundInfoEl.appendChild(backgroundImgLocation);
            backgroundInfoEl.appendChild(backgroundImgAuthor);
                        
            _appEl.appendChild(backgroundInfoEl);
        }
        
        function uninitWallpaper() {
            var backgroundInfoEl = document.getElementById("wallpaper-info");
            
            if (backgroundInfoEl) {
                backgroundInfoEl.remove();
            }
            
            _appEl.style.backgroundImage = "none";
        }
        
        function loadWallpaperFromStorage() {
            if (getStorage("simpli_settingsWallpaperUserUpload") != null) {
                var base64Wallpaper = getStorage("simpli_settingsWallpaperUserUpload");
                
                _appEl.style.backgroundImage = "url(" + base64Wallpaper + ")";
            }
        }
        
        // onboarding for new features
        function initOnboarding() {
            // if onboarding was presented, do not show it
            if (getStorage("simpli_onboardingPresented") != null) {
                return false;
            }
            
            var tipCircleEl = document.createElement("div"),
                tipTextContainerEl = document.createElement("div"),
                tipHeader = document.createElement("h1"),
                tipInfo = document.createElement("p"),
                tipClose = document.createElement("div");
            
            tipCircleEl.className = "onboarding-tip-circle";
            tipTextContainerEl.className = "onboarding-tip-text-container";
            tipHeader.innerHTML = "Try Settings";
            tipInfo.innerHTML = "Now you can change your wallpaper, or number of columns on speed dial.";
            tipClose.id = "onboarding-tip-close";
            
            tipClose.addEventListener("click", function(event) {
                event.stopPropagation();
                
                tipCircleEl.remove();
                
                ga("send", "event", "onboarding", "close", "");

                setStorage("simpli_onboardingPresented", true);
            });

            tipCircleEl.addEventListener("click", function(event) {
                event.stopPropagation();
                
                if (event.target.className != "onboarding-tip-circle") {
                    return false;
                }
                
                tipCircleEl.remove();
                
                var settingsContainerEl = document.getElementById("settings");
                settingsContainerEl.style.right = "0px";
                
                ga("send", "event", "onboarding", "settings open", "");
                
                setStorage("simpli_onboardingPresented", true);
            });
            
            tipCircleEl.appendChild(tipClose);
            tipTextContainerEl.appendChild(tipHeader);
            tipTextContainerEl.appendChild(tipInfo);
            tipCircleEl.appendChild(tipTextContainerEl);
            
            _appEl.appendChild(tipCircleEl);
        }
        
        function initSmartSelect() {
            // on first extension run, set default setting (smart select enabled = true) in storage
            var tmpValue = getStorage("simpli_settingsSmartSelectEnable");
            if (getStorage("simpli_settingsSmartSelectEnable") == null) {
                setStorage("simpli_settingsSmartSelectEnable", true);
                setChromeStorage("simpli_settingsSmartSelectEnable", true);
            }
        }
        
        function initApp() {
            initWallpaper();
            initTabsWithTiles();
            initClock();
            initSearchBox();
            initSmartSelect();
            initSettings();
        }

        // globals
        var _appEl = document.getElementById("app");
        var _numberOfTabs = 1;
        var _maxNumberOfTabs = 10;
        var _userLocation = locationGetFromStorage();

        // check if user location has been already set,
        // if not try to use geoip-db first, second google maps, third navigator.language
        if (_userLocation == null) {
            // first try geoip-db to set location
            locationGeoip();

            // second, after 2sec try google maps and reverted geocoding
            setTimeout(function() {
                if (locationGetFromStorage() == null) {
                    // load google maps script for reverse geocoding
                    (function(d, s, id) {
                        var js, ejs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) { return; }
                        js = d.createElement(s); js.id = id;
                        js.onload = function(){
                            // remote script has loaded
                            locationHTML5GetLatLng();
                        };
                        js.src = "https://maps.googleapis.com/maps/api/js";
                        ejs.parentNode.insertBefore(js, ejs);
                    }(document, "script", "google-maps"));
                }
            }, 1500);
            
            // at the end, after 4sec, try navigator.langauges just to have approximated info
            setTimeout(function() {
                if (locationGetFromStorage() == null) {
                    locationNavigatorLang();
                }
            }, 4000);

            // check every 100ms if user location has been detected
            var interval = setInterval(function() {
                _userLocation = locationGetFromStorage();
                if (_userLocation != null) {
                    clearInterval(interval);
                    // initialize app setup when location is detected and set
                    initApp();
                }
            }, 100);
        } else {
            // if user location is known and set in storage, just initialize the app
            initApp();
        }
    }

    window.addEventListener("load", app);
})();
