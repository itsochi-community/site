!function (e) {
    function t(t) {
        for (var o, s, a = t[0], l = t[1], c = t[2], p = 0, d = []; p < a.length; p++) s = a[p], Object.prototype.hasOwnProperty.call(r, s) && r[s] && d.push(r[s][0]), r[s] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (u && u(t); d.length;) d.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== r[l] && (o = !1)
            }
            o && (i.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var o = {}, r = {0: 0}, i = [];

    function s(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.m = e, s.c = o, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) s.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [], l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var u = l;
    i.push([8, 1]), n()
}([, , , , function (e, t) {
    var n = document.querySelector(".mobileMenu"), o = document.querySelector("body");
    document.querySelector(".toogleMenu_open").addEventListener("click", (function () {
        n.classList.add("mobileMenu_open"), o.classList.add("hidden")
    })), document.querySelector(".toogleMenu_close").addEventListener("click", (function () {
        n.classList.remove("mobileMenu_open"), o.classList.remove("hidden")
    })), document.querySelectorAll(".mobileMenu .menu-link").forEach((function (e) {
        e.addEventListener("click", (function (e) {
            n.classList.remove("mobileMenu_open"), o.classList.remove("hidden")
        }))
    }))
}, function (e, t) {
    if (window.location.pathname === '/') {
        document.querySelectorAll(".menu-link").forEach((function (e) {
            e.addEventListener("click", (function (e) {
                var path = this.getAttribute("href").split('/')[1];
                if(path && path[0] == "#") {
                    e.preventDefault();
                    document.querySelector(path).scrollIntoView({behavior: "smooth"});
                }
            }))
        }))
    }
}, function (e, t) {
    document.querySelectorAll(".popup_join .popup-close").forEach((function (e) {
        e.addEventListener("click", (function (e) {
            document.querySelector(".popup_join").classList.remove("popup_active"), document.querySelector("body").classList.remove("hidden")
        }))
    })), document.querySelector(".popup_join .popup-form").addEventListener("submit", (function (e) {
        e.preventDefault();
        new FormData(this);
        document.querySelector(".popup_join").classList.remove("popup_active"), document.querySelector("body").classList.remove("hidden"), document.querySelector(".popup_success").classList.add("popup_active"), document.querySelector("body").classList.add("hidden")
    }))
}, function (e, t) {
    document.querySelector(".popup_success .popup-close").addEventListener("click", (function () {
        document.querySelector(".popup_success").classList.remove("popup_active"), document.querySelector("body").classList.remove("hidden")
    })), document.querySelector(".popup_success .button").addEventListener("click", (function () {
        document.querySelector(".popup_success").classList.remove("popup_active"), document.querySelector("body").classList.remove("hidden")
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(11), r = n(9), i = n(10);
    o.a.use([r.a, i.a]), new o.a(".allInvite-eventList", {
        spaceBetween: 24,
        wrapperClass: "allInvite-wrap",
        slideClass: "event",
        slidesPerView: 1,
        touchEventsTarget: "wrapper",
        navigation: {nextEl: ".allInvite .arrow-right", prevEl: ".allInvite .arrow-left", disabledClass: "disabled"},
        pagination: {el: ".allInvite-pagination", type: "bullets"},
        breakpoints: {640: {spaceBetween: 16, slidesPerView: 3}}
    }), o.a.use([r.a, i.a]), new o.a(".articles", {
        spaceBetween: 24,
        wrapperClass: "articles-wrap",
        slideClass: "article",
        slidesPerView: 1,
        touchEventsTarget: "wrapper",
        navigation: {nextEl: ".blog .arrow-right", prevEl: ".blog .arrow-left", disabledClass: "disabled"},
        pagination: {el: ".articles-pagination", type: "bullets"},
        breakpoints: {640: {spaceBetween: 16, slidesPerView: 3}}
    }), o.a.use([r.a, i.a]), new o.a(".pics", {
        spaceBetween: 24,
        wrapperClass: "pics-wrap",
        slideClass: "pics-item",
        slidesPerView: 1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        navigation: {nextEl: ".instagram .arrow-right", prevEl: ".instagram .arrow-left", disabledClass: "disabled"},
        pagination: {el: ".pics-pagination", type: "bullets"},
        breakpoints: {375: {spaceBetween: 16}, 640: {initialSlide: 1, spaceBetween: 16, slidesPerView: 4}}
    });
    n(4);
    o.a.use([r.a, i.a]), new o.a(".missions", {
        spaceBetween: 24,
        wrapperClass: "missions-wrap",
        slideClass: "block",
        slidesPerView: 1,
        simulateTouch: !1,
        pagination: {el: ".missions-pagination", type: "bullets"},
        breakpoints: {640: {spaceBetween: 16, slidesPerView: 3}}
    });
    n(5), n(6), n(7);
    document.querySelectorAll(".open-popup").forEach((function (e) {
        e.addEventListener("click", (function (e) {
            document.querySelector(".popup_join").classList.add("popup_active"), document.querySelector("body").classList.add("hidden")
        }))
    }))
}]);
window.addEventListener('DOMContentLoaded', () => {
        let temp = document.querySelectorAll('.event-pic');

        temp.forEach(function (currentItem) {
            let qwe = currentItem.querySelector('.event-register');

            if (qwe.classList.contains('event-register-open')) {
                currentItem.querySelector('.event-bg').remove();
            }
        })
    });