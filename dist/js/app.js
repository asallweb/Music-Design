(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
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
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
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
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                dom(el).attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
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
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
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
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function initGallery() {
            if (document.querySelector(".gallery__slider")) new core(".gallery__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoHeight: false,
                speed: 800
            });
        }
        function initArtists() {
            if (document.querySelector(".artists__slider")) new core(".artists__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoHeight: false,
                speed: 800,
                navigation: {
                    prevEl: ".artists__button_prev",
                    nextEl: ".artists__button_next"
                }
            });
        }
        function initSimpleGallery() {
            if (document.querySelector(".simple-gallery__slider")) new core(".simple-gallery__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoHeight: false,
                speed: 800
            });
        }
        window.addEventListener("load", (function(e) {
            initGallery();
            initArtists();
            initSimpleGallery();
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        /*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        var lGEvents = {
            afterAppendSlide: "lgAfterAppendSlide",
            init: "lgInit",
            hasVideo: "lgHasVideo",
            containerResize: "lgContainerResize",
            updateSlides: "lgUpdateSlides",
            afterAppendSubHtml: "lgAfterAppendSubHtml",
            beforeOpen: "lgBeforeOpen",
            afterOpen: "lgAfterOpen",
            slideItemLoad: "lgSlideItemLoad",
            beforeSlide: "lgBeforeSlide",
            afterSlide: "lgAfterSlide",
            posterClick: "lgPosterClick",
            dragStart: "lgDragStart",
            dragMove: "lgDragMove",
            dragEnd: "lgDragEnd",
            beforeNextSlide: "lgBeforeNextSlide",
            beforePrevSlide: "lgBeforePrevSlide",
            beforeClose: "lgBeforeClose",
            afterClose: "lgAfterClose",
            rotateLeft: "lgRotateLeft",
            rotateRight: "lgRotateRight",
            flipHorizontal: "lgFlipHorizontal",
            flipVertical: "lgFlipVertical",
            autoplay: "lgAutoplay",
            autoplayStart: "lgAutoplayStart",
            autoplayStop: "lgAutoplayStop"
        };
        var lightGalleryCoreSettings = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: "",
            startAnimationDuration: 400,
            zoomFromOrigin: true,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: true,
            allowMediaOverlap: false,
            videoMaxSize: "1280-720",
            loadYouTubePoster: true,
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            resetScrollPosition: true,
            hideScrollbar: false,
            closable: true,
            swipeToClose: true,
            closeOnTap: true,
            showCloseIcon: true,
            showMaximizeIcon: false,
            loop: true,
            escKey: true,
            keyPress: true,
            trapFocus: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: false,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: false,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            iframeMaxWidth: "100%",
            iframeMaxHeight: "100%",
            download: true,
            counter: true,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,
            dynamic: false,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false
            },
            plugins: [],
            strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video"
            }
        };
        function initLgPolyfills() {
            (function() {
                if ("function" === typeof window.CustomEvent) return false;
                function CustomEvent(event, params) {
                    params = params || {
                        bubbles: false,
                        cancelable: false,
                        detail: null
                    };
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }
                window.CustomEvent = CustomEvent;
            })();
            (function() {
                if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            })();
        }
        var lgQuery = function() {
            function lgQuery(selector) {
                this.cssVenderPrefixes = [ "TransitionDuration", "TransitionTimingFunction", "Transform", "Transition" ];
                this.selector = this._getSelector(selector);
                this.firstElement = this._getFirstEl();
                return this;
            }
            lgQuery.generateUUID = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    var r = 16 * Math.random() | 0, v = "x" == c ? r : 3 & r | 8;
                    return v.toString(16);
                }));
            };
            lgQuery.prototype._getSelector = function(selector, context) {
                if (void 0 === context) context = document;
                if ("string" !== typeof selector) return selector;
                context = context || document;
                var fl = selector.substring(0, 1);
                if ("#" === fl) return context.querySelector(selector); else return context.querySelectorAll(selector);
            };
            lgQuery.prototype._each = function(func) {
                if (!this.selector) return this;
                if (void 0 !== this.selector.length) [].forEach.call(this.selector, func); else func(this.selector, 0);
                return this;
            };
            lgQuery.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
                var property = cssProperty.replace(/-([a-z])/gi, (function(s, group1) {
                    return group1.toUpperCase();
                }));
                if (-1 !== this.cssVenderPrefixes.indexOf(property)) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                    el.style["webkit" + property] = value;
                    el.style["moz" + property] = value;
                    el.style["ms" + property] = value;
                    el.style["o" + property] = value;
                } else el.style[property] = value;
            };
            lgQuery.prototype._getFirstEl = function() {
                if (this.selector && void 0 !== this.selector.length) return this.selector[0]; else return this.selector;
            };
            lgQuery.prototype.isEventMatched = function(event, eventName) {
                var eventNamespace = eventName.split(".");
                return event.split(".").filter((function(e) {
                    return e;
                })).every((function(e) {
                    return -1 !== eventNamespace.indexOf(e);
                }));
            };
            lgQuery.prototype.attr = function(attr, value) {
                if (void 0 === value) {
                    if (!this.firstElement) return "";
                    return this.firstElement.getAttribute(attr);
                }
                this._each((function(el) {
                    el.setAttribute(attr, value);
                }));
                return this;
            };
            lgQuery.prototype.find = function(selector) {
                return $LG(this._getSelector(selector, this.selector));
            };
            lgQuery.prototype.first = function() {
                if (this.selector && void 0 !== this.selector.length) return $LG(this.selector[0]); else return $LG(this.selector);
            };
            lgQuery.prototype.eq = function(index) {
                return $LG(this.selector[index]);
            };
            lgQuery.prototype.parent = function() {
                return $LG(this.selector.parentElement);
            };
            lgQuery.prototype.get = function() {
                return this._getFirstEl();
            };
            lgQuery.prototype.removeAttr = function(attributes) {
                var attrs = attributes.split(" ");
                this._each((function(el) {
                    attrs.forEach((function(attr) {
                        return el.removeAttribute(attr);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.wrap = function(className) {
                if (!this.firstElement) return this;
                var wrapper = document.createElement("div");
                wrapper.className = className;
                this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
                this.firstElement.parentNode.removeChild(this.firstElement);
                wrapper.appendChild(this.firstElement);
                return this;
            };
            lgQuery.prototype.addClass = function(classNames) {
                if (void 0 === classNames) classNames = "";
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.add(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.removeClass = function(classNames) {
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.remove(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.hasClass = function(className) {
                if (!this.firstElement) return false;
                return this.firstElement.classList.contains(className);
            };
            lgQuery.prototype.hasAttribute = function(attribute) {
                if (!this.firstElement) return false;
                return this.firstElement.hasAttribute(attribute);
            };
            lgQuery.prototype.toggleClass = function(className) {
                if (!this.firstElement) return this;
                if (this.hasClass(className)) this.removeClass(className); else this.addClass(className);
                return this;
            };
            lgQuery.prototype.css = function(property, value) {
                var _this = this;
                this._each((function(el) {
                    _this._setCssVendorPrefix(el, property, value);
                }));
                return this;
            };
            lgQuery.prototype.on = function(events, listener) {
                var _this = this;
                if (!this.selector) return this;
                events.split(" ").forEach((function(event) {
                    if (!Array.isArray(lgQuery.eventListeners[event])) lgQuery.eventListeners[event] = [];
                    lgQuery.eventListeners[event].push(listener);
                    _this.selector.addEventListener(event.split(".")[0], listener);
                }));
                return this;
            };
            lgQuery.prototype.once = function(event, listener) {
                var _this = this;
                this.on(event, (function() {
                    _this.off(event);
                    listener(event);
                }));
                return this;
            };
            lgQuery.prototype.off = function(event) {
                var _this = this;
                if (!this.selector) return this;
                Object.keys(lgQuery.eventListeners).forEach((function(eventName) {
                    if (_this.isEventMatched(event, eventName)) {
                        lgQuery.eventListeners[eventName].forEach((function(listener) {
                            _this.selector.removeEventListener(eventName.split(".")[0], listener);
                        }));
                        lgQuery.eventListeners[eventName] = [];
                    }
                }));
                return this;
            };
            lgQuery.prototype.trigger = function(event, detail) {
                if (!this.firstElement) return this;
                var customEvent = new CustomEvent(event.split(".")[0], {
                    detail: detail || null
                });
                this.firstElement.dispatchEvent(customEvent);
                return this;
            };
            lgQuery.prototype.load = function(url) {
                var _this = this;
                fetch(url).then((function(res) {
                    return res.text();
                })).then((function(html) {
                    _this.selector.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.html = function(html) {
                if (void 0 === html) {
                    if (!this.firstElement) return "";
                    return this.firstElement.innerHTML;
                }
                this._each((function(el) {
                    el.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.append = function(html) {
                this._each((function(el) {
                    if ("string" === typeof html) el.insertAdjacentHTML("beforeend", html); else el.appendChild(html);
                }));
                return this;
            };
            lgQuery.prototype.prepend = function(html) {
                this._each((function(el) {
                    el.insertAdjacentHTML("afterbegin", html);
                }));
                return this;
            };
            lgQuery.prototype.remove = function() {
                this._each((function(el) {
                    el.parentNode.removeChild(el);
                }));
                return this;
            };
            lgQuery.prototype.empty = function() {
                this._each((function(el) {
                    el.innerHTML = "";
                }));
                return this;
            };
            lgQuery.prototype.scrollTop = function(scrollTop) {
                if (void 0 !== scrollTop) {
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;
                    return this;
                } else return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            };
            lgQuery.prototype.scrollLeft = function(scrollLeft) {
                if (void 0 !== scrollLeft) {
                    document.body.scrollLeft = scrollLeft;
                    document.documentElement.scrollLeft = scrollLeft;
                    return this;
                } else return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            };
            lgQuery.prototype.offset = function() {
                if (!this.firstElement) return {
                    left: 0,
                    top: 0
                };
                var rect = this.firstElement.getBoundingClientRect();
                var bodyMarginLeft = $LG("body").style().marginLeft;
                return {
                    left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
                    top: rect.top + this.scrollTop()
                };
            };
            lgQuery.prototype.style = function() {
                if (!this.firstElement) return {};
                return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
            };
            lgQuery.prototype.width = function() {
                var style = this.style();
                return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            };
            lgQuery.prototype.height = function() {
                var style = this.style();
                return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
            };
            lgQuery.eventListeners = {};
            return lgQuery;
        }();
        function $LG(selector) {
            initLgPolyfills();
            return new lgQuery(selector);
        }
        var defaultDynamicOptions = [ "src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl" ];
        function convertToData(attr) {
            if ("href" === attr) return "src";
            attr = attr.replace("data-", "");
            attr = attr.charAt(0).toLowerCase() + attr.slice(1);
            attr = attr.replace(/-([a-z])/g, (function(g) {
                return g[1].toUpperCase();
            }));
            return attr;
        }
        var utils = {
            getSize: function(el, container, spacing, defaultLgSize) {
                if (void 0 === spacing) spacing = 0;
                var LGel = $LG(el);
                var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
                if (!lgSize) return;
                var isResponsiveSizes = lgSize.split(",");
                if (isResponsiveSizes[1]) {
                    var wWidth = window.innerWidth;
                    for (var i = 0; i < isResponsiveSizes.length; i++) {
                        var size_1 = isResponsiveSizes[i];
                        var responsiveWidth = parseInt(size_1.split("-")[2], 10);
                        if (responsiveWidth > wWidth) {
                            lgSize = size_1;
                            break;
                        }
                        if (i === isResponsiveSizes.length - 1) lgSize = size_1;
                    }
                }
                var size = lgSize.split("-");
                var width = parseInt(size[0], 10);
                var height = parseInt(size[1], 10);
                var cWidth = container.width();
                var cHeight = container.height() - spacing;
                var maxWidth = Math.min(cWidth, width);
                var maxHeight = Math.min(cHeight, height);
                var ratio = Math.min(maxWidth / width, maxHeight / height);
                return {
                    width: width * ratio,
                    height: height * ratio
                };
            },
            getTransform: function(el, container, top, bottom, imageSize) {
                if (!imageSize) return;
                var LGel = $LG(el).find("img").first();
                if (!LGel.get()) return;
                var containerRect = container.get().getBoundingClientRect();
                var wWidth = containerRect.width;
                var wHeight = container.height() - (top + bottom);
                var elWidth = LGel.width();
                var elHeight = LGel.height();
                var elStyle = LGel.style();
                var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
                var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
                var scX = elWidth / imageSize.width;
                var scY = elHeight / imageSize.height;
                var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
                return transform;
            },
            getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
                var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
                return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
            },
            getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
                var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
                var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
                var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
                var sourceTag = "";
                if (sources) {
                    var sourceObj = "string" === typeof sources ? JSON.parse(sources) : sources;
                    sourceTag = sourceObj.map((function(source) {
                        var attrs = "";
                        Object.keys(source).forEach((function(key) {
                            attrs += " " + key + '="' + source[key] + '"';
                        }));
                        return "<source " + attrs + "></source>";
                    }));
                }
                return "" + sourceTag + imgMarkup;
            },
            getResponsiveSrc: function(srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                var src = "";
                for (var i = 0; i < srcItms.length; i++) {
                    var _src = srcItms[i].split(" ");
                    if ("" === _src[0]) _src.splice(0, 1);
                    rsSrc.push(_src[0]);
                    rsWidth.push(_src[1]);
                }
                var wWidth = window.innerWidth;
                for (var j = 0; j < rsWidth.length; j++) if (parseInt(rsWidth[j], 10) > wWidth) {
                    src = rsSrc[j];
                    break;
                }
                return src;
            },
            isImageLoaded: function(img) {
                if (!img) return false;
                if (!img.complete) return false;
                if (0 === img.naturalWidth) return false;
                return true;
            },
            getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
                var videoClass = "";
                if (_isVideo && _isVideo.youtube) videoClass = "lg-has-youtube"; else if (_isVideo && _isVideo.vimeo) videoClass = "lg-has-vimeo"; else videoClass = "lg-has-html5";
                return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
            },
            getFocusableElements: function(container) {
                var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                var visibleElements = [].filter.call(elements, (function(element) {
                    var style = window.getComputedStyle(element);
                    return "none" !== style.display && "hidden" !== style.visibility;
                }));
                return visibleElements;
            },
            getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
                var dynamicElements = [];
                var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
                [].forEach.call(items, (function(item) {
                    var dynamicEl = {};
                    for (var i = 0; i < item.attributes.length; i++) {
                        var attr = item.attributes[i];
                        if (attr.specified) {
                            var dynamicAttr = convertToData(attr.name);
                            var label = "";
                            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) label = dynamicAttr;
                            if (label) dynamicEl[label] = attr.value;
                        }
                    }
                    var currentItem = $LG(item);
                    var alt = currentItem.find("img").first().attr("alt");
                    var title = currentItem.attr("title");
                    var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
                    dynamicEl.thumb = thumb;
                    if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) dynamicEl.subHtml = title || alt || "";
                    dynamicEl.alt = alt || title || "";
                    dynamicElements.push(dynamicEl);
                }));
                return dynamicElements;
            },
            isMobile: function() {
                return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },
            isVideo: function(src, isHTML5VIdeo, index) {
                if (!src) if (isHTML5VIdeo) return {
                    html5: true
                }; else {
                    console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                    return;
                }
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
                var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
                var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                if (youtube) return {
                    youtube
                }; else if (vimeo) return {
                    vimeo
                }; else if (wistia) return {
                    wistia
                };
            }
        };
        var lgId = 0;
        var LightGallery = function() {
            function LightGallery(element, options) {
                this.lgOpened = false;
                this.index = 0;
                this.plugins = [];
                this.lGalleryOn = false;
                this.lgBusy = false;
                this.currentItemsInDom = [];
                this.prevScrollTop = 0;
                this.bodyPaddingRight = 0;
                this.isDummyImageRemoved = false;
                this.dragOrSwipeEnabled = false;
                this.mediaContainerPosition = {
                    top: 0,
                    bottom: 0
                };
                if (!element) return this;
                lgId++;
                this.lgId = lgId;
                this.el = element;
                this.LGel = $LG(element);
                this.generateSettings(options);
                this.buildModules();
                if (this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                this.galleryItems = this.getItems();
                this.normalizeSettings();
                this.init();
                this.validateLicense();
                return this;
            }
            LightGallery.prototype.generateSettings = function(options) {
                this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
                if (this.settings.isMobile && "function" === typeof this.settings.isMobile ? this.settings.isMobile() : utils.isMobile()) {
                    var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = __assign(__assign({}, this.settings), mobileSettings);
                }
            };
            LightGallery.prototype.normalizeSettings = function() {
                if (this.settings.slideEndAnimation) this.settings.hideControlOnEnd = false;
                if (!this.settings.closable) this.settings.swipeToClose = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                if (this.settings.dynamic) this.zoomFromOrigin = false;
                if (!this.settings.container) this.settings.container = document.body;
                this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
            };
            LightGallery.prototype.init = function() {
                var _this = this;
                this.addSlideVideoInfo(this.galleryItems);
                this.buildStructure();
                this.LGel.trigger(lGEvents.init, {
                    instance: this
                });
                if (this.settings.keyPress) this.keyPress();
                setTimeout((function() {
                    _this.enableDrag();
                    _this.enableSwipe();
                    _this.triggerPosterClick();
                }), 50);
                this.arrow();
                if (this.settings.mousewheel) this.mousewheel();
                if (!this.settings.dynamic) this.openGalleryOnItemClick();
            };
            LightGallery.prototype.openGalleryOnItemClick = function() {
                var _this = this;
                var _loop_1 = function(index) {
                    var element = this_1.items[index];
                    var $element = $LG(element);
                    var uuid = lgQuery.generateUUID();
                    $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, (function(e) {
                        e.preventDefault();
                        var currentItemIndex = _this.settings.index || index;
                        _this.openGallery(currentItemIndex, element);
                    }));
                };
                var this_1 = this;
                for (var index = 0; index < this.items.length; index++) _loop_1(index);
            };
            LightGallery.prototype.buildModules = function() {
                var _this = this;
                this.settings.plugins.forEach((function(plugin) {
                    _this.plugins.push(new plugin(_this, $LG));
                }));
            };
            LightGallery.prototype.validateLicense = function() {
                if (!this.settings.licenseKey) console.error("Please provide a valid license key"); else if ("0000-0000-000-0000" === this.settings.licenseKey) console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
            };
            LightGallery.prototype.getSlideItem = function(index) {
                return $LG(this.getSlideItemId(index));
            };
            LightGallery.prototype.getSlideItemId = function(index) {
                return "#lg-item-" + this.lgId + "-" + index;
            };
            LightGallery.prototype.getIdName = function(id) {
                return id + "-" + this.lgId;
            };
            LightGallery.prototype.getElementById = function(id) {
                return $LG("#" + this.getIdName(id));
            };
            LightGallery.prototype.manageSingleSlideClassName = function() {
                if (this.galleryItems.length < 2) this.outer.addClass("lg-single-item"); else this.outer.removeClass("lg-single-item");
            };
            LightGallery.prototype.buildStructure = function() {
                var _this = this;
                var container = this.$container && this.$container.get();
                if (container) return;
                var controls = "";
                var subHtmlCont = "";
                if (this.settings.controls) controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
                if (".lg-item" !== this.settings.appendSubHtmlTo) subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
                var addClasses = "";
                if (this.settings.allowMediaOverlap) addClasses += "lg-media-overlap ";
                var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
                var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
                var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
                var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
                var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
                var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                $LG(this.settings.container).append(template);
                if (document.body !== this.settings.container) $LG(this.settings.container).css("position", "relative");
                this.outer = this.getElementById("lg-outer");
                this.$lgComponents = this.getElementById("lg-components");
                this.$backdrop = this.getElementById("lg-backdrop");
                this.$container = this.getElementById("lg-container");
                this.$inner = this.getElementById("lg-inner");
                this.$content = this.getElementById("lg-content");
                this.$toolbar = this.getElementById("lg-toolbar");
                this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                var outerClassNames = this.settings.mode + " ";
                this.manageSingleSlideClassName();
                if (this.settings.enableDrag) outerClassNames += "lg-grab ";
                this.outer.addClass(outerClassNames);
                this.$inner.css("transition-timing-function", this.settings.easing);
                this.$inner.css("transition-duration", this.settings.speed + "ms");
                if (this.settings.download) this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
                this.counter();
                $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                    _this.refreshOnResize();
                }));
                this.hideBars();
                this.manageCloseGallery();
                this.toggleMaximize();
                this.initModules();
            };
            LightGallery.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var currentGalleryItem = this.galleryItems[this.index];
                    var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
                    this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    if (__slideVideoInfo) this.resizeVideoSlide(this.index, this.currentImageSize);
                    if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
                    }
                    this.LGel.trigger(lGEvents.containerResize);
                }
            };
            LightGallery.prototype.resizeVideoSlide = function(index, imageSize) {
                var lgVideoStyle = this.getVideoContStyle(imageSize);
                var currentSlide = this.getSlideItem(index);
                currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
            };
            LightGallery.prototype.updateSlides = function(items, index) {
                if (this.index > items.length - 1) this.index = items.length - 1;
                if (1 === items.length) this.index = 0;
                if (!items.length) {
                    this.closeGallery();
                    return;
                }
                var currentSrc = this.galleryItems[index].src;
                this.galleryItems = items;
                this.updateControls();
                this.$inner.empty();
                this.currentItemsInDom = [];
                var _index = 0;
                this.galleryItems.some((function(galleryItem, itemIndex) {
                    if (galleryItem.src === currentSrc) {
                        _index = itemIndex;
                        return true;
                    }
                    return false;
                }));
                this.currentItemsInDom = this.organizeSlideItems(_index, -1);
                this.loadContent(_index, true);
                this.getSlideItem(_index).addClass("lg-current");
                this.index = _index;
                this.updateCurrentCounter(_index);
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.getItems = function() {
                this.items = [];
                if (!this.settings.dynamic) {
                    if ("this" === this.settings.selector) this.items.push(this.el); else if (this.settings.selector) if ("string" === typeof this.settings.selector) if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin.find(this.settings.selector).get();
                    } else this.items = this.el.querySelectorAll(this.settings.selector); else this.items = this.settings.selector; else this.items = this.el.children;
                    return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
                } else return this.settings.dynamicEl || [];
            };
            LightGallery.prototype.shouldHideScrollbar = function() {
                return this.settings.hideScrollbar && document.body === this.settings.container;
            };
            LightGallery.prototype.hideScrollbar = function() {
                if (!this.shouldHideScrollbar()) return;
                this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
                var bodyRect = document.documentElement.getBoundingClientRect();
                var scrollbarWidth = window.innerWidth - bodyRect.width;
                $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
                $LG(document.body).addClass("lg-overlay-open");
            };
            LightGallery.prototype.resetScrollBar = function() {
                if (!this.shouldHideScrollbar()) return;
                $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
                $LG(document.body).removeClass("lg-overlay-open");
            };
            LightGallery.prototype.openGallery = function(index, element) {
                var _this = this;
                if (void 0 === index) index = this.settings.index;
                if (this.lgOpened) return;
                this.lgOpened = true;
                this.outer.removeClass("lg-hide-items");
                this.hideScrollbar();
                this.$container.addClass("lg-show");
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
                this.currentItemsInDom = itemsToBeInsertedToDom;
                var items = "";
                itemsToBeInsertedToDom.forEach((function(item) {
                    items = items + '<div id="' + item + '" class="lg-item"></div>';
                }));
                this.$inner.append(items);
                this.addHtml(index);
                var transform = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
                if (!this.settings.allowMediaOverlap) this.setMediaContainerPosition(top, bottom);
                var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
                if (this.zoomFromOrigin && element) {
                    this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
                }
                if (!this.zoomFromOrigin || !transform) {
                    this.outer.addClass(this.settings.startClass);
                    this.getSlideItem(index).removeClass("lg-complete");
                }
                var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                setTimeout((function() {
                    _this.outer.addClass("lg-components-open");
                }), timeout);
                this.index = index;
                this.LGel.trigger(lGEvents.beforeOpen);
                this.getSlideItem(index).addClass("lg-current");
                this.lGalleryOn = false;
                this.prevScrollTop = $LG(window).scrollTop();
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) {
                        var currentSlide_1 = _this.getSlideItem(index);
                        currentSlide_1.css("transform", transform);
                        setTimeout((function() {
                            currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                            _this.outer.addClass("lg-zoom-from-image");
                        }));
                        setTimeout((function() {
                            currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                        }), 100);
                    }
                    setTimeout((function() {
                        _this.$backdrop.addClass("in");
                        _this.$container.addClass("lg-show-in");
                    }), 10);
                    setTimeout((function() {
                        if (_this.settings.trapFocus && document.body === _this.settings.container) _this.trapFocus();
                    }), _this.settings.backdropDuration + 50);
                    if (!_this.zoomFromOrigin || !transform) setTimeout((function() {
                        _this.outer.addClass("lg-visible");
                    }), _this.settings.backdropDuration);
                    _this.slide(index, false, false, false);
                    _this.LGel.trigger(lGEvents.afterOpen);
                }));
                if (document.body === this.settings.container) $LG("html").addClass("lg-on");
            };
            LightGallery.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var top = this.$toolbar.get().clientHeight || 0;
                var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
                var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
                var thumbContainer = this.outer.find(".lg-thumb-outer").get();
                var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
                var bottom = thumbHeight + captionHeight;
                return {
                    top,
                    bottom
                };
            };
            LightGallery.prototype.setMediaContainerPosition = function(top, bottom) {
                if (void 0 === top) top = 0;
                if (void 0 === bottom) bottom = 0;
                this.$content.css("top", top + "px").css("bottom", bottom + "px");
            };
            LightGallery.prototype.hideBars = function() {
                var _this = this;
                setTimeout((function() {
                    _this.outer.removeClass("lg-hide-items");
                    if (_this.settings.hideBarsDelay > 0) {
                        _this.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            _this.outer.removeClass("lg-hide-items");
                            clearTimeout(_this.hideBarTimeout);
                            _this.hideBarTimeout = setTimeout((function() {
                                _this.outer.addClass("lg-hide-items");
                            }), _this.settings.hideBarsDelay);
                        }));
                        _this.outer.trigger("mousemove.lg");
                    }
                }), this.settings.showBarsAfter);
            };
            LightGallery.prototype.initPictureFill = function($img) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [ $img.get() ]
                    });
                } catch (e) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
                }
            };
            LightGallery.prototype.counter = function() {
                if (this.settings.counter) {
                    var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(counterHtml);
                }
            };
            LightGallery.prototype.addHtml = function(index) {
                var subHtml;
                var subHtmlUrl;
                if (this.galleryItems[index].subHtmlUrl) subHtmlUrl = this.galleryItems[index].subHtmlUrl; else subHtml = this.galleryItems[index].subHtml;
                if (!subHtmlUrl) if (subHtml) {
                    var fL = subHtml.substring(0, 1);
                    if ("." === fL || "#" === fL) if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) subHtml = $LG(this.items).eq(index).find(subHtml).first().html(); else subHtml = $LG(subHtml).first().html();
                } else subHtml = "";
                if (".lg-item" !== this.settings.appendSubHtmlTo) if (subHtmlUrl) this.outer.find(".lg-sub-html").load(subHtmlUrl); else this.outer.find(".lg-sub-html").html(subHtml); else {
                    var currentSlide = $LG(this.getSlideItemId(index));
                    if (subHtmlUrl) currentSlide.load(subHtmlUrl); else currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
                }
                if ("undefined" !== typeof subHtml && null !== subHtml) if ("" === subHtml) this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"); else this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
                this.LGel.trigger(lGEvents.afterAppendSubHtml, {
                    index
                });
            };
            LightGallery.prototype.preload = function(index) {
                for (var i = 1; i <= this.settings.preload; i++) {
                    if (i >= this.galleryItems.length - index) break;
                    this.loadContent(index + i, false);
                }
                for (var j = 1; j <= this.settings.preload; j++) {
                    if (index - j < 0) break;
                    this.loadContent(index - j, false);
                }
            };
            LightGallery.prototype.getDummyImgStyles = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getVideoContStyle = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getDummyImageContent = function($currentSlide, index, alt) {
                var $currentItem;
                if (!this.settings.dynamic) $currentItem = $LG(this.items).eq(index);
                if ($currentItem) {
                    var _dummyImgSrc = void 0;
                    if (!this.settings.exThumbImage) _dummyImgSrc = $currentItem.find("img").first().attr("src"); else _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
                    if (!_dummyImgSrc) return "";
                    var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                    var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
                    $currentSlide.addClass("lg-first-slide");
                    this.outer.addClass("lg-first-slide-loading");
                    return dummyImgContent;
                }
                return "";
            };
            LightGallery.prototype.setImgMarkup = function(src, $currentSlide, index) {
                var currentGalleryItem = this.galleryItems[index];
                var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var imgContent = "";
                var altAttr = alt ? 'alt="' + alt + '"' : "";
                if (this.isFirstSlideWithZoomAnimation()) imgContent = this.getDummyImageContent($currentSlide, index, altAttr); else imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
                var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
                $currentSlide.prepend(imgMarkup);
            };
            LightGallery.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
                var mediaObject = $slide.find(".lg-object").first();
                if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) onLoad(); else {
                    mediaObject.on("load.lg error.lg", (function() {
                        onLoad && onLoad();
                    }));
                    mediaObject.on("error.lg", (function() {
                        onError && onError();
                    }));
                }
            };
            LightGallery.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
                var _this = this;
                this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, (function() {
                    _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
                }), (function() {
                    currentSlide.addClass("lg-complete lg-complete_");
                    currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
                }));
            };
            LightGallery.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var _speed = isFirstSlide && "video" === this.getSlideType(currentGalleryItem) && !currentGalleryItem.poster ? speed : 0;
                setTimeout((function() {
                    $currentSlide.addClass("lg-complete lg-complete_");
                    _this.LGel.trigger(lGEvents.slideItemLoad, {
                        index,
                        delay: delay || 0,
                        isFirstSlide
                    });
                }), _speed);
            };
            LightGallery.prototype.isFirstSlideWithZoomAnimation = function() {
                return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
            };
            LightGallery.prototype.addSlideVideoInfo = function(items) {
                var _this = this;
                items.forEach((function(element, index) {
                    element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
                    if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
                }));
            };
            LightGallery.prototype.loadContent = function(index, rec) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var $currentSlide = $LG(this.getSlideItemId(index));
                var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var src = currentGalleryItem.src;
                var video = currentGalleryItem.video;
                var _html5Video = video && "string" === typeof video ? JSON.parse(video) : video;
                if (currentGalleryItem.responsive) {
                    var srcDyItms = currentGalleryItem.responsive.split(",");
                    src = utils.getResponsiveSrc(srcDyItms) || src;
                }
                var videoInfo = currentGalleryItem.__slideVideoInfo;
                var lgVideoStyle = "";
                var iframe = !!currentGalleryItem.iframe;
                var isFirstSlide = !this.lGalleryOn;
                var delay = 0;
                if (isFirstSlide) if (this.zoomFromOrigin && this.currentImageSize) delay = this.settings.startAnimationDuration + 10; else delay = this.settings.backdropDuration + 10;
                if (!$currentSlide.hasClass("lg-loaded")) {
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                        lgVideoStyle = this.getVideoContStyle(videoSize);
                    }
                    if (iframe) {
                        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                        $currentSlide.prepend(markup);
                    } else if (poster) {
                        var dummyImg = "";
                        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                        if (hasStartAnimation) dummyImg = this.getDummyImageContent($currentSlide, index, "");
                        markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                        $currentSlide.prepend(markup);
                    } else if (videoInfo) {
                        markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                        $currentSlide.prepend(markup);
                    } else {
                        this.setImgMarkup(src, $currentSlide, index);
                        if (srcset || sources) {
                            var $img = $currentSlide.find(".lg-object");
                            this.initPictureFill($img);
                        }
                    }
                    if (poster || videoInfo) this.LGel.trigger(lGEvents.hasVideo, {
                        index,
                        src,
                        html5Video: _html5Video,
                        hasPoster: !!poster
                    });
                    this.LGel.trigger(lGEvents.afterAppendSlide, {
                        index
                    });
                    if (this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo) this.addHtml(index);
                }
                var _speed = 0;
                if (delay && !$LG(document.body).hasClass("lg-from-hash")) _speed = delay;
                if (this.isFirstSlideWithZoomAnimation()) {
                    setTimeout((function() {
                        $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
                    }), this.settings.startAnimationDuration + 100);
                    if (!$currentSlide.hasClass("lg-loaded")) setTimeout((function() {
                        if ("image" === _this.getSlideType(currentGalleryItem)) {
                            var alt = currentGalleryItem.alt;
                            var altAttr = alt ? 'alt="' + alt + '"' : "";
                            $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                            if (srcset || sources) {
                                var $img = $currentSlide.find(".lg-object");
                                _this.initPictureFill($img);
                            }
                        }
                        if ("image" === _this.getSlideType(currentGalleryItem) || "video" === _this.getSlideType(currentGalleryItem) && poster) {
                            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }));
                        }
                    }), this.settings.startAnimationDuration + 100);
                }
                $currentSlide.addClass("lg-loaded");
                if (!this.isFirstSlideWithZoomAnimation() || "video" === this.getSlideType(currentGalleryItem) && !poster) this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
                if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) setTimeout((function() {
                    $currentSlide.addClass("lg-complete");
                }), this.settings.backdropDuration);
                this.lGalleryOn = true;
                if (true === rec) if (!$currentSlide.hasClass("lg-complete_")) $currentSlide.find(".lg-object").first().on("load.lg error.lg", (function() {
                    _this.preload(index);
                })); else this.preload(index);
            };
            LightGallery.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
                var _this = this;
                setTimeout((function() {
                    $currentSlide.find(".lg-dummy-img").remove();
                    $currentSlide.removeClass("lg-first-slide");
                    _this.outer.removeClass("lg-first-slide-loading");
                    _this.isDummyImageRemoved = true;
                    _this.preload(index);
                }), speed + 300);
            };
            LightGallery.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
                var _this = this;
                if (void 0 === numberOfItems) numberOfItems = 0;
                var itemsToBeInsertedToDom = [];
                var possibleNumberOfItems = Math.max(numberOfItems, 3);
                possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
                var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
                if (this.galleryItems.length <= 3) {
                    this.galleryItems.forEach((function(_element, index) {
                        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
                    }));
                    return itemsToBeInsertedToDom;
                }
                if (index < (this.galleryItems.length - 1) / 2) {
                    for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    var numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
                } else {
                    for (idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
                }
                if (this.settings.loop) if (index === this.galleryItems.length - 1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0); else if (0 === index) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
                if (-1 === itemsToBeInsertedToDom.indexOf(prevIndexItem)) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.organizeSlideItems = function(index, prevIndex) {
                var _this = this;
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
                itemsToBeInsertedToDom.forEach((function(item) {
                    if (-1 === _this.currentItemsInDom.indexOf(item)) _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
                }));
                this.currentItemsInDom.forEach((function(item) {
                    if (-1 === itemsToBeInsertedToDom.indexOf(item)) $LG("#" + item).remove();
                }));
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.getPreviousSlideIndex = function() {
                var prevIndex = 0;
                try {
                    var currentItemId = this.outer.find(".lg-current").first().attr("id");
                    prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
                } catch (error) {
                    prevIndex = 0;
                }
                return prevIndex;
            };
            LightGallery.prototype.setDownloadValue = function(index) {
                if (this.settings.download) {
                    var currentGalleryItem = this.galleryItems[index];
                    var hideDownloadBtn = false === currentGalleryItem.downloadUrl || "false" === currentGalleryItem.downloadUrl;
                    if (hideDownloadBtn) this.outer.addClass("lg-hide-download"); else {
                        var $download = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download");
                        $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                        if (currentGalleryItem.download) $download.attr("download", currentGalleryItem.download);
                    }
                }
            };
            LightGallery.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
                var _this = this;
                if (this.lGalleryOn) previousSlideItem.addClass("lg-slide-progress");
                setTimeout((function() {
                    _this.outer.addClass("lg-no-trans");
                    _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
                    if ("prev" === direction) {
                        currentSlideItem.addClass("lg-prev-slide");
                        previousSlideItem.addClass("lg-next-slide");
                    } else {
                        currentSlideItem.addClass("lg-next-slide");
                        previousSlideItem.addClass("lg-prev-slide");
                    }
                    setTimeout((function() {
                        _this.outer.find(".lg-item").removeClass("lg-current");
                        currentSlideItem.addClass("lg-current");
                        _this.outer.removeClass("lg-no-trans");
                    }), 50);
                }), this.lGalleryOn ? this.settings.slideDelay : 0);
            };
            LightGallery.prototype.slide = function(index, fromTouch, fromThumb, direction) {
                var _this = this;
                var prevIndex = this.getPreviousSlideIndex();
                this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
                if (this.lGalleryOn && prevIndex === index) return;
                var numberOfGalleryItems = this.galleryItems.length;
                if (!this.lgBusy) {
                    if (this.settings.counter) this.updateCurrentCounter(index);
                    var currentSlideItem = this.getSlideItem(index);
                    var previousSlideItem_1 = this.getSlideItem(prevIndex);
                    var currentGalleryItem = this.galleryItems[index];
                    var videoInfo = currentGalleryItem.__slideVideoInfo;
                    this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
                    this.setDownloadValue(index);
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                        this.resizeVideoSlide(index, videoSize);
                    }
                    this.LGel.trigger(lGEvents.beforeSlide, {
                        prevIndex,
                        index,
                        fromTouch: !!fromTouch,
                        fromThumb: !!fromThumb
                    });
                    this.lgBusy = true;
                    clearTimeout(this.hideBarTimeout);
                    this.arrowDisable(index);
                    if (!direction) if (index < prevIndex) direction = "prev"; else if (index > prevIndex) direction = "next";
                    if (!fromTouch) this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1); else {
                        this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                        var touchPrev = void 0;
                        var touchNext = void 0;
                        if (numberOfGalleryItems > 2) {
                            touchPrev = index - 1;
                            touchNext = index + 1;
                            if (0 === index && prevIndex === numberOfGalleryItems - 1) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            } else if (index === numberOfGalleryItems - 1 && 0 === prevIndex) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            }
                        } else {
                            touchPrev = 0;
                            touchNext = 1;
                        }
                        if ("prev" === direction) this.getSlideItem(touchNext).addClass("lg-next-slide"); else this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                        currentSlideItem.addClass("lg-current");
                    }
                    if (!this.lGalleryOn) this.loadContent(index, true); else setTimeout((function() {
                        _this.loadContent(index, true);
                        if (".lg-item" !== _this.settings.appendSubHtmlTo) _this.addHtml(index);
                    }), this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
                    setTimeout((function() {
                        _this.lgBusy = false;
                        previousSlideItem_1.removeClass("lg-slide-progress");
                        _this.LGel.trigger(lGEvents.afterSlide, {
                            prevIndex,
                            index,
                            fromTouch,
                            fromThumb
                        });
                    }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
                }
                this.index = index;
            };
            LightGallery.prototype.updateCurrentCounter = function(index) {
                this.getElementById("lg-counter-current").html(index + 1 + "");
            };
            LightGallery.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
            };
            LightGallery.prototype.getSlideType = function(item) {
                if (item.__slideVideoInfo) return "video"; else if (item.iframe) return "iframe"; else return "image";
            };
            LightGallery.prototype.touchMove = function(startCoords, endCoords, e) {
                var distanceX = endCoords.pageX - startCoords.pageX;
                var distanceY = endCoords.pageY - startCoords.pageY;
                var allowSwipe = false;
                if (this.swipeDirection) allowSwipe = true; else if (Math.abs(distanceX) > 15) {
                    this.swipeDirection = "horizontal";
                    allowSwipe = true;
                } else if (Math.abs(distanceY) > 15) {
                    this.swipeDirection = "vertical";
                    allowSwipe = true;
                }
                if (!allowSwipe) return;
                var $currentSlide = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.outer.addClass("lg-dragging");
                    this.setTranslate($currentSlide, distanceX, 0);
                    var width = $currentSlide.get().offsetWidth;
                    var slideWidthAmount = 15 * width / 100;
                    var gutter = slideWidthAmount - Math.abs(10 * distanceX / 100);
                    this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
                    this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
                } else if ("vertical" === this.swipeDirection) if (this.settings.swipeToClose) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.$container.addClass("lg-dragging-vertical");
                    var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                    this.$backdrop.css("opacity", opacity);
                    var scale = 1 - Math.abs(distanceY) / (2 * window.innerWidth);
                    this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                    if (Math.abs(distanceY) > 100) this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
                }
            };
            LightGallery.prototype.touchEnd = function(endCoords, startCoords, event) {
                var _this = this;
                var distance;
                if ("lg-slide" !== this.settings.mode) this.outer.addClass("lg-slide");
                setTimeout((function() {
                    _this.$container.removeClass("lg-dragging-vertical");
                    _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var triggerClick = true;
                    if ("horizontal" === _this.swipeDirection) {
                        distance = endCoords.pageX - startCoords.pageX;
                        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToNextSlide(true);
                            triggerClick = false;
                        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToPrevSlide(true);
                            triggerClick = false;
                        }
                    } else if ("vertical" === _this.swipeDirection) {
                        distance = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                            _this.closeGallery();
                            return;
                        } else _this.$backdrop.css("opacity", 1);
                    }
                    _this.outer.find(".lg-item").removeAttr("style");
                    if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                    }
                    _this.swipeDirection = void 0;
                }));
                setTimeout((function() {
                    if (!_this.outer.hasClass("lg-dragging") && "lg-slide" !== _this.settings.mode) _this.outer.removeClass("lg-slide");
                }), this.settings.speed + 100);
            };
            LightGallery.prototype.enableSwipe = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isMoved = false;
                var isSwiping = false;
                if (this.settings.enableSwipe) {
                    this.$inner.on("touchstart.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && 1 === e.targetTouches.length) {
                            isSwiping = true;
                            _this.touchAction = "swipe";
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.targetTouches[0].pageX,
                                pageY: e.targetTouches[0].pageY
                            };
                        }
                    }));
                    this.$inner.on("touchmove.lg", (function(e) {
                        if (isSwiping && "swipe" === _this.touchAction && 1 === e.targetTouches.length) {
                            endCoords = {
                                pageX: e.targetTouches[0].pageX,
                                pageY: e.targetTouches[0].pageY
                            };
                            _this.touchMove(startCoords, endCoords, e);
                            isMoved = true;
                        }
                    }));
                    this.$inner.on("touchend.lg", (function(event) {
                        if ("swipe" === _this.touchAction) {
                            if (isMoved) {
                                isMoved = false;
                                _this.touchEnd(endCoords, startCoords, event);
                            } else if (isSwiping) {
                                var target = $LG(event.target);
                                if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                            }
                            _this.touchAction = void 0;
                            isSwiping = false;
                        }
                    }));
                }
            };
            LightGallery.prototype.enableDrag = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isDraging = false;
                var isMoved = false;
                if (this.settings.enableDrag) {
                    this.outer.on("mousedown.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                            e.preventDefault();
                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                };
                                isDraging = true;
                                _this.outer.get().scrollLeft += 1;
                                _this.outer.get().scrollLeft -= 1;
                                _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                                _this.LGel.trigger(lGEvents.dragStart);
                            }
                        }
                    }));
                    $LG(window).on("mousemove.lg.global" + this.lgId, (function(e) {
                        if (isDraging && _this.lgOpened) {
                            isMoved = true;
                            endCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            };
                            _this.touchMove(startCoords, endCoords);
                            _this.LGel.trigger(lGEvents.dragMove);
                        }
                    }));
                    $LG(window).on("mouseup.lg.global" + this.lgId, (function(event) {
                        if (!_this.lgOpened) return;
                        var target = $LG(event.target);
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords, startCoords, event);
                            _this.LGel.trigger(lGEvents.dragEnd);
                        } else if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                        if (isDraging) {
                            isDraging = false;
                            _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                        }
                    }));
                }
            };
            LightGallery.prototype.triggerPosterClick = function() {
                var _this = this;
                this.$inner.on("click.lg", (function(event) {
                    if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) _this.LGel.trigger(lGEvents.posterClick);
                }));
            };
            LightGallery.prototype.manageSwipeClass = function() {
                var _touchNext = this.index + 1;
                var _touchPrev = this.index - 1;
                if (this.settings.loop && this.galleryItems.length > 2) if (0 === this.index) _touchPrev = this.galleryItems.length - 1; else if (this.index === this.galleryItems.length - 1) _touchNext = 0;
                this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
                if (_touchPrev > -1) this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
                this.getSlideItem(_touchNext).addClass("lg-next-slide");
            };
            LightGallery.prototype.goToNextSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index + 1 < this.galleryItems.length) {
                    this.index++;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-right-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-right-end");
                    }), 400);
                }
            };
            LightGallery.prototype.goToPrevSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index > 0) {
                    this.index--;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-left-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-left-end");
                    }), 400);
                }
            };
            LightGallery.prototype.keyPress = function() {
                var _this = this;
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (_this.lgOpened && true === _this.settings.escKey && 27 === e.keyCode) {
                        e.preventDefault();
                        if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) _this.outer.removeClass("lg-components-open"); else _this.closeGallery();
                    }
                    if (_this.lgOpened && _this.galleryItems.length > 1) {
                        if (37 === e.keyCode) {
                            e.preventDefault();
                            _this.goToPrevSlide();
                        }
                        if (39 === e.keyCode) {
                            e.preventDefault();
                            _this.goToNextSlide();
                        }
                    }
                }));
            };
            LightGallery.prototype.arrow = function() {
                var _this = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    _this.goToPrevSlide();
                }));
                this.getElementById("lg-next").on("click.lg", (function() {
                    _this.goToNextSlide();
                }));
            };
            LightGallery.prototype.arrowDisable = function(index) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var $prev = this.getElementById("lg-prev");
                    var $next = this.getElementById("lg-next");
                    if (index + 1 === this.galleryItems.length) $next.attr("disabled", "disabled").addClass("disabled"); else $next.removeAttr("disabled").removeClass("disabled");
                    if (0 === index) $prev.attr("disabled", "disabled").addClass("disabled"); else $prev.removeAttr("disabled").removeClass("disabled");
                }
            };
            LightGallery.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
                if (void 0 === scaleX) scaleX = 1;
                if (void 0 === scaleY) scaleY = 1;
                $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
            };
            LightGallery.prototype.mousewheel = function() {
                var _this = this;
                var lastCall = 0;
                this.outer.on("wheel.lg", (function(e) {
                    if (!e.deltaY || _this.galleryItems.length < 2) return;
                    e.preventDefault();
                    var now = (new Date).getTime();
                    if (now - lastCall < 1e3) return;
                    lastCall = now;
                    if (e.deltaY > 0) _this.goToNextSlide(); else if (e.deltaY < 0) _this.goToPrevSlide();
                }));
            };
            LightGallery.prototype.isSlideElement = function(target) {
                return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
            };
            LightGallery.prototype.isPosterElement = function(target) {
                var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
            };
            LightGallery.prototype.toggleMaximize = function() {
                var _this = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    _this.$container.toggleClass("lg-inline");
                    _this.refreshOnResize();
                }));
            };
            LightGallery.prototype.invalidateItems = function() {
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    var $element = $LG(element);
                    $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
                }
            };
            LightGallery.prototype.trapFocus = function() {
                var _this = this;
                this.$container.get().focus({
                    preventScroll: true
                });
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (!_this.lgOpened) return;
                    var isTabPressed = "Tab" === e.key || 9 === e.keyCode;
                    if (!isTabPressed) return;
                    var focusableEls = utils.getFocusableElements(_this.$container.get());
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }));
            };
            LightGallery.prototype.manageCloseGallery = function() {
                var _this = this;
                if (!this.settings.closable) return;
                var mousedown = false;
                this.getElementById("lg-close").on("click.lg", (function() {
                    _this.closeGallery();
                }));
                if (this.settings.closeOnTap) {
                    this.outer.on("mousedown.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target)) mousedown = true; else mousedown = false;
                    }));
                    this.outer.on("mousemove.lg", (function() {
                        mousedown = false;
                    }));
                    this.outer.on("mouseup.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target) && mousedown) if (!_this.outer.hasClass("lg-dragging")) _this.closeGallery();
                    }));
                }
            };
            LightGallery.prototype.closeGallery = function(force) {
                var _this = this;
                if (!this.lgOpened || !this.settings.closable && !force) return 0;
                this.LGel.trigger(lGEvents.beforeClose);
                if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) $LG(window).scrollTop(this.prevScrollTop);
                var currentItem = this.items[this.index];
                var transform;
                if (this.zoomFromOrigin && currentItem) {
                    var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
                    var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
                    var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
                    transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
                }
                if (this.zoomFromOrigin && transform) {
                    this.outer.addClass("lg-closing lg-zoom-from-image");
                    this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
                } else {
                    this.outer.addClass("lg-hide-items");
                    this.outer.removeClass("lg-zoom-from-image");
                }
                this.destroyModules();
                this.lGalleryOn = false;
                this.isDummyImageRemoved = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                clearTimeout(this.hideBarTimeout);
                this.hideBarTimeout = false;
                $LG("html").removeClass("lg-on");
                this.outer.removeClass("lg-visible lg-components-open");
                this.$backdrop.removeClass("in").css("opacity", 0);
                var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                this.$container.removeClass("lg-show-in");
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) _this.outer.removeClass("lg-zoom-from-image");
                    _this.$container.removeClass("lg-show");
                    _this.resetScrollBar();
                    _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
                    _this.outer.removeClass("lg-closing " + _this.settings.startClass);
                    _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
                    _this.$inner.empty();
                    if (_this.lgOpened) _this.LGel.trigger(lGEvents.afterClose, {
                        instance: _this
                    });
                    if (_this.$container.get()) _this.$container.get().blur();
                    _this.lgOpened = false;
                }), removeTimeout + 100);
                return removeTimeout + 100;
            };
            LightGallery.prototype.initModules = function() {
                this.plugins.forEach((function(module) {
                    try {
                        module.init();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
                    }
                }));
            };
            LightGallery.prototype.destroyModules = function(destroy) {
                this.plugins.forEach((function(module) {
                    try {
                        if (destroy) module.destroy(); else module.closeGallery && module.closeGallery();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
                    }
                }));
            };
            LightGallery.prototype.refresh = function(galleryItems) {
                if (!this.settings.dynamic) this.invalidateItems();
                if (galleryItems) this.galleryItems = galleryItems; else this.galleryItems = this.getItems();
                this.updateControls();
                this.openGalleryOnItemClick();
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems);
                this.updateCounterTotal();
                this.manageSingleSlideClassName();
            };
            LightGallery.prototype.destroy = function() {
                var _this = this;
                var closeTimeout = this.closeGallery(true);
                setTimeout((function() {
                    _this.destroyModules(true);
                    if (!_this.settings.dynamic) _this.invalidateItems();
                    $LG(window).off(".lg.global" + _this.lgId);
                    _this.LGel.off(".lg");
                    _this.$container.remove();
                }), closeTimeout);
                return closeTimeout;
            };
            return LightGallery;
        }();
        function lightGallery(el, options) {
            return new LightGallery(el, options);
        }
        const lightgallery_es5 = lightGallery;
        const galleries = document.querySelectorAll("[data-gallery]");
        if (galleries.length) {
            let galleyItems = [];
            galleries.forEach((gallery => {
                galleyItems.push({
                    gallery,
                    galleryClass: lightgallery_es5(gallery, {
                        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                        speed: 500
                    })
                });
            }));
            modules_flsModules.gallery = galleyItems;
        }
        /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
        !function(e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            } : t(e);
        }("undefined" != typeof window ? window : void 0, (function(e, t) {
            "use strict";
            var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
                return "function" == typeof t && "number" != typeof t.nodeType;
            }, y = function e(t) {
                return null != t && t === t.window;
            }, v = {
                type: !0,
                src: !0,
                noModule: !0
            };
            function m(e, t, n) {
                var i, o = (t = t || r).createElement("script");
                if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
                t.head.appendChild(o).parentNode.removeChild(o);
            }
            function x(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
            }
            var w = function(e, t) {
                return new w.fn.init(e, t);
            }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.fn = w.prototype = {
                jquery: "3.3.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return o.call(this);
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t;
                },
                each: function(e) {
                    return w.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(w.map(this, (function(t, n) {
                        return e.call(t, n, t);
                    })));
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), 
                s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
                a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
                o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a;
            }, w.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function(e) {
                    m(e);
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (C(e)) {
                        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                    } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e;
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(T, "");
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [ e ] : e) : s.call(n, e)), 
                    n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : u.call(t, e, n);
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e;
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, a = e.length, s = !n; o < a; o++) !t(e[o], o) !== s && i.push(e[o]);
                    return i;
                },
                map: function(e, t, n) {
                    var r, i, o = 0, s = [];
                    if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                    return a.apply([], s);
                },
                guid: 1,
                support: h
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), 
            w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
            }));
            function C(e) {
                var t = !!e && "length" in e && e.length, n = x(e);
                return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
            }
            var E = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
                    return e === t && (f = !0), 0;
                }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1;
                }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + P + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }, re = function() {
                    p();
                }, ie = me((function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
                } catch (e) {
                    L = {
                        apply: A.length ? function(e, t) {
                            q.apply(e, H.call(t));
                        } : function(e, t) {
                            var n = e.length, r = 0;
                            while (e[n++] = t[r++]) ;
                            e.length = n - 1;
                        }
                    };
                }
                function oe(e, t, r, i) {
                    var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                            if (9 === T) {
                                if (!(l = t.getElementById(o))) return r;
                                if (l.id === o) return r.push(l), r;
                            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), 
                            r;
                        } else {
                            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), 
                            r;
                        }
                        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                            if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), 
                                s = (h = a(e)).length;
                                while (s--) h[s] = "#" + c + " " + ve(h[s]);
                                v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                            }
                            if (v) try {
                                return L.apply(r, m.querySelectorAll(v)), r;
                            } catch (e) {} finally {
                                c === b && t.removeAttribute("id");
                            }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, i);
                }
                function ae() {
                    var e = [];
                    function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
                    }
                    return t;
                }
                function se(e) {
                    return e[b] = !0, e;
                }
                function ue(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function le(e, t) {
                    var n = e.split("|"), i = n.length;
                    while (i--) r.attrHandle[n[i]] = t;
                }
                function ce(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) while (n = n.nextSibling) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function de(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                    };
                }
                function he(e) {
                    return se((function(t) {
                        return t = +t, se((function(n, r) {
                            var i, o = e([], n.length, t), a = o.length;
                            while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                        }));
                    }));
                }
                function ge(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                n = oe.support = {}, o = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName;
                }, p = oe.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, 
                    g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
                    n.attributes = ue((function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    })), n.getElementsByTagName = ue((function(e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                    })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue((function(e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
                    })), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                                i = t.getElementsByName(e), r = 0;
                                while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                            }
                            return [];
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            while (n = o[i++]) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                    }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue((function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), 
                        e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), 
                        e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                    })), ue((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 
                        2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), 
                        h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), 
                        e.querySelectorAll("*,:x"), y.push(",.*:");
                    }))), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
                    })), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), 
                    t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } : function(e, t) {
                        if (t) while (t = t.parentNode) if (t === e) return !0;
                        return !1;
                    }, D = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (i === o) return ce(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                    }, d) : d;
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t);
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                    } catch (e) {}
                    return oe(t, d, null, [ e ]).length > 0;
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== d && p(e), x(e, t);
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                }, oe.escape = function(e) {
                    return (e + "").replace(te, ne);
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, oe.uniqueSort = function(e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                        while (t = e[o++]) t === e[o] && (i = r.push(o));
                        while (i--) e.splice(r[i], 1);
                    }
                    return c = null, e;
                }, i = oe.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else while (t = e[r++]) n += i(t);
                    return n;
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
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
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
                            e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode;
                            } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                                if (y) {
                                    if (o) {
                                        while (g) {
                                            p = t;
                                            while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [ a ? y.firstChild : y.lastChild ], a && m) {
                                        x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], 
                                        p = d && y.childNodes[d];
                                        while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [ T, d, x ];
                                            break;
                                        }
                                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), 
                                    !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ T, x ]), 
                                    p === t)) break;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function(e, n) {
                                var r, o = i(e, t), a = o.length;
                                while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
                            })) : function(e) {
                                return i(e, 0, n);
                            }) : i;
                        }
                    },
                    pseudos: {
                        not: se((function(e) {
                            var t = [], n = [], r = s(e.replace(B, "$1"));
                            return r[b] ? se((function(e, t, n, i) {
                                var o, a = r(e, null, i, []), s = e.length;
                                while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                            })) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                            };
                        })),
                        has: se((function(e) {
                            return function(t) {
                                return oe(e, t).length > 0;
                            };
                        })),
                        contains: se((function(e) {
                            return e = e.replace(Z, ee), function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            };
                        })),
                        lang: se((function(e) {
                            return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), 
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            };
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === h;
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function(e) {
                            return Y.test(e.nodeName);
                        },
                        input: function(e) {
                            return G.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: he((function() {
                            return [ 0 ];
                        })),
                        last: he((function(e, t) {
                            return [ t - 1 ];
                        })),
                        eq: he((function(e, t, n) {
                            return [ n < 0 ? n + t : n ];
                        })),
                        even: he((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        odd: he((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        lt: he((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                            return e;
                        })),
                        gt: he((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq;
                for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = fe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = pe(t);
                function ye() {}
                ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    s = e, u = [], l = r.preFilter;
                    while (s) {
                        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                        n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length));
                        for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                        o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break;
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
                };
                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r;
                }
                function me(e, t, n) {
                    var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
                    return t.first ? function(t, n, i) {
                        while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                        return !1;
                    } : function(t, n, u) {
                        var l, c, f, p = [ T, s ];
                        if (u) {
                            while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                        } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), 
                        c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                            if (c[o] = p, p[2] = e(t, n, u)) return !0;
                        }
                        return !1;
                    };
                }
                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--) if (!e[i](t, n, r)) return !1;
                        return !0;
                    } : e[0];
                }
                function be(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                    return n;
                }
                function we(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
                    l && t.push(s)));
                    return a;
                }
                function Te(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se((function(o, a, s, u) {
                        var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                        if (n && n(y, v, s, u), r) {
                            l = we(v, d), r(l, [], s, u), c = l.length;
                            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                        }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    l = [], c = v.length;
                                    while (c--) (f = v[c]) && l.push(y[c] = f);
                                    i(null, v = [], l, u);
                                }
                                c = v.length;
                                while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                            }
                        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
                    }));
                }
                function Ce(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me((function(e) {
                        return e === t;
                    }), s, !0), f = me((function(e) {
                        return O(t, e) > -1;
                    }), s, !0), p = [ function(e, n, r) {
                        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i;
                    } ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ me(xe(p), n) ]; else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                        }
                        p.push(n);
                    }
                    return xe(p);
                }
                function Ee(e, t) {
                    var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
                        var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                            if (i && f) {
                                h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                                while (y = e[h++]) if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                                c && (T = E);
                            }
                            n && ((f = !y && f) && v--, o && x.push(f));
                        }
                        if (v += m, n && m !== v) {
                            h = 0;
                            while (y = t[h++]) y(x, b, a, s);
                            if (o) {
                                if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                                b = we(b);
                            }
                            L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                        }
                        return c && (T = E, l = w), x;
                    };
                    return n ? se(o) : o;
                }
                return s = oe.compile = function(e, t) {
                    var n, r = [], i = [], o = S[e + " "];
                    if (!o) {
                        t || (t = a(e)), n = t.length;
                        while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                        (o = S(e, Ee(i, r))).selector = e;
                    }
                    return o;
                }, u = oe.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                        }
                        o = V.needsContext.test(e) ? 0 : u.length;
                        while (o--) {
                            if (l = u[o], r.relative[c = l.type]) break;
                            if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                                break;
                            }
                        }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
                }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, 
                p(), n.sortDetached = ue((function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
                })), ue((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                })) || le("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                })), n.attributes && ue((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) || le("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                })), ue((function(e) {
                    return null == e.getAttribute("disabled");
                })) || le(P, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                })), oe;
            }(e);
            w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, 
            w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
            var k = function(e, t, n) {
                var r = [], i = void 0 !== n;
                while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
                return r;
            }, S = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, D = w.expr.match.needsContext;
            function N(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, t, n) {
                return g(t) ? w.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n;
                })) : t.nodeType ? w.grep(e, (function(e) {
                    return e === t !== n;
                })) : "string" != typeof t ? w.grep(e, (function(e) {
                    return u.call(t, e) > -1 !== n;
                })) : w.filter(t, e, n);
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [ r ] : [] : w.find.matches(e, w.grep(t, (function(e) {
                    return 1 === e.nodeType;
                })));
            }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0));
                },
                is: function(e) {
                    return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
                }
            });
            var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || q, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), 
                        A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
            }).prototype = w.fn, q = w(r);
            var H = /^(?:parents|prev(?:Until|All))/, O = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this), n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
                    }));
                },
                closest: function(e, t) {
                    var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
                    if (!D.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            });
            function P(e, t) {
                while ((e = e[t]) && 1 !== e.nodeType) ;
                return e;
            }
            w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return k(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return k(e, "parentNode", n);
                },
                next: function(e) {
                    return P(e, "nextSibling");
                },
                prev: function(e) {
                    return P(e, "previousSibling");
                },
                nextAll: function(e) {
                    return k(e, "nextSibling");
                },
                prevAll: function(e) {
                    return k(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return k(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return k(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return S(e.firstChild);
                },
                contents: function(e) {
                    return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), 
                    w.merge([], e.childNodes));
                }
            }, (function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 
                    this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
                };
            }));
            var M = /[^\x20\t\r\n\f]+/g;
            function R(e) {
                var t = {};
                return w.each(e.match(M) || [], (function(e, n) {
                    t[n] = !0;
                })), t;
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? R(e) : w.extend({}, e);
                var t, n, r, i, o = [], a = [], s = -1, u = function() {
                    for (i = i || e.once, r = t = !0; a.length; s = -1) {
                        n = a.shift();
                        while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
                        n = !1);
                    }
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
                }, l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            w.each(n, (function(n, r) {
                                g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                            }));
                        }(arguments), n && !t && u()), this;
                    },
                    remove: function() {
                        return w.each(arguments, (function(e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        })), this;
                    },
                    has: function(e) {
                        return e ? w.inArray(e, o) > -1 : o.length > 0;
                    },
                    empty: function() {
                        return o && (o = []), this;
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this;
                    },
                    disabled: function() {
                        return !o;
                    },
                    lock: function() {
                        return i = a = [], n || t || (o = n = ""), this;
                    },
                    locked: function() {
                        return !!i;
                    },
                    fireWith: function(e, n) {
                        return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                        this;
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r;
                    }
                };
                return l;
            };
            function I(e) {
                return e;
            }
            function W(e) {
                throw e;
            }
            function $(e, t, n, r) {
                var i;
                try {
                    e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                } catch (e) {
                    n.apply(void 0, [ e ]);
                }
            }
            w.extend({
                Deferred: function(t) {
                    var n = [ [ "notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2 ], [ "resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                        state: function() {
                            return r;
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function(e) {
                            return i.then(null, e);
                        },
                        pipe: function() {
                            var e = arguments;
                            return w.Deferred((function(t) {
                                w.each(n, (function(n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [ e ] : arguments);
                                    }));
                                })), e = null;
                            })).promise();
                        },
                        then: function(t, r, i) {
                            var o = 0;
                            function a(t, n, r, i) {
                                return function() {
                                    var s = this, u = arguments, l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, 
                                            l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, 
                                            u = [ e ]), (i || n.resolveWith)(s, u));
                                        }
                                    }, c = i ? l : function() {
                                        try {
                                            l();
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, 
                                            u = [ e ]), n.rejectWith(s, u));
                                        }
                                    };
                                    t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), 
                                    e.setTimeout(c));
                                };
                            }
                            return w.Deferred((function(e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), 
                                n[2][3].add(a(0, e, g(r) ? r : W));
                            })).promise();
                        },
                        promise: function(e) {
                            return null != e ? w.extend(e, i) : i;
                        }
                    }, o = {};
                    return w.each(n, (function(e, t) {
                        var a = t[2], s = t[5];
                        i[t[1]] = a.add, s && a.add((function() {
                            r = s;
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), 
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }, o[t[0] + "With"] = a.fireWith;
                    })), i.promise(o), t && t.call(o, o), o;
                },
                when: function(e) {
                    var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                        };
                    };
                    if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                    while (n--) $(i[n], s(n), a.reject);
                    return a.promise();
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
            }, w.readyException = function(t) {
                e.setTimeout((function() {
                    throw t;
                }));
            };
            var F = w.Deferred();
            w.fn.ready = function(e) {
                return F.then(e)["catch"]((function(e) {
                    w.readyException(e);
                })), this;
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [ w ]));
                }
            }), w.ready.then = F.then;
            function _() {
                r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), 
                w.ready();
            }
            "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), 
            e.addEventListener("load", _));
            var z = function(e, t, n, r, i, o, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === x(n)) {
                    i = !0;
                    for (s in n) z(e, t, s, n[s], !0, o, a);
                } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, 
                t = function(e, t, n) {
                    return l.call(w(e), n);
                })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            }, X = /^-ms-/, U = /-([a-z])/g;
            function V(e, t) {
                return t.toUpperCase();
            }
            function G(e) {
                return e.replace(X, "ms-").replace(U, V);
            }
            var Y = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Q() {
                this.expando = w.expando + Q.uid++;
            }
            Q.uid = 1, Q.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
                    return i;
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                    void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [ t ] : t.match(M) || []).length;
                            while (n--) delete r[t[n]];
                        }
                        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t);
                }
            };
            var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
            function te(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
            }
            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), 
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = te(n);
                    } catch (e) {}
                    K.set(e, t, n);
                } else n = void 0;
                return n;
            }
            w.extend({
                hasData: function(e) {
                    return K.hasData(e) || J.hasData(e);
                },
                data: function(e, t, n) {
                    return K.access(e, t, n);
                },
                removeData: function(e, t) {
                    K.remove(e, t);
                },
                _data: function(e, t, n) {
                    return J.access(e, t, n);
                },
                _removeData: function(e, t) {
                    J.remove(e, t);
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                            n = a.length;
                            while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), 
                            ne(o, r, i[r]));
                            J.set(o, "hasDataAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof e ? this.each((function() {
                        K.set(this, e);
                    })) : z(this, (function(t) {
                        var n;
                        if (o && void 0 === t) {
                            if (void 0 !== (n = K.get(o, e))) return n;
                            if (void 0 !== (n = ne(o, e))) return n;
                        } else this.each((function() {
                            K.set(this, e, t);
                        }));
                    }), null, t, arguments.length > 1, null, !0);
                },
                removeData: function(e) {
                    return this.each((function() {
                        K.remove(this, e);
                    }));
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), 
                    r || [];
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function() {
                        w.dequeue(e, t);
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                    delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return J.get(e, n) || J.access(e, n, {
                        empty: w.Callbacks("once memory").add((function() {
                            J.remove(e, [ t + "queue", n ]);
                        }))
                    });
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                    }));
                },
                dequeue: function(e) {
                    return this.each((function() {
                        w.dequeue(this, e);
                    }));
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [ o ]);
                    };
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t);
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = [ "Top", "Right", "Bottom", "Left" ], ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
            }, se = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i;
            };
            function ue(e, t, n, r) {
                var i, o, a = 20, s = r ? function() {
                    return r.cur();
                } : function() {
                    return w.css(e, t, "");
                }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    u /= 2, l = l || c[3], c = +u || 1;
                    while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
                    c /= o;
                    c *= 2, w.style(e, t, c + l), n = n || [];
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
                r.start = c, r.end = i)), i;
            }
            var le = {};
            function ce(e) {
                var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), 
                t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
            }
            function fe(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
                t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), 
                "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", 
                J.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e;
            }
            w.fn.extend({
                show: function() {
                    return fe(this, !0);
                },
                hide: function() {
                    return fe(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        ae(this) ? w(this).show() : w(this).hide();
                    }));
                }
            });
            var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
                option: [ 1, "<select multiple='multiple'>", "</select>" ],
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
            ge.th = ge.td;
            function ye(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                void 0 === t || t && N(e, t) ? w.merge([ e ], n) : n;
            }
            function ve(e, t) {
                for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
            }
            var me = /<|&#?\w+;/;
            function xe(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
                    u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
                } else p.push(t.createTextNode(o));
                f.textContent = "", d = 0;
                while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), 
                a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                    c = 0;
                    while (o = a[c++]) he.test(o.type || "") && n.push(o);
                }
                return f;
            }
            !function() {
                var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
                e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
                e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
            }();
            var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
            function Ee() {
                return !0;
            }
            function ke() {
                return !1;
            }
            function Se() {
                try {
                    return r.activeElement;
                } catch (e) {}
            }
            function De(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) De(e, s, n, r, t[s], o);
                    return e;
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
                r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
                    w.event.add(this, t, i, r, n);
                }));
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
                    if (y) {
                        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), 
                        n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }), l = (t = (t || "").match(M) || [ "" ]).length;
                        while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                        d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                        f = w.event.special[d] || {}, c = w.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && w.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                        f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                        w.event.global[d] = !0);
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
                    if (y && (u = y.events)) {
                        l = (t = (t || "").match(M) || [ "" ]).length;
                        while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                        d) {
                            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                            c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), 
                            delete u[d]);
                        } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                        w.isEmptyObject(u) && J.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var n, r, i, o, a, s, t = w.event.fix(e), u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
                    for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
                    if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                        s = w.event.handlers.call(this, t, l), n = 0;
                        while ((o = s[n++]) && !t.isPropagationStopped()) {
                            t.currentTarget = o.elem, r = 0;
                            while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
                            t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), 
                            t.stopPropagation()));
                        }
                        return c.postDispatch && c.postDispatch.call(this, t), t.result;
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [ l ]).length), 
                        a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s;
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e];
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            });
                        }
                    });
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Se() && this.focus) return this.focus(), !1;
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Se() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), 
                            !1;
                        },
                        _default: function(e) {
                            return N(e.target, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, 
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: ke,
                isPropagationStopped: ke,
                isImmediatePropagationStopped: ke,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, w.each({
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
                }
            }, w.event.addProp), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                        e.type = t), n;
                    }
                };
            })), w.fn.extend({
                on: function(e, t, n, r) {
                    return De(this, e, t, n, r);
                },
                one: function(e, t, n, r) {
                    return De(this, e, t, n, r, 1);
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), 
                    this.each((function() {
                        w.event.remove(this, e, n, t);
                    }));
                }
            });
            var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Le(e, t) {
                return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
            }
            function He(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function Oe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                e;
            }
            function Pe(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
                    }
                    K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
                }
            }
            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            }
            function Re(e, t, n, r) {
                t = a.apply([], t);
                var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
                if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each((function(i) {
                    var o = e.eq(i);
                    v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
                }));
                if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), 
                o || r)) {
                    for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), 
                    u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
                    if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], 
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
                }
                return e;
            }
            function Ie(e, t, n) {
                for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), 
                r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Ne, "<$1></$2>");
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
                    if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), 
                    r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
                    if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
                    return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                        if (t = n[J.expando]) {
                            if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                            n[J.expando] = void 0;
                        }
                        n[K.expando] && (n[K.expando] = void 0);
                    }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return Ie(this, e, !0);
                },
                remove: function(e) {
                    return Ie(this, e);
                },
                text: function(e) {
                    return z(this, (function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        }));
                    }), null, e, arguments.length);
                },
                append: function() {
                    return Re(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
                    }));
                },
                prepend: function() {
                    return Re(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    }));
                },
                before: function() {
                    return Re(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    }));
                },
                after: function() {
                    return Re(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), 
                    e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return w.clone(this, e, t);
                    }));
                },
                html: function(e) {
                    return z(this, (function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    }), null, e, arguments.length);
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, (function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    }), e);
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
                    w(i[a])[t](n), s.apply(r, n.get());
                    return this.pushStack(r);
                };
            }));
            var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t);
            }, Be = new RegExp(oe.join("|"), "i");
            !function() {
                function t() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        be.appendChild(l).appendChild(c);
                        var t = e.getComputedStyle(c);
                        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), 
                        o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", 
                        be.removeChild(l), c = null;
                    }
                }
                function n(e) {
                    return Math.round(parseFloat(e));
                }
                var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
                h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
                    boxSizingReliable: function() {
                        return t(), o;
                    },
                    pixelBoxStyles: function() {
                        return t(), s;
                    },
                    pixelPosition: function() {
                        return t(), i;
                    },
                    reliableMarginLeft: function() {
                        return t(), u;
                    },
                    scrollboxSize: function() {
                        return t(), a;
                    }
                }));
            }();
            function Fe(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), 
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, 
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
                s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
            }
            function _e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Ve = {
                letterSpacing: "0",
                fontWeight: "400"
            }, Ge = [ "Webkit", "Moz", "ms" ], Ye = r.createElement("div").style;
            function Qe(e) {
                if (e in Ye) return e;
                var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                while (n--) if ((e = Ge[n] + t) in Ye) return e;
            }
            function Je(e) {
                var t = w.cssProps[e];
                return t || (t = w.cssProps[e] = Qe(e) || e), t;
            }
            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0, s = 0, u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (;a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), 
                "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), 
                "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), 
                u;
            }
            function et(e, t, n) {
                var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
                if (We.test(i)) {
                    if (!n) return i;
                    i = "auto";
                }
                return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], 
                a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Fe(e, "opacity");
                                return "" === n ? "1" : n;
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
                        var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), 
                        null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), 
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = G(t);
                    return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
                    void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), 
                    !0 === n || isFinite(o) ? o || 0 : i) : i;
                }
            }), w.each([ "height", "width" ], (function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, (function() {
                            return et(e, t, r);
                        }));
                    },
                    set: function(e, n, r) {
                        var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), 
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), 
                        Ke(e, n, s);
                    }
                };
            })), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left;
                }))) + "px";
            })), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
            })), w.fn.extend({
                css: function(e, t) {
                    return z(this, (function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    }), e, t, arguments.length > 1);
                }
            });
            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i);
            }
            w.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, 
                    this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, w.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, w.fx = tt.prototype.init, w.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
            function at() {
                rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), 
                w.fx.tick());
            }
            function st() {
                return e.setTimeout((function() {
                    nt = void 0;
                })), nt = Date.now();
            }
            function ut(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i;
            }
            function lt(e, t, n) {
                for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
            }
            function ct(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
                n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, 
                a.empty.fire = function() {
                    a.unqueued || s();
                }), a.unqueued++, p.always((function() {
                    p.always((function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                    }));
                })));
                for (r in t) if (i = t[r], it.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0;
                    }
                    d[r] = y && y[r] || w.style(e, r);
                }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
                    f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                    null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([ e ], !0), 
                    l = e.style.display || l, c = w.css(e, "display"), fe([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done((function() {
                        h.display = l;
                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                    n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                    }))), u = !1;
                    for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                        display: l
                    }), o && (y.hidden = !g), g && fe([ e ], !0), p.done((function() {
                        g || fe([ e ]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    }))), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, 
                    u.start = 0));
                }
            }
            function ft(e, t) {
                var n, r, i, o, a;
                for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
                n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i);
                } else t[r] = i;
            }
            function pt(e, t, n) {
                var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always((function() {
                    delete u.elem;
                })), u = function() {
                    if (i) return !1;
                    for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                    return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
                    s.resolveWith(e, [ l ]), !1);
                }, l = s.promise({
                    elem: e,
                    props: w.extend({}, t),
                    opts: w.extend(!0, {
                        specialEasing: {},
                        easing: w.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || st(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r;
                    },
                    stop: function(t) {
                        var n = 0, r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                        this;
                    }
                }), c = l.props;
                for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
                r;
                return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
                w.fx.timer(w.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l;
            }
            w.Animation = w.extend(pt, {
                tweeners: {
                    "*": [ function(e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, ie.exec(t), n), n;
                    } ]
                },
                tweener: function(e, t) {
                    g(e) ? (t = e, e = [ "*" ]) : e = e.match(M);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], 
                    pt.tweeners[n].unshift(t);
                },
                prefilters: [ ct ],
                prefilter: function(e, t) {
                    t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
                }
            }), w.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? w.extend({}, e) : {
                    complete: n || !n && t || g(e) && e,
                    duration: e,
                    easing: n && t || t && !g(t) && t
                };
                return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), 
                null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }, r;
            }, w.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ae).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r);
                },
                animate: function(e, t, n, r) {
                    var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function() {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
                    this.each((function() {
                        var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                        t = !1, o.splice(i, 1));
                        !t && n || w.dequeue(this, e);
                    }));
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                        o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    }));
                }
            }), w.each([ "toggle", "show", "hide" ], (function(e, t) {
                var n = w.fn[t];
                w.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
                };
            })), w.each({
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
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
                w.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            })), w.timers = [], w.fx.tick = function() {
                var e, t = 0, n = w.timers;
                for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || w.fx.stop(), nt = void 0;
            }, w.fx.timer = function(e) {
                w.timers.push(e), w.fx.start();
            }, w.fx.interval = 13, w.fx.start = function() {
                rt || (rt = !0, at());
            }, w.fx.stop = function() {
                rt = null;
            }, w.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, w.fn.delay = function(t, n) {
                return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, (function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i);
                    };
                }));
            }, function() {
                var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
                e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", 
                e.type = "radio", h.radioValue = "t" === e.value;
            }();
            var dt, ht = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return z(this, w.attr, e, t, arguments.length > 1);
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        w.removeAttr(this, e);
                    }));
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), 
                    void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && N(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, i = t && t.match(M);
                    if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
                }
            }), dt = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = ht[t] || w.find.attr;
                ht[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), 
                    i;
                };
            }));
            var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
            w.fn.extend({
                prop: function(e, t) {
                    return z(this, w.prop, e, t, arguments.length > 1);
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[w.propFix[e] || e];
                    }));
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, 
                    i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), h.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), w.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                w.propFix[this.toLowerCase()] = this;
            }));
            function vt(e) {
                return (e.match(M) || []).join(" ");
            }
            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function xt(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
            }
            w.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).addClass(e.call(this, t, mt(this)));
                    }));
                    if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).removeClass(e.call(this, t, mt(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                toggleClass: function(e, t) {
                    var n = typeof e, r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                        w(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })) : this.each((function() {
                        var t, i, o, a;
                        if (r) {
                            i = 0, o = w(this), a = xt(e);
                            while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), 
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                    }));
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1;
                }
            });
            var bt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    if (arguments.length) return r = g(e), this.each((function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                            return null == e ? "" : e + "";
                        }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                    }));
                    if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : vt(w.text(e));
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = w(n).val(), a) return t;
                                s.push(t);
                            }
                            return s;
                        },
                        set: function(e, t) {
                            var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                            while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        }
                    }
                }
            }), w.each([ "radio", "checkbox" ], (function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
                    }
                }, h.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            })), h.focusin = "onfocusin" in e;
            var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
                e.stopPropagation();
            };
            w.extend(w.event, {
                trigger: function(t, n, i, o) {
                    var a, s, u, l, c, p, d, h, v = [ i || r ], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), 
                    x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), 
                    t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : w.makeArray(n, [ t ]), 
                    d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                        if (!o && !d.noBubble && !y(i)) {
                            for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), 
                            u = s;
                            u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                        }
                        a = 0;
                        while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, 
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), 
                        (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), 
                        w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), 
                        t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, 
                        u && (i[c] = u)), t.result;
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t);
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        w.event.trigger(e, t, this);
                    }));
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0);
                }
            }), h.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this, i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    }
                };
            }));
            var Ct = e.location, Et = Date.now(), kt = /\?/;
            w.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml");
                } catch (e) {
                    n = void 0;
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), 
                n;
            };
            var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) w.each(t, (function(t, i) {
                    n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                })); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
            }
            w.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    var n = g(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
                    i(this.name, this.value);
                })); else for (n in e) jt(n, e[n], t, i);
                return r.join("&");
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this;
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })).map((function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Dt, "\r\n")
                            };
                        })) : {
                            name: t.name,
                            value: n.replace(Dt, "\r\n")
                        };
                    })).get();
                }
            });
            var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
            Bt.href = Ct.href;
            function Ft(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(M) || [];
                    if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function _t(e, t, n, r) {
                var i = {}, o = e === Wt;
                function a(s) {
                    var u;
                    return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                        a(l), !1);
                    })), u;
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*");
            }
            function zt(e, t) {
                var n, r, i = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e;
            }
            function Xt(e, t, n) {
                var r, i, o, a, s = e.contents, u = e.dataTypes;
                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) for (i in s) if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
                if (u[0] in n) o = u[0]; else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                        }
                        a || (a = i);
                    }
                    o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
            }
            function Ut(e, t, n, r) {
                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break;
                    }
                    if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                        t = a(t);
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o
                        };
                    }
                }
                return {
                    state: "success",
                    data: t
                };
            }
            w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: Pt.test(Ct.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": $t,
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
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
                },
                ajaxPrefilter: Ft(It),
                ajaxTransport: Ft(Wt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s) {
                                    s = {};
                                    while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
                                }
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function() {
                            return c ? a : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), 
                            this;
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || C;
                            return i && i.abort(t), k(0, t), this;
                        }
                    };
                    if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), 
                    h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [ "" ], 
                    null == h.crossDomain) {
                        l = r.createElement("a");
                        try {
                            l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                        } catch (e) {
                            h.crossDomain = !0;
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), 
                    _t(It, h, n, E), c) return E;
                    (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), 
                    h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), 
                    h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, 
                    delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), 
                    h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), 
                    w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), 
                    E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                    if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                        if (E.readyState = 1, f && y.trigger("ajaxSend", [ E, h ]), c) return E;
                        h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                            E.abort("timeout");
                        }), h.timeout));
                        try {
                            c = !1, i.send(b, k);
                        } catch (e) {
                            if (c) throw e;
                            k(-1, e);
                        }
                    } else k(-1, "No Transport");
                    function k(t, n, r, s) {
                        var l, p, d, b, T, C = n;
                        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, 
                        l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), 
                        l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), 
                        (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                        p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                        E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [ p, C, E ]) : v.rejectWith(g, [ E, C, d ]), 
                        E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [ E, h, l ? p : d ]), 
                        m.fireWith(g, [ E, C ]), f && (y.trigger("ajaxComplete", [ E, h ]), --w.active || w.event.trigger("ajaxStop")));
                    }
                    return E;
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script");
                }
            }), w.each([ "get", "post" ], (function(e, t) {
                w[t] = function(e, n, r, i) {
                    return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e));
                };
            })), w._evalUrl = function(e) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                });
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        var e = this;
                        while (e.firstElementChild) e = e.firstElementChild;
                        return e;
                    })).append(this)), this;
                },
                wrapInner: function(e) {
                    return g(e) ? this.each((function(t) {
                        w(this).wrapInner(e.call(this, t));
                    })) : this.each((function() {
                        var t = w(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    }));
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each((function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e);
                    }));
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        w(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e);
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest;
                } catch (e) {}
            };
            var Vt = {
                0: 200,
                1223: 204
            }, Gt = w.ajaxSettings.xhr();
            h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport((function(t) {
                var n, r;
                if (h.cors || Gt && !t.crossDomain) return {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()));
                            };
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout((function() {
                                n && r();
                            }));
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function() {
                        n && n();
                    }
                };
            })), w.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1);
            })), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e;
                    }
                }
            }), w.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            })), w.ajaxTransport("script", (function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(i, o) {
                            t = w("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                            }), r.head.appendChild(t[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }
            }));
            var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || w.expando + "_" + Et++;
                    return this[e] = !0, e;
                }
            }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
                var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
                s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
                t.converters["script json"] = function() {
                    return a || w.error(i + " was not called"), a[0];
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                    a = arguments;
                }, r.always((function() {
                    void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
                    Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
                })), "script";
            })), h.createHTMLDocument = function() {
                var e = r.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
            }(), w.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var i, o, a;
                return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, 
                t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [ t.createElement(o[1]) ] : (o = xe([ e ], t, a), 
                a && a.length && w(a).remove(), w.merge([], o.childNodes));
            }, w.fn.load = function(e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
                a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, o || [ e.responseText, t, e ]);
                    }));
                }), this;
            }, w.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e);
                };
            })), w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, (function(t) {
                    return e === t.elem;
                })).length;
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c = w.css(e, "position"), f = w(e), p = {};
                    "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), 
                    u = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = f.position()).top, 
                    i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), 
                    null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 
                    "using" in t ? t.using.call(e, p) : f.css(p);
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        w.offset.setOffset(this, e, t);
                    }));
                    var t, n, r = this[0];
                    if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    };
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                            while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), 
                            i.left += w.css(e, "borderLeftWidth", !0));
                        }
                        return {
                            top: t.top - i.top - w.css(r, "marginTop", !0),
                            left: t.left - i.left - w.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        var e = this.offsetParent;
                        while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                        return e || be;
                    }));
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return z(this, (function(e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
                    }), e, r, arguments.length);
                };
            })), w.each([ "top", "left" ], (function(e, t) {
                w.cssHooks[t] = _e(h.pixelPosition, (function(e, n) {
                    if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
                }));
            })), w.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(this, (function(t, n, i) {
                            var o;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                        }), t, a ? i : void 0, a);
                    };
                }));
            })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
            })), w.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                }
            }), w.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), 
                i = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)));
                }, i.guid = e.guid = e.guid || w.guid++, i;
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0);
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, 
            w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }, "function" == typeof define && define.amd && define("jquery", [], (function() {
                return w;
            }));
            var Jt = e.jQuery, Kt = e.$;
            return w.noConflict = function(t) {
                return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
            }, t || (e.jQuery = e.$ = w), w;
        }));
        function videoPlay() {
            $(".artists__play").click((function() {
                $(this).hide();
                $(this).parent().find(".artists__image").hide();
                $(this).parent().find(".artists__youtube").show();
            }));
        }
        videoPlay();
        window["FLS"] = true;
        isWebp();
        menuInit();
        pageNavigation();
    })();
})();