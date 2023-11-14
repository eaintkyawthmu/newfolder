const resource = [
    /* --- CSS --- */
    '/portfolio/assets/css/style.css',

    /* --- PWA --- */
    '/portfolio/app.js',
    '/portfolio/sw.js',

    /* --- HTML --- */
    '/portfolio/index.html',
    '/portfolio/404.html',

    
        '/portfolio/categories/',
    
        '/portfolio/tags/',
    
        '/portfolio/archives/',
    
        '/portfolio/about/',
    
        '/portfolio/certification/',
    
        '/portfolio/projects/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/portfolio/assets/img/favicons/android-chrome-192x192.png',
        '/portfolio/assets/img/favicons/android-chrome-512x512.png',
        '/portfolio/assets/img/favicons/apple-touch-icon.png',
        '/portfolio/assets/img/favicons/favicon-16x16.png',
        '/portfolio/assets/img/favicons/favicon-32x32.png',
        '/portfolio/assets/img/favicons/favicon.ico',
        '/portfolio/assets/img/favicons/mstile-150x150.png',
        '/portfolio/assets/js/dist/categories.min.js',
        '/portfolio/assets/js/dist/commons.min.js',
        '/portfolio/assets/js/dist/home.min.js',
        '/portfolio/assets/js/dist/misc.min.js',
        '/portfolio/assets/js/dist/page.min.js',
        '/portfolio/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'eaintkyawthmu.github.io',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

