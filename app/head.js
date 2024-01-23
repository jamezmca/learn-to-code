import Script from 'next/script';
import React from 'react'

export default function Head() {
    return (
        <head>
            <script dangerouslySetInnerHTML={{
                __html: `
            (function (c, l, a, r, i, t, y) {
                c[a] =
                    c[a] ||
                    function () {
                        (c[a].q = c[a].q || []).push(arguments);
                    };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "htf56frmd5");
           `
            }} />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJGT8ESSY1"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
    
            gtag("config", "G-ZJGT8ESSY1");
           `
            }} />
            <link rel="icon" href="/favicon2.png" sizes="any" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
    )
}
