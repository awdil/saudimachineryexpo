!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).GLightbox = t());
})(this, function () {
    "use strict";
    function e(t) {
        return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                  })(t);
    }
    function t(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
        }
    }
    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    var s = Date.now();
    function l() {
        var e = {},
            t = !0,
            i = 0,
            n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
            ((t = arguments[0]), i++);
        for (
            var s = function (i) {
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) &&
                        (t &&
                        "[object Object]" ===
                            Object.prototype.toString.call(i[n])
                            ? (e[n] = l(!0, e[n], i[n]))
                            : (e[n] = i[n]));
            };
            i < n;
            i++
        ) {
            var o = arguments[i];
            s(o);
        }
        return e;
    }
    function o(e, t) {
        if (
            ((k(e) || e === window || e === document) && (e = [e]),
            A(e) || L(e) || (e = [e]),
            0 != P(e))
        )
            if (A(e) && !L(e))
                for (
                    var i = e.length, n = 0;
                    n < i && !1 !== t.call(e[n], e[n], n, e);
                    n++
                );
            else if (L(e))
                for (var s in e)
                    if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
    }
    function r(e) {
        var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
            i =
                arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
            n = (e[s] = e[s] || []),
            l = { all: n, evt: null, found: null };
        return (
            t &&
                i &&
                P(n) > 0 &&
                o(n, function (e, n) {
                    if (e.eventName == t && e.fn.toString() == i.toString())
                        return (l.found = !0), (l.evt = n), !1;
                }),
            l
        );
    }
    function a(e) {
        var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
            i = t.onElement,
            n = t.withCallback,
            s = t.avoidDuplicate,
            l = void 0 === s || s,
            a = t.once,
            h = void 0 !== a && a,
            d = t.useCapture,
            c = void 0 !== d && d,
            u = arguments.length > 2 ? arguments[2] : void 0,
            g = i || [];
        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy();
        }
        return (
            C(g) && (g = document.querySelectorAll(g)),
            (v.destroy = function () {
                o(g, function (t) {
                    var i = r(t, e, v);
                    i.found && i.all.splice(i.evt, 1),
                        t.removeEventListener && t.removeEventListener(e, v, c);
                });
            }),
            o(g, function (t) {
                var i = r(t, e, v);
                ((t.addEventListener && l && !i.found) || !l) &&
                    (t.addEventListener(e, v, c),
                    i.all.push({ eventName: e, fn: v }));
            }),
            v
        );
    }
    function h(e, t) {
        o(t.split(" "), function (t) {
            return e.classList.add(t);
        });
    }
    function d(e, t) {
        o(t.split(" "), function (t) {
            return e.classList.remove(t);
        });
    }
    function c(e, t) {
        return e.classList.contains(t);
    }
    function u(e, t) {
        for (; e !== document.body; ) {
            if (!(e = e.parentElement)) return !1;
            if (
                "function" == typeof e.matches
                    ? e.matches(t)
                    : e.msMatchesSelector(t)
            )
                return e;
        }
    }
    function g(e) {
        var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" == t) return T(i) && i(), !1;
        var n = x(),
            s = t.split(" ");
        o(s, function (t) {
            h(e, "g" + t);
        }),
            a(n, {
                onElement: e,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function (e, t) {
                    o(s, function (e) {
                        d(t, "g" + e);
                    }),
                        T(i) && i();
                },
            });
    }
    function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" == t)
            return (
                (e.style.webkitTransform = ""),
                (e.style.MozTransform = ""),
                (e.style.msTransform = ""),
                (e.style.OTransform = ""),
                (e.style.transform = ""),
                !1
            );
        (e.style.webkitTransform = t),
            (e.style.MozTransform = t),
            (e.style.msTransform = t),
            (e.style.OTransform = t),
            (e.style.transform = t);
    }
    function f(e) {
        e.style.display = "block";
    }
    function p(e) {
        e.style.display = "none";
    }
    function m(e) {
        var t = document.createDocumentFragment(),
            i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
        return t;
    }
    function y() {
        return {
            width:
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            height:
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        };
    }
    function x() {
        var e,
            t = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd",
            };
        for (e in i) if (void 0 !== t.style[e]) return i[e];
    }
    function b(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function () {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n &&
                (s = setTimeout(function () {
                    clearInterval(l);
                }, n));
        }
    }
    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error");
        else if ((T(t) && ((i = t), (t = !1)), C(t) && t in window))
            T(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if (
                    (n = document.querySelectorAll('link[href="' + e + '"]')) &&
                    n.length > 0
                )
                    return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0],
                    l = s.querySelectorAll('link[rel="stylesheet"]'),
                    o = document.createElement("link");
                return (
                    (o.rel = "stylesheet"),
                    (o.type = "text/css"),
                    (o.href = e),
                    (o.media = "all"),
                    l ? s.insertBefore(o, l[0]) : s.appendChild(o),
                    void (T(i) && i())
                );
            }
            if (
                (n = document.querySelectorAll('script[src="' + e + '"]')) &&
                n.length > 0
            ) {
                if (T(i)) {
                    if (C(t))
                        return (
                            b(
                                function () {
                                    return void 0 !== window[t];
                                },
                                function () {
                                    i();
                                }
                            ),
                            !1
                        );
                    i();
                }
            } else {
                var r = document.createElement("script");
                (r.type = "text/javascript"),
                    (r.src = e),
                    (r.onload = function () {
                        if (T(i)) {
                            if (C(t))
                                return (
                                    b(
                                        function () {
                                            return void 0 !== window[t];
                                        },
                                        function () {
                                            i();
                                        }
                                    ),
                                    !1
                                );
                            i();
                        }
                    }),
                    document.body.appendChild(r);
            }
        }
    }
    function w() {
        return (
            "navigator" in window &&
            window.navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
            )
        );
    }
    function T(e) {
        return "function" == typeof e;
    }
    function C(e) {
        return "string" == typeof e;
    }
    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function E(e) {
        return Array.isArray(e);
    }
    function A(e) {
        return e && e.length && isFinite(e.length);
    }
    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t);
    }
    function I(e) {
        return null == e;
    }
    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) O(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function X() {
        var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1,
            t = document.querySelectorAll(
                ".gbtn[data-taborder]:not(.disabled)"
            );
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = e < 0 ? 1 : e + 1;
        i > t.length && (i = "1");
        var n = [];
        o(t, function (e) {
            n.push(e.getAttribute("data-taborder"));
        });
        var s = n.filter(function (e) {
                return e >= parseInt(i);
            }),
            l = s.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(l, '"]'));
    }
    function z(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window,
            withCallback: function (t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l =
                            !(
                                !document.activeElement ||
                                !document.activeElement.nodeName
                            ) &&
                            document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l)
                            return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = X();
                        return void (r && (r.focus(), h(r, "focused")));
                    }
                    var a = X(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"));
                }
                39 == n && e.nextSlide(),
                    37 == n && e.prevSlide(),
                    27 == n && e.close();
            },
        });
    }
    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function q(e, t) {
        var i = (function (e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n =
                (function (e, t) {
                    return e.x * t.x + e.y * t.y;
                })(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n);
        })(e, t);
        return (
            (function (e, t) {
                return e.x * t.y - t.x * e.y;
            })(e, t) > 0 && (i *= -1),
            (180 * i) / Math.PI
        );
    }
    var N = (function () {
        function e(i) {
            t(this, e), (this.handlers = []), (this.el = i);
        }
        return (
            n(e, [
                {
                    key: "add",
                    value: function (e) {
                        this.handlers.push(e);
                    },
                },
                {
                    key: "del",
                    value: function (e) {
                        e || (this.handlers = []);
                        for (var t = this.handlers.length; t >= 0; t--)
                            this.handlers[t] === e &&
                                this.handlers.splice(t, 1);
                    },
                },
                {
                    key: "dispatch",
                    value: function () {
                        for (var e = 0, t = this.handlers.length; e < t; e++) {
                            var i = this.handlers[e];
                            "function" == typeof i &&
                                i.apply(this.el, arguments);
                        }
                    },
                },
            ]),
            e
        );
    })();
    function D(e, t) {
        var i = new N(e);
        return i.add(t), i;
    }
    var _ = (function () {
        function e(i, n) {
            t(this, e),
                (this.element =
                    "string" == typeof i ? document.querySelector(i) : i),
                (this.start = this.start.bind(this)),
                (this.move = this.move.bind(this)),
                (this.end = this.end.bind(this)),
                (this.cancel = this.cancel.bind(this)),
                this.element.addEventListener("touchstart", this.start, !1),
                this.element.addEventListener("touchmove", this.move, !1),
                this.element.addEventListener("touchend", this.end, !1),
                this.element.addEventListener("touchcancel", this.cancel, !1),
                (this.preV = { x: null, y: null }),
                (this.pinchStartLen = null),
                (this.zoom = 1),
                (this.isDoubleTap = !1);
            var s = function () {};
            (this.rotate = D(this.element, n.rotate || s)),
                (this.touchStart = D(this.element, n.touchStart || s)),
                (this.multipointStart = D(
                    this.element,
                    n.multipointStart || s
                )),
                (this.multipointEnd = D(this.element, n.multipointEnd || s)),
                (this.pinch = D(this.element, n.pinch || s)),
                (this.swipe = D(this.element, n.swipe || s)),
                (this.tap = D(this.element, n.tap || s)),
                (this.doubleTap = D(this.element, n.doubleTap || s)),
                (this.longTap = D(this.element, n.longTap || s)),
                (this.singleTap = D(this.element, n.singleTap || s)),
                (this.pressMove = D(this.element, n.pressMove || s)),
                (this.twoFingerPressMove = D(
                    this.element,
                    n.twoFingerPressMove || s
                )),
                (this.touchMove = D(this.element, n.touchMove || s)),
                (this.touchEnd = D(this.element, n.touchEnd || s)),
                (this.touchCancel = D(this.element, n.touchCancel || s)),
                (this.translateContainer = this.element),
                (this._cancelAllHandler = this.cancelAll.bind(this)),
                window.addEventListener("scroll", this._cancelAllHandler),
                (this.delta = null),
                (this.last = null),
                (this.now = null),
                (this.tapTimeout = null),
                (this.singleTapTimeout = null),
                (this.longTapTimeout = null),
                (this.swipeTimeout = null),
                (this.x1 = this.x2 = this.y1 = this.y2 = null),
                (this.preTapPosition = { x: null, y: null });
        }
        return (
            n(e, [
                {
                    key: "start",
                    value: function (e) {
                        if (e.touches) {
                            if (
                                e.target &&
                                e.target.nodeName &&
                                ["a", "button", "input"].indexOf(
                                    e.target.nodeName.toLowerCase()
                                ) >= 0
                            )
                                console.log(
                                    "ignore drag for this touched element",
                                    e.target.nodeName.toLowerCase()
                                );
                            else {
                                (this.now = Date.now()),
                                    (this.x1 = e.touches[0].pageX),
                                    (this.y1 = e.touches[0].pageY),
                                    (this.delta =
                                        this.now - (this.last || this.now)),
                                    this.touchStart.dispatch(e, this.element),
                                    null !== this.preTapPosition.x &&
                                        ((this.isDoubleTap =
                                            this.delta > 0 &&
                                            this.delta <= 250 &&
                                            Math.abs(
                                                this.preTapPosition.x - this.x1
                                            ) < 30 &&
                                            Math.abs(
                                                this.preTapPosition.y - this.y1
                                            ) < 30),
                                        this.isDoubleTap &&
                                            clearTimeout(
                                                this.singleTapTimeout
                                            )),
                                    (this.preTapPosition.x = this.x1),
                                    (this.preTapPosition.y = this.y1),
                                    (this.last = this.now);
                                var t = this.preV;
                                if (e.touches.length > 1) {
                                    this._cancelLongTap(),
                                        this._cancelSingleTap();
                                    var i = {
                                        x: e.touches[1].pageX - this.x1,
                                        y: e.touches[1].pageY - this.y1,
                                    };
                                    (t.x = i.x),
                                        (t.y = i.y),
                                        (this.pinchStartLen = Y(t)),
                                        this.multipointStart.dispatch(
                                            e,
                                            this.element
                                        );
                                }
                                (this._preventTap = !1),
                                    (this.longTapTimeout = setTimeout(
                                        function () {
                                            this.longTap.dispatch(
                                                e,
                                                this.element
                                            ),
                                                (this._preventTap = !0);
                                        }.bind(this),
                                        750
                                    ));
                            }
                        }
                    },
                },
                {
                    key: "move",
                    value: function (e) {
                        if (e.touches) {
                            var t = this.preV,
                                i = e.touches.length,
                                n = e.touches[0].pageX,
                                s = e.touches[0].pageY;
                            if (((this.isDoubleTap = !1), i > 1)) {
                                var l = e.touches[1].pageX,
                                    o = e.touches[1].pageY,
                                    r = {
                                        x: e.touches[1].pageX - n,
                                        y: e.touches[1].pageY - s,
                                    };
                                null !== t.x &&
                                    (this.pinchStartLen > 0 &&
                                        ((e.zoom = Y(r) / this.pinchStartLen),
                                        this.pinch.dispatch(e, this.element)),
                                    (e.angle = q(r, t)),
                                    this.rotate.dispatch(e, this.element)),
                                    (t.x = r.x),
                                    (t.y = r.y),
                                    null !== this.x2 && null !== this.sx2
                                        ? ((e.deltaX =
                                              (n - this.x2 + l - this.sx2) / 2),
                                          (e.deltaY =
                                              (s - this.y2 + o - this.sy2) / 2))
                                        : ((e.deltaX = 0), (e.deltaY = 0)),
                                    this.twoFingerPressMove.dispatch(
                                        e,
                                        this.element
                                    ),
                                    (this.sx2 = l),
                                    (this.sy2 = o);
                            } else {
                                if (null !== this.x2) {
                                    (e.deltaX = n - this.x2),
                                        (e.deltaY = s - this.y2);
                                    var a = Math.abs(this.x1 - this.x2),
                                        h = Math.abs(this.y1 - this.y2);
                                    (a > 10 || h > 10) &&
                                        (this._preventTap = !0);
                                } else (e.deltaX = 0), (e.deltaY = 0);
                                this.pressMove.dispatch(e, this.element);
                            }
                            this.touchMove.dispatch(e, this.element),
                                this._cancelLongTap(),
                                (this.x2 = n),
                                (this.y2 = s),
                                i > 1 && e.preventDefault();
                        }
                    },
                },
                {
                    key: "end",
                    value: function (e) {
                        if (e.changedTouches) {
                            this._cancelLongTap();
                            var t = this;
                            e.touches.length < 2 &&
                                (this.multipointEnd.dispatch(e, this.element),
                                (this.sx2 = this.sy2 = null)),
                                (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                                (this.y2 && Math.abs(this.y1 - this.y2) > 30)
                                    ? ((e.direction = this._swipeDirection(
                                          this.x1,
                                          this.x2,
                                          this.y1,
                                          this.y2
                                      )),
                                      (this.swipeTimeout = setTimeout(
                                          function () {
                                              t.swipe.dispatch(e, t.element);
                                          },
                                          0
                                      )))
                                    : ((this.tapTimeout = setTimeout(
                                          function () {
                                              t._preventTap ||
                                                  t.tap.dispatch(e, t.element),
                                                  t.isDoubleTap &&
                                                      (t.doubleTap.dispatch(
                                                          e,
                                                          t.element
                                                      ),
                                                      (t.isDoubleTap = !1));
                                          },
                                          0
                                      )),
                                      t.isDoubleTap ||
                                          (t.singleTapTimeout = setTimeout(
                                              function () {
                                                  t.singleTap.dispatch(
                                                      e,
                                                      t.element
                                                  );
                                              },
                                              250
                                          ))),
                                this.touchEnd.dispatch(e, this.element),
                                (this.preV.x = 0),
                                (this.preV.y = 0),
                                (this.zoom = 1),
                                (this.pinchStartLen = null),
                                (this.x1 = this.x2 = this.y1 = this.y2 = null);
                        }
                    },
                },
                {
                    key: "cancelAll",
                    value: function () {
                        (this._preventTap = !0),
                            clearTimeout(this.singleTapTimeout),
                            clearTimeout(this.tapTimeout),
                            clearTimeout(this.longTapTimeout),
                            clearTimeout(this.swipeTimeout);
                    },
                },
                {
                    key: "cancel",
                    value: function (e) {
                        this.cancelAll(),
                            this.touchCancel.dispatch(e, this.element);
                    },
                },
                {
                    key: "_cancelLongTap",
                    value: function () {
                        clearTimeout(this.longTapTimeout);
                    },
                },
                {
                    key: "_cancelSingleTap",
                    value: function () {
                        clearTimeout(this.singleTapTimeout);
                    },
                },
                {
                    key: "_swipeDirection",
                    value: function (e, t, i, n) {
                        return Math.abs(e - t) >= Math.abs(i - n)
                            ? e - t > 0
                                ? "Left"
                                : "Right"
                            : i - n > 0
                            ? "Up"
                            : "Down";
                    },
                },
                {
                    key: "on",
                    value: function (e, t) {
                        this[e] && this[e].add(t);
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        this[e] && this[e].del(t);
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        return (
                            this.singleTapTimeout &&
                                clearTimeout(this.singleTapTimeout),
                            this.tapTimeout && clearTimeout(this.tapTimeout),
                            this.longTapTimeout &&
                                clearTimeout(this.longTapTimeout),
                            this.swipeTimeout &&
                                clearTimeout(this.swipeTimeout),
                            this.element.removeEventListener(
                                "touchstart",
                                this.start
                            ),
                            this.element.removeEventListener(
                                "touchmove",
                                this.move
                            ),
                            this.element.removeEventListener(
                                "touchend",
                                this.end
                            ),
                            this.element.removeEventListener(
                                "touchcancel",
                                this.cancel
                            ),
                            this.rotate.del(),
                            this.touchStart.del(),
                            this.multipointStart.del(),
                            this.multipointEnd.del(),
                            this.pinch.del(),
                            this.swipe.del(),
                            this.tap.del(),
                            this.doubleTap.del(),
                            this.longTap.del(),
                            this.singleTap.del(),
                            this.pressMove.del(),
                            this.twoFingerPressMove.del(),
                            this.touchMove.del(),
                            this.touchEnd.del(),
                            this.touchCancel.del(),
                            (this.preV =
                                this.pinchStartLen =
                                this.zoom =
                                this.isDoubleTap =
                                this.delta =
                                this.last =
                                this.now =
                                this.tapTimeout =
                                this.singleTapTimeout =
                                this.longTapTimeout =
                                this.swipeTimeout =
                                this.x1 =
                                this.x2 =
                                this.y1 =
                                this.y2 =
                                this.preTapPosition =
                                this.rotate =
                                this.touchStart =
                                this.multipointStart =
                                this.multipointEnd =
                                this.pinch =
                                this.swipe =
                                this.tap =
                                this.doubleTap =
                                this.longTap =
                                this.singleTap =
                                this.pressMove =
                                this.touchMove =
                                this.touchEnd =
                                this.touchCancel =
                                this.twoFingerPressMove =
                                    null),
                            window.removeEventListener(
                                "scroll",
                                this._cancelAllHandler
                            ),
                            null
                        );
                    },
                },
            ]),
            e
        );
    })();
    function W(e) {
        var t = (function () {
                var e,
                    t = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                    };
                for (e in i) if (void 0 !== t.style[e]) return i[e];
            })(),
            i =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
            s = u(n, ".ginner-container"),
            l = e.querySelector(".gslide-description");
        i > 769 && (n = s),
            h(n, "greset"),
            v(n, "translate3d(0, 0, 0)"),
            a(t, {
                onElement: n,
                once: !0,
                withCallback: function (e, t) {
                    d(n, "greset");
                },
            }),
            (n.style.opacity = ""),
            l && (l.style.opacity = "");
    }
    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t,
            i,
            n,
            s = y(),
            l = s.width,
            o = s.height,
            r = !1,
            a = null,
            g = null,
            f = null,
            p = !1,
            m = 1,
            x = 1,
            b = !1,
            S = !1,
            w = null,
            T = null,
            C = null,
            k = null,
            E = 0,
            A = 0,
            L = !1,
            I = !1,
            O = {},
            P = {},
            M = 0,
            X = 0,
            z = document.getElementById("glightbox-slider"),
            Y = document.querySelector(".goverlay"),
            q = new _(z, {
                touchStart: function (t) {
                    if (
                        ((r = !0),
                        (c(t.targetTouches[0].target, "ginner-container") ||
                            u(t.targetTouches[0].target, ".gslide-desc") ||
                            "a" ==
                                t.targetTouches[0].target.nodeName.toLowerCase()) &&
                            (r = !1),
                        u(t.targetTouches[0].target, ".gslide-inline") &&
                            !c(
                                t.targetTouches[0].target.parentNode,
                                "gslide-inline"
                            ) &&
                            (r = !1),
                        r)
                    ) {
                        if (
                            ((P = t.targetTouches[0]),
                            (O.pageX = t.targetTouches[0].pageX),
                            (O.pageY = t.targetTouches[0].pageY),
                            (M = t.targetTouches[0].clientX),
                            (X = t.targetTouches[0].clientY),
                            (a = e.activeSlide),
                            (g = a.querySelector(".gslide-media")),
                            (n = a.querySelector(".gslide-inline")),
                            (f = null),
                            c(g, "gslide-image") &&
                                (f = g.querySelector("img")),
                            (window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth) > 769 &&
                                (g = a.querySelector(".ginner-container")),
                            d(Y, "greset"),
                            t.pageX > 20 && t.pageX < window.innerWidth - 20)
                        )
                            return;
                        t.preventDefault();
                    }
                },
                touchMove: function (s) {
                    if (r && ((P = s.targetTouches[0]), !b && !S)) {
                        if (n && n.offsetHeight > o) {
                            var a = O.pageX - P.pageX;
                            if (Math.abs(a) <= 13) return !1;
                        }
                        p = !0;
                        var h,
                            d = s.targetTouches[0].clientX,
                            c = s.targetTouches[0].clientY,
                            u = M - d,
                            m = X - c;
                        if (
                            (Math.abs(u) > Math.abs(m)
                                ? ((L = !1), (I = !0))
                                : ((I = !1), (L = !0)),
                            (t = P.pageX - O.pageX),
                            (E = (100 * t) / l),
                            (i = P.pageY - O.pageY),
                            (A = (100 * i) / o),
                            L &&
                                f &&
                                ((h = 1 - Math.abs(i) / o),
                                (Y.style.opacity = h),
                                e.settings.touchFollowAxis && (E = 0)),
                            I &&
                                ((h = 1 - Math.abs(t) / l),
                                (g.style.opacity = h),
                                e.settings.touchFollowAxis && (A = 0)),
                            !f)
                        )
                            return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                        v(
                            g,
                            "translate3d(".concat(E, "%, ").concat(A, "%, 0)")
                        );
                    }
                },
                touchEnd: function () {
                    if (r) {
                        if (((p = !1), S || b)) return (C = w), void (k = T);
                        var t = Math.abs(parseInt(A)),
                            i = Math.abs(parseInt(E));
                        if (!(t > 29 && f))
                            return t < 29 && i < 25
                                ? (h(Y, "greset"), (Y.style.opacity = 1), W(g))
                                : void 0;
                        e.close();
                    }
                },
                multipointEnd: function () {
                    setTimeout(function () {
                        b = !1;
                    }, 50);
                },
                multipointStart: function () {
                    (b = !0), (m = x || 1);
                },
                pinch: function (e) {
                    if (!f || p) return !1;
                    (b = !0), (f.scaleX = f.scaleY = m * e.zoom);
                    var t = m * e.zoom;
                    if (((S = !0), t <= 1))
                        return (
                            (S = !1),
                            (t = 1),
                            (k = null),
                            (C = null),
                            (w = null),
                            (T = null),
                            void f.setAttribute("style", "")
                        );
                    t > 4.5 && (t = 4.5),
                        (f.style.transform = "scale3d("
                            .concat(t, ", ")
                            .concat(t, ", 1)")),
                        (x = t);
                },
                pressMove: function (e) {
                    if (S && !b) {
                        var t = P.pageX - O.pageX,
                            i = P.pageY - O.pageY;
                        C && (t += C), k && (i += k), (w = t), (T = i);
                        var n = "translate3d("
                            .concat(t, "px, ")
                            .concat(i, "px, 0)");
                        x &&
                            (n += " scale3d("
                                .concat(x, ", ")
                                .concat(x, ", 1)")),
                            v(f, n);
                    }
                },
                swipe: function (t) {
                    if (!S)
                        if (b) b = !1;
                        else {
                            if ("Left" == t.direction) {
                                if (e.index == e.elements.length - 1)
                                    return W(g);
                                e.nextSlide();
                            }
                            if ("Right" == t.direction) {
                                if (0 == e.index) return W(g);
                                e.prevSlide();
                            }
                        }
                },
            });
        e.events.touch = q;
    }
    var H = (function () {
            function e(i, n) {
                var s = this,
                    l =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                if (
                    (t(this, e),
                    (this.img = i),
                    (this.slide = n),
                    (this.onclose = l),
                    this.img.setZoomEvents)
                )
                    return !1;
                (this.active = !1),
                    (this.zoomedIn = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    this.img.addEventListener(
                        "mousedown",
                        function (e) {
                            return s.dragStart(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mouseup",
                        function (e) {
                            return s.dragEnd(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mousemove",
                        function (e) {
                            return s.drag(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "click",
                        function (e) {
                            return s.slide.classList.contains("dragging-nav")
                                ? (s.zoomOut(), !1)
                                : s.zoomedIn
                                ? void (
                                      s.zoomedIn &&
                                      !s.dragging &&
                                      s.zoomOut()
                                  )
                                : s.zoomIn();
                        },
                        !1
                    ),
                    (this.img.setZoomEvents = !0);
            }
            return (
                n(e, [
                    {
                        key: "zoomIn",
                        value: function () {
                            var e = this.widowWidth();
                            if (!(this.zoomedIn || e <= 768)) {
                                var t = this.img;
                                if (
                                    (t.setAttribute(
                                        "data-style",
                                        t.getAttribute("style")
                                    ),
                                    (t.style.maxWidth = t.naturalWidth + "px"),
                                    (t.style.maxHeight =
                                        t.naturalHeight + "px"),
                                    t.naturalWidth > e)
                                ) {
                                    var i = e / 2 - t.naturalWidth / 2;
                                    this.setTranslate(
                                        this.img.parentNode,
                                        i,
                                        0
                                    );
                                }
                                this.slide.classList.add("zoomed"),
                                    (this.zoomedIn = !0);
                            }
                        },
                    },
                    {
                        key: "zoomOut",
                        value: function () {
                            this.img.parentNode.setAttribute("style", ""),
                                this.img.setAttribute(
                                    "style",
                                    this.img.getAttribute("data-style")
                                ),
                                this.slide.classList.remove("zoomed"),
                                (this.zoomedIn = !1),
                                (this.currentX = null),
                                (this.currentY = null),
                                (this.initialX = null),
                                (this.initialY = null),
                                (this.xOffset = 0),
                                (this.yOffset = 0),
                                this.onclose &&
                                    "function" == typeof this.onclose &&
                                    this.onclose();
                        },
                    },
                    {
                        key: "dragStart",
                        value: function (e) {
                            e.preventDefault(),
                                this.zoomedIn
                                    ? ("touchstart" === e.type
                                          ? ((this.initialX =
                                                e.touches[0].clientX -
                                                this.xOffset),
                                            (this.initialY =
                                                e.touches[0].clientY -
                                                this.yOffset))
                                          : ((this.initialX =
                                                e.clientX - this.xOffset),
                                            (this.initialY =
                                                e.clientY - this.yOffset)),
                                      e.target === this.img &&
                                          ((this.active = !0),
                                          this.img.classList.add("dragging")))
                                    : (this.active = !1);
                        },
                    },
                    {
                        key: "dragEnd",
                        value: function (e) {
                            var t = this;
                            e.preventDefault(),
                                (this.initialX = this.currentX),
                                (this.initialY = this.currentY),
                                (this.active = !1),
                                setTimeout(function () {
                                    (t.dragging = !1),
                                        (t.img.isDragging = !1),
                                        t.img.classList.remove("dragging");
                                }, 100);
                        },
                    },
                    {
                        key: "drag",
                        value: function (e) {
                            this.active &&
                                (e.preventDefault(),
                                "touchmove" === e.type
                                    ? ((this.currentX =
                                          e.touches[0].clientX - this.initialX),
                                      (this.currentY =
                                          e.touches[0].clientY - this.initialY))
                                    : ((this.currentX =
                                          e.clientX - this.initialX),
                                      (this.currentY =
                                          e.clientY - this.initialY)),
                                (this.xOffset = this.currentX),
                                (this.yOffset = this.currentY),
                                (this.img.isDragging = !0),
                                (this.dragging = !0),
                                this.setTranslate(
                                    this.img,
                                    this.currentX,
                                    this.currentY
                                ));
                        },
                    },
                    {
                        key: "onMove",
                        value: function (e) {
                            if (this.zoomedIn) {
                                var t = e.clientX - this.img.naturalWidth / 2,
                                    i = e.clientY - this.img.naturalHeight / 2;
                                this.setTranslate(this.img, t, i);
                            }
                        },
                    },
                    {
                        key: "setTranslate",
                        value: function (e, t, i) {
                            e.style.transform =
                                "translate3d(" + t + "px, " + i + "px, 0)";
                        },
                    },
                    {
                        key: "widowWidth",
                        value: function () {
                            return (
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        V = (function () {
            function e() {
                var i = this,
                    n =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                t(this, e);
                var s = n.dragEl,
                    l = n.toleranceX,
                    o = void 0 === l ? 40 : l,
                    r = n.toleranceY,
                    a = void 0 === r ? 65 : r,
                    h = n.slide,
                    d = void 0 === h ? null : h,
                    c = n.instance,
                    u = void 0 === c ? null : c;
                (this.el = s),
                    (this.active = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    (this.direction = null),
                    (this.lastDirection = null),
                    (this.toleranceX = o),
                    (this.toleranceY = a),
                    (this.toleranceReached = !1),
                    (this.dragContainer = this.el),
                    (this.slide = d),
                    (this.instance = u),
                    this.el.addEventListener(
                        "mousedown",
                        function (e) {
                            return i.dragStart(e);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mouseup",
                        function (e) {
                            return i.dragEnd(e);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mousemove",
                        function (e) {
                            return i.drag(e);
                        },
                        !1
                    );
            }
            return (
                n(e, [
                    {
                        key: "dragStart",
                        value: function (e) {
                            if (this.slide.classList.contains("zoomed"))
                                this.active = !1;
                            else {
                                "touchstart" === e.type
                                    ? ((this.initialX =
                                          e.touches[0].clientX - this.xOffset),
                                      (this.initialY =
                                          e.touches[0].clientY - this.yOffset))
                                    : ((this.initialX =
                                          e.clientX - this.xOffset),
                                      (this.initialY =
                                          e.clientY - this.yOffset));
                                var t = e.target.nodeName.toLowerCase();
                                e.target.classList.contains("nodrag") ||
                                u(e.target, ".nodrag") ||
                                -1 !==
                                    [
                                        "input",
                                        "select",
                                        "textarea",
                                        "button",
                                        "a",
                                    ].indexOf(t)
                                    ? (this.active = !1)
                                    : (e.preventDefault(),
                                      (e.target === this.el ||
                                          ("img" !== t &&
                                              u(e.target, ".gslide-inline"))) &&
                                          ((this.active = !0),
                                          this.el.classList.add("dragging"),
                                          (this.dragContainer = u(
                                              e.target,
                                              ".ginner-container"
                                          ))));
                            }
                        },
                    },
                    {
                        key: "dragEnd",
                        value: function (e) {
                            var t = this;
                            e && e.preventDefault(),
                                (this.initialX = 0),
                                (this.initialY = 0),
                                (this.currentX = null),
                                (this.currentY = null),
                                (this.initialX = null),
                                (this.initialY = null),
                                (this.xOffset = 0),
                                (this.yOffset = 0),
                                (this.active = !1),
                                this.doSlideChange &&
                                    ((this.instance.preventOutsideClick = !0),
                                    "right" == this.doSlideChange &&
                                        this.instance.prevSlide(),
                                    "left" == this.doSlideChange &&
                                        this.instance.nextSlide()),
                                this.doSlideClose && this.instance.close(),
                                this.toleranceReached ||
                                    this.setTranslate(
                                        this.dragContainer,
                                        0,
                                        0,
                                        !0
                                    ),
                                setTimeout(function () {
                                    (t.instance.preventOutsideClick = !1),
                                        (t.toleranceReached = !1),
                                        (t.lastDirection = null),
                                        (t.dragging = !1),
                                        (t.el.isDragging = !1),
                                        t.el.classList.remove("dragging"),
                                        t.slide.classList.remove(
                                            "dragging-nav"
                                        ),
                                        (t.dragContainer.style.transform = ""),
                                        (t.dragContainer.style.transition = "");
                                }, 100);
                        },
                    },
                    {
                        key: "drag",
                        value: function (e) {
                            if (this.active) {
                                e.preventDefault(),
                                    this.slide.classList.add("dragging-nav"),
                                    "touchmove" === e.type
                                        ? ((this.currentX =
                                              e.touches[0].clientX -
                                              this.initialX),
                                          (this.currentY =
                                              e.touches[0].clientY -
                                              this.initialY))
                                        : ((this.currentX =
                                              e.clientX - this.initialX),
                                          (this.currentY =
                                              e.clientY - this.initialY)),
                                    (this.xOffset = this.currentX),
                                    (this.yOffset = this.currentY),
                                    (this.el.isDragging = !0),
                                    (this.dragging = !0),
                                    (this.doSlideChange = !1),
                                    (this.doSlideClose = !1);
                                var t = Math.abs(this.currentX),
                                    i = Math.abs(this.currentY);
                                if (
                                    t > 0 &&
                                    t >= Math.abs(this.currentY) &&
                                    (!this.lastDirection ||
                                        "x" == this.lastDirection)
                                ) {
                                    (this.yOffset = 0),
                                        (this.lastDirection = "x"),
                                        this.setTranslate(
                                            this.dragContainer,
                                            this.currentX,
                                            0
                                        );
                                    var n = this.shouldChange();
                                    if (
                                        (!this.instance.settings.dragAutoSnap &&
                                            n &&
                                            (this.doSlideChange = n),
                                        this.instance.settings.dragAutoSnap &&
                                            n)
                                    )
                                        return (
                                            (this.instance.preventOutsideClick =
                                                !0),
                                            (this.toleranceReached = !0),
                                            (this.active = !1),
                                            (this.instance.preventOutsideClick =
                                                !0),
                                            this.dragEnd(null),
                                            "right" == n &&
                                                this.instance.prevSlide(),
                                            void (
                                                "left" == n &&
                                                this.instance.nextSlide()
                                            )
                                        );
                                }
                                if (
                                    this.toleranceY > 0 &&
                                    i > 0 &&
                                    i >= t &&
                                    (!this.lastDirection ||
                                        "y" == this.lastDirection)
                                ) {
                                    (this.xOffset = 0),
                                        (this.lastDirection = "y"),
                                        this.setTranslate(
                                            this.dragContainer,
                                            0,
                                            this.currentY
                                        );
                                    var s = this.shouldClose();
                                    return (
                                        !this.instance.settings.dragAutoSnap &&
                                            s &&
                                            (this.doSlideClose = !0),
                                        void (
                                            this.instance.settings
                                                .dragAutoSnap &&
                                            s &&
                                            this.instance.close()
                                        )
                                    );
                                }
                            }
                        },
                    },
                    {
                        key: "shouldChange",
                        value: function () {
                            var e = !1;
                            if (Math.abs(this.currentX) >= this.toleranceX) {
                                var t = this.currentX > 0 ? "right" : "left";
                                (("left" == t &&
                                    this.slide !==
                                        this.slide.parentNode.lastChild) ||
                                    ("right" == t &&
                                        this.slide !==
                                            this.slide.parentNode
                                                .firstChild)) &&
                                    (e = t);
                            }
                            return e;
                        },
                    },
                    {
                        key: "shouldClose",
                        value: function () {
                            var e = !1;
                            return (
                                Math.abs(this.currentY) >= this.toleranceY &&
                                    (e = !0),
                                e
                            );
                        },
                    },
                    {
                        key: "setTranslate",
                        value: function (e, t, i) {
                            var n =
                                arguments.length > 3 &&
                                void 0 !== arguments[3] &&
                                arguments[3];
                            (e.style.transition = n ? "all .2s ease" : ""),
                                (e.style.transform = "translate3d("
                                    .concat(t, "px, ")
                                    .concat(i, "px, 0)"));
                        },
                    },
                ]),
                e
            );
        })();
    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"),
            l = new Image(),
            o = "gSlideTitle_" + i,
            r = "gSlideDesc_" + i;
        l.addEventListener(
            "load",
            function () {
                T(n) && n();
            },
            !1
        ),
            (l.src = t.href),
            (l.alt = ""),
            I(t.alt) || "" === t.alt || (l.alt = t.alt),
            "" !== t.title && l.setAttribute("aria-labelledby", o),
            "" !== t.description && l.setAttribute("aria-describedby", r),
            t.hasOwnProperty("_hasCustomWidth") &&
                t._hasCustomWidth &&
                (l.style.width = t.width),
            t.hasOwnProperty("_hasCustomHeight") &&
                t._hasCustomHeight &&
                (l.style.height = t.height),
            s.insertBefore(l, s.firstChild);
    }
    function F(e, t, i, n) {
        var s = this,
            l = e.querySelector(".ginner-container"),
            o = "gvideo" + i,
            r = e.querySelector(".gslide-media"),
            a = this.getAllPlayers();
        h(l, "gvideo-container"),
            r.insertBefore(
                m('<div class="gvideo-wrapper"></div>'),
                r.firstChild
            );
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href,
            u = location.protocol.replace(":", ""),
            g = "",
            v = "",
            f = !1;
        "file" == u && (u = "http"),
            (r.style.maxWidth = t.width),
            S(this.settings.plyr.js, "Plyr", function () {
                if (c.match(/vimeo\.com\/([0-9]*)/)) {
                    var l = /vimeo.*\/(\d+)/i.exec(c);
                    (g = "vimeo"), (v = l[1]);
                }
                if (
                    c.match(
                        /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                    ) ||
                    c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                    c.match(
                        /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                    )
                ) {
                    var r = (function (e) {
                        var t = "";
                        t =
                            void 0 !==
                            (e = e
                                .replace(/(>|<)/gi, "")
                                .split(
                                    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
                                ))[2]
                                ? (t = e[2].split(/[^0-9a-z_\-]/i))[0]
                                : e;
                        return t;
                    })(c);
                    (g = "youtube"), (v = r);
                }
                if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
                    g = "local";
                    var u = '<video id="' + o + '" ';
                    (u += 'style="background:#000; max-width: '.concat(
                        t.width,
                        ';" '
                    )),
                        (u += 'preload="metadata" '),
                        (u += 'x-webkit-airplay="allow" '),
                        (u += 'webkit-playsinline="" '),
                        (u += "controls "),
                        (u += 'class="gvideo-local">');
                    var p = c.toLowerCase().split(".").pop(),
                        y = { mp4: "", ogg: "", webm: "" };
                    for (var x in ((y[(p = "mov" == p ? "mp4" : p)] = c), y))
                        if (y.hasOwnProperty(x)) {
                            var S = y[x];
                            t.hasOwnProperty(x) && (S = t[x]),
                                "" !== S &&
                                    (u += '<source src="'
                                        .concat(S, '" type="video/')
                                        .concat(x, '">'));
                        }
                    f = m((u += "</video>"));
                }
                var w =
                    f ||
                    m(
                        '<div id="'
                            .concat(o, '" data-plyr-provider="')
                            .concat(g, '" data-plyr-embed-id="')
                            .concat(v, '"></div>')
                    );
                h(d, "".concat(g, "-video gvideo")),
                    d.appendChild(w),
                    d.setAttribute("data-id", o),
                    d.setAttribute("data-index", i);
                var C = O(s.settings.plyr, "config")
                        ? s.settings.plyr.config
                        : {},
                    k = new Plyr("#" + o, C);
                k.on("ready", function (e) {
                    var t = e.detail.plyr;
                    (a[o] = t), T(n) && n();
                }),
                    b(
                        function () {
                            return (
                                e.querySelector("iframe") &&
                                "true" ==
                                    e.querySelector("iframe").dataset.ready
                            );
                        },
                        function () {
                            s.resize(e);
                        }
                    ),
                    k.on("enterfullscreen", R),
                    k.on("exitfullscreen", R);
            });
    }
    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" == e.type && h(t, "fullscreen"),
            "exitfullscreen" == e.type && d(t, "fullscreen");
    }
    function G(e, t, i, n) {
        var s,
            l = this,
            o = e.querySelector(".gslide-media"),
            r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            d = !(!O(t, "content") || !t.content) && t.content;
        if (
            d &&
            (C(d) &&
                (s = m('<div class="ginlined-content">'.concat(d, "</div>"))),
            k(d))
        ) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            (c.className = "ginlined-content"), c.appendChild(d), (s = c);
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            (g.style.height = t.height),
                (g.style.maxWidth = t.width),
                h(g, "ginlined-content"),
                (s = g);
        }
        if (!s)
            return (
                console.error("Unable to append inline slide content", t), !1
            );
        (o.style.height = t.height),
            (o.style.width = t.width),
            o.appendChild(s),
            (this.events["inlineclose" + r] = a("click", {
                onElement: o.querySelectorAll(".gtrigger-close"),
                withCallback: function (e) {
                    e.preventDefault(), l.close();
                },
            })),
            T(n) && n();
    }
    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"),
            l = (function (e) {
                var t = e.url,
                    i = e.allow,
                    n = e.callback,
                    s = e.appendTo,
                    l = document.createElement("iframe");
                return (
                    (l.className = "vimeo-video gvideo"),
                    (l.src = t),
                    (l.style.width = "100%"),
                    (l.style.height = "100%"),
                    i && l.setAttribute("allow", i),
                    (l.onload = function () {
                        h(l, "node-ready"), T(n) && n();
                    }),
                    s && s.appendChild(l),
                    l
                );
            })({ url: t.href, callback: n });
        (s.parentNode.style.maxWidth = t.width),
            (s.parentNode.style.height = t.height),
            s.appendChild(l);
    }
    var $ = (function () {
            function e() {
                var i =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                t(this, e),
                    (this.defaults = {
                        href: "",
                        title: "",
                        type: "",
                        description: "",
                        alt: "",
                        descPosition: "bottom",
                        effect: "",
                        width: "",
                        height: "",
                        content: !1,
                        zoomable: !0,
                        draggable: !0,
                    }),
                    L(i) && (this.defaults = l(this.defaults, i));
            }
            return (
                n(e, [
                    {
                        key: "sourceType",
                        value: function (e) {
                            var t = e;
                            if (
                                null !==
                                (e = e.toLowerCase()).match(
                                    /\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/
                                )
                            )
                                return "image";
                            if (
                                e.match(
                                    /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                                ) ||
                                e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                                e.match(
                                    /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                                )
                            )
                                return "video";
                            if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                            if (null !== e.match(/\.(mp4|ogg|webm|mov)$/))
                                return "video";
                            if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/))
                                return "audio";
                            if (
                                e.indexOf("#") > -1 &&
                                "" !== t.split("#").pop().trim()
                            )
                                return "inline";
                            return e.indexOf("goajax=true") > -1
                                ? "ajax"
                                : "external";
                        },
                    },
                    {
                        key: "parseConfig",
                        value: function (e, t) {
                            var i = this,
                                n = l(
                                    { descPosition: t.descPosition },
                                    this.defaults
                                );
                            if (L(e) && !k(e)) {
                                O(e, "type") ||
                                    (O(e, "content") && e.content
                                        ? (e.type = "inline")
                                        : O(e, "href") &&
                                          (e.type = this.sourceType(e.href)));
                                var s = l(n, e);
                                return this.setSize(s, t), s;
                            }
                            var r = "",
                                a = e.getAttribute("data-glightbox"),
                                h = e.nodeName.toLowerCase();
                            if (
                                ("a" === h && (r = e.href),
                                "img" === h && ((r = e.src), (n.alt = e.alt)),
                                (n.href = r),
                                o(n, function (s, l) {
                                    O(t, l) && "width" !== l && (n[l] = t[l]);
                                    var o = e.dataset[l];
                                    I(o) || (n[l] = i.sanitizeValue(o));
                                }),
                                n.content && (n.type = "inline"),
                                !n.type && r && (n.type = this.sourceType(r)),
                                I(a))
                            ) {
                                if (!n.title && "a" == h) {
                                    var d = e.title;
                                    I(d) || "" === d || (n.title = d);
                                }
                                if (!n.title && "img" == h) {
                                    var c = e.alt;
                                    I(c) || "" === c || (n.title = c);
                                }
                            } else {
                                var u = [];
                                o(n, function (e, t) {
                                    u.push(";\\s?" + t);
                                }),
                                    (u = u.join("\\s?:|")),
                                    "" !== a.trim() &&
                                        o(n, function (e, t) {
                                            var s = a,
                                                l = new RegExp(
                                                    "s?" +
                                                        t +
                                                        "s?:s?(.*?)(" +
                                                        u +
                                                        "s?:|$)"
                                                ),
                                                o = s.match(l);
                                            if (o && o.length && o[1]) {
                                                var r = o[1]
                                                    .trim()
                                                    .replace(/;\s*$/, "");
                                                n[t] = i.sanitizeValue(r);
                                            }
                                        });
                            }
                            if (
                                n.description &&
                                "." === n.description.substring(0, 1)
                            ) {
                                var g;
                                try {
                                    g = document.querySelector(
                                        n.description
                                    ).innerHTML;
                                } catch (e) {
                                    if (!(e instanceof DOMException)) throw e;
                                }
                                g && (n.description = g);
                            }
                            if (!n.description) {
                                var v = e.querySelector(".glightbox-desc");
                                v && (n.description = v.innerHTML);
                            }
                            return (
                                this.setSize(n, t, e), (this.slideConfig = n), n
                            );
                        },
                    },
                    {
                        key: "setSize",
                        value: function (e, t) {
                            var i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : null,
                                n =
                                    "video" == e.type
                                        ? this.checkSize(t.videosWidth)
                                        : this.checkSize(t.width),
                                s = this.checkSize(t.height);
                            return (
                                (e.width =
                                    O(e, "width") && "" !== e.width
                                        ? this.checkSize(e.width)
                                        : n),
                                (e.height =
                                    O(e, "height") && "" !== e.height
                                        ? this.checkSize(e.height)
                                        : s),
                                i &&
                                    "image" == e.type &&
                                    ((e._hasCustomWidth = !!i.dataset.width),
                                    (e._hasCustomHeight = !!i.dataset.height)),
                                e
                            );
                        },
                    },
                    {
                        key: "checkSize",
                        value: function (e) {
                            return M(e) ? "".concat(e, "px") : e;
                        },
                    },
                    {
                        key: "sanitizeValue",
                        value: function (e) {
                            return "true" !== e && "false" !== e
                                ? e
                                : "true" === e;
                        },
                    },
                ]),
                e
            );
        })(),
        U = (function () {
            function e(i, n, s) {
                t(this, e),
                    (this.element = i),
                    (this.instance = n),
                    (this.index = s);
            }
            return (
                n(e, [
                    {
                        key: "setContent",
                        value: function () {
                            var e = this,
                                t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                            if (c(t, "loaded")) return !1;
                            var n = this.instance.settings,
                                s = this.slideConfig,
                                l = w();
                            T(n.beforeSlideLoad) &&
                                n.beforeSlideLoad({
                                    index: this.index,
                                    slide: t,
                                    player: !1,
                                });
                            var o = s.type,
                                r = s.descPosition,
                                a = t.querySelector(".gslide-media"),
                                d = t.querySelector(".gslide-title"),
                                u = t.querySelector(".gslide-desc"),
                                g = t.querySelector(".gdesc-inner"),
                                v = i,
                                f = "gSlideTitle_" + this.index,
                                p = "gSlideDesc_" + this.index;
                            if (
                                (T(n.afterSlideLoad) &&
                                    (v = function () {
                                        T(i) && i(),
                                            n.afterSlideLoad({
                                                index: e.index,
                                                slide: t,
                                                player: e.instance.getSlidePlayerInstance(
                                                    e.index
                                                ),
                                            });
                                    }),
                                "" == s.title && "" == s.description
                                    ? g &&
                                      g.parentNode.parentNode.removeChild(
                                          g.parentNode
                                      )
                                    : (d && "" !== s.title
                                          ? ((d.id = f),
                                            (d.innerHTML = s.title))
                                          : d.parentNode.removeChild(d),
                                      u && "" !== s.description
                                          ? ((u.id = p),
                                            l && n.moreLength > 0
                                                ? ((s.smallDescription =
                                                      this.slideShortDesc(
                                                          s.description,
                                                          n.moreLength,
                                                          n.moreText
                                                      )),
                                                  (u.innerHTML =
                                                      s.smallDescription),
                                                  this.descriptionEvents(u, s))
                                                : (u.innerHTML = s.description))
                                          : u.parentNode.removeChild(u),
                                      h(a.parentNode, "desc-".concat(r)),
                                      h(
                                          g.parentNode,
                                          "description-".concat(r)
                                      )),
                                h(a, "gslide-".concat(o)),
                                h(t, "loaded"),
                                "video" !== o)
                            ) {
                                if ("external" !== o)
                                    return "inline" === o
                                        ? (G.apply(this.instance, [
                                              t,
                                              s,
                                              this.index,
                                              v,
                                          ]),
                                          void (
                                              n.draggable &&
                                              new V({
                                                  dragEl: t.querySelector(
                                                      ".gslide-inline"
                                                  ),
                                                  toleranceX: n.dragToleranceX,
                                                  toleranceY: n.dragToleranceY,
                                                  slide: t,
                                                  instance: this.instance,
                                              })
                                          ))
                                        : void ("image" !== o
                                              ? T(v) && v()
                                              : j(
                                                    t,
                                                    s,
                                                    this.index,
                                                    function () {
                                                        var i =
                                                            t.querySelector(
                                                                "img"
                                                            );
                                                        n.draggable &&
                                                            new V({
                                                                dragEl: i,
                                                                toleranceX:
                                                                    n.dragToleranceX,
                                                                toleranceY:
                                                                    n.dragToleranceY,
                                                                slide: t,
                                                                instance:
                                                                    e.instance,
                                                            }),
                                                            s.zoomable &&
                                                                i.naturalWidth >
                                                                    i.offsetWidth &&
                                                                (h(
                                                                    i,
                                                                    "zoomable"
                                                                ),
                                                                new H(
                                                                    i,
                                                                    t,
                                                                    function () {
                                                                        e.instance.resize();
                                                                    }
                                                                )),
                                                            T(v) && v();
                                                    }
                                                ));
                                Z.apply(this, [t, s, this.index, v]);
                            } else
                                F.apply(this.instance, [t, s, this.index, v]);
                        },
                    },
                    {
                        key: "slideShortDesc",
                        value: function (e) {
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 50,
                                i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                n = document.createElement("div");
                            n.innerHTML = e;
                            var s = n.innerText,
                                l = i;
                            if ((e = s.trim()).length <= t) return e;
                            var o = e.substr(0, t - 1);
                            return l
                                ? ((n = null),
                                  o +
                                      '... <a href="#" class="desc-more">' +
                                      i +
                                      "</a>")
                                : o;
                        },
                    },
                    {
                        key: "descriptionEvents",
                        value: function (e, t) {
                            var i = this,
                                n = e.querySelector(".desc-more");
                            if (!n) return !1;
                            a("click", {
                                onElement: n,
                                withCallback: function (e, n) {
                                    e.preventDefault();
                                    var s = document.body,
                                        l = u(n, ".gslide-desc");
                                    if (!l) return !1;
                                    (l.innerHTML = t.description),
                                        h(s, "gdesc-open");
                                    var o = a("click", {
                                        onElement: [
                                            s,
                                            u(l, ".gslide-description"),
                                        ],
                                        withCallback: function (e, n) {
                                            "a" !==
                                                e.target.nodeName.toLowerCase() &&
                                                (d(s, "gdesc-open"),
                                                h(s, "gdesc-closed"),
                                                (l.innerHTML =
                                                    t.smallDescription),
                                                i.descriptionEvents(l, t),
                                                setTimeout(function () {
                                                    d(s, "gdesc-closed");
                                                }, 400),
                                                o.destroy());
                                        },
                                    });
                                },
                            });
                        },
                    },
                    {
                        key: "create",
                        value: function () {
                            return m(this.instance.settings.slideHTML);
                        },
                    },
                    {
                        key: "getConfig",
                        value: function () {
                            var e = new $(
                                this.instance.settings.slideExtraAttributes
                            );
                            return (
                                (this.slideConfig = e.parseConfig(
                                    this.element,
                                    this.instance.settings
                                )),
                                this.slideConfig
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        J = w(),
        K =
            null !== w() ||
            void 0 !== document.createTouch ||
            "ontouchstart" in window ||
            "onmsgesturechange" in window ||
            navigator.msMaxTouchPoints,
        Q = document.getElementsByTagName("html")[0],
        ee = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.8/plyr.css",
                js: "https://cdn.plyr.io/3.6.8/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: { enabled: !0, iosNative: !0 },
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        transparent: !1,
                    },
                },
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: { in: "fadeIn", out: "fadeOut" },
                zoom: { in: "zoomIn", out: "zoomOut" },
                slide: { in: "slideInRight", out: "slideOutLeft" },
                slideBack: { in: "slideInLeft", out: "slideOutRight" },
                none: { in: "none", out: "none" },
            },
            svg: {
                close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
            },
            slideHTML:
                '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML:
                '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
        },
        te = (function () {
            function e() {
                var i =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                t(this, e),
                    (this.customOptions = i),
                    (this.settings = l(ee, i)),
                    (this.effectsClasses = this.getAnimationClasses()),
                    (this.videoPlayers = {}),
                    (this.apiEvents = []),
                    (this.fullElementsList = !1);
            }
            return (
                n(e, [
                    {
                        key: "init",
                        value: function () {
                            var e = this,
                                t = this.getSelector();
                            t &&
                                (this.baseEvents = a("click", {
                                    onElement: t,
                                    withCallback: function (t, i) {
                                        t.preventDefault(), e.open(i);
                                    },
                                })),
                                (this.elements = this.getElements());
                        },
                    },
                    {
                        key: "open",
                        value: function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null,
                                t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null;
                            if (0 == this.elements.length) return !1;
                            (this.activeSlide = null),
                                (this.prevActiveSlideIndex = null),
                                (this.prevActiveSlide = null);
                            var i = M(t) ? t : this.settings.startAt;
                            if (k(e)) {
                                var n = e.getAttribute("data-gallery");
                                n &&
                                    ((this.fullElementsList = this.elements),
                                    (this.elements = this.getGalleryElements(
                                        this.elements,
                                        n
                                    ))),
                                    I(i) &&
                                        (i = this.getElementIndex(e)) < 0 &&
                                        (i = 0);
                            }
                            M(i) || (i = 0),
                                this.build(),
                                g(
                                    this.overlay,
                                    "none" == this.settings.openEffect
                                        ? "none"
                                        : this.settings.cssEfects.fade.in
                                );
                            var s = document.body,
                                l =
                                    window.innerWidth -
                                    document.documentElement.clientWidth;
                            if (l > 0) {
                                var o = document.createElement("style");
                                (o.type = "text/css"),
                                    (o.className = "gcss-styles"),
                                    (o.innerText =
                                        ".gscrollbar-fixer {margin-right: ".concat(
                                            l,
                                            "px}"
                                        )),
                                    document.head.appendChild(o),
                                    h(s, "gscrollbar-fixer");
                            }
                            h(s, "glightbox-open"),
                                h(Q, "glightbox-open"),
                                J &&
                                    (h(document.body, "glightbox-mobile"),
                                    (this.settings.slideEffect = "slide")),
                                this.showSlide(i, !0),
                                1 == this.elements.length
                                    ? (h(
                                          this.prevButton,
                                          "glightbox-button-hidden"
                                      ),
                                      h(
                                          this.nextButton,
                                          "glightbox-button-hidden"
                                      ))
                                    : (d(
                                          this.prevButton,
                                          "glightbox-button-hidden"
                                      ),
                                      d(
                                          this.nextButton,
                                          "glightbox-button-hidden"
                                      )),
                                (this.lightboxOpen = !0),
                                this.trigger("open"),
                                T(this.settings.onOpen) &&
                                    this.settings.onOpen(),
                                K && this.settings.touchNavigation && B(this),
                                this.settings.keyboardNavigation && z(this);
                        },
                    },
                    {
                        key: "openAt",
                        value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0;
                            this.open(null, e);
                        },
                    },
                    {
                        key: "showSlide",
                        value: function () {
                            var e = this,
                                t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                            f(this.loader), (this.index = parseInt(t));
                            var n =
                                this.slidesContainer.querySelector(".current");
                            n && d(n, "current"), this.slideAnimateOut();
                            var s =
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[t];
                            if (c(s, "loaded"))
                                this.slideAnimateIn(s, i), p(this.loader);
                            else {
                                f(this.loader);
                                var l = this.elements[t],
                                    o = {
                                        index: this.index,
                                        slide: s,
                                        slideNode: s,
                                        slideConfig: l.slideConfig,
                                        slideIndex: this.index,
                                        trigger: l.node,
                                        player: null,
                                    };
                                this.trigger("slide_before_load", o),
                                    l.instance.setContent(s, function () {
                                        p(e.loader),
                                            e.resize(),
                                            e.slideAnimateIn(s, i),
                                            e.trigger("slide_after_load", o);
                                    });
                            }
                            (this.slideDescription = s.querySelector(
                                ".gslide-description"
                            )),
                                (this.slideDescriptionContained =
                                    this.slideDescription &&
                                    c(
                                        this.slideDescription.parentNode,
                                        "gslide-media"
                                    )),
                                this.settings.preload &&
                                    (this.preloadSlide(t + 1),
                                    this.preloadSlide(t - 1)),
                                this.updateNavigationClasses(),
                                (this.activeSlide = s);
                        },
                    },
                    {
                        key: "preloadSlide",
                        value: function (e) {
                            var t = this;
                            if (e < 0 || e > this.elements.length - 1)
                                return !1;
                            if (I(this.elements[e])) return !1;
                            var i =
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[e];
                            if (c(i, "loaded")) return !1;
                            var n = this.elements[e],
                                s = n.type,
                                l = {
                                    index: e,
                                    slide: i,
                                    slideNode: i,
                                    slideConfig: n.slideConfig,
                                    slideIndex: e,
                                    trigger: n.node,
                                    player: null,
                                };
                            this.trigger("slide_before_load", l),
                                "video" == s || "external" == s
                                    ? setTimeout(function () {
                                          n.instance.setContent(i, function () {
                                              t.trigger("slide_after_load", l);
                                          });
                                      }, 200)
                                    : n.instance.setContent(i, function () {
                                          t.trigger("slide_after_load", l);
                                      });
                        },
                    },
                    {
                        key: "prevSlide",
                        value: function () {
                            this.goToSlide(this.index - 1);
                        },
                    },
                    {
                        key: "nextSlide",
                        value: function () {
                            this.goToSlide(this.index + 1);
                        },
                    },
                    {
                        key: "goToSlide",
                        value: function () {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            if (
                                ((this.prevActiveSlide = this.activeSlide),
                                (this.prevActiveSlideIndex = this.index),
                                !this.loop() &&
                                    (e < 0 || e > this.elements.length - 1))
                            )
                                return !1;
                            e < 0
                                ? (e = this.elements.length - 1)
                                : e >= this.elements.length && (e = 0),
                                this.showSlide(e);
                        },
                    },
                    {
                        key: "insertSlide",
                        value: function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : -1;
                            t < 0 && (t = this.elements.length);
                            var i = new U(e, this, t),
                                n = i.getConfig(),
                                s = l({}, n),
                                o = i.create(),
                                r = this.elements.length - 1;
                            (s.index = t),
                                (s.node = !1),
                                (s.instance = i),
                                (s.slideConfig = n),
                                this.elements.splice(t, 0, s);
                            var a = null,
                                h = null;
                            if (this.slidesContainer) {
                                if (t > r) this.slidesContainer.appendChild(o);
                                else {
                                    var d =
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[t];
                                    this.slidesContainer.insertBefore(o, d);
                                }
                                ((this.settings.preload &&
                                    0 == this.index &&
                                    0 == t) ||
                                    this.index - 1 == t ||
                                    this.index + 1 == t) &&
                                    this.preloadSlide(t),
                                    0 == this.index &&
                                        0 == t &&
                                        (this.index = 1),
                                    this.updateNavigationClasses(),
                                    (a =
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[t]),
                                    (h = this.getSlidePlayerInstance(t)),
                                    (s.slideNode = a);
                            }
                            this.trigger("slide_inserted", {
                                index: t,
                                slide: a,
                                slideNode: a,
                                slideConfig: n,
                                slideIndex: t,
                                trigger: null,
                                player: h,
                            }),
                                T(this.settings.slideInserted) &&
                                    this.settings.slideInserted({
                                        index: t,
                                        slide: a,
                                        player: h,
                                    });
                        },
                    },
                    {
                        key: "removeSlide",
                        value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : -1;
                            if (e < 0 || e > this.elements.length - 1)
                                return !1;
                            var t =
                                this.slidesContainer &&
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[e];
                            t &&
                                (this.getActiveSlideIndex() == e &&
                                    (e == this.elements.length - 1
                                        ? this.prevSlide()
                                        : this.nextSlide()),
                                t.parentNode.removeChild(t)),
                                this.elements.splice(e, 1),
                                this.trigger("slide_removed", e),
                                T(this.settings.slideRemoved) &&
                                    this.settings.slideRemoved(e);
                        },
                    },
                    {
                        key: "slideAnimateIn",
                        value: function (e, t) {
                            var i = this,
                                n = e.querySelector(".gslide-media"),
                                s = e.querySelector(".gslide-description"),
                                l = {
                                    index: this.prevActiveSlideIndex,
                                    slide: this.prevActiveSlide,
                                    slideNode: this.prevActiveSlide,
                                    slideIndex: this.prevActiveSlide,
                                    slideConfig: I(this.prevActiveSlideIndex)
                                        ? null
                                        : this.elements[
                                              this.prevActiveSlideIndex
                                          ].slideConfig,
                                    trigger: I(this.prevActiveSlideIndex)
                                        ? null
                                        : this.elements[
                                              this.prevActiveSlideIndex
                                          ].node,
                                    player: this.getSlidePlayerInstance(
                                        this.prevActiveSlideIndex
                                    ),
                                },
                                o = {
                                    index: this.index,
                                    slide: this.activeSlide,
                                    slideNode: this.activeSlide,
                                    slideConfig:
                                        this.elements[this.index].slideConfig,
                                    slideIndex: this.index,
                                    trigger: this.elements[this.index].node,
                                    player: this.getSlidePlayerInstance(
                                        this.index
                                    ),
                                };
                            if (
                                (n.offsetWidth > 0 &&
                                    s &&
                                    (p(s), (s.style.display = "")),
                                d(e, this.effectsClasses),
                                t)
                            )
                                g(
                                    e,
                                    this.settings.cssEfects[
                                        this.settings.openEffect
                                    ].in,
                                    function () {
                                        i.settings.autoplayVideos &&
                                            i.slidePlayerPlay(e),
                                            i.trigger("slide_changed", {
                                                prev: l,
                                                current: o,
                                            }),
                                            T(i.settings.afterSlideChange) &&
                                                i.settings.afterSlideChange.apply(
                                                    i,
                                                    [l, o]
                                                );
                                    }
                                );
                            else {
                                var r = this.settings.slideEffect,
                                    a =
                                        "none" !== r
                                            ? this.settings.cssEfects[r].in
                                            : r;
                                this.prevActiveSlideIndex > this.index &&
                                    "slide" == this.settings.slideEffect &&
                                    (a = this.settings.cssEfects.slideBack.in),
                                    g(e, a, function () {
                                        i.settings.autoplayVideos &&
                                            i.slidePlayerPlay(e),
                                            i.trigger("slide_changed", {
                                                prev: l,
                                                current: o,
                                            }),
                                            T(i.settings.afterSlideChange) &&
                                                i.settings.afterSlideChange.apply(
                                                    i,
                                                    [l, o]
                                                );
                                    });
                            }
                            setTimeout(function () {
                                i.resize(e);
                            }, 100),
                                h(e, "current");
                        },
                    },
                    {
                        key: "slideAnimateOut",
                        value: function () {
                            if (!this.prevActiveSlide) return !1;
                            var e = this.prevActiveSlide;
                            d(e, this.effectsClasses), h(e, "prev");
                            var t = this.settings.slideEffect,
                                i =
                                    "none" !== t
                                        ? this.settings.cssEfects[t].out
                                        : t;
                            this.slidePlayerPause(e),
                                this.trigger("slide_before_change", {
                                    prev: {
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        slideNode: this.prevActiveSlide,
                                        slideIndex: this.prevActiveSlideIndex,
                                        slideConfig: I(
                                            this.prevActiveSlideIndex
                                        )
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].slideConfig,
                                        trigger: I(this.prevActiveSlideIndex)
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].node,
                                        player: this.getSlidePlayerInstance(
                                            this.prevActiveSlideIndex
                                        ),
                                    },
                                    current: {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        slideNode: this.activeSlide,
                                        slideIndex: this.index,
                                        slideConfig:
                                            this.elements[this.index]
                                                .slideConfig,
                                        trigger: this.elements[this.index].node,
                                        player: this.getSlidePlayerInstance(
                                            this.index
                                        ),
                                    },
                                }),
                                T(this.settings.beforeSlideChange) &&
                                    this.settings.beforeSlideChange.apply(
                                        this,
                                        [
                                            {
                                                index: this
                                                    .prevActiveSlideIndex,
                                                slide: this.prevActiveSlide,
                                                player: this.getSlidePlayerInstance(
                                                    this.prevActiveSlideIndex
                                                ),
                                            },
                                            {
                                                index: this.index,
                                                slide: this.activeSlide,
                                                player: this.getSlidePlayerInstance(
                                                    this.index
                                                ),
                                            },
                                        ]
                                    ),
                                this.prevActiveSlideIndex > this.index &&
                                    "slide" == this.settings.slideEffect &&
                                    (i = this.settings.cssEfects.slideBack.out),
                                g(e, i, function () {
                                    var t =
                                            e.querySelector(
                                                ".ginner-container"
                                            ),
                                        i = e.querySelector(".gslide-media"),
                                        n = e.querySelector(
                                            ".gslide-description"
                                        );
                                    (t.style.transform = ""),
                                        (i.style.transform = ""),
                                        d(i, "greset"),
                                        (i.style.opacity = ""),
                                        n && (n.style.opacity = ""),
                                        d(e, "prev");
                                });
                        },
                    },
                    {
                        key: "getAllPlayers",
                        value: function () {
                            return this.videoPlayers;
                        },
                    },
                    {
                        key: "getSlidePlayerInstance",
                        value: function (e) {
                            var t = "gvideo" + e,
                                i = this.getAllPlayers();
                            return !(!O(i, t) || !i[t]) && i[t];
                        },
                    },
                    {
                        key: "stopSlideVideo",
                        value: function (e) {
                            if (k(e)) {
                                var t = e.querySelector(".gvideo-wrapper");
                                t && (e = t.getAttribute("data-index"));
                            }
                            console.log(
                                "stopSlideVideo is deprecated, use slidePlayerPause"
                            );
                            var i = this.getSlidePlayerInstance(e);
                            i && i.playing && i.pause();
                        },
                    },
                    {
                        key: "slidePlayerPause",
                        value: function (e) {
                            if (k(e)) {
                                var t = e.querySelector(".gvideo-wrapper");
                                t && (e = t.getAttribute("data-index"));
                            }
                            var i = this.getSlidePlayerInstance(e);
                            i && i.playing && i.pause();
                        },
                    },
                    {
                        key: "playSlideVideo",
                        value: function (e) {
                            if (k(e)) {
                                var t = e.querySelector(".gvideo-wrapper");
                                t && (e = t.getAttribute("data-index"));
                            }
                            console.log(
                                "playSlideVideo is deprecated, use slidePlayerPlay"
                            );
                            var i = this.getSlidePlayerInstance(e);
                            i && !i.playing && i.play();
                        },
                    },
                    {
                        key: "slidePlayerPlay",
                        value: function (e) {
                            if (k(e)) {
                                var t = e.querySelector(".gvideo-wrapper");
                                t && (e = t.getAttribute("data-index"));
                            }
                            var i = this.getSlidePlayerInstance(e);
                            i &&
                                !i.playing &&
                                (i.play(),
                                this.settings.autofocusVideos &&
                                    i.elements.container.focus());
                        },
                    },
                    {
                        key: "setElements",
                        value: function (e) {
                            var t = this;
                            this.settings.elements = !1;
                            var i = [];
                            e &&
                                e.length &&
                                o(e, function (e, n) {
                                    var s = new U(e, t, n),
                                        o = s.getConfig(),
                                        r = l({}, o);
                                    (r.slideConfig = o),
                                        (r.instance = s),
                                        (r.index = n),
                                        i.push(r);
                                }),
                                (this.elements = i),
                                this.lightboxOpen &&
                                    ((this.slidesContainer.innerHTML = ""),
                                    this.elements.length &&
                                        (o(this.elements, function () {
                                            var e = m(t.settings.slideHTML);
                                            t.slidesContainer.appendChild(e);
                                        }),
                                        this.showSlide(0, !0)));
                        },
                    },
                    {
                        key: "getElementIndex",
                        value: function (e) {
                            var t = !1;
                            return (
                                o(this.elements, function (i, n) {
                                    if (O(i, "node") && i.node == e)
                                        return (t = n), !0;
                                }),
                                t
                            );
                        },
                    },
                    {
                        key: "getElements",
                        value: function () {
                            var e = this,
                                t = [];
                            (this.elements = this.elements
                                ? this.elements
                                : []),
                                !I(this.settings.elements) &&
                                    E(this.settings.elements) &&
                                    this.settings.elements.length &&
                                    o(this.settings.elements, function (i, n) {
                                        var s = new U(i, e, n),
                                            o = s.getConfig(),
                                            r = l({}, o);
                                        (r.node = !1),
                                            (r.index = n),
                                            (r.instance = s),
                                            (r.slideConfig = o),
                                            t.push(r);
                                    });
                            var i = !1;
                            return (
                                this.getSelector() &&
                                    (i = document.querySelectorAll(
                                        this.getSelector()
                                    )),
                                i
                                    ? (o(i, function (i, n) {
                                          var s = new U(i, e, n),
                                              o = s.getConfig(),
                                              r = l({}, o);
                                          (r.node = i),
                                              (r.index = n),
                                              (r.instance = s),
                                              (r.slideConfig = o),
                                              (r.gallery =
                                                  i.getAttribute(
                                                      "data-gallery"
                                                  )),
                                              t.push(r);
                                      }),
                                      t)
                                    : t
                            );
                        },
                    },
                    {
                        key: "getGalleryElements",
                        value: function (e, t) {
                            return e.filter(function (e) {
                                return e.gallery == t;
                            });
                        },
                    },
                    {
                        key: "getSelector",
                        value: function () {
                            return (
                                !this.settings.elements &&
                                (this.settings.selector &&
                                "data-" ==
                                    this.settings.selector.substring(0, 5)
                                    ? "*[".concat(this.settings.selector, "]")
                                    : this.settings.selector)
                            );
                        },
                    },
                    {
                        key: "getActiveSlide",
                        value: function () {
                            return this.slidesContainer.querySelectorAll(
                                ".gslide"
                            )[this.index];
                        },
                    },
                    {
                        key: "getActiveSlideIndex",
                        value: function () {
                            return this.index;
                        },
                    },
                    {
                        key: "getAnimationClasses",
                        value: function () {
                            var e = [];
                            for (var t in this.settings.cssEfects)
                                if (this.settings.cssEfects.hasOwnProperty(t)) {
                                    var i = this.settings.cssEfects[t];
                                    e.push("g".concat(i.in)),
                                        e.push("g".concat(i.out));
                                }
                            return e.join(" ");
                        },
                    },
                    {
                        key: "build",
                        value: function () {
                            var e = this;
                            if (this.built) return !1;
                            var t = document.body.childNodes,
                                i = [];
                            o(t, function (e) {
                                e.parentNode == document.body &&
                                    "#" !== e.nodeName.charAt(0) &&
                                    e.hasAttribute &&
                                    !e.hasAttribute("aria-hidden") &&
                                    (i.push(e),
                                    e.setAttribute("aria-hidden", "true"));
                            });
                            var n = O(this.settings.svg, "next")
                                    ? this.settings.svg.next
                                    : "",
                                s = O(this.settings.svg, "prev")
                                    ? this.settings.svg.prev
                                    : "",
                                l = O(this.settings.svg, "close")
                                    ? this.settings.svg.close
                                    : "",
                                r = this.settings.lightboxHTML;
                            (r = m(
                                (r = (r = (r = r.replace(
                                    /{nextSVG}/g,
                                    n
                                )).replace(/{prevSVG}/g, s)).replace(
                                    /{closeSVG}/g,
                                    l
                                ))
                            )),
                                document.body.appendChild(r);
                            var d = document.getElementById("glightbox-body");
                            this.modal = d;
                            var g = d.querySelector(".gclose");
                            (this.prevButton = d.querySelector(".gprev")),
                                (this.nextButton = d.querySelector(".gnext")),
                                (this.overlay = d.querySelector(".goverlay")),
                                (this.loader = d.querySelector(".gloader")),
                                (this.slidesContainer =
                                    document.getElementById(
                                        "glightbox-slider"
                                    )),
                                (this.bodyHiddenChildElms = i),
                                (this.events = {}),
                                h(
                                    this.modal,
                                    "glightbox-" + this.settings.skin
                                ),
                                this.settings.closeButton &&
                                    g &&
                                    (this.events.close = a("click", {
                                        onElement: g,
                                        withCallback: function (t, i) {
                                            t.preventDefault(), e.close();
                                        },
                                    })),
                                g &&
                                    !this.settings.closeButton &&
                                    g.parentNode.removeChild(g),
                                this.nextButton &&
                                    (this.events.next = a("click", {
                                        onElement: this.nextButton,
                                        withCallback: function (t, i) {
                                            t.preventDefault(), e.nextSlide();
                                        },
                                    })),
                                this.prevButton &&
                                    (this.events.prev = a("click", {
                                        onElement: this.prevButton,
                                        withCallback: function (t, i) {
                                            t.preventDefault(), e.prevSlide();
                                        },
                                    })),
                                this.settings.closeOnOutsideClick &&
                                    (this.events.outClose = a("click", {
                                        onElement: d,
                                        withCallback: function (t, i) {
                                            e.preventOutsideClick ||
                                                c(
                                                    document.body,
                                                    "glightbox-mobile"
                                                ) ||
                                                u(
                                                    t.target,
                                                    ".ginner-container"
                                                ) ||
                                                u(t.target, ".gbtn") ||
                                                c(t.target, "gnext") ||
                                                c(t.target, "gprev") ||
                                                e.close();
                                        },
                                    })),
                                o(this.elements, function (t, i) {
                                    e.slidesContainer.appendChild(
                                        t.instance.create()
                                    ),
                                        (t.slideNode =
                                            e.slidesContainer.querySelectorAll(
                                                ".gslide"
                                            )[i]);
                                }),
                                K && h(document.body, "glightbox-touch"),
                                (this.events.resize = a("resize", {
                                    onElement: window,
                                    withCallback: function () {
                                        e.resize();
                                    },
                                })),
                                (this.built = !0);
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : null;
                            if (
                                (e = e || this.activeSlide) &&
                                !c(e, "zoomed")
                            ) {
                                var t = y(),
                                    i = e.querySelector(".gvideo-wrapper"),
                                    n = e.querySelector(".gslide-image"),
                                    s = this.slideDescription,
                                    l = t.width,
                                    o = t.height;
                                if (
                                    (l <= 768
                                        ? h(document.body, "glightbox-mobile")
                                        : d(document.body, "glightbox-mobile"),
                                    i || n)
                                ) {
                                    var r = !1;
                                    if (
                                        (s &&
                                            (c(s, "description-bottom") ||
                                                c(s, "description-top")) &&
                                            !c(s, "gabsolute") &&
                                            (r = !0),
                                        n)
                                    )
                                        if (l <= 768) n.querySelector("img");
                                        else if (r) {
                                            var a = s.offsetHeight,
                                                u = n.querySelector("img");
                                            u.setAttribute(
                                                "style",
                                                "max-height: calc(100vh - ".concat(
                                                    a,
                                                    "px)"
                                                )
                                            ),
                                                s.setAttribute(
                                                    "style",
                                                    "max-width: ".concat(
                                                        u.offsetWidth,
                                                        "px;"
                                                    )
                                                );
                                        }
                                    if (i) {
                                        var g = O(
                                            this.settings.plyr.config,
                                            "ratio"
                                        )
                                            ? this.settings.plyr.config.ratio
                                            : "";
                                        if (!g) {
                                            var v = i.clientWidth,
                                                f = i.clientHeight,
                                                p = v / f;
                                            g = ""
                                                .concat(v / p, ":")
                                                .concat(f / p);
                                        }
                                        var m = g.split(":"),
                                            x = this.settings.videosWidth,
                                            b = this.settings.videosWidth,
                                            S =
                                                (b =
                                                    M(x) ||
                                                    -1 !== x.indexOf("px")
                                                        ? parseInt(x)
                                                        : -1 !== x.indexOf("vw")
                                                        ? (l * parseInt(x)) /
                                                          100
                                                        : -1 !== x.indexOf("vh")
                                                        ? (o * parseInt(x)) /
                                                          100
                                                        : -1 !== x.indexOf("%")
                                                        ? (l * parseInt(x)) /
                                                          100
                                                        : parseInt(
                                                              i.clientWidth
                                                          )) /
                                                (parseInt(m[0]) /
                                                    parseInt(m[1]));
                                        if (
                                            ((S = Math.floor(S)),
                                            r && (o -= s.offsetHeight),
                                            b > l || S > o || (o < S && l > b))
                                        ) {
                                            var w = i.offsetWidth,
                                                T = i.offsetHeight,
                                                C = o / T,
                                                k = {
                                                    width: w * C,
                                                    height: T * C,
                                                };
                                            i.parentNode.setAttribute(
                                                "style",
                                                "max-width: ".concat(
                                                    k.width,
                                                    "px"
                                                )
                                            ),
                                                r &&
                                                    s.setAttribute(
                                                        "style",
                                                        "max-width: ".concat(
                                                            k.width,
                                                            "px;"
                                                        )
                                                    );
                                        } else
                                            (i.parentNode.style.maxWidth =
                                                "".concat(x)),
                                                r &&
                                                    s.setAttribute(
                                                        "style",
                                                        "max-width: ".concat(
                                                            x,
                                                            ";"
                                                        )
                                                    );
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: "reload",
                        value: function () {
                            this.init();
                        },
                    },
                    {
                        key: "updateNavigationClasses",
                        value: function () {
                            var e = this.loop();
                            d(this.nextButton, "disabled"),
                                d(this.prevButton, "disabled"),
                                0 == this.index && this.elements.length - 1 == 0
                                    ? (h(this.prevButton, "disabled"),
                                      h(this.nextButton, "disabled"))
                                    : 0 !== this.index || e
                                    ? this.index !== this.elements.length - 1 ||
                                      e ||
                                      h(this.nextButton, "disabled")
                                    : h(this.prevButton, "disabled");
                        },
                    },
                    {
                        key: "loop",
                        value: function () {
                            var e = O(this.settings, "loopAtEnd")
                                ? this.settings.loopAtEnd
                                : null;
                            return (
                                (e = O(this.settings, "loop")
                                    ? this.settings.loop
                                    : e),
                                e
                            );
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            var e = this;
                            if (!this.lightboxOpen) {
                                if (this.events) {
                                    for (var t in this.events)
                                        this.events.hasOwnProperty(t) &&
                                            this.events[t].destroy();
                                    this.events = null;
                                }
                                return !1;
                            }
                            if (this.closing) return !1;
                            (this.closing = !0),
                                this.slidePlayerPause(this.activeSlide),
                                this.fullElementsList &&
                                    (this.elements = this.fullElementsList),
                                this.bodyHiddenChildElms.length &&
                                    o(this.bodyHiddenChildElms, function (e) {
                                        e.removeAttribute("aria-hidden");
                                    }),
                                h(this.modal, "glightbox-closing"),
                                g(
                                    this.overlay,
                                    "none" == this.settings.openEffect
                                        ? "none"
                                        : this.settings.cssEfects.fade.out
                                ),
                                g(
                                    this.activeSlide,
                                    this.settings.cssEfects[
                                        this.settings.closeEffect
                                    ].out,
                                    function () {
                                        if (
                                            ((e.activeSlide = null),
                                            (e.prevActiveSlideIndex = null),
                                            (e.prevActiveSlide = null),
                                            (e.built = !1),
                                            e.events)
                                        ) {
                                            for (var t in e.events)
                                                e.events.hasOwnProperty(t) &&
                                                    e.events[t].destroy();
                                            e.events = null;
                                        }
                                        var i = document.body;
                                        d(Q, "glightbox-open"),
                                            d(
                                                i,
                                                "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                                            ),
                                            e.modal.parentNode.removeChild(
                                                e.modal
                                            ),
                                            e.trigger("close"),
                                            T(e.settings.onClose) &&
                                                e.settings.onClose();
                                        var n =
                                            document.querySelector(
                                                ".gcss-styles"
                                            );
                                        n && n.parentNode.removeChild(n),
                                            (e.lightboxOpen = !1),
                                            (e.closing = null);
                                    }
                                );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.close(),
                                this.clearAllEvents(),
                                this.baseEvents && this.baseEvents.destroy();
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            var i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            if (!e || !T(t))
                                throw new TypeError(
                                    "Event name and callback must be defined"
                                );
                            this.apiEvents.push({
                                evt: e,
                                once: i,
                                callback: t,
                            });
                        },
                    },
                    {
                        key: "once",
                        value: function (e, t) {
                            this.on(e, t, !0);
                        },
                    },
                    {
                        key: "trigger",
                        value: function (e) {
                            var t = this,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null,
                                n = [];
                            o(this.apiEvents, function (t, s) {
                                var l = t.evt,
                                    o = t.once,
                                    r = t.callback;
                                l == e && (r(i), o && n.push(s));
                            }),
                                n.length &&
                                    o(n, function (e) {
                                        return t.apiEvents.splice(e, 1);
                                    });
                        },
                    },
                    {
                        key: "clearAllEvents",
                        value: function () {
                            this.apiEvents.splice(0, this.apiEvents.length);
                        },
                    },
                    {
                        key: "version",
                        value: function () {
                            return "3.0.9";
                        },
                    },
                ]),
                e
            );
        })();
    return function () {
        var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
            t = new te(e);
        return t.init(), t;
    };
});
var ScrollOut = (function () {
    "use strict";
    function w() {}
    var E,
        t = [],
        S = [];
    function y() {
        S.slice().forEach(function (e) {
            return e();
        });
        var e = t;
        (t = []),
            e.forEach(function (e) {
                return e.f.apply(0, e.a);
            }),
            (E = S.length ? requestAnimationFrame(y) : 0);
    }
    function D(e) {
        return (
            (e = e || w),
            function () {
                e.apply(0, arguments);
            }
        );
    }
    function L(e, t, n) {
        return e < t ? t : n < e ? n : e;
    }
    function P(e) {
        return (0 < e) - (e < 0);
    }
    var n = {};
    function b(e) {
        return n[e] || (n[e] = e.replace(/([A-Z])/g, r));
    }
    function r(e) {
        return "-" + e[0].toLowerCase();
    }
    var A = window,
        H = document.documentElement;
    function O(e, t) {
        return e && 0 != e.length
            ? e.nodeName
                ? [e]
                : [].slice.call(
                      e[0].nodeName ? e : (t || H).querySelectorAll(e)
                  )
            : [];
    }
    var x = D(function (e, t) {
            for (var n in t) e.setAttribute("data-" + b(n), t[n]);
        }),
        W = "scroll",
        N = "resize",
        T = "addEventListener",
        $ = "removeEventListener",
        _ = 0;
    return function (h) {
        var o,
            i,
            c,
            l,
            d,
            p,
            t,
            s = D((h = h || {}).onChange),
            f = D(h.onHidden),
            u = D(h.onShown),
            a = h.cssProps
                ? ((o = h.cssProps),
                  D(function (e, t) {
                      for (var n in t)
                          (1 == o || o[n]) &&
                              e.style.setProperty(
                                  "--" + b(n),
                                  ((r = t[n]), Math.round(1e4 * r) / 1e4)
                              );
                      var r;
                  }))
                : w,
            e = h.scrollingElement,
            g = e ? O(e)[0] : A,
            m = e ? O(e)[0] : H,
            r = ++_,
            v = function (e, t, n) {
                return e[t + r] != (e[t + r] = JSON.stringify(n));
            },
            n = function () {
                l = !0;
            },
            X = function () {
                var a = m.clientWidth,
                    v = m.clientHeight,
                    e = P(-d + (d = m.scrollLeft || A.pageXOffset)),
                    t = P(-p + (p = m.scrollTop || A.pageYOffset)),
                    n = m.scrollLeft / (m.scrollWidth - a || 1),
                    r = m.scrollTop / (m.scrollHeight - v || 1);
                (i = {
                    scrollDirX: e,
                    scrollDirY: t,
                    scrollPercentX: n,
                    scrollPercentY: r,
                }),
                    l &&
                        ((l = !1),
                        (c = O(
                            h.targets || "[data-scroll]",
                            O(h.scope || m)[0]
                        ).map(function (e) {
                            return { $: e, ctx: {} };
                        }))),
                    c.forEach(function (e) {
                        for (
                            var t = e.$, n = t, r = 0, o = 0;
                            (r += n.offsetLeft),
                                (o += n.offsetTop),
                                (n = n.offsetParent) && n != g;

                        );
                        var i = t.clientWidth,
                            c = t.clientHeight,
                            l = (L(r + i, d, d + a) - L(r, d, d + a)) / i,
                            s = (L(o + c, p, p + v) - L(o, p, p + v)) / c,
                            f = L((d - (i / 2 + r - a / 2)) / (a / 2), -1, 1),
                            u = L((p - (c / 2 + o - v / 2)) / (v / 2), -1, 1);
                        e.ctx = {
                            elementHeight: c,
                            elementWidth: i,
                            intersectX: 1 == l ? 0 : P(r - d),
                            intersectY: 1 == s ? 0 : P(o - p),
                            offsetX: r,
                            offsetY: o,
                            viewportX: f,
                            viewportY: u,
                            visibleX: l,
                            visibleY: s,
                            visible: +(h.offset
                                ? h.offset <= p
                                : (h.threshold || 0) < l * s),
                        };
                    });
            },
            Y =
                ((t = function () {
                    if (c) {
                        v(m, "_S", i) &&
                            (x(m, {
                                scrollDirX: i.scrollDirX,
                                scrollDirY: i.scrollDirY,
                            }),
                            a(m, i));
                        for (var e = c.length - 1; -1 < e; e--) {
                            var t = c[e],
                                n = t.$,
                                r = t.ctx,
                                o = r.visible;
                            v(n, "_SO", r) && a(n, r),
                                v(n, "_SV", o) &&
                                    (x(n, { scroll: o ? "in" : "out" }),
                                    s(n, r, m),
                                    (o ? u : f)(n, r, m)),
                                o && h.once && c.splice(e, 1);
                        }
                    }
                }),
                S.push(t),
                E || y(),
                function () {
                    !(S = S.filter(function (e) {
                        return e != t;
                    })).length &&
                        E &&
                        cancelAnimationFrame(E);
                });
        return (
            n(),
            X(),
            A[T](N, n),
            g[T](W, X),
            {
                index: n,
                update: X,
                teardown: function () {
                    Y(), A[$](N, n), g[$](W, X);
                },
            }
        );
    };
})();

!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr("data-slick-index") - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    { data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1",
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "next" : "previous",
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "previous" : "next",
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find(".slick-slide"),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px",
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === i.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});
