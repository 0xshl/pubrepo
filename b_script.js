/*! For license information please see applicationInlineEntry.c93e4c9b91964af6.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [100], {
        1087: (e, t, n) => {
            var r = n(695)(n(479), "DataView");
            e.exports = r
        },
        5847: (e, t, n) => {
            var r = n(2398),
                o = n(2399),
                i = n(2400),
                a = n(2401),
                s = n(2402);

            function u(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
        },
        783: (e, t, n) => {
            var r = n(1622),
                o = n(1623),
                i = n(1624),
                a = n(1625),
                s = n(1626);

            function u(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
        },
        1062: (e, t, n) => {
            var r = n(695)(n(479), "Map");
            e.exports = r
        },
        1204: (e, t, n) => {
            var r = n(1621),
                o = n(1627),
                i = n(1628),
                a = n(1629),
                s = n(1630);

            function u(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, e.exports = u
        },
        1088: (e, t, n) => {
            var r = n(695)(n(479), "Promise");
            e.exports = r
        },
        1071: (e, t, n) => {
            var r = n(695)(n(479), "Set");
            e.exports = r
        },
        617: (e, t, n) => {
            var r = n(479).Symbol;
            e.exports = r
        },
        1072: (e, t, n) => {
            var r = n(695)(n(479), "WeakMap");
            e.exports = r
        },
        1206: (e, t, n) => {
            var r = n(1619),
                o = n(609),
                i = n(98),
                a = n(612),
                s = n(696),
                u = n(1048),
                c = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e),
                    p = !n && o(e),
                    l = !n && !p && a(e),
                    d = !n && !p && !l && u(e),
                    f = n || p || l || d,
                    h = f ? r(e.length, String) : [],
                    m = h.length;
                for (var y in e) !t && !c.call(e, y) || f && ("length" == y || l && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, m)) || h.push(y);
                return h
            }
        },
        1930: (e, t, n) => {
            var r = n(675);
            e.exports = function(e, t) {
                for (var n = e.length; n--;)
                    if (r(e[n][0], t)) return n;
                return -1
            }
        },
        1070: (e, t, n) => {
            var r = n(1205)();
            e.exports = r
        },
        892: (e, t, n) => {
            var r = n(1070),
                o = n(600);
            e.exports = function(e, t) {
                return e && r(e, t, o)
            }
        },
        607: (e, t, n) => {
            var r = n(617),
                o = n(1082),
                i = n(1083),
                a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
            }
        },
        1081: (e, t, n) => {
            var r = n(607),
                o = n(608);
            e.exports = function(e) {
                return o(e) && "[object Arguments]" == r(e)
            }
        },
        1595: (e, t, n) => {
            var r = n(291),
                o = n(5845),
                i = n(211),
                a = n(1069),
                s = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                c = Object.prototype,
                p = u.toString,
                l = c.hasOwnProperty,
                d = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!i(e) || o(e)) && (r(e) ? d : s).test(a(e))
            }
        },
        1085: (e, t, n) => {
            var r = n(607),
                o = n(599),
                i = n(608),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                return i(e) && o(e.length) && !!a[r(e)]
            }
        },
        1064: (e, t, n) => {
            var r = n(618),
                o = n(1086),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return o(e);
                var t = [];
                for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        1619: e => {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        613: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        1065: (e, t, n) => {
            var r = n(604);
            e.exports = function(e) {
                return "function" == typeof e ? e : r
            }
        },
        5846: (e, t, n) => {
            var r = n(479)["__core-js_shared__"];
            e.exports = r
        },
        1205: e => {
            e.exports = function(e) {
                return function(t, n, r) {
                    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--;) {
                        var u = a[e ? s : ++o];
                        if (!1 === n(i[u], u, i)) break
                    }
                    return t
                }
            }
        },
        1203: (e, t, n) => {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        },
        1931: (e, t, n) => {
            var r = n(2403);
            e.exports = function(e, t) {
                var n = e.__data__;
                return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
        },
        695: (e, t, n) => {
            var r = n(1595),
                o = n(1620);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        },
        1082: (e, t, n) => {
            var r = n(617),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                s = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, s),
                    n = e[s];
                try {
                    e[s] = void 0;
                    var r = !0
                } catch (e) {}
                var o = a.call(e);
                return r && (t ? e[s] = n : delete e[s]), o
            }
        },
        1049: (e, t, n) => {
            var r = n(1087),
                o = n(1062),
                i = n(1088),
                a = n(1071),
                s = n(1072),
                u = n(607),
                c = n(1069),
                p = "[object Map]",
                l = "[object Promise]",
                d = "[object Set]",
                f = "[object WeakMap]",
                h = "[object DataView]",
                m = c(r),
                y = c(o),
                v = c(i),
                _ = c(a),
                E = c(s),
                g = u;
            (r && g(new r(new ArrayBuffer(1))) != h || o && g(new o) != p || i && g(i.resolve()) != l || a && g(new a) != d || s && g(new s) != f) && (g = function(e) {
                var t = u(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    r = n ? c(n) : "";
                if (r) switch (r) {
                    case m:
                        return h;
                    case y:
                        return p;
                    case v:
                        return l;
                    case _:
                        return d;
                    case E:
                        return f
                }
                return t
            }), e.exports = g
        },
        1620: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        2398: (e, t, n) => {
            var r = n(2635);
            e.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        2399: e => {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        2400: (e, t, n) => {
            var r = n(2635),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (r) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return o.call(t, e) ? t[e] : void 0
            }
        },
        2401: (e, t, n) => {
            var r = n(2635),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return r ? void 0 !== t[e] : o.call(t, e)
            }
        },
        2402: (e, t, n) => {
            var r = n(2635);
            e.exports = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        696: e => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, n) {
                var r = typeof e;
                return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n
            }
        },
        2403: e => {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        5845: (e, t, n) => {
            var r = n(5846),
                o = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        618: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        },
        1622: e => {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        1623: (e, t, n) => {
            var r = n(1930),
                o = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
            }
        },
        1624: (e, t, n) => {
            var r = n(1930);
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        },
        1625: (e, t, n) => {
            var r = n(1930);
            e.exports = function(e) {
                return r(this.__data__, e) > -1
            }
        },
        1626: (e, t, n) => {
            var r = n(1930);
            e.exports = function(e, t) {
                var n = this.__data__,
                    o = r(n, e);
                return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
            }
        },
        1621: (e, t, n) => {
            var r = n(5847),
                o = n(783),
                i = n(1062);
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(i || o),
                    string: new r
                }
            }
        },
        1627: (e, t, n) => {
            var r = n(1931);
            e.exports = function(e) {
                var t = r(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        1628: (e, t, n) => {
            var r = n(1931);
            e.exports = function(e) {
                return r(this, e).get(e)
            }
        },
        1629: (e, t, n) => {
            var r = n(1931);
            e.exports = function(e) {
                return r(this, e).has(e)
            }
        },
        1630: (e, t, n) => {
            var r = n(1931);
            e.exports = function(e, t) {
                var n = r(this, e),
                    o = n.size;
                return n.set(e, t), this.size += n.size == o ? 0 : 1, this
            }
        },
        2635: (e, t, n) => {
            var r = n(695)(Object, "create");
            e.exports = r
        },
        1086: (e, t, n) => {
            var r = n(1207)(Object.keys, Object);
            e.exports = r
        },
        893: (e, t, n) => {
            e = n.nmd(e);
            var r = n(1203),
                o = t && !t.nodeType && t,
                i = o && e && !e.nodeType && e,
                a = i && i.exports === o && r.process,
                s = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        },
        1083: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        1207: e => {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        479: (e, t, n) => {
            var r = n(1203),
                o = "object" == typeof self && self && self.Object === Object && self,
                i = r || o || Function("return this")();
            e.exports = i
        },
        1069: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        675: e => {
            e.exports = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        1068: (e, t, n) => {
            var r = n(892),
                o = n(1065);
            e.exports = function(e, t) {
                return e && r(e, o(t))
            }
        },
        604: e => {
            e.exports = function(e) {
                return e
            }
        },
        609: (e, t, n) => {
            var r = n(1081),
                o = n(608),
                i = Object.prototype,
                a = i.hasOwnProperty,
                s = i.propertyIsEnumerable,
                u = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return o(e) && a.call(e, "callee") && !s.call(e, "callee")
                };
            e.exports = u
        },
        98: e => {
            var t = Array.isArray;
            e.exports = t
        },
        480: (e, t, n) => {
            var r = n(291),
                o = n(599);
            e.exports = function(e) {
                return null != e && o(e.length) && !r(e)
            }
        },
        612: (e, t, n) => {
            e = n.nmd(e);
            var r = n(479),
                o = n(1084),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                s = a && a.exports === i ? r.Buffer : void 0,
                u = (s ? s.isBuffer : void 0) || o;
            e.exports = u
        },
        292: (e, t, n) => {
            var r = n(1064),
                o = n(1049),
                i = n(609),
                a = n(98),
                s = n(480),
                u = n(612),
                c = n(618),
                p = n(1048),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (s(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || u(e) || p(e) || i(e))) return !e.length;
                var t = o(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (c(e)) return !r(e).length;
                for (var n in e)
                    if (l.call(e, n)) return !1;
                return !0
            }
        },
        291: (e, t, n) => {
            var r = n(607),
                o = n(211);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        599: e => {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        211: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        608: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        1048: (e, t, n) => {
            var r = n(1085),
                o = n(613),
                i = n(893),
                a = i && i.isTypedArray,
                s = a ? o(a) : r;
            e.exports = s
        },
        600: (e, t, n) => {
            var r = n(1206),
                o = n(1064),
                i = n(480);
            e.exports = function(e) {
                return i(e) ? r(e) : o(e)
            }
        },
        610: (e, t, n) => {
            var r = n(1204);

            function o(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, r);
                    return n.cache = i.set(o, a) || i, a
                };
                return n.cache = new(o.Cache || r), n
            }
            o.Cache = r, e.exports = o
        },
        1084: e => {
            e.exports = function() {
                return !1
            }
        },
        9113: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                this.buffer = e
            };
            t.default = n
        },
        880: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FORMAT_BINARY = "binary", t.FORMAT_TEXT_MAP = "text_map", t.FORMAT_HTTP_HEADERS = "http_headers", t.REFERENCE_CHILD_OF = "child_of", t.REFERENCE_FOLLOWS_FROM = "follows_from"
        },
        9114: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SPAN_KIND = "span.kind", t.SPAN_KIND_RPC_CLIENT = "client", t.SPAN_KIND_RPC_SERVER = "server", t.SPAN_KIND_MESSAGING_PRODUCER = "producer", t.SPAN_KIND_MESSAGING_CONSUMER = "consumer", t.ERROR = "error", t.COMPONENT = "component", t.SAMPLING_PRIORITY = "sampling.priority", t.PEER_SERVICE = "peer.service", t.PEER_HOSTNAME = "peer.hostname", t.PEER_ADDRESS = "peer.address", t.PEER_HOST_IPV4 = "peer.ipv4", t.PEER_HOST_IPV6 = "peer.ipv6", t.PEER_PORT = "peer.port", t.HTTP_URL = "http.url", t.HTTP_METHOD = "http.method", t.HTTP_STATUS_CODE = "http.status_code", t.MESSAGE_BUS_DESTINATION = "message_bus.destination", t.DB_INSTANCE = "db.instance", t.DB_STATEMENT = "db.statement", t.DB_TYPE = "db.type", t.DB_USER = "db.user"
        },
        1080: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(880),
                o = n(888),
                i = n(623);
            t.childOf = function(e) {
                return e instanceof i.default && (e = e.context()), new o.default(r.REFERENCE_CHILD_OF, e)
            }, t.followsFrom = function(e) {
                return e instanceof i.default && (e = e.context()), new o.default(r.REFERENCE_FOLLOWS_FROM, e)
            }
        },
        879: function(e, t, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = function(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(1028),
                i = new o.default,
                a = null,
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r(t, e), t.prototype.startSpan = function() {
                        var e = a || i;
                        return e.startSpan.apply(e, arguments)
                    }, t.prototype.inject = function() {
                        var e = a || i;
                        return e.inject.apply(e, arguments)
                    }, t.prototype.extract = function() {
                        var e = a || i;
                        return e.extract.apply(e, arguments)
                    }, t
                }(o.default),
                u = new s;
            t.initGlobalTracer = function(e) {
                a = e
            }, t.globalTracer = function() {
                return u
            }
        },
        624: (e, t, n) => {
            "use strict";

            function r(e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(9113);
            t.BinaryCarrier = o.default;
            var i = n(9114);
            t.Tags = i;
            var a = n(878),
                s = n(888);
            t.Reference = s.default;
            var u = n(623);
            t.Span = u.default;
            var c = n(889);
            t.SpanContext = c.default;
            var p = n(1028);
            t.Tracer = p.Tracer;
            var l = n(9115);
            t.MockTracer = l.MockTracer, r(n(879)), r(n(880)), r(n(1080)), a.initialize()
        },
        9115: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(890);
            t.MockContext = r.default;
            var o = n(891);
            t.MockSpan = o.default;
            var i = n(1029);
            t.MockTracer = i.default
        },
        890: function(e, t, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = function(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n._span = t, n
                }
                return r(t, e), t.prototype.span = function() {
                    return this._span
                }, t
            }(n(624).SpanContext);
            t.MockContext = o, t.default = o
        },
        784: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e) {
                    var t = this;
                    this.spans = e, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], e.forEach((function(e) {
                        0 === e._finishMs && t.unfinishedSpans.push(e), t.spansByUUID[e.uuid()] = e, t.debugSpans.push(e.debug());
                        var n = e.tags();
                        Object.keys(n).forEach((function(r) {
                            var o = n[r];
                            t.spansByTag[r] = t.spansByTag[r] || {}, t.spansByTag[r][o] = t.spansByTag[r][o] || [], t.spansByTag[r][o].push(e)
                        }))
                    }))
                }
                return e.prototype.firstSpanWithTagValue = function(e, t) {
                    var n = this.spansByTag[e];
                    if (!n) return null;
                    var r = n[t];
                    return r ? r[0] : null
                }, e
            }();
            t.MockReport = n, t.default = n
        },
        891: function(e, t, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = function(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(624),
                i = n(890),
                a = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n._mockTracer = t, n._uuid = n._generateUUID(), n._startMs = Date.now(), n._finishMs = 0, n._operationName = "", n._tags = {}, n._logs = [], n
                    }
                    return r(t, e), t.prototype._context = function() {
                        return new i.default(this)
                    }, t.prototype._setOperationName = function(e) {
                        this._operationName = e
                    }, t.prototype._addTags = function(e) {
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            this._tags[r] = e[r]
                        }
                    }, t.prototype._log = function(e, t) {
                        this._logs.push({
                            fields: e,
                            timestamp: t
                        })
                    }, t.prototype._finish = function(e) {
                        this._finishMs = e || Date.now()
                    }, t.prototype.uuid = function() {
                        return this._uuid
                    }, t.prototype.operationName = function() {
                        return this._operationName
                    }, t.prototype.durationMs = function() {
                        return this._finishMs - this._startMs
                    }, t.prototype.tags = function() {
                        return this._tags
                    }, t.prototype.tracer = function() {
                        return this._mockTracer
                    }, t.prototype._generateUUID = function() {
                        return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                    }, t.prototype.addReference = function(e) {}, t.prototype.debug = function() {
                        var e = {
                            uuid: this._uuid,
                            operation: this._operationName,
                            millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                        };
                        return Object.keys(this._tags).length && (e.tags = this._tags), e
                    }, t
                }(o.Span);
            t.MockSpan = a, t.default = a
        },
        1029: function(e, t, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = function(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(624),
                i = n(784),
                a = n(891),
                s = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t._spans = [], t
                    }
                    return r(t, e), t.prototype._startSpan = function(e, t) {
                        var n = this._allocSpan();
                        if (n.setOperationName(e), this._spans.push(n), t.references)
                            for (var r = 0, o = t.references; r < o.length; r++) {
                                var i = o[r];
                                n.addReference(i)
                            }
                        return n._startStack = (new Error).stack, n
                    }, t.prototype._inject = function(e, t, n) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, t.prototype._extract = function(e, t) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, t.prototype._allocSpan = function() {
                        return new a.default(this)
                    }, t.prototype.clear = function() {
                        this._spans = []
                    }, t.prototype.report = function() {
                        return new i.default(this._spans)
                    }, t
                }(o.Tracer);
            t.MockTracer = s, t.default = s
        },
        878: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(623),
                o = n(889),
                i = n(1028);
            t.tracer = null, t.spanContext = null, t.span = null, t.initialize = function() {
                t.tracer = new i.default, t.span = new r.default, t.spanContext = new o.default
            }
        },
        888: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(623),
                o = function() {
                    function e(e, t) {
                        this._type = e, this._referencedContext = t instanceof r.default ? t.context() : t
                    }
                    return e.prototype.type = function() {
                        return this._type
                    }, e.prototype.referencedContext = function() {
                        return this._referencedContext
                    }, e
                }();
            t.default = o
        },
        623: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(878),
                o = function() {
                    function e() {}
                    return e.prototype.context = function() {
                        return this._context()
                    }, e.prototype.tracer = function() {
                        return this._tracer()
                    }, e.prototype.setOperationName = function(e) {
                        return this._setOperationName(e), this
                    }, e.prototype.setBaggageItem = function(e, t) {
                        return this._setBaggageItem(e, t), this
                    }, e.prototype.getBaggageItem = function(e) {
                        return this._getBaggageItem(e)
                    }, e.prototype.setTag = function(e, t) {
                        var n;
                        return this._addTags(((n = {})[e] = t, n)), this
                    }, e.prototype.addTags = function(e) {
                        return this._addTags(e), this
                    }, e.prototype.log = function(e, t) {
                        return this._log(e, t), this
                    }, e.prototype.logEvent = function(e, t) {
                        return this._log({
                            event: e,
                            payload: t
                        })
                    }, e.prototype.finish = function(e) {
                        this._finish(e)
                    }, e.prototype._context = function() {
                        return r.spanContext
                    }, e.prototype._tracer = function() {
                        return r.tracer
                    }, e.prototype._setOperationName = function(e) {}, e.prototype._setBaggageItem = function(e, t) {}, e.prototype._getBaggageItem = function(e) {}, e.prototype._addTags = function(e) {}, e.prototype._log = function(e, t) {}, e.prototype._finish = function(e) {}, e
                }();
            t.Span = o, t.default = o
        },
        889: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e() {}
                return e.prototype.toTraceId = function() {
                    return ""
                }, e.prototype.toSpanId = function() {
                    return ""
                }, e
            }();
            t.SpanContext = n, t.default = n
        },
        1028: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1080),
                o = n(878),
                i = n(623),
                a = function() {
                    function e() {}
                    return e.prototype.startSpan = function(e, t) {
                        if (void 0 === t && (t = {}), t.childOf) {
                            var n = r.childOf(t.childOf);
                            t.references ? t.references.push(n) : t.references = [n], delete t.childOf
                        }
                        return this._startSpan(e, t)
                    }, e.prototype.inject = function(e, t, n) {
                        return e instanceof i.default && (e = e.context()), this._inject(e, t, n)
                    }, e.prototype.extract = function(e, t) {
                        return this._extract(e, t)
                    }, e.prototype._startSpan = function(e, t) {
                        return o.span
                    }, e.prototype._inject = function(e, t, n) {}, e.prototype._extract = function(e, t) {
                        return o.spanContext
                    }, e
                }();
            t.Tracer = a, t.default = a
        },
        307: e => {
            var t, n, r = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" === typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    n = i
                }
            }();
            var s, u = [],
                c = !1,
                p = -1;

            function l() {
                c && s && (c = !1, s.length ? u = s.concat(u) : p = -1, u.length && d())
            }

            function d() {
                if (!c) {
                    var e = a(l);
                    c = !0;
                    for (var t = u.length; t;) {
                        for (s = u, u = []; ++p < t;) s && s[p].run();
                        p = -1, t = u.length
                    }
                    s = null, c = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function f(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new f(e, t)), 1 !== u.length || c || a(d)
            }, f.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                return []
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        6223: (e, t, n) => {
            "use strict";
            var r = n(12905).compose;
            t.composeWithDevTools = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length) return "object" === typeof arguments[0] ? r : r.apply(null, arguments)
            }, "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
        },
        12905: (e, t, n) => {
            "use strict";
            n.d(t, {
                applyMiddleware: () => y,
                bindActionCreators: () => l,
                combineReducers: () => c,
                compose: () => m,
                createStore: () => s
            });
            var r = n(6009),
                o = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                i = {
                    INIT: "@@redux/INIT" + o(),
                    REPLACE: "@@redux/REPLACE" + o(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + o()
                    }
                };

            function a(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function s(e, t, n) {
                var o;
                if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error("Expected the enhancer to be a function.");
                    return n(s)(e, t)
                }
                if ("function" !== typeof e) throw new Error("Expected the reducer to be a function.");
                var u = e,
                    c = t,
                    p = [],
                    l = p,
                    d = !1;

                function f() {
                    l === p && (l = p.slice())
                }

                function h() {
                    if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                    return c
                }

                function m(e) {
                    if ("function" !== typeof e) throw new Error("Expected the listener to be a function.");
                    if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                    var t = !0;
                    return f(), l.push(e),
                        function() {
                            if (t) {
                                if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                                t = !1, f();
                                var n = l.indexOf(e);
                                l.splice(n, 1), p = null
                            }
                        }
                }

                function y(e) {
                    if (!a(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if ("undefined" === typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (d) throw new Error("Reducers may not dispatch actions.");
                    try {
                        d = !0, c = u(c, e)
                    } finally {
                        d = !1
                    }
                    for (var t = p = l, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function v(e) {
                    if ("function" !== typeof e) throw new Error("Expected the nextReducer to be a function.");
                    u = e, y({
                        type: i.REPLACE
                    })
                }

                function _() {
                    var e, t = m;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                            function n() {
                                e.next && e.next(h())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[r.default] = function() {
                        return this
                    }, e
                }
                return y({
                    type: i.INIT
                }), (o = {
                    dispatch: y,
                    subscribe: m,
                    getState: h,
                    replaceReducer: v
                })[r.default] = _, o
            }

            function u(e, t) {
                var n = t && t.type;
                return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            }

            function c(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    0, "function" === typeof e[o] && (n[o] = e[o])
                }
                var a, s = Object.keys(n);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            if ("undefined" === typeof n(void 0, {
                                    type: i.INIT
                                })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if ("undefined" === typeof n(void 0, {
                                    type: i.PROBE_UNKNOWN_ACTION()
                                })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                        }))
                    }(n)
                } catch (e) {
                    a = e
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}), a) throw a;
                    for (var r = !1, o = {}, i = 0; i < s.length; i++) {
                        var c = s[i],
                            p = n[c],
                            l = e[c],
                            d = p(l, t);
                        if ("undefined" === typeof d) {
                            var f = u(c, t);
                            throw new Error(f)
                        }
                        o[c] = d, r = r || d !== l
                    }
                    return (r = r || s.length !== Object.keys(e).length) ? o : e
                }
            }

            function p(e, t) {
                return function() {
                    return t(e.apply(this, arguments))
                }
            }

            function l(e, t) {
                if ("function" === typeof e) return p(e, t);
                if ("object" !== typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                var n = {};
                for (var r in e) {
                    var o = e[r];
                    "function" === typeof o && (n[r] = p(o, t))
                }
                return n
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                var n = Object.keys(e);
                return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(n, !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }

            function y() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments),
                            r = function() {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            i = t.map((function(e) {
                                return e(o)
                            }));
                        return h({}, n, {
                            dispatch: r = m.apply(void 0, i)(n.dispatch)
                        })
                    }
                }
            }
        },
        6009: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            }), e = n.hmd(e);
            const r = function(e) {
                var t, n = e.Symbol;
                return "function" === typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
            }("undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : e)
        },
        674: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                __extends: () => o,
                __assign: () => i,
                __rest: () => a,
                __decorate: () => s,
                __param: () => u,
                __metadata: () => c,
                __awaiter: () => p,
                __generator: () => l,
                __createBinding: () => d,
                __exportStar: () => f,
                __values: () => h,
                __read: () => m,
                __spread: () => y,
                __spreadArrays: () => v,
                __spreadArray: () => _,
                __await: () => E,
                __asyncGenerator: () => g,
                __asyncDelegator: () => S,
                __asyncValues: () => b,
                __makeTemplateObject: () => A,
                __importStar: () => O,
                __importDefault: () => w,
                __classPrivateFieldGet: () => R,
                __classPrivateFieldSet: () => I
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            };

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function s(e, t, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                return i > 3 && a && Object.defineProperty(t, n, a), a
            }

            function u(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function c(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function p(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            }

            function l(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
            var d = Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            };

            function f(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
            }

            function h(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r
            }

            function _(e, t) {
                for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                return e
            }

            function E(e) {
                return this instanceof E ? (this.v = e, this) : new E(e)
            }

            function g(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function a(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || s(e, t)
                        }))
                    })
                }

                function s(e, t) {
                    try {
                        (n = o[e](t)).value instanceof E ? Promise.resolve(n.value.v).then(u, c) : p(i[0][2], n)
                    } catch (e) {
                        p(i[0][3], e)
                    }
                    var n
                }

                function u(e) {
                    s("next", e)
                }

                function c(e) {
                    s("throw", e)
                }

                function p(e, t) {
                    e(t), i.shift(), i.length && s(i[0][0], i[0][1])
                }
            }

            function S(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, o) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: E(e[r](t)),
                            done: "return" === r
                        } : o ? o(t) : t
                    } : o
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function A(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var T = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function O(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
                return T(t, e), t
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function R(e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }

            function I(e, t, n, r, o) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
            }
        },
        13077: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                default: () => l
            });
            var o = new Uint8Array(16);

            function i() {
                if (!r && !(r = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(o)
            }
            const a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            const s = function(e) {
                return "string" === typeof e && a.test(e)
            };
            for (var u = [], c = 0; c < 256; ++c) u.push((c + 256).toString(16).substr(1));
            const p = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
                if (!s(n)) throw TypeError("Stringified UUID is invalid");
                return n
            };
            const l = function(e, t, n) {
                var r = (e = e || {}).random || (e.rng || i)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                    n = n || 0;
                    for (var o = 0; o < 16; ++o) t[n + o] = r[o];
                    return t
                }
                return p(r)
            }
        },
        32: (e, t, n) => {
            "use strict";
            n.d(t, {
                getInjectionPoint: () => o,
                has: () => i,
                map: () => a,
                mapIfNeed: () => s,
                remove: () => u
            });
            var r = new Map;

            function o(e) {
                return function() {
                    return function(e) {
                        var t = r.get(e);
                        if (!t) throw new Error("Missing dependency: " + e);
                        return t
                    }(e)
                }
            }

            function i(e) {
                return r.has(e)
            }

            function a(e, t) {
                if (r.has(e)) throw new Error("Duplicate dependency: " + e);
                r.set(e, t)
            }

            function s(e, t) {
                r.has(e) || r.set(e, t)
            }

            function u(e) {
                r.has(e) && r.delete(e)
            }
        },
        6134: (e, t, n) => {
            "use strict";
            var r = n(13085),
                o = n(87),
                i = n(63),
                a = n(674),
                s = function() {
                    function e() {}
                    return e.prototype.close = function() {
                        return Promise.resolve()
                    }, e
                }(),
                u = (function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.value = t, n
                    }(0, a.__extends)(t, e), t.prototype.isSampled = function(e, t) {
                        return this.value
                    }
                }(s), n(67)),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.template = "/tracer/", t
                    }
                    return (0, a.__extends)(t, e), t.prototype.processError = function(e) {
                        return Promise.reject(e)
                    }, t.prototype.sendSpans = function(e) {
                        return this.apiPost({
                            templateEnd: "save/spans",
                            jsonData: e
                        })
                    }, t.prototype.getSamplingConfig = function(e) {
                        return this.apiGet({
                            templateEnd: "sampling/config",
                            params: {
                                service: e
                            }
                        })
                    }, t
                }(u.default);
            var p, l = n(463),
                d = function() {
                    function e(e, t) {
                        void 0 === e && (e = 100), this.maxSpanBatchSize = e, this.onError = t
                    }
                    return e.prototype.append = function(e) {
                        this.batch && (this.batch.spans.push(e), this.batch.spans.length >= this.maxSpanBatchSize && this.flush())
                    }, e.prototype.close = function() {
                        return this.batch = void 0, Promise.resolve()
                    }, e.prototype.flush = function() {
                        if (this.batch) {
                            if ((this.batch.spans.length || 0) && (0, l.getHasServerTime)()) {
                                var e = (0, a.__assign)({}, this.batch);
                                return this.batch.spans = [], (t = e, (new c).sendSpans(t)).catch(this.onError)
                            }
                            return Promise.resolve()
                        }
                        return Promise.resolve();
                        var t
                    }, e.prototype.setProcess = function(e) {
                        this.batch && this.flush(), this.batch = {
                            process: e,
                            spans: []
                        }
                    }, e
                }(),
                f = function() {
                    function e(e, t) {
                        var n = this;
                        void 0 === t && (t = 1e3), this.sender = e, this.intervalHandle = setInterval((function() {
                            return n.flush()
                        }), t)
                    }
                    return e.prototype.close = function() {
                        var e = this;
                        return clearInterval(this.intervalHandle), this.process = void 0, this.sender.flush().then((function() {
                            return e.sender.close()
                        }))
                    }, e.prototype.setProcess = function(e) {
                        this.process = e, this.sender.setProcess(e)
                    }, e.prototype.report = function(e) {
                        this.sender.append(e)
                    }, e.prototype.flush = function() {
                        if (void 0 !== this.process) return this.sender.flush()
                    }, e
                }();
            ! function(e) {
                e[e.SAMPLED_MASK = 1] = "SAMPLED_MASK", e[e.DEBUG_MASK = 2] = "DEBUG_MASK"
            }(p || (p = {}));
            var h, m = "sampler.type",
                y = "sampler.param",
                v = function() {
                    function e() {}
                    return e.prototype.extract = function(e) {
                        return null
                    }, e.prototype.inject = function(e, t) {
                        e.samplingState.isSampled() && (t["uber-trace-id"] = e.toString())
                    }, e
                }(),
                _ = n(13077);
            ! function(e) {
                e.STRING = "STRING", e.DOUBLE = "DOUBLE", e.BOOL = "BOOL", e.LONG = "LONG", e.BINARY = "BINARY"
            }(h || (h = {}));
            var E = function() {
                    function e(e, t) {
                        this.key = e, this.value = t
                    }
                    return e.prototype.toJSON = function() {
                        var e = {
                                key: this.key,
                                vType: h.STRING
                            },
                            t = typeof this.value;
                        return "number" === t ? (e.vType = h.DOUBLE, e.vDouble = this.value) : "boolean" === t ? (e.vType = h.BOOL, e.vBool = this.value) : "object" === t ? (e.vType = h.STRING, e.vStr = JSON.stringify(this.value)) : (e.vType = h.STRING, e.vStr = "string" === t ? this.value : String(this.value)), e
                    }, e
                }(),
                g = function() {
                    function e(e) {
                        this.flags = 0, this.localRootSpanIdStr = e
                    }
                    return e.prototype.isLocalRootSpan = function(e) {
                        return this.localRootSpanIdStr === e.toSpanId()
                    }, e.prototype.isSampled = function() {
                        return Boolean(this.flags & p.SAMPLED_MASK)
                    }, e.prototype.setSampled = function(e) {
                        this.toggleFlag(p.SAMPLED_MASK, e)
                    }, e.prototype.isDebug = function() {
                        return Boolean(this.flags & p.DEBUG_MASK)
                    }, e.prototype.setDebug = function(e) {
                        this.toggleFlag(p.DEBUG_MASK, e)
                    }, e.prototype.toggleFlag = function(e, t) {
                        t ? this.flags |= e : this.flags &= ~e
                    }, e
                }(),
                S = function(e) {
                    function t(t, n, r, o) {
                        void 0 === o && (o = new g(n));
                        var i = e.call(this) || this;
                        return i.traceIdHex = t, i.spanIdHex = n, i.parentIdHex = r, i.samplingState = o, i
                    }
                    return (0, a.__extends)(t, e), t.prototype.toSpanId = function() {
                        return this.spanIdHex
                    }, t.prototype.toTraceId = function() {
                        return this.traceIdHex
                    }, t.prototype.toString = function() {
                        return this.traceIdHex + ":" + this.spanIdHex + ":" + (this.parentIdHex || 0) + ":" + this.samplingState.flags.toString(16)
                    }, t
                }(i.SpanContext);
            var b = n(884),
                A = n(3),
                T = function(e) {
                    function t(t, n, r, o, i) {
                        void 0 === i && (i = []);
                        var a = e.call(this) || this;
                        return a.tcr = t, a.name = n, a.spanContext = r, a.startTime = o, a.reference = i, a.tags = [], a.logs = [], a
                    }
                    return (0, a.__extends)(t, e), t.prototype._tracer = function() {
                        return this.tcr
                    }, t.prototype._setOperationName = function(e) {
                        throw new Error("Rename '" + e + "' span not supported by sampling")
                    }, t.prototype._context = function() {
                        return this.spanContext
                    }, t.prototype.getContext = function() {
                        return this.spanContext
                    }, t.prototype._addTags = function(e) {
                        var t = this;
                        this.spanContext.samplingState.isSampled() && Object.keys(e).forEach((function(n) {
                            t.tags.push(new E(n, e[n]))
                        }))
                    }, t.prototype._log = function(e, t) {
                        if (void 0 === t && (t = Date.now()), this.spanContext.samplingState.isSampled()) {
                            var n = Object.keys(e).map((function(t) {
                                return new E(t, e[t])
                            }));
                            this.logs.push({
                                timestamp: t,
                                fields: n
                            })
                        }
                    }, t.prototype._finish = function(e) {
                        if (void 0 === this.duration) {
                            if (this.spanContext.samplingState.isSampled()) {
                                this.tags.push(new E("isTabActive", (0, b.isActive)()));
                                var t = e || Date.now();
                                this.duration = t - this.startTime, this.tcr.report(this)
                            }
                        } else A.log(this.tcr.loggerChanel, "Error: operation=" + this.name + ",context=" + this.spanContext.toString() + " #You can only call finish() on a span once.")
                    }, t.prototype.toJSON = function() {
                        return {
                            traceIdHex: this.spanContext.traceIdHex,
                            spanIdHex: this.spanContext.spanIdHex,
                            parentSpanIdHex: this.spanContext.parentIdHex,
                            operationName: this.name,
                            references: this.reference.map((function(e) {
                                return {
                                    refType: e.type().toUpperCase(),
                                    traceIdHex: e.referencedContext().toTraceId(),
                                    spanIdHex: e.referencedContext().toSpanId()
                                }
                            })),
                            flags: this.spanContext.samplingState.flags,
                            startTime: 1e3 * (this.startTime + (0, l.getServerTimeOffset)()),
                            duration: 1e3 * (this.duration || 0),
                            tags: this.tags
                        }
                    }, t.prototype.getDuration = function() {
                        return this.duration
                    }, t
                }(i.Span),
                O = function() {
                    function e() {}
                    return e.prototype.close = function() {
                        return Promise.resolve()
                    }, e.prototype.report = function() {}, e.prototype.setProcess = function() {}, e
                }(),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, a.__extends)(t, e), t
                }(s),
                R = function(e) {
                    function t(t, n, r) {
                        var o = e.call(this) || this;
                        o.reporter = n, o.sampler = r, o.codecMap = {}, o.loggerChanel = "MiroTracer";
                        var a = (0, _.default)(),
                            s = {
                                serviceName: t,
                                tags: [new E("client.version", rtb.version), new E("jaeger.version", "Node-3.17.2"), new E("client-uuid", a)]
                            };
                        return n.setProcess(s), o.codecMap[i.FORMAT_HTTP_HEADERS] = new v, o
                    }
                    return (0, a.__extends)(t, e), t.prototype.startSpan = function(e, t) {
                        return void 0 === t && (t = {}), this._startSpan(e, t)
                    }, t.prototype._startSpan = function(e, t) {
                        var n, r, o = t.startTime,
                            a = t.references,
                            s = t.tags,
                            u = t.childOf,
                            c = u instanceof T ? u.context() : u;
                        o = o || Date.now();
                        var p = function() {
                            for (var e = "", t = 0; t < 16; t++) e += Math.floor(16 * Math.random()).toString(16);
                            return e
                        }();
                        if (!c && a)
                            for (var l = !1, d = 0; d < a.length; d++) {
                                var f = a[d];
                                if (f.type() === i.REFERENCE_CHILD_OF) {
                                    if (!c || l) {
                                        c = f.referencedContext();
                                        break
                                    }
                                } else f.type() === i.REFERENCE_FOLLOWS_FROM && (c || (c = f.referencedContext(), l = !0))
                            }
                        return c instanceof S ? (n = new S(c.traceIdHex, p, c.spanIdHex, c.samplingState), r = new T(this, e, n, o, a), this.sampler instanceof w && this.sampler.onCreateSpan(r)) : (n = new S(p, p), r = new T(this, e, n, o, a), n.samplingState.setSampled(this.sampler.isSampled(e, r.tags))), s && r.addTags(s), r
                    }, t.prototype._inject = function(e, t, n) {
                        var r = this.codecMap[t];
                        if (!r) throw new Error("Unsupported format: " + t);
                        e instanceof S && r.inject(e, n)
                    }, t.prototype._extract = function(e, t) {
                        if (!this.codecMap[e]) throw new Error("Unsupported format: " + e);
                        return null
                    }, t.prototype.close = function() {
                        var e = this,
                            t = this.reporter;
                        return this.reporter = new O, t.close().then((function() {
                            return e.sampler.close()
                        }))
                    }, t.prototype.report = function(e) {
                        this.reporter.report(e)
                    }, t
                }(i.Tracer),
                I = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        if (n.samplingRate = t, t < 0 || t > 1) throw new Error("The sampling rate must be between 0.0 and 1.0. Received " + t);
                        return n
                    }
                    return (0, a.__extends)(t, e), t.prototype.update = function(e) {
                        return this.samplingRate != e && (this.samplingRate = e, !0)
                    }, t.prototype.isSampled = function(e, t) {
                        var n = Math.random() < this.samplingRate;
                        return n && (t.push(new E(m, "probabilistic")), t.push(new E(y, this.samplingRate))), n
                    }, t
                }(s),
                P = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.lowerBoundSampler = t, r.probabilisticSampler = new I(n), r
                    }
                    return (0, a.__extends)(t, e), t.prototype.onCreateSpan = function() {
                        this.lowerBoundSampler.onCreateSpan()
                    }, t.prototype.close = function() {
                        return Promise.all([this.probabilisticSampler.close(), this.lowerBoundSampler.close()]).then()
                    }, t.prototype.isSampled = function(e, t) {
                        return this.probabilisticSampler.isSampled(e, t) ? (this.lowerBoundSampler.updateBudget(), !0) : this.lowerBoundSampler.isSampled(e, t)
                    }, t.prototype.update = function(e, t) {
                        var n = this.probabilisticSampler.update(t);
                        return this.lowerBoundSampler != e && (this.lowerBoundSampler = e, n = !0), n
                    }, t
                }(w),
                L = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.lastTick = Date.now(), r.apply(t, n), r
                    }
                    return (0, a.__extends)(t, e), t.prototype.onCreateSpan = function() {
                        this.updateBalance()
                    }, t.prototype.updateBudget = function() {
                        this.updateBalance()
                    }, t.prototype.isSampled = function(e, t) {
                        var n = this.updateBalance();
                        return n && (t["sampler.type"] = "ratelimiting", t["sampler.param"] = this.maxTracesPerSecond), n
                    }, t.prototype.update = function(e, t) {
                        return e !== this.maxTracesPerSecond && (this.apply(e, t), !0)
                    }, t.prototype.apply = function(e, t) {
                        this.maxBalance = Math.max(e, 1), this.maxTracesPerSecond = e, this.balance = Math.min(t || this.balance, this.maxBalance)
                    }, t.prototype.updateBalance = function() {
                        if (0 === this.maxTracesPerSecond) return !1;
                        var e = Date.now(),
                            t = (e - this.lastTick) / 1e3;
                        return this.lastTick = e, this.balance = Math.min(this.balance + t * this.maxTracesPerSecond, this.maxBalance), this.balance >= 1 && (this.balance -= 1, !0)
                    }, t
                }(w),
                C = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.samplersByOperation = new Map, n.applyStrategies(t), n
                    }
                    return (0, a.__extends)(t, e), t.prototype.onCreateSpan = function(e) {
                        this.defaultLowerBoundSampler.onCreateSpan();
                        var t = this.samplersByOperation.get(e.name);
                        t && t.onCreateSpan()
                    }, t.prototype.close = function() {
                        var e = [this.defaultSampler.close()];
                        return this.samplersByOperation.forEach((function(t) {
                            e.push(t.close())
                        })), Promise.all(e).then()
                    }, t.prototype.isSampled = function(e, t) {
                        var n = this.samplersByOperation.get(e);
                        return n ? n.isSampled(e, t) : this.defaultSampler.isSampled(e, t)
                    }, t.prototype.update = function(e) {
                        return this.applyStrategies(e)
                    }, t.prototype.applyStrategies = function(e) {
                        var t = this,
                            n = !1;
                        this.defaultLowerBoundSampler ? n = this.defaultLowerBoundSampler.update(e.defaultLowerBoundTracesPerSecond) : (this.defaultLowerBoundSampler = new L(e.defaultLowerBoundTracesPerSecond), n = !0);
                        var r = this.samplersByOperation;
                        this.samplersByOperation = new Map, e.perOperationStrategies.forEach((function(e) {
                            var o = e.probabilisticSampling.samplingRate,
                                i = r.get(e.operation);
                            i ? n = n || i.update(t.defaultLowerBoundSampler, o) : (i = new P(t.defaultLowerBoundSampler, o), n = !0), t.samplersByOperation.set(e.operation, i)
                        }));
                        var o = e.defaultSamplingProbability;
                        return this.defaultSampler ? n = this.defaultSampler.update(this.defaultLowerBoundSampler, o) : (this.defaultSampler = new P(this.defaultLowerBoundSampler, o), n = !0), n
                    }, t
                }(w),
                D = n(106),
                N = (0, D.retryImport)((function() {
                    return n.e(26).then(n.bind(n, 56))
                }), {
                    maxTries: 1 / 0
                }),
                M = "MiroRemoteSamplingConfig",
                x = function(e) {
                    function t(t, n, r, o, i) {
                        var a = e.call(this) || this;
                        if (a.serviceName = t, a.refreshInterval = n, a.onError = i, a.initialDelayTimeoutHandle = null, a.refreshIntervalHandle = null, n <= 0) throw new Error("Wrong MiroRemoteSampler args");
                        return a.sampler = new I(o), N.then((function(e) {
                            a.lazyStaff = e;
                            var t = a.getActualCacheConfig();
                            t ? (a.update(t.value), a.afterInitialDelay()) : a.initialDelayTimeoutHandle = setTimeout((function() {
                                return a.afterInitialDelay()
                            }), r + r * Math.random())
                        })), a
                    }
                    return (0, a.__extends)(t, e), t.prototype.isActualConfig = function(e) {
                        return !!e && 0 === e.version && Date.now() - e.date < this.refreshInterval
                    }, t.prototype.getActualCacheConfig = function() {
                        var e = this.lazyStaff.getItem(M);
                        if (e) try {
                            var t = JSON.parse(e);
                            return this.isActualConfig(t) ? t : void 0
                        } catch (e) {
                            return
                        }
                    }, t.prototype.putConfigToCache = function(e) {
                        var t = {
                            version: 0,
                            date: Date.now(),
                            value: e
                        };
                        this.lazyStaff.setItem(M, JSON.stringify(t))
                    }, t.prototype.afterInitialDelay = function() {
                        var e = this;
                        this.refreshIntervalHandle = setInterval((function() {
                            return e.refreshSamplingStrategy()
                        }), this.refreshInterval), this.initialDelayTimeoutHandle = null, this.refreshSamplingStrategy()
                    }, t.prototype.refreshSamplingStrategy = function() {
                        var e, t = this,
                            n = this.getActualCacheConfig();
                        n ? this.update(n.value) : (e = this.serviceName, (new c).getSamplingConfig(e)).then((function(e) {
                            t.putConfigToCache(e), t.update(e)
                        })).catch(this.onError)
                    }, t.prototype.isSampled = function(e, t) {
                        return this.sampler.isSampled(e, t)
                    }, t.prototype.onCreateSpan = function(e) {
                        this.sampler instanceof w && this.sampler.onCreateSpan(e)
                    }, t.prototype.close = function() {
                        return clearInterval(this.refreshIntervalHandle), clearTimeout(this.initialDelayTimeoutHandle), this.sampler.close()
                    }, t.prototype.update = function(e) {
                        if (e.operationSampling) return this.sampler instanceof C ? this.sampler.update(e.operationSampling) : (this.sampler.close(), this.sampler = new C(e.operationSampling), !0);
                        if (e.probabilisticSampling) return this.sampler instanceof I ? this.sampler.update(e.probabilisticSampling.samplingRate) : (this.sampler.close(), this.sampler = new I(e.probabilisticSampling.samplingRate), !0);
                        if (e.rateLimitingSampling) {
                            if (this.sampler instanceof L) return this.sampler.update(e.rateLimitingSampling.maxTracesPerSecond);
                            this.sampler.close(), this.sampler = new L(e.rateLimitingSampling.maxTracesPerSecond)
                        }
                        return !1
                    }, t
                }(w),
                U = "browser-client",
                k = function() {
                    function e() {}
                    return e.prototype.createTracer = function() {
                        var e = this;
                        return new R("browser-client-production", new f(new d(100, (function() {
                            return e.disableTracer()
                        })), 1e4), this.getSampler())
                    }, e.prototype.getSampler = function() {
                        var e = this;
                        return new x(U, 36e5, 15e3, .5, (function() {
                            return e.disableTracer()
                        }))
                    }, e.prototype.disableTracer = function() {
                        var e = (0, i.miroGlobalTracer)();
                        e instanceof R && (e.close(), (0, i.initGlobalTracer)(new i.Tracer))
                    }, e
                }();
            var B;
            n(9116), n(12768), n(12769), n(12770), n(12771);
            window.__rafRequestOriginal = window.requestAnimationFrame, window.__rafCancelOriginal = window.cancelAnimationFrame;
            var j = {
                    nextSlotId: 1,
                    nextSlotIndex: 0,
                    buffer: new Array(256),
                    scheduleTick: void 0,
                    growthSpeed: void 0,
                    lastLogTime: void 0,
                    logCount: 0,
                    loggedSlotCount: 0
                },
                F = {
                    getTime: (null === (B = window.performance) || void 0 === B ? void 0 : B.now) ? function() {
                        return window.performance.now()
                    } : function() {
                        return Date.now()
                    }
                };

            function G(e, t) {
                t.id = 0, t.timeoutId = void 0, t.requestId = void 0, t.alive = !1, t.takenAt = 0, t.callback = void 0, t.DEBUG_actualCallback = void 0, t.DEBUG_rafMessage = void 0
            }

            function W(e, t) {
                e.timeoutId = setTimeout((function() {
                    return t(F.getTime())
                }), 33.333333333333336)
            }

            function H(e, t) {
                e.requestId = window.__rafRequestOriginal((function() {
                    return t(F.getTime())
                }))
            }

            function V(e, t) {
                var n = e.nextSlotIndex,
                    r = e.buffer[n];
                if (r.alive) {
                    for (var o = r; r.alive && (++n === e.buffer.length && (n = 0), (r = e.buffer[n]) !== o););
                    if (r === o && (n = e.buffer.length, function(e, t) {
                            if (t <= 0) throw z(e, "RAF2: invalid grow size"), new Error("RAF2: Invalid grow size " + t);
                            for (var n = e.buffer.length + t; e.buffer.length < n;) e.buffer.push({
                                alive: !1,
                                takenAt: 0,
                                id: 0,
                                requestId: void 0,
                                timeoutId: void 0,
                                callback: void 0,
                                DEBUG_actualCallback: void 0,
                                DEBUG_rafMessage: void 0
                            })
                        }(e, 256), r = e.buffer[n], e.buffer.length >= e.loggedSlotCount + 1e3 && e.logCount < 10)) {
                        var i = F.getTime();
                        if (void 0 !== e.lastLogTime) {
                            var a = Math.max(1, i - e.lastLogTime) / 1e3;
                            e.growthSpeed = 1e3 / a
                        } else e.growthSpeed = void 0;
                        e.lastLogTime = i, e.loggedSlotCount = e.buffer.length, e.logCount++, z(e, "RAF2: buffer overflow")
                    }
                }
                e.nextSlotIndex++, e.nextSlotIndex === e.buffer.length && (e.nextSlotIndex = 0);
                var s = function(e) {
                    G(0, r), t(e)
                };
                return r.id = e.nextSlotId++, r.callback = s, r.DEBUG_actualCallback = t, r.DEBUG_rafMessage = t.DEBUG_rafMessage, r.alive = !0, r.takenAt = F.getTime(), e.scheduleTick(r, s), r.id
            }

            function z(e, t) {
                var n, r, o, i;
                if (window.ErrorsTracker) {
                    var a = {
                            size: e.buffer.length,
                            realAlive: 0,
                            invalidIds: 0,
                            zeroRafs: 0,
                            zeroTimeouts: 0,
                            noCb: 0,
                            veryOld: 0,
                            callbackInfo: {},
                            growthSpeed: e.growthSpeed,
                            patchInfo: window.__rafDebugPatchInfo,
                            popperInfo: window.__DEBUG_POPPER_INFO,
                            onlineUserCount: null === (i = null === (o = null === (r = null === (n = window.cmd) || void 0 === n ? void 0 : n.board) || void 0 === r ? void 0 : r.api) || void 0 === o ? void 0 : o.getOnlineUserCount) || void 0 === i ? void 0 : i.call(o)
                        },
                        s = [20, 40, 80, 160, 320],
                        u = F.getTime();
                    e.buffer.forEach((function(e) {
                        if (e.alive) {
                            if (a.realAlive++, void 0 === e.timeoutId && void 0 === e.requestId && a.invalidIds++, 0 === e.timeoutId && a.zeroTimeouts++, 0 === e.requestId && a.zeroRafs++, e.callback) {
                                var t = void 0;
                                try {
                                    t = e.DEBUG_actualCallback.toString().substring(0, 50), e.DEBUG_rafMessage && (t += " ~ " + e.DEBUG_rafMessage)
                                } catch (e) {
                                    t = "<cannot get function signature>"
                                }
                                a.callbackInfo[t] = (a.callbackInfo[t] || 0) + 1
                            } else a.noCb++;
                            var n = u - e.takenAt;
                            s.some((function(e) {
                                return a[e] || (a[e] = 0), n < e && (a[e]++, !0)
                            })) || a.veryOld++
                        }
                    })), window.ErrorsTracker.error(t, a)
                }
            }! function(e, t, n) {
                for (var r = t; r < n; ++r) e[r] = {
                    alive: !1,
                    takenAt: 0,
                    id: 0,
                    requestId: void 0,
                    timeoutId: void 0,
                    callback: void 0,
                    DEBUG_actualCallback: void 0,
                    DEBUG_rafMessage: void 0
                }
            }(j.buffer, 0, j.buffer.length);
            var K = {
                rafCode: window.requestAnimationFrame.toString(),
                wasAlreadyHookedByUs: !1,
                wasThisModuleAlreadyExecuted: !!window.__rafDebugPatchInfo,
                wasAlreadyHookedBySomeoneElse: -1 === window.requestAnimationFrame.toString().indexOf("[native code]"),
                stackTrace: ""
            };
            if (window.requestAnimationFrame = function(e) {
                    return V(j, e)
                }, window.cancelAnimationFrame = function(e) {
                    ! function(e, t) {
                        var n = e.buffer.find((function(e) {
                            return e.id === t
                        }));
                        n && n.alive && (void 0 !== n.timeoutId && clearTimeout(n.timeoutId), void 0 !== n.requestId && window.__rafCancelOriginal(n.requestId), G(0, n))
                    }(j, e)
                }, K.wasAlreadyHookedByUs = window.requestAnimationFrame.toString() === window.__rafRequestOriginal.toString(), window.__rafDebugPatchInfo = K, K.wasAlreadyHookedByUs || K.wasThisModuleAlreadyExecuted || K.wasAlreadyHookedBySomeoneElse) {
                try {
                    K.stackTrace = (new Error).stack || ""
                } catch (e) {}
                K.stackTrace = K.stackTrace || "<no stack trace>"
            }

            function q(e, t) {
                if (t) {
                    e.scheduleTick = H;
                    var n = [];
                    e.buffer.forEach((function(e) {
                        e.alive && void 0 !== e.timeoutId && (clearTimeout(e.timeoutId), n.push(e.callback))
                    }));
                    var r = F.getTime();
                    n.forEach((function(e) {
                        e(r)
                    }))
                } else e.scheduleTick = W, e.buffer.forEach((function(t) {
                    t.alive && void 0 !== t.requestId && (window.__rafCancelOriginal(t.requestId), t.requestId = void 0, e.scheduleTick(t, t.callback))
                }))
            }

            function Y() {
                return function(e) {
                    var t = [];
                    Array.prototype.includes && Array.prototype.find && Array.prototype.findIndex && Array.from && Array.prototype.fill || t.push((0, D.retryImport)((function() {
                        return n.e(192).then(n.t.bind(n, 12773, 23))
                    }), {
                        maxTries: 1 / 0
                    }));
                    String.prototype.includes && String.prototype.startsWith && String.prototype.endsWith && String.prototype.repeat || t.push((0, D.retryImport)((function() {
                        return n.e(196).then(n.t.bind(n, 12774, 23))
                    }), {
                        maxTries: 1 / 0
                    }));
                    Number.isInteger && Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER || t.push((0, D.retryImport)((function() {
                        return n.e(195).then(n.t.bind(n, 12775, 23))
                    }), {
                        maxTries: 1 / 0
                    }));
                    e.fetch || t.push((0, D.retryImport)((function() {
                        return n.e(193).then(n.t.bind(n, 6224, 23))
                    }), {
                        maxTries: 1 / 0
                    }));
                    e.ResizeObserver || t.push((0, D.retryImport)((function() {
                        return n.e(46).then(n.bind(n, 1073)).then((function(t) {
                            e.ResizeObserver = t.default
                        }))
                    }), {
                        maxTries: 1 / 0
                    }));
                    e.Promise.prototype.finally || t.push((0, D.retryImport)((function() {
                        return n.e(257).then(n.t.bind(n, 6225, 23)).then((function(e) {
                            e.default.shim()
                        }))
                    }), {
                        maxTries: 1 / 0
                    }));
                    Math.log10 || t.push((0, D.retryImport)((function() {
                        return n.e(194).then(n.t.bind(n, 12777, 23))
                    }), {
                        maxTries: 1 / 0
                    }));

                    function r() {
                        try {
                            var t = new e.URL("b", "http://a");
                            return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
                        } catch (e) {
                            return !1
                        }
                    }

                    function o() {
                        try {
                            var t = e.URLSearchParams;
                            return "a=1" === new t("?a=1").toString() && "function" === typeof t.prototype.set
                        } catch (e) {
                            return !1
                        }
                    }
                    o() && r() || t.push((0, D.retryImport)((function() {
                        return n.e(197).then(n.t.bind(n, 1531, 23))
                    }), {
                        maxTries: 1 / 0
                    }));
                    return Promise.all(t)
                }(window || self)
            }(0, b.addActiveStateListener)((function(e) {
                q(j, e)
            })), q(j, (0, b.isActive)());
            var J = n(987),
                X = n(622),
                Q = n(808),
                $ = n(588),
                Z = n(13078);
            var ee = n(10),
                te = n(6220);
            var ne = n(13079),
                re = n(988),
                oe = n(6222),
                ie = n(13083),
                ae = n(38),
                se = n(44),
                ue = n(2865),
                ce = n(58);
            var pe = n(117);

            function le() {
                var e;
                if (function() {
                        var e;
                        if (null === (e = rtb.taskParams) || void 0 === e ? void 0 : e.copyBoardId) return !1;
                        if ((0, ae.hasParameter)(se.QueryParameter.MIRO_NEW_BOARD)) return !1;
                        var t = document.location.pathname;
                        return t.endsWith((0, pe.appDashboardRoute)()()) || rtb.workspaceConfig && (0, ae.hasParameter)(se.InitUrlCommandParameter.INVITE) ? !rtb.config.account.guest : t.endsWith((0, pe.appRootRoute)())
                    }()) {
                    var t = void 0;
                    try {
                        var n = rtb.workspaceConfig ? rtb.workspaceConfig.workspaceKey + "|" : "";
                        t = localStorage.getItem(n + "rtb_saved_dashboard")
                    } catch (e) {}
                    if (t) {
                        var r = JSON.parse(t),
                            o = null === (e = null === r || void 0 === r ? void 0 : r.tree) || void 0 === e ? void 0 : e.dashboard;
                        if (o && o.currentSpaceId && !o.trashed) {
                            var i = o.currentProject.id,
                                s = o.currentFilterId || ie.BOARDS_FILTERS.ALL,
                                u = o.currentDataClassificationLabelId,
                                c = u !== ie.BOARDS_DATA_CLASSIFICATION_FILTERS.ANY_DATA_CLASSICATION,
                                p = (0, a.__assign)({
                                    offset: 0,
                                    limit: 50,
                                    filter: s,
                                    sort: o.currentSortId,
                                    fields: ie.BOARD_ITEM_FIELDS
                                }, c && {
                                    dataClassificationLabelId: u
                                });
                            o.starred ? p.isFavorite = !0 : i ? (p.projectId = i, p.attachment = o.currentSpaceId) : p.attachment = o.currentSpaceId, rtb.config.defaultBoardsFilter = s, rtb.preloadBoardParams = p, rtb.preloadBoardsPromise = (new oe.default).array(p).get()
                        }
                    }
                }
            }

            function de() {
                var e = (0, ce.getBoardIdFromURL)(location.pathname);
                if (e) {
                    rtb.preloadBoardConnectPromiseId = e;
                    var t = new ue.default(e).connect({
                        boardInfoFields: ie.CANVAS_BOARD_FIELDS
                    });
                    rtb.preloadBoardConnectPromise = function(e) {
                        var t, n = "pending";
                        return e.then((function(e) {
                                n = "success", t = e
                            })).catch((function(e) {
                                n = "error", t = e
                            })),
                            function() {
                                return "success" === n ? Promise.resolve(t) : "error" === n ? Promise.reject(t) : e
                            }
                    }(t)
                }
            }
            var fe = n(885),
                he = n(32),
                me = n(238),
                ye = n(173),
                ve = n(140),
                _e = n(619),
                Ee = n(441),
                ge = n(53),
                Se = "Auth";
            ge.register(Se, (function() {
                return (0, D.retryImport)((function() {
                    return Promise.all([n.e(0), n.e(2), n.e(13), n.e(251), n.e(1), n.e(4), n.e(6), n.e(20), n.e(26), n.e(34), n.e(44), n.e(71), n.e(73), n.e(160)]).then(n.bind(n, 12913))
                })).then((function(e) {
                    return e.publicAPI
                }))
            }));
            var be, Ae = ge.createModuleDef(Se);
            n.appType = ee.bowser.desktop || ee.bowser.tablet ? "default" : "unsupported", (0, r.setUpWebpackPublicPath)(),
                function() {
                    if (!(location.pathname.indexOf("/app/auth/") > -1)) {
                        var e = "true" == $.rtbSessionStorage.getItem(Z.SessionStorageItems.liveEmbedLogin),
                            t = !!(0, J.getSessionAnonymousBoardMoving)();
                        e && !t && (Q.BrowserPostMessagesTransportSender.sendMessageToOpener((0, X.loginSuccessPostMessage)()), window.close())
                    }
                }(), te.isUnsupportedBrowser() && window.location.replace("/not-supported/"), ee.bowser.firefox && document.body.classList.add("browser-firefox"), (0, D.setConnectionProvider)({
                    isOnline: function() {
                        return navigator.onLine
                    },
                    addEventListener: function(e, t) {
                        window.addEventListener(e, t)
                    },
                    removeEventListener: function(e, t) {
                        window.removeEventListener(e, t)
                    }
                }), setTimeout((function() {
                    (0, Ee.updateApiWorkspaceConfig)(rtb.workspaceConfig),
                    function() {
                        var e;
                        Y().then((function() {
                            ! function() {
                                try {
                                    var e = new k;
                                    (0, i.initGlobalTracer)(e.createTracer());
                                    var t = Date.now(),
                                        n = window.pageRequestedAtInMS;
                                    o.TraceUtils.spanFirstRender = (0, i.miroGlobalTracer)().startSpan("firstRender", {
                                        startTime: n
                                    }), (0, i.miroGlobalTracer)().startSpan("htmlRequest", {
                                        childOf: o.TraceUtils.spanFirstRender,
                                        startTime: n
                                    }).finish(t), o.TraceUtils.spanClientCore = (0, i.miroGlobalTracer)().startSpan("clientCore", {
                                        childOf: o.TraceUtils.spanFirstRender,
                                        startTime: t
                                    })
                                } catch (e) {
                                    o.TraceUtils.spanFirstRender = void 0, o.TraceUtils.spanClientCore = void 0
                                }
                            }(), u.default.setMiddleware(new ne.TraceMiddleware), rtb.config.account.guest || rtb.profile || (rtb.profileDataPromise = (new re.default).get(void 0, o.TraceUtils.spanClientCore)), le(), de(), ee.bowser.webView || ee.bowser.mobile || (e = me.SplitIOLoader.load())
                        })).then((function() {
                            var t = o.TraceUtils.spanClientCore,
                                r = (0, i.miroGlobalTracer)().startSpan("loadRootStore", {
                                    childOf: t
                                }),
                                a = (0, D.retryImport)((function() {
                                    return Promise.all([n.e(26), n.e(34), n.e(44), n.e(72), n.e(73), n.e(181)]).then(n.bind(n, 12911))
                                }), {
                                    maxTries: 1 / 0
                                }).then((function(e) {
                                    return r.finish(), e
                                })),
                                s = (0, i.miroGlobalTracer)().startSpan("applicationAngularCoreLoading", {
                                    childOf: t
                                }),
                                u = (0, D.retryImport)((function() {
                                    return Promise.all([n.e(26), n.e(34), n.e(44), n.e(71), n.e(72), n.e(159)]).then(n.bind(n, 12778))
                                }), {
                                    maxTries: 1 / 0
                                }).then((function(e) {
                                    return s.finish(), e
                                }));
                            return Promise.all([a, u]).then((function(t) {
                                var n = t[0],
                                    r = t[1],
                                    o = location.pathname,
                                    i = location.search,
                                    a = location.hash,
                                    s = n.init(o + i + a);
                                return he.map((0, fe.getServiceKey)(), s.store), new Promise((function(t, n) {
                                    var o = (0, ye.subscribeMemoized)(s.store, ve.getCurrentWorkspaceStatus, (function() {
                                        (0, Ee.hasWorkspaceSet)((0, ve.getCurrentWorkspaceStatus)(s.store)) ? (o(), r.init(s.store), e && e.then((function(e) {
                                            return e.init()
                                        })), t(s)) : (0, ve.getCurrentWorkspaceStatus)(s.store) === _e.CurrentWorkspaceStatus.LOCAL_LOADED_FAIL && (o(), n(new Error("Workspace initialization error: workspace is not set")))
                                    }))
                                }))
                            }), (function(e) {
                                throw rtbLoader.setErrorHTML("<b>App core loading failure: " + e.message + ".</b>"), e
                            })).then((function(e) {
                                var t, n, r, o, a = e.store,
                                    s = e.history,
                                    u = function() {
                                        var e = a.getState().router.app;
                                        if (n !== e)
                                            if ((n = e) === pe.AppRoutePath.AUTH)
                                                if (r) t = r, setTimeout((function() {
                                                    rtbLoader.setVisibility(!1), null === r || void 0 === r || r.module.onRouteMount()
                                                }), 40);
                                                else {
                                                    var u = (0, i.miroGlobalTracer)().startSpan("loadLazyModule");
                                                    u.setTag("moduleName", Se), Ae().then((function(e) {
                                                        u.finish(), rtbLoader.setVisibility(!1), r || (r = {
                                                            type: be.AUTH,
                                                            module: e.init(a, s)
                                                        }), t = r, setTimeout((function() {
                                                            return null === r || void 0 === r ? void 0 : r.module.onRouteMount()
                                                        }), 40)
                                                    })).catch((function(e) {
                                                        throw u.setTag("error", !0), u.finish(), rtbLoader.setErrorHTML("<b>App core initialization failure: " + e.message + ".</b>"), e
                                                    }))
                                                }
                                        else t && t.type === be.AUTH && (rtbLoader.setVisibility(!0), t.module.onRouteUnmount()), o || (o = {
                                            type: be.LEGACY,
                                            module: null
                                        })
                                    };
                                u(), a.subscribe(u)
                            })).catch((function(e) {
                                throw rtbLoader.setErrorHTML("<b>App core initialization failure: " + e.message + ".</b>"), e
                            }))
                        }))
                    }()
                }), 0),
                function(e) {
                    e.AUTH = "AUTH", e.LEGACY = "LEGACY"
                }(be || (be = {}))
        },
        9116: () => {
            var e = function() {
                function e() {
                    this.rtbLoaderElement = document.getElementById("rtb-loader"), this.errorElement = this.rtbLoaderElement.querySelector(".rtbLoader_error"), this.errorDescription = this.errorElement.querySelector(".rtbLoader_error_description"), this.errorTimeout = this.errorElement.querySelector(".rtbLoader_error_timeout"), this.message = this.rtbLoaderElement.querySelector(".rtbLoader_message"), this.svgElement = this.rtbLoaderElement.querySelector(".rtbLoader_logo svg"), this.svgElementAnimationPath = this.svgElement.querySelector("#animation-path"), this.hidden = !1
                }
                return e.prototype.setErrorHTML = function(e) {
                    this.errorDescription.innerHTML = e, this.updateErrorVisibility()
                }, e.prototype.setTimeoutHTML = function(e) {
                    this.errorTimeout.innerHTML = e, this.updateErrorVisibility()
                }, e.prototype.setMessageHTML = function(e) {
                    this.message.innerHTML = e
                }, e.prototype.attachClick = function(e, t) {
                    var n = document.querySelector(e);
                    n.setAttribute("no-prevent-ios-touchstart", "true"), n.addEventListener("click", (function e() {
                        n.removeEventListener("click", e), t()
                    }))
                }, e.prototype.setVisibility = function(e) {
                    e ? this.showLoader() : this.hideLoader()
                }, e.prototype.showLoader = function() {
                    this.hidden && (this.hidden = !1, document.body.classList.add("app-loading"), this.rtbLoaderElement.style.display = "block", this.setMessageHTML(""), this.updateAnimation(!0))
                }, e.prototype.hideLoader = function() {
                    this.hidden || (this.hidden = !0, document.body.classList.remove("app-loading"), this.rtbLoaderElement.style.display = "none", this.setMessageHTML(""), this.setErrorHTML(""), this.setTimeoutHTML(""), this.updateAnimation(!1))
                }, e.prototype.updateAnimation = function(e) {
                    this.svgElement && this.svgElementAnimationPath && (e ? (this.svgElement.unpauseAnimations(), this.svgElementAnimationPath.classList.remove("stop")) : (this.svgElement.pauseAnimations(), this.svgElementAnimationPath.classList.add("stop")))
                }, e.prototype.updateErrorVisibility = function() {
                    this.errorTimeout.innerHTML || this.errorDescription.innerHTML ? (this.errorElement.style.display = "block", this.updateAnimation(!1)) : (this.errorElement.style.display = "none", this.updateAnimation(!0))
                }, e
            }();
            document.addEventListener("DOMContentLoaded", (function() {
                window.rtbLoader || (window.rtbLoader = new e)
            }))
        },
        13076: (e, t, n) => {
            "use strict";

            function r(e) {
                void 0 === e && (e = {});
                var t = {};
                for (var n in e) void 0 !== e[n] && null !== e[n] && (t[n] = e[n]);
                return t
            }

            function o(e) {
                void 0 === e && (e = {});
                var t = {};
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }

            function i(e, t, n) {
                var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                    o = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
            }
            n.d(t, {
                omitUnsetParameters: () => r,
                omitUnsetUndefinedParameters: () => o,
                updateQueryStringParameter: () => i
            })
        },
        67: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => h
            });
            var r = n(674),
                o = n(13076),
                i = n(93),
                a = n(12897),
                s = n(306),
                u = function(e, t) {
                    return Promise.resolve()
                },
                c = [],
                p = function() {},
                l = u,
                d = function(e, t) {},
                f = {};
            const h = function() {
                function e() {
                    this.timeout = 4e4, this.templateVars = {}
                }
                return e.logRequest = function(e, t, n) {
                    if (this.allRequestsCount++, e && "GET" !== e.toUpperCase()) {
                        this.notGetRequestsCount++;
                        var r = {
                            id: this.allRequestsCount,
                            type: e,
                            url: t
                        };
                        this.canLogJsonData && n.canLogJsonData && n.jsonData && (r.jsonData = n.jsonData), this.requestsLog.push(r), void 0 !== this.maxRequestsLogCount && this.requestsLog.length > this.maxRequestsLogCount && this.requestsLog.shift()
                    }
                }, e.prototype.addTemplateVars = function(e) {
                    Object.assign(this.templateVars, e)
                }, e.prototype.apiGet = function(e) {
                    return this.apiCustom(e || {}, "GET")
                }, e.prototype.apiGetArrayWrapper = function(e, t) {
                    var n = this;
                    return (0, a.createArrayWrapperMethods)((function(e, o) {
                        return o || (o = t && t()), n.apiCustom((0, r.__assign)((0, r.__assign)({}, e), {
                            parentSpan: o
                        }), "GET")
                    }), e || {})
                }, e.prototype.apiPost = function(e) {
                    return this.apiCustom(e || {}, "POST")
                }, e.prototype.apiPatch = function(e) {
                    return this.apiCustom(e || {}, "PATCH")
                }, e.prototype.apiPut = function(e) {
                    return this.apiCustom(e || {}, "PUT")
                }, e.prototype.apiDelete = function(e) {
                    return this.apiCustom(e || {}, "DELETE")
                }, e.prototype.apiPostOneFile = function(e, t, n) {
                    void 0 === t && (t = {}), void 0 === n && (n = "file");
                    var o = new FormData;
                    return e.name ? o.append(n, e, e.name) : o.append(n, e), this.apiPost((0, r.__assign)((0, r.__assign)({}, t), {
                        apiSettings: (0, r.__assign)({
                            cache: !1,
                            data: o
                        }, t.apiSettings)
                    }))
                }, e.prototype.makeUrl = function(e, t) {
                    if (void 0 === t && (t = !0), e.template && e.templateEnd) throw new Error("You can't pass 'template' and 'templateEnd' options simultaneously");
                    var n = this.getParamsForURL(e),
                        o = n.template,
                        a = n.templateVars;
                    t || (e.params = (0, r.__assign)((0, r.__assign)({}, e.params), {
                        _: Date.now()
                    }));
                    var s = i.APIUtils.makeFullURL(o, a, e.params);
                    return !e.notOurApiRequest && (s = this.assembleUrl(s)), s
                }, e.prototype.getParamsForURL = function(e) {
                    return {
                        template: e.template || this.template + (e.templateEnd || ""),
                        templateVars: (0, r.__assign)((0, r.__assign)({}, this.templateVars), e.templateVars)
                    }
                }, e.prototype.apiCustom = function(t, n) {
                    var r = this;
                    t.params = o.omitUnsetUndefinedParameters(t.params || {});
                    var i = this.prepareApiSettings(t, n),
                        a = "";
                    try {
                        a = this.makeUrl(t, i.cache), e.logRequest(n, a, t)
                    } catch (e) {
                        throw d("apiCustom", ["template", this.template, "templateVars", this.templateVars, "apiCustom.options", "template", t.template, "templateEnd", t.templateEnd, "templateVars", t.templateVars, "params", t.params]), e
                    }
                    var s = !t.notOurApiRequest;
                    return f.onRequest && f.onRequest({
                        url: a,
                        options: t,
                        preparedApiSettings: i,
                        method: n
                    }), this.createApiPromise(a, i, s).catch((function(e) {
                        return r.processError(e, s)
                    })).then((function(e) {
                        return f.onResponse && f.onResponse({
                            data: e,
                            options: t
                        }), Promise.resolve(e)
                    }), (function(e) {
                        return f.onResponseError && f.onResponseError({
                            options: t,
                            xhr: e
                        }), Promise.reject(e)
                    }))
                }, e.prototype.prepareApiSettings = function(e, t) {
                    var n = i.APIUtils.prepareApiSettings(t, e),
                        r = !e.notOurApiRequest,
                        o = n.success,
                        a = Date.now();
                    return n.success = function(e, t) {
                        r && p({
                            requestDuration: Date.now() - a,
                            serverTime: t.getResponseHeader("date-with-ms"),
                            serverTimeRFC: t.getResponseHeader("date")
                        }), o && o(e, t)
                    }, c.forEach((function(e) {
                        e.extend(n)
                    })), n
                }, e.prototype.createApiPromise = function(e, t, n) {
                    return new Promise((function(r, o) {
                        i.APIUtils.createXhr(e, t, n, r, o)
                    }))
                }, e.prototype.assembleUrl = function(t) {
                    return (0, s.isAbsoluteUrl)(t) ? t : e.BASE_URL + t
                }, e.prototype.processError = function(e, t) {
                    return l(e, t).then((function() {
                        return Promise.reject(e)
                    })).catch((function() {
                        return Promise.reject(e)
                    }))
                }, e.setServerTimeProcessor = function(e) {
                    p = e
                }, e.setErrorsProcessor = function(e) {
                    l = e || u
                }, e.addSettingsExtender = function(e) {
                    c.push(e)
                }, e.addSettingsExtenderFunction = function(t) {
                    var n = {
                        extend: function(e) {
                            t(e)
                        }
                    };
                    return e.addSettingsExtender(n), n
                }, e.removeSettingsExtender = function(e) {
                    var t = c.indexOf(e);
                    t >= 0 && c.splice(t, 1)
                }, e.setErrorBreadCrumbCollector = function(e) {
                    d = e
                }, e.setMiddleware = function(e) {
                    f = e
                }, e.BASE_URL = "/api/v1", e.allRequestsCount = 0, e.notGetRequestsCount = 0, e.requestsLog = [], e.filterDebugPlugins = !0, e.maxRequestsLogCount = void 0, e.canLogJsonData = !1, (0, r.__decorate)([i.APIDecorators.CSRFPromise], e.prototype, "createApiPromise", null), e
            }()
        },
        6221: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = n(674);
            const o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/profile/onboarding/", t
                }
                return (0, r.__extends)(t, e), t.prototype.get = function() {
                    return this.apiGet()
                }, t.prototype.setScenario = function(e) {
                    return this.apiPost({
                        params: {
                            scenarioName: e
                        },
                        templateEnd: "scenario"
                    })
                }, t.prototype.setInAppOnboadingSegment = function(e) {
                    return this.apiPost({
                        params: {
                            inAppOnboardingSegmentName: e
                        },
                        templateEnd: "in-app-onboarding-segment"
                    })
                }, t
            }(n(67).default)
        },
        988: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(674),
                o = n(67),
                i = n(6221),
                a = n(58);
            const s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/profile/", t
                }
                return (0, r.__extends)(t, e), t.prototype.get = function(e, t) {
                    return this.apiGet({
                        params: e,
                        apiSettings: {
                            timeout: this.timeout
                        },
                        parentSpan: t
                    })
                }, t.prototype.set = function(e) {
                    return this.apiPut({
                        params: e
                    })
                }, t.prototype.uploadPicture = function(e) {
                    return this.apiPostOneFile(e, {
                        templateEnd: "picture"
                    })
                }, t.prototype.removePicture = function() {
                    return this.apiDelete({
                        templateEnd: "picture"
                    })
                }, t.prototype.setSettings = function(e) {
                    return this.apiPut({
                        templateEnd: "settings",
                        params: e
                    })
                }, t.prototype.setInterests = function(e) {
                    return this.apiPut({
                        templateEnd: "interests",
                        params: e
                    })
                }, t.prototype.setUseCases = function(e) {
                    return this.apiPut({
                        templateEnd: "use-cases",
                        params: e
                    })
                }, t.prototype.setNotifications = function(e) {
                    return this.apiPut({
                        templateEnd: "notifications/",
                        params: e
                    })
                }, t.prototype.subscribeNotification = function(e, t) {
                    return this.apiPost({
                        templateEnd: "subscriptions/" + e + "/" + t
                    })
                }, t.prototype.unsubscribeNotification = function(e, t) {
                    return this.apiDelete({
                        templateEnd: "subscriptions/" + e + "/" + t
                    })
                }, t.prototype.subscribeChannel = function(e) {
                    return this.apiPost({
                        templateEnd: "subscriptions/" + e
                    })
                }, t.prototype.unsubscribeChannel = function(e) {
                    return this.apiDelete({
                        templateEnd: "subscriptions/" + e
                    })
                }, t.prototype.setDailyUpdates = function(e) {
                    return this.apiPut({
                        templateEnd: "daily-updates",
                        params: e
                    })
                }, t.prototype.changePassword = function(e, t) {
                    return this.apiPut({
                        templateEnd: "password",
                        jsonData: {
                            password: (0, a.encodeHtmlSpecialChars)(e),
                            oldPassword: (0, a.encodeHtmlSpecialChars)(t)
                        }
                    })
                }, t.prototype.remove = function() {
                    return this.apiDelete()
                }, t.prototype.getNotification = function(e) {
                    var t = this;
                    return new Promise((function(n, r) {
                        t.apiGet({
                            templateEnd: "user-notifications",
                            apiSettings: {
                                headers: {
                                    "If-Modified-Since": e
                                },
                                success: function(e, t) {
                                    n({
                                        data: e,
                                        date: t.getResponseHeader("Date")
                                    })
                                }
                            }
                        }).catch(r)
                    }))
                }, t.prototype.getAchievements = function() {
                    return this.apiGet({
                        params: {
                            fields: "achievements"
                        }
                    })
                }, t.prototype.openAchievement = function(e) {
                    return this.apiPost({
                        templateEnd: "achievements",
                        params: {
                            name: e
                        }
                    })
                }, t.prototype.checkEmail = function(e) {
                    return this.apiGet({
                        templateEnd: "checkEmail",
                        params: {
                            email: e
                        }
                    })
                }, t.prototype.setDeviceToken = function(e, t) {
                    return this.apiPost({
                        templateEnd: "fcm",
                        jsonData: {
                            token: e,
                            supportedNotificationTypes: t
                        },
                        apiSettings: {
                            dataType: "text"
                        }
                    })
                }, t.prototype.updateToolbar = function(e, t) {
                    return this.apiPut({
                        templateEnd: "toolbar-plugins",
                        jsonData: {
                            pinned: e,
                            unpinned: t
                        }
                    })
                }, t.prototype.getIntercomHash = function() {
                    return this.apiGet({
                        templateEnd: "intercom-hash"
                    })
                }, t.prototype.getContacts = function(e) {
                    return this.apiGet({
                        templateEnd: "contacts",
                        params: {
                            service: e
                        }
                    })
                }, t.prototype.getApps = function(e) {
                    return this.apiGet({
                        templateEnd: "applications",
                        params: e
                    })
                }, t.prototype.markPluginAsUsed = function(e) {
                    return this.apiPost({
                        templateEnd: "application-used",
                        jsonData: {
                            appKey: e
                        }
                    })
                }, t.prototype.changeBeta = function(e) {
                    return this.apiPut({
                        templateEnd: "settings",
                        params: {
                            betaUser: e
                        }
                    })
                }, Object.defineProperty(t.prototype, "onboarding", {
                    get: function() {
                        return new i.default
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }(o.default)
        },
        77: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = n(674);
            const o = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.selector = t, n.addTemplateVars({
                        selector: t
                    }), n
                }
                return (0, r.__extends)(t, e), t
            }(n(67).default)
        },
        93: (e, t, n) => {
            "use strict";
            n.d(t, {
                API_WORKSPACE_PARAM_NAME: () => l,
                APIUtils: () => r,
                APIDecorators: () => o
            });
            var r, o, i = n(674),
                a = n(1068),
                s = n.n(a),
                u = n(292),
                c = n.n(u),
                p = n(2444),
                l = "s";
            ! function(e) {
                function t(e) {
                    var t = e.defaultHeaders,
                        n = e.isOurApiRequest,
                        r = e.clientType,
                        o = e.clientVersion,
                        a = e.userId,
                        s = e.isEmbedMode,
                        u = e.csrfToken,
                        c = e.accessLink,
                        p = e.accept,
                        l = e.contentType,
                        d = (0, i.__assign)({}, t);
                    return n && (d["X-Client-Type"] = r, a && (d["X-User-Debug"] = a), s && (d["X-Embed-Mode"] = !0), u && (d["X-CSRF-TOKEN"] = u), c && (d["X-ACCESS-LINK"] = c), o && (d["X-Client-Version"] = o)), p && (d.Accept = p), l && (d["Content-Type"] = l), d
                }
                e.CSRF_URL = "/api/v1/csrf/", e.X_CLIENT_TYPE = "unknown", e.X_CLIENT_VERSION = "", e.X_EMBED_MODE = !1, e.GET_USER_ID_FOR_DEBUG = void 0, e.DEFAULT_QUERY_PARAMETERS = {}, e.getHeaders = t, e.setHeaders = function(n, r, o) {
                    var i, a = {
                        defaultHeaders: r.headers,
                        isOurApiRequest: o,
                        clientType: e.X_CLIENT_TYPE,
                        clientVersion: e.X_CLIENT_VERSION,
                        userId: e.GET_USER_ID_FOR_DEBUG && e.GET_USER_ID_FOR_DEBUG(),
                        isEmbedMode: e.X_EMBED_MODE,
                        accessLink: rtb.accessLink
                    };
                    "GET" !== r.type && (a.csrfToken = rtb.token), (null === (i = null === r || void 0 === r ? void 0 : r.headers) || void 0 === i ? void 0 : i.Accept) || "json" !== r.dataType || (a.accept = "application/json"), void 0 !== r.contentType && (a.contentType = r.contentType);
                    var s = t(a);
                    for (var u in s) n.setRequestHeader(u, s[u])
                }, e.makeRetryCSRFPromise = function(e) {
                    return e().catch((function(t) {
                        if ("wrongCsrfToken" === l(t).reason) return a().then(e);
                        throw t
                    }))
                }, e.createXhr = function(t, n, r, o, i) {
                    var a = new XMLHttpRequest;
                    return a.open(n.type, t, !0), r && (a.withCredentials = !0), void 0 !== n.timeout && (a.timeout = n.timeout), a.requestURL = t, a.onreadystatechange = function() {
                        if (4 === a.readyState) {
                            var e = a.response;
                            if ("json" === n.dataType) try {
                                e = JSON.parse(a.response), a.responseJSON = e
                            } catch (e) {}
                            var t = a.status;
                            t >= 200 && t < 300 || 304 === t ? (n.success && n.success(e, a), o(e)) : (n.error && n.error(a), i(a))
                        }
                    }, e.setHeaders(a, n, r), void 0 !== n.data ? a.send(n.data) : a.send(), a
                };
                var n = null;

                function r(t) {
                    return void 0 === t && (t = e.DEFAULT_QUERY_PARAMETERS), (0, p.createUrlSearchParams)(t).toString()
                }

                function o() {
                    var t = r();
                    return e.CSRF_URL + (t ? "?" + t : "")
                }

                function a() {
                    if (!n) {
                        var t = u("POST", {}),
                            r = o();
                        n = new Promise((function(o, i) {
                            e.createXhr(r, t, !0, (function(e) {
                                n = null, o(e)
                            }), (function(e) {
                                n = null, i(e)
                            }))
                        })).then((function(e) {
                            rtb.token = e.token
                        }))
                    }
                    return n
                }

                function u(e, t) {
                    var n = (0, i.__assign)((0, i.__assign)({
                        dataType: "json",
                        cache: !0
                    }, t.apiSettings), {
                        type: e
                    });
                    return t.jsonData && (n.data = JSON.stringify(t.jsonData), n.contentType = "application/json"), n
                }

                function l(e) {
                    return function(e) {
                        var t, n;
                        return !!(null === (n = null === (t = e) || void 0 === t ? void 0 : t.responseJSON) || void 0 === n ? void 0 : n.error)
                    }(e) ? e.responseJSON.error : {
                        code: 418,
                        reason: "",
                        message: ""
                    }
                }
                e.getDefaultQueryParametersString = r, e.getUpdateCSRFUrl = o, e.updateCSRFToken = a, e.prepareApiSettings = u, e.isRequestEntityTooLarge = function(e) {
                    return e && 413 === e.status || 414 === e.status
                }, e.isUnauthorized = function(e) {
                    return e && 401 === e.status
                }, e.isXMLHttpRequestWithoutJSON = function(e) {
                    return null == e.responseJSON
                }, e.makeFullURL = function(e, t, n) {
                    s()(t || {}, (function(t, n) {
                        e = e.replace(new RegExp("%" + n + "%", "g"), encodeURIComponent(t.toString()))
                    })), c()(n) || (e += -1 !== e.indexOf("?") ? "&" : "?", s()(n, (function(t, n) {
                        e += n + "=" + encodeURIComponent(t.toString()), e += "&"
                    })), e = e.substr(0, e.length - 1));
                    var o = r();
                    return o && (e += (-1 !== e.indexOf("?") ? "&" : "?") + o), e
                }, e.createApiJsonError = function(e, t) {
                    return {
                        responseJSON: {
                            error: {
                                reason: e,
                                message: t
                            }
                        }
                    }
                }, e.getJsonError = l, e.updateApiConfig = function(t) {
                    var n = t.baseUrl,
                        r = t.queryParams;
                    n && (e.CSRF_URL = n + "/csrf/"), r && Object.keys(r).map((function(t) {
                        var n = r[t];
                        void 0 !== n ? e.DEFAULT_QUERY_PARAMETERS[t] = n : delete e.DEFAULT_QUERY_PARAMETERS[t]
                    }))
                }
            }(r || (r = {})),
            function(e) {
                e.CSRFPromise = function(e, t, n) {
                    var o = n.value;
                    return (0, i.__assign)((0, i.__assign)({}, n), {
                        value: function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var n = this;
                            return r.makeRetryCSRFPromise((function() {
                                return o.apply(n, e)
                            }))
                        }
                    })
                }
            }(o || (o = {}))
        },
        12897: (e, t, n) => {
            "use strict";
            n.d(t, {
                createArrayWrapperMethods: () => o
            });
            var r = n(674);

            function o(e, t) {
                return {
                    get: function(n, r) {
                        return void 0 === n && (n = {}), e(i(t, n, n.offset, n.limit), r)
                    },
                    includes: function(n, r, o) {
                        return r ? e(i(t, n, 0, 500), o).then((function(e) {
                            return e.data.some(r)
                        })) : e(i(t, n, 0, 0), o).then((function(e) {
                            return e.size > 0
                        }))
                    },
                    getSize: function(n, r) {
                        return void 0 === n && (n = {}), e(i(t, n, 0, 0), r).then((function(e) {
                            return e.size
                        }))
                    },
                    findFirst: function(n, r, o) {
                        return r ? e(i(t, n, 0, 500), o).then((function(e) {
                            return e.data.find(r)
                        })) : e(i(t, n, 0, 1), o).then((function(e) {
                            return e.data[0]
                        }))
                    },
                    veryBadLoadAll: function(n, r) {
                        var o = 500;
                        return e(i(t, n, 0, o), r).then((function(a) {
                            if (a.size <= o) return a;
                            for (var s = [], u = o; u < a.size; u += o) s.push(e(i(t, n, u, o), r));
                            return Promise.all(s).then((function(e) {
                                return e.reduce((function(e, t) {
                                    return e.data = e.data.concat(t.data), e
                                }), a)
                            }))
                        }))
                    }
                }
            }

            function i(e, t, n, o) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var i = Object.keys(t).reduce((function(e, n) {
                    return e[n] = t[n], e
                }), (0, r.__assign)({}, e.params) || {});
                return i.limit = void 0 !== o ? o : i.limit, i.offset = void 0 !== n ? n : i.offset, (0, r.__assign)((0, r.__assign)({}, e), {
                    params: i
                })
            }
        },
        13079: (e, t, n) => {
            "use strict";
            n.d(t, {
                TraceMiddleware: () => o
            });
            var r = n(63),
                o = function() {
                    function e() {}
                    return e.prototype.onRequest = function(e) {
                        try {
                            this.injectTraceHeader(e)
                        } catch (e) {}
                    }, e.prototype.injectTraceHeader = function(e) {
                        var t = !e.options.notOurApiRequest;
                        if (e.options.parentSpan && t) {
                            var n = e.options.parentSpan.tracer(),
                                o = n.startSpan("client-request", {
                                    childOf: e.options.parentSpan,
                                    tags: {
                                        url: e.url,
                                        method: e.method
                                    }
                                }),
                                i = e.preparedApiSettings.headers || {};
                            n.inject(o, r.FORMAT_HTTP_HEADERS, i), e.preparedApiSettings.headers = i, e.options.__TraceMiddleware__Span = o
                        }
                    }, e.prototype.onResponse = function(e) {
                        try {
                            this.finishSpan(e.options.__TraceMiddleware__Span)
                        } catch (e) {}
                    }, e.prototype.onResponseError = function(e) {
                        try {
                            this.finishSpan(e.options.__TraceMiddleware__Span)
                        } catch (e) {}
                    }, e.prototype.finishSpan = function(e) {
                        null === e || void 0 === e || e.finish()
                    }, e
                }()
        },
        87: (e, t, n) => {
            "use strict";
            n.d(t, {
                TraceUtils: () => r
            });
            var r, o = n(63),
                i = n(53),
                a = n(12),
                s = n(12896);
            ! function(e) {
                function t(t, n) {
                    e.spanFirstRender && (e.spanFirstRender.setTag("finishReason", t), e.spanFirstRender.setTag("isResolvedCorrectly", n), e.spanFirstRender.finish()), e.spanFirstRender = void 0
                }
                e.settingsUserListBulkOperationContext = void 0, e.settingsUserListBulkSelectionContext = void 0, e.setHasShownModalInFirstRender = function() {
                    null === e.spanFirstRender || void 0 === e.spanFirstRender || e.spanFirstRender.setTag("hasShownModal", !0), t("Modal shown", !1)
                }, e.finishFirstRender = t, e.finishCore = function() {
                    null === e.spanClientCore || void 0 === e.spanClientCore || e.spanClientCore.finish(), e.spanClientCore = void 0
                }, e.finishSpanCreateBoard = function(t, n) {
                    void 0 === n && (n = !0), e.spanCreateBoard && (e.spanCreateBoard.setTag("finishReason", t), e.spanCreateBoard.setTag("isResolvedCorrectly", n), e.spanCreateBoard.finish(), (0, a.default)().sendApiEvent("operation_finished", {
                        location: "dashboard",
                        operation_name: "create_board",
                        items_taken: 1,
                        operation_type: "single",
                        duration: (0, s.getSpanDuration)(e.spanCreateBoard)
                    })), e.spanCreateBoard = void 0
                }, e.finishDashboardOpenPage = function(n, r) {
                    void 0 === r && (r = !0), e.spanDashboardOpenPage && (e.spanFirstRender && e.spanDashboardOpenPage.setTag("isFirstRender", !0), e.spanDashboardOpenPage.finish()), t(n, r), e.spanDashboardOpenPage = void 0
                }, e.finishActiveSettingsOpenPage = function(n, r) {
                    void 0 === r && (r = !0), null === e.spanActiveSettingsOpenPage || void 0 === e.spanActiveSettingsOpenPage || e.spanActiveSettingsOpenPage.finish(), e.spanActiveSettingsOpenPage && (0, a.default)().sendApiEvent("settings_section_loading_finished", {
                        duration: (0, s.getSpanDuration)(e.spanActiveSettingsOpenPage)
                    }), e.spanActiveSettingsOpenPage = void 0, t(n, r)
                }, e.traceLoadLazyModule = function(e, t) {
                    if (!e.instance) var n, r = e.lifecycle.add((function(e) {
                        switch (e.type) {
                            case i.MODULES_LOCATOR_LOAD_START:
                                null === (n = (0, o.miroGlobalTracer)().startSpan("loadLazyModule", {
                                    childOf: t
                                })) || void 0 === n || n.setTag("moduleName", e.payload.moduleName);
                                break;
                            case i.MODULES_LOCATOR_LOAD_SUCCESS:
                                null === n || void 0 === n || n.finish(), r.detach();
                                break;
                            case i.MODULES_LOCATOR_LOAD_FAIL:
                                n && (n.setTag("error", !0), n.setTag("errorMsg", e.error.message), n.finish()), r.detach();
                                break;
                            default:
                                n && (n.setTag("error", !0), n.setTag("errorMsg", "unknown module locator msg"), n.finish()), r.detach()
                        }
                    }));
                    return e()
                }
            }(r || (r = {}))
        },
        6222: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(674),
                o = n(13076),
                i = n(67),
                a = n(2865);
            const s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/", t
                }
                return (0, r.__extends)(t, e), t.prototype.array = function(e) {
                    return this.apiGetArrayWrapper({
                        params: e
                    })
                }, t.prototype.selectById = function(e) {
                    return new a.default(e)
                }, t.prototype.create = function(e, t) {
                    return this.apiPost({
                        params: o.omitUnsetParameters(e),
                        parentSpan: t
                    })
                }, t.prototype.copy = function(e, t, n, r, o) {
                    var i = n;
                    return i.sourceBoardId = e, i.copyPermissions = t, r && (i.projectId = r), this.apiPost({
                        params: i,
                        parentSpan: o
                    })
                }, t.prototype.upload = function(e, t) {
                    return this.apiPostOneFile(e, {
                        params: t
                    })
                }, t.prototype.updatePublicVisitorsNamesAllowance = function(e) {
                    return this.apiPost({
                        templateEnd: "public-visitors-names-allowance/",
                        params: e
                    })
                }, t
            }(i.default)
        },
        2865: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => w
            });
            var r = n(674),
                o = n(13076),
                i = n(77);
            const a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/slack/", t
                }
                return (0, r.__extends)(t, e), t.prototype.setChannel = function(e) {
                    return this.apiPut({
                        params: {
                            channel: e
                        }
                    })
                }, t.prototype.activate = function() {
                    return this.apiPost()
                }, t.prototype.deactivate = function() {
                    return this.apiDelete()
                }, t
            }(i.default);
            const s = function(e) {
                function t(t, n) {
                    var r = e.call(this, t) || this;
                    return r.template = "/boards/%selector%/integrations/jira/cards/%issue%", r.addTemplateVars({
                        issue: n
                    }), r
                }
                return (0, r.__extends)(t, e), t.prototype.get = function() {
                    return this.apiGet()
                }, t
            }(i.default);
            const u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/cards/", t
                }
                return (0, r.__extends)(t, e), t.prototype.selectByIssue = function(e) {
                    return new s(this.selector, e)
                }, t.prototype.createByIssue = function(e) {
                    return this.apiPost({
                        templateEnd: "%issue%",
                        templateVars: {
                            issue: e
                        }
                    })
                }, t
            }(i.default);
            const c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/issues/", t
                }
                return (0, r.__extends)(t, e), t.prototype.all = function(e) {
                    return this.apiPost({
                        templateEnd: "search",
                        jsonData: e
                    })
                }, t.prototype.find = function(e) {
                    return this.apiGet({
                        templateEnd: "picker",
                        params: {
                            query: e,
                            currentJQL: 'project != ""'
                        },
                        apiSettings: {
                            cache: !1
                        }
                    })
                }, t.prototype.read = function(e) {
                    return this.apiGet({
                        templateEnd: "%issue%",
                        templateVars: {
                            issue: e
                        }
                    })
                }, t.prototype.create = function(e) {
                    return this.apiPost({
                        jsonData: e
                    })
                }, t.prototype.update = function(e, t) {
                    return this.apiPut({
                        templateEnd: "%issue%",
                        templateVars: {
                            issue: e
                        },
                        jsonData: t
                    })
                }, t.prototype.permissions = function(e) {
                    return this.apiGet({
                        templateEnd: "permissions",
                        params: {
                            permissions: e
                        }
                    })
                }, t.prototype.fetchCreateIssueMeta = function(e) {
                    return this.apiGet({
                        templateEnd: "createmeta",
                        params: e
                    })
                }, t.prototype.fetchProjects = function() {
                    return this.apiGet({
                        templateEnd: "projects"
                    })
                }, t.prototype.fetchEditIssueMeta = function(e) {
                    return this.apiGet({
                        templateEnd: "%issue%/editmeta",
                        templateVars: {
                            issue: e
                        }
                    })
                }, t.prototype.fetchWorkflowTransition = function(e) {
                    return this.apiGet({
                        templateEnd: "transitions",
                        params: {
                            issueKeys: e
                        }
                    })
                }, t.prototype.updateWorkflowTransition = function(e) {
                    return this.apiPost({
                        templateEnd: "transitions",
                        jsonData: e
                    })
                }, t.prototype.createComment = function(e, t) {
                    return this.apiPost({
                        templateEnd: "%issue%/comment",
                        templateVars: {
                            issue: e
                        },
                        jsonData: t
                    })
                }, t.prototype.priorities = function() {
                    return this.apiGet({
                        templateEnd: "priority"
                    })
                }, t.prototype.issueTypes = function() {
                    return this.apiGet({
                        templateEnd: "issuetype"
                    })
                }, t
            }(i.default);
            const p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/", t
                }
                return (0, r.__extends)(t, e), t.prototype.find = function(e) {
                    return this.apiGet({
                        params: {
                            query: e
                        },
                        apiSettings: {
                            cache: !1
                        },
                        templateEnd: "users"
                    })
                }, t.prototype.findById = function(e) {
                    return this.apiGet({
                        params: {
                            userId: e
                        },
                        apiSettings: {
                            cache: !0
                        },
                        templateEnd: "user"
                    })
                }, t
            }(i.default);
            const l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/agile/", t
                }
                return (0, r.__extends)(t, e), t.prototype.fetchBoards = function(e, t) {
                    return this.apiGet({
                        templateEnd: "board",
                        params: (0, r.__assign)((0, r.__assign)({}, t), {
                            projectKeyOrId: e
                        })
                    })
                }, t.prototype.fetchSprints = function(e, t) {
                    return this.apiGet({
                        templateEnd: "board/%boardId%/sprint",
                        templateVars: {
                            boardId: e
                        },
                        params: t
                    })
                }, t
            }(i.default);
            const d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/filter/favourite", t
                }
                return (0, r.__extends)(t, e), t.prototype.favourite = function() {
                    return this.apiGet()
                }, t
            }(i.default);
            const f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/attrs/", t
                }
                return (0, r.__extends)(t, e), t.prototype.get = function() {
                    return this.apiGet()
                }, t.prototype.update = function(e) {
                    return this.apiPost({
                        jsonData: {
                            attrs: e
                        }
                    })
                }, t
            }(i.default);
            const h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/widgets/", t
                }
                return (0, r.__extends)(t, e), t.prototype.pingServerForUpdate = function(e) {
                    return this.apiPost({
                        templateEnd: "%widgetId%",
                        templateVars: {
                            widgetId: e
                        }
                    })
                }, t
            }(i.default);
            const m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/jira/", t
                }
                return (0, r.__extends)(t, e), Object.defineProperty(t.prototype, "cards", {
                    get: function() {
                        return new u(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "issues", {
                    get: function() {
                        return new c(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "users", {
                    get: function() {
                        return new p(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "agile", {
                    get: function() {
                        return new l(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "filter", {
                    get: function() {
                        return new d(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "attrs", {
                    get: function() {
                        return new f(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "widgets", {
                    get: function() {
                        return new h(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.myself = function() {
                    return this.apiGet({
                        templateEnd: "myself"
                    })
                }, t
            }(i.default);
            const y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/rally/items/", t
                }
                return (0, r.__extends)(t, e), t.prototype.get = function(e) {
                    return this.apiGet({
                        templateEnd: e.toString(10)
                    })
                }, t.prototype.post = function(e) {
                    return this.apiPost({
                        templateEnd: e.toString(10)
                    })
                }, t
            }(i.default);
            const v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r.__extends)(t, e), Object.defineProperty(t.prototype, "items", {
                    get: function() {
                        return new y(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }(i.default);
            const _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/integrations/videochatproviders/", t
                }
                return (0, r.__extends)(t, e), t.prototype.getPrimary = function() {
                    return this.apiGet({
                        templateEnd: "primary"
                    })
                }, t
            }(i.default);
            const E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r.__extends)(t, e), Object.defineProperty(t.prototype, "slack", {
                    get: function() {
                        return new a(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "jira", {
                    get: function() {
                        return new m(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "rally", {
                    get: function() {
                        return new v(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "videoChatProviders", {
                    get: function() {
                        return new _(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }(i.default);
            const g = function(e) {
                function t(t, n) {
                    var r = e.call(this, n) || this;
                    return r.template = "/boards/%board%/resources/%selector%/", r.addTemplateVars({
                        board: t
                    }), r
                }
                return (0, r.__extends)(t, e), t.prototype.get = function(e) {
                    return this.apiGet({
                        params: e
                    })
                }, t.prototype.addToLibrary = function() {
                    return this.apiPost({
                        templateEnd: "saveToLibrary"
                    })
                }, t.prototype.getDocumentPages = function() {
                    return this.apiGet({
                        templateEnd: "pages"
                    })
                }, t.prototype.loadDocumentPage = function(e) {
                    return this.apiPost({
                        templateEnd: "pages/%page%",
                        templateVars: {
                            page: e
                        }
                    })
                }, t.prototype.makeFileUrl = function(e) {
                    return this.makeUrl({
                        templateEnd: "files/%name%",
                        templateVars: {
                            name: e
                        }
                    })
                }, t
            }(i.default);
            const S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/resources/", t
                }
                return (0, r.__extends)(t, e), t.prototype.selectById = function(e) {
                    return new g(this.selector, e)
                }, t.prototype.get = function(e) {
                    return this.apiGet({
                        params: e
                    })
                }, t.prototype.update = function(e, t, n) {
                    return this.apiPost({
                        templateEnd: "%resource%/",
                        templateVars: {
                            resource: e
                        },
                        params: o.omitUnsetParameters(t),
                        jsonData: n
                    })
                }, t
            }(i.default);
            const b = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.template = "/boards/%selector%/data-classification/", n
                }
                return (0, r.__extends)(t, e), t.prototype.set = function(e) {
                    return this.apiPut({
                        jsonData: e
                    })
                }, t.prototype.delete = function() {
                    return this.apiDelete()
                }, t
            }(i.default);
            const A = function(e) {
                function t(t, n) {
                    var r = e.call(this, t) || this;
                    return r.template = "/boards/%selector%/user-connections/%connectionSelector%/", r.addTemplateVars({
                        connectionSelector: n
                    }), r
                }
                return (0, r.__extends)(t, e), t.prototype.get = function() {
                    return this.apiGet()
                }, t.prototype.set = function(e) {
                    return this.apiPut({
                        params: e
                    })
                }, t.prototype.remove = function() {
                    return this.apiDelete()
                }, t
            }(i.default);
            var T = n(13081),
                O = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.template = "/boards/%selector%/participants/%participantSelector%/", r.addTemplateVars({
                            participantSelector: n
                        }), r
                    }
                    return (0, r.__extends)(t, e), t.prototype.get = function(e) {
                        return this.apiGet({
                            params: e
                        })
                    }, t
                }(i.default);
            const w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.template = "/boards/%selector%/", t
                }
                return (0, r.__extends)(t, e), Object.defineProperty(t.prototype, "integration", {
                    get: function() {
                        return new E(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "resources", {
                    get: function() {
                        return new S(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dataClassification", {
                    get: function() {
                        return new b(this.selector)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.connect = function(e) {
                    var t = e.boardInfoFields;
                    return this.apiPost({
                        templateEnd: "connect/",
                        params: {
                            fields: "boardInfo{" + t + "},config,wsServerConfig"
                        }
                    })
                }, t.prototype.get = function(e, t) {
                    return this.apiGet({
                        params: e,
                        parentSpan: t
                    })
                }, t.prototype.set = function(e) {
                    return this.apiPut({
                        params: e
                    })
                }, t.prototype.setPassword = function(e) {
                    return this.apiPut({
                        templateEnd: "public-access-password",
                        jsonData: {
                            password: e
                        }
                    })
                }, t.prototype.verifyPublicAccessPassword = function(e) {
                    return this.apiPost({
                        templateEnd: "public-access-password/verifications",
                        jsonData: {
                            password: e
                        }
                    })
                }, t.prototype.removePassword = function() {
                    return this.apiDelete({
                        templateEnd: "public-access-password"
                    })
                }, t.prototype.setPasswordAndChangePublicity = function(e, t) {
                    return this.apiPut({
                        templateEnd: "public-access-password-change-publicity",
                        jsonData: {
                            password: e,
                            sharingPolicy: t
                        }
                    })
                }, t.prototype.removePasswordAndChangePublicity = function() {
                    return this.apiDelete({
                        templateEnd: "public-access-password-change-publicity"
                    })
                }, t.prototype.setPicture = function(e) {
                    return this.apiPostOneFile(e, {
                        templateEnd: "picture"
                    })
                }, t.prototype.removePicture = function() {
                    return this.apiDelete({
                        templateEnd: "picture"
                    })
                }, t.prototype.changeOwner = function(e) {
                    return this.apiPut({
                        templateEnd: "owner",
                        params: {
                            userId: e
                        }
                    })
                }, t.prototype.delete = function(e) {
                    return this.apiPost({
                        templateEnd: "trash",
                        parentSpan: e
                    })
                }, t.prototype.restore = function() {
                    return this.apiPost({
                        templateEnd: "untrash"
                    })
                }, t.prototype.invite = function(e, t, n, r) {
                    return this.apiPost({
                        templateEnd: "share",
                        jsonData: {
                            emails: e,
                            message: t,
                            role: n
                        },
                        canLogJsonData: !0,
                        params: {
                            fields: T.FieldType.createFieldStr(r)
                        }
                    })
                }, t.prototype.leave = function() {
                    return this.apiPost({
                        templateEnd: "leave"
                    })
                }, t.prototype.attachToAccount = function(e, t, n) {
                    return this.apiPost({
                        templateEnd: "attach-to-account",
                        params: o.omitUnsetParameters({
                            accountId: e,
                            ignoreWarnings: t
                        }),
                        parentSpan: n
                    })
                }, t.prototype.changePublicity = function(e) {
                    return this.apiPut({
                        templateEnd: "publicity",
                        params: {
                            sharingPolicy: e
                        }
                    })
                }, t.prototype.changeTeamSharingPolicy = function(e) {
                    return this.apiPut({
                        templateEnd: "sharingPolicyOnAccount",
                        params: {
                            sharingPolicy: e
                        }
                    })
                }, t.prototype.changeOrgSharingPolicy = function(e) {
                    return this.apiPut({
                        templateEnd: "sharingPolicyOnOrganization",
                        params: {
                            sharingPolicy: e
                        }
                    })
                }, t.prototype.sendTeamSharingNotification = function() {
                    return this.apiPost({
                        templateEnd: "sendNotifyShareOnAccount"
                    })
                }, t.prototype.attachToProject = function(e, t) {
                    return this.apiPost({
                        templateEnd: "attachToProject",
                        params: o.omitUnsetParameters({
                            projectId: e,
                            sendNotification: t
                        })
                    })
                }, t.prototype.detachFromProject = function() {
                    return this.apiPost({
                        templateEnd: "detachFromProject"
                    })
                }, t.prototype.requestAccess = function(e, t, n) {
                    return this.apiPost({
                        templateEnd: "request-access",
                        params: o.omitUnsetParameters({
                            currentRole: e,
                            requestedRole: t,
                            from: n
                        })
                    })
                }, t.prototype.userConnections = function(e, t) {
                    return this.apiGetArrayWrapper({
                        templateEnd: "user-connections",
                        params: {
                            fields: T.FieldType.createFieldStr(e),
                            filter: t
                        }
                    })
                }, t.prototype.selectUserConnectionById = function(e) {
                    return new A(this.selector, e)
                }, t.prototype.selectParticipantById = function(e) {
                    return new O(this.selector, e)
                }, t.prototype.onlineUsers = function() {
                    return this.apiGetArrayWrapper({
                        templateEnd: "online-users"
                    })
                }, t.prototype.changeTeamInviteLinkPolicy = function(e) {
                    return this.apiPut({
                        templateEnd: "invite-to-account-and-board-link",
                        jsonData: e
                    })
                }, t.prototype.favorite = function() {
                    return this.apiPost({
                        templateEnd: "favorite"
                    })
                }, t.prototype.unfavorite = function() {
                    return this.apiPost({
                        templateEnd: "unfavorite"
                    })
                }, t.prototype.uploadResource = function(e) {
                    return this.apiPost({
                        templateEnd: "upload/",
                        jsonData: e
                    })
                }, t.prototype.upload = function(e) {
                    return this.apiPostOneFile(e, {
                        templateEnd: "upload/"
                    })
                }, t.prototype.generateAccessLink = function(e, t) {
                    return this.apiPost({
                        templateEnd: "access-links/",
                        params: {
                            sharingPolicy: e,
                            appKey: t
                        }
                    })
                }, t.prototype.generateLiveEmbedBoardAccessToken = function(e, t) {
                    return this.apiPost({
                        templateEnd: "live-embed-board-access-tokens/",
                        params: {
                            sharingPolicy: e,
                            appId: t
                        }
                    })
                }, t.prototype.search = function(e) {
                    return this.apiGet({
                        templateEnd: "search/",
                        params: e
                    })
                }, t.prototype.updateCopyAccessLevel = function(e) {
                    return this.apiPut({
                        templateEnd: "copy-access-level",
                        params: {
                            copyAccessLevel: e
                        }
                    })
                }, t.prototype.closeNotification = function() {
                    return this.apiPost({
                        templateEnd: "corruption/close-notification"
                    })
                }, t.prototype.isMiroPattern = function() {
                    return this.apiGet({
                        templateEnd: "is-miro-pattern/"
                    })
                }, t.prototype.setBoardDimensions = function(e) {
                    return this.apiPost({
                        templateEnd: "board-dimensions/",
                        params: (0, r.__assign)({}, e)
                    })
                }, t.prototype.getBoardDimensions = function(e) {
                    return this.apiGet({
                        templateEnd: "board-dimensions/",
                        apiSettings: {
                            timeout: e
                        }
                    })
                }, t.prototype.updatePublicVisitorsNamesAllowance = function(e) {
                    var t = e.type,
                        n = e.applyTo;
                    return this.apiPut({
                        templateEnd: "public-visitors-names-allowance",
                        params: {
                            publicVisitorsNamesAllowance: t,
                            applyTo: n
                        }
                    })
                }, t.prototype.updateTemporaryUser = function(e) {
                    return this.apiPut({
                        templateEnd: "update-temporary-user/",
                        params: e
                    })
                }, t.prototype.setAccessLevel = function(e) {
                    return this.apiPatch({
                        templateEnd: "access-settings",
                        jsonData: {
                            collaborationToolsCanBeStartedByEditors: e
                        }
                    })
                }, t.prototype.setSharingAccessLevel = function(e) {
                    return this.apiPatch({
                        templateEnd: "sharing-access",
                        jsonData: {
                            value: e
                        }
                    })
                }, t
            }(i.default)
        },
        13085: (e, t, n) => {
            "use strict";
            n.d(t, {
                cdnHost: () => o,
                getStaticPublicPath: () => i,
                setUpWebpackPublicPath: () => a,
                isCDNInitialized: () => s
            });
            var r = !1;

            function o() {
                return !!("production" === function() {
                    switch (document.location.hostname) {
                        case "miro.com":
                            return "production";
                        case "dev.realtimeboard.com":
                            return "development";
                        default:
                            return "test"
                    }
                }()) && "mirostatic.com"
            }

            function i() {
                return n.p
            }

            function a() {
                n.p = "/app/static/";
                var e = o();
                if (e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", "https://" + e, !0), t.onload = function() {
                        200 === t.status && (r = !0, n.p = "https://" + e + "/app/static/")
                    }, t.send()
                }
            }

            function s() {
                return r
            }
        },
        885: (e, t, n) => {
            "use strict";
            n.d(t, {
                getServiceKey: () => o,
                getRootStore: () => i
            });
            var r = n(32);

            function o() {
                return "RootStoreService"
            }
            var i = r.getInjectionPoint("RootStoreService");
            ! function() {
                if (r.has("RootStoreService")) r.getInjectionPoint("RootStoreService")
            }()
        },
        140: (e, t, n) => {
            "use strict";
            n.d(t, {
                getCurrentWorkspaceStatus: () => a,
                getWorkspaceKeys: () => s,
                getWorkspaceById: () => u,
                getWorkspacesList: () => c,
                getCurrentWorkspaceKey: () => p,
                getCurrentWorkspace: () => l,
                getCurrentWorkspaceName: () => d,
                getCurrentWorkspaceDomainName: () => f,
                getHasAuthorizedWorkspace: () => h,
                getIsRecoverPasswordAvailable: () => m
            });
            var r = n(619),
                o = n(13080),
                i = n(441),
                a = function(e) {
                    return (0, e.getState)().workspace.current.status
                },
                s = function(e) {
                    return e.keys
                },
                u = function(e, t) {
                    return e.info[t]
                },
                c = function(e) {
                    return s(e).map((function(t) {
                        return u(e, t)
                    })).filter((function(e) {
                        return !!e
                    }))
                },
                p = function(e) {
                    switch (e.current.status) {
                        case r.CurrentWorkspaceStatus.UNSET:
                        case r.CurrentWorkspaceStatus.GLOBAL:
                            return "";
                        case r.CurrentWorkspaceStatus.LOCAL_LOADED_SUCCESS:
                            var t = u(e.workspaces, e.current.key);
                            return t ? t.key : e.current.key;
                        default:
                            return e.current.unverifiedKey
                    }
                },
                l = function(e) {
                    return e.current.status === r.CurrentWorkspaceStatus.LOCAL_LOADED_SUCCESS ? u(e.workspaces, e.current.key) : void 0
                },
                d = function(e) {
                    var t = l(e);
                    return t ? t.displayName : ""
                },
                f = function(e) {
                    var t = l(e);
                    return t ? t.domainName : ""
                },
                h = function(e) {
                    return (0, i.isAuthorizedInAnyWorkspace)(c(e))
                },
                m = function(e) {
                    var t = l(e);
                    return !t || t.authTypes[o.AuthType.BASIC].enabled
                }
        },
        619: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    CurrentWorkspaceStatus: () => r
                }),
                function(e) {
                    e.UNSET = "UNSET", e.GLOBAL = "GLOBAL", e.LOCAL_NOT_LOADED = "LOCAL_NOT_LOADED", e.LOCAL_LOADING = "LOCAL_LOADING", e.LOCAL_LOADED_SUCCESS = "LOCAL_LOADED_SUCCESS", e.LOCAL_LOADED_FAIL = "LOCAL_LOADED_FAIL"
                }(r || (r = {}))
        },
        441: (e, t, n) => {
            "use strict";
            n.d(t, {
                GLOBAL_WORKSPACE_KEY: () => c,
                GLOBAL_WORKSPACE_DOMAIN_NAME: () => p,
                isGlobalWorkspace: () => l,
                getFixedWorkspaceKey: () => d,
                hasWorkspaceSet: () => f,
                isAuthorizedInAnyWorkspace: () => m,
                getValidWorkspacesResponse: () => y,
                updateApiWorkspaceConfig: () => v,
                isBasicAuthorizationAvailable: () => _,
                isSsoAuthorizationAvailable: () => E
            });
            var r = n(674),
                o = n(13084),
                i = n(13080),
                a = n(619),
                s = n(93),
                u = n(67),
                c = "default",
                p = "app";

            function l(e) {
                return !e || e === c
            }

            function d(e) {
                return e && !e.global ? e.key : ""
            }

            function f(e) {
                return e === a.CurrentWorkspaceStatus.GLOBAL || e === a.CurrentWorkspaceStatus.LOCAL_LOADED_SUCCESS
            }

            function h(e) {
                return !e.isCompatibilityModeEnabled && e.userState === o.UserState.REGISTERED
            }

            function m(e) {
                return function(e) {
                    return e.filter((function(e) {
                        return e.authorized && h(e)
                    }))
                }(e).length > 0
            }

            function y(e) {
                return e.reduce((function(e, t) {
                    return h(t) ? (e.push((0, r.__assign)((0, r.__assign)({}, t), {
                        key: d(t)
                    })), e) : e
                }), [])
            }

            function v(e, t) {
                var n;
                void 0 === t && (t = ""), u.default.BASE_URL = t + "/api/v1", s.APIUtils.updateApiConfig({
                    baseUrl: u.default.BASE_URL,
                    queryParams: (n = {}, n[s.API_WORKSPACE_PARAM_NAME] = e ? e.workspaceKey : void 0, n)
                })
            }

            function _(e) {
                return e.authTypes[i.AuthType.BASIC].enabled
            }

            function E(e) {
                var t = e.authTypes[i.AuthType.SSO],
                    n = t.enabled,
                    r = t.redirectUrl;
                return n && !!r
            }
        },
        117: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    APP_PATH: () => p,
                    AppRoutePath: () => s.AppRoutePath,
                    BASE_PATH: () => c,
                    appAuthEmailChangeConfirmRoute: () => I,
                    appAuthEmailConfirmRoute: () => w,
                    appAuthEmailUnlockRoute: () => R,
                    appAuthLoginRoute: () => m,
                    appAuthLoginWaitingRoute: () => N,
                    appAuthRecoverRoute: () => b,
                    appAuthRequestAccessRoute: () => P,
                    appAuthRoute: () => h,
                    appAuthSignupRoute: () => E,
                    appAuthWorkspaceRoute: () => S,
                    appBasicAuthLoginRoute: () => y,
                    appBoardRoute: () => x,
                    appDashboardRoute: () => M,
                    appEmbedRoute: () => k,
                    appGoogleAuthSignupRoute: () => g,
                    appLiveEmbedRoute: () => U,
                    appMfaRecoveryCodesRoute: () => C,
                    appMfaSetupRoute: () => L,
                    appPasswordAuthRecoverRoute: () => T,
                    appPasswordSuccessAuthRecoverRoute: () => O,
                    appRootRoute: () => f,
                    appSettingsRoute: () => j,
                    appSuccessAuthRecoverRoute: () => A,
                    appVerifyMfaRoute: () => D,
                    appWebviewRoute: () => B,
                    getAppAuthLoginRouteByAuthType: () => _,
                    websiteAuthLoginRoute: () => l,
                    websiteAuthSignupRoute: () => d
                }),
                function(e) {
                    e.LOGIN = "login", e.SIGNUP = "signup", e.GOOGLE_SIGNUP = "google-direct-signin", e.WORKSPACE = "workspace", e.RECOVER = "recover", e.EMAIL_OPERATION_CONFIRM = "email-confirm", e.EMAIL_OPERATION_UNLOCK = "email-unlock", e.EMAIL_OPERATION_CHANGE_CONFIRM = "confirm-email", e.REQUEST_ACCESS = "request-access", e.MFA_SETUP = "mfa-setup", e.MFA_RECOVERY_CODES = "mfa-recovery-codes", e.MFA_VERIFY = "mfa-verify", e.LOGIN_WAITING = "login-waiting", e.UNKNOWN = "unknown"
                }(r || (r = {}));
            var o;
            ! function(e) {
                e.BASIC = "basic", e.SSO = "sso", e.UNKNOWN = "unknown"
            }(o || (o = {}));
            var i;
            ! function(e) {
                e.SUCCESS = "success", e.PASSWORD = "password", e.PASSWORD_SUCCESS = "password/success", e.UNKNOWN = "unknown"
            }(i || (i = {}));
            var a = n(13080),
                s = n(12904),
                u = n(44),
                c = "/",
                p = "app/",
                l = function(e) {
                    return void 0 === e && (e = c), e + "login/"
                },
                d = function(e) {
                    return void 0 === e && (e = c), e + "signup/"
                },
                f = function(e) {
                    return void 0 === e && (e = c), "" + e + p
                },
                h = function(e) {
                    return void 0 === e && (e = c), "" + e + p + s.AppRoutePath.AUTH + "/"
                },
                m = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.LOGIN + "/"
                        }(h(e))
                },
                y = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + o.BASIC + "/"
                        }(m(e))
                },
                v = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + o.SSO + "/"
                        }(m(e))
                },
                _ = function(e) {
                    return function(t) {
                        switch (void 0 === t && (t = c), e) {
                            case a.AuthType.BASIC:
                                return y(t);
                            case a.AuthType.SSO:
                                return v(t);
                            default:
                                return m(t)
                        }
                    }
                },
                E = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.SIGNUP + "/"
                        }(h(e))
                },
                g = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.GOOGLE_SIGNUP + "/"
                        }(e)
                },
                S = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.WORKSPACE + "/"
                        }(h(e))
                },
                b = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.RECOVER + "/"
                        }(h(e))
                },
                A = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + i.SUCCESS + "/"
                        }(b(e))
                },
                T = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + i.PASSWORD + "/"
                        }(b(e))
                },
                O = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + i.PASSWORD_SUCCESS + "/"
                        }(b(e))
                },
                w = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c),
                            function(e) {
                                return function(t) {
                                    return "" + t + r.EMAIL_OPERATION_CONFIRM + "/" + (e ? e + "/" : "")
                                }
                            }(e)(h(t))
                    }
                },
                R = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.EMAIL_OPERATION_UNLOCK + "/"
                        }(h(e))
                },
                I = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c),
                            function(e) {
                                return function(t) {
                                    return "" + t + r.EMAIL_OPERATION_CHANGE_CONFIRM + "/" + e + "/"
                                }
                            }(e)(h(t))
                    }
                },
                P = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.REQUEST_ACCESS + "/"
                        }(h(e))
                },
                L = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.MFA_SETUP + "/"
                        }(h(e))
                },
                C = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.MFA_RECOVERY_CODES + "/"
                        }(h(e))
                },
                D = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.MFA_VERIFY + "/"
                        }(h(e))
                },
                N = function(e) {
                    return void 0 === e && (e = c),
                        function(e) {
                            return "" + e + r.LOGIN_WAITING + "/"
                        }(h(e))
                },
                M = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c), e ? "" + t + p + "?" + u.QueryParameter.SPACE_ID + "=" + e : "" + t + p + s.AppRoutePath.DASHBOARD + "/"
                    }
                },
                x = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c), "" + t + p + s.AppRoutePath.BOARD + "/" + (e ? e + "/" : "")
                    }
                },
                U = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c), "" + t + p + s.AppRoutePath.LIVE_EMBED + "/" + (e ? e + "/" : "")
                    }
                },
                k = function(e) {
                    return function(t) {
                        return void 0 === t && (t = c), "" + t + p + s.AppRoutePath.EMBED + "/" + (e ? e + "/" : "")
                    }
                },
                B = function(e) {
                    return void 0 === e && (e = c), "" + e + p + s.AppRoutePath.WEBVIEW + "/"
                },
                j = function(e) {
                    return void 0 === e && (e = c), "" + e + p + s.AppRoutePath.SETTINGS + "/"
                }
        },
        987: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSessionAnonymousBoardMoving: () => i
            });
            var r = n(588),
                o = n(13078);

            function i() {
                var e;
                return null !== (e = r.rtbSessionStorage.getItem(o.SessionStorageItems.anonymousBoardMoving)) && void 0 !== e ? e : ""
            }
        },
        53: (e, t, n) => {
            "use strict";
            n.d(t, {
                loadedModules: () => a,
                register: () => c,
                MODULES_LOCATOR_LOAD_START: () => l,
                MODULES_LOCATOR_LOAD_FAIL: () => d,
                MODULES_LOCATOR_LOAD_SUCCESS: () => f,
                createModuleDef: () => h
            });
            var r = n(14),
                o = n.n(r),
                i = n(106),
                a = new Map,
                s = new Map,
                u = new Map;

            function c(e, t) {
                if (u.has(e)) throw new Error("Module " + e + " already registered");
                u.set(e, t)
            }

            function p(e) {
                if (s.has(e)) return s.get(e);
                var t = u.get(e);
                if (t) {
                    var n = (0, i.retryImport)((function() {
                        return t()
                    }), {
                        maxTries: 1 / 0
                    }).then((function(t) {
                        return a.set(e, t), t
                    }));
                    return s.set(e, n), n
                }
                throw new Error("Module " + e + " does not registered")
            }
            var l = "MODULES_LOCATOR_LOAD_START",
                d = "MODULES_LOCATOR_LOAD_FAIL",
                f = "MODULES_LOCATOR_LOAD_SUCCESS";

            function h(e, t) {
                var n = new(o().Signal),
                    r = new(o().Signal),
                    i = !1,
                    s = function(o) {
                        return i || r.dispatch({
                            type: l,
                            payload: {
                                moduleName: e
                            }
                        }), (t ? t(o).then((function() {
                            return p(e)
                        })) : p(e)).then((function(t) {
                            if (!t) throw new Error("Module " + e + " load failed. Seems like the code died on import phase");
                            return i || (i = !0, r.dispatch({
                                type: f,
                                payload: {
                                    moduleName: e
                                }
                            }), n.dispatch(t)), t
                        }), (function(t) {
                            return r.dispatch({
                                type: d,
                                payload: {
                                    moduleName: e
                                },
                                error: t
                            })
                        }))
                    };
                return Object.defineProperty(s, "instance", {
                    get: function() {
                        return function(e) {
                            return a.get(e)
                        }(e)
                    }
                }), s.onLoaded = n, s.lifecycle = r, s
            }
        },
        356: (e, t, n) => {
            "use strict";
            n.d(t, {
                getServiceKey: () => o,
                getInjectionPoint: () => i,
                default: () => a
            });
            var r = n(32);

            function o() {
                return "BoardCommonService"
            }

            function i() {
                return r.getInjectionPoint("BoardCommonService")
            }
            const a = i()
        },
        12: (e, t, n) => {
            "use strict";

            function r() {
                return "RtbStat"
            }
            n.d(t, {
                getServiceKey: () => r,
                default: () => o
            });
            const o = n(32).getInjectionPoint("RtbStat")
        },
        463: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                setCurrentServerTime: () => s,
                getTimeAsString: () => u,
                getServerTimeOffset: () => c,
                getOffsetTime: () => p,
                getHasServerTime: () => l
            });
            var o = 0,
                i = 1 / 0,
                a = !1;

            function s(e) {
                var t = e.requestDuration,
                    n = e.serverTime,
                    s = e.serverTimeRFC;
                if (r = s, i > t && !a) {
                    var u = void 0;
                    n ? (a = !0, /[zZ]/.test(n) || (n += "Z"), u = new Date(n)) : u = new Date(s), i = t, o = u.getTime() - Date.now() + t / 2
                }
            }

            function u() {
                return r
            }

            function c() {
                return o
            }

            function p() {
                return Date.now() + o
            }

            function l() {
                return a
            }
        },
        12896: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSpanDuration: () => r
            });

            function r(e) {
                var t, n;
                return (null === (n = (t = e).getDuration) || void 0 === n ? void 0 : n.call(t)) || -1
            }
        },
        63: (e, t, n) => {
            "use strict";
            n.d(t, {
                miroGlobalTracer: () => r.globalTracer,
                initGlobalTracer: () => r.initGlobalTracer,
                Span: () => i.default,
                Tracer: () => o.Tracer,
                SpanContext: () => s.default,
                FORMAT_HTTP_HEADERS: () => u.FORMAT_HTTP_HEADERS,
                REFERENCE_FOLLOWS_FROM: () => u.REFERENCE_FOLLOWS_FROM,
                REFERENCE_CHILD_OF: () => u.REFERENCE_CHILD_OF,
                Reference: () => c.default
            });
            var r = n(879),
                o = n(624),
                i = n(623),
                a = n(878),
                s = n(889),
                u = n(880),
                c = n(888);
            a.initialize()
        },
        261: (e, t, n) => {
            "use strict";
            n.d(t, {
                makeFullUrl: () => a,
                getBaseHost: () => s,
                getBasePath: () => u,
                normalizeURL: () => c,
                getHostByURL: () => p,
                addQueryParams: () => l,
                safeCreateURL: () => d
            });
            var r = n(306),
                o = document.createElement("a"),
                i = /(<)|(>)|(\\)|({)|(})|(")|(')|(`)|(\|)|(\s)/g;

            function a(e) {
                return s() + e
            }

            function s() {
                return location.origin
            }

            function u() {
                return s() + location.pathname
            }

            function c(e) {
                return e ? ((e = e.trim()).startsWith("/") || ((0, r.hasScheme)(e, [r.jsProtocol]) && (e = e.slice(r.jsProtocol.length + 1)), (0, r.hasScheme)(e) || (e = document.location.protocol + "//" + e)), e = e.replace(i, (function(e) {
                    return encodeURIComponent(e)
                })), o.href = e, o.href) : ""
            }

            function p(e) {
                return o.href = c(e), o.hostname
            }

            function l(e, t) {
                var n = d(e);
                return Object.keys(t).forEach((function(e) {
                    var r = t[e];
                    r && n.searchParams.append(e, r)
                })), n.toString()
            }

            function d(e) {
                return (0, r.isAbsoluteUrl)(e) ? new URL(e) : new URL(e, location.href)
            }
        },
        38: (e, t, n) => {
            "use strict";
            n.d(t, {
                PARSER: () => p,
                blur: () => E,
                clearSelection: () => S,
                findParent: () => _,
                fitTextAreaHeight: () => c.fitTextAreaHeight,
                getCurrentBoardUrl: () => O,
                getCurrentUrl: () => T,
                getFirstParameterName: () => f,
                getMiroLiteBoardUrl: () => w,
                getParameterByName: () => d,
                getParameterByNameFromUrl: () => l,
                getParentOffsetElement: () => D,
                getPlaceOfApp: () => b,
                hasClassName: () => v,
                hasParameter: () => y,
                isElementHidden: () => L,
                isFocusOnText: () => P,
                isTrustedOriginUrl: () => I,
                reloadMiroLiteParent: () => R,
                reloadPage: () => A,
                removeParameterByName: () => h,
                replaceUrlState: () => m,
                returnFocusFromIFrame: () => g
            });
            var r = n(13082),
                o = n(44);
            const i = function() {
                function e() {}
                return e.prototype.openInNewTab = function(e, t) {
                    throw Error("Function not implemented")
                }, e.prototype.navigateTo = function(e) {
                    window.top && (window.top.location.href = e)
                }, e.prototype.reload = function() {
                    throw Error("Function not implemented")
                }, e.prototype.getLocationOrigin = function() {
                    throw Error("Function not implemented")
                }, e.prototype.pushState = function(e, t, n) {
                    throw void 0 === t && (t = null), void 0 === n && (n = ""), Error("Function not implemented")
                }, e.prototype.download = function(e, t, n) {
                    throw void 0 === n && (n = "_blank"), Error("Function not implemented")
                }, e
            }();
            var a = n(261),
                s = n(306),
                u = n(356),
                c = n(12772),
                p = new DOMParser;

            function l(e, t) {
                return new URL(e).searchParams.get(t) || ""
            }

            function d(e) {
                return l(location.href, e)
            }

            function f(e) {
                return void 0 === e && (e = location.href), (0, a.safeCreateURL)(e).searchParams.keys().next().value || ""
            }

            function h(e, t) {
                var n = t ? new URL(t) : new URL(location.href);
                return n.searchParams.delete(e), n.href
            }

            function m(e) {
                return window.history.replaceState(void 0, document.title, e)
            }

            function y(e) {
                return null !== new URL(location.href).searchParams.get(e)
            }

            function v(e, t) {
                return !!(e && e.classList && e.classList.contains && e.classList.contains(t))
            }

            function _(e, t) {
                for (; t;) {
                    if ((t.nodeName || t.tagName).toLowerCase() === e.toLowerCase()) return t;
                    t = t.parentNode
                }
                return null
            }

            function E(e) {
                if (e && e.blur) {
                    if (e.setSelectionRange) try {
                        e.setSelectionRange(0, 0)
                    } catch (e) {}
                    e.blur()
                }
            }

            function g(e) {
                void 0 === e && (e = 100);
                var t = document.createElement("input");
                t.style.position = "absolute", t.style.opacity = "0", t.style.top = "0", t.setAttribute("no-keyboard", "true"), document.body.appendChild(t), setTimeout((function() {
                    t.focus(), document.body.removeChild(t)
                }), e)
            }

            function S() {
                var e, t, n, r;
                window.getSelection ? (null === (e = window.getSelection()) || void 0 === e ? void 0 : e.empty) ? null === (t = window.getSelection()) || void 0 === t || t.empty() : (null === (n = window.getSelection()) || void 0 === n ? void 0 : n.removeAllRanges) && (null === (r = window.getSelection()) || void 0 === r || r.removeAllRanges()) : document.selection && document.selection.empty()
            }

            function b() {
                var e = window.location.pathname;
                return e.indexOf("app/board") > -1 ? r.ApplicationLocation.BOARD : e.indexOf("app/settings") > -1 ? r.ApplicationLocation.SETTINGS_2018 : e.indexOf("app") > -1 ? r.ApplicationLocation.DASHBOARD : void 0
            }

            function A() {
                window.location.reload()
            }

            function T() {
                return window.location.href
            }

            function O() {
                var e;
                try {
                    return (null === (e = window.parent.document.querySelector("iframe")) || void 0 === e ? void 0 : e.src) || window.location.href
                } catch (e) {
                    return window.location.href
                }
            }

            function w() {
                var e = rtb.accessLink ? rtb.accessLink : new URL(O()).searchParams.get("boardAccessToken") || "",
                    t = document.referrer.replace(/\/$/, "");
                if (l(O(), o.QueryParameter.IS_MIRO_LITE_STANDALONE) && "" !== t) return t + "/board/" + e + "/";
                var n = (0, u.default)().getCurrentBoardId();
                return location.origin + "/app/board/" + n + "?boardAccessToken=" + e
            }

            function R() {
                (new i).navigateTo(w())
            }

            function I(e) {
                var t = [location.origin, "https://realtimeboard.com", "https://miro.com"];
                try {
                    return (0, s.isRelativeUrl)(e) || t.includes(new URL(e).origin)
                } catch (e) {
                    return !1
                }
            }

            function P(e) {
                var t, n, r, o;
                if (void 0 === e && (e = document && document.activeElement || null), e) {
                    var i = e.tagName ? e.tagName.toLowerCase() : "";
                    n = "input" == i && ("text" === e.type || "password" === e.type), r = "textarea" == i, o = "div" == i && "true" === e.contentEditable
                } else n = !1, r = !1, o = !1;
                var a = !!(null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString().trim());
                return !v(e, "ignoreinput") && (n || r || o || a)
            }

            function L(e) {
                var t = window.getComputedStyle(e);
                return "none" === t.display || !!t.opacity && 0 === parseFloat(t.opacity)
            }

            function C(e) {
                return "static" === (n = "position", ((t = e).currentStyle ? t.currentStyle[n] : window.getComputedStyle ? window.getComputedStyle(t)[n] : t.style[n]) || "static");
                var t, n
            }

            function D(e) {
                for (var t = e.offsetParent || document.documentElement; t && t !== document.documentElement && C(t);) t = t.offsetParent;
                return t || document
            }
        },
        44: (e, t, n) => {
            "use strict";
            var r, o, i, a, s, u, c, p;
            n.d(t, {
                    DebugParameter: () => r,
                    LogParameter: () => o,
                    ConfigParameter: () => i,
                    EmbedParameter: () => a,
                    LiveEmbedParameter: () => s,
                    InitUrlCommandParameter: () => u,
                    QueryParameter: () => c,
                    UserParameter: () => p
                }),
                function(e) {
                    e.IGNORE_UPDATE_CONFIG = "ignoreUpdateConfig", e.FAKE_SERVER_UNAVAILABLE = "fake_server_unavailable", e.DISABLE_LOCAL_STORAGE = "disableLocalStorage", e.ACH_DEBUG = "achdebug", e.DEBUG = "debug", e.DEBUG_FONT_STYLE = "debugFontStyle", e.SHOW_WOOTRIC = "showWootric", e.TUTORIAL = "tutorial", e.CIRCLE_ONBOARDING = "circleOnboarding", e.DISABLE_WHATS_NEW = "disableWhatsNew", e.FORCE_WHATS_NEW = "forceWhatsNew", e.NO_NEED_TO_HACK_POST_MESSAGE = "noNeedToHackPostMessage", e.USE_API_FOR_AUTH = "use_api_for_auth", e.FAKE_APP_START_FAILURE = "fake_app_start_failure", e.AB_TESTS = "ab_tests", e.PRELOAD_MODULES = "preload-modules", e.LOAD_BOARD_UI = "load-board-ui", e.BOARD_INFO_TIMEOUT = "board-info-timeout", e.BOARD_UI_TIMEOUT = "board-ui-timeout", e.BOARD_CONNECTION_TIMEOUT = "board-con-timeout", e.ROAD_TO_JSON = "roadToJson", e.USE_POST_AUTH = "usePostAuth", e.WELCOME = "welcome", e.ROBO_COLLABORATION = "forceStartRoboCollaboration"
                }(r || (r = {})),
                function(e) {
                    e.LOG_TIME = "logTime", e.PLOG = "plog", e.LOG_SDK_COMMANDS = "logSdkCommands"
                }(o || (o = {})),
                function(e) {
                    e.MOBILE = "mobile"
                }(i || (i = {})),
                function(e) {
                    e.PREVIEW_TYPE = "previewType", e.WIDGET_ID = "widgetId", e.MIN_LEFT = "minLeft", e.MIN_TOP = "minTop", e.MAX_RIGHT = "maxRight", e.MAX_BOTTOM = "maxBottom", e.VIEWPORT_WIDTH = "viewportWidth", e.VIEWPORT_HEIGHT = "viewportHeight", e.SCREEN_WIDTH = "screenWidth", e.SCREEN_HEIGHT = "screenHeight", e.EXPORT_FORMAT = "exportFormat"
                }(a || (a = {})),
                function(e) {
                    e.AUTO_PLAY = "autoplay", e.ACCESS_TOKEN = "accessToken", e.BOARD_ACCESS_TOKEN = "boardAccessToken", e.POST_MESSAGE_URL_OPENER = "postMessageUrlOpener", e.PARENT_DOMAIN = "parentDomain", e.EMBED_AUTO_PLAY = "embedAutoplay", e.EXTERNAL_AUTH_FLOW = "externalAuthFlow"
                }(s || (s = {})),
                function(e) {
                    e.OPEN_WIREFRAMES = "openWireframes", e.OPEN_SHAPE_LIBRARY = "openShapeLibrary", e.CREATE_BUSINESS_PLAN = "createBusinessPlan", e.CREATE_CONSULTANT_PLAN = "createConsultantPlan", e.CREATE_TEAM_PLAN = "createTeamPlan", e.MOBILE_AUTO_TEST = "mobileAutotest", e.INVITE = "invite"
                }(u || (u = {})),
                function(e) {
                    e.NO_LIMITS = "noLimits", e.CREATE_DEV_TEAM = "createDevTeam", e.CREATE_FREE_TEAM2018 = "createFreeTeam2018", e.MID = "mid", e.PROJECT_ID = "projectId", e.SPACE_ID = "spaceId", e.UTM_CONTENT = "utm_content", e.MESSENGER = "messenger", e.FSDURATION = "fsduration", e.CONTENTFUL_ENVIRONMENT = "contentfulEnvironment", e.FROM_EMBED = "fromEmbed", e.INSPIRATION_CENTER_VERSION = "inspirationCenter.version", e.INSPIRATION_CENTER_VISIBLE = "inspirationCenter.visible", e.AUTOTEST = "autotest", e.USE_TEMPLATE = "useTemplate", e.AUTH_FAIL_REDIRECT = "authFailRedirect", e.BILLING_PAGE = "billingPage", e.APPLICATION_ID = "applicationId", e.TEAM_PRIVACY_SECTION_SCROLL_TO = "team_privacy", e.EXTENDED_CONTENT_ADMIN_PERMISSIONS_SECTION_SCROLL_TO = "extended-cap-permissions", e.DOMAIN_CONTROL_SCROLL_TO = "domain_control", e.INVITATION_LINK_SCROLL_TO = "invitation_link", e.CONFIRMATION_CODE = "saml-confirmation-code", e.CONFIRMATION_DOMAIN = "saml-confirmation-domain", e.IN_APP_PRICING_VISIBLE = "inAppPricing.visible", e.SWITCH_TO_YEARLY = "switchToYearly", e.INVITE_MODAL_VISIBLE = "inviteModal.visible", e.CREATE_PROJECT_MODAL_VISIBLE = "createProjectModal.visible", e.LOAD_SDK = "loadSdk", e.STATS = "stats", e.CREATE_SCALE_MODE = "scs", e.FIRST_LOGIN = "firstLogin", e.EXTERNAL_APP_URL = "externalAppUrl", e.EXTERNAL_APP_NAME = "externalAppName", e.SHOW_UPGRADE = "showUpgrade", e.FEATURES = "features", e.FEATURES_ON = "featuresOn", e.FEATURES_OFF = "featuresOff", e.CANVAS_OBJECT_TYPE = "cot", e.MOVE_TO_OBJECT = "moveToWidget", e.NOTES_SCROLL_TO = "notesScrollTo", e.OPEN_NOTE_COMMENT = "openNoteComment", e.OPEN_NOTE_MENTION = "openNoteMention", e.OPEN_NOTES = "openNotes", e.SHARE_BOARD = "shareBoard", e.OPEN_CHAT = "openChat", e.OPEN_COMMENT = "openComment", e.OPEN_COMMENTS = "openComments", e.OPEN_ACTIVITY = "openActivity", e.OPEN_FRAMES = "openFrames", e.OPEN_VOTING = "openVoting", e.SCREEN_READER_MODE = "screenReaderMode", e.COPY_BOARD_ID = "copyBoardId", e.COPY_BOARD_TITLE = "copyBoardTitle", e.COPY_BOARD_ACCOUNT_ID = "copyBoardAccountId", e.CREATE_NEW_BOARD = "createNewBoard", e.MIRO_NEW_BOARD = "miroNewBoard", e.MIRO_NEW_BOARD_ACCOUNT_ID = "miroNewBoardAccountId", e.MIRO_NEW_WORKSHOP = "miroNewWorkshop", e.CREATE_BOARD_FROM_GOOGLE_DRIVE = "createBoardFromGoogleDrive", e.TEMPLATES_PICKER_PRESELECTED_CATEGORY = "templatesPickerPreselectedCategory", e.TEMPLATES_PICKER_PRESELECTED_TEMPLATE = "tpTemplate", e.TEMPLATES_PICKER_IS_CUSTOM_TEMPLATE = "isCustom", e.FOLDER_ID = "folderId", e.REINSTALL_SLACK_APP = "reinstallSlackApp", e.CHANNEL = "channel", e.MOVE_TO_VIEWPORT = "moveToViewport", e.PRESENTATION_FRAME = "presentationFrame", e.RUN_PRESENTATION = "runPresentation", e.ACTIVATE_STARTUP = "activateStartup", e.ENABLE_CURSORS = "enableCursors", e.FPS_OUTPUT = "fps_output", e.HAS_DEVTOOLS = "hasDevTools", e.INSERT_TEMPLATE = "insertTemplate", e.CODE = "code", e.RETURN_METHOD = "return_method", e.REASON = "reason", e.MESSAGE = "message", e.IS_MIRO_LITE_SHARED_LINK = "isMiroLiteSharedLink", e.GOOGLE_AUTH_URL = "googleAuthUrl", e.WORKSPACE = "workspace", e.IS_MIRO_LITE_STANDALONE = "isMiroLiteStandalone", e.MIRO_PRO_NETWORK = "mpn", e.APP_SUBMISSION_DIALOG_REFERRER = "asd-referrer", e.BOARD_ACCESS_TOKEN = "boardAccessToken", e.LAST_PAGE = "lastPage"
                }(c || (c = {})),
                function(e) {
                    e.EMAIL = "email", e.USER_EMAIL = "userEmail", e.MAIL_USER_EMAIL = "mailUserEmail", e.ID = "id", e.SELECTED_LICENSE = "selectedLicense", e.INVITES = "invites", e.CHANGE_TO_FULL = "changeToFull", e.SORT_BY_ADDING_DATE_DESC = "sortByAddingDateDesc"
                }(p || (p = {}))
        },
        306: (e, t, n) => {
            "use strict";
            n.d(t, {
                getClippedUrl: () => r.getClippedUrl,
                getURLs: () => r.getURLs,
                getUrlHost: () => r.getUrlHost,
                hasScheme: () => r.hasScheme,
                hasStandardSchemes: () => r.hasStandardSchemes,
                isAbsoluteUrl: () => r.isAbsoluteUrl,
                isDataImageUrl: () => r.isDataImageUrl,
                isHttpOrHttpsUrl: () => r.isHttpOrHttpsUrl,
                isHttpsUrl: () => r.isHttpsUrl,
                isRelativeUrl: () => r.isRelativeUrl,
                isSimpleUrl: () => r.isSimpleUrl,
                isURL: () => r.isURL,
                jsProtocol: () => r.jsProtocol,
                lastUrlRegExp: () => r.lastUrlRegExp,
                standardSchemes: () => r.standardSchemes,
                urlRegExp: () => r.urlRegExp,
                urlRegexStr: () => r.urlRegexStr
            });
            var r = n(2444)
        },
        391: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    DEFERRED_STATUS: () => r,
                    createDeferred: () => i
                }),
                function(e) {
                    e.PENDING = "pending", e.RESOLVED = "resolved", e.REJECTED = "rejected"
                }(r || (r = {}));
            var o = function() {
                var e = this;
                this.status = r.PENDING, this.promise = new Promise((function(t, n) {
                    e.resolve = function() {
                        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                        e.status = r.RESOLVED, t.apply(void 0, n)
                    }, e.reject = function() {
                        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                        e.status = r.REJECTED, n.apply(void 0, t)
                    }
                }))
            };

            function i() {
                return new o
            }
        },
        884: (e, t, n) => {
            "use strict";
            var r, o;
            n.d(t, {
                isOnline: () => s,
                isActive: () => u,
                addActiveStateListener: () => c,
                addOnlineStateListener: () => p
            });
            var i = [],
                a = [];

            function s() {
                return r
            }

            function u() {
                return o
            }

            function c(e) {
                a.push(e)
            }

            function p(e) {
                i.push(e)
            }! function() {
                function e() {
                    o = !0, a.forEach((function(e) {
                        return e(o)
                    }))
                }

                function t() {
                    o = !1, a.forEach((function(e) {
                        return e(o)
                    }))
                }
                var n, s;
                var u = !1;
                window._rtb_app_features_ instanceof Array && (u = window._rtb_app_features_.indexOf("MIRO_VISIBILITY_CHANGED_EVENT") > -1), "hidden" in document ? (s = "hidden", n = "visibilitychange") : "mozHidden" in document ? (s = "mozHidden", n = "mozvisibilitychange") : "msHidden" in document ? (s = "msHidden", n = "msvisibilitychange") : "webkitHidden" in document && (s = "webkitHidden", n = "webkitvisibilitychange"), u ? (window.addEventListener("miroappvisibilitychanged", (function(n) {
                    n.detail && (n.detail.isVisible ? e() : t())
                }), !1), o = !document.hidden) : s && n ? (document.addEventListener(n, (function() {
                    document[s] ? t() : e()
                }), !1), o = !document[s]) : (window.addEventListener("focus", e, !1), window.addEventListener("blur", t, !1), o = document.hasFocus()), window.addEventListener("offline", (function() {
                    r = !1, i.forEach((function(e) {
                        return e(r)
                    }))
                }), !1), window.addEventListener("online", (function() {
                    r = !0, i.forEach((function(e) {
                        return e(r)
                    }))
                }), !1), r = window.navigator.onLine
            }()
        },
        808: (e, t, n) => {
            "use strict";
            n.d(t, {
                BrowserPostMessagesTransportSender: () => r
            });
            var r = function() {
                function e() {}
                return e.sendMessageToOpener = function(e) {
                    try {
                        window.opener && window.opener.origin === location.origin && window.opener.postMessage(e, location.origin)
                    } catch (e) {}
                }, e.sendMessageToParent = function(e, t) {
                    try {
                        window.parent && window.parent.postMessage(e, t)
                    } catch (e) {}
                }, e.sendMessageToOwnDomainParent = function(e) {
                    this.sendMessageToParent(e, window.origin)
                }, e
            }()
        },
        622: (e, t, n) => {
            "use strict";
            var r;

            function o() {
                return {
                    type: r.LOGIN_SUCCESS
                }
            }

            function i() {
                return {
                    type: r.USER_SIGNIN_REQUESTED
                }
            }

            function a() {
                return {
                    type: r.USER_SIGNUP_REQUESTED
                }
            }

            function s() {
                return {
                    type: r.LITE_OPEN_FAQ
                }
            }

            function u(e) {
                return {
                    type: r.LITE_REDIRECT_TO_BOARD,
                    boardId: e
                }
            }

            function c() {
                return {
                    type: r.CLIENT_SDK_LOADED
                }
            }

            function p(e, t) {
                return {
                    type: r.OPEN_URL,
                    url: e,
                    features: t
                }
            }

            function l(e, t, n) {
                return void 0 === n && (n = "_blank"), {
                    type: r.DOWNLOAD,
                    url: e,
                    filename: t,
                    target: n
                }
            }
            n.d(t, {
                    PostMessage: () => r,
                    loginSuccessPostMessage: () => o,
                    externalSignInPostMessage: () => i,
                    externalSignUpPostMessage: () => a,
                    liteOpenFaqPostMessage: () => s,
                    liteRedirectToBoardMessage: () => u,
                    clientSdkLoadedPostMessage: () => c,
                    openUrlPostMessage: () => p,
                    downloadPostMessage: () => l
                }),
                function(e) {
                    e.LOGIN_SUCCESS = "LOGIN_SUCCESS", e.TOKEN = "TOKEN", e.USER_SIGNIN_REQUESTED = "USER_SIGNIN_REQUESTED", e.USER_SIGNUP_REQUESTED = "USER_SIGNUP_REQUESTED", e.LITE_OPEN_FAQ = "LITE_OPEN_FAQ", e.LITE_REDIRECT_TO_BOARD = "LITE_REDIRECT_TO_BOARD", e.CLIENT_SDK_LOADED = "CLIENT_SDK_LOADED", e.OPEN_URL = "OPEN_URL", e.DOWNLOAD = "DOWNLOAD"
                }(r || (r = {}))
        },
        106: (e, t, n) => {
            "use strict";
            n.d(t, {
                setConnectionProvider: () => i,
                retryImport: () => s,
                retryPromise: () => u
            });
            var r, o = n(391);

            function i(e) {
                r = e
            }
            var a = {
                maxTries: 3,
                retryTimeout: 100,
                increaseTimeoutFactor: 0,
                maxRetryTimeout: 5e3,
                logErrorsToConsole: !1,
                waitUntilOnline: !1
            };

            function s(e, t) {
                return void 0 === t && (t = {}), u(e, Object.assign({
                    retryTimeout: 300,
                    increaseTimeoutFactor: 2,
                    waitUntilOnline: !0,
                    logErrorsToConsole: !0
                }, t))
            }

            function u(e, t) {
                void 0 === t && (t = {});
                var n = Object.assign({}, a, t),
                    i = 0,
                    s = 0,
                    u = n.retryTimeout,
                    c = (0, o.createDeferred)(),
                    p = function(e) {
                        c.resolve(e)
                    },
                    l = function(e) {
                        if (c.status !== o.DEFERRED_STATUS.REJECTED)
                            if (n.logErrorsToConsole && console.error(e), n.shouldTryAgain && !0 !== n.shouldTryAgain(e, i)) c.reject(e);
                            else if (i !== n.maxTries) {
                            i > 1 && u < n.maxRetryTimeout && (u *= n.increaseTimeoutFactor);
                            var t = Date.now() - s;
                            t < u ? setTimeout(d, u - t) : d()
                        } else c.reject(e)
                    },
                    d = function() {
                        var t = function() {
                            i++, s = Date.now(), e().then(p).catch(l)
                        };
                        n.waitUntilOnline && r ? (r.removeEventListener("online", d), r.isOnline() ? t() : r.addEventListener("online", d)) : t()
                    };
                return d(), c.promise
            }
        },
        588: (e, t, n) => {
            "use strict";
            n.d(t, {
                rtbSessionStorage: () => a
            });
            var r = n(3),
                o = {},
                i = "rtbSessionStorage",
                a = {
                    getItemNumber: function(e) {
                        var t;
                        try {
                            t = parseInt(sessionStorage.getItem(e) || "0", 10), r.log(i, "getItemNumber", e, t)
                        } catch (n) {
                            t = parseInt(o[e] || "0", 10), r.log(i, "catch getItemNumber", e, t)
                        }
                        return t
                    },
                    getItem: function(e) {
                        var t;
                        try {
                            t = sessionStorage.getItem(e) || "", r.log(i, "getItemNumber", t)
                        } catch (n) {
                            t = o[e] || "", r.log(i, "catch getItemNumber", t)
                        }
                        return t
                    },
                    removeItem: function(e) {
                        try {
                            sessionStorage.removeItem(e), r.log(i, "removeItem", e)
                        } catch (t) {
                            delete o[e], r.log(i, "catch removeItem", e)
                        }
                    },
                    setItem: function(e, t) {
                        try {
                            sessionStorage.setItem(e, t), r.log(i, "setItem", e, t)
                        } catch (n) {
                            o[e] = t, r.log(i, "catch setItem", e, t)
                        }
                    }
                }
        },
        58: (e, t, n) => {
            "use strict";
            n.d(t, {
                compareVersionNumbers: () => o,
                validateEmail: () => u,
                encodeHtmlSpecialChars: () => c,
                getParameterByName: () => p,
                convertSnakeCaseToCamelCase: () => l,
                getIndexForSorting: () => d,
                swapItemsInArray: () => f,
                getBoardIdFromURL: () => h,
                getParametersFromURL: () => m,
                getDomainFromEmail: () => y,
                getDomainNameFromEmail: () => v,
                getTopAndSecondLevelDomainFromEmail: () => _,
                capitaliseFirstLetter: () => E,
                space2plus: () => g,
                promiseTimeout: () => S,
                hasNotNullableFieldsPredicate: () => b
            });
            var r = n(117);

            function o(e, t) {
                var n = e.split("."),
                    r = t.split(".");

                function o(e) {
                    for (var t = 0; t < e.length; ++t)
                        if (n = e[t], !/^\d+$/.test(n)) return !1;
                    var n;
                    return !0
                }
                if (!o(n) || !o(r)) return NaN;
                for (var i = 0; i < n.length; ++i) {
                    if (r.length === i) return 1;
                    var a = parseInt(n[i], 10),
                        s = parseInt(r[i], 10);
                    if (a !== s) return a > s ? 1 : -1
                }
                return n.length != r.length ? -1 : 0
            }




            function u(e) {
                if (!e || e.endsWith(".")) return !1;
                var t, n, r = i.exec(e);
                return !!r && (!(!(t = r[1].trim()) || t.length > 64 || !s.test(t)) && (!!(n = r[2].trim()) && !(n.length > 253) && a.test(n)))
            }

            function c(e) {
                return e.replace(/&/gi, "&amp;").replace(/"/gi, "&quot;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")
            }

            function p(e, t) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null == n ? "" : decodeURIComponent(n[1])
            }

            function l(e) {
                return e.replace(/-([a-z])/g, (function(e) {
                    return e[1].toUpperCase()
                }))
            }

            function d(e, t) {
                var n = e.indexOf(t);
                return -1 === n ? Number.MAX_VALUE : n
            }

            function f(e, t, n) {
                var r = e.splice(t, 1)[0];
                e.splice(n, 0, r)
            }

            function h(e) {
                return e = function(e) {
                    var t = e.indexOf("?");
                    return -1 !== t && (e = e.slice(0, t)), e
                }(e), t = function(e) {
                    return -1 !== e.indexOf((0, r.appBoardRoute)()()) || -1 !== e.indexOf((0, r.appWebviewRoute)()) || -1 !== e.indexOf((0, r.appEmbedRoute)()()) || -1 !== e.indexOf((0, r.appLiveEmbedRoute)()())
                }(e) ? function(e) {
                    return e.split((0, r.appRootRoute)())[1].split("/")[1]
                }(e) : "", 11 === t.length && (t += "="), t;
                var t
            }

            function m(e) {
                var t = {},
                    n = (e = e || "").indexOf("?"); - 1 !== n && e.slice(n + 1).split("&").forEach((function(e) {
                    var n = e.split("="),
                        r = n[0],
                        o = n[1];
                    t[decodeURIComponent(r)] = decodeURIComponent(o || "")
                }));
                return t
            }

            function y(e) {
                var t = /@(.*)/.exec(e);
                return t ? t[1] : ""
            }

            function v(e) {
                var t = /@([^\.]*)/.exec(e);
                return t ? t[1] : ""
            }

            function _(e) {
                var t = /(\w+\.\w+)$/.exec(e);
                return t ? t[1] : ""
            }

            function E(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            function g(e) {
                return e.replace(/\s+/g, "+")
            }

            function S(e, t, n) {
                void 0 === n && (n = "");
                var r = void 0,
                    o = new Promise((function(t, o) {
                        r = setTimeout((function() {
                            o(new Error(n + "Promise: timed out."))
                        }), e)
                    }));
                return Promise.race([t, o]).then((function(e) {
                    return r && clearTimeout(r), e
                }))
            }

            function b(e) {
                return function(t) {
                    return !!t && t.hasOwnProperty(e) && null !== t[e]
                }
            }
        },
        238: (e, t, n) => {
            "use strict";
            n.d(t, {
                SplitIOLoader: () => a,
                default: () => s
            });
            var r = n(53),
                o = "SplitIO";
            r.register(o, (function() {
                return Promise.all([n.e(26), n.e(34), n.e(147)]).then(n.bind(n, 12898)).then((function(e) {
                    return e.default
                }))
            }));
            var i = r.createModuleDef(o),
                a = {
                    load: i,
                    isModuleLoaded: function() {
                        return r.loadedModules.has(o)
                    },
                    getModule: function() {
                        if (this.isModuleLoaded()) return r.loadedModules.get(o)
                    }
                };
            const s = i
        },
        13084: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    UserState: () => r
                }),
                function(e) {
                    e.REGISTERED = "REGISTERED", e.NOT_REGISTERED = "NOT_REGISTERED", e.TEMPORARY = "TEMPORARY", e.DELETED = "DELETED", e.SYSTEM = "SYSTEM"
                }(r || (r = {}))
        },
        13082: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    ApplicationLocation: () => r
                }),
                function(e) {
                    e.DASHBOARD = "dashboard", e.BOARD = "board", e.SETTINGS_2018 = "settings_2018"
                }(r || (r = {}))
        },
        13080: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AuthType: () => r
                }),
                function(e) {
                    e.BASIC = "BASIC", e.SSO = "SSO"
                }(r || (r = {}))
        },
        13081: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    FieldType: () => r
                }),
                function(e) {
                    function t(e, n) {
                        return 0 === Object.keys(e).length || 0 === Object.keys(n).length ? {} : Object.keys(e).concat(Object.keys(n)).reduce((function(r, o) {
                            var i = e[o],
                                a = n[o];
                            if (r[o]) return r;
                            if (i && a)
                                if (i.arrayWrapper) {
                                    var s = Math.max(i.limit, a.limit);
                                    r[o] = {
                                        limit: s,
                                        fields: t(i.fields, a.fields),
                                        arrayWrapper: !0
                                    }
                                } else i.array ? r[o] = {
                                    fields: t(i.fields, a.fields),
                                    array: !0
                                } : r[o] = t(i, a);
                            else !i && a ? r[o] = a : i && !a && (r[o] = i);
                            return r
                        }), {})
                    }

                    function n() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = e.pop();
                        return r ? e.reduceRight((function(e, n) {
                            return t(n, e)
                        }), r) : {}
                    }

                    function r(e) {
                        return 0 === Object.keys(e).length ? "" : Object.keys(e).map((function(t) {
                            var n = e[t],
                                o = "";
                            n.arrayWrapper && (o = ".limit(" + n.limit + ")");
                            var i = r(n.fields ? n.fields : n);
                            return "" + t + o + (i = i.length > 0 ? "{" + i + "}" : "")
                        })).join(",")
                    }
                    e.createFieldStr = function(e) {
                        return r(e)
                    }, e.mergeDescriptors = n, e.getArrayWrapperFieldDesc = function(e, t) {
                        return void 0 === e && (e = 10), {
                            arrayWrapper: !0,
                            limit: e,
                            fields: t
                        }
                    }, e.getDifDescriptors = function e(t, r) {
                        if (!t || !r) return r;
                        var o = Object.keys(t),
                            i = Object.keys(r);
                        if (0 !== o.length) {
                            if (0 === i.length) return {};
                            if (!t.arrayWrapper && !t.array) {
                                var a = !1,
                                    s = i.reduce((function(n, i) {
                                        if (o.includes(i)) {
                                            var s = t[i],
                                                u = r[i];
                                            if (u && s) {
                                                var c = e(s, u);
                                                c && (a = !0, n[i] = c)
                                            }
                                        } else a = !0, n[i] = r[i];
                                        return n
                                    }), {});
                                return a ? s : void 0
                            }
                            if (e(t.fields, r.fields)) {
                                var u = n(t.fields, r.fields);
                                return t.arrayWrapper ? {
                                    arrayWrapper: !0,
                                    fields: u,
                                    limit: t.limit
                                } : {
                                    array: !0,
                                    fields: u
                                }
                            }
                        }
                    }, e.getCommonFields = function e(t, r) {
                        return 0 === Object.keys(t).length && 0 === Object.keys(r).length ? {} : 0 === Object.keys(t).length ? r : 0 === Object.keys(r).length ? t : Object.keys(t).concat(Object.keys(r)).reduce((function(o, i) {
                            var a = t[i],
                                s = r[i];
                            if (a && s) {
                                var u = void 0;
                                if (a.arrayWrapper) {
                                    if (u = n(a.fields, s.fields)) u = {
                                        limit: Math.max(a.limit, s.limit),
                                        fields: u,
                                        arrayWrapper: !0
                                    }
                                } else a.array ? (u = n(a.fields, s.fields)) && (u = {
                                    fields: u,
                                    array: !0
                                }) : u = e(a, s);
                                u && (o || (o = {}), o[i] = u)
                            }
                            return o
                        }), void 0)
                    }
                }(r || (r = {}))
        },
        10: (e, t, n) => {
            "use strict";
            n.d(t, {
                bowser: () => o
            });
            var r = n(212),
                o = r
        },
        12904: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AppRoutePath: () => r
                }),
                function(e) {
                    e.ROOT = "", e.AUTH = "auth", e.BOARD = "board", e.DASHBOARD = "dashboard", e.SETTINGS = "settings", e.LIVE_EMBED = "live-embed", e.EMBED = "embed", e.WEBVIEW = "webview", e.UNKNOWN = "unknown"
                }(r || (r = {}))
        },
        13078: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    SessionStorageItems: () => r
                }),
                function(e) {
                    e.canOpenDesktopApp = "rtb_can_open_desktop_app", e.drawingFeedbackData = "rtb_drawing_feedback_data", e.liveEmbedLogin = "liveEmbedLogin", e.anonymousBoardMoving = "anonymousBoardMoving", e.tabletDrawingPromoData = "tabletDrawingPromoData", e.layout4NewUIBadgeAnimationShown = "layout4NewUIBadgeAnimationShown", e.teamNameFromOnboardingFlow = "onboarding.teamName"
                }(r || (r = {}))
        },
        13083: (e, t, n) => {
            "use strict";
            n.d(t, {
                BOARDS_FILTERS: () => r,
                BOARDS_DATA_CLASSIFICATION_FILTERS: () => o,
                BOARDS_SORTS: () => i,
                PERSONAL_SPACE_ID: () => c,
                ALL_BOARDS_FILTER_ID: () => p,
                OWNER_FILTER_ID: () => l,
                DEMO_BOARDS_PROJECT_ID: () => d,
                BOARD_COVER_SIZES: () => f,
                NOT_ATTACHED_TO_PROJECT_ID: () => h,
                DEFAULT_USER_AVATAR: () => m,
                DEFAULT_BOARD_AVATAR: () => y,
                FILTERS_LIST: () => v,
                DATA_CLASSIFICATION_DEFAULT_LIST: () => _,
                SORTS_LIST: () => E,
                InstalledApplicationsInfoDesc: () => g,
                BOARD_ITEM_FIELDS: () => O,
                BOARD_STARRED_ITEM_FIELDS: () => w,
                BASE_BOARD_FIELDS: () => R,
                CANVAS_BOARD_FIELDS: () => I,
                USER_LIST_TRIGGER_COUNT: () => P,
                TemplatesConstants: () => L,
                TemplatesCategoryId: () => u,
                convertTemplatesCategoryIdToContentfulId: () => C,
                convertQueryParamCategoryIdToSystemId: () => N,
                convertStringToTemplatesCategoryId: () => M,
                DEFAULT_EMAIL_USER_FIELDS: () => U,
                DEFAULT_MEMBER_DETAILS_FIELDS: () => k,
                PROJECT_INFO_FIELDS: () => B,
                SEARCH_SORT: () => x,
                CONFIRM_APP_INSTALL_URL: () => j,
                APP_INSTALL_COMPLETED_URL: () => F,
                DEFAULT_REDIRECT_URL: () => G
            });
            var r, o, i, a = n(674),
                s = n(13081);
            ! function(e) {
                e.ALL = "DEFAULT", e.OWNER = "OWNER", e.NOT_OWNER = "NOT_OWNER", e.ACTIVE = "ACTIVE", e.AVAILABLE_TO_EXTERNALS = "AVAILABLE_TO_EXTERNALS", e.PUBLIC_OWNED = "PUBLIC_OWNED"
            }(r || (r = {})),
            function(e) {
                e.ANY_DATA_CLASSICATION = "0", e.NO_DATA_CLASSIFICATION = "-1"
            }(o || (o = {})),
            function(e) {
                e.LAST_OPENED = "LAST_OPENED", e.LAST_MODIFIED = "LAST_MODIFIED", e.ALPHABETICALLY = "ALPHABETICALLY", e.LAST_CREATED = "LAST_CREATED"
            }(i || (i = {}));
            var u, c = "none",
                p = r.ALL,
                l = r.OWNER,
                d = "demo-boards",
                f = "size44,size180,size420",
                h = "none",
                m = "/app/images/general/user-ava.svg",
                y = "/app/images/general/board-ava.svg",
                v = [{
                    id: r.ALL,
                    title: "Owned by anyone"
                }, {
                    id: r.OWNER,
                    title: "Owned by me"
                }, {
                    id: r.NOT_OWNER,
                    title: "Not owned by me"
                }],
                _ = [{
                    id: o.ANY_DATA_CLASSICATION,
                    name: "Any classification"
                }, {
                    id: o.NO_DATA_CLASSIFICATION,
                    name: "No classification"
                }],
                E = [{
                    id: i.LAST_OPENED,
                    title: "Last opened"
                }, {
                    id: i.LAST_MODIFIED,
                    title: "Last modified"
                }, {
                    id: i.ALPHABETICALLY,
                    title: "Alphabetically"
                }, {
                    id: i.LAST_CREATED,
                    title: "Last created"
                }],
                g = {
                    id: {},
                    createdAt: {},
                    createdBy: {
                        id: {}
                    },
                    currentUserAuthorization: {},
                    application: {
                        appKey: {},
                        id: {},
                        name: {},
                        clientPlugin: {
                            enabled: {},
                            mainJSUri: {},
                            sdkVersion: {}
                        },
                        ignoreScopesForSDK: {},
                        allowRequiredScopesForGuestEditors: {},
                        marketplaceState: {},
                        scopes: {
                            array: !0,
                            fields: {
                                key: {}
                            }
                        }
                    },
                    trialData: {}
                },
                S = {
                    id: {},
                    createdAt: {},
                    role: {},
                    title: {},
                    name: {},
                    type: {},
                    currentUserPermission: {},
                    currentUserConnection: {
                        id: {},
                        isAccountCreator: {},
                        lastActivityDate: {}
                    },
                    features: {},
                    installedApplications: {
                        array: !0,
                        fields: g
                    },
                    integrations: {},
                    trial: {},
                    expired: {},
                    expirationDate: {},
                    limits: {},
                    notifications: {
                        array: !0,
                        fields: {}
                    },
                    organization: {
                        id: {},
                        title: {},
                        features: {},
                        type: {},
                        currentUserPermission: {},
                        sharingPolicySettings: {
                            sharingViaPublicLinkEnabled: {},
                            editingViaPublicLinkEnabled: {},
                            whiteListDomainsEnabled: {},
                            sharingWithExternalUsersEnabled: {}
                        },
                        security: {
                            accountsVisibilityRestrictionEnabled: {}
                        },
                        notifications: {
                            array: !0,
                            fields: {}
                        },
                        applicationsNeedApproval: {},
                        approvedApplications: {
                            array: !0,
                            fields: {
                                appKey: {},
                                id: {}
                            }
                        },
                        dataClassification: {},
                        hasLayout4: {}
                    },
                    abTests: {},
                    anonymousBoardContainer: {},
                    dontDoItAgainThatUnsafeButOkForLayout4: {},
                    dontDoItAgainThatUnsafeButOkForLayout4AhaMoment: {},
                    dontDoItAgainThatUnsafeButOkForLayout4Acquisition: {},
                    featurePackTrial: {
                        array: !0,
                        fields: {}
                    },
                    collaborationSettings: {}
                },
                b = (s.FieldType.createFieldStr(S), {
                    id: {},
                    title: {},
                    description: {},
                    lastModifyingUser: {},
                    lastModifyingUserName: {},
                    lastViewedByMeDate: {},
                    modifiedByMeDate: {},
                    owner: {},
                    ownerName: {},
                    picture: {},
                    selfLink: {},
                    starred: {},
                    trashed: {},
                    currentUserPermission: {},
                    currentUserContext: {
                        role: {},
                        permissions: {},
                        user: {
                            id: {},
                            name: {},
                            email: {},
                            emailConfirmed: {},
                            picture: {},
                            lastLoginDate: {},
                            state: {},
                            storedName: {}
                        },
                        directlyShared: {},
                        userConnectionId: {}
                    },
                    editorsCanChangePermissions: {},
                    participantsNumber: {},
                    permissions: s.FieldType.getArrayWrapperFieldDesc(500, {}),
                    invites: s.FieldType.getArrayWrapperFieldDesc(500, {}),
                    lockedByAccountExpired: {},
                    lockedByUsersPerBoardLimitExceeded: {},
                    lockedByUsersPerAccountLimitExceeded: {},
                    lockedByBoardsPerAccountLimitExceeded: {},
                    lockedByActiveBoardsPerAccountLimitExceeded: {},
                    usersPerBoard: {},
                    demo: {},
                    sharingPolicy: {},
                    sharingPolicyOnAccount: {},
                    sharingPolicyOnOrganization: {},
                    createdAt: {},
                    updatedAt: {},
                    integrations: {},
                    participant: {},
                    template: {},
                    account: S,
                    project: {
                        id: {},
                        title: {},
                        sharingPolicyOnAccount: {},
                        currentUser: {}
                    },
                    inviteToAccountAndBoardLink: {},
                    subscriptionMode: {},
                    copyAccessLevel: {},
                    restoredInfo: {},
                    publicVisitorsNamesAllowance: {},
                    hasPublicAccessPassword: {},
                    boardReferrerPlatform: {},
                    workshopModeStatus: {},
                    dataClassification: {}
                }),
                A = {
                    id: b.id,
                    createdAt: b.createdAt,
                    updatedAt: b.updatedAt,
                    demo: b.demo,
                    title: b.title,
                    account: {
                        id: {},
                        type: {},
                        expired: {},
                        organization: {
                            notifications: {
                                array: !0,
                                fields: {}
                            },
                            dataClassification: {},
                            features: {}
                        },
                        role: {},
                        features: {},
                        integrations: {},
                        trial: {},
                        anonymousBoardContainer: {},
                        currentUserPermission: {},
                        featurePackTrial: {
                            array: !0,
                            fields: {}
                        }
                    },
                    currentUserPermission: {
                        permissions: {}
                    },
                    currentUserContext: {
                        role: {}
                    },
                    template: b.template,
                    copyAccessLevel: b.copyAccessLevel,
                    publicVisitorsNamesAllowance: b.publicVisitorsNamesAllowance,
                    hasPublicAccessPassword: b.hasPublicAccessPassword,
                    boardReferrerPlatform: b.boardReferrerPlatform,
                    workshopModeStatus: b.workshopModeStatus
                },
                T = {
                    id: {},
                    title: {},
                    lastViewedByMeDate: {},
                    lastModifyingUser: {
                        id: {}
                    },
                    lastModifyingUserName: {},
                    onlineUsers: s.FieldType.getArrayWrapperFieldDesc(10, {
                        id: {},
                        name: {},
                        role: {},
                        email: {},
                        picture: {},
                        state: {}
                    }),
                    updatedAt: {},
                    picture: (0, a.__assign)({}, f.split(",").reduce((function(e, t) {
                        return e[t] = {}, e
                    }), {})),
                    owner: {
                        id: {},
                        name: {}
                    },
                    currentUserPermission: {
                        id: {},
                        role: {},
                        permissions: {}
                    },
                    currentUserContext: {
                        id: {},
                        role: {},
                        permissions: {},
                        directlyShared: {}
                    },
                    demo: {},
                    sharingPolicyOnAccount: {},
                    participant: {},
                    project: {
                        title: {}
                    },
                    account: {
                        id: {},
                        features: {},
                        organization: {
                            features: {}
                        },
                        type: {},
                        trial: {}
                    },
                    lockedByActiveBoardsPerAccountLimitExceeded: {},
                    starred: {},
                    trashedDate: {},
                    deletionDate: {}
                },
                O = s.FieldType.createFieldStr(T),
                w = s.FieldType.createFieldStr((0, a.__assign)((0, a.__assign)({}, T), {
                    account: (0, a.__assign)((0, a.__assign)({}, T.account), {
                        limits: {}
                    })
                })),
                R = s.FieldType.createFieldStr(b),
                I = s.FieldType.createFieldStr(A),
                P = 20,
                L = {
                    RECENT_CATEGORY_TITLE: "Recent",
                    POPULAR_CATEGORY_TITLE: "Popular",
                    All_CATEGORY_TITLE: "All templates",
                    RECOMMENDED_CATEGORY_TITLE: "Recommended",
                    PERSONAL_CATEGORY_TITLE: "Personal",
                    SHARE_CATEGORY_TITLE: "Shared",
                    MIROVERSE: "Miroverse"
                };

            function C(e) {
                switch (e) {
                    case u.POPULAR_CATEGORY:
                        return "6wgoWurAaYbpSnnvIyk01a";
                    case u.MIROVERSE:
                        return "1PYzVuNmseramNMCLDQR5Z";
                    case u.MEETINGS_AND_WORKSHOPS:
                        return "2t5JT24xgmf3GzAMAm4RkP";
                    case u.IDEATION_AND_BRAINSTORMING:
                        return "5RpiOE7jb49vucIxjPdRy4";
                    case u.STRATEGY_AND_PLANNING:
                        return "6H5Rs0l7RWvltE9KsqNAlB";
                    case u.RESEARCH_AND_DESIGN:
                        return "7KhXPWCqZtfs2IQLEwldR";
                    case u.AGILE_WORKFLOWS:
                        return "3hDublaSEP7vsNyM7WF59J";
                    case u.MAPPING_AND_DIAGRAMMING:
                        return "152wkNzpPfYhz8YbJ3Rvwq";
                    case u.BUILDING_BLOCKS:
                        return "3sFC1kvy7nQBEykBJ8N8cQ";
                    case u.PERSONAL:
                        return u.PERSONAL;
                    case u.ORGANIZATION_AND_TEAM:
                        return u.ORGANIZATION_AND_TEAM;
                    case u.RECENT:
                        return u.RECENT;
                    default:
                        return u.ALL
                }
            }! function(e) {
                e.ALL = "1", e.RECENT = "2", e.PERSONAL = "4", e.ORGANIZATION_AND_TEAM = "5", e.RECOMMENDED = "6", e.IDEATION_AND_BRAINSTORMING = "7", e.RESEARCH_AND_DESIGN = "8", e.AGILE_WORKFLOWS = "9", e.STRATEGY_AND_PLANNING = "10", e.MAPPING_AND_DIAGRAMMING = "11", e.MEETINGS_AND_WORKSHOPS = "12", e.BUILDING_BLOCKS = "13", e.MIROVERSE = "Miroverse", e.POPULAR_CATEGORY = "popular_category", e.OTHER = "Other"
            }(u || (u = {}));
            var D = {
                    all_templates: u.ALL,
                    recent: u.RECENT,
                    popular: u.POPULAR_CATEGORY,
                    miroverse: u.MIROVERSE,
                    building_blocks: u.BUILDING_BLOCKS,
                    meetings_and_workshops: u.MEETINGS_AND_WORKSHOPS,
                    ideation_and_brainstorming: u.IDEATION_AND_BRAINSTORMING,
                    strategy_and_planning: u.STRATEGY_AND_PLANNING,
                    research_and_design: u.RESEARCH_AND_DESIGN,
                    agile_workflows: u.AGILE_WORKFLOWS,
                    charts_and_diagrams: u.MAPPING_AND_DIAGRAMMING,
                    personal: u.PERSONAL,
                    shared: u.ORGANIZATION_AND_TEAM
                },
                N = function(e) {
                    return C(D[e])
                };

            function M(e) {
                switch (e) {
                    case "Popular":
                        return u.POPULAR_CATEGORY;
                    case "Personal":
                        return u.PERSONAL;
                    case "Shared":
                        return u.ORGANIZATION_AND_TEAM;
                    case "Miroverse":
                        return u.MIROVERSE;
                    case "Agile Workflows":
                        return u.AGILE_WORKFLOWS;
                    case "Research & Design":
                        return u.RESEARCH_AND_DESIGN;
                    case "Meetings & Workshops":
                        return u.MEETINGS_AND_WORKSHOPS;
                    case "Ideation & Brainstorming":
                        return u.IDEATION_AND_BRAINSTORMING;
                    case "Strategy & Planning":
                        return u.STRATEGY_AND_PLANNING;
                    case "Mapping & Diagramming":
                        return u.MAPPING_AND_DIAGRAMMING;
                    default:
                        return u.ALL
                }
            }
            var x, U = {
                    organizationConnection: {
                        deactivated: {},
                        user: {
                            name: {},
                            email: {},
                            state: {}
                        }
                    }
                },
                k = {
                    id: {},
                    type: {},
                    email: {},
                    expirationDate: {},
                    name: {},
                    role: {},
                    license: {},
                    picture: {},
                    accountsNumber: {},
                    accounts: {
                        array: !0,
                        fields: {
                            id: {},
                            name: {}
                        }
                    },
                    ownedResourcesInfo: {},
                    lastActiveDate: {},
                    deactivated: {},
                    invitedBy: {},
                    invitationDate: {},
                    organizationUserAttributes: {}
                },
                B = {
                    sharingPolicyOnAccount: {},
                    currentUser: {
                        id: {},
                        name: {},
                        email: {},
                        role: {},
                        picture: {},
                        projectPermissions: {}
                    },
                    ownerConnection: {
                        accountConnection: {
                            id: {},
                            account: {
                                id: {}
                            },
                            organizationConnection: {
                                license: {},
                                deactivated: {},
                                role: {}
                            }
                        },
                        user: {
                            name: {},
                            id: {},
                            email: {},
                            picture: {}
                        },
                        role: {},
                        projectPermissions: {}
                    },
                    accountId: {},
                    title: {},
                    id: {}
                };
            ! function(e) {
                e.LAST_OPENED_EXACT = "LAST_OPENED_EXACT", e.LAST_MODIFIED = "LAST_MODIFIED"
            }(x || (x = {}));
            var j = "/confirm-app-install/",
                F = "/app-install-completed/",
                G = j
        },
        173: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n;
                try {
                    n = "production" !== e.env.NODE_ENV || "beta" === (null === t || void 0 === t ? void 0 : t.version)
                } catch (e) {
                    n = !1
                }
                return n
            }
            n.d(t, {
                ModuleStatus: () => m,
                addModule: () => d,
                connectStores: () => E,
                createEmptyStore: () => l,
                emptyAction: () => y.emptyAction,
                emptySelector: () => y.emptySelector,
                extendStore: () => f,
                hasDevTools: () => r,
                subscribeMemoized: () => y.subscribeMemoized,
                subscribeOnce: () => y.subscribeOnce,
                unsetModule: () => h
            });
            var o = n(6223),
                i = n(674),
                a = n(12905);
            var s, u = function() {
                return {}
            };
            ! function(e) {
                e.INIT = "[STORE] INIT", e.EXTEND = "[STORE] EXTEND", e.INJECT_MIDDLEWARE = "[STORE] INJECT_MIDDLEWARE", e.INJECT_MIDDLEWARE_SUCCESS = "[STORE] INJECT_MIDDLEWARE_SUCCESS", e.REMOVE_MIDDLEWARE = "[STORE] REMOVE_MIDDLEWARE", e.REMOVE_MIDDLEWARE_SUCCESS = "[STORE] REMOVE_MIDDLEWARE_SUCCESS", e.INJECT_TAP = "[STORE] INJECT_TAP", e.INJECT_TAP_SUCCESS = "[STORE] INJECT_TAP_SUCCESS", e.REMOVE_TAP = "[STORE] REMOVE_TAP", e.REMOVE_TAP_SUCCESS = "[STORE] REMOVE_TAP_SUCCESS"
            }(s || (s = {}));
            var c = function(e) {
                    var t = e.getState,
                        n = e.dispatch,
                        r = {};
                    return function(e) {
                        return function(o) {
                            var a = (0, i.__assign)({}, o);
                            switch (o.type) {
                                case s.INJECT_MIDDLEWARE:
                                    if (!o.payload) return;
                                    var u = o.payload.key,
                                        c = o.payload.items.filter((function(e) {
                                            return "function" === typeof e
                                        }));
                                    if (!(u && Array.isArray(c) && c.length)) return;
                                    r[u] = c.map((function(e) {
                                        return e({
                                            getState: t,
                                            dispatch: n
                                        })
                                    }));
                                    var p = c.map((function(e) {
                                        return e.name || ""
                                    }));
                                    a = function(e, t) {
                                        return {
                                            type: s.INJECT_MIDDLEWARE_SUCCESS,
                                            payload: {
                                                key: e,
                                                items: t
                                            }
                                        }
                                    }(o.payload.key, p);
                                    break;
                                case s.REMOVE_MIDDLEWARE:
                                    if (!o.payload || !o.payload.key) return;
                                    u = o.payload.key;
                                    delete r[u], a = function(e) {
                                        return {
                                            type: s.REMOVE_MIDDLEWARE_SUCCESS,
                                            payload: {
                                                key: e
                                            }
                                        }
                                    }(o.payload.key)
                            }
                            setTimeout((function() {
                                return Object.keys(r).forEach((function(e) {
                                    r[e] && Array.isArray(r[e]) && r[e].length && r[e].forEach((function(e) {
                                        return e((function() {}))(o)
                                    }))
                                }))
                            }), 0), e(a)
                        }
                    }
                },
                p = function(e) {
                    var t = e.getState,
                        n = e.dispatch,
                        r = {};
                    return function(e) {
                        return function(o) {
                            var a = (0, i.__assign)({}, o),
                                u = [];
                            switch (o.type) {
                                case s.INJECT_TAP:
                                    if (!o.payload) return;
                                    var c = o.payload,
                                        p = c.key,
                                        l = c.items;
                                    if (!(p && Array.isArray(l) && l.length)) return;
                                    r[p] = l.map((function(e) {
                                        return e({
                                            getState: t,
                                            dispatch: n
                                        })
                                    }));
                                    var d = o.payload.items.map((function(e) {
                                        return e.name || "unknown"
                                    }));
                                    a = function(e, t) {
                                        return {
                                            type: s.INJECT_TAP_SUCCESS,
                                            payload: {
                                                key: e,
                                                items: t
                                            }
                                        }
                                    }(o.payload.key, d);
                                    break;
                                case s.REMOVE_TAP:
                                    if (!o.payload || !o.payload.key) return;
                                    p = o.payload.key;
                                    delete r[p], a = function(e) {
                                        return {
                                            type: s.REMOVE_TAP_SUCCESS,
                                            payload: {
                                                key: e
                                            }
                                        }
                                    }(o.payload.key)
                            }
                            u = Object.keys(r).reduce((function(e, t) {
                                if (!(r[t] && Array.isArray(r[t]) && r[t].length)) return e;
                                var n = r[t].map((function(e) {
                                    return e(o)
                                })).filter((function(e) {
                                    return !!e
                                }));
                                return 0 === n.length ? e : e.concat(n)
                            }), []), e(a), u.length && (u.forEach((function(e) {
                                return e()
                            })), u = [])
                        }
                    }
                },
                l = function(e) {
                    var t = e.createStore,
                        n = e.applyEnhancer,
                        r = e.devToolsName,
                        l = function(e) {
                            var t = (0, i.__assign)({}, e),
                                n = Object.keys(t).length ? (0, a.combineReducers)(t) : u,
                                r = [],
                                o = null;
                            return {
                                getReducerMap: function() {
                                    return t
                                },
                                reduce: function(e, t) {
                                    if (r.length > 0) {
                                        e = (0, i.__assign)({}, e);
                                        for (var a = 0, s = r; a < s.length; a++) delete e[u = s[a]];
                                        r = []
                                    }
                                    if (o) {
                                        for (var u in o) e[u] = o[u];
                                        o = null
                                    }
                                    return n(e, t)
                                },
                                add: function(e, r, i) {
                                    e && !t[e] && (t[e] = r, i && (o || (o = {}), o[e] = i), n = (0, a.combineReducers)(t))
                                },
                                remove: function(e) {
                                    e && t[e] && (delete t[e], r.push(e), n = Object.keys(t).length ? (0, a.combineReducers)(t) : u)
                                }
                            }
                        }({}),
                        d = [p, c],
                        f = r ? (0, o.composeWithDevTools)({
                            name: r,
                            instanceId: r
                        }) : null,
                        h = t(l.reduce, {}, f ? f(n.apply(void 0, d)) : n.apply(void 0, d));
                    return h.injectMiddleware = function(e, t) {
                        "string" === typeof e && Array.isArray(t) && t.length > 0 && h.dispatch(function(e, t) {
                            return {
                                type: s.INJECT_MIDDLEWARE,
                                payload: {
                                    key: e,
                                    items: t
                                }
                            }
                        }(e, t))
                    }, h.removeMiddleware = function(e) {
                        "string" === typeof e && h.dispatch(function(e) {
                            return {
                                type: s.REMOVE_MIDDLEWARE,
                                payload: {
                                    key: e
                                }
                            }
                        }(e))
                    }, h.injectTaps = function(e, t) {
                        "string" === typeof e && Array.isArray(t) && t.length > 0 && h.dispatch(function(e, t) {
                            return {
                                type: s.INJECT_TAP,
                                payload: {
                                    key: e,
                                    items: t
                                }
                            }
                        }(e, t))
                    }, h.removeTaps = function(e) {
                        "string" === typeof e && h.dispatch(function(e) {
                            return {
                                type: s.REMOVE_TAP,
                                payload: {
                                    key: e
                                }
                            }
                        }(e))
                    }, h.injectReducer = function(e, t, n) {
                        l.add(e, t, n)
                    }, h.removeReducer = function(e) {
                        l.remove(e)
                    }, h
                };

            function d(e, t, n) {
                var r = t.id,
                    o = t.reducer,
                    i = t.middlewares,
                    a = t.experimentalTaps,
                    u = t.children,
                    c = (null === n || void 0 === n ? void 0 : n.parentId) ? n.parentId + "/" + r : r,
                    p = !1;
                if ("string" === typeof c && c) {
                    o && Object.keys(o).forEach((function(n) {
                        o[n] && "function" === typeof o[n] && (t.initialState ? e.injectReducer(n, o[n], t.initialState[n]) : e.injectReducer(n, o[n]), p = !0)
                    }));
                    var l, d = i || [];
                    u && Array.isArray(u) && u.length > 0 && u.forEach((function(t) {
                        d.push(t(e, c))
                    })), d.length > 0 && (e.injectMiddleware(c, d), p = !0), a && Array.isArray(a) && a.length > 0 && (e.injectTaps(c, a), p = !0), p && e.dispatch((l = c, {
                        type: s.EXTEND,
                        payload: {
                            moduleId: l
                        }
                    }))
                }
            }

            function f(e, t, n) {
                return d(e, t, n), e
            }

            function h(e, t) {
                t.reducer && e.removeReducer(t.id), t.middlewares && e.removeMiddleware(t.id), t.experimentalTaps && e.removeTaps(t.id)
            }
            var m, y = n(989);
            ! function(e) {
                e.NOT_INITIALIZED = "NOT_INITIALIZED", e.READY = "READY", e.MOUNTED = "MOUNTED"
            }(m || (m = {}));
            var v = n(307),
                _ = window || {};

            function E(e, t, n, o) {
                var s, u = t.id;
                var c, p = function(e) {
                        throw new Error("\n\t\t\tDispatching while constructing your middleware is not allowed\n\t\t\tOther middleware would not be applied to this dispatch, action type is: [" + e.type + "]\n\t\t")
                    },
                    d = (c = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return p.apply(void 0, e)
                    }, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var o = t.apply(void 0, n),
                                    s = function() {
                                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                                    },
                                    u = {
                                        getState: o.getState,
                                        dispatch: c
                                    },
                                    p = e.map((function(e) {
                                        return e(u)
                                    }));
                                return s = a.compose.apply(void 0, p)(o.dispatch), (0, i.__assign)((0, i.__assign)({}, o), {
                                    dispatch: s
                                })
                            }
                        }
                    }),
                    h = f(l({
                        createStore: a.createStore,
                        applyEnhancer: d,
                        devToolsName: r(v, _.rtb) ? u : ""
                    }), t),
                    m = Object.keys(o).reduce((function(e, t) {
                        return e[o[t]] = !0, e
                    }), {});

                function y(e) {
                    return m[e.type]
                }
                var E = !1;
                p = function(t) {
                    y(t) && !E ? e.dispatch(t) : h.dispatch(t)
                };
                var g = n(e.getState()),
                    S = h.getState(),
                    b = (0, i.__assign)((0, i.__assign)({}, S), g);

                function A(t) {
                    var r = null;
                    if (t.withParent) {
                        var o = n(e.getState());
                        o !== g && (g = o, r = (0, i.__assign)((0, i.__assign)({}, g), S))
                    }
                    if (t.withChild) {
                        var a = h.getState();
                        a !== S && (S = a, r = (0, i.__assign)((0, i.__assign)({}, g), S))
                    }
                    return r && (b = r), r
                }
                e.injectMiddleware(u, [function() {
                    return function() {
                        return function(e) {
                            y(e) && (E = !0, p(e), E = !1)
                        }
                    }
                }]);
                var T = [],
                    O = e.subscribe((function() {
                        A({
                            withParent: !0
                        }) && T.forEach((function(e) {
                            return e()
                        }))
                    })),
                    w = h.subscribe((function() {
                        A({
                            withChild: !0
                        }) && T.forEach((function(e) {
                            return e()
                        }))
                    }));
                return (s = {
                    dispatch: p,
                    subscribe: function(e) {
                        T.push(e);
                        var t = !0;
                        return function() {
                            if (t) {
                                t = !1;
                                var n = T.indexOf(e); - 1 !== n && T.splice(n, 1)
                            }
                        }
                    },
                    getState: function() {
                        return b
                    },
                    replaceReducer: function() {}
                })[Symbol.observable] = function() {
                    var t, n = e.subscribe,
                        r = h.subscribe;
                    return t = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                            function t() {
                                if (e.next) {
                                    var t = A({
                                        withParent: !0,
                                        withChild: !0
                                    });
                                    t && e.next(t)
                                }
                            }
                            t();
                            var o = n(t),
                                i = r(t);
                            return {
                                unsubscribe: function() {
                                    o(), i()
                                }
                            }
                        }
                    }, t[Symbol.observable] = function() {
                        return this
                    }, t
                }, s.destroy = function() {
                    w && w(), O && O(), e.removeMiddleware(u)
                }, s
            }
        },
        989: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                var r = t(e);
                return e.subscribe((function() {
                    var o = t(e);
                    o !== r && n(e, r = o)
                }))
            }

            function o(e, t, n) {
                var r = t(e),
                    o = e.subscribe((function() {
                        var i = t(e);
                        i !== r && (o(), n(i))
                    }))
            }
            n.d(t, {
                subscribeMemoized: () => r,
                subscribeOnce: () => o,
                emptySelector: () => a,
                emptyAction: () => s
            });
            var i = {},
                a = function() {
                    return i
                },
                s = {}
        },
        2444: (e, t, n) => {
            "use strict";
            n.d(t, {
                createUrlSearchParams: () => N,
                getClippedUrl: () => D,
                getURLs: () => L,
                getUrlHost: () => C,
                hasScheme: () => O,
                hasStandardSchemes: () => w,
                isAbsoluteUrl: () => I,
                isDataImageUrl: () => T,
                isHttpOrHttpsUrl: () => b,
                isHttpsUrl: () => A,
                isRelativeUrl: () => P,
                isSimpleUrl: () => R,
                isURL: () => S,
                jsProtocol: () => d,
                lastUrlRegExp: () => _,
                standardSchemes: () => f,
                urlRegExp: () => m,
                urlRegexStr: () => h
            });
            var r = n(610),
                o = n.n(r),
                i = "(?:(?:[a-z]+:)?//)",
                a = "(?:\\S+(?::\\S*)?@)?",
                s = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                u = "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)",
                c = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
                p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}(?:\\-{2}[a-z0-9]{4})?))\\.?",
                l = "(?::\\d{2,5})?",
                d = "javascript",
                f = ["http", "https", "mailto"],
                h = "(?:" + i + "|www\\.)" + a + "(?:localhost|" + s + "|" + u + c + p + ")" + l + "(?:[/?#](?:[^\\s'\"();]*[^\\s'\"();.,])?)?",
                m = new RegExp("(" + h + ")", "ig"),
                y = new RegExp("(?:^(?:[a-z]+:\\/\\/)(?:[^\\s]+)$)", "i"),
                v = new RegExp("^([a-z][a-zd+-.]*:)?//", "i"),
                _ = new RegExp("(" + h + ")$"),
                E = new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}(?:\\-{2}[a-z0-9]{4})?))\\.?)(?::\\d{2,5})?(?:[/?#](?:[^\\s'\":;]*[^\\s,'\":;])?)?$)", "i"),
                g = new RegExp("^([a-z](?:[a-z\\d+\\-.])*):", "i");

            function S(e) {
                return E.test(e)
            }

            function b(e) {
                try {
                    var t = new URL(e).protocol;
                    return "http:" === t || "https:" === t
                } catch (e) {
                    return !1
                }
            }

            function A(e) {
                try {
                    return "https:" === new URL(e).protocol
                } catch (e) {
                    return !1
                }
            }

            function T(e) {
                return e.startsWith("data:image/")
            }

            function O(e, t) {
                var n = g.exec(e.toLowerCase());
                return !(!n || !n[1]) && (t ? t.includes(n[1]) : !!n[1])
            }

            function w(e) {
                return O(e, f)
            }

            function R(e) {
                return y.test(e)
            }

            function I(e) {
                return v.test(e)
            }

            function P(e) {
                return !I(e) && !O(e)
            }
            var L = o()((function(e) {
                return e.match(m) || []
            }));

            function C(e) {
                var t = e.split("/");
                return t.length > 2 ? t[2] : ""
            }

            function D(e) {
                if (I(e)) {
                    var t = e.replace("?", "/"),
                        n = t.split("/");
                    return n.length > 2 && (t = n[2].includes("google.") ? n.slice(0, 4).join("/") : n.slice(0, 3).join("/")), t
                }
                return ""
            }

            function N(e) {
                return new URLSearchParams("string" === typeof e ? e : Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&"))
            }
        },
        12772: (e, t, n) => {
            "use strict";
            n.d(t, {
                fitTextAreaHeight: () => r
            });
            var r = function(e, t, n) {
                void 0 === n && (n = 1), e.rows = n, e.rows = n + Math.ceil((e.scrollHeight - t) / t)
            }
        },
        12770: (e, t, n) => {
            var r;
            ! function(o) {
                "use strict";
                var i = o.HTMLCanvasElement && o.HTMLCanvasElement.prototype,
                    a = o.Blob && function() {
                        try {
                            return Boolean(new Blob)
                        } catch (e) {
                            return !1
                        }
                    }(),
                    s = a && o.Uint8Array && function() {
                        try {
                            return 100 === new Blob([new Uint8Array(100)]).size
                        } catch (e) {
                            return !1
                        }
                    }(),
                    u = o.BlobBuilder || o.WebKitBlobBuilder || o.MozBlobBuilder || o.MSBlobBuilder,
                    c = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
                    p = (a || u) && o.atob && o.ArrayBuffer && o.Uint8Array && function(e) {
                        var t, n, r, o, i, p, l, d, f;
                        if (!(t = e.match(c))) throw new Error("invalid data URI");
                        for (n = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"), r = !!t[4], o = e.slice(t[0].length), i = r ? atob(o) : decodeURIComponent(o), p = new ArrayBuffer(i.length), l = new Uint8Array(p), d = 0; d < i.length; d += 1) l[d] = i.charCodeAt(d);
                        return a ? new Blob([s ? l : p], {
                            type: n
                        }) : ((f = new u).append(p), f.getBlob(n))
                    };
                o.HTMLCanvasElement && !i.toBlob && (i.mozGetAsFile ? i.toBlob = function(e, t, n) {
                    var r = this;
                    setTimeout((function() {
                        n && i.toDataURL && p ? e(p(r.toDataURL(t, n))) : e(r.mozGetAsFile("blob", t))
                    }))
                } : i.toDataURL && p && (i.toBlob = function(e, t, n) {
                    var r = this;
                    setTimeout((function() {
                        e(p(r.toDataURL(t, n)))
                    }))
                })), void 0 === (r = function() {
                    return p
                }.call(t, n, t, e)) || (e.exports = r)
            }(window)
        },
        12769: () => {
            ! function() {
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }()
        },
        12768: () => {
            ! function(e) {
                "use strict";
                var t = e.prototype,
                    n = t.parseFromString;
                try {
                    if ((new e).parseFromString("", "text/html")) return
                } catch (e) {}
                t.parseFromString = function(e, t) {
                    if (/^\s*text\/html\s*(?:;|$)/i.test(t)) {
                        var r, o = document.implementation.createHTMLDocument(""),
                            i = o.documentElement;
                        return i.innerHTML = e, r = i.firstElementChild, 1 === i.childElementCount && "html" === r.localName.toLowerCase() && o.replaceChild(r, i), o
                    }
                    return n.apply(this, arguments)
                }
            }(DOMParser)
        },
        12771: () => {
            if (!("classList" in SVGElement.prototype)) {
                function e(e, t) {
                    e.setAttribute("class", e.getAttribute("class") + " " + t)
                }

                function t(e, t) {
                    var n = e.getAttribute("class").replace(new RegExp("(\\s|^)" + t + "(\\s|$)", "g"), "$2");
                    e.setAttribute("class", n)
                }
                Object.defineProperty(SVGElement.prototype, "classList", {
                    get: function() {
                        return this._classList || function(n) {
                            var r = {
                                contains: function(e) {
                                    return -1 !== n.className.baseVal.split(" ").indexOf(e)
                                },
                                add: function(t) {
                                    n.classList.contains(t) || e(n, t)
                                },
                                remove: function(e) {
                                    n.classList.contains(e) && t(n, e)
                                },
                                toggle: function(r) {
                                    n.classList.contains(r) ? t(n, r) : e(n, r)
                                }
                            };
                            Object.defineProperty(n, "_classList", {
                                value: r,
                                writable: !1,
                                enumerable: !1
                            })
                        }(this), this._classList
                    },
                    enumerable: !0
                })
            }
            "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            })
        },
        3: function(e, t) {
            var n, r, o;
            r = [], n = function() {
                var e = [],
                    t = {},
                    n = {},
                    r = !1,
                    o = [],
                    i = null,
                    a = null,
                    s = parseInt(d("cpos", 0)),
                    u = "" != d("console", ""),
                    c = d("log", ""),
                    p = [{
                        left: 0,
                        right: "auto",
                        top: 0,
                        bottom: "auto"
                    }, {
                        left: "auto",
                        right: 0,
                        top: 0,
                        bottom: "auto"
                    }, {
                        left: "auto",
                        right: 0,
                        top: "auto",
                        bottom: 0
                    }, {
                        left: 0,
                        right: "auto",
                        top: "auto",
                        bottom: 0
                    }];

                function l(e, t) {
                    u && (i ? E(e, t) : o.push({
                        ch: e,
                        args: t
                    }))
                }

                function d(e, t) {
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                    return null == n ? t : decodeURIComponent(n[1].replace(/\+/g, " "))
                }

                function f(e) {
                    return t.hasOwnProperty(e) || (t.ch = h(e)), t.ch
                }

                function h(e) {
                    for (var t = 0, n = 0; t < e.length; n = e.charCodeAt(t++) + ((n << 5) - n));
                    t = 0;
                    for (var r = "#"; t < 3; r += ("00" + (n >> 8 * t++ & 255).toString(16)).slice(-2));
                    return r
                }

                function m(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.childNodes
                }

                function y() {
                    function e() {
                        if (document.body) {
                            var t = m('<div id="consoleContainer" style="position:absolute; top:0; left:0; width:250px; z-index:100000;"><div id="consoleText" no-prevent-default="true" style="padding:5px; overflow-y: scroll; -webkit-overflow-scrolling: touch;  height:300px; background:#EEE; border: 1px solid #999; touch-action: pan-y"></div><div id="consoleChangePos" style="height:40px; background:#DDD; border: 1px solid #999; text-align: center; line-height: 40px">CHANGE POSITION</div><div id="consoleClear" style="height:40px; background:#DDD; border: 1px solid #999; text-align: center; line-height: 40px">CLEAR</div></div>')[0];
                            document.body.appendChild(t), i = document.getElementById("consoleContainer"), a = document.getElementById("consoleText");
                            var n = "ontouchstart" in document ? "touchstart" : "click";
                            document.getElementById("consoleChangePos").addEventListener(n, (function(e) {
                                v()
                            })), document.getElementById("consoleClear").addEventListener(n, (function(e) {
                                a.innerHTML = ""
                            })), _(s), o.forEach((function(e) {
                                E(e.ch, e.args)
                            })), o = null
                        } else setTimeout(e, 10)
                    }
                    setTimeout(e, 10)
                }

                function v() {
                    _(s = s == p.length - 1 ? 0 : s + 1)
                }

                function _(e) {
                    var t = p[e];
                    for (var n in t) i.style[n] = t[n]
                }

                function E(e, t) {
                    a.innerHTML += e + ":: " + t + "<br>", a.scrollTop = a.scrollHeight
                }
                return u && (y(), window.onerror = function(e, t, n) {
                    return l("Error", [e, t, n]), !1
                }), c && (e = c.split(",")), n.log = function() {
                    var e = arguments[0];
                    if (n.hasChannel(e)) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        console.log.apply(this, ["%c" + e, "color: " + f(e)].concat(t)), l(e, t)
                    }
                }, n.getLogger = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return function() {
                        n.log.apply(this, e.concat(Array.prototype.slice.call(arguments)))
                    }
                }, n.all = function() {
                    r = !0
                }, n.list = function() {}, n.enabled = function() {
                    return "" != c
                }, n.activate = function(t) {
                    e = t.split(",")
                }, n.addChannel = function(t) {
                    e.push(t)
                }, n.removeChannel = function(t) {
                    e = e.filter((function(e) {
                        return e !== t
                    }))
                }, n.hasChannel = function(t) {
                    return r || e.length && -1 !== e.indexOf(t)
                }, window.rtbLogger = n, n
            }, void 0 === (o = "function" === typeof n ? n.apply(t, r) : n) || (e.exports = o)
        },
        6220: function(e, t, n) {
            var r, o, i, a, s = n(212);
            a = function(e) {
                return {
                    isUnsupportedBrowser: function() {
                        return !e.isPartnerApp && (this.isOldChrome() || this.isOldFirefox() || this.isOldOpera() || this.isOldApple() || this.isOldAndroid() || this.isIe())
                    },
                    isIe: function() {
                        return e.msie
                    },
                    isOldChrome: function() {
                        return e.chrome && e.version < 35
                    },
                    isOldOpera: function() {
                        return e.opera && e.version < 26
                    },
                    isOldFirefox: function() {
                        return !!e.firefox && !e.ios && e.version < 31
                    },
                    isOldAndroid: function() {
                        if (e.android && !(e.chrome && e.version >= 16)) {
                            var t;
                            try {
                                if (e.osversion) {
                                    var n = e.osversion.split("."),
                                        r = parseInt(n[0]),
                                        o = parseInt(n[1]);
                                    t = r < 4 || 4 == r && o < 4
                                } else t = !(e.firefox && e.tablet)
                            } catch (e) {
                                t = !1
                            }
                            return t
                        }
                        return !1
                    },
                    isOldApple: function() {
                        if (e.ios || e.safari) {
                            var t = e.ios ? "osversion" : "version";
                            return parseInt(e[t].split(".")[0]) < 9
                        }
                        return !1
                    }
                }
            }(s), o = [], void 0 === (i = "function" === typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)
        },
        212: function(e, t, n) {
            var r;
            r = function() {
                var e = !0,
                    t = ["name", "version", "osversion", "appVersion"],
                    n = ["a", "c", "x", "msie", "msedge", "chrome", "firefox", "safari", "opera", "yandexbrowser", "webkit", "gecko", "tablet", "mobile", "ios", "android", "mac", "ipados", "embedGenerator", "uwpApp", "uwpDesktopApp", "uwpTeamApp", "uwpPublicApp", "desktopApp", "mobileApp", "tabletApp", "webView", "desktop", "desktopWithTouch", "isTouchSupported", "isTouchSupportedAndNotDesktop", "winDesktopAppWithTouch", "appDetected", "isPartnerApp", "liveEmbedMode", "canUseSyntheticMouseEvents", "isPointerEventSupported"];

                function r(r) {
                    var o = "undefined" !== typeof r && r.userAgent || "";

                    function i(e) {
                        var t = o.match(e);
                        return t && t.length > 1 && t[1] || ""
                    }

                    function a(e) {
                        var t = o.match(e);
                        return t && t.length > 1 && t[2] || ""
                    }

                    function s(e, t) {
                        return e && e.length > t && e[t] || ""
                    }
                    var u, c = i(/(ipod|iphone|ipad)/i).toLowerCase(),
                        p = !/like android/i.test(o) && /android/i.test(o),
                        l = /nexus\s*[0-6]\s*/i.test(o),
                        d = !l && /nexus\s*[0-9]+/i.test(o),
                        f = /CrOS/.test(o),
                        h = /silk/i.test(o),
                        m = /sailfish/i.test(o),
                        y = /tizen/i.test(o),
                        v = /(web|hpw)os/i.test(o),
                        _ = /windows phone/i.test(o),
                        E = (/SamsungBrowser/i.test(o), !_ && /windows/i.test(o)),
                        g = !c && !h && /macintosh/i.test(o),
                        S = !p && !m && !y && !v && /linux/i.test(o),
                        b = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                        A = i(/version\/(\d+(\.\d+)?)/i),
                        T = /tablet/i.test(o) && !/tablet pc/i.test(o),
                        O = !T && /[^-]mobi/i.test(o),
                        w = /xbox/i.test(o);
                    if (/opera/i.test(o)) u = {
                        name: "Opera",
                        opera: e,
                        version: A || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                    };
                    else if (/opr\/|opios/i.test(o)) u = {
                        name: "Opera",
                        opera: e,
                        version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || A
                    };
                    else if (/SamsungBrowser/i.test(o)) u = {
                        name: "Samsung Internet for Android",
                        samsungBrowser: e,
                        version: A || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                    };
                    else if (/coast/i.test(o)) u = {
                        name: "Opera Coast",
                        coast: e,
                        version: A || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                    };
                    else if (/yabrowser/i.test(o)) u = {
                        name: "Yandex Browser",
                        yandexbrowser: e,
                        version: A || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                    };
                    else if (/ucbrowser/i.test(o)) u = {
                        name: "UC Browser",
                        ucbrowser: e,
                        version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    };
                    else if (/mxios/i.test(o)) u = {
                        name: "Maxthon",
                        maxthon: e,
                        version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                    };
                    else if (/epiphany/i.test(o)) u = {
                        name: "Epiphany",
                        epiphany: e,
                        version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                    };
                    else if (/puffin/i.test(o)) u = {
                        name: "Puffin",
                        puffin: e,
                        version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                    };
                    else if (/sleipnir/i.test(o)) u = {
                        name: "Sleipnir",
                        sleipnir: e,
                        version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                    };
                    else if (/k-meleon/i.test(o)) u = {
                        name: "K-Meleon",
                        kMeleon: e,
                        version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                    };
                    else if (_) u = {
                        name: "Windows Phone",
                        osname: "Windows Phone",
                        windowsphone: e
                    }, b ? (u.msedge = e, u.version = b) : (u.msie = e, u.version = i(/iemobile\/(\d+(\.\d+)?)/i));
                    else if (/msie|trident/i.test(o)) u = {
                        name: "Internet Explorer",
                        msie: e,
                        version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    };
                    else if (f) u = {
                        name: "Chrome",
                        osname: "Chrome OS",
                        chromeos: e,
                        chromeBook: e,
                        chrome: e,
                        version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    };
                    else if (/edg([ea]|ios)/i.test(o)) u = {
                        name: "Microsoft Edge",
                        msedge: e,
                        version: b
                    };
                    else if (/vivaldi/i.test(o)) u = {
                        name: "Vivaldi",
                        vivaldi: e,
                        version: i(/vivaldi\/(\d+(\.\d+)?)/i) || A
                    };
                    else if (m) u = {
                        name: "Sailfish",
                        osname: "Sailfish OS",
                        sailfish: e,
                        version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    };
                    else if (/seamonkey\//i.test(o)) u = {
                        name: "SeaMonkey",
                        seamonkey: e,
                        version: i(/seamonkey\/(\d+(\.\d+)?)/i)
                    };
                    else if (/firefox|iceweasel|fxios/i.test(o)) u = {
                        name: "Firefox",
                        firefox: e,
                        version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                    }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(o) && (u.firefoxos = e, u.osname = "Firefox OS");
                    else if (h) u = {
                        name: "Amazon Silk",
                        silk: e,
                        version: i(/silk\/(\d+(\.\d+)?)/i)
                    };
                    else if (/phantom/i.test(o)) u = {
                        name: "PhantomJS",
                        phantom: e,
                        version: i(/phantomjs\/(\d+(\.\d+)?)/i)
                    };
                    else if (/slimerjs/i.test(o)) u = {
                        name: "SlimerJS",
                        slimer: e,
                        version: i(/slimerjs\/(\d+(\.\d+)?)/i)
                    };
                    else if (/blackberry|\bbb\d+/i.test(o) || /rim\stablet/i.test(o)) u = {
                        name: "BlackBerry",
                        osname: "BlackBerry OS",
                        blackberry: e,
                        version: A || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    };
                    else if (v) u = {
                        name: "WebOS",
                        osname: "WebOS",
                        webos: e,
                        version: A || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    }, /touchpad\//i.test(o) && (u.touchpad = e);
                    else if (/bada/i.test(o)) u = {
                        name: "Bada",
                        osname: "Bada",
                        bada: e,
                        version: i(/dolfin\/(\d+(\.\d+)?)/i)
                    };
                    else if (y) u = {
                        name: "Tizen",
                        osname: "Tizen",
                        tizen: e,
                        version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || A
                    };
                    else if (/qupzilla/i.test(o)) u = {
                        name: "QupZilla",
                        qupzilla: e,
                        version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || A
                    };
                    else if (/chromium/i.test(o)) u = {
                        name: "Chromium",
                        chromium: e,
                        version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || A
                    };
                    else if (/chrome|crios|crmo/i.test(o)) u = {
                        name: "Chrome",
                        chrome: e,
                        version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    };
                    else if (p) u = {
                        name: "Android",
                        version: A
                    };
                    else if (/safari|applewebkit/i.test(o)) u = {
                        name: "Safari",
                        safari: e
                    }, A && (u.version = A);
                    else if (c) u = {
                        name: "iphone" == c ? "iPhone" : "ipad" == c ? "iPad" : "iPod"
                    }, A && (u.version = A);
                    else if (/googlebot/i.test(o)) u = {
                        name: "Googlebot",
                        googlebot: e,
                        version: i(/googlebot\/(\d+(\.\d+))/i) || A
                    };
                    else if (/zoomwebkit/i.test(o)) {
                        u = {
                            name: "Safari",
                            safari: e
                        };
                        var R = "undefined" !== typeof r && r.platform || ""; - 1 != R.indexOf("MacIntel") && (u.osname = "macOS", u.mac = e), -1 != R.indexOf("Win") && (u.osname = "Windows", u.windows = e)
                    } else u = {
                        name: i(/^(.*)\/(.*) /),
                        version: a(/^(.*)\/(.*) /)
                    };
                    !u.msedge && /(apple)?webkit/i.test(o) ? (/(apple)?webkit\/537\.36/i.test(o) ? (u.name = u.name || "Blink", u.blink = e) : (u.name = u.name || "Webkit", u.webkit = e), !u.version && A && (u.version = A)) : !u.opera && /gecko\//i.test(o) && (u.name = u.name || "Gecko", u.gecko = e, u.version = u.version || i(/gecko\/(\d+(\.\d+)?)/i)), u.windowsphone || !p && !u.silk ? !u.windowsphone && c ? (u[c] = e, u.ios = e, u.osname = "iOS") : g ? (u.mac = e, u.osname = "macOS") : w ? (u.xbox = e, u.osname = "Xbox") : E ? (u.windows = e, u.osname = "Windows") : S && (u.linux = e, u.osname = "Linux") : (u.android = e, u.osname = "Android");
                    var I = "";
                    u.windows ? I = function(e) {
                        switch (e) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : u.windowsphone ? I = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : u.mac ? I = (I = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : c ? I = (I = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : p ? I = i(/android[ \/-](\d+(\.\d+)*)/i) : u.webos ? I = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : u.blackberry ? I = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : u.bada ? I = i(/bada\/(\d+(\.\d+)*)/i) : u.tizen && (I = i(/tizen[\/\s](\d+(\.\d+)*)/i)), I && (u.osversion = I);
                    var P = !u.windows && I.split(".")[0];
                    T || d || "ipad" == c || p && (3 == P || P >= 4 && !O) || u.silk ? u.tablet = e : (O || "iphone" == c || "ipod" == c || p || l || u.blackberry || u.webos || u.bada) && (u.mobile = e), u.msedge || u.msie && u.version >= 10 || u.yandexbrowser && u.version >= 15 || u.vivaldi && u.version >= 1 || u.chrome && u.version >= 20 || u.samsungBrowser && u.version >= 4 || u.firefox && u.version >= 20 || u.safari && u.version >= 6 || u.opera && u.version >= 10 || u.ios && u.osversion && u.osversion.split(".")[0] >= 6 || u.blackberry && u.version >= 10.1 || u.chromium && u.version >= 20 ? u.a = e : u.msie && u.version < 10 || u.chrome && u.version < 20 || u.firefox && u.version < 20 || u.safari && u.version < 6 || u.opera && u.version < 10 || u.ios && u.osversion && u.osversion.split(".")[0] < 6 || u.chromium && u.version < 20 ? u.c = e : u.x = e;
                    var L = o.toLowerCase(),
                        C = "WinRTError" in window,
                        D = L.indexOf(" electron/") > -1,
                        N = L.indexOf(" realtimeboard/") > -1,
                        M = "ontouchstart" in document,
                        x = "undefined" !== typeof r && r.maxTouchPoints > 0,
                        U = !!window.PointerEvent;
                    if (u.mac && x && (u.mac = !1, u.tablet = !0, u.ios = !0, u.ipados = !0), /realtimeboard/i.test(o) && (u.appDetected = !0, N = !0, u.desktopApp = !0, u.appVersion = i(/(?:realtimeboard)\/(\d+(\.\d+)*)/i)), /miroapp/i.test(o)) {
                        u.appDetected = !0;
                        var k = o.match(/(?:miroapp)\/(tablet|mobile|desktop|uwp)\/(\d+(\.\d+)*)\/(android|ios|macos|windows)/i);
                        u.appVersion = s(k, 2);
                        var B = s(k, 1).toLowerCase(),
                            j = s(k, 3).toLowerCase();
                        switch (B) {
                            case "tablet":
                                u.tabletApp = !0, u.tablet = !0, u.mac = !1, u.mobileApp = !1, u.mobile = !1;
                                break;
                            case "mobile":
                                u.mobileApp = !0, u.mobile = !0, u.mac = !1, u.tablet = !1, u.tabletApp = !1;
                                break;
                            case "desktop":
                                N = !0, u.desktopApp = !0;
                                break;
                            case "uwp":
                                C = !0, u.uwpDesktopApp = !0
                        }
                        switch (j) {
                            case "ios":
                                u.ios = !0, u.safari = !0, u.android = !1;
                                break;
                            case "android":
                                u.android = !0, u.ios = !1, u.safari = !1
                        }
                    }
                    var F, G = window._rtb_app_info_;
                    if (G && "uwp" === G.appType) switch (C = !0, u.appDetected = !0, u.appVersion = G.version, u.uwpPublicApp = G.isPublicUsage, void 0 === u.uwpPublicApp && (u.uwpPublicApp = !1), G.deviceType) {
                        case "desktop":
                            u.uwpDesktopApp = !0;
                            break;
                        case "team":
                            u.uwpTeamApp = !0
                    }
                    return u.isPartnerApp = !!/^airtabledesktop/i.test(o), u.uwpApp = C, u.desktopApp = C || D && N, u.desktop = !u.mobile && !u.tablet, u.isTouchSupported = D || C ? x : M || x, u.desktopWithTouch = u.desktop && u.isTouchSupported, u.isTouchSupportedAndNotDesktop = !u.desktop && u.isTouchSupported && !u.ipados, u.winDesktopAppWithTouch = C && x, u.isPointerEventSupported = U, u.canUseSyntheticMouseEvents = !("ontouchstart" in document) || u.desktop || !!u.android || !!u.ipados, u.android && u.tabletApp && (u.canUseSyntheticMouseEvents = !1), u.winDesktopAppWithTouch && (u.tablet = !0), Object.defineProperty(u, "webView", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() {
                            return u.mobileApp || u.embedGenerator
                        },
                        set: function() {}
                    }), u.chromium && (u.chrome = u.chromium), F = u, t.forEach((function(e) {
                        F.hasOwnProperty(e) || (F[e] = "")
                    })), n.forEach((function(e) {
                        F.hasOwnProperty(e) || (F[e] = !1)
                    })), u
                }
                var o = r(navigator);

                function i(e) {
                    return e.split(".").length
                }

                function a(e, t) {
                    var n, r = [];
                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                    for (n = 0; n < e.length; n++) r.push(t(e[n]));
                    return r
                }

                function s(e) {
                    for (var t = Math.max(i(e[0]), i(e[1])), n = a(e, (function(e) {
                            var n = t - i(e);
                            return a((e += new Array(n + 1).join(".0")).split("."), (function(e) {
                                return new Array(20 - e.length).join("0") + e
                            })).reverse()
                        })); --t >= 0;) {
                        if (n[0][t] > n[1][t]) return 1;
                        if (n[0][t] !== n[1][t]) return -1;
                        if (0 === t) return 0
                    }
                }

                function u(e, t, n) {
                    var i = o;
                    "object" === typeof t && (n = t, t = void 0), void 0 === t && (t = !1), ua && (i = r(n));
                    var a = "" + i.version;
                    for (var u in e)
                        if (e.hasOwnProperty(u) && i[u]) {
                            if ("string" !== typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
                            return s([a, e[u]]) < 0
                        } return t
                }
                return o.test = function(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        if ("string" === typeof n && n in o) return !0
                    }
                    return !1
                }, o.isUnsupportedBrowser = u, o.compareVersions = s, o.check = function(e, t, n) {
                    return !u(e, t, n)
                }, o._detect = r, o.detect = r, o
            }, e.exports ? e.exports = r() : n.amdD("bowser", r)
        },
        14: function(e, t, n) {
            var r;
            ! function(o) {
                function i(e, t) {
                    if ("function" !== typeof e) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t))
                }

                function a(e, t, n, r, o) {
                    this._listener = t, this._isOnce = n, this.context = r, this._signal = e, this._priority = o || 0
                }

                function s() {
                    this._bindings = [], this._prevParams = null, this.dispatch = this.dispatch.bind(this)
                }
                a.prototype = {
                    active: !0,
                    execute: function(e) {
                        var t;
                        return this.active && this._listener && (t = this._listener.apply(this.context, e), this._isOnce && this.detach()), t
                    },
                    detach: function() {
                        return this.isBound() ? this._signal.remove(this._listener, this.context) : null
                    },
                    isBound: function() {
                        return !!this._signal && !!this._listener
                    },
                    isOnce: function() {
                        return this._isOnce
                    },
                    getListener: function() {
                        return this._listener
                    },
                    getSignal: function() {
                        return this._signal
                    },
                    _destroy: function() {
                        this._signal = null, this._listener = null, this.context = null
                    },
                    toString: function() {
                        return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
                    }
                }, s.prototype = {
                    VERSION: "1.0.0",
                    memorize: !1,
                    _shouldPropagate: !0,
                    active: !0,
                    _registerListener: function(e, t, n, r) {
                        var o = this._indexOfListener(e, n);
                        if (-1 !== o) {
                            if ((e = this._bindings[o]).isOnce() !== t) throw Error("You cannot add" + (t ? "" : "Once") + "() then add" + (t ? "Once" : "") + "() the same listener without removing the relationship first.")
                        } else e = new a(this, e, t, n, r), this._addBinding(e);
                        return this.memorize && this._prevParams && e.execute(this._prevParams), e
                    },
                    _addBinding: function(e) {
                        var t = this._bindings.length;
                        do {
                            --t
                        } while (this._bindings[t] && e._priority > this._bindings[t]._priority);
                        (t += 1) === this._bindings.length ? this._bindings.push(e) : this._bindings.splice(t, 0, e)
                    },
                    _indexOfListener: function(e, t) {
                        for (var n, r = this._bindings.length, o = 0; o < r; ++o)
                            if ((n = this._bindings[o])._listener === e && n.context === t) return o;
                        return -1
                    },
                    has: function(e, t) {
                        return -1 !== this._indexOfListener(e, t)
                    },
                    add: function(e, t, n) {
                        return i(e, "add"), this._registerListener(e, !1, t, n)
                    },
                    addOnce: function(e, t, n) {
                        return i(e, "addOnce"), this._registerListener(e, !0, t, n)
                    },
                    remove: function(e, t) {
                        i(e, "remove");
                        var n = this._indexOfListener(e, t);
                        return -1 !== n && (this._bindings[n]._destroy(), this._bindings.splice(n, 1)), e
                    },
                    removeAll: function() {
                        for (var e = this._bindings.length, t = 0; t < e; ++t) this._bindings[t]._destroy();
                        this._bindings.length = 0
                    },
                    getNumListeners: function() {
                        return this._bindings.length
                    },
                    halt: function() {
                        this._shouldPropagate = !1
                    },
                    dispatch: function(e) {
                        if (this.active) {
                            var t = Array.prototype.slice.call(arguments);
                            if (this.memorize && (this._prevParams = t), this._bindings.length) {
                                var n = -1,
                                    r = this._bindings.slice();
                                this._shouldPropagate = !0;
                                do {
                                    n++
                                } while (r[n] && this._shouldPropagate && !1 !== r[n].execute(t))
                            }
                        }
                    },
                    forget: function() {
                        this._prevParams = null
                    },
                    dispose: function() {
                        this.removeAll(), this.forget()
                    },
                    toString: function() {
                        return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
                    }
                };
                var u = s;
                u.Signal = s, void 0 === (r = function() {
                    return u
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        }
    },
    e => {
        var t;
        t = 6134, e(e.s = t)
    }
]);
//# sourceMappingURL=https://miro.com/app/static/applicationInlineEntry.c93e4c9b91964af6.js.map