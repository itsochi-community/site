(window.webpackJsonp = window.webpackJsonp || []).push([[1], [function (e, t, i) {
    "use strict";
    i.d(t, "b", (function () {
        return n
    })), i.d(t, "e", (function () {
        return s
    })), i.d(t, "f", (function () {
        return a
    })), i.d(t, "d", (function () {
        return o
    })), i.d(t, "c", (function () {
        return d
    })), i.d(t, "a", (function () {
        return c
    }));
    var r = i(1);

    function n(e) {
        var t = e;
        Object.keys(t).forEach((function (e) {
            try {
                t[e] = null
            } catch (e) {
            }
            try {
                delete t[e]
            } catch (e) {
            }
        }))
    }

    function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function a() {
        return Date.now()
    }

    function o(e, t) {
        void 0 === t && (t = "x");
        var i, n, s, a = Object(r.b)(), o = a.getComputedStyle(e, null);
        return a.WebKitCSSMatrix ? ((n = o.transform || o.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function (e) {
            return e.replace(",", ".")
        })).join(", ")), s = new a.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = a.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = a.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
    }

    function l(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
    }

    function d() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i) for (var r = Object.keys(Object(i)), n = 0, s = r.length; n < s; n += 1) {
                var a = r[n], o = Object.getOwnPropertyDescriptor(i, a);
                void 0 !== o && o.enumerable && (l(e[a]) && l(i[a]) ? d(e[a], i[a]) : !l(e[a]) && l(i[a]) ? (e[a] = {}, d(e[a], i[a])) : e[a] = i[a])
            }
        }
        return e
    }

    function c(e, t) {
        Object.keys(t).forEach((function (i) {
            l(t[i]) && Object.keys(t[i]).forEach((function (r) {
                "function" == typeof t[i][r] && (t[i][r] = t[i][r].bind(e))
            })), e[i] = t[i]
        }))
    }
}, function (e, t, i) {
    "use strict";

    function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function (i) {
            void 0 === e[i] ? e[i] = t[i] : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
        }))
    }

    i.d(t, "a", (function () {
        return a
    })), i.d(t, "b", (function () {
        return l
    }));
    var s = {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, createElementNS: function () {
            return {}
        }, importNode: function () {
            return null
        }, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        var e = "undefined" != typeof document ? document : {};
        return n(e, s), e
    }

    var o = {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState: function () {
            }, pushState: function () {
            }, go: function () {
            }, back: function () {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        },
        matchMedia: function () {
            return {}
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function l() {
        var e = "undefined" != typeof window ? window : {};
        return n(e, o), e
    }
}, function (e, t, i) {
    "use strict";
    var r = i(1);

    function n(e) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }

    function o(e, t, i) {
        return (o = a() ? Reflect.construct : function (e, t, i) {
            var r = [null];
            r.push.apply(r, t);
            var n = new (Function.bind.apply(e, r));
            return i && s(n, i.prototype), n
        }).apply(null, arguments)
    }

    function l(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (l = function (e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return o(e, arguments, n(this).constructor)
            }

            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), s(r, e)
        })(e)
    }

    var d = function (e) {
        var t, i;

        function r(t) {
            var i, r, n;
            return i = e.call.apply(e, [this].concat(t)) || this, r = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i), n = r.__proto__, Object.defineProperty(r, "__proto__", {
                get: function () {
                    return n
                }, set: function (e) {
                    n.__proto__ = e
                }
            }), i
        }

        return i = e, (t = r).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, r
    }(l(Array));

    function c(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function (e) {
            Array.isArray(e) ? t.push.apply(t, c(e)) : t.push(e)
        })), t
    }

    function u(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function p(e, t) {
        var i = Object(r.b)(), n = Object(r.a)(), s = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(s);
        if ("string" == typeof e) {
            var a = e.trim();
            if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                var o = "div";
                0 === a.indexOf("<li") && (o = "ul"), 0 === a.indexOf("<tr") && (o = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (o = "tr"), 0 === a.indexOf("<tbody") && (o = "table"), 0 === a.indexOf("<option") && (o = "select");
                var l = n.createElement(o);
                l.innerHTML = a;
                for (var c = 0; c < l.childNodes.length; c += 1) s.push(l.childNodes[c])
            } else s = function (e, t) {
                if ("string" != typeof e) return [e];
                for (var i = [], r = t.querySelectorAll(e), n = 0; n < r.length; n += 1) i.push(r[n]);
                return i
            }(e.trim(), t || n)
        } else if (e.nodeType || e === i || e === n) s.push(e); else if (Array.isArray(e)) {
            if (e instanceof d) return e;
            s = e
        }
        return new d(function (e) {
            for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(s))
    }

    p.fn = d.prototype;
    var v = "resize scroll".split(" ");

    function f(e) {
        return function () {
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
            if (void 0 === i[0]) {
                for (var n = 0; n < this.length; n += 1) v.indexOf(e) < 0 && (e in this[n] ? this[n][e]() : p(this[n]).trigger(e));
                return this
            }
            return this.on.apply(this, [e].concat(i))
        }
    }

    f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
    var h = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = c(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).add.apply(t, r)
            })), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = c(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).remove.apply(t, r)
            })), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = c(t.map((function (e) {
                return e.split(" ")
            })));
            return u(this, (function (e) {
                return r.filter((function (t) {
                    return e.classList.contains(t)
                })).length > 0
            })).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = c(t.map((function (e) {
                return e.split(" ")
            })));
            this.forEach((function (e) {
                r.forEach((function (t) {
                    e.classList.toggle(t)
                }))
            }))
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t); else for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = t[0], n = t[1], s = t[2], a = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), p(t).is(n)) s.apply(t, i); else for (var r = p(t).parents(), a = 0; a < r.length; a += 1) p(r[a]).is(n) && s.apply(r[a], i)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }

            "function" == typeof t[1] && (r = t[0], s = t[1], a = t[2], n = void 0), a || (a = !1);
            for (var d, c = r.split(" "), u = 0; u < this.length; u += 1) {
                var v = this[u];
                if (n) for (d = 0; d < c.length; d += 1) {
                    var f = c[d];
                    v.dom7LiveListeners || (v.dom7LiveListeners = {}), v.dom7LiveListeners[f] || (v.dom7LiveListeners[f] = []), v.dom7LiveListeners[f].push({
                        listener: s,
                        proxyListener: o
                    }), v.addEventListener(f, o, a)
                } else for (d = 0; d < c.length; d += 1) {
                    var h = c[d];
                    v.dom7Listeners || (v.dom7Listeners = {}), v.dom7Listeners[h] || (v.dom7Listeners[h] = []), v.dom7Listeners[h].push({
                        listener: s,
                        proxyListener: l
                    }), v.addEventListener(h, l, a)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var r = t[0], n = t[1], s = t[2], a = t[3];
            "function" == typeof t[1] && (r = t[0], s = t[1], a = t[2], n = void 0), a || (a = !1);
            for (var o = r.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], c = 0; c < this.length; c += 1) {
                var u = this[c], p = void 0;
                if (!n && u.dom7Listeners ? p = u.dom7Listeners[d] : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length) for (var v = p.length - 1; v >= 0; v -= 1) {
                    var f = p[v];
                    s && f.listener === s || s && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === s ? (u.removeEventListener(d, f.proxyListener, a), p.splice(v, 1)) : s || (u.removeEventListener(d, f.proxyListener, a), p.splice(v, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = Object(r.b)(), t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            for (var s = i[0].split(" "), a = i[1], o = 0; o < s.length; o += 1) for (var l = s[o], d = 0; d < this.length; d += 1) {
                var c = this[d];
                if (e.CustomEvent) {
                    var u = new e.CustomEvent(l, {detail: a, bubbles: !0, cancelable: !0});
                    c.dom7EventData = i.filter((function (e, t) {
                        return t > 0
                    })), c.dispatchEvent(u), c.dom7EventData = [], delete c.dom7EventData
                }
            }
            return this
        }, transitionEnd: function (e) {
            var t = this;
            return e && t.on("transitionend", (function i(r) {
                r.target === this && (e.call(this, r), t.off("transitionend", i))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            var e = Object(r.b)();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                var e = Object(r.b)(), t = Object(r.a)(), i = this[0], n = i.getBoundingClientRect(), s = t.body,
                    a = i.clientTop || s.clientTop || 0, o = i.clientLeft || s.clientLeft || 0,
                    l = i === e ? e.scrollY : i.scrollTop, d = i === e ? e.scrollX : i.scrollLeft;
                return {top: n.top + l - a, left: n.left + d - o}
            }
            return null
        }, css: function (e, t) {
            var i, n = Object(r.b)();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach((function (t, i) {
                e.apply(t, [t, i])
            })), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, i, n = Object(r.b)(), s = Object(r.a)(), a = this[0];
            if (!a || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (a.matches) return a.matches(e);
                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                if (a.msMatchesSelector) return a.msMatchesSelector(e);
                for (t = p(e), i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                return !1
            }
            if (e === s) return a === s;
            if (e === n) return a === n;
            if (e.nodeType || e instanceof d) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return p([]);
            if (e < 0) {
                var i = t + e;
                return p(i < 0 ? [] : [this[i]])
            }
            return p([this[e]])
        }, append: function () {
            for (var e, t = Object(r.a)(), i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                    var s = t.createElement("div");
                    for (s.innerHTML = e; s.firstChild;) this[n].appendChild(s.firstChild)
                } else if (e instanceof d) for (var a = 0; a < e.length; a += 1) this[n].appendChild(e[a]); else this[n].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, i, n = Object(r.a)();
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var s = n.createElement("div");
                for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
            } else if (e instanceof d) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e) ? p([this[0].nextElementSibling]) : p([]) : this[0].nextElementSibling ? p([this[0].nextElementSibling]) : p([]) : p([])
        }, nextAll: function (e) {
            var t = [], i = this[0];
            if (!i) return p([]);
            for (; i.nextElementSibling;) {
                var r = i.nextElementSibling;
                e ? p(r).is(e) && t.push(r) : t.push(r), i = r
            }
            return p(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && p(t.previousElementSibling).is(e) ? p([t.previousElementSibling]) : p([]) : t.previousElementSibling ? p([t.previousElementSibling]) : p([])
            }
            return p([])
        }, prevAll: function (e) {
            var t = [], i = this[0];
            if (!i) return p([]);
            for (; i.previousElementSibling;) {
                var r = i.previousElementSibling;
                e ? p(r).is(e) && t.push(r) : t.push(r), i = r
            }
            return p(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? p(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return p(t)
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? p(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return p(t)
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].querySelectorAll(e), n = 0; n < r.length; n += 1) t.push(r[n]);
            return p(t)
        }, children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].children, n = 0; n < r.length; n += 1) e && !p(r[n]).is(e) || t.push(r[n]);
            return p(t)
        }, filter: function (e) {
            return p(u(this, e))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(h).forEach((function (e) {
        p.fn[e] = h[e]
    }));
    t.a = p
}, , , , , , , function (e, t, i) {
    "use strict";
    var r = i(2), n = i(0);

    function s() {
        return (s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }).apply(this, arguments)
    }

    var a = {
        update: function () {
            var e = this, t = e.params.navigation;
            if (!e.params.loop) {
                var i = e.navigation, r = i.$nextEl, n = i.$prevEl;
                n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), r && r.length > 0 && (e.isEnd ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        }, onPrevClick: function (e) {
            var t = this;
            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
        }, onNextClick: function (e) {
            var t = this;
            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
        }, init: function () {
            var e, t, i = this, s = i.params.navigation;
            (s.nextEl || s.prevEl) && (s.nextEl && (e = Object(r.a)(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && e.length > 1 && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = Object(r.a)(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && t.length > 1 && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", i.navigation.onNextClick), t && t.length > 0 && t.on("click", i.navigation.onPrevClick), Object(n.c)(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this, t = e.navigation, i = t.$nextEl, r = t.$prevEl;
            i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click", e.navigation.onPrevClick), r.removeClass(e.params.navigation.disabledClass))
        }
    };
    t.a = {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            Object(n.a)(this, {navigation: s({}, a)})
        },
        on: {
            init: function (e) {
                e.navigation.init(), e.navigation.update()
            }, toEdge: function (e) {
                e.navigation.update()
            }, fromEdge: function (e) {
                e.navigation.update()
            }, destroy: function (e) {
                e.navigation.destroy()
            }, click: function (e, t) {
                var i = e.navigation, n = i.$nextEl, s = i.$prevEl, a = t.target;
                if (e.params.navigation.hideOnClick && !Object(r.a)(a).is(s) && !Object(r.a)(a).is(n)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                    var o;
                    n ? o = n.hasClass(e.params.navigation.hiddenClass) : s && (o = s.hasClass(e.params.navigation.hiddenClass)), !0 === o ? e.emit("navigationShow") : e.emit("navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
                }
            }
        }
    }
}, function (e, t, i) {
    "use strict";
    var r = i(2), n = i(0);

    function s() {
        return (s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }).apply(this, arguments)
    }

    var a = {
        update: function () {
            var e = this, t = e.rtl, i = e.params.pagination;
            if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var n, s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    a = e.pagination.$el,
                    o = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (n -= s - 2 * e.loopedSlides), n > o - 1 && (n -= o), n < 0 && "bullets" !== e.params.paginationType && (n = o + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    var l, d, c, u = e.pagination.bullets;
                    if (i.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = n - e.pagination.dynamicBulletIndex, c = ((d = l + (Math.min(u.length, i.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), a.length > 1) u.each((function (e) {
                        var t = Object(r.a)(e), s = t.index();
                        s === n && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= l && s <= d && t.addClass(i.bulletActiveClass + "-main"), s === l && t.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === d && t.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                    })); else {
                        var p = u.eq(n), v = p.index();
                        if (p.addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var f = u.eq(l), h = u.eq(d), m = l; m <= d; m += 1) u.eq(m).addClass(i.bulletActiveClass + "-main");
                            if (e.params.loop) if (v >= u.length - i.dynamicMainBullets) {
                                for (var g = i.dynamicMainBullets; g >= 0; g -= 1) u.eq(u.length - g).addClass(i.bulletActiveClass + "-main");
                                u.eq(u.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + "-prev")
                            } else f.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), h.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"); else f.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), h.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                    }
                    if (i.dynamicBullets) {
                        var b = Math.min(u.length, i.dynamicMainBullets + 4),
                            C = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                            w = t ? "right" : "left";
                        u.css(e.isHorizontal() ? w : "top", C + "px")
                    }
                }
                if ("fraction" === i.type && (a.find("." + i.currentClass).text(i.formatFractionCurrent(n + 1)), a.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                    var T;
                    T = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var y = (n + 1) / o, S = 1, x = 1;
                    "horizontal" === T ? S = y : x = y, a.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + S + ") scaleY(" + x + ")").transition(e.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(e, n + 1, o)), e.emit("paginationRender", a[0])) : e.emit("paginationUpdate", a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    r = e.pagination.$el, n = "";
                if ("bullets" === t.type) {
                    var s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && !e.params.loop && s > i && (s = i);
                    for (var a = 0; a < s; a += 1) t.renderBullet ? n += t.renderBullet.call(e, a, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    r.html(n), e.pagination.bullets = r.find("." + t.bulletClass.replace(/ /g, "."))
                }
                "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', r.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', r.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = Object(r.a)(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass.replace(/ /g, "."), (function (t) {
                    t.preventDefault();
                    var i = Object(r.a)(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                })), Object(n.c)(e.pagination, {$el: i, el: i[0]}))
            }
        }, destroy: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.pagination.$el;
                i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass.replace(/ /g, "."))
            }
        }
    };
    t.a = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            Object(n.a)(this, {pagination: s({dynamicBulletIndex: 0}, a)})
        },
        on: {
            init: function (e) {
                e.pagination.init(), e.pagination.render(), e.pagination.update()
            }, activeIndexChange: function (e) {
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            }, snapIndexChange: function (e) {
                e.params.loop || e.pagination.update()
            }, slidesLengthChange: function (e) {
                e.params.loop && (e.pagination.render(), e.pagination.update())
            }, snapGridLengthChange: function (e) {
                e.params.loop || (e.pagination.render(), e.pagination.update())
            }, destroy: function (e) {
                e.pagination.destroy()
            }, click: function (e, t) {
                var i = t.target;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !Object(r.a)(i).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                    !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                }
            }
        }
    }
}, function (e, t, i) {
    "use strict";
    var r, n, s, a = i(2), o = i(0), l = i(1);

    function d() {
        return r || (r = function () {
            var e = Object(l.b)(), t = Object(l.a)();
            return {
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function () {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), r
    }

    function c(e) {
        return void 0 === e && (e = {}), n || (n = function (e) {
            var t = (void 0 === e ? {} : e).userAgent, i = d(), r = Object(l.b)(), n = r.navigator.platform,
                s = t || r.navigator.userAgent, a = {ios: !1, android: !1}, o = r.screen.width, c = r.screen.height,
                u = s.match(/(Android);?[\s\/]+([\d.]+)?/), p = s.match(/(iPad).*OS\s([\d_]+)/),
                v = s.match(/(iPod)(.*OS\s([\d_]+))?/), f = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === n, m = "MacIntel" === n;
            return !p && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + c) >= 0 && ((p = s.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), m = !1), u && !h && (a.os = "android", a.android = !0), (p || f || v) && (a.os = "ios", a.ios = !0), a
        }(e)), n
    }

    function u() {
        return s || (s = function () {
            var e, t = Object(l.b)();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), s
    }

    var p = {
        name: "resize", create: function () {
            var e = this;
            Object(o.c)(e, {
                resize: {
                    observer: null, createObserver: function () {
                        e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function (t) {
                            var i = e.width, r = e.height, n = i, s = r;
                            t.forEach((function (t) {
                                var i = t.contentBoxSize, r = t.contentRect, a = t.target;
                                a && a !== e.el || (n = r ? r.width : (i[0] || i).inlineSize, s = r ? r.height : (i[0] || i).blockSize)
                            })), n === i && s === r || e.resize.resizeHandler()
                        })), e.resize.observer.observe(e.el))
                    }, removeObserver: function () {
                        e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
                    }, resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                    }, orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        }, on: {
            init: function (e) {
                var t = Object(l.b)();
                e.params.resizeObserver && void 0 !== Object(l.b)().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
            }, destroy: function (e) {
                var t = Object(l.b)();
                e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    };

    function v() {
        return (v = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }).apply(this, arguments)
    }

    var f = {
        attach: function (e, t) {
            void 0 === t && (t = {});
            var i = Object(l.b)(), r = this, n = new (i.MutationObserver || i.WebkitMutationObserver)((function (e) {
                if (1 !== e.length) {
                    var t = function () {
                        r.emit("observerUpdate", e[0])
                    };
                    i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                } else r.emit("observerUpdate", e[0])
            }));
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), r.observer.observers.push(n)
        }, init: function () {
            var e = this;
            if (e.support.observer && e.params.observer) {
                if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
            }
        }, destroy: function () {
            this.observer.observers.forEach((function (e) {
                e.disconnect()
            })), this.observer.observers = []
        }
    }, h = {
        name: "observer",
        params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
        create: function () {
            Object(o.a)(this, {observer: v({}, f, {observers: []})})
        },
        on: {
            init: function (e) {
                e.observer.init()
            }, destroy: function (e) {
                e.observer.destroy()
            }
        }
    };

    function m(e) {
        var t = this, i = Object(l.a)(), r = Object(l.b)(), n = t.touchEventsData, s = t.params, d = t.touches;
        if (!t.animating || !s.preventInteractionOnTransition) {
            var c = e;
            c.originalEvent && (c = c.originalEvent);
            var u = Object(a.a)(c.target);
            if ("wrapper" !== s.touchEventsTarget || u.closest(t.wrapperEl).length) if (n.isTouchEvent = "touchstart" === c.type, n.isTouchEvent || !("which" in c) || 3 !== c.which) if (!(!n.isTouchEvent && "button" in c && c.button > 0)) if (!n.isTouched || !n.isMoved) if (!!s.noSwipingClass && "" !== s.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (u = Object(a.a)(e.path[0])), s.noSwiping && u.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) t.allowClick = !0; else if (!s.swipeHandler || u.closest(s.swipeHandler)[0]) {
                d.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, d.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                var p = d.currentX, v = d.currentY, f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (f && (p <= h || p >= r.innerWidth - h)) {
                    if ("prevent" !== f) return;
                    e.preventDefault()
                }
                if (Object(o.c)(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), d.startX = p, d.startY = v, n.touchStartTime = Object(o.f)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
                    var m = !0;
                    u.is(n.formElements) && (m = !1), i.activeElement && Object(a.a)(i.activeElement).is(n.formElements) && i.activeElement !== u[0] && i.activeElement.blur();
                    var g = m && t.allowTouchMove && s.touchStartPreventDefault;
                    !s.touchStartForcePreventDefault && !g || u[0].isContentEditable || c.preventDefault()
                }
                t.emit("touchStart", c)
            }
        }
    }

    function g(e) {
        var t = Object(l.a)(), i = this, r = i.touchEventsData, n = i.params, s = i.touches, d = i.rtlTranslate, c = e;
        if (c.originalEvent && (c = c.originalEvent), r.isTouched) {
            if (!r.isTouchEvent || "touchmove" === c.type) {
                var u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    p = "touchmove" === c.type ? u.pageX : c.pageX, v = "touchmove" === c.type ? u.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return s.startX = p, void (s.startY = v);
                if (!i.allowTouchMove) return i.allowClick = !1, void (r.isTouched && (Object(o.c)(s, {
                    startX: p,
                    startY: v,
                    currentX: p,
                    currentY: v
                }), r.touchStartTime = Object(o.f)()));
                if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (i.isVertical()) {
                    if (v < s.startY && i.translate <= i.maxTranslate() || v > s.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
                } else if (p < s.startX && i.translate <= i.maxTranslate() || p > s.startX && i.translate >= i.minTranslate()) return;
                if (r.isTouchEvent && t.activeElement && c.target === t.activeElement && Object(a.a)(c.target).is(r.formElements)) return r.isMoved = !0, void (i.allowClick = !1);
                if (r.allowTouchCallbacks && i.emit("touchMove", c), !(c.targetTouches && c.targetTouches.length > 1)) {
                    s.currentX = p, s.currentY = v;
                    var f = s.currentX - s.startX, h = s.currentY - s.startY;
                    if (!(i.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) < i.params.threshold)) {
                        var m;
                        if (void 0 === r.isScrolling) i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (m = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, r.isScrolling = i.isHorizontal() ? m > n.touchAngle : 90 - m > n.touchAngle);
                        if (r.isScrolling && i.emit("touchMoveOpposite", c), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1; else if (r.startMoving) {
                            i.allowClick = !1, !n.cssMode && c.cancelable && c.preventDefault(), n.touchMoveStopPropagation && !n.nested && c.stopPropagation(), r.isMoved || (n.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !n.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", c)), i.emit("sliderMove", c), r.isMoved = !0;
                            var g = i.isHorizontal() ? f : h;
                            s.diff = g, g *= n.touchRatio, d && (g = -g), i.swipeDirection = g > 0 ? "prev" : "next", r.currentTranslate = g + r.startTranslate;
                            var b = !0, C = n.resistanceRatio;
                            if (n.touchReleaseOnEdges && (C = 0), g > 0 && r.currentTranslate > i.minTranslate() ? (b = !1, n.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + g, C))) : g < 0 && r.currentTranslate < i.maxTranslate() && (b = !1, n.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - g, C))), b && (c.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), i.allowSlidePrev || i.allowSlideNext || (r.currentTranslate = r.startTranslate), n.threshold > 0) {
                                if (!(Math.abs(g) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                            }
                            n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && (0 === r.velocities.length && r.velocities.push({
                                position: s[i.isHorizontal() ? "startX" : "startY"],
                                time: r.touchStartTime
                            }), r.velocities.push({
                                position: s[i.isHorizontal() ? "currentX" : "currentY"],
                                time: Object(o.f)()
                            })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
                        }
                    }
                }
            }
        } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", c)
    }

    function b(e) {
        var t = this, i = t.touchEventsData, r = t.params, n = t.touches, s = t.rtlTranslate, a = t.$wrapperEl,
            l = t.slidesGrid, d = t.snapGrid, c = e;
        if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var u, p = Object(o.f)(), v = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), v < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), i.lastClickTime = Object(o.f)(), Object(o.e)((function () {
            t.destroyed || (t.allowClick = !0)
        })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = r.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate, !r.cssMode) if (r.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
            if (r.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var f = i.velocities.pop(), h = i.velocities.pop(), m = f.position - h.position,
                        g = f.time - h.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || Object(o.f)() - f.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= r.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var b = 1e3 * r.freeModeMomentumRatio, C = t.velocity * b, w = t.translate + C;
                s && (w = -w);
                var T, y, S = !1, x = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) r.freeModeMomentumBounce ? (w + t.maxTranslate() < -x && (w = t.maxTranslate() - x), T = t.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), r.loop && r.centeredSlides && (y = !0); else if (w > t.minTranslate()) r.freeModeMomentumBounce ? (w - t.minTranslate() > x && (w = t.minTranslate() + x), T = t.minTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), r.loop && r.centeredSlides && (y = !0); else if (r.freeModeSticky) {
                    for (var E, O = 0; O < d.length; O += 1) if (d[O] > -w) {
                        E = O;
                        break
                    }
                    w = -(w = Math.abs(d[E] - w) < Math.abs(d[E - 1] - w) || "next" === t.swipeDirection ? d[E] : d[E - 1])
                }
                if (y && t.once("transitionEnd", (function () {
                    t.loopFix()
                })), 0 !== t.velocity) {
                    if (b = s ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), r.freeModeSticky) {
                        var M = Math.abs((s ? -w : w) - t.translate), P = t.slidesSizesGrid[t.activeIndex];
                        b = M < P ? r.speed : M < 2 * P ? 1.5 * r.speed : 2.5 * r.speed
                    }
                } else if (r.freeModeSticky) return void t.slideToClosest();
                r.freeModeMomentumBounce && S ? (t.updateProgress(T), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd((function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(r.speed), setTimeout((function () {
                        t.setTranslate(T), a.transitionEnd((function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))
                    }), 0))
                }))) : t.velocity ? (t.updateProgress(w), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd((function () {
                    t && !t.destroyed && t.transitionEnd()
                })))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses()
            } else {
                if (r.freeModeSticky) return void t.slideToClosest();
                r.freeMode && t.emit("_freeModeNoMomentumRelease")
            }
            (!r.freeModeMomentum || v >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var k = 0, L = t.slidesSizesGrid[0], j = 0; j < l.length; j += j < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                var z = j < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== l[j + z] ? u >= l[j] && u < l[j + z] && (k = j, L = l[j + z] - l[j]) : u >= l[j] && (k = j, L = l[l.length - 1] - l[l.length - 2])
            }
            var A = (u - l[k]) / L, I = k < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (v > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (A >= r.longSwipesRatio ? t.slideTo(k + I) : t.slideTo(k)), "prev" === t.swipeDirection && (A > 1 - r.longSwipesRatio ? t.slideTo(k + I) : t.slideTo(k))
            } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(k + I) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + I), "prev" === t.swipeDirection && t.slideTo(k))
            }
        }
    }

    function C() {
        var e = this, t = e.params, i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var r = e.allowSlideNext, n = e.allowSlidePrev, s = e.snapGrid;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }

    function w(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function T() {
        var e = this, t = e.wrapperEl, i = e.rtlTranslate;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    var y = !1;

    function S() {
    }

    var x = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function E(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var O = {
        modular: {
            useParams: function (e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function (i) {
                    var r = t.modules[i];
                    r.params && Object(o.c)(e, r.params)
                }))
            }, useModules: function (e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function (i) {
                    var r = t.modules[i], n = e[i] || {};
                    r.on && t.on && Object.keys(r.on).forEach((function (e) {
                        t.on(e, r.on[e])
                    })), r.create && r.create.bind(t)(n)
                }))
            }
        }, eventsEmitter: {
            on: function (e, t, i) {
                var r = this;
                if ("function" != typeof t) return r;
                var n = i ? "unshift" : "push";
                return e.split(" ").forEach((function (e) {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][n](t)
                })), r
            }, once: function (e, t, i) {
                var r = this;
                if ("function" != typeof t) return r;

                function n() {
                    r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    t.apply(r, s)
                }

                return n.__emitterProxy = t, r.on(e, n, i)
            }, onAny: function (e, t) {
                var i = this;
                if ("function" != typeof e) return i;
                var r = t ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i
            }, offAny: function (e) {
                var t = this;
                if (!t.eventsAnyListeners) return t;
                var i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
            }, off: function (e, t) {
                var i = this;
                return i.eventsListeners ? (e.split(" ").forEach((function (e) {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function (r, n) {
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                    }))
                })), i) : i
            }, emit: function () {
                var e, t, i, r = this;
                if (!r.eventsListeners) return r;
                for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), i = r) : (e = s[0].events, t = s[0].data, i = s[0].context || r), t.unshift(i);
                var o = Array.isArray(e) ? e : e.split(" ");
                return o.forEach((function (e) {
                    r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((function (r) {
                        r.apply(i, [e].concat(t))
                    })), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach((function (e) {
                        e.apply(i, t)
                    }))
                })), r
            }
        }, update: {
            updateSize: function () {
                var e, t, i = this, r = i.$el;
                e = void 0 !== i.params.width && null !== i.params.width ? i.params.width : r[0].clientWidth, t = void 0 !== i.params.height && null !== i.params.height ? i.params.height : r[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), t = t - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object(o.c)(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t
                }))
            }, updateSlides: function () {
                var e = this, t = function (t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }, i = function (e, i) {
                        return parseFloat(e.getPropertyValue(t(i)) || 0)
                    }, r = Object(l.b)(), n = e.params, s = e.$wrapperEl, a = e.size, d = e.rtlTranslate, c = e.wrongRTL,
                    u = e.virtual && n.virtual.enabled, p = u ? e.virtual.slides.length : e.slides.length,
                    v = s.children("." + e.params.slideClass), f = u ? e.virtual.slides.length : v.length, h = [],
                    m = [], g = [], b = n.slidesOffsetBefore;
                "function" == typeof b && (b = n.slidesOffsetBefore.call(e));
                var C = n.slidesOffsetAfter;
                "function" == typeof C && (C = n.slidesOffsetAfter.call(e));
                var w = e.snapGrid.length, T = e.slidesGrid.length, y = n.spaceBetween, S = -b, x = 0, E = 0;
                if (void 0 !== a) {
                    var O, M;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * a), e.virtualSize = -y, d ? v.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : v.css({
                        marginRight: "",
                        marginBottom: ""
                    }), n.slidesPerColumn > 1 && (O = Math.floor(f / n.slidesPerColumn) === f / e.params.slidesPerColumn ? f : Math.ceil(f / n.slidesPerColumn) * n.slidesPerColumn, "auto" !== n.slidesPerView && "row" === n.slidesPerColumnFill && (O = Math.max(O, n.slidesPerView * n.slidesPerColumn)));
                    for (var P, k, L, j = n.slidesPerColumn, z = O / j, A = Math.floor(f / n.slidesPerColumn), I = 0; I < f; I += 1) {
                        M = 0;
                        var B = v.eq(I);
                        if (n.slidesPerColumn > 1) {
                            var D = void 0, G = void 0, N = void 0;
                            if ("row" === n.slidesPerColumnFill && n.slidesPerGroup > 1) {
                                var $ = Math.floor(I / (n.slidesPerGroup * n.slidesPerColumn)),
                                    H = I - n.slidesPerColumn * n.slidesPerGroup * $,
                                    F = 0 === $ ? n.slidesPerGroup : Math.min(Math.ceil((f - $ * j * n.slidesPerGroup) / j), n.slidesPerGroup);
                                D = (G = H - (N = Math.floor(H / F)) * F + $ * n.slidesPerGroup) + N * O / j, B.css({
                                    "-webkit-box-ordinal-group": D,
                                    "-moz-box-ordinal-group": D,
                                    "-ms-flex-order": D,
                                    "-webkit-order": D,
                                    order: D
                                })
                            } else "column" === n.slidesPerColumnFill ? (N = I - (G = Math.floor(I / j)) * j, (G > A || G === A && N === j - 1) && (N += 1) >= j && (N = 0, G += 1)) : G = I - (N = Math.floor(I / z)) * z;
                            B.css(t("margin-top"), 0 !== N && n.spaceBetween && n.spaceBetween + "px")
                        }
                        if ("none" !== B.css("display")) {
                            if ("auto" === n.slidesPerView) {
                                var V = r.getComputedStyle(B[0], null), _ = B[0].style.transform,
                                    R = B[0].style.webkitTransform;
                                if (_ && (B[0].style.transform = "none"), R && (B[0].style.webkitTransform = "none"), n.roundLengths) M = e.isHorizontal() ? B.outerWidth(!0) : B.outerHeight(!0); else {
                                    var W = i(V, "width"), q = i(V, "padding-left"), X = i(V, "padding-right"),
                                        Y = i(V, "margin-left"), U = i(V, "margin-right"),
                                        K = V.getPropertyValue(V, "box-sizing");
                                    if (K && "border-box" === K) M = W + Y + U; else {
                                        var J = B[0], Q = J.clientWidth;
                                        M = W + q + X + Y + U + (J.offsetWidth - Q)
                                    }
                                }
                                _ && (B[0].style.transform = _), R && (B[0].style.webkitTransform = R), n.roundLengths && (M = Math.floor(M))
                            } else M = (a - (n.slidesPerView - 1) * y) / n.slidesPerView, n.roundLengths && (M = Math.floor(M)), v[I] && (v[I].style[t("width")] = M + "px");
                            v[I] && (v[I].swiperSlideSize = M), g.push(M), n.centeredSlides ? (S = S + M / 2 + x / 2 + y, 0 === x && 0 !== I && (S = S - a / 2 - y), 0 === I && (S = S - a / 2 - y), Math.abs(S) < .001 && (S = 0), n.roundLengths && (S = Math.floor(S)), E % n.slidesPerGroup == 0 && h.push(S), m.push(S)) : (n.roundLengths && (S = Math.floor(S)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && h.push(S), m.push(S), S = S + M + y), e.virtualSize += M + y, x = M, E += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + C, d && c && ("slide" === n.effect || "coverflow" === n.effect) && s.css({width: e.virtualSize + n.spaceBetween + "px"}), n.setWrapperSize) s.css(((k = {})[t("width")] = e.virtualSize + n.spaceBetween + "px", k));
                    if (n.slidesPerColumn > 1) if (e.virtualSize = (M + n.spaceBetween) * O, e.virtualSize = Math.ceil(e.virtualSize / n.slidesPerColumn) - n.spaceBetween, s.css(((L = {})[t("width")] = e.virtualSize + n.spaceBetween + "px", L)), n.centeredSlides) {
                        P = [];
                        for (var Z = 0; Z < h.length; Z += 1) {
                            var ee = h[Z];
                            n.roundLengths && (ee = Math.floor(ee)), h[Z] < e.virtualSize + h[0] && P.push(ee)
                        }
                        h = P
                    }
                    if (!n.centeredSlides) {
                        P = [];
                        for (var te = 0; te < h.length; te += 1) {
                            var ie = h[te];
                            n.roundLengths && (ie = Math.floor(ie)), h[te] <= e.virtualSize - a && P.push(ie)
                        }
                        h = P, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a)
                    }
                    if (0 === h.length && (h = [0]), 0 !== n.spaceBetween) {
                        var re, ne = e.isHorizontal() && d ? "marginLeft" : t("marginRight");
                        v.filter((function (e, t) {
                            return !n.cssMode || t !== v.length - 1
                        })).css(((re = {})[ne] = y + "px", re))
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        var se = 0;
                        g.forEach((function (e) {
                            se += e + (n.spaceBetween ? n.spaceBetween : 0)
                        }));
                        var ae = (se -= n.spaceBetween) - a;
                        h = h.map((function (e) {
                            return e < 0 ? -b : e > ae ? ae + C : e
                        }))
                    }
                    if (n.centerInsufficientSlides) {
                        var oe = 0;
                        if (g.forEach((function (e) {
                            oe += e + (n.spaceBetween ? n.spaceBetween : 0)
                        })), (oe -= n.spaceBetween) < a) {
                            var le = (a - oe) / 2;
                            h.forEach((function (e, t) {
                                h[t] = e - le
                            })), m.forEach((function (e, t) {
                                m[t] = e + le
                            }))
                        }
                    }
                    Object(o.c)(e, {
                        slides: v,
                        snapGrid: h,
                        slidesGrid: m,
                        slidesSizesGrid: g
                    }), f !== p && e.emit("slidesLengthChange"), h.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== T && e.emit("slidesGridLengthChange"), (n.watchSlidesProgress || n.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            }, updateAutoHeight: function (e) {
                var t, i = this, r = [], n = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) if (i.params.centeredSlides) i.visibleSlides.each((function (e) {
                    r.push(e)
                })); else for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    var s = i.activeIndex + t;
                    if (s > i.slides.length) break;
                    r.push(i.slides.eq(s)[0])
                } else r.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < r.length; t += 1) if (void 0 !== r[t]) {
                    var a = r[t].offsetHeight;
                    n = a > n ? a : n
                }
                n && i.$wrapperEl.css("height", n + "px")
            }, updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this, i = t.params, r = t.slides, n = t.rtlTranslate;
                if (0 !== r.length) {
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    var s = -e;
                    n && (s = e), r.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var o = 0; o < r.length; o += 1) {
                        var l = r[o],
                            d = (s + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
                            var c = -(s - l.swiperSlideOffset), u = c + t.slidesSizesGrid[o];
                            (c >= 0 && c < t.size - 1 || u > 1 && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass))
                        }
                        l.progress = n ? -d : d
                    }
                    t.visibleSlides = Object(a.a)(t.visibleSlides)
                }
            }, updateProgress: function (e) {
                var t = this;
                if (void 0 === e) {
                    var i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                var r = t.params, n = t.maxTranslate() - t.minTranslate(), s = t.progress, a = t.isBeginning,
                    l = t.isEnd, d = a, c = l;
                0 === n ? (s = 0, a = !0, l = !0) : (a = (s = (e - t.minTranslate()) / n) <= 0, l = s >= 1), Object(o.c)(t, {
                    progress: s,
                    isBeginning: a,
                    isEnd: l
                }), (r.watchSlidesProgress || r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !d && t.emit("reachBeginning toEdge"), l && !c && t.emit("reachEnd toEdge"), (d && !a || c && !l) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                var e, t = this, i = t.slides, r = t.params, n = t.$wrapperEl, s = t.activeIndex, a = t.realIndex,
                    o = t.virtual && r.virtual.enabled;
                i.removeClass(r.slideActiveClass + " " + r.slideNextClass + " " + r.slidePrevClass + " " + r.slideDuplicateActiveClass + " " + r.slideDuplicateNextClass + " " + r.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + r.slideClass + '[data-swiper-slide-index="' + s + '"]') : i.eq(s)).addClass(r.slideActiveClass), r.loop && (e.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(r.slideDuplicateActiveClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(r.slideDuplicateActiveClass));
                var l = e.nextAll("." + r.slideClass).eq(0).addClass(r.slideNextClass);
                r.loop && 0 === l.length && (l = i.eq(0)).addClass(r.slideNextClass);
                var d = e.prevAll("." + r.slideClass).eq(0).addClass(r.slidePrevClass);
                r.loop && 0 === d.length && (d = i.eq(-1)).addClass(r.slidePrevClass), r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass), d.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass)), t.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                var t, i = this, r = i.rtlTranslate ? i.translate : -i.translate, n = i.slidesGrid, s = i.snapGrid,
                    a = i.params, l = i.activeIndex, d = i.realIndex, c = i.snapIndex, u = e;
                if (void 0 === u) {
                    for (var p = 0; p < n.length; p += 1) void 0 !== n[p + 1] ? r >= n[p] && r < n[p + 1] - (n[p + 1] - n[p]) / 2 ? u = p : r >= n[p] && r < n[p + 1] && (u = p + 1) : r >= n[p] && (u = p);
                    a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (s.indexOf(r) >= 0) t = s.indexOf(r); else {
                    var v = Math.min(a.slidesPerGroupSkip, u);
                    t = v + Math.floor((u - v) / a.slidesPerGroup)
                }
                if (t >= s.length && (t = s.length - 1), u !== l) {
                    var f = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    Object(o.c)(i, {
                        snapIndex: t,
                        realIndex: f,
                        previousIndex: l,
                        activeIndex: u
                    }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), d !== f && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                } else t !== c && (i.snapIndex = t, i.emit("snapIndexChange"))
            }, updateClickedSlide: function (e) {
                var t, i = this, r = i.params, n = Object(a.a)(e.target).closest("." + r.slideClass)[0], s = !1;
                if (n) for (var o = 0; o < i.slides.length; o += 1) if (i.slides[o] === n) {
                    s = !0, t = o;
                    break
                }
                if (!n || !s) return i.clickedSlide = void 0, void (i.clickedIndex = void 0);
                i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(Object(a.a)(n).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t, r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this, i = t.params, r = t.rtlTranslate, n = t.translate, s = t.$wrapperEl;
                if (i.virtualTranslate) return r ? -n : n;
                if (i.cssMode) return n;
                var a = Object(o.d)(s[0], e);
                return r && (a = -a), a || 0
            }, setTranslate: function (e, t) {
                var i = this, r = i.rtlTranslate, n = i.params, s = i.$wrapperEl, a = i.wrapperEl, o = i.progress,
                    l = 0, d = 0;
                i.isHorizontal() ? l = r ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), n.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : n.virtualTranslate || s.transform("translate3d(" + l + "px, " + d + "px, 0px)"), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
                var c = i.maxTranslate() - i.minTranslate();
                (0 === c ? 0 : (e - i.minTranslate()) / c) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e, t, i, r, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
                var s = this, a = s.params, o = s.wrapperEl;
                if (s.animating && a.preventInteractionOnTransition) return !1;
                var l, d = s.minTranslate(), c = s.maxTranslate();
                if (l = r && e > d ? d : r && e < c ? c : e, s.updateProgress(l), a.cssMode) {
                    var u, p = s.isHorizontal();
                    if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -l; else if (o.scrollTo) o.scrollTo(((u = {})[p ? "left" : "top"] = -l, u.behavior = "smooth", u)); else o[p ? "scrollLeft" : "scrollTop"] = -l;
                    return !0
                }
                return 0 === t ? (s.setTransition(0), s.setTranslate(l), i && (s.emit("beforeTransitionStart", t, n), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(l), i && (s.emit("beforeTransitionStart", t, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, i && s.emit("transitionEnd"))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (e, t) {
                var i = this;
                i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                var i = this, r = i.activeIndex, n = i.params, s = i.previousIndex;
                if (!n.cssMode) {
                    n.autoHeight && i.updateAutoHeight();
                    var a = t;
                    if (a || (a = r > s ? "next" : r < s ? "prev" : "reset"), i.emit("transitionStart"), e && r !== s) {
                        if ("reset" === a) return void i.emit("slideResetTransitionStart");
                        i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                    }
                }
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                var i = this, r = i.activeIndex, n = i.previousIndex, s = i.params;
                if (i.animating = !1, !s.cssMode) {
                    i.setTransition(0);
                    var a = t;
                    if (a || (a = r > n ? "next" : r < n ? "prev" : "reset"), i.emit("transitionEnd"), e && r !== n) {
                        if ("reset" === a) return void i.emit("slideResetTransitionEnd");
                        i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                    }
                }
            }
        }, slide: {
            slideTo: function (e, t, i, r) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                if ("string" == typeof e) {
                    var n = parseInt(e, 10);
                    if (!isFinite(n)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                    e = n
                }
                var s = this, a = e;
                a < 0 && (a = 0);
                var o = s.params, l = s.snapGrid, d = s.slidesGrid, c = s.previousIndex, u = s.activeIndex,
                    p = s.rtlTranslate, v = s.wrapperEl;
                if (s.animating && o.preventInteractionOnTransition) return !1;
                var f = Math.min(s.params.slidesPerGroupSkip, a), h = f + Math.floor((a - f) / s.params.slidesPerGroup);
                h >= l.length && (h = l.length - 1), (u || o.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                var m, g = -l[h];
                if (s.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) {
                    var C = -Math.floor(100 * g), w = Math.floor(100 * d[b]), T = Math.floor(100 * d[b + 1]);
                    void 0 !== d[b + 1] ? C >= w && C < T - (T - w) / 2 ? a = b : C >= w && C < T && (a = b + 1) : C >= w && (a = b)
                }
                if (s.initialized && a !== u) {
                    if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (u || 0) !== a) return !1
                }
                if (m = a > u ? "next" : a < u ? "prev" : "reset", p && -g === s.translate || !p && g === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(g), "reset" !== m && (s.transitionStart(i, m), s.transitionEnd(i, m)), !1;
                if (o.cssMode) {
                    var y, S = s.isHorizontal(), x = -g;
                    if (p && (x = v.scrollWidth - v.offsetWidth - x), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = x; else if (v.scrollTo) v.scrollTo(((y = {})[S ? "left" : "top"] = x, y.behavior = "smooth", y)); else v[S ? "scrollLeft" : "scrollTop"] = x;
                    return !0
                }
                return 0 === t ? (s.setTransition(0), s.setTranslate(g), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(i, m), s.transitionEnd(i, m)) : (s.setTransition(t), s.setTranslate(g), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(i, m), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, m))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0
            }, slideToLoop: function (e, t, i, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var n = this, s = e;
                return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, i, r)
            }, slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var r = this, n = r.params, s = r.animating,
                    a = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                if (n.loop) {
                    if (s && n.loopPreventsSlide) return !1;
                    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                return r.slideTo(r.activeIndex + a, e, t, i)
            }, slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var r = this, n = r.params, s = r.animating, a = r.snapGrid, o = r.slidesGrid, l = r.rtlTranslate;
                if (n.loop) {
                    if (s && n.loopPreventsSlide) return !1;
                    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                var c, u = d(l ? r.translate : -r.translate), p = a.map((function (e) {
                    return d(e)
                })), v = (a[p.indexOf(u)], a[p.indexOf(u) - 1]);
                return void 0 === v && n.cssMode && a.forEach((function (e) {
                    !v && u >= e && (v = e)
                })), void 0 !== v && (c = o.indexOf(v)) < 0 && (c = r.activeIndex - 1), r.slideTo(c, e, t, i)
            }, slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            }, slideToClosest: function (e, t, i, r) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
                var n = this, s = n.activeIndex, a = Math.min(n.params.slidesPerGroupSkip, s),
                    o = a + Math.floor((s - a) / n.params.slidesPerGroup),
                    l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[o]) {
                    var d = n.snapGrid[o];
                    l - d > (n.snapGrid[o + 1] - d) * r && (s += n.params.slidesPerGroup)
                } else {
                    var c = n.snapGrid[o - 1];
                    l - c <= (n.snapGrid[o] - c) * r && (s -= n.params.slidesPerGroup)
                }
                return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, e, t, i)
            }, slideToClickedSlide: function () {
                var e, t = this, i = t.params, r = t.$wrapperEl,
                    n = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, s = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(Object(a.a)(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Object(o.e)((function () {
                        t.slideTo(s)
                    }))) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Object(o.e)((function () {
                        t.slideTo(s)
                    }))) : t.slideTo(s)
                } else t.slideTo(s)
            }
        }, loop: {
            loopCreate: function () {
                var e = this, t = Object(l.a)(), i = e.params, r = e.$wrapperEl;
                r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var n = r.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var s = i.slidesPerGroup - n.length % i.slidesPerGroup;
                    if (s !== i.slidesPerGroup) {
                        for (var o = 0; o < s; o += 1) {
                            var d = Object(a.a)(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            r.append(d)
                        }
                        n = r.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                var c = [], u = [];
                n.each((function (t, i) {
                    var r = Object(a.a)(t);
                    i < e.loopedSlides && u.push(t), i < n.length && i >= n.length - e.loopedSlides && c.push(t), r.attr("data-swiper-slide-index", i)
                }));
                for (var p = 0; p < u.length; p += 1) r.append(Object(a.a)(u[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var v = c.length - 1; v >= 0; v -= 1) r.prepend(Object(a.a)(c[v].cloneNode(!0)).addClass(i.slideDuplicateClass))
            }, loopFix: function () {
                var e = this;
                e.emit("beforeLoopFix");
                var t, i = e.activeIndex, r = e.slides, n = e.loopedSlides, s = e.allowSlidePrev, a = e.allowSlideNext,
                    o = e.snapGrid, l = e.rtlTranslate;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                var d = -o[i] - e.getTranslate();
                if (i < n) t = r.length - 3 * n + i, t += n, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d); else if (i >= r.length - n) {
                    t = -r.length + i + n, t += n, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                }
                e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix")
            }, loopDestroy: function () {
                var e = this, t = e.$wrapperEl, i = e.params, r = e.slides;
                t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index")
            }
        }, grabCursor: {
            setGrabCursor: function (e) {
                var t = this;
                if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                    var i = t.el;
                    i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
                }
            }, unsetGrabCursor: function () {
                var e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        }, manipulation: {
            appendSlide: function (e) {
                var t = this, i = t.$wrapperEl, r = t.params;
                if (r.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && i.append(e[n]); else i.append(e);
                r.loop && t.loopCreate(), r.observer && t.support.observer || t.update()
            }, prependSlide: function (e) {
                var t = this, i = t.params, r = t.$wrapperEl, n = t.activeIndex;
                i.loop && t.loopDestroy();
                var s = n + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && r.prepend(e[a]);
                    s = n + e.length
                } else r.prepend(e);
                i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), t.slideTo(s, 0, !1)
            }, addSlide: function (e, t) {
                var i = this, r = i.$wrapperEl, n = i.params, s = i.activeIndex;
                n.loop && (s -= i.loopedSlides, i.loopDestroy(), i.slides = r.children("." + n.slideClass));
                var a = i.slides.length;
                if (e <= 0) i.prependSlide(t); else if (e >= a) i.appendSlide(t); else {
                    for (var o = s > e ? s + 1 : s, l = [], d = a - 1; d >= e; d -= 1) {
                        var c = i.slides.eq(d);
                        c.remove(), l.unshift(c)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var u = 0; u < t.length; u += 1) t[u] && r.append(t[u]);
                        o = s > e ? s + t.length : s
                    } else r.append(t);
                    for (var p = 0; p < l.length; p += 1) r.append(l[p]);
                    n.loop && i.loopCreate(), n.observer && i.support.observer || i.update(), n.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                }
            }, removeSlide: function (e) {
                var t = this, i = t.params, r = t.$wrapperEl, n = t.activeIndex;
                i.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = r.children("." + i.slideClass));
                var s, a = n;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) s = e[o], t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1);
                    a = Math.max(a, 0)
                } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
                i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            }, removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        }, events: {
            attachEvents: function () {
                var e = this, t = Object(l.a)(), i = e.params, r = e.touchEvents, n = e.el, s = e.wrapperEl,
                    a = e.device, o = e.support;
                e.onTouchStart = m.bind(e), e.onTouchMove = g.bind(e), e.onTouchEnd = b.bind(e), i.cssMode && (e.onScroll = T.bind(e)), e.onClick = w.bind(e);
                var d = !!i.nested;
                if (!o.touch && o.pointerEvents) n.addEventListener(r.start, e.onTouchStart, !1), t.addEventListener(r.move, e.onTouchMove, d), t.addEventListener(r.end, e.onTouchEnd, !1); else {
                    if (o.touch) {
                        var c = !("touchstart" !== r.start || !o.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n.addEventListener(r.start, e.onTouchStart, c), n.addEventListener(r.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: d
                        } : d), n.addEventListener(r.end, e.onTouchEnd, c), r.cancel && n.addEventListener(r.cancel, e.onTouchEnd, c), y || (t.addEventListener("touchstart", S), y = !0)
                    }
                    (i.simulateTouch && !a.ios && !a.android || i.simulateTouch && !o.touch && a.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1))
                }
                (i.preventClicks || i.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0), i.cssMode && s.addEventListener("scroll", e.onScroll), i.updateOnWindowResize ? e.on(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e.on("observerUpdate", C, !0)
            }, detachEvents: function () {
                var e = this, t = Object(l.a)(), i = e.params, r = e.touchEvents, n = e.el, s = e.wrapperEl,
                    a = e.device, o = e.support, d = !!i.nested;
                if (!o.touch && o.pointerEvents) n.removeEventListener(r.start, e.onTouchStart, !1), t.removeEventListener(r.move, e.onTouchMove, d), t.removeEventListener(r.end, e.onTouchEnd, !1); else {
                    if (o.touch) {
                        var c = !("onTouchStart" !== r.start || !o.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n.removeEventListener(r.start, e.onTouchStart, c), n.removeEventListener(r.move, e.onTouchMove, d), n.removeEventListener(r.end, e.onTouchEnd, c), r.cancel && n.removeEventListener(r.cancel, e.onTouchEnd, c)
                    }
                    (i.simulateTouch && !a.ios && !a.android || i.simulateTouch && !o.touch && a.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                }
                (i.preventClicks || i.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0), i.cssMode && s.removeEventListener("scroll", e.onScroll), e.off(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C)
            }
        }, breakpoints: {
            setBreakpoint: function () {
                var e = this, t = e.activeIndex, i = e.initialized, r = e.loopedSlides, n = void 0 === r ? 0 : r,
                    s = e.params, a = e.$el, l = s.breakpoints;
                if (l && (!l || 0 !== Object.keys(l).length)) {
                    var d = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                    if (d && e.currentBreakpoint !== d) {
                        var c = d in l ? l[d] : void 0;
                        c && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                            var t = c[e];
                            void 0 !== t && (c[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }));
                        var u = c || e.originalParams, p = s.slidesPerColumn > 1, v = u.slidesPerColumn > 1;
                        p && !v ? (a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !p && v && (a.addClass(s.containerModifierClass + "multirow"), "column" === u.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                        var f = u.direction && u.direction !== s.direction,
                            h = s.loop && (u.slidesPerView !== s.slidesPerView || f);
                        f && i && e.changeDirection(), Object(o.c)(e.params, u), Object(o.c)(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", u), h && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", u)
                    }
                }
            }, getBreakpoint: function (e, t, i) {
                if (void 0 === t && (t = "window"), e && ("container" !== t || i)) {
                    var r = !1, n = Object(l.b)(), s = "window" === t ? n.innerWidth : i.clientWidth,
                        a = "window" === t ? n.innerHeight : i.clientHeight, o = Object.keys(e).map((function (e) {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                var t = parseFloat(e.substr(1));
                                return {value: a * t, point: e}
                            }
                            return {value: e, point: e}
                        }));
                    o.sort((function (e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }));
                    for (var d = 0; d < o.length; d += 1) {
                        var c = o[d], u = c.point;
                        c.value <= s && (r = u)
                    }
                    return r || "max"
                }
            }
        }, checkOverflow: {
            checkOverflow: function () {
                var e = this, t = e.params, i = e.isLocked,
                    r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), i && i !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
            }
        }, classes: {
            addClasses: function () {
                var e, t, i, r = this, n = r.classNames, s = r.params, a = r.rtl, o = r.$el, l = r.device,
                    d = r.support,
                    c = (e = ["initialized", s.direction, {"pointer-events": d.pointerEvents && !d.touch}, {"free-mode": s.freeMode}, {autoheight: s.autoHeight}, {rtl: a}, {multirow: s.slidesPerColumn > 1}, {"multirow-column": s.slidesPerColumn > 1 && "column" === s.slidesPerColumnFill}, {android: l.android}, {ios: l.ios}, {"css-mode": s.cssMode}], t = s.containerModifierClass, i = [], e.forEach((function (e) {
                        "object" == typeof e ? Object.entries(e).forEach((function (e) {
                            var r = e[0];
                            e[1] && i.push(t + r)
                        })) : "string" == typeof e && i.push(t + e)
                    })), i);
                n.push.apply(n, c), o.addClass([].concat(n).join(" ")), r.emitContainerClasses()
            }, removeClasses: function () {
                var e = this, t = e.$el, i = e.classNames;
                t.removeClass(i.join(" ")), e.emitContainerClasses()
            }
        }, images: {
            loadImage: function (e, t, i, r, n, s) {
                var o, d = Object(l.b)();

                function c() {
                    s && s()
                }

                Object(a.a)(e).parent("picture")[0] || e.complete && n ? c() : t ? ((o = new d.Image).onload = c, o.onerror = c, r && (o.sizes = r), i && (o.srcset = i), t && (o.src = t)) : c()
            }, preloadImages: function () {
                var e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var r = e.imagesToLoad[i];
                    e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, M = {}, P = function () {
        function e() {
            for (var t, i, r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
            if (1 === n.length && n[0].constructor && n[0].constructor === Object ? i = n[0] : (t = n[0], i = n[1]), i || (i = {}), i = Object(o.c)({}, i), t && !i.el && (i.el = t), i.el && Object(a.a)(i.el).length > 1) {
                var l = [];
                return Object(a.a)(i.el).each((function (t) {
                    var r = Object(o.c)({}, i, {el: t});
                    l.push(new e(r))
                })), l
            }
            var p = this;
            p.support = d(), p.device = c({userAgent: i.userAgent}), p.browser = u(), p.eventsListeners = {}, p.eventsAnyListeners = [], void 0 === p.modules && (p.modules = {}), Object.keys(p.modules).forEach((function (e) {
                var t = p.modules[e];
                if (t.params) {
                    var r = Object.keys(t.params)[0], n = t.params[r];
                    if ("object" != typeof n || null === n) return;
                    if (!(r in i) || !("enabled" in n)) return;
                    !0 === i[r] && (i[r] = {enabled: !0}), "object" != typeof i[r] || "enabled" in i[r] || (i[r].enabled = !0), i[r] || (i[r] = {enabled: !1})
                }
            }));
            var v, f, h = Object(o.c)({}, x);
            return p.useParams(h), p.params = Object(o.c)({}, h, M, i), p.originalParams = Object(o.c)({}, p.params), p.passedParams = Object(o.c)({}, i), p.params && p.params.on && Object.keys(p.params.on).forEach((function (e) {
                p.on(e, p.params.on[e])
            })), p.params && p.params.onAny && p.onAny(p.params.onAny), p.$ = a.a, Object(o.c)(p, {
                el: t,
                classNames: [],
                slides: Object(a.a)(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                    return "horizontal" === p.params.direction
                },
                isVertical: function () {
                    return "vertical" === p.params.direction
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: p.params.allowSlideNext,
                allowSlidePrev: p.params.allowSlidePrev,
                touchEvents: (v = ["touchstart", "touchmove", "touchend", "touchcancel"], f = ["mousedown", "mousemove", "mouseup"], p.support.pointerEvents && (f = ["pointerdown", "pointermove", "pointerup"]), p.touchEventsTouch = {
                    start: v[0],
                    move: v[1],
                    end: v[2],
                    cancel: v[3]
                }, p.touchEventsDesktop = {
                    start: f[0],
                    move: f[1],
                    end: f[2]
                }, p.support.touch || !p.params.simulateTouch ? p.touchEventsTouch : p.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video, label",
                    lastClickTime: Object(o.f)(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: p.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), p.useModules(), p.emit("_swiper"), p.params.init && p.init(), p
        }

        var t, i, r, n = e.prototype;
        return n.emitContainerClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter((function (t) {
                    return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                }));
                e.emit("_containerClasses", t.join(" "))
            }
        }, n.getSlideClasses = function (e) {
            var t = this;
            return e.className.split(" ").filter((function (e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            })).join(" ")
        }, n.emitSlidesClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each((function (i) {
                    var r = e.getSlideClasses(i);
                    t.push({slideEl: i, classNames: r}), e.emit("_slideClass", i, r)
                })), e.emit("_slideClasses", t)
            }
        }, n.slidesPerViewDynamic = function () {
            var e = this, t = e.params, i = e.slides, r = e.slidesGrid, n = e.size, s = e.activeIndex, a = 1;
            if (t.centeredSlides) {
                for (var o, l = i[s].swiperSlideSize, d = s + 1; d < i.length; d += 1) i[d] && !o && (a += 1, (l += i[d].swiperSlideSize) > n && (o = !0));
                for (var c = s - 1; c >= 0; c -= 1) i[c] && !o && (a += 1, (l += i[c].swiperSlideSize) > n && (o = !0))
            } else for (var u = s + 1; u < i.length; u += 1) r[u] - r[s] < n && (a += 1);
            return a
        }, n.update = function () {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            function r() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
        }, n.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this, r = i.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("" + i.params.containerModifierClass + r).addClass("" + i.params.containerModifierClass + e), i.emitContainerClasses(), i.params.direction = e, i.slides.each((function (t) {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), i.emit("changeDirection"), t && i.update()), i
        }, n.mount = function (e) {
            var t = this;
            if (t.mounted) return !0;
            var i, r = Object(a.a)(e || t.params.el);
            return !!(e = r[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (i = Object(a.a)(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function (e) {
                return r.children(e)
            } : i = r.children("." + t.params.wrapperClass), Object(o.c)(t, {
                $el: r,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display")
            }), !0)
        }, n.init = function (e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }, n.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, r = i.params, n = i.$el, s = i.$wrapperEl, a = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                i.off(e)
            })), !1 !== e && (i.$el[0].swiper = null, Object(o.b)(i)), i.destroyed = !0), null
        }, e.extendDefaults = function (e) {
            Object(o.c)(M, e)
        }, e.installModule = function (t) {
            e.prototype.modules || (e.prototype.modules = {});
            var i = t.name || Object.keys(e.prototype.modules).length + "_" + Object(o.f)();
            e.prototype.modules[i] = t
        }, e.use = function (t) {
            return Array.isArray(t) ? (t.forEach((function (t) {
                return e.installModule(t)
            })), e) : (e.installModule(t), e)
        }, t = e, r = [{
            key: "extendedDefaults", get: function () {
                return M
            }
        }, {
            key: "defaults", get: function () {
                return x
            }
        }], (i = null) && E(t.prototype, i), r && E(t, r), e
    }();
    Object.keys(O).forEach((function (e) {
        Object.keys(O[e]).forEach((function (t) {
            P.prototype[t] = O[e][t]
        }))
    })), P.use([p, h]);
    t.a = P
}]]);