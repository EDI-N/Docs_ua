// Jivosite Chat (не використовується)
/* (function () {
    d = document;
    s = d.createElement("script");
    s.src = "//code-ya.jivosite.com/widget.js";
    s.async = 1;
    s.setAttribute("jv-id", "henwYHPqdJ");
    d.getElementsByTagName("head")[0].appendChild(s);
})
(); */

// старий ресурс s.src = "//code.jivosite.com/widget.js";


// Інтеграшка HelpCrunch JS для підтримки

(function(w, d) {
    w.HelpCrunch = function() {
        w.HelpCrunch.q.push(arguments)
    };
    w.HelpCrunch.q = [];

    function r() {
        var s = document.createElement('script');
        s.async = 1;
        s.type = 'text/javascript';
        s.src='https://widget.helpcrunch.com/';(d.body||d.head).appendChild(s);
    }
    if (w.attachEvent) {
        w.attachEvent('onload', r)
    } else {
        w.addEventListener('load', r, false)
    }
})(window, document)

HelpCrunch('init', 'edin', {
    applicationId: 1,
    applicationSecret: 'OVZNr5Qi8WM3D6kGBwndHWd3E0IX9yy+cYzoE3NVOdzZq0e4xRgxwnyUzhV1hm+Z4TG6vQV4wRXu7yKL7Ou0Xg=='
})

HelpCrunch('showChatWidget');


