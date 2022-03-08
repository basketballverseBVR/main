! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, i) {
        "use strict";
        var s = [],
            o = Object.getPrototypeOf,
            a = s.slice,
            l = s.flat ? function(e) {
                return s.flat.call(e)
            } : function(e) {
                return s.concat.apply([], e)
            },
            c = s.push,
            u = s.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            h = f.toString,
            m = h.call(Object),
            g = {},
            v = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            },
            y = function(e) {
                return null != e && e === e.window
            },
            b = n.document,
            w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var r, i, s = (n = n || b).createElement("script");
            if (s.text = e, t)
                for (r in w)(i = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, i);
            n.head.appendChild(s).parentNode.removeChild(s)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
        };

        function S(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.6.0",
            constructor: C,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: s.sort,
            splice: s.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, i, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || v(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) r = e[t], "__proto__" !== t && o !== r && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], s = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, o[t] = C.extend(c, s, r)) : void 0 !== r && (o[t] = r));
            return o
        }, C.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = o(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === m)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                x(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (S(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : u.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, s = e.length, o = !n; i < s; i++) !t(e[i], i) !== o && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, s = 0,
                    o = [];
                if (S(e))
                    for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && o.push(i);
                else
                    for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
                return l(o)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }));
        var E =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            function(e) {
                var t, n, r, i, s, o, a, l, c, u, d, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    T = 0,
                    C = 0,
                    S = le(),
                    E = le(),
                    k = le(),
                    L = le(),
                    A = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    M = {}.hasOwnProperty,
                    P = [],
                    D = P.pop,
                    N = P.push,
                    O = P.push,
                    j = P.slice,
                    I = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    z = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
                    _ = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                    B = new RegExp(H + "+", "g"),
                    R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    W = new RegExp("^" + H + "*," + H + "*"),
                    G = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    F = new RegExp(H + "|>"),
                    V = new RegExp(_),
                    X = new RegExp("^" + q + "$"),
                    Y = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + z),
                        PSEUDO: new RegExp("^" + _),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + $ + ")$", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                    },
                    U = /HTML$/i,
                    K = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    se = function() {
                        p()
                    },
                    oe = we((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    O.apply(P = j.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType
                } catch (e) {
                    O = {
                        apply: P.length ? function(e, t) {
                            N.apply(e, j.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, r, i) {
                    var s, a, c, u, d, h, v, y = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
                    if (!i && (p(t), t = t || f, m)) {
                        if (11 !== x && (d = Z.exec(e)))
                            if (s = d[1]) {
                                if (9 === x) {
                                    if (!(c = t.getElementById(s))) return r;
                                    if (c.id === s) return r.push(c), r
                                } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return r.push(c), r
                            } else {
                                if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                                if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(s)), r
                            }
                        if (n.qsa && !L[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === x && (F.test(e) || G.test(e))) {
                                for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = w)), a = (h = o(e)).length; a--;) h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                                v = h.join(",")
                            }
                            try {
                                return O.apply(r, y.querySelectorAll(v)), r
                            } catch (t) {
                                L(e, !0)
                            } finally {
                                u === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(R, "$1"), t, r, i)
                }

                function le() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function ce(e) {
                    return e[w] = !0, e
                }

                function ue(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function me(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return ce((function(t) {
                        return t = +t, ce((function(n, r) {
                            for (var i, s = e([], n.length, t), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        }))
                    }))
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ae.support = {}, s = ae.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !U.test(t || n && n.nodeName || "HTML")
                    }, p = ae.setDocument = function(e) {
                        var t, i, o = e ? e.ownerDocument || e : x;
                        return o != f && 9 === o.nodeType && o.documentElement ? (h = (f = o).documentElement, m = !s(f), x != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", se, !1) : i.attachEvent && i.attachEvent("onunload", se)), n.scope = ue((function(e) {
                            return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ue((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ue((function(e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue((function(e) {
                            return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, i, s = t.getElementById(e);
                                if (s) {
                                    if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                    for (i = t.getElementsByName(e), r = 0; s = i[r++];)
                                        if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return s
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ue((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", _)
                        })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                s = t.parentNode,
                                o = [e],
                                a = [t];
                            if (!i || !s) return e == f ? -1 : t == f ? 1 : i ? -1 : s ? 1 : u ? I(u, e) - I(u, t) : 0;
                            if (i === s) return pe(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; o[r] === a[r];) r++;
                            return r ? pe(o[r], a[r]) : o[r] == x ? -1 : a[r] == x ? 1 : 0
                        }, f) : f
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && m && !L[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            L(t, !0)
                        }
                        return ae(t, f, null, [e]).length > 0
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != f && p(e), b(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) != f && p(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            s = i && M.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                        return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            s = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                            for (; t = e[s++];) t === e[s] && (i = r.push(s));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return u = null, e
                    }, i = ae.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            s = e.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === s || 4 === s) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = ae.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var s = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var c, u, d, p, f, h, m = s !== o ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (g) {
                                        if (s) {
                                            for (; m;) {
                                                for (p = t; p = p[m];)
                                                    if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                            for (b = (f = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    u[e] = [T, f, b];
                                                    break
                                                }
                                        } else if (y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                            for (;
                                                (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
                                        return (b -= i) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                    for (var r, s = i(e, t), o = s.length; o--;) e[r = I(e, s[o])] = !(n[r] = s[o])
                                })) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: ce((function(e) {
                                var t = [],
                                    n = [],
                                    r = a(e.replace(R, "$1"));
                                return r[w] ? ce((function(e, t, n, i) {
                                    for (var s, o = r(e, null, i, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                                })) : function(e, i, s) {
                                    return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ce((function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            })),
                            contains: ce((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || i(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ce((function(e) {
                                return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return K.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            })),
                            last: ge((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ye() {}

                function be(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function we(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        s = i || r,
                        o = n && "parentNode" === s,
                        a = C++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i);
                        return !1
                    } : function(t, n, l) {
                        var c, u, d, p = [T, a];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = u[s]) && c[0] === T && c[1] === a) return p[2] = c[2];
                                        if (u[s] = p, p[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, r, i) {
                    for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, r, i) || (o.push(s), c && t.push(a)));
                    return o
                }

                function Ce(e, t, n, r, i, s) {
                    return r && !r[w] && (r = Ce(r)), i && !i[w] && (i = Ce(i, s)), ce((function(s, o, a, l) {
                        var c, u, d, p = [],
                            f = [],
                            h = o.length,
                            m = s || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []),
                            g = !e || !s && t ? m : Te(m, p, e, a, l),
                            v = n ? i || (s ? e : h || r) ? [] : o : g;
                        if (n && n(g, v, a, l), r)
                            for (c = Te(v, f), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                    i(null, v = [], c, l)
                                }
                                for (u = v.length; u--;)(d = v[u]) && (c = i ? I(s, d) : p[u]) > -1 && (s[c] = !(o[c] = d))
                            }
                        } else v = Te(v === o ? v.splice(h, v.length) : v), i ? i(null, o, v, l) : O.apply(o, v)
                    }))
                }

                function Se(e) {
                    for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], l = o ? 1 : 0, u = we((function(e) {
                            return e === t
                        }), a, !0), d = we((function(e) {
                            return I(t, e) > -1
                        }), a, !0), p = [function(e, n, r) {
                            var i = !o && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                            return t = null, i
                        }]; l < s; l++)
                        if (n = r.relative[e[l].type]) p = [we(xe(p), n)];
                        else {
                            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (i = ++l; i < s && !r.relative[e[i].type]; i++);
                                return Ce(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(R, "$1"), n, l < i && Se(e.slice(l, i)), i < s && Se(e = e.slice(i)), i < s && be(e))
                            }
                            p.push(n)
                        }
                    return xe(p)
                }
                return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, o = ae.tokenize = function(e, t) {
                    var n, i, s, o, a, l, c, u = E[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = r.preFilter; a;) {
                        for (o in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(s = [])), n = !1, (i = G.exec(a)) && (n = i.shift(), s.push({
                                value: n,
                                type: i[0].replace(R, " ")
                            }), a = a.slice(n.length)), r.filter) !(i = Y[o].exec(a)) || c[o] && !(i = c[o](i)) || (n = i.shift(), s.push({
                            value: n,
                            type: o,
                            matches: i
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
                }, a = ae.compile = function(e, t) {
                    var n, i = [],
                        s = [],
                        a = k[e + " "];
                    if (!a) {
                        for (t || (t = o(e)), n = t.length; n--;)(a = Se(t[n]))[w] ? i.push(a) : s.push(a);
                        (a = k(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                s = function(s, o, a, l, u) {
                                    var d, h, g, v = 0,
                                        y = "0",
                                        b = s && [],
                                        w = [],
                                        x = c,
                                        C = s || i && r.find.TAG("*", u),
                                        S = T += null == x ? 1 : Math.random() || .1,
                                        E = C.length;
                                    for (u && (c = o == f || o || u); y !== E && null != (d = C[y]); y++) {
                                        if (i && d) {
                                            for (h = 0, o || d.ownerDocument == f || (p(d), a = !m); g = e[h++];)
                                                if (g(d, o || f, a)) {
                                                    l.push(d);
                                                    break
                                                }
                                            u && (T = S)
                                        }
                                        n && ((d = !g && d) && v--, s && b.push(d))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (h = 0; g = t[h++];) g(b, w, o, a);
                                        if (s) {
                                            if (v > 0)
                                                for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                            w = Te(w)
                                        }
                                        O.apply(l, w), u && !s && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                    }
                                    return u && (T = S, c = x), b
                                };
                            return n ? ce(s) : s
                        }(s, i))).selector = e
                    }
                    return a
                }, l = ae.select = function(e, t, n, i) {
                    var s, l, c, u, d, p = "function" == typeof e && e,
                        f = !i && o(e = p.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (s = Y.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !r.relative[u = c.type]);)
                            if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                if (l.splice(s, 1), !(e = i.length && be(l))) return O.apply(n, i), n;
                                break
                            }
                    }
                    return (p || a(e, f))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                })), ue((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ue((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ue((function(e) {
                    return null == e.getAttribute("disabled")
                })) || de($, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), ae
            }(n);
        C.find = E, C.expr = E.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = E.uniqueSort, C.text = E.getText, C.isXMLDoc = E.isXML, C.contains = E.contains, C.escapeSelector = E.escape;
        var k = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && C(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            L = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            A = C.expr.match.needsContext;

        function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function D(e, t, n) {
            return v(t) ? C.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? C.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function(e) {
                return u.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(i[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(D(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(D(this, e || [], !0))
            },
            is: function(e) {
                return !!D(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length
            }
        });
        var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || N, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), P.test(r[1]) && C.isPlainObject(t))
                        for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, N = C(b);
        var j = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function $(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    s = [],
                    o = "string" != typeof e && C(e);
                if (!A.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return k(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return k(e, "parentNode", n)
            },
            next: function(e) {
                return $(e, "nextSibling")
            },
            prev: function(e) {
                return $(e, "previousSibling")
            },
            nextAll: function(e) {
                return k(e, "nextSibling")
            },
            prevAll: function(e) {
                return k(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return k(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return k(e, "previousSibling", n)
            },
            siblings: function(e) {
                return L((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return L(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (M(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function(e, t) {
            C.fn[e] = function(n, r) {
                var i = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (I[e] || C.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i)
            }
        }));
        var H = /[^\x20\t\r\n\f]+/g;

        function q(e) {
            return e
        }

        function z(e) {
            throw e
        }

        function _(e, t, n, r) {
            var i;
            try {
                e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(H) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, r, i, s = [],
                o = [],
                a = -1,
                l = function() {
                    for (i = i || e.once, r = t = !0; o.length; a = -1)
                        for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !t && (a = s.length - 1, o.push(n)), function t(n) {
                            C.each(n, (function(n, r) {
                                v(r) ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== T(r) && t(r)
                            }))
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var n;
                                (n = C.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return i = o = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return i = o = [], n || t || (s = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(n) {
                                C.each(t, (function(t, r) {
                                    var i = v(e[r[4]]) && e[r[4]];
                                    s[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, i) {
                            var s = 0;

                            function o(e, t, r, i) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < s)) {
                                                if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, o(s, t, q, i), o(s, t, z, i)) : (s++, c.call(n, o(s, t, q, i), o(s, t, z, i), o(s, t, q, t.notifyWith))) : (r !== q && (a = void 0, l = [n]), (i || t.resolveWith)(a, l))
                                            }
                                        },
                                        u = i ? c : function() {
                                            try {
                                                c()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= s && (r !== z && (a = void 0, l = [n]), t.rejectWith(a, l))
                                            }
                                        };
                                    e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return C.Deferred((function(n) {
                                t[0][3].add(o(0, n, v(i) ? i : q, n.notifyWith)), t[1][3].add(o(0, n, v(e) ? e : q)), t[2][3].add(o(0, n, v(r) ? r : z))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, i) : i
                        }
                    },
                    s = {};
                return C.each(t, (function(e, n) {
                    var o = n[2],
                        a = n[5];
                    i[n[1]] = o.add, a && o.add((function() {
                        r = a
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), s[n[0]] = function() {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[n[0] + "With"] = o.fireWith
                })), i.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = a.call(arguments),
                    s = C.Deferred(),
                    o = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || s.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (_(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || v(i[n] && i[n].then))) return s.then();
                for (; n--;) _(i[n], o(n), s.reject);
                return s.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var R = C.Deferred();

        function W() {
            b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), C.ready()
        }
        C.fn.ready = function(e) {
            return R.then(e).catch((function(e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || R.resolveWith(b, [C]))
            }
        }), C.ready.then = R.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
        var G = function(e, t, n, r, i, s, o) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === T(n))
                    for (a in i = !0, n) G(e, t, a, n[a], !0, s, o);
                else if (void 0 !== r && (i = !0, v(r) || (o = !0), c && (o ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(C(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : s
            },
            F = /^-ms-/,
            V = /-([a-z])/g;

        function X(e, t) {
            return t.toUpperCase()
        }

        function Y(e) {
            return e.replace(F, "ms-").replace(V, X)
        }
        var U = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = C.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[Y(t)] = n;
                else
                    for (r in t) i[Y(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(H) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var Q = new K,
            J = new K,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    J.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return J.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }), C.fn.extend({
            data: function(e, t) {
                var n, r, i, s = this[0],
                    o = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && (i = J.get(s), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = Y(r.slice(5)), te(s, r, i[r]));
                        Q.set(s, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each((function() {
                    J.set(this, e)
                })) : G(this, (function(t) {
                    var n;
                    if (s && void 0 === t) return void 0 !== (n = J.get(s, e)) || void 0 !== (n = te(s, e)) ? n : void 0;
                    this.each((function() {
                        J.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    J.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = C._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, (function() {
                    C.dequeue(e, t)
                }), s)), !r && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: C.Callbacks("once memory").add((function() {
                        Q.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    C.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = C.Deferred(),
                    s = this,
                    o = this.length,
                    a = function() {
                        --r || i.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Q.get(s[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            se = b.documentElement,
            oe = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            ae = {
                composed: !0
            };
        se.getRootNode && (oe = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var le = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
        };

        function ce(e, t, n, r) {
            var i, s, o = 20,
                a = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && re.exec(C.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; o--;) C.style(e, t, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), u /= s;
                u *= 2, C.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
        }
        var ue = {};

        function de(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ue[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
        }

        function pe(e, t) {
            for (var n, r, i = [], s = 0, o = e.length; s < o; s++)(r = e[s]).style && (n = r.style.display, t ? ("none" === n && (i[s] = Q.get(r, "display") || null, i[s] || (r.style.display = "")), "" === r.style.display && le(r) && (i[s] = de(r))) : "none" !== n && (i[s] = "none", Q.set(r, "display", n)));
            for (s = 0; s < o; s++) null != i[s] && (e[s].style.display = i[s]);
            return e
        }
        C.fn.extend({
            show: function() {
                return pe(this, !0)
            },
            hide: function() {
                return pe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    le(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var fe, he, me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", g.option = !!fe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && M(e, t) ? C.merge([e], n) : n
        }

        function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;

        function Te(e, t, n, r, i) {
            for (var s, o, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                if ((s = e[f]) || 0 === s)
                    if ("object" === T(s)) C.merge(p, s.nodeType ? [s] : s);
                    else if (xe.test(s)) {
                for (o = o || d.appendChild(t.createElement("div")), a = (ge.exec(s) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
                C.merge(p, o.childNodes), (o = d.firstChild).textContent = ""
            } else p.push(t.createTextNode(s));
            for (d.textContent = "", f = 0; s = p[f++];)
                if (r && C.inArray(s, r) > -1) i && i.push(s);
                else if (c = oe(s), o = be(d.appendChild(s), "script"), c && we(o), n)
                for (u = 0; s = o[u++];) ve.test(s.type || "") && n.push(s);
            return d
        }
        var Ce = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function Ee() {
            return !1
        }

        function ke(e, t) {
            return e === function() {
                try {
                    return b.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Le(e, t, n, r, i, s) {
            var o, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, a, n, r, t[a], s);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
            else if (!i) return e;
            return 1 === s && (o = i, (i = function(e) {
                return C().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = C.guid++)), e.each((function() {
                C.event.add(this, t, i, r, n)
            }))
        }

        function Ae(e, t, n) {
            n ? (Q.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, s = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (s.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (s = a.call(arguments), Q.set(this, t, s), r = n(this, t), this[t](), s !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, s !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                    } else s.length && (Q.set(this, t, {
                        value: C.event.trigger(C.extend(s[0], C.Event.prototype), s.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && C.event.add(e, t, Se)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var s, o, a, l, c, u, d, p, f, h, m, g = Q.get(e);
                if (U(e))
                    for (n.handler && (n = (s = n).handler, i = s.selector), i && C.find.matchesSelector(se, i), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(H) || [""]).length; c--;) f = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = C.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = C.event.special[f] || {}, u = C.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), C.event.global[f] = !0)
            },
            remove: function(e, t, n, r, i) {
                var s, o, a, l, c, u, d, p, f, h, m, g = Q.hasData(e) && Q.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(H) || [""]).length; c--;)
                        if (f = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                            for (d = C.event.special[f] || {}, p = l[f = (r ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) u = p[s], !i && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(s, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f])
                        } else
                            for (f in l) C.event.remove(e, f + t[c], n, r, !0);
                    C.isEmptyObject(l) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, s, o, a = new Array(arguments.length),
                    l = C.event.fix(e),
                    c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                    u = C.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (o = C.event.handlers.call(this, l, c), t = 0;
                        (i = o[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = i.elem, n = 0;
                            (s = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (r = ((C.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, s, o, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [c]).length), o[i] && s.push(r);
                            s.length && a.push({
                                elem: c,
                                handlers: s
                            })
                        }
                return c = this, l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && M(t, "input") && Ae(t, "click", Se), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && M(t, "input") && Ae(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && M(t, "input") && Q.get(t, "click") || M(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Ae(this, e, ke), !1
                },
                trigger: function() {
                    return Ae(this, e), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj;
                    return i && (i === r || C.contains(r, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function(e, t, n, r) {
                return Le(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Le(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var Me = /<script|<style|<link/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ne(e, t) {
            return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Oe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function je(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ie(e, t) {
            var n, r, i, s, o, a;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (a = Q.get(e).events))
                    for (i in Q.remove(t, "handle events"), a)
                        for (n = 0, r = a[i].length; n < r; n++) C.event.add(t, i, a[i][n]);
                J.hasData(e) && (s = J.access(e), o = C.extend({}, s), J.set(t, o))
            }
        }

        function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function He(e, t, n, r) {
            t = l(t);
            var i, s, o, a, c, u, d = 0,
                p = e.length,
                f = p - 1,
                h = t[0],
                m = v(h);
            if (m || p > 1 && "string" == typeof h && !g.checkClone && Pe.test(h)) return e.each((function(i) {
                var s = e.eq(i);
                m && (t[0] = h.call(this, i, s.html())), He(s, t, n, r)
            }));
            if (p && (s = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
                for (a = (o = C.map(be(i, "script"), Oe)).length; d < p; d++) c = i, d !== f && (c = C.clone(c, !0, !0), a && C.merge(o, be(c, "script"))), n.call(e[d], c, d);
                if (a)
                    for (u = o[o.length - 1].ownerDocument, C.map(o, je), d = 0; d < a; d++) c = o[d], ve.test(c.type || "") && !Q.access(c, "globalEval") && C.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : x(c.textContent.replace(De, ""), c, u))
            }
            return e
        }

        function qe(e, t, n) {
            for (var r, i = t ? C.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || C.cleanData(be(r)), r.parentNode && (n && oe(r) && we(be(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, s, o, a = e.cloneNode(!0),
                    l = oe(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (o = be(a), r = 0, i = (s = be(e)).length; r < i; r++) $e(s[r], o[r]);
                if (t)
                    if (n)
                        for (s = s || be(e), o = o || be(a), r = 0, i = s.length; r < i; r++) Ie(s[r], o[r]);
                    else Ie(e, a);
                return (o = be(a, "script")).length > 0 && we(o, !l && be(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, r, i = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
                    if (U(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return qe(this, e, !0)
            },
            remove: function(e) {
                return qe(this, e)
            },
            text: function(e) {
                return G(this, (function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return He(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return He(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return He(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return He(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return C.clone(this, e, t)
                }))
            },
            html: function(e) {
                return G(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Me.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return He(this, arguments, (function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], i = C(e), s = i.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), C(i[o])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var ze = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            _e = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Be = function(e, t, n) {
                var r, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = s[i];
                return r
            },
            Re = new RegExp(ie.join("|"), "i");

        function We(e, t, n) {
            var r, i, s, o, a = e.style;
            return (n = n || _e(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = C.style(e, t)), !g.pixelBoxStyles() && ze.test(o) && Re.test(t) && (r = a.width, i = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, a.minWidth = i, a.maxWidth = s)), void 0 !== o ? o + "" : o
        }

        function Ge(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", s = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, s, o, a, l, c = b.createElement("div"),
                u = b.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(g, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), o
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), s
                },
                reliableTrDimensions: function() {
                    var e, t, r, i;
                    return null == a && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", se.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a
                }
            }))
        }();
        var Fe = ["Webkit", "Moz", "ms"],
            Ve = b.createElement("div").style,
            Xe = {};

        function Ye(e) {
            var t = C.cssProps[e] || Xe[e];
            return t || (e in Ve ? e : Xe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                    if ((e = Fe[n] + t) in Ve) return e
            }(e) || e)
        }
        var Ue = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Je = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function et(e, t, n, r, i, s) {
            var o = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === n && (l += C.css(e, n + ie[o], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + ie[o], !0, i)), "margin" !== n && (l -= C.css(e, "border" + ie[o] + "Width", !0, i))) : (l += C.css(e, "padding" + ie[o], !0, i), "padding" !== n ? l += C.css(e, "border" + ie[o] + "Width", !0, i) : a += C.css(e, "border" + ie[o] + "Width", !0, i));
            return !r && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
        }

        function tt(e, t, n) {
            var r = _e(e),
                i = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                s = i,
                o = We(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ze.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && M(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (s = a in e) && (o = e[a])), (o = parseFloat(o) || 0) + et(e, t, n || (i ? "border" : "content"), s, r, o) + "px"
        }

        function nt(e, t, n, r, i) {
            return new nt.prototype.init(e, t, n, r, i)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, s, o, a = Y(t),
                        l = Ke.test(t),
                        c = e.style;
                    if (l || (t = Ye(a)), o = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : c[t];
                    "string" === (s = typeof n) && (i = re.exec(n)) && i[1] && (n = ce(e, t, i), s = "number"), null != n && n == n && ("number" !== s || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, s, o, a = Y(t);
                return Ke.test(t) || (t = Ye(a)), (o = C.cssHooks[t] || C.cssHooks[a]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (s = parseFloat(i), !0 === n || isFinite(s) ? s || 0 : i) : i
            }
        }), C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Ue.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Be(e, Qe, (function() {
                        return tt(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var i, s = _e(e),
                        o = !g.scrollboxSize() && "absolute" === s.position,
                        a = (o || r) && "border-box" === C.css(e, "boxSizing", !1, s),
                        l = r ? et(e, t, r, a, s) : 0;
                    return a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - et(e, t, "border", !1, s) - .5)), l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Ze(0, n, l)
                }
            }
        })), C.cssHooks.marginLeft = Ge(g.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = Ze)
        })), C.fn.extend({
            css: function(e, t) {
                return G(this, (function(e, t, n) {
                    var r, i, s = {},
                        o = 0;
                    if (Array.isArray(t)) {
                        for (r = _e(e), i = t.length; o < i; o++) s[t[o]] = C.css(e, t[o], !1, r);
                        return s
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = nt, nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
            }
        }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = nt.prototype.init, C.fx.step = {};
        var rt, it, st = /^(?:toggle|show|hide)$/,
            ot = /queueHooks$/;

        function at() {
            it && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, C.fx.interval), C.fx.tick())
        }

        function lt() {
            return n.setTimeout((function() {
                rt = void 0
            })), rt = Date.now()
        }

        function ct(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ut(e, t, n) {
            for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), s = 0, o = i.length; s < o; s++)
                if (r = i[s].call(n, t, e)) return r
        }

        function dt(e, t, n) {
            var r, i, s = 0,
                o = dt.prefilters.length,
                a = C.Deferred().always((function() {
                    delete l.elem
                })),
                l = function() {
                    if (i) return !1;
                    for (var t = rt || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(r);
                    return a.notifyWith(e, [c, r, n]), r < 1 && o ? n : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                },
                c = a.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (! function(e, t) {
                    var n, r, i, s, o;
                    for (n in e)
                        if (i = t[r = Y(n)], s = e[n], Array.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), (o = C.cssHooks[r]) && "expand" in o)
                            for (n in s = o.expand(s), delete e[r], s) n in e || (e[n] = s[n], t[n] = i);
                        else t[r] = i
                }(u, c.opts.specialEasing); s < o; s++)
                if (r = dt.prefilters[s].call(c, e, u, c.opts)) return v(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(u, ut, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        C.Animation = C.extend(dt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(H);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, s, o, a, l, c, u, d = "width" in t || "height" in t,
                        p = this,
                        f = {},
                        h = e.style,
                        m = e.nodeType && le(e),
                        g = Q.get(e, "fxshow");
                    for (r in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                            o.unqueued || a()
                        }), o.unqueued++, p.always((function() {
                            p.always((function() {
                                o.unqueued--, C.queue(e, "fx").length || o.empty.fire()
                            }))
                        }))), t)
                        if (i = t[r], st.test(i)) {
                            if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[r]) continue;
                                m = !0
                            }
                            f[r] = g && g[r] || C.style(e, r)
                        }
                    if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = C.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (p.done((function() {
                                h.display = c
                            })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                            display: c
                        }), s && (g.hidden = !m), m && pe([e], !0), p.done((function() {
                            for (r in m || pe([e]), Q.remove(e, "fxshow"), f) C.style(e, r, f[r])
                        }))), l = ut(m ? g[r] : 0, r, p), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = C.isEmptyObject(e),
                        s = C.speed(t, n, r),
                        o = function() {
                            var t = dt(this, C.extend({}, e), s);
                            (i || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            s = C.timers,
                            o = Q.get(this);
                        if (i) o[i] && o[i].stop && r(o[i]);
                        else
                            for (i in o) o[i] && o[i].stop && ot.test(i) && r(o[i]);
                        for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                        !t && n || C.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = Q.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            s = C.timers,
                            o = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), C.each(["toggle", "show", "hide"], (function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
                }
            })), C.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), rt = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                it || (it = !0, at())
            }, C.fx.stop = function() {
                it = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                }))
            },
            function() {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
            }();
        var pt, ft = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return G(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, i, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && M(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(H);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = ft[t] || C.find.attr;
            ft[t] = function(e, t, r) {
                var i, s, o = t.toLowerCase();
                return r || (s = ft[o], ft[o] = i, i = null != n(e, t, r) ? o : null, ft[o] = s), i
            }
        }));
        var ht = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;

        function gt(e) {
            return (e.match(H) || []).join(" ")
        }

        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return G(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, i, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function(e) {
                var t, n, r, i, s, o, a, l = 0;
                if (v(e)) return this.each((function(t) {
                    C(this).addClass(e.call(this, t, vt(this)))
                }));
                if ((t = yt(e)).length)
                    for (; n = this[l++];)
                        if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (o = 0; s = t[o++];) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                            i !== (a = gt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, s, o, a, l = 0;
                if (v(e)) return this.each((function(t) {
                    C(this).removeClass(e.call(this, t, vt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; n = this[l++];)
                        if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (o = 0; s = t[o++];)
                                for (; r.indexOf(" " + s + " ") > -1;) r = r.replace(" " + s + " ", " ");
                            i !== (a = gt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                    C(this).toggleClass(e.call(this, n, vt(this), t), t)
                })) : this.each((function() {
                    var t, i, s, o;
                    if (r)
                        for (i = 0, s = C(this), o = yt(e); t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var bt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = v(e), this.each((function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : gt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            s = e.selectedIndex,
                            o = "select-one" === e.type,
                            a = o ? null : [],
                            l = o ? s + 1 : i.length;
                        for (r = s < 0 ? l : o ? s : 0; r < l; r++)
                            if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, s = C.makeArray(t), o = i.length; o--;)((r = i[o]).selected = C.inArray(C.valHooks.option.get(r), s) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), s
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, g.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), g.focusin = "onfocusin" in n;
        var wt = /^(?:focusinfocus|focusoutblur)$/,
            xt = function(e) {
                e.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(e, t, r, i) {
                var s, o, a, l, c, u, d, p, h = [r || b],
                    m = f.call(e, "type") ? e.type : e,
                    g = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = p = a = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !y(r)) {
                        for (l = d.delegateType || m, wt.test(l + m) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
                        a === (r.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0;
                        (o = h[s++]) && !e.isPropagationStopped();) p = o, e.type = s > 1 ? l : d.bindType || m, (u = (Q.get(o, "events") || Object.create(null))[e.type] && Q.get(o, "handle")) && u.apply(o, t), (u = c && o[c]) && u.apply && U(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !U(r) || c && v(r[m]) && !y(r) && ((a = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, xt), r[m](), e.isPropagationStopped() && p.removeEventListener(m, xt), C.event.triggered = void 0, a && (r[c] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    C.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), g.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = Q.access(r, t);
                    i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = Q.access(r, t) - 1;
                    i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                }
            }
        }));
        var Tt = n.location,
            Ct = {
                guid: Date.now()
            },
            St = /\?/;
        C.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return r = t && t.getElementsByTagName("parsererror")[0], t && !r || C.error("Invalid XML: " + (r ? C.map(r.childNodes, (function(e) {
                return e.textContent
            })).join("\n") : e)), t
        };
        var Et = /\[\]$/,
            kt = /\r?\n/g,
            Lt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;

        function Mt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) C.each(t, (function(t, i) {
                n || Et.test(e) ? r(e, i) : Mt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }));
            else if (n || "object" !== T(t)) r(e, t);
            else
                for (i in t) Mt(e + "[" + i + "]", t[i], n, r)
        }
        C.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                i(this.name, this.value)
            }));
            else
                for (n in e) Mt(n, e[n], t, i);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !Lt.test(e) && (this.checked || !me.test(e))
                })).map((function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                })).get()
            }
        });
        var Pt = /%20/g,
            Dt = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            jt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            $t = {},
            Ht = {},
            qt = "*/".concat("*"),
            zt = b.createElement("a");

        function _t(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    s = t.toLowerCase().match(H) || [];
                if (v(n))
                    for (; r = s[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Bt(e, t, n, r) {
            var i = {},
                s = e === Ht;

            function o(a) {
                var l;
                return i[a] = !0, C.each(e[a] || [], (function(e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                })), l
            }
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }

        function Rt(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        zt.href = Tt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Rt(Rt(e, C.ajaxSettings), t) : Rt(C.ajaxSettings, e)
            },
            ajaxPrefilter: _t($t),
            ajaxTransport: _t(Ht),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, s, o, a, l, c, u, d, p, f = C.ajaxSetup({}, t),
                    h = f.context || f,
                    m = f.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                    g = C.Deferred(),
                    v = C.Callbacks("once memory"),
                    y = f.statusCode || {},
                    w = {},
                    x = {},
                    T = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!o)
                                    for (o = {}; t = Ot.exec(s);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = o[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), E(0, t), this
                        }
                    };
                if (g.promise(S), f.url = ((e || f.url || Tt.href) + "").replace(It, Tt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = zt.protocol + "//" + zt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Bt($t, f, t, S), c) return S;
                for (d in (u = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), i = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pt, "+")) : (p = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (St.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(Nt, "$1"), p = (St.test(i) ? "&" : "?") + "_=" + Ct.guid++ + p), f.url = i + p), f.ifModified && (C.lastModified[i] && S.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || c)) return S.abort();
                if (T = "abort", v.add(f.complete), S.done(f.success), S.fail(f.error), r = Bt(Ht, f, t, S)) {
                    if (S.readyState = 1, u && m.trigger("ajaxSend", [S, f]), c) return S;
                    f.async && f.timeout > 0 && (a = n.setTimeout((function() {
                        S.abort("timeout")
                    }), f.timeout));
                    try {
                        c = !1, r.send(w, E)
                    } catch (e) {
                        if (c) throw e;
                        E(-1, e)
                    }
                } else E(-1, "No Transport");

                function E(e, t, o, l) {
                    var d, p, b, w, x, T = t;
                    c || (c = !0, a && n.clearTimeout(a), r = void 0, s = l || "", S.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, o && (w = function(e, t, n) {
                        for (var r, i, s, o, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    l.unshift(i);
                                    break
                                }
                        if (l[0] in n) s = l[0];
                        else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    s = i;
                                    break
                                }
                                o || (o = i)
                            }
                            s = s || o
                        }
                        if (s) return s !== l[0] && l.unshift(s), n[s]
                    }(f, S, o)), !d && C.inArray("script", f.dataTypes) > -1 && C.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, n, r) {
                        var i, s, o, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                        for (s = u.shift(); s;)
                            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(o = c[l + " " + s] || c["* " + s]))
                                for (i in c)
                                    if ((a = i.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === o ? o = c[i] : !0 !== c[i] && (s = a[0], u.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== o)
                                if (o && e.throws) t = o(t);
                                else try {
                                    t = o(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: o ? e : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, w, S, d), d ? (f.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[i] = x), (x = S.getResponseHeader("etag")) && (C.etag[i] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, d = !(b = w.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", d ? g.resolveWith(h, [p, T, S]) : g.rejectWith(h, [S, T, b]), S.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, f, d ? p : b]), v.fireWith(h, [S, T]), u && (m.trigger("ajaxComplete", [S, f]), --C.active || C.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function(e, t) {
            C[t] = function(e, n, r, i) {
                return v(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        })), C.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return v(e) ? this.each((function(t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = C(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = v(e);
                return this.each((function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Wt = {
                0: 200,
                1223: 204
            },
            Gt = C.ajaxSettings.xhr();
        g.cors = !!Gt && "withCredentials" in Gt, g.ajax = Gt = !!Gt, C.ajaxTransport((function(e) {
            var t, r;
            if (g.cors || Gt && !e.crossDomain) return {
                send: function(i, s) {
                    var o, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(o, i[o]);
                    t = function(e) {
                        return function() {
                            t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, i) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Ft, Vt = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Vt.pop() || C.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var i, s, o, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return o || C.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = n[i], n[i] = function() {
                o = arguments
            }, r.always((function() {
                void 0 === s ? C(n).removeProp(i) : n[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), o && v(s) && s(o[0]), o = s = void 0
            })), "script"
        })), g.createHTMLDocument = ((Ft = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), s = !n && [], (i = P.exec(e)) ? [t.createElement(i[1])] : (i = Te([e], t, s), s && s.length && C(s).remove(), C.merge([], i.childNodes)));
            var r, i, s
        }, C.fn.load = function(e, t, n) {
            var r, i, s, o = this,
                a = e.indexOf(" ");
            return a > -1 && (r = gt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && C.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                s = arguments, o.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                o.each((function() {
                    n.apply(this, s || [e.responseText, t, e])
                }))
            }), this
        }, C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, (function(t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, i, s, o, a, l, c = C.css(e, "position"),
                    u = C(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), s = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (r = u.position()).top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, C.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - C.css(r, "marginTop", !0),
                        left: t.left - i.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || se
                }))
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return G(this, (function(e, r, i) {
                    var s;
                    if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === i) return s ? s[t] : e[r];
                    s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i
                }), e, r, arguments.length)
            }
        })), C.each(["top", "left"], (function(e, t) {
            C.cssHooks[t] = Ge(g.pixelPosition, (function(e, n) {
                if (n) return n = We(e, t), ze.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                C.fn[r] = function(i, s) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === s ? "margin" : "border");
                    return G(this, (function(t, n, i) {
                        var s;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                    }), t, o ? i : void 0, o)
                }
            }))
        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = M, C.isFunction = v, C.isWindow = y, C.camelCase = Y, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Yt, "")
        }, void 0 === (r = function() {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Ut = n.jQuery,
            Kt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Kt), e && n.jQuery === C && (n.jQuery = Ut), C
        }, void 0 === i && (n.jQuery = n.$ = C), C
    }))
}, function(e, t, n) {
    n(0), n(3), e.exports = n(2)
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        i = n.n(r);

    function s(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function o(e = {}, t = {}) {
        Object.keys(t).forEach(n => {
            void 0 === e[n] ? e[n] = t[n] : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && o(e[n], t[n])
        })
    }
    const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function l() {
        const e = "undefined" != typeof document ? document : {};
        return o(e, a), e
    }
    const c = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function u() {
        const e = "undefined" != typeof window ? window : {};
        return o(e, c), e
    }
    class d extends Array {
        constructor(e) {
            super(...e || []),
                function(e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this)
        }
    }

    function p(e = []) {
        const t = [];
        return e.forEach(e => {
            Array.isArray(e) ? t.push(...p(e)) : t.push(e)
        }), t
    }

    function f(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function h(e, t) {
        const n = u(),
            r = l();
        let i = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(i);
        if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let e = "div";
                0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                const t = r.createElement(e);
                t.innerHTML = n;
                for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
            } else i = function(e, t) {
                if ("string" != typeof e) return [e];
                const n = [],
                    r = t.querySelectorAll(e);
                for (let e = 0; e < r.length; e += 1) n.push(r[e]);
                return n
            }(e.trim(), t || r)
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof d) return e;
            i = e
        }
        return new d(function(e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(i))
    }
    h.fn = d.prototype;
    const m = "resize scroll".split(" ");

    function g(e) {
        return function(...t) {
            if (void 0 === t[0]) {
                for (let t = 0; t < this.length; t += 1) m.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
                return this
            }
            return this.on(e, ...t)
        }
    }
    g("click"), g("blur"), g("focus"), g("focusin"), g("focusout"), g("keyup"), g("keydown"), g("keypress"), g("submit"), g("change"), g("mousedown"), g("mousemove"), g("mouseup"), g("mouseenter"), g("mouseleave"), g("mouseout"), g("mouseover"), g("touchstart"), g("touchend"), g("touchmove"), g("resize"), g("scroll");
    const v = {
        addClass: function(...e) {
            const t = p(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.add(...t)
            }), this
        },
        removeClass: function(...e) {
            const t = p(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.remove(...t)
            }), this
        },
        hasClass: function(...e) {
            const t = p(e.map(e => e.split(" ")));
            return f(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
        },
        toggleClass: function(...e) {
            const t = p(e.map(e => e.split(" ")));
            this.forEach(e => {
                t.forEach(t => {
                    e.classList.toggle(t)
                })
            })
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function(...e) {
            let [t, n, r, i] = e;

            function s(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), h(t).is(n)) r.apply(t, i);
                else {
                    const e = h(t).parents();
                    for (let t = 0; t < e.length; t += 1) h(e[t]).is(n) && r.apply(e[t], i)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
            const a = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n)
                    for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: s
                        }), t.addEventListener(e, s, i)
                    } else
                        for (l = 0; l < a.length; l += 1) {
                            const e = a[l];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: o
                            }), t.addEventListener(e, o, i)
                        }
            }
            return this
        },
        off: function(...e) {
            let [t, n, r, i] = e;
            "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
            const s = t.split(" ");
            for (let e = 0; e < s.length; e += 1) {
                const t = s[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let o;
                    if (!n && s.dom7Listeners ? o = s.dom7Listeners[t] : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]), o && o.length)
                        for (let e = o.length - 1; e >= 0; e -= 1) {
                            const n = o[e];
                            r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (s.removeEventListener(t, n.proxyListener, i), o.splice(e, 1)) : r || (s.removeEventListener(t, n.proxyListener, i), o.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = u(),
                n = e[0].split(" "),
                r = e[1];
            for (let i = 0; i < n.length; i += 1) {
                const s = n[i];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n];
                    if (t.CustomEvent) {
                        const n = new t.CustomEvent(s, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter((e, t) => t > 0), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function n(r) {
                r.target === this && (e.call(this, r), t.off("transitionend", n))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = u();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = u(),
                    t = l(),
                    n = this[0],
                    r = n.getBoundingClientRect(),
                    i = t.body,
                    s = n.clientTop || i.clientTop || 0,
                    o = n.clientLeft || i.clientLeft || 0,
                    a = n === e ? e.scrollY : n.scrollTop,
                    c = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: r.top + a - s,
                    left: r.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const n = u();
            let r;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (r = 0; r < this.length; r += 1)
                        for (const t in e) this[r].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach((t, n) => {
                e.apply(t, [t, n])
            }), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = u(),
                n = l(),
                r = this[0];
            let i, s;
            if (!r || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (r.matches) return r.matches(e);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                if (r.msMatchesSelector) return r.msMatchesSelector(e);
                for (i = h(e), s = 0; s < i.length; s += 1)
                    if (i[s] === r) return !0;
                return !1
            }
            if (e === n) return r === n;
            if (e === t) return r === t;
            if (e.nodeType || e instanceof d) {
                for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
                    if (i[s] === r) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return h([]);
            if (e < 0) {
                const n = t + e;
                return h(n < 0 ? [] : [this[n]])
            }
            return h([this[e]])
        },
        append: function(...e) {
            let t;
            const n = l();
            for (let r = 0; r < e.length; r += 1) {
                t = e[r];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const r = n.createElement("div");
                        for (r.innerHTML = t; r.firstChild;) this[e].appendChild(r.firstChild)
                    } else if (t instanceof d)
                    for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = l();
            let n, r;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    const i = t.createElement("div");
                    for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                } else if (e instanceof d)
                for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
        },
        nextAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return h([]);
            for (; n.nextElementSibling;) {
                const r = n.nextElementSibling;
                e ? h(r).is(e) && t.push(r) : t.push(r), n = r
            }
            return h(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
            }
            return h([])
        },
        prevAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return h([]);
            for (; n.previousElementSibling;) {
                const r = n.previousElementSibling;
                e ? h(r).is(e) && t.push(r) : t.push(r), n = r
            }
            return h(t)
        },
        parent: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return h(t)
        },
        parents: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                let r = this[n].parentNode;
                for (; r;) e ? h(r).is(e) && t.push(r) : t.push(r), r = r.parentNode
            }
            return h(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const r = this[n].querySelectorAll(e);
                for (let e = 0; e < r.length; e += 1) t.push(r[e])
            }
            return h(t)
        },
        children: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const r = this[n].children;
                for (let n = 0; n < r.length; n += 1) e && !h(r[n]).is(e) || t.push(r[n])
            }
            return h(t)
        },
        filter: function(e) {
            return h(f(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(v).forEach(e => {
        Object.defineProperty(h.fn, e, {
            value: v[e],
            writable: !0
        })
    });
    var y = h;

    function b(e, t = 0) {
        return setTimeout(e, t)
    }

    function w() {
        return Date.now()
    }

    function x(e, t = "x") {
        const n = u();
        let r, i, s;
        const o = function(e) {
            const t = u();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
        }(e);
        return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? s.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? s.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
    }

    function T(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function C(...e) {
        const t = Object(e[0]),
            n = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const s = e[i];
            if (null != s && (r = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
                const e = Object.keys(Object(s)).filter(e => n.indexOf(e) < 0);
                for (let n = 0, r = e.length; n < r; n += 1) {
                    const r = e[n],
                        i = Object.getOwnPropertyDescriptor(s, r);
                    void 0 !== i && i.enumerable && (T(t[r]) && T(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : C(t[r], s[r]) : !T(t[r]) && T(s[r]) ? (t[r] = {}, s[r].__swiper__ ? t[r] = s[r] : C(t[r], s[r])) : t[r] = s[r])
                }
            }
        }
        var r;
        return t
    }

    function S(e, t, n) {
        e.style.setProperty(t, n)
    }

    function E({
        swiper: e,
        targetPosition: t,
        side: n
    }) {
        const r = u(),
            i = -e.translate;
        let s, o = null;
        const a = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > i ? "next" : "prev",
            c = (e, t) => "next" === l && e >= t || "prev" === l && e <= t,
            d = () => {
                s = (new Date).getTime(), null === o && (o = s);
                const l = Math.max(Math.min((s - o) / a, 1), 0),
                    u = .5 - Math.cos(l * Math.PI) / 2;
                let p = i + u * (t - i);
                if (c(p, t) && (p = t), e.wrapperEl.scrollTo({
                        [n]: p
                    }), c(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [n]: p
                    })
                }), void r.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = r.requestAnimationFrame(d)
            };
        d()
    }
    let k, L, A;

    function M() {
        return k || (k = function() {
            const e = u(),
                t = l();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), k
    }

    function P(e = {}) {
        return L || (L = function({
            userAgent: e
        } = {}) {
            const t = M(),
                n = u(),
                r = n.navigator.platform,
                i = e || n.navigator.userAgent,
                s = {
                    ios: !1,
                    android: !1
                },
                o = n.screen.width,
                a = n.screen.height,
                l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r;
            let h = "MacIntel" === r;
            return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), l && !f && (s.os = "android", s.android = !0), (c || p || d) && (s.os = "ios", s.ios = !0), s
        }(e)), L
    }

    function D() {
        return A || (A = function() {
            const e = u();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), A
    }

    function N({
        swiper: e,
        runCallbacks: t,
        direction: n,
        step: r
    }) {
        const {
            activeIndex: i,
            previousIndex: s
        } = e;
        let o = n;
        if (o || (o = i > s ? "next" : i < s ? "prev" : "reset"), e.emit("transition" + r), t && i !== s) {
            if ("reset" === o) return void e.emit("slideResetTransition" + r);
            e.emit("slideChangeTransition" + r), "next" === o ? e.emit("slideNextTransition" + r) : e.emit("slidePrevTransition" + r)
        }
    }

    function O(e) {
        const t = this,
            n = l(),
            r = u(),
            i = t.touchEventsData,
            {
                params: s,
                touches: o,
                enabled: a
            } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let d = y(c.target);
        if ("wrapper" === s.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
        if (i.isTouchEvent = "touchstart" === c.type, !i.isTouchEvent && "which" in c && 3 === c.which) return;
        if (!i.isTouchEvent && "button" in c && c.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        !!s.noSwipingClass && "" !== s.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (d = y(e.path[0]));
        const p = s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass,
            f = !(!c.target || !c.target.shadowRoot);
        if (s.noSwiping && (f ? function(e, t = this) {
                return function t(n) {
                    return n && n !== l() && n !== u() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                }(t)
            }(p, c.target) : d.closest(p)[0])) return void(t.allowClick = !0);
        if (s.swipeHandler && !d.closest(s.swipeHandler)[0]) return;
        o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
        const h = o.currentX,
            m = o.currentY,
            g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (g && (h <= v || h >= r.innerWidth - v)) {
            if ("prevent" !== g) return;
            e.preventDefault()
        }
        if (Object.assign(i, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = h, o.startY = m, i.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== c.type) {
            let e = !0;
            d.is(i.focusableElements) && (e = !1), n.activeElement && y(n.activeElement).is(i.focusableElements) && n.activeElement !== d[0] && n.activeElement.blur();
            const r = e && t.allowTouchMove && s.touchStartPreventDefault;
            !s.touchStartForcePreventDefault && !r || d[0].isContentEditable || c.preventDefault()
        }
        t.emit("touchStart", c)
    }

    function j(e) {
        const t = l(),
            n = this,
            r = n.touchEventsData,
            {
                params: i,
                touches: s,
                rtlTranslate: o,
                enabled: a
            } = n;
        if (!a) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
        if (r.isTouchEvent && "touchmove" !== c.type) return;
        const u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            d = "touchmove" === c.type ? u.pageX : c.pageX,
            p = "touchmove" === c.type ? u.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return s.startX = d, void(s.startY = p);
        if (!n.allowTouchMove) return n.allowClick = !1, void(r.isTouched && (Object.assign(s, {
            startX: d,
            startY: p,
            currentX: d,
            currentY: p
        }), r.touchStartTime = w()));
        if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (n.isVertical()) {
                if (p < s.startY && n.translate <= n.maxTranslate() || p > s.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
            } else if (d < s.startX && n.translate <= n.maxTranslate() || d > s.startX && n.translate >= n.minTranslate()) return;
        if (r.isTouchEvent && t.activeElement && c.target === t.activeElement && y(c.target).is(r.focusableElements)) return r.isMoved = !0, void(n.allowClick = !1);
        if (r.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        s.currentX = d, s.currentY = p;
        const f = s.currentX - s.startX,
            h = s.currentY - s.startY;
        if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold) return;
        if (void 0 === r.isScrolling) {
            let e;
            n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (r.isScrolling && n.emit("touchMoveOpposite", c), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        n.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation(), r.isMoved || (i.loop && !i.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), r.isMoved = !0;
        let m = n.isHorizontal() ? f : h;
        s.diff = m, m *= i.touchRatio, o && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", r.currentTranslate = m + r.startTranslate;
        let g = !0,
            v = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (v = 0), m > 0 && r.currentTranslate > n.minTranslate() ? (g = !1, i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** v)) : m < 0 && r.currentTranslate < n.maxTranslate() && (g = !1, i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** v)), g && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
            if (!(Math.abs(m) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
            if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void(s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
    }

    function I(e) {
        const t = this,
            n = t.touchEventsData,
            {
                params: r,
                touches: i,
                rtlTranslate: s,
                slidesGrid: o,
                enabled: a
            } = t;
        if (!a) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = w(),
            u = c - n.touchStartTime;
        if (t.allowClick) {
            const e = l.path || l.composedPath && l.composedPath();
            t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), u < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = w(), b(() => {
                t.destroyed || (t.allowClick = !0)
            }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let d;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = r.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, r.cssMode) return;
        if (t.params.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: d
        });
        let p = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== o[e + t] ? d >= o[e] && d < o[e + t] && (p = e, f = o[e + t] - o[e]) : d >= o[e] && (p = e, f = o[o.length - 1] - o[o.length - 2])
        }
        const h = (d - o[p]) / f,
            m = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (u > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (h >= r.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)), "prev" === t.swipeDirection && (h > 1 - r.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p))
        } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(p + m) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(p + m), "prev" === t.swipeDirection && t.slideTo(p))
        }
    }

    function $() {
        const e = this,
            {
                params: t,
                el: n
            } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: r,
            allowSlidePrev: i,
            snapGrid: s
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
    }

    function H(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function q() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: n,
                enabled: r
            } = e;
        if (!r) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let z = !1;

    function _() {}
    const B = (e, t) => {
        const n = l(),
            {
                params: r,
                touchEvents: i,
                el: s,
                wrapperEl: o,
                device: a,
                support: c
            } = e,
            u = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
        if (c.touch) {
            const t = !("touchstart" !== i.start || !c.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            s[d](i.start, e.onTouchStart, t), s[d](i.move, e.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: u
            } : u), s[d](i.end, e.onTouchEnd, t), i.cancel && s[d](i.cancel, e.onTouchEnd, t)
        } else s[d](i.start, e.onTouchStart, !1), n[d](i.move, e.onTouchMove, u), n[d](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) && s[d]("click", e.onClick, !0), r.cssMode && o[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[p](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e[p]("observerUpdate", $, !0)
    };
    const R = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
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
        containerModifierClass: "swiper-",
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

    function G(e, t) {
        return function(n = {}) {
            const r = Object.keys(n)[0],
                i = n[r];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {
                auto: !0
            }), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {
                enabled: !0
            }), "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
                enabled: !1
            }), C(t, n)) : C(t, n)) : C(t, n)
        }
    }
    const F = {
            eventsEmitter: {
                on(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;
                    const i = n ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                    }), r
                },
                once(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;

                    function i(...n) {
                        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, n)
                    }
                    return i.__emitterProxy = t, r.on(e, i, n)
                },
                onAny(e, t) {
                    const n = this;
                    if ("function" != typeof e) return n;
                    const r = t ? "unshift" : "push";
                    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsAnyListeners) return t;
                    const n = t.eventsAnyListeners.indexOf(e);
                    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                },
                off(e, t) {
                    const n = this;
                    return n.eventsListeners ? (e.split(" ").forEach(e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((r, i) => {
                            (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                        })
                    }), n) : n
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let n, r, i;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], r = e.slice(1, e.length), i = t) : (n = e[0].events, r = e[0].data, i = e[0].context || t), r.unshift(i);
                    return (Array.isArray(n) ? n : n.split(" ")).forEach(e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(t => {
                            t.apply(i, [e, ...r])
                        }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(e => {
                            e.apply(i, r)
                        })
                    }), t
                }
            },
            update: {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const r = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
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
                    }

                    function n(e, n) {
                        return parseFloat(e.getPropertyValue(t(n)) || 0)
                    }
                    const r = e.params,
                        {
                            $wrapperEl: i,
                            size: s,
                            rtlTranslate: o,
                            wrongRTL: a
                        } = e,
                        l = e.virtual && r.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        u = i.children("." + e.params.slideClass),
                        d = l ? e.virtual.slides.length : u.length;
                    let p = [];
                    const f = [],
                        h = [];
                    let m = r.slidesOffsetBefore;
                    "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
                    let g = r.slidesOffsetAfter;
                    "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        y = e.slidesGrid.length;
                    let b = r.spaceBetween,
                        w = -m,
                        x = 0,
                        T = 0;
                    if (void 0 === s) return;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), e.virtualSize = -b, o ? u.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : u.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), r.centeredSlides && r.cssMode && (S(e.wrapperEl, "--swiper-centered-offset-before", ""), S(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = r.grid && r.grid.rows > 1 && e.grid;
                    let E;
                    C && e.grid.initSlides(d);
                    const k = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                    for (let i = 0; i < d; i += 1) {
                        E = 0;
                        const o = u.eq(i);
                        if (C && e.grid.updateSlide(i, o, d, t), "none" !== o.css("display")) {
                            if ("auto" === r.slidesPerView) {
                                k && (u[i].style[t("width")] = "");
                                const s = getComputedStyle(o[0]),
                                    a = o[0].style.transform,
                                    l = o[0].style.webkitTransform;
                                if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), r.roundLengths) E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                                else {
                                    const e = n(s, "width"),
                                        t = n(s, "padding-left"),
                                        r = n(s, "padding-right"),
                                        i = n(s, "margin-left"),
                                        a = n(s, "margin-right"),
                                        l = s.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) E = e + i + a;
                                    else {
                                        const {
                                            clientWidth: n,
                                            offsetWidth: s
                                        } = o[0];
                                        E = e + t + r + i + a + (s - n)
                                    }
                                }
                                a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), r.roundLengths && (E = Math.floor(E))
                            } else E = (s - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (E = Math.floor(E)), u[i] && (u[i].style[t("width")] = E + "px");
                            u[i] && (u[i].swiperSlideSize = E), h.push(E), r.centeredSlides ? (w = w + E / 2 + x / 2 + b, 0 === x && 0 !== i && (w = w - s / 2 - b), 0 === i && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), r.roundLengths && (w = Math.floor(w)), T % r.slidesPerGroup == 0 && p.push(w), f.push(w)) : (r.roundLengths && (w = Math.floor(w)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + E + b), e.virtualSize += E + b, x = E, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + g, o && a && ("slide" === r.effect || "coverflow" === r.effect) && i.css({
                            width: e.virtualSize + r.spaceBetween + "px"
                        }), r.setWrapperSize && i.css({
                            [t("width")]: e.virtualSize + r.spaceBetween + "px"
                        }), C && e.grid.updateWrapperSize(E, p, t), !r.centeredSlides) {
                        const t = [];
                        for (let n = 0; n < p.length; n += 1) {
                            let i = p[n];
                            r.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - s && t.push(i)
                        }
                        p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
                        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                        u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
                            [n]: b + "px"
                        })
                    }
                    if (r.centeredSlides && r.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach(t => {
                            e += t + (r.spaceBetween ? r.spaceBetween : 0)
                        }), e -= r.spaceBetween;
                        const t = e - s;
                        p = p.map(e => e < 0 ? -m : e > t ? t + g : e)
                    }
                    if (r.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach(t => {
                                e += t + (r.spaceBetween ? r.spaceBetween : 0)
                            }), e -= r.spaceBetween, e < s) {
                            const t = (s - e) / 2;
                            p.forEach((e, n) => {
                                p[n] = e - t
                            }), f.forEach((e, n) => {
                                f[n] = e + t
                            })
                        }
                    }
                    if (Object.assign(e, {
                            slides: u,
                            snapGrid: p,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                        S(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), S(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            n = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + n)
                    }
                    d !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [],
                        r = t.virtual && t.params.virtual.enabled;
                    let i, s = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const o = e => r ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each(e => {
                            n.push(e)
                        });
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !r) break;
                                n.push(o(e))
                            } else n.push(o(t.activeIndex));
                    for (i = 0; i < n.length; i += 1)
                        if (void 0 !== n[i]) {
                            const e = n[i].offsetHeight;
                            s = e > s ? e : s
                        }
                    s && t.$wrapperEl.css("height", s + "px")
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: r,
                            rtlTranslate: i,
                            snapGrid: s
                        } = t;
                    if (0 === r.length) return;
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let o = -e;
                    i && (o = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < r.length; e += 1) {
                        const a = r[e];
                        let l = a.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
                        const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            u = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            d = -(o - l),
                            p = d + t.slidesSizesGrid[e];
                        (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), r.eq(e).addClass(n.slideVisibleClass)), a.progress = i ? -c : c, a.originalProgress = i ? -u : u
                    }
                    t.visibleSlides = y(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        r = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: s,
                        isEnd: o
                    } = t;
                    const a = s,
                        l = o;
                    0 === r ? (i = 0, s = !0, o = !0) : (i = (e - t.minTranslate()) / r, s = i <= 0, o = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: s,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !s || l && !o) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: r,
                            activeIndex: i,
                            realIndex: s
                        } = e,
                        o = e.virtual && n.virtual.enabled;
                    let a;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));
                    let l = a.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                    let c = a.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: r,
                            snapGrid: i,
                            params: s,
                            activeIndex: o,
                            realIndex: a,
                            snapIndex: l
                        } = t;
                    let c, u = e;
                    if (void 0 === u) {
                        for (let e = 0; e < r.length; e += 1) void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? u = e : n >= r[e] && n < r[e + 1] && (u = e + 1) : n >= r[e] && (u = e);
                        s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                    }
                    if (i.indexOf(n) >= 0) c = i.indexOf(n);
                    else {
                        const e = Math.min(s.slidesPerGroupSkip, u);
                        c = e + Math.floor((u - e) / s.slidesPerGroup)
                    }
                    if (c >= i.length && (c = i.length - 1), u === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: d,
                        previousIndex: o,
                        activeIndex: u
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        r = y(e).closest("." + n.slideClass)[0];
                    let i, s = !1;
                    if (r)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === r) {
                                s = !0, i = e;
                                break
                            }
                    if (!r || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(y(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: r,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let s = x(i[0], e);
                    return n && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: r,
                            params: i,
                            $wrapperEl: s,
                            wrapperEl: o,
                            progress: a
                        } = n;
                    let l, c = 0,
                        u = 0;
                    n.isHorizontal() ? c = r ? -e : e : u = e, i.roundLengths && (c = Math.floor(c), u = Math.floor(u)), i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -u : i.virtualTranslate || s.transform(`translate3d(${c}px, ${u}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : u;
                    const d = n.maxTranslate() - n.minTranslate();
                    l = 0 === d ? 0 : (e - n.minTranslate()) / d, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, r = !0, i) {
                    const s = this,
                        {
                            params: o,
                            wrapperEl: a
                        } = s;
                    if (s.animating && o.preventInteractionOnTransition) return !1;
                    const l = s.minTranslate(),
                        c = s.maxTranslate();
                    let u;
                    if (u = r && e > l ? l : r && e < c ? c : e, s.updateProgress(u), o.cssMode) {
                        const e = s.isHorizontal();
                        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
                        else {
                            if (!s.support.smoothScroll) return E({
                                swiper: s,
                                targetPosition: -u,
                                side: e ? "left" : "top"
                            }), !0;
                            a.scrollTo({
                                [e ? "left" : "top"]: -u,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (s.setTransition(0), s.setTranslate(u), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(u), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            params: r
                        } = n;
                    r.cssMode || (r.autoHeight && n.updateAutoHeight(), N({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e = !0, t) {
                    const {
                        params: n
                    } = this;
                    this.animating = !1, n.cssMode || (this.setTransition(0), N({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e = 0, t = this.params.speed, n = !0, r, i) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const s = this;
                    let o = e;
                    o < 0 && (o = 0);
                    const {
                        params: a,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: u,
                        activeIndex: d,
                        rtlTranslate: p,
                        wrapperEl: f,
                        enabled: h
                    } = s;
                    if (s.animating && a.preventInteractionOnTransition || !h && !r && !i) return !1;
                    const m = Math.min(s.params.slidesPerGroupSkip, o);
                    let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1), (d || a.initialSlide || 0) === (u || 0) && n && s.emit("beforeSlideChangeStart");
                    const v = -l[g];
                    if (s.updateProgress(v), a.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            const t = -Math.floor(100 * v),
                                n = Math.floor(100 * c[e]),
                                r = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= n && t < r - (r - n) / 2 ? o = e : t >= n && t < r && (o = e + 1) : t >= n && (o = e)
                        }
                    if (s.initialized && o !== d) {
                        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (d || 0) !== o) return !1
                    }
                    let y;
                    if (y = o > d ? "next" : o < d ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(v), "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)), !1;
                    if (a.cssMode) {
                        const e = s.isHorizontal(),
                            n = p ? v : -v;
                        if (0 === t) {
                            const t = s.virtual && s.params.virtual.enabled;
                            t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame(() => {
                                s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1
                            })
                        } else {
                            if (!s.support.smoothScroll) return E({
                                swiper: s,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: n,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, y), 0 === t ? s.transitionEnd(n, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, y))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, r) {
                    const i = this;
                    let s = e;
                    return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            animating: i,
                            enabled: s,
                            params: o
                        } = r;
                    if (!s) return r;
                    let a = o.slidesPerGroup;
                    "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                    const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                    if (o.loop) {
                        if (i && o.loopPreventsSlide) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }
                    return r.slideTo(r.activeIndex + l, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: i,
                            animating: s,
                            snapGrid: o,
                            slidesGrid: a,
                            rtlTranslate: l,
                            enabled: c
                        } = r;
                    if (!c) return r;
                    if (i.loop) {
                        if (s && i.loopPreventsSlide) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const d = u(l ? r.translate : -r.translate),
                        p = o.map(e => u(e));
                    let f = o[p.indexOf(d) - 1];
                    if (void 0 === f && i.cssMode) {
                        let e;
                        o.forEach((t, n) => {
                            d >= t && (e = n)
                        }), void 0 !== e && (f = o[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    return void 0 !== f && (h = a.indexOf(f), h < 0 && (h = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.slideTo(h, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, r = .5) {
                    const i = this;
                    let s = i.activeIndex;
                    const o = Math.min(i.params.slidesPerGroupSkip, s),
                        a = o + Math.floor((s - o) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[a]) {
                        const e = i.snapGrid[a];
                        l - e > (i.snapGrid[a + 1] - e) * r && (s += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[a - 1];
                        l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup)
                    }
                    return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, s = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(y(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), b(() => {
                            e.slideTo(s)
                        })) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), b(() => {
                            e.slideTo(s)
                        })) : e.slideTo(s)
                    } else e.slideTo(s)
                }
            },
            loop: {
                loopCreate: function() {
                    const e = this,
                        t = l(),
                        {
                            params: n,
                            $wrapperEl: r
                        } = e,
                        i = r.children().length > 0 ? y(r.children()[0].parentNode) : r;
                    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                    let s = i.children("." + n.slideClass);
                    if (n.loopFillGroupWithBlank) {
                        const e = n.slidesPerGroup - s.length % n.slidesPerGroup;
                        if (e !== n.slidesPerGroup) {
                            for (let r = 0; r < e; r += 1) {
                                const e = y(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                i.append(e)
                            }
                            s = i.children("." + n.slideClass)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
                    const o = [],
                        a = [];
                    s.each((t, n) => {
                        const r = y(t);
                        n < e.loopedSlides && a.push(t), n < s.length && n >= s.length - e.loopedSlides && o.push(t), r.attr("data-swiper-slide-index", n)
                    });
                    for (let e = 0; e < a.length; e += 1) i.append(y(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (let e = o.length - 1; e >= 0; e -= 1) i.prepend(y(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: r,
                        allowSlidePrev: i,
                        allowSlideNext: s,
                        snapGrid: o,
                        rtlTranslate: a
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -o[t] - e.getTranslate();
                    if (t < r) {
                        l = n.length - 3 * r + t, l += r;
                        e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)
                    } else if (t >= n.length - r) {
                        l = -n.length + t + r, l += r;
                        e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)
                    }
                    e.allowSlidePrev = i, e.allowSlideNext = s, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                    const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        t = l(),
                        {
                            params: n,
                            support: r
                        } = e;
                    e.onTouchStart = O.bind(e), e.onTouchMove = j.bind(e), e.onTouchEnd = I.bind(e), n.cssMode && (e.onScroll = q.bind(e)), e.onClick = H.bind(e), r.touch && !z && (t.addEventListener("touchstart", _), z = !0), B(e, "on")
                },
                detachEvents: function() {
                    B(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: n,
                            loopedSlides: r = 0,
                            params: i,
                            $el: s
                        } = e,
                        o = i.breakpoints;
                    if (!o || o && 0 === Object.keys(o).length) return;
                    const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a) return;
                    const l = (a in o ? o[a] : void 0) || e.originalParams,
                        c = R(e, i),
                        u = R(e, l),
                        d = i.enabled;
                    c && !u ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && u && (s.addClass(i.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && s.addClass(i.containerModifierClass + "grid-column"), e.emitContainerClasses());
                    const p = l.direction && l.direction !== i.direction,
                        f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                    p && n && e.changeDirection(), C(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), d && !h ? e.disable() : !d && h && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t = "window", n) {
                    if (!e || "container" === t && !n) return;
                    let r = !1;
                    const i = u(),
                        s = "window" === t ? i.innerHeight : n.clientHeight,
                        o = Object.keys(e).map(e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: s * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        });
                    o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < o.length; e += 1) {
                        const {
                            point: s,
                            value: a
                        } = o[e];
                        "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (r = s) : a <= n.clientWidth && (r = s)
                    }
                    return r || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: n
                        } = e,
                        {
                            slidesOffsetBefore: r
                        } = n;
                    if (r) {
                        const t = e.slides.length - 1,
                            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const {
                        classNames: e,
                        params: t,
                        rtl: n,
                        $el: r,
                        device: i,
                        support: s
                    } = this, o = function(e, t) {
                        const n = [];
                        return e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(r => {
                                e[r] && n.push(t + r)
                            }) : "string" == typeof e && n.push(t + e)
                        }), n
                    }(["initialized", t.direction, {
                        "pointer-events": !s.touch
                    }, {
                        "free-mode": this.params.freeMode && t.freeMode.enabled
                    }, {
                        autoheight: t.autoHeight
                    }, {
                        rtl: n
                    }, {
                        grid: t.grid && t.grid.rows > 1
                    }, {
                        "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                    }, {
                        android: i.android
                    }, {
                        ios: i.ios
                    }, {
                        "css-mode": t.cssMode
                    }, {
                        centered: t.cssMode && t.centeredSlides
                    }], t.containerModifierClass);
                    e.push(...o), r.addClass([...e].join(" ")), this.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, n, r, i, s) {
                    const o = u();
                    let a;

                    function l() {
                        s && s()
                    }
                    y(e).parent("picture")[0] || e.complete && i ? l() : t ? (a = new o.Image, a.onload = l, a.onerror = l, r && (a.sizes = r), n && (a.srcset = n), t && (a.src = t)) : l()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                        const r = e.imagesToLoad[n];
                        e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        V = {};
    class X {
        constructor(...e) {
            let t, n;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = C({}, n), t && !n.el && (n.el = t), n.el && y(n.el).length > 1) {
                const e = [];
                return y(n.el).each(t => {
                    const r = C({}, n, {
                        el: t
                    });
                    e.push(new X(r))
                }), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = M(), r.device = P({
                userAgent: n.userAgent
            }), r.browser = D(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
            const i = {};
            r.modules.forEach(e => {
                e({
                    swiper: r,
                    extendParams: G(n, i),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            });
            const s = C({}, W, i);
            return r.params = C({}, s, V, n), r.originalParams = C({}, r.params), r.passedParams = C({}, n), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                r.on(e, r.params.on[e])
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = y, Object.assign(r, {
                enabled: r.params.enabled,
                el: t,
                classNames: [],
                slides: y(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: w(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            const n = this.minTranslate(),
                r = (this.maxTranslate() - n) * e + n;
            this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each(n => {
                const r = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: r
                }), e.emit("_slideClass", n, r)
            }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            const {
                params: n,
                slides: r,
                slidesGrid: i,
                slidesSizesGrid: s,
                size: o,
                activeIndex: a
            } = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = r[a].swiperSlideSize;
                for (let n = a + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0));
                for (let n = a - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0))
            } else if ("current" === e)
                for (let e = a + 1; e < r.length; e += 1) {
                    (t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1)
                } else
                    for (let e = a - 1; e >= 0; e -= 1) {
                        i[a] - i[e] < o && (l += 1)
                    }
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: n
            } = e;

            function r() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const n = this,
                r = n.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }), n.emit("changeDirection"), t && n.update()), n
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const n = y(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            const r = () => "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
            let i = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = y(e.shadowRoot.querySelector(r()));
                    return t.children = e => n.children(e), t
                }
                return n.children(r())
            })();
            if (0 === i.length && t.params.createElements) {
                const e = l().createElement("div");
                i = y(e), e.className = t.params.wrapperClass, n.append(e), n.children("." + t.params.slideClass).each(e => {
                    i.append(e)
                })
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
            const n = this,
                {
                    params: r,
                    $el: i,
                    $wrapperEl: s,
                    slides: o
                } = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(e => {
                n.off(e)
            }), !1 !== e && (n.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
            C(V, e)
        }
        static get extendedDefaults() {
            return V
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            X.prototype.__modules__ || (X.prototype.__modules__ = []);
            const t = X.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => X.installModule(e)), X) : (X.installModule(e), X)
        }
    }
    Object.keys(F).forEach(e => {
        Object.keys(F[e]).forEach(t => {
            X.prototype[t] = F[e][t]
        })
    }), X.use([function({
        swiper: e,
        on: t,
        emit: n
    }) {
        const r = u();
        let i = null;
        const s = () => {
                e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
            },
            o = () => {
                e && !e.destroyed && e.initialized && n("orientationchange")
            };
        t("init", () => {
            e.params.resizeObserver && void 0 !== r.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver(t => {
                const {
                    width: n,
                    height: r
                } = e;
                let i = n,
                    o = r;
                t.forEach(({
                    contentBoxSize: t,
                    contentRect: n,
                    target: r
                }) => {
                    r && r !== e.el || (i = n ? n.width : (t[0] || t).inlineSize, o = n ? n.height : (t[0] || t).blockSize)
                }), i === n && o === r || s()
            }), i.observe(e.el)) : (r.addEventListener("resize", s), r.addEventListener("orientationchange", o))
        }), t("destroy", () => {
            i && i.unobserve && e.el && (i.unobserve(e.el), i = null), r.removeEventListener("resize", s), r.removeEventListener("orientationchange", o)
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: r
    }) {
        const i = [],
            s = u(),
            o = (e, t = {}) => {
                const n = new(s.MutationObserver || s.WebkitMutationObserver)(e => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function() {
                        r("observerUpdate", e[0])
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                });
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.push(n)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), n("init", () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) o(t[e])
                }
                o(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), o(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }), n("destroy", () => {
            i.forEach(e => {
                e.disconnect()
            }), i.splice(0, i.length)
        })
    }]);
    var Y = X;

    function U(e, t, n, r) {
        const i = l();
        return e.params.createElements && Object.keys(r).forEach(s => {
            if (!n[s] && !0 === n.auto) {
                let o = e.$el.children("." + r[s])[0];
                o || (o = i.createElement("div"), o.className = r[s], e.$el.append(o)), n[s] = o, t[s] = o
            }
        }), n
    }
    Y.use([function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: r
    }) {
        function i(t) {
            let n;
            return t && (n = y(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
        }

        function s(t, n) {
            const r = e.params.navigation;
            t && t.length > 0 && (t[n ? "addClass" : "removeClass"](r.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](r.lockClass))
        }

        function o() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            s(n, e.isBeginning), s(t, e.isEnd)
        }

        function a(t) {
            t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
        }

        function l(t) {
            t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
        }

        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = U(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            const n = i(t.nextEl),
                r = i(t.prevEl);
            n && n.length > 0 && n.on("click", l), r && r.length > 0 && r.on("click", a), Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: r,
                prevEl: r && r[0]
            }), e.enabled || (n && n.addClass(t.lockClass), r && r.addClass(t.lockClass))
        }

        function u() {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", a), n.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, n("init", () => {
            c(), o()
        }), n("toEdge fromEdge lock unlock", () => {
            o()
        }), n("destroy", () => {
            u()
        }), n("enable disable", () => {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        }), n("click", (t, n) => {
            const {
                $nextEl: i,
                $prevEl: s
            } = e.navigation, o = n.target;
            if (e.params.navigation.hideOnClick && !y(o).is(s) && !y(o).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : s && (t = s.hasClass(e.params.navigation.hiddenClass)), r(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
            }
        }), Object.assign(e.navigation, {
            update: o,
            init: c,
            destroy: u
        })
    }]);
    let K = !1;
    const Q = i()("header.primary-header");
    i()(window).on("scroll", (function() {
        K = !0, ie(), ee()
    })), i()(window).on("resize", (function() {
        ee()
    })), i()(() => {
        se(), oe(), setInterval((function() {
            K && (K = !1, re(), ee())
        }), 100), ne(), J(), Z(), te(), ee()
    });
    const J = () => {
            if (i()(".character-slider").length > 0) {
                new Y(".character-slider", {
                    slidesPerView: 1.82,
                    loop: !0,
                    centeredSlides: !0,
                    allowTouchMove: !1,
                    speed: 500,
                    navigation: {
                        nextEl: ".nav--right",
                        prevEl: ".nav--left"
                    },
                    breakpoints: {
                        767: {
                            slidesPerView: 3.95
                        }
                    }
                })
            }
        },
        Z = () => {
            var e = void 0;
            const t = i()(".roadmap__slider");
            if (t.length > 0) {
                const n = window.matchMedia("(max-width:767px)"),
                    r = function() {
                        !1 === n.matches && void 0 === e ? t.length > 0 && s() : !0 === n.matches && void 0 !== e && (e.length > 1 ? e.forEach((function(e) {
                            e.destroy()
                        })) : e.destroy(), e = void 0)
                    },
                    s = function() {
                        e = new Y(".roadmap__slider", {
                            slidesPerView: 3,
                            allowTouchMove: !1,
                            watchSlidesProgress: !0,
                            navigation: {
                                nextEl: ".nav--right",
                                prevEl: ".nav--left"
                            },
                            breakpoints: {
                                1370: {
                                    slidesPerView: 2.67
                                }
                            }
                        })
                    };
                i()(window).on("resize", (function() {
                    r()
                })), r()
            }
        },
        ee = () => {
            const e = i()("header.primary-header");
            let t = 0;
            return e.length > 0 && (t = e.outerHeight()), t
        },
        te = () => {
            const e = i()("header.mobile-menu");
            i()("header.primary-header .menu-trigger").on("click", (function() {
                i()("header.primary-header").hasClass("mobile-menu-active") ? (i()("header.primary-header").removeClass("mobile-menu-active"), e.removeClass("is-active"), i()("body").removeClass("mobile-overflow-h"), setTimeout((function() {
                    e.addClass("hidden")
                }), 350)) : (e.removeClass("hidden"), i()("body").removeClass("mobile-overflow-h"), setTimeout((function() {
                    i()("header.primary-header").addClass("mobile-menu-active"), e.addClass("is-active"), i()("body").addClass("mobile-overflow-h")
                }), 50))
            })), i()("header.mobile-menu .close-trigger").on("click", (function() {
                i()("header.primary-header").removeClass("mobile-menu-active"), e.removeClass("is-active"), i()("body").removeClass("mobile-overflow-h"), setTimeout((function() {
                    e.addClass("hidden")
                }), 350)
            }))
        },
        ne = () => {
            location.hash && (setTimeout((function() {
                window.scrollTo(0, 0)
            }), 1), setTimeout((function() {
                i()("html, body").animate({
                    scrollTop: i()(location.hash).offset().top - ee()
                }, 500)
            }), 50)), i()(document).on("click", 'a[href^="#"]', (function(e) {
                e.preventDefault(), document.location.origin + "/" === document.location.href || document.location.hash ? (i()("header.primary-header").removeClass("mobile-open"), i()("header.mobile-menu").removeClass("is-active"), i()("body").removeClass("mobile-overflow-h"), i()("html, body").animate({
                    scrollTop: i()(i.a.attr(this, "href")).offset().top - ee()
                }, 500)) : window.location.href = "/" + i()(this).prop("hash")
            }))
        },
        re = () => {
            window.pageYOffset > 1 ? Q.hasClass("is-scrolled") || Q.addClass("is-scrolled") : Q.hasClass("is-scrolled") && Q.removeClass("is-scrolled")
        },
        ie = () => {
            i()("section[id]").each((function() {
                const e = i()(this)[0].id;
                (e => {
                    let t = e.offset().top,
                        n = t + e.outerHeight(),
                        r = i()(window).scrollTop(),
                        s = r + i()(window).height();
                    return n > r && t < s
                })(i()(this)) ? (i()("header.primary-header nav a.active").removeClass("active"), i()("header.mobile-menu nav div a.active").removeClass("active"), i()("header.primary-header nav a[href='#" + e + "']").addClass("active"), i()("header.mobile-menu nav div a[href='#" + e + "']").addClass("active")) : (i()("header.primary-header nav a[href='#" + e + "']").removeClass("active"), i()("header.mobile-menu nav div a[href='#" + e + "']").removeClass("active"))
            }))
        },
        se = () => {
            const e = i()(".js-subscribe-trigger"),
                t = i()(".subscribe-popup-wrap"),
                n = i()(".subscribe-popup-wrap .close-trigger");
            e.on("click", (function(e) {
                t.length > 0 && (e.preventDefault(), i()("body").addClass("mobile-overflow-h"), t.addClass("active"))
            })), n.on("click", (function(e) {
                t.length > 0 && (e.preventDefault(), i()("body").removeClass("mobile-overflow-h"), t.removeClass("active"))
            }))
        },
        oe = () => {
            const e = i()(".js-play-video-modal"),
                t = i()(".video-popup-wrap"),
                n = i()(".video-popup-wrap .close-trigger");
            e.on("click", (function(e) {
                t.length > 0 && (e.preventDefault(), i()("body").addClass("mobile-overflow-h"), t.addClass("active"), i()(".video-popup-wrap iframe")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"))
            })), n.on("click", (function(e) {
                t.length > 0 && (e.preventDefault(), i()("body").removeClass("mobile-overflow-h"), t.removeClass("active"), i()(".video-popup-wrap iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"))
            }))
        }
}]);
//# sourceMappingURL=app.bundle.js.map?ver=45c9b339e8b2d2ca195f