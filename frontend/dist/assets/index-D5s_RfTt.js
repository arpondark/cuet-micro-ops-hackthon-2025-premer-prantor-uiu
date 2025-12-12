(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = n(s);
    fetch(s.href, u);
  }
})();
function L_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var uf = { exports: {} },
  Os = {},
  lf = { exports: {} },
  Je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm;
function xS() {
  if (Pm) return Je;
  Pm = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function E(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (y && k[y]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    j = {};
  function W(k, $, ke) {
    ((this.props = k),
      (this.context = $),
      (this.refs = j),
      (this.updater = ke || N));
  }
  ((W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (k, $) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, $, "setState");
    }),
    (W.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function z() {}
  z.prototype = W.prototype;
  function H(k, $, ke) {
    ((this.props = k),
      (this.context = $),
      (this.refs = j),
      (this.updater = ke || N));
  }
  var ie = (H.prototype = new z());
  ((ie.constructor = H), P(ie, W.prototype), (ie.isPureReactComponent = !0));
  var U = Array.isArray,
    C = Object.prototype.hasOwnProperty,
    q = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(k, $, ke) {
    var De,
      Ve = {},
      Ze = null,
      dt = null;
    if ($ != null)
      for (De in ($.ref !== void 0 && (dt = $.ref),
      $.key !== void 0 && (Ze = "" + $.key),
      $))
        C.call($, De) && !ae.hasOwnProperty(De) && (Ve[De] = $[De]);
    var rt = arguments.length - 2;
    if (rt === 1) Ve.children = ke;
    else if (1 < rt) {
      for (var _t = Array(rt), Nt = 0; Nt < rt; Nt++)
        _t[Nt] = arguments[Nt + 2];
      Ve.children = _t;
    }
    if (k && k.defaultProps)
      for (De in ((rt = k.defaultProps), rt))
        Ve[De] === void 0 && (Ve[De] = rt[De]);
    return {
      $$typeof: e,
      type: k,
      key: Ze,
      ref: dt,
      props: Ve,
      _owner: q.current,
    };
  }
  function ne(k, $) {
    return {
      $$typeof: e,
      type: k.type,
      key: $,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ve(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }
  function Ge(k) {
    var $ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (ke) {
        return $[ke];
      })
    );
  }
  var Ke = /\/+/g;
  function nt(k, $) {
    return typeof k == "object" && k !== null && k.key != null
      ? Ge("" + k.key)
      : $.toString(36);
  }
  function at(k, $, ke, De, Ve) {
    var Ze = typeof k;
    (Ze === "undefined" || Ze === "boolean") && (k = null);
    var dt = !1;
    if (k === null) dt = !0;
    else
      switch (Ze) {
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case e:
            case t:
              dt = !0;
          }
      }
    if (dt)
      return (
        (dt = k),
        (Ve = Ve(dt)),
        (k = De === "" ? "." + nt(dt, 0) : De),
        U(Ve)
          ? ((ke = ""),
            k != null && (ke = k.replace(Ke, "$&/") + "/"),
            at(Ve, $, ke, "", function (Nt) {
              return Nt;
            }))
          : Ve != null &&
            (ve(Ve) &&
              (Ve = ne(
                Ve,
                ke +
                  (!Ve.key || (dt && dt.key === Ve.key)
                    ? ""
                    : ("" + Ve.key).replace(Ke, "$&/") + "/") +
                  k,
              )),
            $.push(Ve)),
        1
      );
    if (((dt = 0), (De = De === "" ? "." : De + ":"), U(k)))
      for (var rt = 0; rt < k.length; rt++) {
        Ze = k[rt];
        var _t = De + nt(Ze, rt);
        dt += at(Ze, $, ke, _t, Ve);
      }
    else if (((_t = E(k)), typeof _t == "function"))
      for (k = _t.call(k), rt = 0; !(Ze = k.next()).done; )
        ((Ze = Ze.value),
          (_t = De + nt(Ze, rt++)),
          (dt += at(Ze, $, ke, _t, Ve)));
    else if (Ze === "object")
      throw (
        ($ = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            ($ === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : $) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return dt;
  }
  function xt(k, $, ke) {
    if (k == null) return k;
    var De = [],
      Ve = 0;
    return (
      at(k, De, "", "", function (Ze) {
        return $.call(ke, Ze, Ve++);
      }),
      De
    );
  }
  function be(k) {
    if (k._status === -1) {
      var $ = k._result;
      (($ = $()),
        $.then(
          function (ke) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = ke));
          },
          function (ke) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = ke));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = $)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Xe = { current: null },
    Y = { transition: null },
    oe = {
      ReactCurrentDispatcher: Xe,
      ReactCurrentBatchConfig: Y,
      ReactCurrentOwner: q,
    };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Je.Children = {
      map: xt,
      forEach: function (k, $, ke) {
        xt(
          k,
          function () {
            $.apply(this, arguments);
          },
          ke,
        );
      },
      count: function (k) {
        var $ = 0;
        return (
          xt(k, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (k) {
        return (
          xt(k, function ($) {
            return $;
          }) || []
        );
      },
      only: function (k) {
        if (!ve(k))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return k;
      },
    }),
    (Je.Component = W),
    (Je.Fragment = n),
    (Je.Profiler = s),
    (Je.PureComponent = H),
    (Je.StrictMode = o),
    (Je.Suspense = h),
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe),
    (Je.act = re),
    (Je.cloneElement = function (k, $, ke) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            ".",
        );
      var De = P({}, k.props),
        Ve = k.key,
        Ze = k.ref,
        dt = k._owner;
      if ($ != null) {
        if (
          ($.ref !== void 0 && ((Ze = $.ref), (dt = q.current)),
          $.key !== void 0 && (Ve = "" + $.key),
          k.type && k.type.defaultProps)
        )
          var rt = k.type.defaultProps;
        for (_t in $)
          C.call($, _t) &&
            !ae.hasOwnProperty(_t) &&
            (De[_t] = $[_t] === void 0 && rt !== void 0 ? rt[_t] : $[_t]);
      }
      var _t = arguments.length - 2;
      if (_t === 1) De.children = ke;
      else if (1 < _t) {
        rt = Array(_t);
        for (var Nt = 0; Nt < _t; Nt++) rt[Nt] = arguments[Nt + 2];
        De.children = rt;
      }
      return {
        $$typeof: e,
        type: k.type,
        key: Ve,
        ref: Ze,
        props: De,
        _owner: dt,
      };
    }),
    (Je.createContext = function (k) {
      return (
        (k = {
          $$typeof: c,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: u, _context: k }),
        (k.Consumer = k)
      );
    }),
    (Je.createElement = ye),
    (Je.createFactory = function (k) {
      var $ = ye.bind(null, k);
      return (($.type = k), $);
    }),
    (Je.createRef = function () {
      return { current: null };
    }),
    (Je.forwardRef = function (k) {
      return { $$typeof: d, render: k };
    }),
    (Je.isValidElement = ve),
    (Je.lazy = function (k) {
      return { $$typeof: _, _payload: { _status: -1, _result: k }, _init: be };
    }),
    (Je.memo = function (k, $) {
      return { $$typeof: m, type: k, compare: $ === void 0 ? null : $ };
    }),
    (Je.startTransition = function (k) {
      var $ = Y.transition;
      Y.transition = {};
      try {
        k();
      } finally {
        Y.transition = $;
      }
    }),
    (Je.unstable_act = re),
    (Je.useCallback = function (k, $) {
      return Xe.current.useCallback(k, $);
    }),
    (Je.useContext = function (k) {
      return Xe.current.useContext(k);
    }),
    (Je.useDebugValue = function () {}),
    (Je.useDeferredValue = function (k) {
      return Xe.current.useDeferredValue(k);
    }),
    (Je.useEffect = function (k, $) {
      return Xe.current.useEffect(k, $);
    }),
    (Je.useId = function () {
      return Xe.current.useId();
    }),
    (Je.useImperativeHandle = function (k, $, ke) {
      return Xe.current.useImperativeHandle(k, $, ke);
    }),
    (Je.useInsertionEffect = function (k, $) {
      return Xe.current.useInsertionEffect(k, $);
    }),
    (Je.useLayoutEffect = function (k, $) {
      return Xe.current.useLayoutEffect(k, $);
    }),
    (Je.useMemo = function (k, $) {
      return Xe.current.useMemo(k, $);
    }),
    (Je.useReducer = function (k, $, ke) {
      return Xe.current.useReducer(k, $, ke);
    }),
    (Je.useRef = function (k) {
      return Xe.current.useRef(k);
    }),
    (Je.useState = function (k) {
      return Xe.current.useState(k);
    }),
    (Je.useSyncExternalStore = function (k, $, ke) {
      return Xe.current.useSyncExternalStore(k, $, ke);
    }),
    (Je.useTransition = function () {
      return Xe.current.useTransition();
    }),
    (Je.version = "18.3.1"),
    Je
  );
}
var Lm;
function xd() {
  return (Lm || ((Lm = 1), (lf.exports = xS())), lf.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mm;
function NS() {
  if (Mm) return Os;
  Mm = 1;
  var e = xd(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, m) {
    var _,
      y = {},
      E = null,
      N = null;
    (m !== void 0 && (E = "" + m),
      h.key !== void 0 && (E = "" + h.key),
      h.ref !== void 0 && (N = h.ref));
    for (_ in h) o.call(h, _) && !u.hasOwnProperty(_) && (y[_] = h[_]);
    if (d && d.defaultProps)
      for (_ in ((h = d.defaultProps), h)) y[_] === void 0 && (y[_] = h[_]);
    return {
      $$typeof: t,
      type: d,
      key: E,
      ref: N,
      props: y,
      _owner: s.current,
    };
  }
  return ((Os.Fragment = n), (Os.jsx = c), (Os.jsxs = c), Os);
}
var Dm;
function AS() {
  return (Dm || ((Dm = 1), (uf.exports = NS())), uf.exports);
}
var X = AS(),
  tn = xd();
const PS = L_(tn);
var hu = {},
  cf = { exports: {} },
  xn = {},
  ff = { exports: {} },
  df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fm;
function LS() {
  return (
    Fm ||
      ((Fm = 1),
      (function (e) {
        function t(Y, oe) {
          var re = Y.length;
          Y.push(oe);
          e: for (; 0 < re; ) {
            var k = (re - 1) >>> 1,
              $ = Y[k];
            if (0 < s($, oe)) ((Y[k] = oe), (Y[re] = $), (re = k));
            else break e;
          }
        }
        function n(Y) {
          return Y.length === 0 ? null : Y[0];
        }
        function o(Y) {
          if (Y.length === 0) return null;
          var oe = Y[0],
            re = Y.pop();
          if (re !== oe) {
            Y[0] = re;
            e: for (var k = 0, $ = Y.length, ke = $ >>> 1; k < ke; ) {
              var De = 2 * (k + 1) - 1,
                Ve = Y[De],
                Ze = De + 1,
                dt = Y[Ze];
              if (0 > s(Ve, re))
                Ze < $ && 0 > s(dt, Ve)
                  ? ((Y[k] = dt), (Y[Ze] = re), (k = Ze))
                  : ((Y[k] = Ve), (Y[De] = re), (k = De));
              else if (Ze < $ && 0 > s(dt, re))
                ((Y[k] = dt), (Y[Ze] = re), (k = Ze));
              else break e;
            }
          }
          return oe;
        }
        function s(Y, oe) {
          var re = Y.sortIndex - oe.sortIndex;
          return re !== 0 ? re : Y.id - oe.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          m = [],
          _ = 1,
          y = null,
          E = 3,
          N = !1,
          P = !1,
          j = !1,
          W = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ie(Y) {
          for (var oe = n(m); oe !== null; ) {
            if (oe.callback === null) o(m);
            else if (oe.startTime <= Y)
              (o(m), (oe.sortIndex = oe.expirationTime), t(h, oe));
            else break;
            oe = n(m);
          }
        }
        function U(Y) {
          if (((j = !1), ie(Y), !P))
            if (n(h) !== null) ((P = !0), be(C));
            else {
              var oe = n(m);
              oe !== null && Xe(U, oe.startTime - Y);
            }
        }
        function C(Y, oe) {
          ((P = !1), j && ((j = !1), z(ye), (ye = -1)), (N = !0));
          var re = E;
          try {
            for (
              ie(oe), y = n(h);
              y !== null && (!(y.expirationTime > oe) || (Y && !Ge()));
            ) {
              var k = y.callback;
              if (typeof k == "function") {
                ((y.callback = null), (E = y.priorityLevel));
                var $ = k(y.expirationTime <= oe);
                ((oe = e.unstable_now()),
                  typeof $ == "function"
                    ? (y.callback = $)
                    : y === n(h) && o(h),
                  ie(oe));
              } else o(h);
              y = n(h);
            }
            if (y !== null) var ke = !0;
            else {
              var De = n(m);
              (De !== null && Xe(U, De.startTime - oe), (ke = !1));
            }
            return ke;
          } finally {
            ((y = null), (E = re), (N = !1));
          }
        }
        var q = !1,
          ae = null,
          ye = -1,
          ne = 5,
          ve = -1;
        function Ge() {
          return !(e.unstable_now() - ve < ne);
        }
        function Ke() {
          if (ae !== null) {
            var Y = e.unstable_now();
            ve = Y;
            var oe = !0;
            try {
              oe = ae(!0, Y);
            } finally {
              oe ? nt() : ((q = !1), (ae = null));
            }
          } else q = !1;
        }
        var nt;
        if (typeof H == "function")
          nt = function () {
            H(Ke);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            xt = at.port2;
          ((at.port1.onmessage = Ke),
            (nt = function () {
              xt.postMessage(null);
            }));
        } else
          nt = function () {
            W(Ke, 0);
          };
        function be(Y) {
          ((ae = Y), q || ((q = !0), nt()));
        }
        function Xe(Y, oe) {
          ye = W(function () {
            Y(e.unstable_now());
          }, oe);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (Y) {
            Y.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            P || N || ((P = !0), be(C));
          }),
          (e.unstable_forceFrameRate = function (Y) {
            0 > Y || 125 < Y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ne = 0 < Y ? Math.floor(1e3 / Y) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(h);
          }),
          (e.unstable_next = function (Y) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = E;
            }
            var re = E;
            E = oe;
            try {
              return Y();
            } finally {
              E = re;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (Y, oe) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var re = E;
            E = Y;
            try {
              return oe();
            } finally {
              E = re;
            }
          }),
          (e.unstable_scheduleCallback = function (Y, oe, re) {
            var k = e.unstable_now();
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay),
                  (re = typeof re == "number" && 0 < re ? k + re : k))
                : (re = k),
              Y)
            ) {
              case 1:
                var $ = -1;
                break;
              case 2:
                $ = 250;
                break;
              case 5:
                $ = 1073741823;
                break;
              case 4:
                $ = 1e4;
                break;
              default:
                $ = 5e3;
            }
            return (
              ($ = re + $),
              (Y = {
                id: _++,
                callback: oe,
                priorityLevel: Y,
                startTime: re,
                expirationTime: $,
                sortIndex: -1,
              }),
              re > k
                ? ((Y.sortIndex = re),
                  t(m, Y),
                  n(h) === null &&
                    Y === n(m) &&
                    (j ? (z(ye), (ye = -1)) : (j = !0), Xe(U, re - k)))
                : ((Y.sortIndex = $), t(h, Y), P || N || ((P = !0), be(C))),
              Y
            );
          }),
          (e.unstable_shouldYield = Ge),
          (e.unstable_wrapCallback = function (Y) {
            var oe = E;
            return function () {
              var re = E;
              E = oe;
              try {
                return Y.apply(this, arguments);
              } finally {
                E = re;
              }
            };
          }));
      })(df)),
    df
  );
}
var Um;
function MS() {
  return (Um || ((Um = 1), (ff.exports = LS())), ff.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm;
function DS() {
  if (jm) return xn;
  jm = 1;
  var e = xd(),
    t = MS();
  function n(r) {
    for (
      var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
        a = 1;
      a < arguments.length;
      a++
    )
      i += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      r +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    s = {};
  function u(r, i) {
    (c(r, i), c(r + "Capture", i));
  }
  function c(r, i) {
    for (s[r] = i, r = 0; r < i.length; r++) o.add(i[r]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    y = {};
  function E(r) {
    return h.call(y, r)
      ? !0
      : h.call(_, r)
        ? !1
        : m.test(r)
          ? (y[r] = !0)
          : ((_[r] = !0), !1);
  }
  function N(r, i, a, l) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : a !== null
            ? !a.acceptsBooleans
            : ((r = r.toLowerCase().slice(0, 5)),
              r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function P(r, i, a, l) {
    if (i === null || typeof i > "u" || N(r, i, a, l)) return !0;
    if (l) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !i;
        case 4:
          return i === !1;
        case 5:
          return isNaN(i);
        case 6:
          return isNaN(i) || 1 > i;
      }
    return !1;
  }
  function j(r, i, a, l, f, p, g) {
    ((this.acceptsBooleans = i === 2 || i === 3 || i === 4),
      (this.attributeName = l),
      (this.attributeNamespace = f),
      (this.mustUseProperty = a),
      (this.propertyName = r),
      (this.type = i),
      (this.sanitizeURL = p),
      (this.removeEmptyString = g));
  }
  var W = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (r) {
      W[r] = new j(r, 0, !1, r, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (r) {
      var i = r[0];
      W[i] = new j(i, 1, !1, r[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (r) {
        W[r] = new j(r, 2, !1, r.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (r) {
      W[r] = new j(r, 2, !1, r, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (r) {
        W[r] = new j(r, 3, !1, r.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (r) {
      W[r] = new j(r, 3, !0, r, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (r) {
      W[r] = new j(r, 4, !1, r, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (r) {
      W[r] = new j(r, 6, !1, r, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (r) {
      W[r] = new j(r, 5, !1, r.toLowerCase(), null, !1, !1);
    }));
  var z = /[\-:]([a-z])/g;
  function H(r) {
    return r[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (r) {
      var i = r.replace(z, H);
      W[i] = new j(i, 1, !1, r, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (r) {
        var i = r.replace(z, H);
        W[i] = new j(i, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
      var i = r.replace(z, H);
      W[i] = new j(i, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (r) {
      W[r] = new j(r, 1, !1, r.toLowerCase(), null, !1, !1);
    }),
    (W.xlinkHref = new j(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (r) {
      W[r] = new j(r, 1, !1, r.toLowerCase(), null, !0, !0);
    }));
  function ie(r, i, a, l) {
    var f = W.hasOwnProperty(i) ? W[i] : null;
    (f !== null
      ? f.type !== 0
      : l ||
        !(2 < i.length) ||
        (i[0] !== "o" && i[0] !== "O") ||
        (i[1] !== "n" && i[1] !== "N")) &&
      (P(i, a, f, l) && (a = null),
      l || f === null
        ? E(i) &&
          (a === null ? r.removeAttribute(i) : r.setAttribute(i, "" + a))
        : f.mustUseProperty
          ? (r[f.propertyName] = a === null ? (f.type === 3 ? !1 : "") : a)
          : ((i = f.attributeName),
            (l = f.attributeNamespace),
            a === null
              ? r.removeAttribute(i)
              : ((f = f.type),
                (a = f === 3 || (f === 4 && a === !0) ? "" : "" + a),
                l ? r.setAttributeNS(l, i, a) : r.setAttribute(i, a))));
  }
  var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    C = Symbol.for("react.element"),
    q = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    ye = Symbol.for("react.strict_mode"),
    ne = Symbol.for("react.profiler"),
    ve = Symbol.for("react.provider"),
    Ge = Symbol.for("react.context"),
    Ke = Symbol.for("react.forward_ref"),
    nt = Symbol.for("react.suspense"),
    at = Symbol.for("react.suspense_list"),
    xt = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    Xe = Symbol.for("react.offscreen"),
    Y = Symbol.iterator;
  function oe(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (Y && r[Y]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var re = Object.assign,
    k;
  function $(r) {
    if (k === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        k = (i && i[1]) || "";
      }
    return (
      `
` +
      k +
      r
    );
  }
  var ke = !1;
  function De(r, i) {
    if (!r || ke) return "";
    ke = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i)
        if (
          ((i = function () {
            throw Error();
          }),
          Object.defineProperty(i.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(i, []);
          } catch (A) {
            var l = A;
          }
          Reflect.construct(r, [], i);
        } else {
          try {
            i.call();
          } catch (A) {
            l = A;
          }
          r.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          l = A;
        }
        r();
      }
    } catch (A) {
      if (A && l && typeof A.stack == "string") {
        for (
          var f = A.stack.split(`
`),
            p = l.stack.split(`
`),
            g = f.length - 1,
            v = p.length - 1;
          1 <= g && 0 <= v && f[g] !== p[v];
        )
          v--;
        for (; 1 <= g && 0 <= v; g--, v--)
          if (f[g] !== p[v]) {
            if (g !== 1 || v !== 1)
              do
                if ((g--, v--, 0 > v || f[g] !== p[v])) {
                  var S =
                    `
` + f[g].replace(" at new ", " at ");
                  return (
                    r.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", r.displayName)),
                    S
                  );
                }
              while (1 <= g && 0 <= v);
            break;
          }
      }
    } finally {
      ((ke = !1), (Error.prepareStackTrace = a));
    }
    return (r = r ? r.displayName || r.name : "") ? $(r) : "";
  }
  function Ve(r) {
    switch (r.tag) {
      case 5:
        return $(r.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((r = De(r.type, !1)), r);
      case 11:
        return ((r = De(r.type.render, !1)), r);
      case 1:
        return ((r = De(r.type, !0)), r);
      default:
        return "";
    }
  }
  function Ze(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case ae:
        return "Fragment";
      case q:
        return "Portal";
      case ne:
        return "Profiler";
      case ye:
        return "StrictMode";
      case nt:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case Ge:
          return (r.displayName || "Context") + ".Consumer";
        case ve:
          return (r._context.displayName || "Context") + ".Provider";
        case Ke:
          var i = r.render;
          return (
            (r = r.displayName),
            r ||
              ((r = i.displayName || i.name || ""),
              (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
            r
          );
        case xt:
          return (
            (i = r.displayName || null),
            i !== null ? i : Ze(r.type) || "Memo"
          );
        case be:
          ((i = r._payload), (r = r._init));
          try {
            return Ze(r(i));
          } catch {}
      }
    return null;
  }
  function dt(r) {
    var i = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (r = i.render),
          (r = r.displayName || r.name || ""),
          i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ze(i);
      case 8:
        return i === ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof i == "function") return i.displayName || i.name || null;
        if (typeof i == "string") return i;
    }
    return null;
  }
  function rt(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function _t(r) {
    var i = r.type;
    return (
      (r = r.nodeName) &&
      r.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function Nt(r) {
    var i = _t(r) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(r.constructor.prototype, i),
      l = "" + r[i];
    if (
      !r.hasOwnProperty(i) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var f = a.get,
        p = a.set;
      return (
        Object.defineProperty(r, i, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (g) {
            ((l = "" + g), p.call(this, g));
          },
        }),
        Object.defineProperty(r, i, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            ((r._valueTracker = null), delete r[i]);
          },
        }
      );
    }
  }
  function Er(r) {
    r._valueTracker || (r._valueTracker = Nt(r));
  }
  function cn(r) {
    if (!r) return !1;
    var i = r._valueTracker;
    if (!i) return !0;
    var a = i.getValue(),
      l = "";
    return (
      r && (l = _t(r) ? (r.checked ? "true" : "false") : r.value),
      (r = l),
      r !== a ? (i.setValue(r), !0) : !1
    );
  }
  function Sr(r) {
    if (
      ((r = r || (typeof document < "u" ? document : void 0)), typeof r > "u")
    )
      return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function Tn(r, i) {
    var a = i.checked;
    return re({}, i, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? r._wrapperState.initialChecked,
    });
  }
  function Pn(r, i) {
    var a = i.defaultValue == null ? "" : i.defaultValue,
      l = i.checked != null ? i.checked : i.defaultChecked;
    ((a = rt(i.value != null ? i.value : a)),
      (r._wrapperState = {
        initialChecked: l,
        initialValue: a,
        controlled:
          i.type === "checkbox" || i.type === "radio"
            ? i.checked != null
            : i.value != null,
      }));
  }
  function Tr(r, i) {
    ((i = i.checked), i != null && ie(r, "checked", i, !1));
  }
  function wr(r, i) {
    Tr(r, i);
    var a = rt(i.value),
      l = i.type;
    if (a != null)
      l === "number"
        ? ((a === 0 && r.value === "") || r.value != a) && (r.value = "" + a)
        : r.value !== "" + a && (r.value = "" + a);
    else if (l === "submit" || l === "reset") {
      r.removeAttribute("value");
      return;
    }
    (i.hasOwnProperty("value")
      ? kr(r, i.type, a)
      : i.hasOwnProperty("defaultValue") && kr(r, i.type, rt(i.defaultValue)),
      i.checked == null &&
        i.defaultChecked != null &&
        (r.defaultChecked = !!i.defaultChecked));
  }
  function ur(r, i, a) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var l = i.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (i.value !== void 0 && i.value !== null)
        )
      )
        return;
      ((i = "" + r._wrapperState.initialValue),
        a || i === r.value || (r.value = i),
        (r.defaultValue = i));
    }
    ((a = r.name),
      a !== "" && (r.name = ""),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      a !== "" && (r.name = a));
  }
  function kr(r, i, a) {
    (i !== "number" || Sr(r.ownerDocument) !== r) &&
      (a == null
        ? (r.defaultValue = "" + r._wrapperState.initialValue)
        : r.defaultValue !== "" + a && (r.defaultValue = "" + a));
  }
  var qe = Array.isArray;
  function Ut(r, i, a, l) {
    if (((r = r.options), i)) {
      i = {};
      for (var f = 0; f < a.length; f++) i["$" + a[f]] = !0;
      for (a = 0; a < r.length; a++)
        ((f = i.hasOwnProperty("$" + r[a].value)),
          r[a].selected !== f && (r[a].selected = f),
          f && l && (r[a].defaultSelected = !0));
    } else {
      for (a = "" + rt(a), i = null, f = 0; f < r.length; f++) {
        if (r[f].value === a) {
          ((r[f].selected = !0), l && (r[f].defaultSelected = !0));
          return;
        }
        i !== null || r[f].disabled || (i = r[f]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Fe(r, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(n(91));
    return re({}, i, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue,
    });
  }
  function Tt(r, i) {
    var a = i.value;
    if (a == null) {
      if (((a = i.children), (i = i.defaultValue), a != null)) {
        if (i != null) throw Error(n(92));
        if (qe(a)) {
          if (1 < a.length) throw Error(n(93));
          a = a[0];
        }
        i = a;
      }
      (i == null && (i = ""), (a = i));
    }
    r._wrapperState = { initialValue: rt(a) };
  }
  function it(r, i) {
    var a = rt(i.value),
      l = rt(i.defaultValue);
    (a != null &&
      ((a = "" + a),
      a !== r.value && (r.value = a),
      i.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
      l != null && (r.defaultValue = "" + l));
  }
  function Hn(r) {
    var i = r.textContent;
    i === r._wrapperState.initialValue &&
      i !== "" &&
      i !== null &&
      (r.value = i);
  }
  function Si(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ji(r, i) {
    return r == null || r === "http://www.w3.org/1999/xhtml"
      ? Si(i)
      : r === "http://www.w3.org/2000/svg" && i === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : r;
  }
  var qr,
    fa = (function (r) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (i, a, l, f) {
            MSApp.execUnsafeLocalFunction(function () {
              return r(i, a, l, f);
            });
          }
        : r;
    })(function (r, i) {
      if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r)
        r.innerHTML = i;
      else {
        for (
          qr = qr || document.createElement("div"),
            qr.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>",
            i = qr.firstChild;
          r.firstChild;
        )
          r.removeChild(r.firstChild);
        for (; i.firstChild; ) r.appendChild(i.firstChild);
      }
    });
  function Ti(r, i) {
    if (i) {
      var a = r.firstChild;
      if (a && a === r.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    r.textContent = i;
  }
  var wi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Nl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wi).forEach(function (r) {
    Nl.forEach(function (i) {
      ((i = i + r.charAt(0).toUpperCase() + r.substring(1)), (wi[i] = wi[r]));
    });
  });
  function da(r, i, a) {
    return i == null || typeof i == "boolean" || i === ""
      ? ""
      : a || typeof i != "number" || i === 0 || (wi.hasOwnProperty(r) && wi[r])
        ? ("" + i).trim()
        : i + "px";
  }
  function pa(r, i) {
    r = r.style;
    for (var a in i)
      if (i.hasOwnProperty(a)) {
        var l = a.indexOf("--") === 0,
          f = da(a, i[a], l);
        (a === "float" && (a = "cssFloat"),
          l ? r.setProperty(a, f) : (r[a] = f));
      }
  }
  var Al = re(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function eo(r, i) {
    if (i) {
      if (Al[r] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(n(137, r));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(n(60));
        if (
          typeof i.dangerouslySetInnerHTML != "object" ||
          !("__html" in i.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(n(62));
    }
  }
  function w(r, i) {
    if (r.indexOf("-") === -1) return typeof i.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var I = null;
  function B(r) {
    return (
      (r = r.target || r.srcElement || window),
      r.correspondingUseElement && (r = r.correspondingUseElement),
      r.nodeType === 3 ? r.parentNode : r
    );
  }
  var R = null,
    F = null,
    Q = null;
  function me(r) {
    if ((r = ps(r))) {
      if (typeof R != "function") throw Error(n(280));
      var i = r.stateNode;
      i && ((i = ba(i)), R(r.stateNode, r.type, i));
    }
  }
  function ge(r) {
    F ? (Q ? Q.push(r) : (Q = [r])) : (F = r);
  }
  function Ee() {
    if (F) {
      var r = F,
        i = Q;
      if (((Q = F = null), me(r), i)) for (r = 0; r < i.length; r++) me(i[r]);
    }
  }
  function Ae(r, i) {
    return r(i);
  }
  function pe() {}
  var xe = !1;
  function He(r, i, a) {
    if (xe) return r(i, a);
    xe = !0;
    try {
      return Ae(r, i, a);
    } finally {
      ((xe = !1), (F !== null || Q !== null) && (pe(), Ee()));
    }
  }
  function ot(r, i) {
    var a = r.stateNode;
    if (a === null) return null;
    var l = ba(a);
    if (l === null) return null;
    a = l[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((r = r.type),
          (l = !(
            r === "button" ||
            r === "input" ||
            r === "select" ||
            r === "textarea"
          ))),
          (r = !l));
        break e;
      default:
        r = !1;
    }
    if (r) return null;
    if (a && typeof a != "function") throw Error(n(231, i, typeof a));
    return a;
  }
  var wt = !1;
  if (d)
    try {
      var zt = {};
      (Object.defineProperty(zt, "passive", {
        get: function () {
          wt = !0;
        },
      }),
        window.addEventListener("test", zt, zt),
        window.removeEventListener("test", zt, zt));
    } catch {
      wt = !1;
    }
  function rn(r, i, a, l, f, p, g, v, S) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(a, A);
    } catch (V) {
      this.onError(V);
    }
  }
  var Rt = !1,
    Se = null,
    se = !1,
    ut = null,
    yt = {
      onError: function (r) {
        ((Rt = !0), (Se = r));
      },
    };
  function jt(r, i, a, l, f, p, g, v, S) {
    ((Rt = !1), (Se = null), rn.apply(yt, arguments));
  }
  function kt(r, i, a, l, f, p, g, v, S) {
    if ((jt.apply(this, arguments), Rt)) {
      if (Rt) {
        var A = Se;
        ((Rt = !1), (Se = null));
      } else throw Error(n(198));
      se || ((se = !0), (ut = A));
    }
  }
  function de(r) {
    var i = r,
      a = r;
    if (r.alternate) for (; i.return; ) i = i.return;
    else {
      r = i;
      do ((i = r), (i.flags & 4098) !== 0 && (a = i.return), (r = i.return));
      while (r);
    }
    return i.tag === 3 ? a : null;
  }
  function It(r) {
    if (r.tag === 13) {
      var i = r.memoizedState;
      if (
        (i === null && ((r = r.alternate), r !== null && (i = r.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function ze(r) {
    if (de(r) !== r) throw Error(n(188));
  }
  function Pe(r) {
    var i = r.alternate;
    if (!i) {
      if (((i = de(r)), i === null)) throw Error(n(188));
      return i !== r ? null : r;
    }
    for (var a = r, l = i; ; ) {
      var f = a.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((l = f.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === a) return (ze(f), r);
          if (p === l) return (ze(f), i);
          p = p.sibling;
        }
        throw Error(n(188));
      }
      if (a.return !== l.return) ((a = f), (l = p));
      else {
        for (var g = !1, v = f.child; v; ) {
          if (v === a) {
            ((g = !0), (a = f), (l = p));
            break;
          }
          if (v === l) {
            ((g = !0), (l = f), (a = p));
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = p.child; v; ) {
            if (v === a) {
              ((g = !0), (a = p), (l = f));
              break;
            }
            if (v === l) {
              ((g = !0), (l = p), (a = f));
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(n(189));
        }
      }
      if (a.alternate !== l) throw Error(n(190));
    }
    if (a.tag !== 3) throw Error(n(188));
    return a.stateNode.current === a ? r : i;
  }
  function Ie(r) {
    return ((r = Pe(r)), r !== null ? Ue(r) : null);
  }
  function Ue(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var i = Ue(r);
      if (i !== null) return i;
      r = r.sibling;
    }
    return null;
  }
  var on = t.unstable_scheduleCallback,
    At = t.unstable_cancelCallback,
    Gt = t.unstable_shouldYield,
    mt = t.unstable_requestPaint,
    b = t.unstable_now,
    D = t.unstable_getCurrentPriorityLevel,
    L = t.unstable_ImmediatePriority,
    we = t.unstable_UserBlockingPriority,
    lt = t.unstable_NormalPriority,
    Qe = t.unstable_LowPriority,
    Ln = t.unstable_IdlePriority,
    wn = null,
    qt = null;
  function Mn(r) {
    if (qt && typeof qt.onCommitFiberRoot == "function")
      try {
        qt.onCommitFiberRoot(wn, r, void 0, (r.current.flags & 128) === 128);
      } catch {}
  }
  var Z = Math.clz32 ? Math.clz32 : te,
    ee = Math.log,
    M = Math.LN2;
  function te(r) {
    return ((r >>>= 0), r === 0 ? 32 : (31 - ((ee(r) / M) | 0)) | 0);
  }
  var Te = 64,
    Re = 4194304;
  function ce(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function je(r, i) {
    var a = r.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      f = r.suspendedLanes,
      p = r.pingedLanes,
      g = a & 268435455;
    if (g !== 0) {
      var v = g & ~f;
      v !== 0 ? (l = ce(v)) : ((p &= g), p !== 0 && (l = ce(p)));
    } else ((g = a & ~f), g !== 0 ? (l = ce(g)) : p !== 0 && (l = ce(p)));
    if (l === 0) return 0;
    if (
      i !== 0 &&
      i !== l &&
      (i & f) === 0 &&
      ((f = l & -l), (p = i & -i), f >= p || (f === 16 && (p & 4194240) !== 0))
    )
      return i;
    if (((l & 4) !== 0 && (l |= a & 16), (i = r.entangledLanes), i !== 0))
      for (r = r.entanglements, i &= l; 0 < i; )
        ((a = 31 - Z(i)), (f = 1 << a), (l |= r[a]), (i &= ~f));
    return l;
  }
  function $e(r, i) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return i + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function We(r, i) {
    for (
      var a = r.suspendedLanes,
        l = r.pingedLanes,
        f = r.expirationTimes,
        p = r.pendingLanes;
      0 < p;
    ) {
      var g = 31 - Z(p),
        v = 1 << g,
        S = f[g];
      (S === -1
        ? ((v & a) === 0 || (v & l) !== 0) && (f[g] = $e(v, i))
        : S <= i && (r.expiredLanes |= v),
        (p &= ~v));
    }
  }
  function vt(r) {
    return (
      (r = r.pendingLanes & -1073741825),
      r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    );
  }
  function St() {
    var r = Te;
    return ((Te <<= 1), (Te & 4194240) === 0 && (Te = 64), r);
  }
  function zn(r) {
    for (var i = [], a = 0; 31 > a; a++) i.push(r);
    return i;
  }
  function sn(r, i, a) {
    ((r.pendingLanes |= i),
      i !== 536870912 && ((r.suspendedLanes = 0), (r.pingedLanes = 0)),
      (r = r.eventTimes),
      (i = 31 - Z(i)),
      (r[i] = a));
  }
  function lr(r, i) {
    var a = r.pendingLanes & ~i;
    ((r.pendingLanes = i),
      (r.suspendedLanes = 0),
      (r.pingedLanes = 0),
      (r.expiredLanes &= i),
      (r.mutableReadLanes &= i),
      (r.entangledLanes &= i),
      (i = r.entanglements));
    var l = r.eventTimes;
    for (r = r.expirationTimes; 0 < a; ) {
      var f = 31 - Z(a),
        p = 1 << f;
      ((i[f] = 0), (l[f] = -1), (r[f] = -1), (a &= ~p));
    }
  }
  function ki(r, i) {
    var a = (r.entangledLanes |= i);
    for (r = r.entanglements; a; ) {
      var l = 31 - Z(a),
        f = 1 << l;
      ((f & i) | (r[l] & i) && (r[l] |= i), (a &= ~f));
    }
  }
  var pt = 0;
  function ha(r) {
    return (
      (r &= -r),
      1 < r ? (4 < r ? ((r & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var to,
    no,
    Rr,
    Ko,
    Ri,
    ro = !1,
    Ii = [],
    kn = null,
    Yt = null,
    Qt = null,
    Zo = new Map(),
    Qo = new Map(),
    Yr = [],
    Qv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function gp(r, i) {
    switch (r) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Zo.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(i.pointerId);
    }
  }
  function Jo(r, i, a, l, f, p) {
    return r === null || r.nativeEvent !== p
      ? ((r = {
          blockedOn: i,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [f],
        }),
        i !== null && ((i = ps(i)), i !== null && no(i)),
        r)
      : ((r.eventSystemFlags |= l),
        (i = r.targetContainers),
        f !== null && i.indexOf(f) === -1 && i.push(f),
        r);
  }
  function Jv(r, i, a, l, f) {
    switch (i) {
      case "focusin":
        return ((kn = Jo(kn, r, i, a, l, f)), !0);
      case "dragenter":
        return ((Yt = Jo(Yt, r, i, a, l, f)), !0);
      case "mouseover":
        return ((Qt = Jo(Qt, r, i, a, l, f)), !0);
      case "pointerover":
        var p = f.pointerId;
        return (Zo.set(p, Jo(Zo.get(p) || null, r, i, a, l, f)), !0);
      case "gotpointercapture":
        return (
          (p = f.pointerId),
          Qo.set(p, Jo(Qo.get(p) || null, r, i, a, l, f)),
          !0
        );
    }
    return !1;
  }
  function _p(r) {
    var i = Ci(r.target);
    if (i !== null) {
      var a = de(i);
      if (a !== null) {
        if (((i = a.tag), i === 13)) {
          if (((i = It(a)), i !== null)) {
            ((r.blockedOn = i),
              Ri(r.priority, function () {
                Rr(a);
              }));
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function ma(r) {
    if (r.blockedOn !== null) return !1;
    for (var i = r.targetContainers; 0 < i.length; ) {
      var a = Ll(r.domEventName, r.eventSystemFlags, i[0], r.nativeEvent);
      if (a === null) {
        a = r.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((I = l), a.target.dispatchEvent(l), (I = null));
      } else return ((i = ps(a)), i !== null && no(i), (r.blockedOn = a), !1);
      i.shift();
    }
    return !0;
  }
  function yp(r, i, a) {
    ma(r) && a.delete(i);
  }
  function eE() {
    ((ro = !1),
      kn !== null && ma(kn) && (kn = null),
      Yt !== null && ma(Yt) && (Yt = null),
      Qt !== null && ma(Qt) && (Qt = null),
      Zo.forEach(yp),
      Qo.forEach(yp));
  }
  function es(r, i) {
    r.blockedOn === i &&
      ((r.blockedOn = null),
      ro ||
        ((ro = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, eE)));
  }
  function ts(r) {
    function i(f) {
      return es(f, r);
    }
    if (0 < Ii.length) {
      es(Ii[0], r);
      for (var a = 1; a < Ii.length; a++) {
        var l = Ii[a];
        l.blockedOn === r && (l.blockedOn = null);
      }
    }
    for (
      kn !== null && es(kn, r),
        Yt !== null && es(Yt, r),
        Qt !== null && es(Qt, r),
        Zo.forEach(i),
        Qo.forEach(i),
        a = 0;
      a < Yr.length;
      a++
    )
      ((l = Yr[a]), l.blockedOn === r && (l.blockedOn = null));
    for (; 0 < Yr.length && ((a = Yr[0]), a.blockedOn === null); )
      (_p(a), a.blockedOn === null && Yr.shift());
  }
  var io = U.ReactCurrentBatchConfig,
    ga = !0;
  function tE(r, i, a, l) {
    var f = pt,
      p = io.transition;
    io.transition = null;
    try {
      ((pt = 1), Pl(r, i, a, l));
    } finally {
      ((pt = f), (io.transition = p));
    }
  }
  function nE(r, i, a, l) {
    var f = pt,
      p = io.transition;
    io.transition = null;
    try {
      ((pt = 4), Pl(r, i, a, l));
    } finally {
      ((pt = f), (io.transition = p));
    }
  }
  function Pl(r, i, a, l) {
    if (ga) {
      var f = Ll(r, i, a, l);
      if (f === null) (Zl(r, i, l, _a, a), gp(r, l));
      else if (Jv(f, r, i, a, l)) l.stopPropagation();
      else if ((gp(r, l), i & 4 && -1 < Qv.indexOf(r))) {
        for (; f !== null; ) {
          var p = ps(f);
          if (
            (p !== null && to(p),
            (p = Ll(r, i, a, l)),
            p === null && Zl(r, i, l, _a, a),
            p === f)
          )
            break;
          f = p;
        }
        f !== null && l.stopPropagation();
      } else Zl(r, i, l, null, a);
    }
  }
  var _a = null;
  function Ll(r, i, a, l) {
    if (((_a = null), (r = B(l)), (r = Ci(r)), r !== null))
      if (((i = de(r)), i === null)) r = null;
      else if (((a = i.tag), a === 13)) {
        if (((r = It(i)), r !== null)) return r;
        r = null;
      } else if (a === 3) {
        if (i.stateNode.current.memoizedState.isDehydrated)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        r = null;
      } else i !== r && (r = null);
    return ((_a = r), null);
  }
  function vp(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (D()) {
          case L:
            return 1;
          case we:
            return 4;
          case lt:
          case Qe:
            return 16;
          case Ln:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kr = null,
    Ml = null,
    ya = null;
  function Ep() {
    if (ya) return ya;
    var r,
      i = Ml,
      a = i.length,
      l,
      f = "value" in Kr ? Kr.value : Kr.textContent,
      p = f.length;
    for (r = 0; r < a && i[r] === f[r]; r++);
    var g = a - r;
    for (l = 1; l <= g && i[a - l] === f[p - l]; l++);
    return (ya = f.slice(r, 1 < l ? 1 - l : void 0));
  }
  function va(r) {
    var i = r.keyCode;
    return (
      "charCode" in r
        ? ((r = r.charCode), r === 0 && i === 13 && (r = 13))
        : (r = i),
      r === 10 && (r = 13),
      32 <= r || r === 13 ? r : 0
    );
  }
  function Ea() {
    return !0;
  }
  function Sp() {
    return !1;
  }
  function Dn(r) {
    function i(a, l, f, p, g) {
      ((this._reactName = a),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = g),
        (this.currentTarget = null));
      for (var v in r)
        r.hasOwnProperty(v) && ((a = r[v]), (this[v] = a ? a(p) : p[v]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Ea
          : Sp),
        (this.isPropagationStopped = Sp),
        this
      );
    }
    return (
      re(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ea));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ea));
        },
        persist: function () {},
        isPersistent: Ea,
      }),
      i
    );
  }
  var oo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (r) {
        return r.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Dl = Dn(oo),
    ns = re({}, oo, { view: 0, detail: 0 }),
    rE = Dn(ns),
    Fl,
    Ul,
    rs,
    Sa = re({}, ns, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bl,
      button: 0,
      buttons: 0,
      relatedTarget: function (r) {
        return r.relatedTarget === void 0
          ? r.fromElement === r.srcElement
            ? r.toElement
            : r.fromElement
          : r.relatedTarget;
      },
      movementX: function (r) {
        return "movementX" in r
          ? r.movementX
          : (r !== rs &&
              (rs && r.type === "mousemove"
                ? ((Fl = r.screenX - rs.screenX), (Ul = r.screenY - rs.screenY))
                : (Ul = Fl = 0),
              (rs = r)),
            Fl);
      },
      movementY: function (r) {
        return "movementY" in r ? r.movementY : Ul;
      },
    }),
    Tp = Dn(Sa),
    iE = re({}, Sa, { dataTransfer: 0 }),
    oE = Dn(iE),
    sE = re({}, ns, { relatedTarget: 0 }),
    jl = Dn(sE),
    aE = re({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uE = Dn(aE),
    lE = re({}, oo, {
      clipboardData: function (r) {
        return "clipboardData" in r ? r.clipboardData : window.clipboardData;
      },
    }),
    cE = Dn(lE),
    fE = re({}, oo, { data: 0 }),
    wp = Dn(fE),
    dE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    pE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    hE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mE(r) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(r)
      : (r = hE[r])
        ? !!i[r]
        : !1;
  }
  function Bl() {
    return mE;
  }
  var gE = re({}, ns, {
      key: function (r) {
        if (r.key) {
          var i = dE[r.key] || r.key;
          if (i !== "Unidentified") return i;
        }
        return r.type === "keypress"
          ? ((r = va(r)), r === 13 ? "Enter" : String.fromCharCode(r))
          : r.type === "keydown" || r.type === "keyup"
            ? pE[r.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bl,
      charCode: function (r) {
        return r.type === "keypress" ? va(r) : 0;
      },
      keyCode: function (r) {
        return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
      },
      which: function (r) {
        return r.type === "keypress"
          ? va(r)
          : r.type === "keydown" || r.type === "keyup"
            ? r.keyCode
            : 0;
      },
    }),
    _E = Dn(gE),
    yE = re({}, Sa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kp = Dn(yE),
    vE = re({}, ns, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bl,
    }),
    EE = Dn(vE),
    SE = re({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    TE = Dn(SE),
    wE = re({}, Sa, {
      deltaX: function (r) {
        return "deltaX" in r
          ? r.deltaX
          : "wheelDeltaX" in r
            ? -r.wheelDeltaX
            : 0;
      },
      deltaY: function (r) {
        return "deltaY" in r
          ? r.deltaY
          : "wheelDeltaY" in r
            ? -r.wheelDeltaY
            : "wheelDelta" in r
              ? -r.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    kE = Dn(wE),
    RE = [9, 13, 27, 32],
    Hl = d && "CompositionEvent" in window,
    is = null;
  d && "documentMode" in document && (is = document.documentMode);
  var IE = d && "TextEvent" in window && !is,
    Rp = d && (!Hl || (is && 8 < is && 11 >= is)),
    Ip = " ",
    Cp = !1;
  function Op(r, i) {
    switch (r) {
      case "keyup":
        return RE.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bp(r) {
    return (
      (r = r.detail),
      typeof r == "object" && "data" in r ? r.data : null
    );
  }
  var so = !1;
  function CE(r, i) {
    switch (r) {
      case "compositionend":
        return bp(i);
      case "keypress":
        return i.which !== 32 ? null : ((Cp = !0), Ip);
      case "textInput":
        return ((r = i.data), r === Ip && Cp ? null : r);
      default:
        return null;
    }
  }
  function OE(r, i) {
    if (so)
      return r === "compositionend" || (!Hl && Op(r, i))
        ? ((r = Ep()), (ya = Ml = Kr = null), (so = !1), r)
        : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Rp && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var bE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function xp(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return i === "input" ? !!bE[r.type] : i === "textarea";
  }
  function Np(r, i, a, l) {
    (ge(l),
      (i = Ia(i, "onChange")),
      0 < i.length &&
        ((a = new Dl("onChange", "change", null, a, l)),
        r.push({ event: a, listeners: i })));
  }
  var os = null,
    ss = null;
  function xE(r) {
    Yp(r, 0);
  }
  function Ta(r) {
    var i = fo(r);
    if (cn(i)) return r;
  }
  function NE(r, i) {
    if (r === "change") return i;
  }
  var Ap = !1;
  if (d) {
    var zl;
    if (d) {
      var $l = "oninput" in document;
      if (!$l) {
        var Pp = document.createElement("div");
        (Pp.setAttribute("oninput", "return;"),
          ($l = typeof Pp.oninput == "function"));
      }
      zl = $l;
    } else zl = !1;
    Ap = zl && (!document.documentMode || 9 < document.documentMode);
  }
  function Lp() {
    os && (os.detachEvent("onpropertychange", Mp), (ss = os = null));
  }
  function Mp(r) {
    if (r.propertyName === "value" && Ta(ss)) {
      var i = [];
      (Np(i, ss, r, B(r)), He(xE, i));
    }
  }
  function AE(r, i, a) {
    r === "focusin"
      ? (Lp(), (os = i), (ss = a), os.attachEvent("onpropertychange", Mp))
      : r === "focusout" && Lp();
  }
  function PE(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown")
      return Ta(ss);
  }
  function LE(r, i) {
    if (r === "click") return Ta(i);
  }
  function ME(r, i) {
    if (r === "input" || r === "change") return Ta(i);
  }
  function DE(r, i) {
    return (r === i && (r !== 0 || 1 / r === 1 / i)) || (r !== r && i !== i);
  }
  var Zn = typeof Object.is == "function" ? Object.is : DE;
  function as(r, i) {
    if (Zn(r, i)) return !0;
    if (
      typeof r != "object" ||
      r === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var a = Object.keys(r),
      l = Object.keys(i);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var f = a[l];
      if (!h.call(i, f) || !Zn(r[f], i[f])) return !1;
    }
    return !0;
  }
  function Dp(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Fp(r, i) {
    var a = Dp(r);
    r = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = r + a.textContent.length), r <= i && l >= i))
          return { node: a, offset: i - r };
        r = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Dp(a);
    }
  }
  function Up(r, i) {
    return r && i
      ? r === i
        ? !0
        : r && r.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? Up(r, i.parentNode)
            : "contains" in r
              ? r.contains(i)
              : r.compareDocumentPosition
                ? !!(r.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function jp() {
    for (var r = window, i = Sr(); i instanceof r.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) r = i.contentWindow;
      else break;
      i = Sr(r.document);
    }
    return i;
  }
  function Wl(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (r.type === "text" ||
          r.type === "search" ||
          r.type === "tel" ||
          r.type === "url" ||
          r.type === "password")) ||
        i === "textarea" ||
        r.contentEditable === "true")
    );
  }
  function FE(r) {
    var i = jp(),
      a = r.focusedElem,
      l = r.selectionRange;
    if (
      i !== a &&
      a &&
      a.ownerDocument &&
      Up(a.ownerDocument.documentElement, a)
    ) {
      if (l !== null && Wl(a)) {
        if (
          ((i = l.start),
          (r = l.end),
          r === void 0 && (r = i),
          "selectionStart" in a)
        )
          ((a.selectionStart = i),
            (a.selectionEnd = Math.min(r, a.value.length)));
        else if (
          ((r = ((i = a.ownerDocument || document) && i.defaultView) || window),
          r.getSelection)
        ) {
          r = r.getSelection();
          var f = a.textContent.length,
            p = Math.min(l.start, f);
          ((l = l.end === void 0 ? p : Math.min(l.end, f)),
            !r.extend && p > l && ((f = l), (l = p), (p = f)),
            (f = Fp(a, p)));
          var g = Fp(a, l);
          f &&
            g &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== f.node ||
              r.anchorOffset !== f.offset ||
              r.focusNode !== g.node ||
              r.focusOffset !== g.offset) &&
            ((i = i.createRange()),
            i.setStart(f.node, f.offset),
            r.removeAllRanges(),
            p > l
              ? (r.addRange(i), r.extend(g.node, g.offset))
              : (i.setEnd(g.node, g.offset), r.addRange(i)));
        }
      }
      for (i = [], r = a; (r = r.parentNode); )
        r.nodeType === 1 &&
          i.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < i.length; a++)
        ((r = i[a]),
          (r.element.scrollLeft = r.left),
          (r.element.scrollTop = r.top));
    }
  }
  var UE = d && "documentMode" in document && 11 >= document.documentMode,
    ao = null,
    Gl = null,
    us = null,
    Vl = !1;
  function Bp(r, i, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Vl ||
      ao == null ||
      ao !== Sr(l) ||
      ((l = ao),
      "selectionStart" in l && Wl(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (us && as(us, l)) ||
        ((us = l),
        (l = Ia(Gl, "onSelect")),
        0 < l.length &&
          ((i = new Dl("onSelect", "select", null, i, a)),
          r.push({ event: i, listeners: l }),
          (i.target = ao))));
  }
  function wa(r, i) {
    var a = {};
    return (
      (a[r.toLowerCase()] = i.toLowerCase()),
      (a["Webkit" + r] = "webkit" + i),
      (a["Moz" + r] = "moz" + i),
      a
    );
  }
  var uo = {
      animationend: wa("Animation", "AnimationEnd"),
      animationiteration: wa("Animation", "AnimationIteration"),
      animationstart: wa("Animation", "AnimationStart"),
      transitionend: wa("Transition", "TransitionEnd"),
    },
    Xl = {},
    Hp = {};
  d &&
    ((Hp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete uo.animationend.animation,
      delete uo.animationiteration.animation,
      delete uo.animationstart.animation),
    "TransitionEvent" in window || delete uo.transitionend.transition);
  function ka(r) {
    if (Xl[r]) return Xl[r];
    if (!uo[r]) return r;
    var i = uo[r],
      a;
    for (a in i) if (i.hasOwnProperty(a) && a in Hp) return (Xl[r] = i[a]);
    return r;
  }
  var zp = ka("animationend"),
    $p = ka("animationiteration"),
    Wp = ka("animationstart"),
    Gp = ka("transitionend"),
    Vp = new Map(),
    Xp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Zr(r, i) {
    (Vp.set(r, i), u(i, [r]));
  }
  for (var ql = 0; ql < Xp.length; ql++) {
    var Yl = Xp[ql],
      jE = Yl.toLowerCase(),
      BE = Yl[0].toUpperCase() + Yl.slice(1);
    Zr(jE, "on" + BE);
  }
  (Zr(zp, "onAnimationEnd"),
    Zr($p, "onAnimationIteration"),
    Zr(Wp, "onAnimationStart"),
    Zr("dblclick", "onDoubleClick"),
    Zr("focusin", "onFocus"),
    Zr("focusout", "onBlur"),
    Zr(Gp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ls =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    HE = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ls),
    );
  function qp(r, i, a) {
    var l = r.type || "unknown-event";
    ((r.currentTarget = a), kt(l, i, void 0, r), (r.currentTarget = null));
  }
  function Yp(r, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < r.length; a++) {
      var l = r[a],
        f = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (i)
          for (var g = l.length - 1; 0 <= g; g--) {
            var v = l[g],
              S = v.instance,
              A = v.currentTarget;
            if (((v = v.listener), S !== p && f.isPropagationStopped()))
              break e;
            (qp(f, v, A), (p = S));
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((v = l[g]),
              (S = v.instance),
              (A = v.currentTarget),
              (v = v.listener),
              S !== p && f.isPropagationStopped())
            )
              break e;
            (qp(f, v, A), (p = S));
          }
      }
    }
    if (se) throw ((r = ut), (se = !1), (ut = null), r);
  }
  function Pt(r, i) {
    var a = i[rc];
    a === void 0 && (a = i[rc] = new Set());
    var l = r + "__bubble";
    a.has(l) || (Kp(i, r, 2, !1), a.add(l));
  }
  function Kl(r, i, a) {
    var l = 0;
    (i && (l |= 4), Kp(a, r, l, i));
  }
  var Ra = "_reactListening" + Math.random().toString(36).slice(2);
  function cs(r) {
    if (!r[Ra]) {
      ((r[Ra] = !0),
        o.forEach(function (a) {
          a !== "selectionchange" && (HE.has(a) || Kl(a, !1, r), Kl(a, !0, r));
        }));
      var i = r.nodeType === 9 ? r : r.ownerDocument;
      i === null || i[Ra] || ((i[Ra] = !0), Kl("selectionchange", !1, i));
    }
  }
  function Kp(r, i, a, l) {
    switch (vp(i)) {
      case 1:
        var f = tE;
        break;
      case 4:
        f = nE;
        break;
      default:
        f = Pl;
    }
    ((a = f.bind(null, i, a, r)),
      (f = void 0),
      !wt ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? r.addEventListener(i, a, { capture: !0, passive: f })
          : r.addEventListener(i, a, !0)
        : f !== void 0
          ? r.addEventListener(i, a, { passive: f })
          : r.addEventListener(i, a, !1));
  }
  function Zl(r, i, a, l, f) {
    var p = l;
    if ((i & 1) === 0 && (i & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var v = l.stateNode.containerInfo;
          if (v === f || (v.nodeType === 8 && v.parentNode === f)) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var S = g.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = g.stateNode.containerInfo),
                S === f || (S.nodeType === 8 && S.parentNode === f))
              )
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = Ci(v)), g === null)) return;
            if (((S = g.tag), S === 5 || S === 6)) {
              l = p = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    He(function () {
      var A = p,
        V = B(a),
        K = [];
      e: {
        var G = Vp.get(r);
        if (G !== void 0) {
          var ue = Dl,
            fe = r;
          switch (r) {
            case "keypress":
              if (va(a) === 0) break e;
            case "keydown":
            case "keyup":
              ue = _E;
              break;
            case "focusin":
              ((fe = "focus"), (ue = jl));
              break;
            case "focusout":
              ((fe = "blur"), (ue = jl));
              break;
            case "beforeblur":
            case "afterblur":
              ue = jl;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ue = Tp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = oE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = EE;
              break;
            case zp:
            case $p:
            case Wp:
              ue = uE;
              break;
            case Gp:
              ue = TE;
              break;
            case "scroll":
              ue = rE;
              break;
            case "wheel":
              ue = kE;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = cE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = kp;
          }
          var he = (i & 4) !== 0,
            Vt = !he && r === "scroll",
            O = he ? (G !== null ? G + "Capture" : null) : G;
          he = [];
          for (var T = A, x; T !== null; ) {
            x = T;
            var J = x.stateNode;
            if (
              (x.tag === 5 &&
                J !== null &&
                ((x = J),
                O !== null &&
                  ((J = ot(T, O)), J != null && he.push(fs(T, J, x)))),
              Vt)
            )
              break;
            T = T.return;
          }
          0 < he.length &&
            ((G = new ue(G, fe, null, a, V)),
            K.push({ event: G, listeners: he }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((G = r === "mouseover" || r === "pointerover"),
            (ue = r === "mouseout" || r === "pointerout"),
            G &&
              a !== I &&
              (fe = a.relatedTarget || a.fromElement) &&
              (Ci(fe) || fe[Ir]))
          )
            break e;
          if (
            (ue || G) &&
            ((G =
              V.window === V
                ? V
                : (G = V.ownerDocument)
                  ? G.defaultView || G.parentWindow
                  : window),
            ue
              ? ((fe = a.relatedTarget || a.toElement),
                (ue = A),
                (fe = fe ? Ci(fe) : null),
                fe !== null &&
                  ((Vt = de(fe)),
                  fe !== Vt || (fe.tag !== 5 && fe.tag !== 6)) &&
                  (fe = null))
              : ((ue = null), (fe = A)),
            ue !== fe)
          ) {
            if (
              ((he = Tp),
              (J = "onMouseLeave"),
              (O = "onMouseEnter"),
              (T = "mouse"),
              (r === "pointerout" || r === "pointerover") &&
                ((he = kp),
                (J = "onPointerLeave"),
                (O = "onPointerEnter"),
                (T = "pointer")),
              (Vt = ue == null ? G : fo(ue)),
              (x = fe == null ? G : fo(fe)),
              (G = new he(J, T + "leave", ue, a, V)),
              (G.target = Vt),
              (G.relatedTarget = x),
              (J = null),
              Ci(V) === A &&
                ((he = new he(O, T + "enter", fe, a, V)),
                (he.target = x),
                (he.relatedTarget = Vt),
                (J = he)),
              (Vt = J),
              ue && fe)
            )
              t: {
                for (he = ue, O = fe, T = 0, x = he; x; x = lo(x)) T++;
                for (x = 0, J = O; J; J = lo(J)) x++;
                for (; 0 < T - x; ) ((he = lo(he)), T--);
                for (; 0 < x - T; ) ((O = lo(O)), x--);
                for (; T--; ) {
                  if (he === O || (O !== null && he === O.alternate)) break t;
                  ((he = lo(he)), (O = lo(O)));
                }
                he = null;
              }
            else he = null;
            (ue !== null && Zp(K, G, ue, he, !1),
              fe !== null && Vt !== null && Zp(K, Vt, fe, he, !0));
          }
        }
        e: {
          if (
            ((G = A ? fo(A) : window),
            (ue = G.nodeName && G.nodeName.toLowerCase()),
            ue === "select" || (ue === "input" && G.type === "file"))
          )
            var _e = NE;
          else if (xp(G))
            if (Ap) _e = ME;
            else {
              _e = PE;
              var Ce = AE;
            }
          else
            (ue = G.nodeName) &&
              ue.toLowerCase() === "input" &&
              (G.type === "checkbox" || G.type === "radio") &&
              (_e = LE);
          if (_e && (_e = _e(r, A))) {
            Np(K, _e, a, V);
            break e;
          }
          (Ce && Ce(r, G, A),
            r === "focusout" &&
              (Ce = G._wrapperState) &&
              Ce.controlled &&
              G.type === "number" &&
              kr(G, "number", G.value));
        }
        switch (((Ce = A ? fo(A) : window), r)) {
          case "focusin":
            (xp(Ce) || Ce.contentEditable === "true") &&
              ((ao = Ce), (Gl = A), (us = null));
            break;
          case "focusout":
            us = Gl = ao = null;
            break;
          case "mousedown":
            Vl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Vl = !1), Bp(K, a, V));
            break;
          case "selectionchange":
            if (UE) break;
          case "keydown":
          case "keyup":
            Bp(K, a, V);
        }
        var Oe;
        if (Hl)
          e: {
            switch (r) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          so
            ? Op(r, a) && (Le = "onCompositionEnd")
            : r === "keydown" &&
              a.keyCode === 229 &&
              (Le = "onCompositionStart");
        (Le &&
          (Rp &&
            a.locale !== "ko" &&
            (so || Le !== "onCompositionStart"
              ? Le === "onCompositionEnd" && so && (Oe = Ep())
              : ((Kr = V),
                (Ml = "value" in Kr ? Kr.value : Kr.textContent),
                (so = !0))),
          (Ce = Ia(A, Le)),
          0 < Ce.length &&
            ((Le = new wp(Le, r, null, a, V)),
            K.push({ event: Le, listeners: Ce }),
            Oe
              ? (Le.data = Oe)
              : ((Oe = bp(a)), Oe !== null && (Le.data = Oe)))),
          (Oe = IE ? CE(r, a) : OE(r, a)) &&
            ((A = Ia(A, "onBeforeInput")),
            0 < A.length &&
              ((V = new wp("onBeforeInput", "beforeinput", null, a, V)),
              K.push({ event: V, listeners: A }),
              (V.data = Oe))));
      }
      Yp(K, i);
    });
  }
  function fs(r, i, a) {
    return { instance: r, listener: i, currentTarget: a };
  }
  function Ia(r, i) {
    for (var a = i + "Capture", l = []; r !== null; ) {
      var f = r,
        p = f.stateNode;
      (f.tag === 5 &&
        p !== null &&
        ((f = p),
        (p = ot(r, a)),
        p != null && l.unshift(fs(r, p, f)),
        (p = ot(r, i)),
        p != null && l.push(fs(r, p, f))),
        (r = r.return));
    }
    return l;
  }
  function lo(r) {
    if (r === null) return null;
    do r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Zp(r, i, a, l, f) {
    for (var p = i._reactName, g = []; a !== null && a !== l; ) {
      var v = a,
        S = v.alternate,
        A = v.stateNode;
      if (S !== null && S === l) break;
      (v.tag === 5 &&
        A !== null &&
        ((v = A),
        f
          ? ((S = ot(a, p)), S != null && g.unshift(fs(a, S, v)))
          : f || ((S = ot(a, p)), S != null && g.push(fs(a, S, v)))),
        (a = a.return));
    }
    g.length !== 0 && r.push({ event: i, listeners: g });
  }
  var zE = /\r\n?/g,
    $E = /\u0000|\uFFFD/g;
  function Qp(r) {
    return (typeof r == "string" ? r : "" + r)
      .replace(
        zE,
        `
`,
      )
      .replace($E, "");
  }
  function Ca(r, i, a) {
    if (((i = Qp(i)), Qp(r) !== i && a)) throw Error(n(425));
  }
  function Oa() {}
  var Ql = null,
    Jl = null;
  function ec(r, i) {
    return (
      r === "textarea" ||
      r === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tc = typeof setTimeout == "function" ? setTimeout : void 0,
    WE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jp = typeof Promise == "function" ? Promise : void 0,
    GE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jp < "u"
          ? function (r) {
              return Jp.resolve(null).then(r).catch(VE);
            }
          : tc;
  function VE(r) {
    setTimeout(function () {
      throw r;
    });
  }
  function nc(r, i) {
    var a = i,
      l = 0;
    do {
      var f = a.nextSibling;
      if ((r.removeChild(a), f && f.nodeType === 8))
        if (((a = f.data), a === "/$")) {
          if (l === 0) {
            (r.removeChild(f), ts(i));
            return;
          }
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || l++;
      a = f;
    } while (a);
    ts(i);
  }
  function Qr(r) {
    for (; r != null; r = r.nextSibling) {
      var i = r.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (((i = r.data), i === "$" || i === "$!" || i === "$?")) break;
        if (i === "/$") return null;
      }
    }
    return r;
  }
  function eh(r) {
    r = r.previousSibling;
    for (var i = 0; r; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (i === 0) return r;
          i--;
        } else a === "/$" && i++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var co = Math.random().toString(36).slice(2),
    cr = "__reactFiber$" + co,
    ds = "__reactProps$" + co,
    Ir = "__reactContainer$" + co,
    rc = "__reactEvents$" + co,
    XE = "__reactListeners$" + co,
    qE = "__reactHandles$" + co;
  function Ci(r) {
    var i = r[cr];
    if (i) return i;
    for (var a = r.parentNode; a; ) {
      if ((i = a[Ir] || a[cr])) {
        if (
          ((a = i.alternate),
          i.child !== null || (a !== null && a.child !== null))
        )
          for (r = eh(r); r !== null; ) {
            if ((a = r[cr])) return a;
            r = eh(r);
          }
        return i;
      }
      ((r = a), (a = r.parentNode));
    }
    return null;
  }
  function ps(r) {
    return (
      (r = r[cr] || r[Ir]),
      !r || (r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3)
        ? null
        : r
    );
  }
  function fo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function ba(r) {
    return r[ds] || null;
  }
  var ic = [],
    po = -1;
  function Jr(r) {
    return { current: r };
  }
  function Lt(r) {
    0 > po || ((r.current = ic[po]), (ic[po] = null), po--);
  }
  function Ct(r, i) {
    (po++, (ic[po] = r.current), (r.current = i));
  }
  var ei = {},
    pn = Jr(ei),
    Rn = Jr(!1),
    Oi = ei;
  function ho(r, i) {
    var a = r.type.contextTypes;
    if (!a) return ei;
    var l = r.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === i)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {},
      p;
    for (p in a) f[p] = i[p];
    return (
      l &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = i),
        (r.__reactInternalMemoizedMaskedChildContext = f)),
      f
    );
  }
  function In(r) {
    return ((r = r.childContextTypes), r != null);
  }
  function xa() {
    (Lt(Rn), Lt(pn));
  }
  function th(r, i, a) {
    if (pn.current !== ei) throw Error(n(168));
    (Ct(pn, i), Ct(Rn, a));
  }
  function nh(r, i, a) {
    var l = r.stateNode;
    if (((i = i.childContextTypes), typeof l.getChildContext != "function"))
      return a;
    l = l.getChildContext();
    for (var f in l) if (!(f in i)) throw Error(n(108, dt(r) || "Unknown", f));
    return re({}, a, l);
  }
  function Na(r) {
    return (
      (r =
        ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) ||
        ei),
      (Oi = pn.current),
      Ct(pn, r),
      Ct(Rn, Rn.current),
      !0
    );
  }
  function rh(r, i, a) {
    var l = r.stateNode;
    if (!l) throw Error(n(169));
    (a
      ? ((r = nh(r, i, Oi)),
        (l.__reactInternalMemoizedMergedChildContext = r),
        Lt(Rn),
        Lt(pn),
        Ct(pn, r))
      : Lt(Rn),
      Ct(Rn, a));
  }
  var Cr = null,
    Aa = !1,
    oc = !1;
  function ih(r) {
    Cr === null ? (Cr = [r]) : Cr.push(r);
  }
  function YE(r) {
    ((Aa = !0), ih(r));
  }
  function ti() {
    if (!oc && Cr !== null) {
      oc = !0;
      var r = 0,
        i = pt;
      try {
        var a = Cr;
        for (pt = 1; r < a.length; r++) {
          var l = a[r];
          do l = l(!0);
          while (l !== null);
        }
        ((Cr = null), (Aa = !1));
      } catch (f) {
        throw (Cr !== null && (Cr = Cr.slice(r + 1)), on(L, ti), f);
      } finally {
        ((pt = i), (oc = !1));
      }
    }
    return null;
  }
  var mo = [],
    go = 0,
    Pa = null,
    La = 0,
    $n = [],
    Wn = 0,
    bi = null,
    Or = 1,
    br = "";
  function xi(r, i) {
    ((mo[go++] = La), (mo[go++] = Pa), (Pa = r), (La = i));
  }
  function oh(r, i, a) {
    (($n[Wn++] = Or), ($n[Wn++] = br), ($n[Wn++] = bi), (bi = r));
    var l = Or;
    r = br;
    var f = 32 - Z(l) - 1;
    ((l &= ~(1 << f)), (a += 1));
    var p = 32 - Z(i) + f;
    if (30 < p) {
      var g = f - (f % 5);
      ((p = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (f -= g),
        (Or = (1 << (32 - Z(i) + f)) | (a << f) | l),
        (br = p + r));
    } else ((Or = (1 << p) | (a << f) | l), (br = r));
  }
  function sc(r) {
    r.return !== null && (xi(r, 1), oh(r, 1, 0));
  }
  function ac(r) {
    for (; r === Pa; )
      ((Pa = mo[--go]), (mo[go] = null), (La = mo[--go]), (mo[go] = null));
    for (; r === bi; )
      ((bi = $n[--Wn]),
        ($n[Wn] = null),
        (br = $n[--Wn]),
        ($n[Wn] = null),
        (Or = $n[--Wn]),
        ($n[Wn] = null));
  }
  var Fn = null,
    Un = null,
    Dt = !1,
    Qn = null;
  function sh(r, i) {
    var a = qn(5, null, null, 0);
    ((a.elementType = "DELETED"),
      (a.stateNode = i),
      (a.return = r),
      (i = r.deletions),
      i === null ? ((r.deletions = [a]), (r.flags |= 16)) : i.push(a));
  }
  function ah(r, i) {
    switch (r.tag) {
      case 5:
        var a = r.type;
        return (
          (i =
            i.nodeType !== 1 || a.toLowerCase() !== i.nodeName.toLowerCase()
              ? null
              : i),
          i !== null
            ? ((r.stateNode = i), (Fn = r), (Un = Qr(i.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (i = r.pendingProps === "" || i.nodeType !== 3 ? null : i),
          i !== null ? ((r.stateNode = i), (Fn = r), (Un = null), !0) : !1
        );
      case 13:
        return (
          (i = i.nodeType !== 8 ? null : i),
          i !== null
            ? ((a = bi !== null ? { id: Or, overflow: br } : null),
              (r.memoizedState = {
                dehydrated: i,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = qn(18, null, null, 0)),
              (a.stateNode = i),
              (a.return = r),
              (r.child = a),
              (Fn = r),
              (Un = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function uc(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function lc(r) {
    if (Dt) {
      var i = Un;
      if (i) {
        var a = i;
        if (!ah(r, i)) {
          if (uc(r)) throw Error(n(418));
          i = Qr(a.nextSibling);
          var l = Fn;
          i && ah(r, i)
            ? sh(l, a)
            : ((r.flags = (r.flags & -4097) | 2), (Dt = !1), (Fn = r));
        }
      } else {
        if (uc(r)) throw Error(n(418));
        ((r.flags = (r.flags & -4097) | 2), (Dt = !1), (Fn = r));
      }
    }
  }
  function uh(r) {
    for (
      r = r.return;
      r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;
    )
      r = r.return;
    Fn = r;
  }
  function Ma(r) {
    if (r !== Fn) return !1;
    if (!Dt) return (uh(r), (Dt = !0), !1);
    var i;
    if (
      ((i = r.tag !== 3) &&
        !(i = r.tag !== 5) &&
        ((i = r.type),
        (i = i !== "head" && i !== "body" && !ec(r.type, r.memoizedProps))),
      i && (i = Un))
    ) {
      if (uc(r)) throw (lh(), Error(n(418)));
      for (; i; ) (sh(r, i), (i = Qr(i.nextSibling)));
    }
    if ((uh(r), r.tag === 13)) {
      if (((r = r.memoizedState), (r = r !== null ? r.dehydrated : null), !r))
        throw Error(n(317));
      e: {
        for (r = r.nextSibling, i = 0; r; ) {
          if (r.nodeType === 8) {
            var a = r.data;
            if (a === "/$") {
              if (i === 0) {
                Un = Qr(r.nextSibling);
                break e;
              }
              i--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || i++;
          }
          r = r.nextSibling;
        }
        Un = null;
      }
    } else Un = Fn ? Qr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function lh() {
    for (var r = Un; r; ) r = Qr(r.nextSibling);
  }
  function _o() {
    ((Un = Fn = null), (Dt = !1));
  }
  function cc(r) {
    Qn === null ? (Qn = [r]) : Qn.push(r);
  }
  var KE = U.ReactCurrentBatchConfig;
  function hs(r, i, a) {
    if (
      ((r = a.ref),
      r !== null && typeof r != "function" && typeof r != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(n(309));
          var l = a.stateNode;
        }
        if (!l) throw Error(n(147, r));
        var f = l,
          p = "" + r;
        return i !== null &&
          i.ref !== null &&
          typeof i.ref == "function" &&
          i.ref._stringRef === p
          ? i.ref
          : ((i = function (g) {
              var v = f.refs;
              g === null ? delete v[p] : (v[p] = g);
            }),
            (i._stringRef = p),
            i);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!a._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Da(r, i) {
    throw (
      (r = Object.prototype.toString.call(i)),
      Error(
        n(
          31,
          r === "[object Object]"
            ? "object with keys {" + Object.keys(i).join(", ") + "}"
            : r,
        ),
      )
    );
  }
  function ch(r) {
    var i = r._init;
    return i(r._payload);
  }
  function fh(r) {
    function i(O, T) {
      if (r) {
        var x = O.deletions;
        x === null ? ((O.deletions = [T]), (O.flags |= 16)) : x.push(T);
      }
    }
    function a(O, T) {
      if (!r) return null;
      for (; T !== null; ) (i(O, T), (T = T.sibling));
      return null;
    }
    function l(O, T) {
      for (O = new Map(); T !== null; )
        (T.key !== null ? O.set(T.key, T) : O.set(T.index, T), (T = T.sibling));
      return O;
    }
    function f(O, T) {
      return ((O = li(O, T)), (O.index = 0), (O.sibling = null), O);
    }
    function p(O, T, x) {
      return (
        (O.index = x),
        r
          ? ((x = O.alternate),
            x !== null
              ? ((x = x.index), x < T ? ((O.flags |= 2), T) : x)
              : ((O.flags |= 2), T))
          : ((O.flags |= 1048576), T)
      );
    }
    function g(O) {
      return (r && O.alternate === null && (O.flags |= 2), O);
    }
    function v(O, T, x, J) {
      return T === null || T.tag !== 6
        ? ((T = tf(x, O.mode, J)), (T.return = O), T)
        : ((T = f(T, x)), (T.return = O), T);
    }
    function S(O, T, x, J) {
      var _e = x.type;
      return _e === ae
        ? V(O, T, x.props.children, J, x.key)
        : T !== null &&
            (T.elementType === _e ||
              (typeof _e == "object" &&
                _e !== null &&
                _e.$$typeof === be &&
                ch(_e) === T.type))
          ? ((J = f(T, x.props)), (J.ref = hs(O, T, x)), (J.return = O), J)
          : ((J = su(x.type, x.key, x.props, null, O.mode, J)),
            (J.ref = hs(O, T, x)),
            (J.return = O),
            J);
    }
    function A(O, T, x, J) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== x.containerInfo ||
        T.stateNode.implementation !== x.implementation
        ? ((T = nf(x, O.mode, J)), (T.return = O), T)
        : ((T = f(T, x.children || [])), (T.return = O), T);
    }
    function V(O, T, x, J, _e) {
      return T === null || T.tag !== 7
        ? ((T = Ui(x, O.mode, J, _e)), (T.return = O), T)
        : ((T = f(T, x)), (T.return = O), T);
    }
    function K(O, T, x) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return ((T = tf("" + T, O.mode, x)), (T.return = O), T);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return (
              (x = su(T.type, T.key, T.props, null, O.mode, x)),
              (x.ref = hs(O, null, T)),
              (x.return = O),
              x
            );
          case q:
            return ((T = nf(T, O.mode, x)), (T.return = O), T);
          case be:
            var J = T._init;
            return K(O, J(T._payload), x);
        }
        if (qe(T) || oe(T))
          return ((T = Ui(T, O.mode, x, null)), (T.return = O), T);
        Da(O, T);
      }
      return null;
    }
    function G(O, T, x, J) {
      var _e = T !== null ? T.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return _e !== null ? null : v(O, T, "" + x, J);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case C:
            return x.key === _e ? S(O, T, x, J) : null;
          case q:
            return x.key === _e ? A(O, T, x, J) : null;
          case be:
            return ((_e = x._init), G(O, T, _e(x._payload), J));
        }
        if (qe(x) || oe(x)) return _e !== null ? null : V(O, T, x, J, null);
        Da(O, x);
      }
      return null;
    }
    function ue(O, T, x, J, _e) {
      if ((typeof J == "string" && J !== "") || typeof J == "number")
        return ((O = O.get(x) || null), v(T, O, "" + J, _e));
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case C:
            return (
              (O = O.get(J.key === null ? x : J.key) || null),
              S(T, O, J, _e)
            );
          case q:
            return (
              (O = O.get(J.key === null ? x : J.key) || null),
              A(T, O, J, _e)
            );
          case be:
            var Ce = J._init;
            return ue(O, T, x, Ce(J._payload), _e);
        }
        if (qe(J) || oe(J))
          return ((O = O.get(x) || null), V(T, O, J, _e, null));
        Da(T, J);
      }
      return null;
    }
    function fe(O, T, x, J) {
      for (
        var _e = null, Ce = null, Oe = T, Le = (T = 0), ln = null;
        Oe !== null && Le < x.length;
        Le++
      ) {
        Oe.index > Le ? ((ln = Oe), (Oe = null)) : (ln = Oe.sibling);
        var ht = G(O, Oe, x[Le], J);
        if (ht === null) {
          Oe === null && (Oe = ln);
          break;
        }
        (r && Oe && ht.alternate === null && i(O, Oe),
          (T = p(ht, T, Le)),
          Ce === null ? (_e = ht) : (Ce.sibling = ht),
          (Ce = ht),
          (Oe = ln));
      }
      if (Le === x.length) return (a(O, Oe), Dt && xi(O, Le), _e);
      if (Oe === null) {
        for (; Le < x.length; Le++)
          ((Oe = K(O, x[Le], J)),
            Oe !== null &&
              ((T = p(Oe, T, Le)),
              Ce === null ? (_e = Oe) : (Ce.sibling = Oe),
              (Ce = Oe)));
        return (Dt && xi(O, Le), _e);
      }
      for (Oe = l(O, Oe); Le < x.length; Le++)
        ((ln = ue(Oe, O, Le, x[Le], J)),
          ln !== null &&
            (r &&
              ln.alternate !== null &&
              Oe.delete(ln.key === null ? Le : ln.key),
            (T = p(ln, T, Le)),
            Ce === null ? (_e = ln) : (Ce.sibling = ln),
            (Ce = ln)));
      return (
        r &&
          Oe.forEach(function (ci) {
            return i(O, ci);
          }),
        Dt && xi(O, Le),
        _e
      );
    }
    function he(O, T, x, J) {
      var _e = oe(x);
      if (typeof _e != "function") throw Error(n(150));
      if (((x = _e.call(x)), x == null)) throw Error(n(151));
      for (
        var Ce = (_e = null), Oe = T, Le = (T = 0), ln = null, ht = x.next();
        Oe !== null && !ht.done;
        Le++, ht = x.next()
      ) {
        Oe.index > Le ? ((ln = Oe), (Oe = null)) : (ln = Oe.sibling);
        var ci = G(O, Oe, ht.value, J);
        if (ci === null) {
          Oe === null && (Oe = ln);
          break;
        }
        (r && Oe && ci.alternate === null && i(O, Oe),
          (T = p(ci, T, Le)),
          Ce === null ? (_e = ci) : (Ce.sibling = ci),
          (Ce = ci),
          (Oe = ln));
      }
      if (ht.done) return (a(O, Oe), Dt && xi(O, Le), _e);
      if (Oe === null) {
        for (; !ht.done; Le++, ht = x.next())
          ((ht = K(O, ht.value, J)),
            ht !== null &&
              ((T = p(ht, T, Le)),
              Ce === null ? (_e = ht) : (Ce.sibling = ht),
              (Ce = ht)));
        return (Dt && xi(O, Le), _e);
      }
      for (Oe = l(O, Oe); !ht.done; Le++, ht = x.next())
        ((ht = ue(Oe, O, Le, ht.value, J)),
          ht !== null &&
            (r &&
              ht.alternate !== null &&
              Oe.delete(ht.key === null ? Le : ht.key),
            (T = p(ht, T, Le)),
            Ce === null ? (_e = ht) : (Ce.sibling = ht),
            (Ce = ht)));
      return (
        r &&
          Oe.forEach(function (bS) {
            return i(O, bS);
          }),
        Dt && xi(O, Le),
        _e
      );
    }
    function Vt(O, T, x, J) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === ae &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case C:
            e: {
              for (var _e = x.key, Ce = T; Ce !== null; ) {
                if (Ce.key === _e) {
                  if (((_e = x.type), _e === ae)) {
                    if (Ce.tag === 7) {
                      (a(O, Ce.sibling),
                        (T = f(Ce, x.props.children)),
                        (T.return = O),
                        (O = T));
                      break e;
                    }
                  } else if (
                    Ce.elementType === _e ||
                    (typeof _e == "object" &&
                      _e !== null &&
                      _e.$$typeof === be &&
                      ch(_e) === Ce.type)
                  ) {
                    (a(O, Ce.sibling),
                      (T = f(Ce, x.props)),
                      (T.ref = hs(O, Ce, x)),
                      (T.return = O),
                      (O = T));
                    break e;
                  }
                  a(O, Ce);
                  break;
                } else i(O, Ce);
                Ce = Ce.sibling;
              }
              x.type === ae
                ? ((T = Ui(x.props.children, O.mode, J, x.key)),
                  (T.return = O),
                  (O = T))
                : ((J = su(x.type, x.key, x.props, null, O.mode, J)),
                  (J.ref = hs(O, T, x)),
                  (J.return = O),
                  (O = J));
            }
            return g(O);
          case q:
            e: {
              for (Ce = x.key; T !== null; ) {
                if (T.key === Ce)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === x.containerInfo &&
                    T.stateNode.implementation === x.implementation
                  ) {
                    (a(O, T.sibling),
                      (T = f(T, x.children || [])),
                      (T.return = O),
                      (O = T));
                    break e;
                  } else {
                    a(O, T);
                    break;
                  }
                else i(O, T);
                T = T.sibling;
              }
              ((T = nf(x, O.mode, J)), (T.return = O), (O = T));
            }
            return g(O);
          case be:
            return ((Ce = x._init), Vt(O, T, Ce(x._payload), J));
        }
        if (qe(x)) return fe(O, T, x, J);
        if (oe(x)) return he(O, T, x, J);
        Da(O, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          T !== null && T.tag === 6
            ? (a(O, T.sibling), (T = f(T, x)), (T.return = O), (O = T))
            : (a(O, T), (T = tf(x, O.mode, J)), (T.return = O), (O = T)),
          g(O))
        : a(O, T);
    }
    return Vt;
  }
  var yo = fh(!0),
    dh = fh(!1),
    Fa = Jr(null),
    Ua = null,
    vo = null,
    fc = null;
  function dc() {
    fc = vo = Ua = null;
  }
  function pc(r) {
    var i = Fa.current;
    (Lt(Fa), (r._currentValue = i));
  }
  function hc(r, i, a) {
    for (; r !== null; ) {
      var l = r.alternate;
      if (
        ((r.childLanes & i) !== i
          ? ((r.childLanes |= i), l !== null && (l.childLanes |= i))
          : l !== null && (l.childLanes & i) !== i && (l.childLanes |= i),
        r === a)
      )
        break;
      r = r.return;
    }
  }
  function Eo(r, i) {
    ((Ua = r),
      (fc = vo = null),
      (r = r.dependencies),
      r !== null &&
        r.firstContext !== null &&
        ((r.lanes & i) !== 0 && (Cn = !0), (r.firstContext = null)));
  }
  function Gn(r) {
    var i = r._currentValue;
    if (fc !== r)
      if (((r = { context: r, memoizedValue: i, next: null }), vo === null)) {
        if (Ua === null) throw Error(n(308));
        ((vo = r), (Ua.dependencies = { lanes: 0, firstContext: r }));
      } else vo = vo.next = r;
    return i;
  }
  var Ni = null;
  function mc(r) {
    Ni === null ? (Ni = [r]) : Ni.push(r);
  }
  function ph(r, i, a, l) {
    var f = i.interleaved;
    return (
      f === null ? ((a.next = a), mc(i)) : ((a.next = f.next), (f.next = a)),
      (i.interleaved = a),
      xr(r, l)
    );
  }
  function xr(r, i) {
    r.lanes |= i;
    var a = r.alternate;
    for (a !== null && (a.lanes |= i), a = r, r = r.return; r !== null; )
      ((r.childLanes |= i),
        (a = r.alternate),
        a !== null && (a.childLanes |= i),
        (a = r),
        (r = r.return));
    return a.tag === 3 ? a.stateNode : null;
  }
  var ni = !1;
  function gc(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hh(r, i) {
    ((r = r.updateQueue),
      i.updateQueue === r &&
        (i.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects,
        }));
  }
  function Nr(r, i) {
    return {
      eventTime: r,
      lane: i,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function ri(r, i, a) {
    var l = r.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ft & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
        (l.pending = i),
        xr(r, a)
      );
    }
    return (
      (f = l.interleaved),
      f === null ? ((i.next = i), mc(l)) : ((i.next = f.next), (f.next = i)),
      (l.interleaved = i),
      xr(r, a)
    );
  }
  function ja(r, i, a) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (a & 4194240) !== 0))
    ) {
      var l = i.lanes;
      ((l &= r.pendingLanes), (a |= l), (i.lanes = a), ki(r, a));
    }
  }
  function mh(r, i) {
    var a = r.updateQueue,
      l = r.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var f = null,
        p = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          (p === null ? (f = p = g) : (p = p.next = g), (a = a.next));
        } while (a !== null);
        p === null ? (f = p = i) : (p = p.next = i);
      } else f = p = i;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (r.updateQueue = a));
      return;
    }
    ((r = a.lastBaseUpdate),
      r === null ? (a.firstBaseUpdate = i) : (r.next = i),
      (a.lastBaseUpdate = i));
  }
  function Ba(r, i, a, l) {
    var f = r.updateQueue;
    ni = !1;
    var p = f.firstBaseUpdate,
      g = f.lastBaseUpdate,
      v = f.shared.pending;
    if (v !== null) {
      f.shared.pending = null;
      var S = v,
        A = S.next;
      ((S.next = null), g === null ? (p = A) : (g.next = A), (g = S));
      var V = r.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== g &&
          (v === null ? (V.firstBaseUpdate = A) : (v.next = A),
          (V.lastBaseUpdate = S)));
    }
    if (p !== null) {
      var K = f.baseState;
      ((g = 0), (V = A = S = null), (v = p));
      do {
        var G = v.lane,
          ue = v.eventTime;
        if ((l & G) === G) {
          V !== null &&
            (V = V.next =
              {
                eventTime: ue,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var fe = r,
              he = v;
            switch (((G = i), (ue = a), he.tag)) {
              case 1:
                if (((fe = he.payload), typeof fe == "function")) {
                  K = fe.call(ue, K, G);
                  break e;
                }
                K = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = he.payload),
                  (G = typeof fe == "function" ? fe.call(ue, K, G) : fe),
                  G == null)
                )
                  break e;
                K = re({}, K, G);
                break e;
              case 2:
                ni = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((r.flags |= 64),
            (G = f.effects),
            G === null ? (f.effects = [v]) : G.push(v));
        } else
          ((ue = {
            eventTime: ue,
            lane: G,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((A = V = ue), (S = K)) : (V = V.next = ue),
            (g |= G));
        if (((v = v.next), v === null)) {
          if (((v = f.shared.pending), v === null)) break;
          ((G = v),
            (v = G.next),
            (G.next = null),
            (f.lastBaseUpdate = G),
            (f.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (S = K),
        (f.baseState = S),
        (f.firstBaseUpdate = A),
        (f.lastBaseUpdate = V),
        (i = f.shared.interleaved),
        i !== null)
      ) {
        f = i;
        do ((g |= f.lane), (f = f.next));
        while (f !== i);
      } else p === null && (f.shared.lanes = 0);
      ((Li |= g), (r.lanes = g), (r.memoizedState = K));
    }
  }
  function gh(r, i, a) {
    if (((r = i.effects), (i.effects = null), r !== null))
      for (i = 0; i < r.length; i++) {
        var l = r[i],
          f = l.callback;
        if (f !== null) {
          if (((l.callback = null), (l = a), typeof f != "function"))
            throw Error(n(191, f));
          f.call(l);
        }
      }
  }
  var ms = {},
    fr = Jr(ms),
    gs = Jr(ms),
    _s = Jr(ms);
  function Ai(r) {
    if (r === ms) throw Error(n(174));
    return r;
  }
  function _c(r, i) {
    switch ((Ct(_s, i), Ct(gs, r), Ct(fr, ms), (r = i.nodeType), r)) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Ji(null, "");
        break;
      default:
        ((r = r === 8 ? i.parentNode : i),
          (i = r.namespaceURI || null),
          (r = r.tagName),
          (i = Ji(i, r)));
    }
    (Lt(fr), Ct(fr, i));
  }
  function So() {
    (Lt(fr), Lt(gs), Lt(_s));
  }
  function _h(r) {
    Ai(_s.current);
    var i = Ai(fr.current),
      a = Ji(i, r.type);
    i !== a && (Ct(gs, r), Ct(fr, a));
  }
  function yc(r) {
    gs.current === r && (Lt(fr), Lt(gs));
  }
  var Bt = Jr(0);
  function Ha(r) {
    for (var i = r; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return null;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
    return null;
  }
  var vc = [];
  function Ec() {
    for (var r = 0; r < vc.length; r++)
      vc[r]._workInProgressVersionPrimary = null;
    vc.length = 0;
  }
  var za = U.ReactCurrentDispatcher,
    Sc = U.ReactCurrentBatchConfig,
    Pi = 0,
    Ht = null,
    Jt = null,
    an = null,
    $a = !1,
    ys = !1,
    vs = 0,
    ZE = 0;
  function hn() {
    throw Error(n(321));
  }
  function Tc(r, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < r.length; a++)
      if (!Zn(r[a], i[a])) return !1;
    return !0;
  }
  function wc(r, i, a, l, f, p) {
    if (
      ((Pi = p),
      (Ht = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (za.current = r === null || r.memoizedState === null ? tS : nS),
      (r = a(l, f)),
      ys)
    ) {
      p = 0;
      do {
        if (((ys = !1), (vs = 0), 25 <= p)) throw Error(n(301));
        ((p += 1),
          (an = Jt = null),
          (i.updateQueue = null),
          (za.current = rS),
          (r = a(l, f)));
      } while (ys);
    }
    if (
      ((za.current = Va),
      (i = Jt !== null && Jt.next !== null),
      (Pi = 0),
      (an = Jt = Ht = null),
      ($a = !1),
      i)
    )
      throw Error(n(300));
    return r;
  }
  function kc() {
    var r = vs !== 0;
    return ((vs = 0), r);
  }
  function dr() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (an === null ? (Ht.memoizedState = an = r) : (an = an.next = r), an);
  }
  function Vn() {
    if (Jt === null) {
      var r = Ht.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = Jt.next;
    var i = an === null ? Ht.memoizedState : an.next;
    if (i !== null) ((an = i), (Jt = r));
    else {
      if (r === null) throw Error(n(310));
      ((Jt = r),
        (r = {
          memoizedState: Jt.memoizedState,
          baseState: Jt.baseState,
          baseQueue: Jt.baseQueue,
          queue: Jt.queue,
          next: null,
        }),
        an === null ? (Ht.memoizedState = an = r) : (an = an.next = r));
    }
    return an;
  }
  function Es(r, i) {
    return typeof i == "function" ? i(r) : i;
  }
  function Rc(r) {
    var i = Vn(),
      a = i.queue;
    if (a === null) throw Error(n(311));
    a.lastRenderedReducer = r;
    var l = Jt,
      f = l.baseQueue,
      p = a.pending;
    if (p !== null) {
      if (f !== null) {
        var g = f.next;
        ((f.next = p.next), (p.next = g));
      }
      ((l.baseQueue = f = p), (a.pending = null));
    }
    if (f !== null) {
      ((p = f.next), (l = l.baseState));
      var v = (g = null),
        S = null,
        A = p;
      do {
        var V = A.lane;
        if ((Pi & V) === V)
          (S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null,
              }),
            (l = A.hasEagerState ? A.eagerState : r(l, A.action)));
        else {
          var K = {
            lane: V,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          };
          (S === null ? ((v = S = K), (g = l)) : (S = S.next = K),
            (Ht.lanes |= V),
            (Li |= V));
        }
        A = A.next;
      } while (A !== null && A !== p);
      (S === null ? (g = l) : (S.next = v),
        Zn(l, i.memoizedState) || (Cn = !0),
        (i.memoizedState = l),
        (i.baseState = g),
        (i.baseQueue = S),
        (a.lastRenderedState = l));
    }
    if (((r = a.interleaved), r !== null)) {
      f = r;
      do ((p = f.lane), (Ht.lanes |= p), (Li |= p), (f = f.next));
      while (f !== r);
    } else f === null && (a.lanes = 0);
    return [i.memoizedState, a.dispatch];
  }
  function Ic(r) {
    var i = Vn(),
      a = i.queue;
    if (a === null) throw Error(n(311));
    a.lastRenderedReducer = r;
    var l = a.dispatch,
      f = a.pending,
      p = i.memoizedState;
    if (f !== null) {
      a.pending = null;
      var g = (f = f.next);
      do ((p = r(p, g.action)), (g = g.next));
      while (g !== f);
      (Zn(p, i.memoizedState) || (Cn = !0),
        (i.memoizedState = p),
        i.baseQueue === null && (i.baseState = p),
        (a.lastRenderedState = p));
    }
    return [p, l];
  }
  function yh() {}
  function vh(r, i) {
    var a = Ht,
      l = Vn(),
      f = i(),
      p = !Zn(l.memoizedState, f);
    if (
      (p && ((l.memoizedState = f), (Cn = !0)),
      (l = l.queue),
      Cc(Th.bind(null, a, l, r), [r]),
      l.getSnapshot !== i || p || (an !== null && an.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ss(9, Sh.bind(null, a, l, f, i), void 0, null),
        un === null)
      )
        throw Error(n(349));
      (Pi & 30) !== 0 || Eh(a, i, f);
    }
    return f;
  }
  function Eh(r, i, a) {
    ((r.flags |= 16384),
      (r = { getSnapshot: i, value: a }),
      (i = Ht.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Ht.updateQueue = i),
          (i.stores = [r]))
        : ((a = i.stores), a === null ? (i.stores = [r]) : a.push(r)));
  }
  function Sh(r, i, a, l) {
    ((i.value = a), (i.getSnapshot = l), wh(i) && kh(r));
  }
  function Th(r, i, a) {
    return a(function () {
      wh(i) && kh(r);
    });
  }
  function wh(r) {
    var i = r.getSnapshot;
    r = r.value;
    try {
      var a = i();
      return !Zn(r, a);
    } catch {
      return !0;
    }
  }
  function kh(r) {
    var i = xr(r, 1);
    i !== null && nr(i, r, 1, -1);
  }
  function Rh(r) {
    var i = dr();
    return (
      typeof r == "function" && (r = r()),
      (i.memoizedState = i.baseState = r),
      (r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Es,
        lastRenderedState: r,
      }),
      (i.queue = r),
      (r = r.dispatch = eS.bind(null, Ht, r)),
      [i.memoizedState, r]
    );
  }
  function Ss(r, i, a, l) {
    return (
      (r = { tag: r, create: i, destroy: a, deps: l, next: null }),
      (i = Ht.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Ht.updateQueue = i),
          (i.lastEffect = r.next = r))
        : ((a = i.lastEffect),
          a === null
            ? (i.lastEffect = r.next = r)
            : ((l = a.next), (a.next = r), (r.next = l), (i.lastEffect = r))),
      r
    );
  }
  function Ih() {
    return Vn().memoizedState;
  }
  function Wa(r, i, a, l) {
    var f = dr();
    ((Ht.flags |= r),
      (f.memoizedState = Ss(1 | i, a, void 0, l === void 0 ? null : l)));
  }
  function Ga(r, i, a, l) {
    var f = Vn();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (Jt !== null) {
      var g = Jt.memoizedState;
      if (((p = g.destroy), l !== null && Tc(l, g.deps))) {
        f.memoizedState = Ss(i, a, p, l);
        return;
      }
    }
    ((Ht.flags |= r), (f.memoizedState = Ss(1 | i, a, p, l)));
  }
  function Ch(r, i) {
    return Wa(8390656, 8, r, i);
  }
  function Cc(r, i) {
    return Ga(2048, 8, r, i);
  }
  function Oh(r, i) {
    return Ga(4, 2, r, i);
  }
  function bh(r, i) {
    return Ga(4, 4, r, i);
  }
  function xh(r, i) {
    if (typeof i == "function")
      return (
        (r = r()),
        i(r),
        function () {
          i(null);
        }
      );
    if (i != null)
      return (
        (r = r()),
        (i.current = r),
        function () {
          i.current = null;
        }
      );
  }
  function Nh(r, i, a) {
    return (
      (a = a != null ? a.concat([r]) : null),
      Ga(4, 4, xh.bind(null, i, r), a)
    );
  }
  function Oc() {}
  function Ah(r, i) {
    var a = Vn();
    i = i === void 0 ? null : i;
    var l = a.memoizedState;
    return l !== null && i !== null && Tc(i, l[1])
      ? l[0]
      : ((a.memoizedState = [r, i]), r);
  }
  function Ph(r, i) {
    var a = Vn();
    i = i === void 0 ? null : i;
    var l = a.memoizedState;
    return l !== null && i !== null && Tc(i, l[1])
      ? l[0]
      : ((r = r()), (a.memoizedState = [r, i]), r);
  }
  function Lh(r, i, a) {
    return (Pi & 21) === 0
      ? (r.baseState && ((r.baseState = !1), (Cn = !0)), (r.memoizedState = a))
      : (Zn(a, i) ||
          ((a = St()), (Ht.lanes |= a), (Li |= a), (r.baseState = !0)),
        i);
  }
  function QE(r, i) {
    var a = pt;
    ((pt = a !== 0 && 4 > a ? a : 4), r(!0));
    var l = Sc.transition;
    Sc.transition = {};
    try {
      (r(!1), i());
    } finally {
      ((pt = a), (Sc.transition = l));
    }
  }
  function Mh() {
    return Vn().memoizedState;
  }
  function JE(r, i, a) {
    var l = ai(r);
    if (
      ((a = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Dh(r))
    )
      Fh(i, a);
    else if (((a = ph(r, i, a, l)), a !== null)) {
      var f = yn();
      (nr(a, r, l, f), Uh(a, i, l));
    }
  }
  function eS(r, i, a) {
    var l = ai(r),
      f = {
        lane: l,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Dh(r)) Fh(i, f);
    else {
      var p = r.alternate;
      if (
        r.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = i.lastRenderedReducer), p !== null)
      )
        try {
          var g = i.lastRenderedState,
            v = p(g, a);
          if (((f.hasEagerState = !0), (f.eagerState = v), Zn(v, g))) {
            var S = i.interleaved;
            (S === null
              ? ((f.next = f), mc(i))
              : ((f.next = S.next), (S.next = f)),
              (i.interleaved = f));
            return;
          }
        } catch {
        } finally {
        }
      ((a = ph(r, i, f, l)),
        a !== null && ((f = yn()), nr(a, r, l, f), Uh(a, i, l)));
    }
  }
  function Dh(r) {
    var i = r.alternate;
    return r === Ht || (i !== null && i === Ht);
  }
  function Fh(r, i) {
    ys = $a = !0;
    var a = r.pending;
    (a === null ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      (r.pending = i));
  }
  function Uh(r, i, a) {
    if ((a & 4194240) !== 0) {
      var l = i.lanes;
      ((l &= r.pendingLanes), (a |= l), (i.lanes = a), ki(r, a));
    }
  }
  var Va = {
      readContext: Gn,
      useCallback: hn,
      useContext: hn,
      useEffect: hn,
      useImperativeHandle: hn,
      useInsertionEffect: hn,
      useLayoutEffect: hn,
      useMemo: hn,
      useReducer: hn,
      useRef: hn,
      useState: hn,
      useDebugValue: hn,
      useDeferredValue: hn,
      useTransition: hn,
      useMutableSource: hn,
      useSyncExternalStore: hn,
      useId: hn,
      unstable_isNewReconciler: !1,
    },
    tS = {
      readContext: Gn,
      useCallback: function (r, i) {
        return ((dr().memoizedState = [r, i === void 0 ? null : i]), r);
      },
      useContext: Gn,
      useEffect: Ch,
      useImperativeHandle: function (r, i, a) {
        return (
          (a = a != null ? a.concat([r]) : null),
          Wa(4194308, 4, xh.bind(null, i, r), a)
        );
      },
      useLayoutEffect: function (r, i) {
        return Wa(4194308, 4, r, i);
      },
      useInsertionEffect: function (r, i) {
        return Wa(4, 2, r, i);
      },
      useMemo: function (r, i) {
        var a = dr();
        return (
          (i = i === void 0 ? null : i),
          (r = r()),
          (a.memoizedState = [r, i]),
          r
        );
      },
      useReducer: function (r, i, a) {
        var l = dr();
        return (
          (i = a !== void 0 ? a(i) : i),
          (l.memoizedState = l.baseState = i),
          (r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: i,
          }),
          (l.queue = r),
          (r = r.dispatch = JE.bind(null, Ht, r)),
          [l.memoizedState, r]
        );
      },
      useRef: function (r) {
        var i = dr();
        return ((r = { current: r }), (i.memoizedState = r));
      },
      useState: Rh,
      useDebugValue: Oc,
      useDeferredValue: function (r) {
        return (dr().memoizedState = r);
      },
      useTransition: function () {
        var r = Rh(!1),
          i = r[0];
        return ((r = QE.bind(null, r[1])), (dr().memoizedState = r), [i, r]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (r, i, a) {
        var l = Ht,
          f = dr();
        if (Dt) {
          if (a === void 0) throw Error(n(407));
          a = a();
        } else {
          if (((a = i()), un === null)) throw Error(n(349));
          (Pi & 30) !== 0 || Eh(l, i, a);
        }
        f.memoizedState = a;
        var p = { value: a, getSnapshot: i };
        return (
          (f.queue = p),
          Ch(Th.bind(null, l, p, r), [r]),
          (l.flags |= 2048),
          Ss(9, Sh.bind(null, l, p, a, i), void 0, null),
          a
        );
      },
      useId: function () {
        var r = dr(),
          i = un.identifierPrefix;
        if (Dt) {
          var a = br,
            l = Or;
          ((a = (l & ~(1 << (32 - Z(l) - 1))).toString(32) + a),
            (i = ":" + i + "R" + a),
            (a = vs++),
            0 < a && (i += "H" + a.toString(32)),
            (i += ":"));
        } else ((a = ZE++), (i = ":" + i + "r" + a.toString(32) + ":"));
        return (r.memoizedState = i);
      },
      unstable_isNewReconciler: !1,
    },
    nS = {
      readContext: Gn,
      useCallback: Ah,
      useContext: Gn,
      useEffect: Cc,
      useImperativeHandle: Nh,
      useInsertionEffect: Oh,
      useLayoutEffect: bh,
      useMemo: Ph,
      useReducer: Rc,
      useRef: Ih,
      useState: function () {
        return Rc(Es);
      },
      useDebugValue: Oc,
      useDeferredValue: function (r) {
        var i = Vn();
        return Lh(i, Jt.memoizedState, r);
      },
      useTransition: function () {
        var r = Rc(Es)[0],
          i = Vn().memoizedState;
        return [r, i];
      },
      useMutableSource: yh,
      useSyncExternalStore: vh,
      useId: Mh,
      unstable_isNewReconciler: !1,
    },
    rS = {
      readContext: Gn,
      useCallback: Ah,
      useContext: Gn,
      useEffect: Cc,
      useImperativeHandle: Nh,
      useInsertionEffect: Oh,
      useLayoutEffect: bh,
      useMemo: Ph,
      useReducer: Ic,
      useRef: Ih,
      useState: function () {
        return Ic(Es);
      },
      useDebugValue: Oc,
      useDeferredValue: function (r) {
        var i = Vn();
        return Jt === null ? (i.memoizedState = r) : Lh(i, Jt.memoizedState, r);
      },
      useTransition: function () {
        var r = Ic(Es)[0],
          i = Vn().memoizedState;
        return [r, i];
      },
      useMutableSource: yh,
      useSyncExternalStore: vh,
      useId: Mh,
      unstable_isNewReconciler: !1,
    };
  function Jn(r, i) {
    if (r && r.defaultProps) {
      ((i = re({}, i)), (r = r.defaultProps));
      for (var a in r) i[a] === void 0 && (i[a] = r[a]);
      return i;
    }
    return i;
  }
  function bc(r, i, a, l) {
    ((i = r.memoizedState),
      (a = a(l, i)),
      (a = a == null ? i : re({}, i, a)),
      (r.memoizedState = a),
      r.lanes === 0 && (r.updateQueue.baseState = a));
  }
  var Xa = {
    isMounted: function (r) {
      return (r = r._reactInternals) ? de(r) === r : !1;
    },
    enqueueSetState: function (r, i, a) {
      r = r._reactInternals;
      var l = yn(),
        f = ai(r),
        p = Nr(l, f);
      ((p.payload = i),
        a != null && (p.callback = a),
        (i = ri(r, p, f)),
        i !== null && (nr(i, r, f, l), ja(i, r, f)));
    },
    enqueueReplaceState: function (r, i, a) {
      r = r._reactInternals;
      var l = yn(),
        f = ai(r),
        p = Nr(l, f);
      ((p.tag = 1),
        (p.payload = i),
        a != null && (p.callback = a),
        (i = ri(r, p, f)),
        i !== null && (nr(i, r, f, l), ja(i, r, f)));
    },
    enqueueForceUpdate: function (r, i) {
      r = r._reactInternals;
      var a = yn(),
        l = ai(r),
        f = Nr(a, l);
      ((f.tag = 2),
        i != null && (f.callback = i),
        (i = ri(r, f, l)),
        i !== null && (nr(i, r, l, a), ja(i, r, l)));
    },
  };
  function jh(r, i, a, l, f, p, g) {
    return (
      (r = r.stateNode),
      typeof r.shouldComponentUpdate == "function"
        ? r.shouldComponentUpdate(l, p, g)
        : i.prototype && i.prototype.isPureReactComponent
          ? !as(a, l) || !as(f, p)
          : !0
    );
  }
  function Bh(r, i, a) {
    var l = !1,
      f = ei,
      p = i.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = Gn(p))
        : ((f = In(i) ? Oi : pn.current),
          (l = i.contextTypes),
          (p = (l = l != null) ? ho(r, f) : ei)),
      (i = new i(a, p)),
      (r.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = Xa),
      (r.stateNode = i),
      (i._reactInternals = r),
      l &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = f),
        (r.__reactInternalMemoizedMaskedChildContext = p)),
      i
    );
  }
  function Hh(r, i, a, l) {
    ((r = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(a, l),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(a, l),
      i.state !== r && Xa.enqueueReplaceState(i, i.state, null));
  }
  function xc(r, i, a, l) {
    var f = r.stateNode;
    ((f.props = a), (f.state = r.memoizedState), (f.refs = {}), gc(r));
    var p = i.contextType;
    (typeof p == "object" && p !== null
      ? (f.context = Gn(p))
      : ((p = In(i) ? Oi : pn.current), (f.context = ho(r, p))),
      (f.state = r.memoizedState),
      (p = i.getDerivedStateFromProps),
      typeof p == "function" && (bc(r, i, p, a), (f.state = r.memoizedState)),
      typeof i.getDerivedStateFromProps == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function" ||
        (typeof f.UNSAFE_componentWillMount != "function" &&
          typeof f.componentWillMount != "function") ||
        ((i = f.state),
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" &&
          f.UNSAFE_componentWillMount(),
        i !== f.state && Xa.enqueueReplaceState(f, f.state, null),
        Ba(r, a, f, l),
        (f.state = r.memoizedState)),
      typeof f.componentDidMount == "function" && (r.flags |= 4194308));
  }
  function To(r, i) {
    try {
      var a = "",
        l = i;
      do ((a += Ve(l)), (l = l.return));
      while (l);
      var f = a;
    } catch (p) {
      f =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: r, source: i, stack: f, digest: null };
  }
  function Nc(r, i, a) {
    return { value: r, source: null, stack: a ?? null, digest: i ?? null };
  }
  function Ac(r, i) {
    try {
      console.error(i.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var iS = typeof WeakMap == "function" ? WeakMap : Map;
  function zh(r, i, a) {
    ((a = Nr(-1, a)), (a.tag = 3), (a.payload = { element: null }));
    var l = i.value;
    return (
      (a.callback = function () {
        (eu || ((eu = !0), (Xc = l)), Ac(r, i));
      }),
      a
    );
  }
  function $h(r, i, a) {
    ((a = Nr(-1, a)), (a.tag = 3));
    var l = r.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = i.value;
      ((a.payload = function () {
        return l(f);
      }),
        (a.callback = function () {
          Ac(r, i);
        }));
    }
    var p = r.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (a.callback = function () {
          (Ac(r, i),
            typeof l != "function" &&
              (oi === null ? (oi = new Set([this])) : oi.add(this)));
          var g = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: g !== null ? g : "",
          });
        }),
      a
    );
  }
  function Wh(r, i, a) {
    var l = r.pingCache;
    if (l === null) {
      l = r.pingCache = new iS();
      var f = new Set();
      l.set(i, f);
    } else ((f = l.get(i)), f === void 0 && ((f = new Set()), l.set(i, f)));
    f.has(a) || (f.add(a), (r = yS.bind(null, r, i, a)), i.then(r, r));
  }
  function Gh(r) {
    do {
      var i;
      if (
        ((i = r.tag === 13) &&
          ((i = r.memoizedState),
          (i = i !== null ? i.dehydrated !== null : !0)),
        i)
      )
        return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Vh(r, i, a, l, f) {
    return (r.mode & 1) === 0
      ? (r === i
          ? (r.flags |= 65536)
          : ((r.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((i = Nr(-1, 1)), (i.tag = 2), ri(a, i, 1))),
            (a.lanes |= 1)),
        r)
      : ((r.flags |= 65536), (r.lanes = f), r);
  }
  var oS = U.ReactCurrentOwner,
    Cn = !1;
  function _n(r, i, a, l) {
    i.child = r === null ? dh(i, null, a, l) : yo(i, r.child, a, l);
  }
  function Xh(r, i, a, l, f) {
    a = a.render;
    var p = i.ref;
    return (
      Eo(i, f),
      (l = wc(r, i, a, l, p, f)),
      (a = kc()),
      r !== null && !Cn
        ? ((i.updateQueue = r.updateQueue),
          (i.flags &= -2053),
          (r.lanes &= ~f),
          Ar(r, i, f))
        : (Dt && a && sc(i), (i.flags |= 1), _n(r, i, l, f), i.child)
    );
  }
  function qh(r, i, a, l, f) {
    if (r === null) {
      var p = a.type;
      return typeof p == "function" &&
        !ef(p) &&
        p.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((i.tag = 15), (i.type = p), Yh(r, i, p, l, f))
        : ((r = su(a.type, null, l, i, i.mode, f)),
          (r.ref = i.ref),
          (r.return = i),
          (i.child = r));
    }
    if (((p = r.child), (r.lanes & f) === 0)) {
      var g = p.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : as), a(g, l) && r.ref === i.ref)
      )
        return Ar(r, i, f);
    }
    return (
      (i.flags |= 1),
      (r = li(p, l)),
      (r.ref = i.ref),
      (r.return = i),
      (i.child = r)
    );
  }
  function Yh(r, i, a, l, f) {
    if (r !== null) {
      var p = r.memoizedProps;
      if (as(p, l) && r.ref === i.ref)
        if (((Cn = !1), (i.pendingProps = l = p), (r.lanes & f) !== 0))
          (r.flags & 131072) !== 0 && (Cn = !0);
        else return ((i.lanes = r.lanes), Ar(r, i, f));
    }
    return Pc(r, i, a, l, f);
  }
  function Kh(r, i, a) {
    var l = i.pendingProps,
      f = l.children,
      p = r !== null ? r.memoizedState : null;
    if (l.mode === "hidden")
      if ((i.mode & 1) === 0)
        ((i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ct(ko, jn),
          (jn |= a));
      else {
        if ((a & 1073741824) === 0)
          return (
            (r = p !== null ? p.baseLanes | a : a),
            (i.lanes = i.childLanes = 1073741824),
            (i.memoizedState = {
              baseLanes: r,
              cachePool: null,
              transitions: null,
            }),
            (i.updateQueue = null),
            Ct(ko, jn),
            (jn |= r),
            null
          );
        ((i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : a),
          Ct(ko, jn),
          (jn |= l));
      }
    else
      (p !== null ? ((l = p.baseLanes | a), (i.memoizedState = null)) : (l = a),
        Ct(ko, jn),
        (jn |= l));
    return (_n(r, i, f, a), i.child);
  }
  function Zh(r, i) {
    var a = i.ref;
    ((r === null && a !== null) || (r !== null && r.ref !== a)) &&
      ((i.flags |= 512), (i.flags |= 2097152));
  }
  function Pc(r, i, a, l, f) {
    var p = In(a) ? Oi : pn.current;
    return (
      (p = ho(i, p)),
      Eo(i, f),
      (a = wc(r, i, a, l, p, f)),
      (l = kc()),
      r !== null && !Cn
        ? ((i.updateQueue = r.updateQueue),
          (i.flags &= -2053),
          (r.lanes &= ~f),
          Ar(r, i, f))
        : (Dt && l && sc(i), (i.flags |= 1), _n(r, i, a, f), i.child)
    );
  }
  function Qh(r, i, a, l, f) {
    if (In(a)) {
      var p = !0;
      Na(i);
    } else p = !1;
    if ((Eo(i, f), i.stateNode === null))
      (Ya(r, i), Bh(i, a, l), xc(i, a, l, f), (l = !0));
    else if (r === null) {
      var g = i.stateNode,
        v = i.memoizedProps;
      g.props = v;
      var S = g.context,
        A = a.contextType;
      typeof A == "object" && A !== null
        ? (A = Gn(A))
        : ((A = In(a) ? Oi : pn.current), (A = ho(i, A)));
      var V = a.getDerivedStateFromProps,
        K =
          typeof V == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function";
      (K ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((v !== l || S !== A) && Hh(i, g, l, A)),
        (ni = !1));
      var G = i.memoizedState;
      ((g.state = G),
        Ba(i, l, g, f),
        (S = i.memoizedState),
        v !== l || G !== S || Rn.current || ni
          ? (typeof V == "function" && (bc(i, a, V, l), (S = i.memoizedState)),
            (v = ni || jh(i, a, v, l, G, S, A))
              ? (K ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = l),
                (i.memoizedState = S)),
            (g.props = l),
            (g.state = S),
            (g.context = A),
            (l = v))
          : (typeof g.componentDidMount == "function" && (i.flags |= 4194308),
            (l = !1)));
    } else {
      ((g = i.stateNode),
        hh(r, i),
        (v = i.memoizedProps),
        (A = i.type === i.elementType ? v : Jn(i.type, v)),
        (g.props = A),
        (K = i.pendingProps),
        (G = g.context),
        (S = a.contextType),
        typeof S == "object" && S !== null
          ? (S = Gn(S))
          : ((S = In(a) ? Oi : pn.current), (S = ho(i, S))));
      var ue = a.getDerivedStateFromProps;
      ((V =
        typeof ue == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function") ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((v !== K || G !== S) && Hh(i, g, l, S)),
        (ni = !1),
        (G = i.memoizedState),
        (g.state = G),
        Ba(i, l, g, f));
      var fe = i.memoizedState;
      v !== K || G !== fe || Rn.current || ni
        ? (typeof ue == "function" && (bc(i, a, ue, l), (fe = i.memoizedState)),
          (A = ni || jh(i, a, A, l, G, fe, S) || !1)
            ? (V ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(l, fe, S),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(l, fe, S)),
              typeof g.componentDidUpdate == "function" && (i.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (v === r.memoizedProps && G === r.memoizedState) ||
                (i.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (v === r.memoizedProps && G === r.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = l),
              (i.memoizedState = fe)),
          (g.props = l),
          (g.state = fe),
          (g.context = S),
          (l = A))
        : (typeof g.componentDidUpdate != "function" ||
            (v === r.memoizedProps && G === r.memoizedState) ||
            (i.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (v === r.memoizedProps && G === r.memoizedState) ||
            (i.flags |= 1024),
          (l = !1));
    }
    return Lc(r, i, a, l, p, f);
  }
  function Lc(r, i, a, l, f, p) {
    Zh(r, i);
    var g = (i.flags & 128) !== 0;
    if (!l && !g) return (f && rh(i, a, !1), Ar(r, i, p));
    ((l = i.stateNode), (oS.current = i));
    var v =
      g && typeof a.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (i.flags |= 1),
      r !== null && g
        ? ((i.child = yo(i, r.child, null, p)), (i.child = yo(i, null, v, p)))
        : _n(r, i, v, p),
      (i.memoizedState = l.state),
      f && rh(i, a, !0),
      i.child
    );
  }
  function Jh(r) {
    var i = r.stateNode;
    (i.pendingContext
      ? th(r, i.pendingContext, i.pendingContext !== i.context)
      : i.context && th(r, i.context, !1),
      _c(r, i.containerInfo));
  }
  function em(r, i, a, l, f) {
    return (_o(), cc(f), (i.flags |= 256), _n(r, i, a, l), i.child);
  }
  var Mc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dc(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function tm(r, i, a) {
    var l = i.pendingProps,
      f = Bt.current,
      p = !1,
      g = (i.flags & 128) !== 0,
      v;
    if (
      ((v = g) ||
        (v = r !== null && r.memoizedState === null ? !1 : (f & 2) !== 0),
      v
        ? ((p = !0), (i.flags &= -129))
        : (r === null || r.memoizedState !== null) && (f |= 1),
      Ct(Bt, f & 1),
      r === null)
    )
      return (
        lc(i),
        (r = i.memoizedState),
        r !== null && ((r = r.dehydrated), r !== null)
          ? ((i.mode & 1) === 0
              ? (i.lanes = 1)
              : r.data === "$!"
                ? (i.lanes = 8)
                : (i.lanes = 1073741824),
            null)
          : ((g = l.children),
            (r = l.fallback),
            p
              ? ((l = i.mode),
                (p = i.child),
                (g = { mode: "hidden", children: g }),
                (l & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = g))
                  : (p = au(g, l, 0, null)),
                (r = Ui(r, l, a, null)),
                (p.return = i),
                (r.return = i),
                (p.sibling = r),
                (i.child = p),
                (i.child.memoizedState = Dc(a)),
                (i.memoizedState = Mc),
                r)
              : Fc(i, g))
      );
    if (((f = r.memoizedState), f !== null && ((v = f.dehydrated), v !== null)))
      return sS(r, i, g, l, v, f, a);
    if (p) {
      ((p = l.fallback), (g = i.mode), (f = r.child), (v = f.sibling));
      var S = { mode: "hidden", children: l.children };
      return (
        (g & 1) === 0 && i.child !== f
          ? ((l = i.child),
            (l.childLanes = 0),
            (l.pendingProps = S),
            (i.deletions = null))
          : ((l = li(f, S)), (l.subtreeFlags = f.subtreeFlags & 14680064)),
        v !== null ? (p = li(v, p)) : ((p = Ui(p, g, a, null)), (p.flags |= 2)),
        (p.return = i),
        (l.return = i),
        (l.sibling = p),
        (i.child = l),
        (l = p),
        (p = i.child),
        (g = r.child.memoizedState),
        (g =
          g === null
            ? Dc(a)
            : {
                baseLanes: g.baseLanes | a,
                cachePool: null,
                transitions: g.transitions,
              }),
        (p.memoizedState = g),
        (p.childLanes = r.childLanes & ~a),
        (i.memoizedState = Mc),
        l
      );
    }
    return (
      (p = r.child),
      (r = p.sibling),
      (l = li(p, { mode: "visible", children: l.children })),
      (i.mode & 1) === 0 && (l.lanes = a),
      (l.return = i),
      (l.sibling = null),
      r !== null &&
        ((a = i.deletions),
        a === null ? ((i.deletions = [r]), (i.flags |= 16)) : a.push(r)),
      (i.child = l),
      (i.memoizedState = null),
      l
    );
  }
  function Fc(r, i) {
    return (
      (i = au({ mode: "visible", children: i }, r.mode, 0, null)),
      (i.return = r),
      (r.child = i)
    );
  }
  function qa(r, i, a, l) {
    return (
      l !== null && cc(l),
      yo(i, r.child, null, a),
      (r = Fc(i, i.pendingProps.children)),
      (r.flags |= 2),
      (i.memoizedState = null),
      r
    );
  }
  function sS(r, i, a, l, f, p, g) {
    if (a)
      return i.flags & 256
        ? ((i.flags &= -257), (l = Nc(Error(n(422)))), qa(r, i, g, l))
        : i.memoizedState !== null
          ? ((i.child = r.child), (i.flags |= 128), null)
          : ((p = l.fallback),
            (f = i.mode),
            (l = au({ mode: "visible", children: l.children }, f, 0, null)),
            (p = Ui(p, f, g, null)),
            (p.flags |= 2),
            (l.return = i),
            (p.return = i),
            (l.sibling = p),
            (i.child = l),
            (i.mode & 1) !== 0 && yo(i, r.child, null, g),
            (i.child.memoizedState = Dc(g)),
            (i.memoizedState = Mc),
            p);
    if ((i.mode & 1) === 0) return qa(r, i, g, null);
    if (f.data === "$!") {
      if (((l = f.nextSibling && f.nextSibling.dataset), l)) var v = l.dgst;
      return (
        (l = v),
        (p = Error(n(419))),
        (l = Nc(p, l, void 0)),
        qa(r, i, g, l)
      );
    }
    if (((v = (g & r.childLanes) !== 0), Cn || v)) {
      if (((l = un), l !== null)) {
        switch (g & -g) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        ((f = (f & (l.suspendedLanes | g)) !== 0 ? 0 : f),
          f !== 0 &&
            f !== p.retryLane &&
            ((p.retryLane = f), xr(r, f), nr(l, r, f, -1)));
      }
      return (Jc(), (l = Nc(Error(n(421)))), qa(r, i, g, l));
    }
    return f.data === "$?"
      ? ((i.flags |= 128),
        (i.child = r.child),
        (i = vS.bind(null, r)),
        (f._reactRetry = i),
        null)
      : ((r = p.treeContext),
        (Un = Qr(f.nextSibling)),
        (Fn = i),
        (Dt = !0),
        (Qn = null),
        r !== null &&
          (($n[Wn++] = Or),
          ($n[Wn++] = br),
          ($n[Wn++] = bi),
          (Or = r.id),
          (br = r.overflow),
          (bi = i)),
        (i = Fc(i, l.children)),
        (i.flags |= 4096),
        i);
  }
  function nm(r, i, a) {
    r.lanes |= i;
    var l = r.alternate;
    (l !== null && (l.lanes |= i), hc(r.return, i, a));
  }
  function Uc(r, i, a, l, f) {
    var p = r.memoizedState;
    p === null
      ? (r.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: f,
        })
      : ((p.isBackwards = i),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = a),
        (p.tailMode = f));
  }
  function rm(r, i, a) {
    var l = i.pendingProps,
      f = l.revealOrder,
      p = l.tail;
    if ((_n(r, i, l.children, a), (l = Bt.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (i.flags |= 128));
    else {
      if (r !== null && (r.flags & 128) !== 0)
        e: for (r = i.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && nm(r, a, i);
          else if (r.tag === 19) nm(r, a, i);
          else if (r.child !== null) {
            ((r.child.return = r), (r = r.child));
            continue;
          }
          if (r === i) break e;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === i) break e;
            r = r.return;
          }
          ((r.sibling.return = r.return), (r = r.sibling));
        }
      l &= 1;
    }
    if ((Ct(Bt, l), (i.mode & 1) === 0)) i.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (a = i.child, f = null; a !== null; )
            ((r = a.alternate),
              r !== null && Ha(r) === null && (f = a),
              (a = a.sibling));
          ((a = f),
            a === null
              ? ((f = i.child), (i.child = null))
              : ((f = a.sibling), (a.sibling = null)),
            Uc(i, !1, f, a, p));
          break;
        case "backwards":
          for (a = null, f = i.child, i.child = null; f !== null; ) {
            if (((r = f.alternate), r !== null && Ha(r) === null)) {
              i.child = f;
              break;
            }
            ((r = f.sibling), (f.sibling = a), (a = f), (f = r));
          }
          Uc(i, !0, a, null, p);
          break;
        case "together":
          Uc(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function Ya(r, i) {
    (i.mode & 1) === 0 &&
      r !== null &&
      ((r.alternate = null), (i.alternate = null), (i.flags |= 2));
  }
  function Ar(r, i, a) {
    if (
      (r !== null && (i.dependencies = r.dependencies),
      (Li |= i.lanes),
      (a & i.childLanes) === 0)
    )
      return null;
    if (r !== null && i.child !== r.child) throw Error(n(153));
    if (i.child !== null) {
      for (
        r = i.child, a = li(r, r.pendingProps), i.child = a, a.return = i;
        r.sibling !== null;
      )
        ((r = r.sibling),
          (a = a.sibling = li(r, r.pendingProps)),
          (a.return = i));
      a.sibling = null;
    }
    return i.child;
  }
  function aS(r, i, a) {
    switch (i.tag) {
      case 3:
        (Jh(i), _o());
        break;
      case 5:
        _h(i);
        break;
      case 1:
        In(i.type) && Na(i);
        break;
      case 4:
        _c(i, i.stateNode.containerInfo);
        break;
      case 10:
        var l = i.type._context,
          f = i.memoizedProps.value;
        (Ct(Fa, l._currentValue), (l._currentValue = f));
        break;
      case 13:
        if (((l = i.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ct(Bt, Bt.current & 1), (i.flags |= 128), null)
            : (a & i.child.childLanes) !== 0
              ? tm(r, i, a)
              : (Ct(Bt, Bt.current & 1),
                (r = Ar(r, i, a)),
                r !== null ? r.sibling : null);
        Ct(Bt, Bt.current & 1);
        break;
      case 19:
        if (((l = (a & i.childLanes) !== 0), (r.flags & 128) !== 0)) {
          if (l) return rm(r, i, a);
          i.flags |= 128;
        }
        if (
          ((f = i.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          Ct(Bt, Bt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((i.lanes = 0), Kh(r, i, a));
    }
    return Ar(r, i, a);
  }
  var im, jc, om, sm;
  ((im = function (r, i) {
    for (var a = i.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) r.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === i) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === i) return;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
  }),
    (jc = function () {}),
    (om = function (r, i, a, l) {
      var f = r.memoizedProps;
      if (f !== l) {
        ((r = i.stateNode), Ai(fr.current));
        var p = null;
        switch (a) {
          case "input":
            ((f = Tn(r, f)), (l = Tn(r, l)), (p = []));
            break;
          case "select":
            ((f = re({}, f, { value: void 0 })),
              (l = re({}, l, { value: void 0 })),
              (p = []));
            break;
          case "textarea":
            ((f = Fe(r, f)), (l = Fe(r, l)), (p = []));
            break;
          default:
            typeof f.onClick != "function" &&
              typeof l.onClick == "function" &&
              (r.onclick = Oa);
        }
        eo(a, l);
        var g;
        a = null;
        for (A in f)
          if (!l.hasOwnProperty(A) && f.hasOwnProperty(A) && f[A] != null)
            if (A === "style") {
              var v = f[A];
              for (g in v) v.hasOwnProperty(g) && (a || (a = {}), (a[g] = ""));
            } else
              A !== "dangerouslySetInnerHTML" &&
                A !== "children" &&
                A !== "suppressContentEditableWarning" &&
                A !== "suppressHydrationWarning" &&
                A !== "autoFocus" &&
                (s.hasOwnProperty(A)
                  ? p || (p = [])
                  : (p = p || []).push(A, null));
        for (A in l) {
          var S = l[A];
          if (
            ((v = f != null ? f[A] : void 0),
            l.hasOwnProperty(A) && S !== v && (S != null || v != null))
          )
            if (A === "style")
              if (v) {
                for (g in v)
                  !v.hasOwnProperty(g) ||
                    (S && S.hasOwnProperty(g)) ||
                    (a || (a = {}), (a[g] = ""));
                for (g in S)
                  S.hasOwnProperty(g) &&
                    v[g] !== S[g] &&
                    (a || (a = {}), (a[g] = S[g]));
              } else (a || (p || (p = []), p.push(A, a)), (a = S));
            else
              A === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (v = v ? v.__html : void 0),
                  S != null && v !== S && (p = p || []).push(A, S))
                : A === "children"
                  ? (typeof S != "string" && typeof S != "number") ||
                    (p = p || []).push(A, "" + S)
                  : A !== "suppressContentEditableWarning" &&
                    A !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(A)
                      ? (S != null && A === "onScroll" && Pt("scroll", r),
                        p || v === S || (p = []))
                      : (p = p || []).push(A, S));
        }
        a && (p = p || []).push("style", a);
        var A = p;
        (i.updateQueue = A) && (i.flags |= 4);
      }
    }),
    (sm = function (r, i, a, l) {
      a !== l && (i.flags |= 4);
    }));
  function Ts(r, i) {
    if (!Dt)
      switch (r.tailMode) {
        case "hidden":
          i = r.tail;
          for (var a = null; i !== null; )
            (i.alternate !== null && (a = i), (i = i.sibling));
          a === null ? (r.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = r.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? i || r.tail === null
              ? (r.tail = null)
              : (r.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function mn(r) {
    var i = r.alternate !== null && r.alternate.child === r.child,
      a = 0,
      l = 0;
    if (i)
      for (var f = r.child; f !== null; )
        ((a |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 14680064),
          (l |= f.flags & 14680064),
          (f.return = r),
          (f = f.sibling));
    else
      for (f = r.child; f !== null; )
        ((a |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = r),
          (f = f.sibling));
    return ((r.subtreeFlags |= l), (r.childLanes = a), i);
  }
  function uS(r, i, a) {
    var l = i.pendingProps;
    switch ((ac(i), i.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (mn(i), null);
      case 1:
        return (In(i.type) && xa(), mn(i), null);
      case 3:
        return (
          (l = i.stateNode),
          So(),
          Lt(Rn),
          Lt(pn),
          Ec(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (r === null || r.child === null) &&
            (Ma(i)
              ? (i.flags |= 4)
              : r === null ||
                (r.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Qn !== null && (Kc(Qn), (Qn = null)))),
          jc(r, i),
          mn(i),
          null
        );
      case 5:
        yc(i);
        var f = Ai(_s.current);
        if (((a = i.type), r !== null && i.stateNode != null))
          (om(r, i, a, l, f),
            r.ref !== i.ref && ((i.flags |= 512), (i.flags |= 2097152)));
        else {
          if (!l) {
            if (i.stateNode === null) throw Error(n(166));
            return (mn(i), null);
          }
          if (((r = Ai(fr.current)), Ma(i))) {
            ((l = i.stateNode), (a = i.type));
            var p = i.memoizedProps;
            switch (((l[cr] = i), (l[ds] = p), (r = (i.mode & 1) !== 0), a)) {
              case "dialog":
                (Pt("cancel", l), Pt("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", l);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ls.length; f++) Pt(ls[f], l);
                break;
              case "source":
                Pt("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Pt("error", l), Pt("load", l));
                break;
              case "details":
                Pt("toggle", l);
                break;
              case "input":
                (Pn(l, p), Pt("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!p.multiple }),
                  Pt("invalid", l));
                break;
              case "textarea":
                (Tt(l, p), Pt("invalid", l));
            }
            (eo(a, p), (f = null));
            for (var g in p)
              if (p.hasOwnProperty(g)) {
                var v = p[g];
                g === "children"
                  ? typeof v == "string"
                    ? l.textContent !== v &&
                      (p.suppressHydrationWarning !== !0 &&
                        Ca(l.textContent, v, r),
                      (f = ["children", v]))
                    : typeof v == "number" &&
                      l.textContent !== "" + v &&
                      (p.suppressHydrationWarning !== !0 &&
                        Ca(l.textContent, v, r),
                      (f = ["children", "" + v]))
                  : s.hasOwnProperty(g) &&
                    v != null &&
                    g === "onScroll" &&
                    Pt("scroll", l);
              }
            switch (a) {
              case "input":
                (Er(l), ur(l, p, !0));
                break;
              case "textarea":
                (Er(l), Hn(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = Oa);
            }
            ((l = f), (i.updateQueue = l), l !== null && (i.flags |= 4));
          } else {
            ((g = f.nodeType === 9 ? f : f.ownerDocument),
              r === "http://www.w3.org/1999/xhtml" && (r = Si(a)),
              r === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((r = g.createElement("div")),
                    (r.innerHTML = "<script><\/script>"),
                    (r = r.removeChild(r.firstChild)))
                  : typeof l.is == "string"
                    ? (r = g.createElement(a, { is: l.is }))
                    : ((r = g.createElement(a)),
                      a === "select" &&
                        ((g = r),
                        l.multiple
                          ? (g.multiple = !0)
                          : l.size && (g.size = l.size)))
                : (r = g.createElementNS(r, a)),
              (r[cr] = i),
              (r[ds] = l),
              im(r, i, !1, !1),
              (i.stateNode = r));
            e: {
              switch (((g = w(a, l)), a)) {
                case "dialog":
                  (Pt("cancel", r), Pt("close", r), (f = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Pt("load", r), (f = l));
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ls.length; f++) Pt(ls[f], r);
                  f = l;
                  break;
                case "source":
                  (Pt("error", r), (f = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Pt("error", r), Pt("load", r), (f = l));
                  break;
                case "details":
                  (Pt("toggle", r), (f = l));
                  break;
                case "input":
                  (Pn(r, l), (f = Tn(r, l)), Pt("invalid", r));
                  break;
                case "option":
                  f = l;
                  break;
                case "select":
                  ((r._wrapperState = { wasMultiple: !!l.multiple }),
                    (f = re({}, l, { value: void 0 })),
                    Pt("invalid", r));
                  break;
                case "textarea":
                  (Tt(r, l), (f = Fe(r, l)), Pt("invalid", r));
                  break;
                default:
                  f = l;
              }
              (eo(a, f), (v = f));
              for (p in v)
                if (v.hasOwnProperty(p)) {
                  var S = v[p];
                  p === "style"
                    ? pa(r, S)
                    : p === "dangerouslySetInnerHTML"
                      ? ((S = S ? S.__html : void 0), S != null && fa(r, S))
                      : p === "children"
                        ? typeof S == "string"
                          ? (a !== "textarea" || S !== "") && Ti(r, S)
                          : typeof S == "number" && Ti(r, "" + S)
                        : p !== "suppressContentEditableWarning" &&
                          p !== "suppressHydrationWarning" &&
                          p !== "autoFocus" &&
                          (s.hasOwnProperty(p)
                            ? S != null && p === "onScroll" && Pt("scroll", r)
                            : S != null && ie(r, p, S, g));
                }
              switch (a) {
                case "input":
                  (Er(r), ur(r, l, !1));
                  break;
                case "textarea":
                  (Er(r), Hn(r));
                  break;
                case "option":
                  l.value != null && r.setAttribute("value", "" + rt(l.value));
                  break;
                case "select":
                  ((r.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? Ut(r, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        Ut(r, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof f.onClick == "function" && (r.onclick = Oa);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (i.flags |= 4);
          }
          i.ref !== null && ((i.flags |= 512), (i.flags |= 2097152));
        }
        return (mn(i), null);
      case 6:
        if (r && i.stateNode != null) sm(r, i, r.memoizedProps, l);
        else {
          if (typeof l != "string" && i.stateNode === null) throw Error(n(166));
          if (((a = Ai(_s.current)), Ai(fr.current), Ma(i))) {
            if (
              ((l = i.stateNode),
              (a = i.memoizedProps),
              (l[cr] = i),
              (p = l.nodeValue !== a) && ((r = Fn), r !== null))
            )
              switch (r.tag) {
                case 3:
                  Ca(l.nodeValue, a, (r.mode & 1) !== 0);
                  break;
                case 5:
                  r.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ca(l.nodeValue, a, (r.mode & 1) !== 0);
              }
            p && (i.flags |= 4);
          } else
            ((l = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(l)),
              (l[cr] = i),
              (i.stateNode = l));
        }
        return (mn(i), null);
      case 13:
        if (
          (Lt(Bt),
          (l = i.memoizedState),
          r === null ||
            (r.memoizedState !== null && r.memoizedState.dehydrated !== null))
        ) {
          if (Dt && Un !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0)
            (lh(), _o(), (i.flags |= 98560), (p = !1));
          else if (((p = Ma(i)), l !== null && l.dehydrated !== null)) {
            if (r === null) {
              if (!p) throw Error(n(318));
              if (
                ((p = i.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(n(317));
              p[cr] = i;
            } else
              (_o(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4));
            (mn(i), (p = !1));
          } else (Qn !== null && (Kc(Qn), (Qn = null)), (p = !0));
          if (!p) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0
          ? ((i.lanes = a), i)
          : ((l = l !== null),
            l !== (r !== null && r.memoizedState !== null) &&
              l &&
              ((i.child.flags |= 8192),
              (i.mode & 1) !== 0 &&
                (r === null || (Bt.current & 1) !== 0
                  ? en === 0 && (en = 3)
                  : Jc())),
            i.updateQueue !== null && (i.flags |= 4),
            mn(i),
            null);
      case 4:
        return (
          So(),
          jc(r, i),
          r === null && cs(i.stateNode.containerInfo),
          mn(i),
          null
        );
      case 10:
        return (pc(i.type._context), mn(i), null);
      case 17:
        return (In(i.type) && xa(), mn(i), null);
      case 19:
        if ((Lt(Bt), (p = i.memoizedState), p === null)) return (mn(i), null);
        if (((l = (i.flags & 128) !== 0), (g = p.rendering), g === null))
          if (l) Ts(p, !1);
          else {
            if (en !== 0 || (r !== null && (r.flags & 128) !== 0))
              for (r = i.child; r !== null; ) {
                if (((g = Ha(r)), g !== null)) {
                  for (
                    i.flags |= 128,
                      Ts(p, !1),
                      l = g.updateQueue,
                      l !== null && ((i.updateQueue = l), (i.flags |= 4)),
                      i.subtreeFlags = 0,
                      l = a,
                      a = i.child;
                    a !== null;
                  )
                    ((p = a),
                      (r = l),
                      (p.flags &= 14680066),
                      (g = p.alternate),
                      g === null
                        ? ((p.childLanes = 0),
                          (p.lanes = r),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = g.childLanes),
                          (p.lanes = g.lanes),
                          (p.child = g.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = g.memoizedProps),
                          (p.memoizedState = g.memoizedState),
                          (p.updateQueue = g.updateQueue),
                          (p.type = g.type),
                          (r = g.dependencies),
                          (p.dependencies =
                            r === null
                              ? null
                              : {
                                  lanes: r.lanes,
                                  firstContext: r.firstContext,
                                })),
                      (a = a.sibling));
                  return (Ct(Bt, (Bt.current & 1) | 2), i.child);
                }
                r = r.sibling;
              }
            p.tail !== null &&
              b() > Ro &&
              ((i.flags |= 128), (l = !0), Ts(p, !1), (i.lanes = 4194304));
          }
        else {
          if (!l)
            if (((r = Ha(g)), r !== null)) {
              if (
                ((i.flags |= 128),
                (l = !0),
                (a = r.updateQueue),
                a !== null && ((i.updateQueue = a), (i.flags |= 4)),
                Ts(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !g.alternate &&
                  !Dt)
              )
                return (mn(i), null);
            } else
              2 * b() - p.renderingStartTime > Ro &&
                a !== 1073741824 &&
                ((i.flags |= 128), (l = !0), Ts(p, !1), (i.lanes = 4194304));
          p.isBackwards
            ? ((g.sibling = i.child), (i.child = g))
            : ((a = p.last),
              a !== null ? (a.sibling = g) : (i.child = g),
              (p.last = g));
        }
        return p.tail !== null
          ? ((i = p.tail),
            (p.rendering = i),
            (p.tail = i.sibling),
            (p.renderingStartTime = b()),
            (i.sibling = null),
            (a = Bt.current),
            Ct(Bt, l ? (a & 1) | 2 : a & 1),
            i)
          : (mn(i), null);
      case 22:
      case 23:
        return (
          Qc(),
          (l = i.memoizedState !== null),
          r !== null && (r.memoizedState !== null) !== l && (i.flags |= 8192),
          l && (i.mode & 1) !== 0
            ? (jn & 1073741824) !== 0 &&
              (mn(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : mn(i),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, i.tag));
  }
  function lS(r, i) {
    switch ((ac(i), i.tag)) {
      case 1:
        return (
          In(i.type) && xa(),
          (r = i.flags),
          r & 65536 ? ((i.flags = (r & -65537) | 128), i) : null
        );
      case 3:
        return (
          So(),
          Lt(Rn),
          Lt(pn),
          Ec(),
          (r = i.flags),
          (r & 65536) !== 0 && (r & 128) === 0
            ? ((i.flags = (r & -65537) | 128), i)
            : null
        );
      case 5:
        return (yc(i), null);
      case 13:
        if (
          (Lt(Bt), (r = i.memoizedState), r !== null && r.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(n(340));
          _o();
        }
        return (
          (r = i.flags),
          r & 65536 ? ((i.flags = (r & -65537) | 128), i) : null
        );
      case 19:
        return (Lt(Bt), null);
      case 4:
        return (So(), null);
      case 10:
        return (pc(i.type._context), null);
      case 22:
      case 23:
        return (Qc(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ka = !1,
    gn = !1,
    cS = typeof WeakSet == "function" ? WeakSet : Set,
    le = null;
  function wo(r, i) {
    var a = r.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          $t(r, i, l);
        }
      else a.current = null;
  }
  function Bc(r, i, a) {
    try {
      a();
    } catch (l) {
      $t(r, i, l);
    }
  }
  var am = !1;
  function fS(r, i) {
    if (((Ql = ga), (r = jp()), Wl(r))) {
      if ("selectionStart" in r)
        var a = { start: r.selectionStart, end: r.selectionEnd };
      else
        e: {
          a = ((a = r.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var f = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, p.nodeType);
            } catch {
              a = null;
              break e;
            }
            var g = 0,
              v = -1,
              S = -1,
              A = 0,
              V = 0,
              K = r,
              G = null;
            t: for (;;) {
              for (
                var ue;
                K !== a || (f !== 0 && K.nodeType !== 3) || (v = g + f),
                  K !== p || (l !== 0 && K.nodeType !== 3) || (S = g + l),
                  K.nodeType === 3 && (g += K.nodeValue.length),
                  (ue = K.firstChild) !== null;
              )
                ((G = K), (K = ue));
              for (;;) {
                if (K === r) break t;
                if (
                  (G === a && ++A === f && (v = g),
                  G === p && ++V === l && (S = g),
                  (ue = K.nextSibling) !== null)
                )
                  break;
                ((K = G), (G = K.parentNode));
              }
              K = ue;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Jl = { focusedElem: r, selectionRange: a }, ga = !1, le = i;
      le !== null;
    )
      if (
        ((i = le), (r = i.child), (i.subtreeFlags & 1028) !== 0 && r !== null)
      )
        ((r.return = i), (le = r));
      else
        for (; le !== null; ) {
          i = le;
          try {
            var fe = i.alternate;
            if ((i.flags & 1024) !== 0)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (fe !== null) {
                    var he = fe.memoizedProps,
                      Vt = fe.memoizedState,
                      O = i.stateNode,
                      T = O.getSnapshotBeforeUpdate(
                        i.elementType === i.type ? he : Jn(i.type, he),
                        Vt,
                      );
                    O.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var x = i.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
          } catch (J) {
            $t(i, i.return, J);
          }
          if (((r = i.sibling), r !== null)) {
            ((r.return = i.return), (le = r));
            break;
          }
          le = i.return;
        }
    return ((fe = am), (am = !1), fe);
  }
  function ws(r, i, a) {
    var l = i.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var f = (l = l.next);
      do {
        if ((f.tag & r) === r) {
          var p = f.destroy;
          ((f.destroy = void 0), p !== void 0 && Bc(i, a, p));
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function Za(r, i) {
    if (
      ((i = i.updateQueue), (i = i !== null ? i.lastEffect : null), i !== null)
    ) {
      var a = (i = i.next);
      do {
        if ((a.tag & r) === r) {
          var l = a.create;
          a.destroy = l();
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function Hc(r) {
    var i = r.ref;
    if (i !== null) {
      var a = r.stateNode;
      switch (r.tag) {
        case 5:
          r = a;
          break;
        default:
          r = a;
      }
      typeof i == "function" ? i(r) : (i.current = r);
    }
  }
  function um(r) {
    var i = r.alternate;
    (i !== null && ((r.alternate = null), um(i)),
      (r.child = null),
      (r.deletions = null),
      (r.sibling = null),
      r.tag === 5 &&
        ((i = r.stateNode),
        i !== null &&
          (delete i[cr],
          delete i[ds],
          delete i[rc],
          delete i[XE],
          delete i[qE])),
      (r.stateNode = null),
      (r.return = null),
      (r.dependencies = null),
      (r.memoizedProps = null),
      (r.memoizedState = null),
      (r.pendingProps = null),
      (r.stateNode = null),
      (r.updateQueue = null));
  }
  function lm(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function cm(r) {
    e: for (;;) {
      for (; r.sibling === null; ) {
        if (r.return === null || lm(r.return)) return null;
        r = r.return;
      }
      for (
        r.sibling.return = r.return, r = r.sibling;
        r.tag !== 5 && r.tag !== 6 && r.tag !== 18;
      ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        ((r.child.return = r), (r = r.child));
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function zc(r, i, a) {
    var l = r.tag;
    if (l === 5 || l === 6)
      ((r = r.stateNode),
        i
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(r, i)
            : a.insertBefore(r, i)
          : (a.nodeType === 8
              ? ((i = a.parentNode), i.insertBefore(r, a))
              : ((i = a), i.appendChild(r)),
            (a = a._reactRootContainer),
            a != null || i.onclick !== null || (i.onclick = Oa)));
    else if (l !== 4 && ((r = r.child), r !== null))
      for (zc(r, i, a), r = r.sibling; r !== null; )
        (zc(r, i, a), (r = r.sibling));
  }
  function $c(r, i, a) {
    var l = r.tag;
    if (l === 5 || l === 6)
      ((r = r.stateNode), i ? a.insertBefore(r, i) : a.appendChild(r));
    else if (l !== 4 && ((r = r.child), r !== null))
      for ($c(r, i, a), r = r.sibling; r !== null; )
        ($c(r, i, a), (r = r.sibling));
  }
  var fn = null,
    er = !1;
  function ii(r, i, a) {
    for (a = a.child; a !== null; ) (fm(r, i, a), (a = a.sibling));
  }
  function fm(r, i, a) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
      try {
        qt.onCommitFiberUnmount(wn, a);
      } catch {}
    switch (a.tag) {
      case 5:
        gn || wo(a, i);
      case 6:
        var l = fn,
          f = er;
        ((fn = null),
          ii(r, i, a),
          (fn = l),
          (er = f),
          fn !== null &&
            (er
              ? ((r = fn),
                (a = a.stateNode),
                r.nodeType === 8
                  ? r.parentNode.removeChild(a)
                  : r.removeChild(a))
              : fn.removeChild(a.stateNode)));
        break;
      case 18:
        fn !== null &&
          (er
            ? ((r = fn),
              (a = a.stateNode),
              r.nodeType === 8
                ? nc(r.parentNode, a)
                : r.nodeType === 1 && nc(r, a),
              ts(r))
            : nc(fn, a.stateNode));
        break;
      case 4:
        ((l = fn),
          (f = er),
          (fn = a.stateNode.containerInfo),
          (er = !0),
          ii(r, i, a),
          (fn = l),
          (er = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !gn &&
          ((l = a.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          f = l = l.next;
          do {
            var p = f,
              g = p.destroy;
            ((p = p.tag),
              g !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Bc(a, i, g),
              (f = f.next));
          } while (f !== l);
        }
        ii(r, i, a);
        break;
      case 1:
        if (
          !gn &&
          (wo(a, i),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            ((l.props = a.memoizedProps),
              (l.state = a.memoizedState),
              l.componentWillUnmount());
          } catch (v) {
            $t(a, i, v);
          }
        ii(r, i, a);
        break;
      case 21:
        ii(r, i, a);
        break;
      case 22:
        a.mode & 1
          ? ((gn = (l = gn) || a.memoizedState !== null), ii(r, i, a), (gn = l))
          : ii(r, i, a);
        break;
      default:
        ii(r, i, a);
    }
  }
  function dm(r) {
    var i = r.updateQueue;
    if (i !== null) {
      r.updateQueue = null;
      var a = r.stateNode;
      (a === null && (a = r.stateNode = new cS()),
        i.forEach(function (l) {
          var f = ES.bind(null, r, l);
          a.has(l) || (a.add(l), l.then(f, f));
        }));
    }
  }
  function tr(r, i) {
    var a = i.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var f = a[l];
        try {
          var p = r,
            g = i,
            v = g;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                ((fn = v.stateNode), (er = !1));
                break e;
              case 3:
                ((fn = v.stateNode.containerInfo), (er = !0));
                break e;
              case 4:
                ((fn = v.stateNode.containerInfo), (er = !0));
                break e;
            }
            v = v.return;
          }
          if (fn === null) throw Error(n(160));
          (fm(p, g, f), (fn = null), (er = !1));
          var S = f.alternate;
          (S !== null && (S.return = null), (f.return = null));
        } catch (A) {
          $t(f, i, A);
        }
      }
    if (i.subtreeFlags & 12854)
      for (i = i.child; i !== null; ) (pm(i, r), (i = i.sibling));
  }
  function pm(r, i) {
    var a = r.alternate,
      l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((tr(i, r), pr(r), l & 4)) {
          try {
            (ws(3, r, r.return), Za(3, r));
          } catch (he) {
            $t(r, r.return, he);
          }
          try {
            ws(5, r, r.return);
          } catch (he) {
            $t(r, r.return, he);
          }
        }
        break;
      case 1:
        (tr(i, r), pr(r), l & 512 && a !== null && wo(a, a.return));
        break;
      case 5:
        if (
          (tr(i, r),
          pr(r),
          l & 512 && a !== null && wo(a, a.return),
          r.flags & 32)
        ) {
          var f = r.stateNode;
          try {
            Ti(f, "");
          } catch (he) {
            $t(r, r.return, he);
          }
        }
        if (l & 4 && ((f = r.stateNode), f != null)) {
          var p = r.memoizedProps,
            g = a !== null ? a.memoizedProps : p,
            v = r.type,
            S = r.updateQueue;
          if (((r.updateQueue = null), S !== null))
            try {
              (v === "input" &&
                p.type === "radio" &&
                p.name != null &&
                Tr(f, p),
                w(v, g));
              var A = w(v, p);
              for (g = 0; g < S.length; g += 2) {
                var V = S[g],
                  K = S[g + 1];
                V === "style"
                  ? pa(f, K)
                  : V === "dangerouslySetInnerHTML"
                    ? fa(f, K)
                    : V === "children"
                      ? Ti(f, K)
                      : ie(f, V, K, A);
              }
              switch (v) {
                case "input":
                  wr(f, p);
                  break;
                case "textarea":
                  it(f, p);
                  break;
                case "select":
                  var G = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!p.multiple;
                  var ue = p.value;
                  ue != null
                    ? Ut(f, !!p.multiple, ue, !1)
                    : G !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Ut(f, !!p.multiple, p.defaultValue, !0)
                        : Ut(f, !!p.multiple, p.multiple ? [] : "", !1));
              }
              f[ds] = p;
            } catch (he) {
              $t(r, r.return, he);
            }
        }
        break;
      case 6:
        if ((tr(i, r), pr(r), l & 4)) {
          if (r.stateNode === null) throw Error(n(162));
          ((f = r.stateNode), (p = r.memoizedProps));
          try {
            f.nodeValue = p;
          } catch (he) {
            $t(r, r.return, he);
          }
        }
        break;
      case 3:
        if (
          (tr(i, r), pr(r), l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ts(i.containerInfo);
          } catch (he) {
            $t(r, r.return, he);
          }
        break;
      case 4:
        (tr(i, r), pr(r));
        break;
      case 13:
        (tr(i, r),
          pr(r),
          (f = r.child),
          f.flags & 8192 &&
            ((p = f.memoizedState !== null),
            (f.stateNode.isHidden = p),
            !p ||
              (f.alternate !== null && f.alternate.memoizedState !== null) ||
              (Vc = b())),
          l & 4 && dm(r));
        break;
      case 22:
        if (
          ((V = a !== null && a.memoizedState !== null),
          r.mode & 1 ? ((gn = (A = gn) || V), tr(i, r), (gn = A)) : tr(i, r),
          pr(r),
          l & 8192)
        ) {
          if (
            ((A = r.memoizedState !== null),
            (r.stateNode.isHidden = A) && !V && (r.mode & 1) !== 0)
          )
            for (le = r, V = r.child; V !== null; ) {
              for (K = le = V; le !== null; ) {
                switch (((G = le), (ue = G.child), G.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, G, G.return);
                    break;
                  case 1:
                    wo(G, G.return);
                    var fe = G.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      ((l = G), (a = G.return));
                      try {
                        ((i = l),
                          (fe.props = i.memoizedProps),
                          (fe.state = i.memoizedState),
                          fe.componentWillUnmount());
                      } catch (he) {
                        $t(l, a, he);
                      }
                    }
                    break;
                  case 5:
                    wo(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      gm(K);
                      continue;
                    }
                }
                ue !== null ? ((ue.return = G), (le = ue)) : gm(K);
              }
              V = V.sibling;
            }
          e: for (V = null, K = r; ; ) {
            if (K.tag === 5) {
              if (V === null) {
                V = K;
                try {
                  ((f = K.stateNode),
                    A
                      ? ((p = f.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((v = K.stateNode),
                        (S = K.memoizedProps.style),
                        (g =
                          S != null && S.hasOwnProperty("display")
                            ? S.display
                            : null),
                        (v.style.display = da("display", g))));
                } catch (he) {
                  $t(r, r.return, he);
                }
              }
            } else if (K.tag === 6) {
              if (V === null)
                try {
                  K.stateNode.nodeValue = A ? "" : K.memoizedProps;
                } catch (he) {
                  $t(r, r.return, he);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === r) &&
              K.child !== null
            ) {
              ((K.child.return = K), (K = K.child));
              continue;
            }
            if (K === r) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === r) break e;
              (V === K && (V = null), (K = K.return));
            }
            (V === K && (V = null),
              (K.sibling.return = K.return),
              (K = K.sibling));
          }
        }
        break;
      case 19:
        (tr(i, r), pr(r), l & 4 && dm(r));
        break;
      case 21:
        break;
      default:
        (tr(i, r), pr(r));
    }
  }
  function pr(r) {
    var i = r.flags;
    if (i & 2) {
      try {
        e: {
          for (var a = r.return; a !== null; ) {
            if (lm(a)) {
              var l = a;
              break e;
            }
            a = a.return;
          }
          throw Error(n(160));
        }
        switch (l.tag) {
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Ti(f, ""), (l.flags &= -33));
            var p = cm(r);
            $c(r, p, f);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              v = cm(r);
            zc(r, v, g);
            break;
          default:
            throw Error(n(161));
        }
      } catch (S) {
        $t(r, r.return, S);
      }
      r.flags &= -3;
    }
    i & 4096 && (r.flags &= -4097);
  }
  function dS(r, i, a) {
    ((le = r), hm(r));
  }
  function hm(r, i, a) {
    for (var l = (r.mode & 1) !== 0; le !== null; ) {
      var f = le,
        p = f.child;
      if (f.tag === 22 && l) {
        var g = f.memoizedState !== null || Ka;
        if (!g) {
          var v = f.alternate,
            S = (v !== null && v.memoizedState !== null) || gn;
          v = Ka;
          var A = gn;
          if (((Ka = g), (gn = S) && !A))
            for (le = f; le !== null; )
              ((g = le),
                (S = g.child),
                g.tag === 22 && g.memoizedState !== null
                  ? _m(f)
                  : S !== null
                    ? ((S.return = g), (le = S))
                    : _m(f));
          for (; p !== null; ) ((le = p), hm(p), (p = p.sibling));
          ((le = f), (Ka = v), (gn = A));
        }
        mm(r);
      } else
        (f.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = f), (le = p))
          : mm(r);
    }
  }
  function mm(r) {
    for (; le !== null; ) {
      var i = le;
      if ((i.flags & 8772) !== 0) {
        var a = i.alternate;
        try {
          if ((i.flags & 8772) !== 0)
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                gn || Za(5, i);
                break;
              case 1:
                var l = i.stateNode;
                if (i.flags & 4 && !gn)
                  if (a === null) l.componentDidMount();
                  else {
                    var f =
                      i.elementType === i.type
                        ? a.memoizedProps
                        : Jn(i.type, a.memoizedProps);
                    l.componentDidUpdate(
                      f,
                      a.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var p = i.updateQueue;
                p !== null && gh(i, p, l);
                break;
              case 3:
                var g = i.updateQueue;
                if (g !== null) {
                  if (((a = null), i.child !== null))
                    switch (i.child.tag) {
                      case 5:
                        a = i.child.stateNode;
                        break;
                      case 1:
                        a = i.child.stateNode;
                    }
                  gh(i, g, a);
                }
                break;
              case 5:
                var v = i.stateNode;
                if (a === null && i.flags & 4) {
                  a = v;
                  var S = i.memoizedProps;
                  switch (i.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      S.autoFocus && a.focus();
                      break;
                    case "img":
                      S.src && (a.src = S.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (i.memoizedState === null) {
                  var A = i.alternate;
                  if (A !== null) {
                    var V = A.memoizedState;
                    if (V !== null) {
                      var K = V.dehydrated;
                      K !== null && ts(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          gn || (i.flags & 512 && Hc(i));
        } catch (G) {
          $t(i, i.return, G);
        }
      }
      if (i === r) {
        le = null;
        break;
      }
      if (((a = i.sibling), a !== null)) {
        ((a.return = i.return), (le = a));
        break;
      }
      le = i.return;
    }
  }
  function gm(r) {
    for (; le !== null; ) {
      var i = le;
      if (i === r) {
        le = null;
        break;
      }
      var a = i.sibling;
      if (a !== null) {
        ((a.return = i.return), (le = a));
        break;
      }
      le = i.return;
    }
  }
  function _m(r) {
    for (; le !== null; ) {
      var i = le;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var a = i.return;
            try {
              Za(4, i);
            } catch (S) {
              $t(i, a, S);
            }
            break;
          case 1:
            var l = i.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = i.return;
              try {
                l.componentDidMount();
              } catch (S) {
                $t(i, f, S);
              }
            }
            var p = i.return;
            try {
              Hc(i);
            } catch (S) {
              $t(i, p, S);
            }
            break;
          case 5:
            var g = i.return;
            try {
              Hc(i);
            } catch (S) {
              $t(i, g, S);
            }
        }
      } catch (S) {
        $t(i, i.return, S);
      }
      if (i === r) {
        le = null;
        break;
      }
      var v = i.sibling;
      if (v !== null) {
        ((v.return = i.return), (le = v));
        break;
      }
      le = i.return;
    }
  }
  var pS = Math.ceil,
    Qa = U.ReactCurrentDispatcher,
    Wc = U.ReactCurrentOwner,
    Xn = U.ReactCurrentBatchConfig,
    ft = 0,
    un = null,
    Kt = null,
    dn = 0,
    jn = 0,
    ko = Jr(0),
    en = 0,
    ks = null,
    Li = 0,
    Ja = 0,
    Gc = 0,
    Rs = null,
    On = null,
    Vc = 0,
    Ro = 1 / 0,
    Pr = null,
    eu = !1,
    Xc = null,
    oi = null,
    tu = !1,
    si = null,
    nu = 0,
    Is = 0,
    qc = null,
    ru = -1,
    iu = 0;
  function yn() {
    return (ft & 6) !== 0 ? b() : ru !== -1 ? ru : (ru = b());
  }
  function ai(r) {
    return (r.mode & 1) === 0
      ? 1
      : (ft & 2) !== 0 && dn !== 0
        ? dn & -dn
        : KE.transition !== null
          ? (iu === 0 && (iu = St()), iu)
          : ((r = pt),
            r !== 0 ||
              ((r = window.event), (r = r === void 0 ? 16 : vp(r.type))),
            r);
  }
  function nr(r, i, a, l) {
    if (50 < Is) throw ((Is = 0), (qc = null), Error(n(185)));
    (sn(r, a, l),
      ((ft & 2) === 0 || r !== un) &&
        (r === un && ((ft & 2) === 0 && (Ja |= a), en === 4 && ui(r, dn)),
        bn(r, l),
        a === 1 &&
          ft === 0 &&
          (i.mode & 1) === 0 &&
          ((Ro = b() + 500), Aa && ti())));
  }
  function bn(r, i) {
    var a = r.callbackNode;
    We(r, i);
    var l = je(r, r === un ? dn : 0);
    if (l === 0)
      (a !== null && At(a), (r.callbackNode = null), (r.callbackPriority = 0));
    else if (((i = l & -l), r.callbackPriority !== i)) {
      if ((a != null && At(a), i === 1))
        (r.tag === 0 ? YE(vm.bind(null, r)) : ih(vm.bind(null, r)),
          GE(function () {
            (ft & 6) === 0 && ti();
          }),
          (a = null));
      else {
        switch (ha(l)) {
          case 1:
            a = L;
            break;
          case 4:
            a = we;
            break;
          case 16:
            a = lt;
            break;
          case 536870912:
            a = Ln;
            break;
          default:
            a = lt;
        }
        a = Cm(a, ym.bind(null, r));
      }
      ((r.callbackPriority = i), (r.callbackNode = a));
    }
  }
  function ym(r, i) {
    if (((ru = -1), (iu = 0), (ft & 6) !== 0)) throw Error(n(327));
    var a = r.callbackNode;
    if (Io() && r.callbackNode !== a) return null;
    var l = je(r, r === un ? dn : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & r.expiredLanes) !== 0 || i) i = ou(r, l);
    else {
      i = l;
      var f = ft;
      ft |= 2;
      var p = Sm();
      (un !== r || dn !== i) && ((Pr = null), (Ro = b() + 500), Di(r, i));
      do
        try {
          gS();
          break;
        } catch (v) {
          Em(r, v);
        }
      while (!0);
      (dc(),
        (Qa.current = p),
        (ft = f),
        Kt !== null ? (i = 0) : ((un = null), (dn = 0), (i = en)));
    }
    if (i !== 0) {
      if (
        (i === 2 && ((f = vt(r)), f !== 0 && ((l = f), (i = Yc(r, f)))),
        i === 1)
      )
        throw ((a = ks), Di(r, 0), ui(r, l), bn(r, b()), a);
      if (i === 6) ui(r, l);
      else {
        if (
          ((f = r.current.alternate),
          (l & 30) === 0 &&
            !hS(f) &&
            ((i = ou(r, l)),
            i === 2 && ((p = vt(r)), p !== 0 && ((l = p), (i = Yc(r, p)))),
            i === 1))
        )
          throw ((a = ks), Di(r, 0), ui(r, l), bn(r, b()), a);
        switch (((r.finishedWork = f), (r.finishedLanes = l), i)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Fi(r, On, Pr);
            break;
          case 3:
            if (
              (ui(r, l),
              (l & 130023424) === l && ((i = Vc + 500 - b()), 10 < i))
            ) {
              if (je(r, 0) !== 0) break;
              if (((f = r.suspendedLanes), (f & l) !== l)) {
                (yn(), (r.pingedLanes |= r.suspendedLanes & f));
                break;
              }
              r.timeoutHandle = tc(Fi.bind(null, r, On, Pr), i);
              break;
            }
            Fi(r, On, Pr);
            break;
          case 4:
            if ((ui(r, l), (l & 4194240) === l)) break;
            for (i = r.eventTimes, f = -1; 0 < l; ) {
              var g = 31 - Z(l);
              ((p = 1 << g), (g = i[g]), g > f && (f = g), (l &= ~p));
            }
            if (
              ((l = f),
              (l = b() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * pS(l / 1960)) - l),
              10 < l)
            ) {
              r.timeoutHandle = tc(Fi.bind(null, r, On, Pr), l);
              break;
            }
            Fi(r, On, Pr);
            break;
          case 5:
            Fi(r, On, Pr);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return (bn(r, b()), r.callbackNode === a ? ym.bind(null, r) : null);
  }
  function Yc(r, i) {
    var a = Rs;
    return (
      r.current.memoizedState.isDehydrated && (Di(r, i).flags |= 256),
      (r = ou(r, i)),
      r !== 2 && ((i = On), (On = a), i !== null && Kc(i)),
      r
    );
  }
  function Kc(r) {
    On === null ? (On = r) : On.push.apply(On, r);
  }
  function hS(r) {
    for (var i = r; ; ) {
      if (i.flags & 16384) {
        var a = i.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var l = 0; l < a.length; l++) {
            var f = a[l],
              p = f.getSnapshot;
            f = f.value;
            try {
              if (!Zn(p(), f)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = i.child), i.subtreeFlags & 16384 && a !== null))
        ((a.return = i), (i = a));
      else {
        if (i === r) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r) return !0;
          i = i.return;
        }
        ((i.sibling.return = i.return), (i = i.sibling));
      }
    }
    return !0;
  }
  function ui(r, i) {
    for (
      i &= ~Gc,
        i &= ~Ja,
        r.suspendedLanes |= i,
        r.pingedLanes &= ~i,
        r = r.expirationTimes;
      0 < i;
    ) {
      var a = 31 - Z(i),
        l = 1 << a;
      ((r[a] = -1), (i &= ~l));
    }
  }
  function vm(r) {
    if ((ft & 6) !== 0) throw Error(n(327));
    Io();
    var i = je(r, 0);
    if ((i & 1) === 0) return (bn(r, b()), null);
    var a = ou(r, i);
    if (r.tag !== 0 && a === 2) {
      var l = vt(r);
      l !== 0 && ((i = l), (a = Yc(r, l)));
    }
    if (a === 1) throw ((a = ks), Di(r, 0), ui(r, i), bn(r, b()), a);
    if (a === 6) throw Error(n(345));
    return (
      (r.finishedWork = r.current.alternate),
      (r.finishedLanes = i),
      Fi(r, On, Pr),
      bn(r, b()),
      null
    );
  }
  function Zc(r, i) {
    var a = ft;
    ft |= 1;
    try {
      return r(i);
    } finally {
      ((ft = a), ft === 0 && ((Ro = b() + 500), Aa && ti()));
    }
  }
  function Mi(r) {
    si !== null && si.tag === 0 && (ft & 6) === 0 && Io();
    var i = ft;
    ft |= 1;
    var a = Xn.transition,
      l = pt;
    try {
      if (((Xn.transition = null), (pt = 1), r)) return r();
    } finally {
      ((pt = l), (Xn.transition = a), (ft = i), (ft & 6) === 0 && ti());
    }
  }
  function Qc() {
    ((jn = ko.current), Lt(ko));
  }
  function Di(r, i) {
    ((r.finishedWork = null), (r.finishedLanes = 0));
    var a = r.timeoutHandle;
    if ((a !== -1 && ((r.timeoutHandle = -1), WE(a)), Kt !== null))
      for (a = Kt.return; a !== null; ) {
        var l = a;
        switch ((ac(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && xa());
            break;
          case 3:
            (So(), Lt(Rn), Lt(pn), Ec());
            break;
          case 5:
            yc(l);
            break;
          case 4:
            So();
            break;
          case 13:
            Lt(Bt);
            break;
          case 19:
            Lt(Bt);
            break;
          case 10:
            pc(l.type._context);
            break;
          case 22:
          case 23:
            Qc();
        }
        a = a.return;
      }
    if (
      ((un = r),
      (Kt = r = li(r.current, null)),
      (dn = jn = i),
      (en = 0),
      (ks = null),
      (Gc = Ja = Li = 0),
      (On = Rs = null),
      Ni !== null)
    ) {
      for (i = 0; i < Ni.length; i++)
        if (((a = Ni[i]), (l = a.interleaved), l !== null)) {
          a.interleaved = null;
          var f = l.next,
            p = a.pending;
          if (p !== null) {
            var g = p.next;
            ((p.next = f), (l.next = g));
          }
          a.pending = l;
        }
      Ni = null;
    }
    return r;
  }
  function Em(r, i) {
    do {
      var a = Kt;
      try {
        if ((dc(), (za.current = Va), $a)) {
          for (var l = Ht.memoizedState; l !== null; ) {
            var f = l.queue;
            (f !== null && (f.pending = null), (l = l.next));
          }
          $a = !1;
        }
        if (
          ((Pi = 0),
          (an = Jt = Ht = null),
          (ys = !1),
          (vs = 0),
          (Wc.current = null),
          a === null || a.return === null)
        ) {
          ((en = 1), (ks = i), (Kt = null));
          break;
        }
        e: {
          var p = r,
            g = a.return,
            v = a,
            S = i;
          if (
            ((i = dn),
            (v.flags |= 32768),
            S !== null && typeof S == "object" && typeof S.then == "function")
          ) {
            var A = S,
              V = v,
              K = V.tag;
            if ((V.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var G = V.alternate;
              G
                ? ((V.updateQueue = G.updateQueue),
                  (V.memoizedState = G.memoizedState),
                  (V.lanes = G.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var ue = Gh(g);
            if (ue !== null) {
              ((ue.flags &= -257),
                Vh(ue, g, v, p, i),
                ue.mode & 1 && Wh(p, A, i),
                (i = ue),
                (S = A));
              var fe = i.updateQueue;
              if (fe === null) {
                var he = new Set();
                (he.add(S), (i.updateQueue = he));
              } else fe.add(S);
              break e;
            } else {
              if ((i & 1) === 0) {
                (Wh(p, A, i), Jc());
                break e;
              }
              S = Error(n(426));
            }
          } else if (Dt && v.mode & 1) {
            var Vt = Gh(g);
            if (Vt !== null) {
              ((Vt.flags & 65536) === 0 && (Vt.flags |= 256),
                Vh(Vt, g, v, p, i),
                cc(To(S, v)));
              break e;
            }
          }
          ((p = S = To(S, v)),
            en !== 4 && (en = 2),
            Rs === null ? (Rs = [p]) : Rs.push(p),
            (p = g));
          do {
            switch (p.tag) {
              case 3:
                ((p.flags |= 65536), (i &= -i), (p.lanes |= i));
                var O = zh(p, S, i);
                mh(p, O);
                break e;
              case 1:
                v = S;
                var T = p.type,
                  x = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof T.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (oi === null || !oi.has(x))))
                ) {
                  ((p.flags |= 65536), (i &= -i), (p.lanes |= i));
                  var J = $h(p, v, i);
                  mh(p, J);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        wm(a);
      } catch (_e) {
        ((i = _e), Kt === a && a !== null && (Kt = a = a.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Sm() {
    var r = Qa.current;
    return ((Qa.current = Va), r === null ? Va : r);
  }
  function Jc() {
    ((en === 0 || en === 3 || en === 2) && (en = 4),
      un === null ||
        ((Li & 268435455) === 0 && (Ja & 268435455) === 0) ||
        ui(un, dn));
  }
  function ou(r, i) {
    var a = ft;
    ft |= 2;
    var l = Sm();
    (un !== r || dn !== i) && ((Pr = null), Di(r, i));
    do
      try {
        mS();
        break;
      } catch (f) {
        Em(r, f);
      }
    while (!0);
    if ((dc(), (ft = a), (Qa.current = l), Kt !== null)) throw Error(n(261));
    return ((un = null), (dn = 0), en);
  }
  function mS() {
    for (; Kt !== null; ) Tm(Kt);
  }
  function gS() {
    for (; Kt !== null && !Gt(); ) Tm(Kt);
  }
  function Tm(r) {
    var i = Im(r.alternate, r, jn);
    ((r.memoizedProps = r.pendingProps),
      i === null ? wm(r) : (Kt = i),
      (Wc.current = null));
  }
  function wm(r) {
    var i = r;
    do {
      var a = i.alternate;
      if (((r = i.return), (i.flags & 32768) === 0)) {
        if (((a = uS(a, i, jn)), a !== null)) {
          Kt = a;
          return;
        }
      } else {
        if (((a = lS(a, i)), a !== null)) {
          ((a.flags &= 32767), (Kt = a));
          return;
        }
        if (r !== null)
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null));
        else {
          ((en = 6), (Kt = null));
          return;
        }
      }
      if (((i = i.sibling), i !== null)) {
        Kt = i;
        return;
      }
      Kt = i = r;
    } while (i !== null);
    en === 0 && (en = 5);
  }
  function Fi(r, i, a) {
    var l = pt,
      f = Xn.transition;
    try {
      ((Xn.transition = null), (pt = 1), _S(r, i, a, l));
    } finally {
      ((Xn.transition = f), (pt = l));
    }
    return null;
  }
  function _S(r, i, a, l) {
    do Io();
    while (si !== null);
    if ((ft & 6) !== 0) throw Error(n(327));
    a = r.finishedWork;
    var f = r.finishedLanes;
    if (a === null) return null;
    if (((r.finishedWork = null), (r.finishedLanes = 0), a === r.current))
      throw Error(n(177));
    ((r.callbackNode = null), (r.callbackPriority = 0));
    var p = a.lanes | a.childLanes;
    if (
      (lr(r, p),
      r === un && ((Kt = un = null), (dn = 0)),
      ((a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0) ||
        tu ||
        ((tu = !0),
        Cm(lt, function () {
          return (Io(), null);
        })),
      (p = (a.flags & 15990) !== 0),
      (a.subtreeFlags & 15990) !== 0 || p)
    ) {
      ((p = Xn.transition), (Xn.transition = null));
      var g = pt;
      pt = 1;
      var v = ft;
      ((ft |= 4),
        (Wc.current = null),
        fS(r, a),
        pm(a, r),
        FE(Jl),
        (ga = !!Ql),
        (Jl = Ql = null),
        (r.current = a),
        dS(a),
        mt(),
        (ft = v),
        (pt = g),
        (Xn.transition = p));
    } else r.current = a;
    if (
      (tu && ((tu = !1), (si = r), (nu = f)),
      (p = r.pendingLanes),
      p === 0 && (oi = null),
      Mn(a.stateNode),
      bn(r, b()),
      i !== null)
    )
      for (l = r.onRecoverableError, a = 0; a < i.length; a++)
        ((f = i[a]), l(f.value, { componentStack: f.stack, digest: f.digest }));
    if (eu) throw ((eu = !1), (r = Xc), (Xc = null), r);
    return (
      (nu & 1) !== 0 && r.tag !== 0 && Io(),
      (p = r.pendingLanes),
      (p & 1) !== 0 ? (r === qc ? Is++ : ((Is = 0), (qc = r))) : (Is = 0),
      ti(),
      null
    );
  }
  function Io() {
    if (si !== null) {
      var r = ha(nu),
        i = Xn.transition,
        a = pt;
      try {
        if (((Xn.transition = null), (pt = 16 > r ? 16 : r), si === null))
          var l = !1;
        else {
          if (((r = si), (si = null), (nu = 0), (ft & 6) !== 0))
            throw Error(n(331));
          var f = ft;
          for (ft |= 4, le = r.current; le !== null; ) {
            var p = le,
              g = p.child;
            if ((le.flags & 16) !== 0) {
              var v = p.deletions;
              if (v !== null) {
                for (var S = 0; S < v.length; S++) {
                  var A = v[S];
                  for (le = A; le !== null; ) {
                    var V = le;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, V, p);
                    }
                    var K = V.child;
                    if (K !== null) ((K.return = V), (le = K));
                    else
                      for (; le !== null; ) {
                        V = le;
                        var G = V.sibling,
                          ue = V.return;
                        if ((um(V), V === A)) {
                          le = null;
                          break;
                        }
                        if (G !== null) {
                          ((G.return = ue), (le = G));
                          break;
                        }
                        le = ue;
                      }
                  }
                }
                var fe = p.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var Vt = he.sibling;
                      ((he.sibling = null), (he = Vt));
                    } while (he !== null);
                  }
                }
                le = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && g !== null)
              ((g.return = p), (le = g));
            else
              e: for (; le !== null; ) {
                if (((p = le), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ws(9, p, p.return);
                  }
                var O = p.sibling;
                if (O !== null) {
                  ((O.return = p.return), (le = O));
                  break e;
                }
                le = p.return;
              }
          }
          var T = r.current;
          for (le = T; le !== null; ) {
            g = le;
            var x = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && x !== null)
              ((x.return = g), (le = x));
            else
              e: for (g = T; le !== null; ) {
                if (((v = le), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Za(9, v);
                    }
                  } catch (_e) {
                    $t(v, v.return, _e);
                  }
                if (v === g) {
                  le = null;
                  break e;
                }
                var J = v.sibling;
                if (J !== null) {
                  ((J.return = v.return), (le = J));
                  break e;
                }
                le = v.return;
              }
          }
          if (
            ((ft = f),
            ti(),
            qt && typeof qt.onPostCommitFiberRoot == "function")
          )
            try {
              qt.onPostCommitFiberRoot(wn, r);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((pt = a), (Xn.transition = i));
      }
    }
    return !1;
  }
  function km(r, i, a) {
    ((i = To(a, i)),
      (i = zh(r, i, 1)),
      (r = ri(r, i, 1)),
      (i = yn()),
      r !== null && (sn(r, 1, i), bn(r, i)));
  }
  function $t(r, i, a) {
    if (r.tag === 3) km(r, r, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          km(i, r, a);
          break;
        } else if (i.tag === 1) {
          var l = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (oi === null || !oi.has(l)))
          ) {
            ((r = To(a, r)),
              (r = $h(i, r, 1)),
              (i = ri(i, r, 1)),
              (r = yn()),
              i !== null && (sn(i, 1, r), bn(i, r)));
            break;
          }
        }
        i = i.return;
      }
  }
  function yS(r, i, a) {
    var l = r.pingCache;
    (l !== null && l.delete(i),
      (i = yn()),
      (r.pingedLanes |= r.suspendedLanes & a),
      un === r &&
        (dn & a) === a &&
        (en === 4 || (en === 3 && (dn & 130023424) === dn && 500 > b() - Vc)
          ? Di(r, 0)
          : (Gc |= a)),
      bn(r, i));
  }
  function Rm(r, i) {
    i === 0 &&
      ((r.mode & 1) === 0
        ? (i = 1)
        : ((i = Re), (Re <<= 1), (Re & 130023424) === 0 && (Re = 4194304)));
    var a = yn();
    ((r = xr(r, i)), r !== null && (sn(r, i, a), bn(r, a)));
  }
  function vS(r) {
    var i = r.memoizedState,
      a = 0;
    (i !== null && (a = i.retryLane), Rm(r, a));
  }
  function ES(r, i) {
    var a = 0;
    switch (r.tag) {
      case 13:
        var l = r.stateNode,
          f = r.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        l = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    (l !== null && l.delete(i), Rm(r, a));
  }
  var Im;
  Im = function (r, i, a) {
    if (r !== null)
      if (r.memoizedProps !== i.pendingProps || Rn.current) Cn = !0;
      else {
        if ((r.lanes & a) === 0 && (i.flags & 128) === 0)
          return ((Cn = !1), aS(r, i, a));
        Cn = (r.flags & 131072) !== 0;
      }
    else ((Cn = !1), Dt && (i.flags & 1048576) !== 0 && oh(i, La, i.index));
    switch (((i.lanes = 0), i.tag)) {
      case 2:
        var l = i.type;
        (Ya(r, i), (r = i.pendingProps));
        var f = ho(i, pn.current);
        (Eo(i, a), (f = wc(null, i, l, r, f, a)));
        var p = kc();
        return (
          (i.flags |= 1),
          typeof f == "object" &&
          f !== null &&
          typeof f.render == "function" &&
          f.$$typeof === void 0
            ? ((i.tag = 1),
              (i.memoizedState = null),
              (i.updateQueue = null),
              In(l) ? ((p = !0), Na(i)) : (p = !1),
              (i.memoizedState =
                f.state !== null && f.state !== void 0 ? f.state : null),
              gc(i),
              (f.updater = Xa),
              (i.stateNode = f),
              (f._reactInternals = i),
              xc(i, l, r, a),
              (i = Lc(null, i, l, !0, p, a)))
            : ((i.tag = 0), Dt && p && sc(i), _n(null, i, f, a), (i = i.child)),
          i
        );
      case 16:
        l = i.elementType;
        e: {
          switch (
            (Ya(r, i),
            (r = i.pendingProps),
            (f = l._init),
            (l = f(l._payload)),
            (i.type = l),
            (f = i.tag = TS(l)),
            (r = Jn(l, r)),
            f)
          ) {
            case 0:
              i = Pc(null, i, l, r, a);
              break e;
            case 1:
              i = Qh(null, i, l, r, a);
              break e;
            case 11:
              i = Xh(null, i, l, r, a);
              break e;
            case 14:
              i = qh(null, i, l, Jn(l.type, r), a);
              break e;
          }
          throw Error(n(306, l, ""));
        }
        return i;
      case 0:
        return (
          (l = i.type),
          (f = i.pendingProps),
          (f = i.elementType === l ? f : Jn(l, f)),
          Pc(r, i, l, f, a)
        );
      case 1:
        return (
          (l = i.type),
          (f = i.pendingProps),
          (f = i.elementType === l ? f : Jn(l, f)),
          Qh(r, i, l, f, a)
        );
      case 3:
        e: {
          if ((Jh(i), r === null)) throw Error(n(387));
          ((l = i.pendingProps),
            (p = i.memoizedState),
            (f = p.element),
            hh(r, i),
            Ba(i, l, null, a));
          var g = i.memoizedState;
          if (((l = g.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions,
              }),
              (i.updateQueue.baseState = p),
              (i.memoizedState = p),
              i.flags & 256)
            ) {
              ((f = To(Error(n(423)), i)), (i = em(r, i, l, a, f)));
              break e;
            } else if (l !== f) {
              ((f = To(Error(n(424)), i)), (i = em(r, i, l, a, f)));
              break e;
            } else
              for (
                Un = Qr(i.stateNode.containerInfo.firstChild),
                  Fn = i,
                  Dt = !0,
                  Qn = null,
                  a = dh(i, null, l, a),
                  i.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((_o(), l === f)) {
              i = Ar(r, i, a);
              break e;
            }
            _n(r, i, l, a);
          }
          i = i.child;
        }
        return i;
      case 5:
        return (
          _h(i),
          r === null && lc(i),
          (l = i.type),
          (f = i.pendingProps),
          (p = r !== null ? r.memoizedProps : null),
          (g = f.children),
          ec(l, f) ? (g = null) : p !== null && ec(l, p) && (i.flags |= 32),
          Zh(r, i),
          _n(r, i, g, a),
          i.child
        );
      case 6:
        return (r === null && lc(i), null);
      case 13:
        return tm(r, i, a);
      case 4:
        return (
          _c(i, i.stateNode.containerInfo),
          (l = i.pendingProps),
          r === null ? (i.child = yo(i, null, l, a)) : _n(r, i, l, a),
          i.child
        );
      case 11:
        return (
          (l = i.type),
          (f = i.pendingProps),
          (f = i.elementType === l ? f : Jn(l, f)),
          Xh(r, i, l, f, a)
        );
      case 7:
        return (_n(r, i, i.pendingProps, a), i.child);
      case 8:
        return (_n(r, i, i.pendingProps.children, a), i.child);
      case 12:
        return (_n(r, i, i.pendingProps.children, a), i.child);
      case 10:
        e: {
          if (
            ((l = i.type._context),
            (f = i.pendingProps),
            (p = i.memoizedProps),
            (g = f.value),
            Ct(Fa, l._currentValue),
            (l._currentValue = g),
            p !== null)
          )
            if (Zn(p.value, g)) {
              if (p.children === f.children && !Rn.current) {
                i = Ar(r, i, a);
                break e;
              }
            } else
              for (p = i.child, p !== null && (p.return = i); p !== null; ) {
                var v = p.dependencies;
                if (v !== null) {
                  g = p.child;
                  for (var S = v.firstContext; S !== null; ) {
                    if (S.context === l) {
                      if (p.tag === 1) {
                        ((S = Nr(-1, a & -a)), (S.tag = 2));
                        var A = p.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var V = A.pending;
                          (V === null
                            ? (S.next = S)
                            : ((S.next = V.next), (V.next = S)),
                            (A.pending = S));
                        }
                      }
                      ((p.lanes |= a),
                        (S = p.alternate),
                        S !== null && (S.lanes |= a),
                        hc(p.return, a, i),
                        (v.lanes |= a));
                      break;
                    }
                    S = S.next;
                  }
                } else if (p.tag === 10) g = p.type === i.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((g = p.return), g === null)) throw Error(n(341));
                  ((g.lanes |= a),
                    (v = g.alternate),
                    v !== null && (v.lanes |= a),
                    hc(g, a, i),
                    (g = p.sibling));
                } else g = p.child;
                if (g !== null) g.return = p;
                else
                  for (g = p; g !== null; ) {
                    if (g === i) {
                      g = null;
                      break;
                    }
                    if (((p = g.sibling), p !== null)) {
                      ((p.return = g.return), (g = p));
                      break;
                    }
                    g = g.return;
                  }
                p = g;
              }
          (_n(r, i, f.children, a), (i = i.child));
        }
        return i;
      case 9:
        return (
          (f = i.type),
          (l = i.pendingProps.children),
          Eo(i, a),
          (f = Gn(f)),
          (l = l(f)),
          (i.flags |= 1),
          _n(r, i, l, a),
          i.child
        );
      case 14:
        return (
          (l = i.type),
          (f = Jn(l, i.pendingProps)),
          (f = Jn(l.type, f)),
          qh(r, i, l, f, a)
        );
      case 15:
        return Yh(r, i, i.type, i.pendingProps, a);
      case 17:
        return (
          (l = i.type),
          (f = i.pendingProps),
          (f = i.elementType === l ? f : Jn(l, f)),
          Ya(r, i),
          (i.tag = 1),
          In(l) ? ((r = !0), Na(i)) : (r = !1),
          Eo(i, a),
          Bh(i, l, f),
          xc(i, l, f, a),
          Lc(null, i, l, !0, r, a)
        );
      case 19:
        return rm(r, i, a);
      case 22:
        return Kh(r, i, a);
    }
    throw Error(n(156, i.tag));
  };
  function Cm(r, i) {
    return on(r, i);
  }
  function SS(r, i, a, l) {
    ((this.tag = r),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function qn(r, i, a, l) {
    return new SS(r, i, a, l);
  }
  function ef(r) {
    return ((r = r.prototype), !(!r || !r.isReactComponent));
  }
  function TS(r) {
    if (typeof r == "function") return ef(r) ? 1 : 0;
    if (r != null) {
      if (((r = r.$$typeof), r === Ke)) return 11;
      if (r === xt) return 14;
    }
    return 2;
  }
  function li(r, i) {
    var a = r.alternate;
    return (
      a === null
        ? ((a = qn(r.tag, i, r.key, r.mode)),
          (a.elementType = r.elementType),
          (a.type = r.type),
          (a.stateNode = r.stateNode),
          (a.alternate = r),
          (r.alternate = a))
        : ((a.pendingProps = i),
          (a.type = r.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = r.flags & 14680064),
      (a.childLanes = r.childLanes),
      (a.lanes = r.lanes),
      (a.child = r.child),
      (a.memoizedProps = r.memoizedProps),
      (a.memoizedState = r.memoizedState),
      (a.updateQueue = r.updateQueue),
      (i = r.dependencies),
      (a.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (a.sibling = r.sibling),
      (a.index = r.index),
      (a.ref = r.ref),
      a
    );
  }
  function su(r, i, a, l, f, p) {
    var g = 2;
    if (((l = r), typeof r == "function")) ef(r) && (g = 1);
    else if (typeof r == "string") g = 5;
    else
      e: switch (r) {
        case ae:
          return Ui(a.children, f, p, i);
        case ye:
          ((g = 8), (f |= 8));
          break;
        case ne:
          return (
            (r = qn(12, a, i, f | 2)),
            (r.elementType = ne),
            (r.lanes = p),
            r
          );
        case nt:
          return (
            (r = qn(13, a, i, f)),
            (r.elementType = nt),
            (r.lanes = p),
            r
          );
        case at:
          return (
            (r = qn(19, a, i, f)),
            (r.elementType = at),
            (r.lanes = p),
            r
          );
        case Xe:
          return au(a, f, p, i);
        default:
          if (typeof r == "object" && r !== null)
            switch (r.$$typeof) {
              case ve:
                g = 10;
                break e;
              case Ge:
                g = 9;
                break e;
              case Ke:
                g = 11;
                break e;
              case xt:
                g = 14;
                break e;
              case be:
                ((g = 16), (l = null));
                break e;
            }
          throw Error(n(130, r == null ? r : typeof r, ""));
      }
    return (
      (i = qn(g, a, i, f)),
      (i.elementType = r),
      (i.type = l),
      (i.lanes = p),
      i
    );
  }
  function Ui(r, i, a, l) {
    return ((r = qn(7, r, l, i)), (r.lanes = a), r);
  }
  function au(r, i, a, l) {
    return (
      (r = qn(22, r, l, i)),
      (r.elementType = Xe),
      (r.lanes = a),
      (r.stateNode = { isHidden: !1 }),
      r
    );
  }
  function tf(r, i, a) {
    return ((r = qn(6, r, null, i)), (r.lanes = a), r);
  }
  function nf(r, i, a) {
    return (
      (i = qn(4, r.children !== null ? r.children : [], r.key, i)),
      (i.lanes = a),
      (i.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation,
      }),
      i
    );
  }
  function wS(r, i, a, l, f) {
    ((this.tag = i),
      (this.containerInfo = r),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = zn(0)),
      (this.expirationTimes = zn(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zn(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = f),
      (this.mutableSourceEagerHydrationData = null));
  }
  function rf(r, i, a, l, f, p, g, v, S) {
    return (
      (r = new wS(r, i, a, v, S)),
      i === 1 ? ((i = 1), p === !0 && (i |= 8)) : (i = 0),
      (p = qn(3, null, null, i)),
      (r.current = p),
      (p.stateNode = r),
      (p.memoizedState = {
        element: l,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      gc(p),
      r
    );
  }
  function kS(r, i, a) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: l == null ? null : "" + l,
      children: r,
      containerInfo: i,
      implementation: a,
    };
  }
  function Om(r) {
    if (!r) return ei;
    r = r._reactInternals;
    e: {
      if (de(r) !== r || r.tag !== 1) throw Error(n(170));
      var i = r;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (In(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var a = r.type;
      if (In(a)) return nh(r, a, i);
    }
    return i;
  }
  function bm(r, i, a, l, f, p, g, v, S) {
    return (
      (r = rf(a, l, !0, r, f, p, g, v, S)),
      (r.context = Om(null)),
      (a = r.current),
      (l = yn()),
      (f = ai(a)),
      (p = Nr(l, f)),
      (p.callback = i ?? null),
      ri(a, p, f),
      (r.current.lanes = f),
      sn(r, f, l),
      bn(r, l),
      r
    );
  }
  function uu(r, i, a, l) {
    var f = i.current,
      p = yn(),
      g = ai(f);
    return (
      (a = Om(a)),
      i.context === null ? (i.context = a) : (i.pendingContext = a),
      (i = Nr(p, g)),
      (i.payload = { element: r }),
      (l = l === void 0 ? null : l),
      l !== null && (i.callback = l),
      (r = ri(f, i, g)),
      r !== null && (nr(r, f, g, p), ja(r, f, g)),
      g
    );
  }
  function lu(r) {
    if (((r = r.current), !r.child)) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function xm(r, i) {
    if (((r = r.memoizedState), r !== null && r.dehydrated !== null)) {
      var a = r.retryLane;
      r.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function of(r, i) {
    (xm(r, i), (r = r.alternate) && xm(r, i));
  }
  function RS() {
    return null;
  }
  var Nm =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          console.error(r);
        };
  function sf(r) {
    this._internalRoot = r;
  }
  ((cu.prototype.render = sf.prototype.render =
    function (r) {
      var i = this._internalRoot;
      if (i === null) throw Error(n(409));
      uu(r, i, null, null);
    }),
    (cu.prototype.unmount = sf.prototype.unmount =
      function () {
        var r = this._internalRoot;
        if (r !== null) {
          this._internalRoot = null;
          var i = r.containerInfo;
          (Mi(function () {
            uu(null, r, null, null);
          }),
            (i[Ir] = null));
        }
      }));
  function cu(r) {
    this._internalRoot = r;
  }
  cu.prototype.unstable_scheduleHydration = function (r) {
    if (r) {
      var i = Ko();
      r = { blockedOn: null, target: r, priority: i };
      for (var a = 0; a < Yr.length && i !== 0 && i < Yr[a].priority; a++);
      (Yr.splice(a, 0, r), a === 0 && _p(r));
    }
  };
  function af(r) {
    return !(!r || (r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11));
  }
  function fu(r) {
    return !(
      !r ||
      (r.nodeType !== 1 &&
        r.nodeType !== 9 &&
        r.nodeType !== 11 &&
        (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Am() {}
  function IS(r, i, a, l, f) {
    if (f) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var A = lu(g);
          p.call(A);
        };
      }
      var g = bm(i, l, r, 0, null, !1, !1, "", Am);
      return (
        (r._reactRootContainer = g),
        (r[Ir] = g.current),
        cs(r.nodeType === 8 ? r.parentNode : r),
        Mi(),
        g
      );
    }
    for (; (f = r.lastChild); ) r.removeChild(f);
    if (typeof l == "function") {
      var v = l;
      l = function () {
        var A = lu(S);
        v.call(A);
      };
    }
    var S = rf(r, 0, !1, null, null, !1, !1, "", Am);
    return (
      (r._reactRootContainer = S),
      (r[Ir] = S.current),
      cs(r.nodeType === 8 ? r.parentNode : r),
      Mi(function () {
        uu(i, S, a, l);
      }),
      S
    );
  }
  function du(r, i, a, l, f) {
    var p = a._reactRootContainer;
    if (p) {
      var g = p;
      if (typeof f == "function") {
        var v = f;
        f = function () {
          var S = lu(g);
          v.call(S);
        };
      }
      uu(i, g, r, f);
    } else g = IS(a, i, r, f, l);
    return lu(g);
  }
  ((to = function (r) {
    switch (r.tag) {
      case 3:
        var i = r.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var a = ce(i.pendingLanes);
          a !== 0 &&
            (ki(i, a | 1),
            bn(i, b()),
            (ft & 6) === 0 && ((Ro = b() + 500), ti()));
        }
        break;
      case 13:
        (Mi(function () {
          var l = xr(r, 1);
          if (l !== null) {
            var f = yn();
            nr(l, r, 1, f);
          }
        }),
          of(r, 1));
    }
  }),
    (no = function (r) {
      if (r.tag === 13) {
        var i = xr(r, 134217728);
        if (i !== null) {
          var a = yn();
          nr(i, r, 134217728, a);
        }
        of(r, 134217728);
      }
    }),
    (Rr = function (r) {
      if (r.tag === 13) {
        var i = ai(r),
          a = xr(r, i);
        if (a !== null) {
          var l = yn();
          nr(a, r, i, l);
        }
        of(r, i);
      }
    }),
    (Ko = function () {
      return pt;
    }),
    (Ri = function (r, i) {
      var a = pt;
      try {
        return ((pt = r), i());
      } finally {
        pt = a;
      }
    }),
    (R = function (r, i, a) {
      switch (i) {
        case "input":
          if ((wr(r, a), (i = a.name), a.type === "radio" && i != null)) {
            for (a = r; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + i) + '][type="radio"]',
              ),
                i = 0;
              i < a.length;
              i++
            ) {
              var l = a[i];
              if (l !== r && l.form === r.form) {
                var f = ba(l);
                if (!f) throw Error(n(90));
                (cn(l), wr(l, f));
              }
            }
          }
          break;
        case "textarea":
          it(r, a);
          break;
        case "select":
          ((i = a.value), i != null && Ut(r, !!a.multiple, i, !1));
      }
    }),
    (Ae = Zc),
    (pe = Mi));
  var CS = { usingClientEntryPoint: !1, Events: [ps, fo, ba, ge, Ee, Zc] },
    Cs = {
      findFiberByHostInstance: Ci,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    OS = {
      bundleType: Cs.bundleType,
      version: Cs.version,
      rendererPackageName: Cs.rendererPackageName,
      rendererConfig: Cs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: U.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (r) {
        return ((r = Ie(r)), r === null ? null : r.stateNode);
      },
      findFiberByHostInstance: Cs.findFiberByHostInstance || RS,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pu.isDisabled && pu.supportsFiber)
      try {
        ((wn = pu.inject(OS)), (qt = pu));
      } catch {}
  }
  return (
    (xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = CS),
    (xn.createPortal = function (r, i) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!af(i)) throw Error(n(200));
      return kS(r, i, null, a);
    }),
    (xn.createRoot = function (r, i) {
      if (!af(r)) throw Error(n(299));
      var a = !1,
        l = "",
        f = Nm;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (f = i.onRecoverableError)),
        (i = rf(r, 1, !1, null, null, a, !1, l, f)),
        (r[Ir] = i.current),
        cs(r.nodeType === 8 ? r.parentNode : r),
        new sf(i)
      );
    }),
    (xn.findDOMNode = function (r) {
      if (r == null) return null;
      if (r.nodeType === 1) return r;
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function"
          ? Error(n(188))
          : ((r = Object.keys(r).join(",")), Error(n(268, r)));
      return ((r = Ie(i)), (r = r === null ? null : r.stateNode), r);
    }),
    (xn.flushSync = function (r) {
      return Mi(r);
    }),
    (xn.hydrate = function (r, i, a) {
      if (!fu(i)) throw Error(n(200));
      return du(null, r, i, !0, a);
    }),
    (xn.hydrateRoot = function (r, i, a) {
      if (!af(r)) throw Error(n(405));
      var l = (a != null && a.hydratedSources) || null,
        f = !1,
        p = "",
        g = Nm;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (f = !0),
          a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError)),
        (i = bm(i, null, r, 1, a ?? null, f, !1, p, g)),
        (r[Ir] = i.current),
        cs(r),
        l)
      )
        for (r = 0; r < l.length; r++)
          ((a = l[r]),
            (f = a._getVersion),
            (f = f(a._source)),
            i.mutableSourceEagerHydrationData == null
              ? (i.mutableSourceEagerHydrationData = [a, f])
              : i.mutableSourceEagerHydrationData.push(a, f));
      return new cu(i);
    }),
    (xn.render = function (r, i, a) {
      if (!fu(i)) throw Error(n(200));
      return du(null, r, i, !1, a);
    }),
    (xn.unmountComponentAtNode = function (r) {
      if (!fu(r)) throw Error(n(40));
      return r._reactRootContainer
        ? (Mi(function () {
            du(null, null, r, !1, function () {
              ((r._reactRootContainer = null), (r[Ir] = null));
            });
          }),
          !0)
        : !1;
    }),
    (xn.unstable_batchedUpdates = Zc),
    (xn.unstable_renderSubtreeIntoContainer = function (r, i, a, l) {
      if (!fu(a)) throw Error(n(200));
      if (r == null || r._reactInternals === void 0) throw Error(n(38));
      return du(r, i, a, !1, l);
    }),
    (xn.version = "18.3.1-next-f1338f8080-20240426"),
    xn
  );
}
var Bm;
function FS() {
  if (Bm) return cf.exports;
  Bm = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (cf.exports = DS()), cf.exports);
}
var Hm;
function US() {
  if (Hm) return hu;
  Hm = 1;
  var e = FS();
  return ((hu.createRoot = e.createRoot), (hu.hydrateRoot = e.hydrateRoot), hu);
}
var jS = US();
const BS = L_(jS),
  ir = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Ms = "8.55.0",
  gt = globalThis;
function al(e, t, n) {
  const o = n || gt,
    s = (o.__SENTRY__ = o.__SENTRY__ || {}),
    u = (s[Ms] = s[Ms] || {});
  return u[e] || (u[e] = t());
}
const qi = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  HS = "Sentry Logger ",
  Xf = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Bu = {};
function ul(e) {
  if (!("console" in gt)) return e();
  const t = gt.console,
    n = {},
    o = Object.keys(Bu);
  o.forEach((s) => {
    const u = Bu[s];
    ((n[s] = t[s]), (t[s] = u));
  });
  try {
    return e();
  } finally {
    o.forEach((s) => {
      t[s] = n[s];
    });
  }
}
function zS() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e,
  };
  return (
    qi
      ? Xf.forEach((n) => {
          t[n] = (...o) => {
            e &&
              ul(() => {
                gt.console[n](`${HS}[${n}]:`, ...o);
              });
          };
        })
      : Xf.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
const st = al("logger", zS),
  M_ = 50,
  Wi = "?",
  zm = /\(error: (.*)\)/,
  $m = /captureMessage|captureException/;
function $S(...e) {
  const t = e.sort((n, o) => n[0] - o[0]).map((n) => n[1]);
  return (n, o = 0, s = 0) => {
    const u = [],
      c = n.split(`
`);
    for (let d = o; d < c.length; d++) {
      const h = c[d];
      if (h.length > 1024) continue;
      const m = zm.test(h) ? h.replace(zm, "$1") : h;
      if (!m.match(/\S*Error: /)) {
        for (const _ of t) {
          const y = _(m);
          if (y) {
            u.push(y);
            break;
          }
        }
        if (u.length >= M_ + s) break;
      }
    }
    return WS(u.slice(s));
  };
}
function WS(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(mu(t).function || "") && t.pop(),
    t.reverse(),
    $m.test(mu(t).function || "") &&
      (t.pop(), $m.test(mu(t).function || "") && t.pop()),
    t
      .slice(0, M_)
      .map((n) => ({
        ...n,
        filename: n.filename || mu(t).filename,
        function: n.function || Wi,
      }))
  );
}
function mu(e) {
  return e[e.length - 1] || {};
}
const pf = "<anonymous>";
function Vr(e) {
  try {
    return !e || typeof e != "function" ? pf : e.name || pf;
  } catch {
    return pf;
  }
}
function Wm(e) {
  const t = e.exception;
  if (t) {
    const n = [];
    try {
      return (
        t.values.forEach((o) => {
          o.stacktrace.frames && n.push(...o.stacktrace.frames);
        }),
        n
      );
    } catch {
      return;
    }
  }
}
const Pu = {},
  Gm = {};
function Yi(e, t) {
  ((Pu[e] = Pu[e] || []), Pu[e].push(t));
}
function Ki(e, t) {
  if (!Gm[e]) {
    Gm[e] = !0;
    try {
      t();
    } catch (n) {
      qi && st.error(`Error while instrumenting ${e}`, n);
    }
  }
}
function sr(e, t) {
  const n = e && Pu[e];
  if (n)
    for (const o of n)
      try {
        o(t);
      } catch (s) {
        qi &&
          st.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Vr(o)}
Error:`,
            s,
          );
      }
}
let hf = null;
function GS(e) {
  const t = "error";
  (Yi(t, e), Ki(t, VS));
}
function VS() {
  ((hf = gt.onerror),
    (gt.onerror = function (e, t, n, o, s) {
      return (
        sr("error", { column: o, error: s, line: n, msg: e, url: t }),
        hf ? hf.apply(this, arguments) : !1
      );
    }),
    (gt.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
let mf = null;
function XS(e) {
  const t = "unhandledrejection";
  (Yi(t, e), Ki(t, qS));
}
function qS() {
  ((mf = gt.onunhandledrejection),
    (gt.onunhandledrejection = function (e) {
      return (sr("unhandledrejection", e), mf ? mf.apply(this, arguments) : !0);
    }),
    (gt.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
function ta() {
  return (Nd(gt), gt);
}
function Nd(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || Ms), (t[Ms] = t[Ms] || {}));
}
const D_ = Object.prototype.toString;
function ll(e) {
  switch (D_.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return Gi(e, Error);
  }
}
function Yo(e, t) {
  return D_.call(e) === `[object ${t}]`;
}
function F_(e) {
  return Yo(e, "ErrorEvent");
}
function Vm(e) {
  return Yo(e, "DOMError");
}
function YS(e) {
  return Yo(e, "DOMException");
}
function $r(e) {
  return Yo(e, "String");
}
function U_(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function j_(e) {
  return (
    e === null || U_(e) || (typeof e != "object" && typeof e != "function")
  );
}
function cl(e) {
  return Yo(e, "Object");
}
function fl(e) {
  return typeof Event < "u" && Gi(e, Event);
}
function KS(e) {
  return typeof Element < "u" && Gi(e, Element);
}
function ZS(e) {
  return Yo(e, "RegExp");
}
function Ad(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function QS(e) {
  return (
    cl(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Gi(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function B_(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
const Pd = gt,
  JS = 80;
function dl(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const o = 5,
      s = [];
    let u = 0,
      c = 0;
    const d = " > ",
      h = d.length;
    let m;
    const _ = Array.isArray(t) ? t : t.keyAttrs,
      y = (!Array.isArray(t) && t.maxStringLength) || JS;
    for (
      ;
      n &&
      u++ < o &&
      ((m = eT(n, _)),
      !(m === "html" || (u > 1 && c + s.length * h + m.length >= y)));
    )
      (s.push(m), (c += m.length), (n = n.parentNode));
    return s.reverse().join(d);
  } catch {
    return "<unknown>";
  }
}
function eT(e, t) {
  const n = e,
    o = [];
  if (!n || !n.tagName) return "";
  if (Pd.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  o.push(n.tagName.toLowerCase());
  const s =
    t && t.length
      ? t.filter((c) => n.getAttribute(c)).map((c) => [c, n.getAttribute(c)])
      : null;
  if (s && s.length)
    s.forEach((c) => {
      o.push(`[${c[0]}="${c[1]}"]`);
    });
  else {
    n.id && o.push(`#${n.id}`);
    const c = n.className;
    if (c && $r(c)) {
      const d = c.split(/\s+/);
      for (const h of d) o.push(`.${h}`);
    }
  }
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (const c of u) {
    const d = n.getAttribute(c);
    d && o.push(`[${c}="${d}"]`);
  }
  return o.join("");
}
function H_() {
  try {
    return Pd.document.location.href;
  } catch {
    return "";
  }
}
function tT(e) {
  if (!Pd.HTMLElement) return null;
  let t = e;
  const n = 5;
  for (let o = 0; o < n; o++) {
    if (!t) return null;
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
      if (t.dataset.sentryElement) return t.dataset.sentryElement;
    }
    t = t.parentNode;
  }
  return null;
}
function Do(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Xm(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    try {
      B_(s) ? n.push("[VueViewModel]") : n.push(String(s));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function nT(e, t, n = !1) {
  return $r(e)
    ? ZS(t)
      ? t.test(e)
      : $r(t)
        ? n
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function na(e, t = [], n = !1) {
  return t.some((o) => nT(e, o, n));
}
function An(e, t, n) {
  if (!(t in e)) return;
  const o = e[t],
    s = n(o);
  typeof s == "function" && z_(s, o);
  try {
    e[t] = s;
  } catch {
    qi && st.log(`Failed to replace method "${t}" in object`, e);
  }
}
function Bo(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    qi && st.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function z_(e, t) {
  try {
    const n = t.prototype || {};
    ((e.prototype = t.prototype = n), Bo(e, "__sentry_original__", t));
  } catch {}
}
function Ld(e) {
  return e.__sentry_original__;
}
function $_(e) {
  if (ll(e))
    return { message: e.message, name: e.name, stack: e.stack, ...Ym(e) };
  if (fl(e)) {
    const t = {
      type: e.type,
      target: qm(e.target),
      currentTarget: qm(e.currentTarget),
      ...Ym(e),
    };
    return (
      typeof CustomEvent < "u" && Gi(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function qm(e) {
  try {
    return KS(e) ? dl(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function Ym(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function rT(e, t = 40) {
  const n = Object.keys($_(e));
  n.sort();
  const o = n[0];
  if (!o) return "[object has no keys]";
  if (o.length >= t) return Do(o, t);
  for (let s = n.length; s > 0; s--) {
    const u = n.slice(0, s).join(", ");
    if (!(u.length > t)) return s === n.length ? u : Do(u, t);
  }
  return "";
}
function Yn(e) {
  return qf(e, new Map());
}
function qf(e, t) {
  if (iT(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const o = {};
    t.set(e, o);
    for (const s of Object.getOwnPropertyNames(e))
      typeof e[s] < "u" && (o[s] = qf(e[s], t));
    return o;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const o = [];
    return (
      t.set(e, o),
      e.forEach((s) => {
        o.push(qf(s, t));
      }),
      o
    );
  }
  return e;
}
function iT(e) {
  if (!cl(e)) return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const W_ = 1e3;
function pl() {
  return Date.now() / W_;
}
function oT() {
  const { performance: e } = gt;
  if (!e || !e.now) return pl;
  const t = Date.now() - e.now(),
    n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / W_;
}
const Wr = oT(),
  sT = (() => {
    const { performance: e } = gt;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      n = e.now(),
      o = Date.now(),
      s = e.timeOrigin ? Math.abs(e.timeOrigin + n - o) : t,
      u = s < t,
      c = e.timing && e.timing.navigationStart,
      h = typeof c == "number" ? Math.abs(c + n - o) : t,
      m = h < t;
    return u || m ? (s <= h ? e.timeOrigin : c) : o;
  })();
function yr() {
  const e = gt,
    t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (n = () => {
        const o = new Uint8Array(1);
        return (t.getRandomValues(o), o[0]);
      });
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (o) =>
    (o ^ ((n() & 15) >> (o / 4))).toString(16),
  );
}
function G_(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function fi(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const o = G_(e);
  return o
    ? o.type && o.value
      ? `${o.type}: ${o.value}`
      : o.type || o.value || n || "<unknown>"
    : n || "<unknown>";
}
function Yf(e, t, n) {
  const o = (e.exception = e.exception || {}),
    s = (o.values = o.values || []),
    u = (s[0] = s[0] || {});
  (u.value || (u.value = t || ""), u.type || (u.type = "Error"));
}
function Ws(e, t) {
  const n = G_(e);
  if (!n) return;
  const o = { type: "generic", handled: !0 },
    s = n.mechanism;
  if (((n.mechanism = { ...o, ...s, ...t }), t && "data" in t)) {
    const u = { ...(s && s.data), ...t.data };
    n.mechanism.data = u;
  }
}
var Dr;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const n = 1;
  e[(e.RESOLVED = n)] = "RESOLVED";
  const o = 2;
  e[(e.REJECTED = o)] = "REJECTED";
})(Dr || (Dr = {}));
function Km(e) {
  return new Ur((t) => {
    t(e);
  });
}
class Ur {
  constructor(t) {
    (Ur.prototype.__init.call(this),
      Ur.prototype.__init2.call(this),
      Ur.prototype.__init3.call(this),
      Ur.prototype.__init4.call(this),
      (this._state = Dr.PENDING),
      (this._handlers = []));
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new Ur((o, s) => {
      (this._handlers.push([
        !1,
        (u) => {
          if (!t) o(u);
          else
            try {
              o(t(u));
            } catch (c) {
              s(c);
            }
        },
        (u) => {
          if (!n) s(u);
          else
            try {
              o(n(u));
            } catch (c) {
              s(c);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new Ur((n, o) => {
      let s, u;
      return this.then(
        (c) => {
          ((u = !1), (s = c), t && t());
        },
        (c) => {
          ((u = !0), (s = c), t && t());
        },
      ).then(() => {
        if (u) {
          o(s);
          return;
        }
        n(s);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Dr.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Dr.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === Dr.PENDING) {
        if (Ad(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        ((this._state = t), (this._value = n), this._executeHandlers());
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Dr.PENDING) return;
      const t = this._handlers.slice();
      ((this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Dr.RESOLVED && n[1](this._value),
            this._state === Dr.REJECTED && n[2](this._value),
            (n[0] = !0));
        }));
    };
  }
}
function aT(e) {
  const t = Wr(),
    n = {
      sid: yr(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => lT(n),
    };
  return (e && hl(n, e), n);
}
function hl(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || Wr()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : yr()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function uT(e, t) {
  let n = {};
  (e.status === "ok" && (n = { status: "exited" }), hl(e, n));
}
function lT(e) {
  return Yn({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
function Zm() {
  return yr();
}
function Kf() {
  return yr().substring(16);
}
function ml(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) return t;
  if (e && t && Object.keys(t).length === 0) return e;
  const o = { ...e };
  for (const s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      (o[s] = ml(o[s], t[s], n - 1));
  return o;
}
const Zf = "_sentrySpan";
function Qm(e, t) {
  t ? Bo(e, Zf, t) : delete e[Zf];
}
function Qf(e) {
  return e[Zf];
}
const cT = 100;
class Md {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = { traceId: Zm(), spanId: Kf() }));
  }
  clone() {
    const t = new Md();
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = { ...this._tags }),
      (t._extra = { ...this._extra }),
      (t._contexts = { ...this._contexts }),
      this._contexts.flags &&
        (t._contexts.flags = { values: [...this._contexts.flags.values] }),
      (t._user = this._user),
      (t._level = this._level),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._requestSession = this._requestSession),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (t._propagationContext = { ...this._propagationContext }),
      (t._client = this._client),
      (t._lastEventId = this._lastEventId),
      Qm(t, Qf(this)),
      t
    );
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return (this._eventProcessors.push(t), this);
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && hl(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return ((this._requestSession = t), this);
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return ((this._fingerprint = t), this._notifyScopeListeners(), this);
  }
  setLevel(t) {
    return ((this._level = t), this._notifyScopeListeners(), this);
  }
  setTransactionName(t) {
    return ((this._transactionName = t), this._notifyScopeListeners(), this);
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const n = typeof t == "function" ? t(this) : t,
      [o, s] =
        n instanceof yi
          ? [n.getScopeData(), n.getRequestSession()]
          : cl(n)
            ? [t, t.requestSession]
            : [],
      {
        tags: u,
        extra: c,
        user: d,
        contexts: h,
        level: m,
        fingerprint: _ = [],
        propagationContext: y,
      } = o || {};
    return (
      (this._tags = { ...this._tags, ...u }),
      (this._extra = { ...this._extra, ...c }),
      (this._contexts = { ...this._contexts, ...h }),
      d && Object.keys(d).length && (this._user = d),
      m && (this._level = m),
      _.length && (this._fingerprint = _),
      y && (this._propagationContext = y),
      s && (this._requestSession = s),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._session = void 0),
      Qm(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({ traceId: Zm() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(t, n) {
    const o = typeof n == "number" ? n : cT;
    if (o <= 0) return this;
    const s = { timestamp: pl(), ...t };
    return (
      this._breadcrumbs.push(s),
      this._breadcrumbs.length > o &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-o)),
        this._client &&
          this._client.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(t) {
    return (this._attachments.push(t), this);
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Qf(this),
    };
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = ml(this._sdkProcessingMetadata, t, 2)),
      this
    );
  }
  setPropagationContext(t) {
    return ((this._propagationContext = { spanId: Kf(), ...t }), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const o = n && n.event_id ? n.event_id : yr();
    if (!this._client)
      return (
        st.warn("No client configured on scope - will not capture exception!"),
        o
      );
    const s = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        t,
        { originalException: t, syntheticException: s, ...n, event_id: o },
        this,
      ),
      o
    );
  }
  captureMessage(t, n, o) {
    const s = o && o.event_id ? o.event_id : yr();
    if (!this._client)
      return (
        st.warn("No client configured on scope - will not capture message!"),
        s
      );
    const u = new Error(t);
    return (
      this._client.captureMessage(
        t,
        n,
        { originalException: t, syntheticException: u, ...o, event_id: s },
        this,
      ),
      s
    );
  }
  captureEvent(t, n) {
    const o = n && n.event_id ? n.event_id : yr();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: o }, this), o)
      : (st.warn("No client configured on scope - will not capture event!"), o);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
}
const yi = Md;
function fT() {
  return al("defaultCurrentScope", () => new yi());
}
function dT() {
  return al("defaultIsolationScope", () => new yi());
}
class pT {
  constructor(t, n) {
    let o;
    t ? (o = t) : (o = new yi());
    let s;
    (n ? (s = n) : (s = new yi()),
      (this._stack = [{ scope: o }]),
      (this._isolationScope = s));
  }
  withScope(t) {
    const n = this._pushScope();
    let o;
    try {
      o = t(n);
    } catch (s) {
      throw (this._popScope(), s);
    }
    return Ad(o)
      ? o.then(
          (s) => (this._popScope(), s),
          (s) => {
            throw (this._popScope(), s);
          },
        )
      : (this._popScope(), o);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: t }), t);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function Ho() {
  const e = ta(),
    t = Nd(e);
  return (t.stack = t.stack || new pT(fT(), dT()));
}
function hT(e) {
  return Ho().withScope(e);
}
function mT(e, t) {
  const n = Ho();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function Jm(e) {
  return Ho().withScope(() => e(Ho().getIsolationScope()));
}
function gT() {
  return {
    withIsolationScope: Jm,
    withScope: hT,
    withSetScope: mT,
    withSetIsolationScope: (e, t) => Jm(t),
    getCurrentScope: () => Ho().getScope(),
    getIsolationScope: () => Ho().getIsolationScope(),
  };
}
function gl(e) {
  const t = Nd(e);
  return t.acs ? t.acs : gT();
}
function ar() {
  const e = ta();
  return gl(e).getCurrentScope();
}
function Ei() {
  const e = ta();
  return gl(e).getIsolationScope();
}
function _T() {
  return al("globalScope", () => new yi());
}
function V_(...e) {
  const t = ta(),
    n = gl(t);
  if (e.length === 2) {
    const [o, s] = e;
    return o ? n.withSetScope(o, s) : n.withScope(s);
  }
  return n.withScope(e[0]);
}
function Ft() {
  return ar().getClient();
}
const yT = "_sentryMetrics";
function vT(e) {
  const t = e[yT];
  if (!t) return;
  const n = {};
  for (const [, [o, s]] of t) (n[o] || (n[o] = [])).push(Yn(s));
  return n;
}
const X_ = "sentry.source",
  ET = "sentry.sample_rate",
  ST = "sentry.op",
  TT = "sentry.origin";
const wT = 0,
  kT = 1,
  RT = 2;
const IT = "sentry-",
  CT = /^sentry-/;
function OT(e) {
  const t = bT(e);
  if (!t) return;
  const n = Object.entries(t).reduce((o, [s, u]) => {
    if (s.match(CT)) {
      const c = s.slice(IT.length);
      o[c] = u;
    }
    return o;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function bT(e) {
  if (!(!e || (!$r(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((t, n) => {
          const o = eg(n);
          return (
            Object.entries(o).forEach(([s, u]) => {
              t[s] = u;
            }),
            t
          );
        }, {})
      : eg(e);
}
function eg(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, o]) => (n && o && (t[n] = o), t), {});
}
const LP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
);
const xT = 1;
function NT(e) {
  const { spanId: t, traceId: n, isRemote: o } = e.spanContext(),
    s = o ? t : Gs(e).parent_span_id,
    u = o ? Kf() : t;
  return Yn({ parent_span_id: s, span_id: u, trace_id: n });
}
function tg(e) {
  return typeof e == "number"
    ? ng(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? ng(e.getTime())
        : Wr();
}
function ng(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Gs(e) {
  if (PT(e)) return e.getSpanJSON();
  try {
    const { spanId: t, traceId: n } = e.spanContext();
    if (AT(e)) {
      const {
        attributes: o,
        startTime: s,
        name: u,
        endTime: c,
        parentSpanId: d,
        status: h,
      } = e;
      return Yn({
        span_id: t,
        trace_id: n,
        data: o,
        description: u,
        parent_span_id: d,
        start_timestamp: tg(s),
        timestamp: tg(c) || void 0,
        status: MT(h),
        op: o[ST],
        origin: o[TT],
        _metrics_summary: vT(e),
      });
    }
    return { span_id: t, trace_id: n };
  } catch {
    return {};
  }
}
function AT(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function PT(e) {
  return typeof e.getSpanJSON == "function";
}
function LT(e) {
  const { traceFlags: t } = e.spanContext();
  return t === xT;
}
function MT(e) {
  if (!(!e || e.code === wT))
    return e.code === kT ? "ok" : e.message || "unknown_error";
}
const DT = "_sentryRootSpan";
function _l(e) {
  return e[DT] || e;
}
function Dd() {
  const e = ta(),
    t = gl(e);
  return t.getActiveSpan ? t.getActiveSpan() : Qf(ar());
}
function FT() {
  const e = Dd(),
    t = e && _l(e);
  if (t) {
    const n = "internal_error";
    (ir && st.log(`[Tracing] Root span: ${n} -> Global error occurred`),
      t.setStatus({ code: RT, message: n }));
  }
}
FT.tag = "sentry_tracingErrorCallback";
function UT(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = Ft(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
const Fd = "production",
  jT = "_frozenDsc";
function BT(e, t) {
  const n = t.getOptions(),
    { publicKey: o } = t.getDsn() || {},
    s = Yn({
      environment: n.environment || Fd,
      release: n.release,
      public_key: o,
      trace_id: e,
    });
  return (t.emit("createDsc", s), s);
}
function q_(e) {
  const t = Ft();
  if (!t) return {};
  const n = _l(e),
    o = n[jT];
  if (o) return o;
  const s = n.spanContext().traceState,
    u = s && s.get("sentry.dsc"),
    c = u && OT(u);
  if (c) return c;
  const d = BT(e.spanContext().traceId, t),
    h = Gs(n),
    m = h.data || {},
    _ = m[ET];
  _ != null && (d.sample_rate = `${_}`);
  const y = m[X_],
    E = h.description;
  return (
    y !== "url" && E && (d.transaction = E),
    UT() && (d.sampled = String(LT(n))),
    t.emit("createDsc", d, n),
    d
  );
}
function rg(e) {
  if (typeof e == "boolean") return Number(e);
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
    ir &&
      st.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
      );
    return;
  }
  return t;
}
const HT = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function zT(e) {
  return e === "http" || e === "https";
}
function Y_(e, t = !1) {
  const {
    host: n,
    path: o,
    pass: s,
    port: u,
    projectId: c,
    protocol: d,
    publicKey: h,
  } = e;
  return `${d}://${h}${t && s ? `:${s}` : ""}@${n}${u ? `:${u}` : ""}/${o && `${o}/`}${c}`;
}
function $T(e) {
  const t = HT.exec(e);
  if (!t) {
    ul(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, o, s = "", u = "", c = "", d = ""] = t.slice(1);
  let h = "",
    m = d;
  const _ = m.split("/");
  if ((_.length > 1 && ((h = _.slice(0, -1).join("/")), (m = _.pop())), m)) {
    const y = m.match(/^\d+/);
    y && (m = y[0]);
  }
  return K_({
    host: u,
    pass: s,
    path: h,
    projectId: m,
    port: c,
    protocol: n,
    publicKey: o,
  });
}
function K_(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function WT(e) {
  if (!qi) return !0;
  const { port: t, projectId: n, protocol: o } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((c) =>
    e[c] ? !1 : (st.error(`Invalid Sentry Dsn: ${c} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? zT(o)
        ? t && isNaN(parseInt(t, 10))
          ? (st.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (st.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), !1)
      : (st.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function GT(e) {
  const t = typeof e == "string" ? $T(e) : K_(e);
  if (!(!t || !WT(t))) return t;
}
function VT() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(s) {
    if (e) return t.has(s) ? !0 : (t.add(s), !1);
    for (let u = 0; u < t.length; u++) if (t[u] === s) return !0;
    return (t.push(s), !1);
  }
  function o(s) {
    if (e) t.delete(s);
    else
      for (let u = 0; u < t.length; u++)
        if (t[u] === s) {
          t.splice(u, 1);
          break;
        }
  }
  return [n, o];
}
function hr(e, t = 100, n = 1 / 0) {
  try {
    return Jf("", e, t, n);
  } catch (o) {
    return { ERROR: `**non-serializable** (${o})` };
  }
}
function Z_(e, t = 3, n = 100 * 1024) {
  const o = hr(e, t);
  return KT(o) > n ? Z_(e, t - 1, n) : o;
}
function Jf(e, t, n = 1 / 0, o = 1 / 0, s = VT()) {
  const [u, c] = s;
  if (
    t == null ||
    ["boolean", "string"].includes(typeof t) ||
    (typeof t == "number" && Number.isFinite(t))
  )
    return t;
  const d = XT(e, t);
  if (!d.startsWith("[object ")) return d;
  if (t.__sentry_skip_normalization__) return t;
  const h =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (h === 0) return d.replace("object ", "");
  if (u(t)) return "[Circular ~]";
  const m = t;
  if (m && typeof m.toJSON == "function")
    try {
      const N = m.toJSON();
      return Jf("", N, h - 1, o, s);
    } catch {}
  const _ = Array.isArray(t) ? [] : {};
  let y = 0;
  const E = $_(t);
  for (const N in E) {
    if (!Object.prototype.hasOwnProperty.call(E, N)) continue;
    if (y >= o) {
      _[N] = "[MaxProperties ~]";
      break;
    }
    const P = E[N];
    ((_[N] = Jf(N, P, h - 1, o, s)), y++);
  }
  return (c(t), _);
}
function XT(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (B_(t)) return "[VueViewModel]";
    if (QS(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == "function") return `[Function: ${Vr(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = qT(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function qT(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function YT(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function KT(e) {
  return YT(JSON.stringify(e));
}
function ZT(e, t = []) {
  return [e, t];
}
function QT(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function JT(e, t, n, o) {
  const s =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && o && { dsn: Y_(o) }),
    ...(s && { trace: Yn({ ...s }) }),
  };
}
const e0 = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
function ed(e, t, n, o = 0) {
  return new Ur((s, u) => {
    const c = e[o];
    if (t === null || typeof c != "function") s(t);
    else {
      const d = c({ ...t }, n);
      (ir &&
        c.id &&
        d === null &&
        st.log(`Event processor "${c.id}" dropped event`),
        Ad(d)
          ? d.then((h) => ed(e, h, n, o + 1).then(s)).then(null, u)
          : ed(e, d, n, o + 1)
              .then(s)
              .then(null, u));
    }
  });
}
let gu, ig, _u;
function t0(e) {
  const t = gt._sentryDebugIds;
  if (!t) return {};
  const n = Object.keys(t);
  return (
    (_u && n.length === ig) ||
      ((ig = n.length),
      (_u = n.reduce((o, s) => {
        gu || (gu = {});
        const u = gu[s];
        if (u) o[u[0]] = u[1];
        else {
          const c = e(s);
          for (let d = c.length - 1; d >= 0; d--) {
            const h = c[d],
              m = h && h.filename,
              _ = t[s];
            if (m && _) {
              ((o[m] = _), (gu[s] = [m, _]));
              break;
            }
          }
        }
        return o;
      }, {}))),
    _u
  );
}
function n0(e, t) {
  const {
    fingerprint: n,
    span: o,
    breadcrumbs: s,
    sdkProcessingMetadata: u,
  } = t;
  (r0(e, t), o && s0(e, o), a0(e, n), i0(e, s), o0(e, u));
}
function og(e, t) {
  const {
    extra: n,
    tags: o,
    user: s,
    contexts: u,
    level: c,
    sdkProcessingMetadata: d,
    breadcrumbs: h,
    fingerprint: m,
    eventProcessors: _,
    attachments: y,
    propagationContext: E,
    transactionName: N,
    span: P,
  } = t;
  (yu(e, "extra", n),
    yu(e, "tags", o),
    yu(e, "user", s),
    yu(e, "contexts", u),
    (e.sdkProcessingMetadata = ml(e.sdkProcessingMetadata, d, 2)),
    c && (e.level = c),
    N && (e.transactionName = N),
    P && (e.span = P),
    h.length && (e.breadcrumbs = [...e.breadcrumbs, ...h]),
    m.length && (e.fingerprint = [...e.fingerprint, ...m]),
    _.length && (e.eventProcessors = [...e.eventProcessors, ..._]),
    y.length && (e.attachments = [...e.attachments, ...y]),
    (e.propagationContext = { ...e.propagationContext, ...E }));
}
function yu(e, t, n) {
  e[t] = ml(e[t], n, 1);
}
function r0(e, t) {
  const {
      extra: n,
      tags: o,
      user: s,
      contexts: u,
      level: c,
      transactionName: d,
    } = t,
    h = Yn(n);
  h && Object.keys(h).length && (e.extra = { ...h, ...e.extra });
  const m = Yn(o);
  m && Object.keys(m).length && (e.tags = { ...m, ...e.tags });
  const _ = Yn(s);
  _ && Object.keys(_).length && (e.user = { ..._, ...e.user });
  const y = Yn(u);
  (y && Object.keys(y).length && (e.contexts = { ...y, ...e.contexts }),
    c && (e.level = c),
    d && e.type !== "transaction" && (e.transaction = d));
}
function i0(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function o0(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function s0(e, t) {
  ((e.contexts = { trace: NT(t), ...e.contexts }),
    (e.sdkProcessingMetadata = {
      dynamicSamplingContext: q_(t),
      ...e.sdkProcessingMetadata,
    }));
  const n = _l(t),
    o = Gs(n).description;
  o && !e.transaction && e.type === "transaction" && (e.transaction = o);
}
function a0(e, t) {
  ((e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
}
function u0(e, t, n, o, s, u) {
  const { normalizeDepth: c = 3, normalizeMaxBreadth: d = 1e3 } = e,
    h = {
      ...t,
      event_id: t.event_id || n.event_id || yr(),
      timestamp: t.timestamp || pl(),
    },
    m = n.integrations || e.integrations.map((W) => W.name);
  (l0(h, e),
    d0(h, m),
    s && s.emit("applyFrameMetadata", t),
    t.type === void 0 && c0(h, e.stackParser));
  const _ = h0(o, n.captureContext);
  n.mechanism && Ws(h, n.mechanism);
  const y = s ? s.getEventProcessors() : [],
    E = _T().getScopeData();
  if (u) {
    const W = u.getScopeData();
    og(E, W);
  }
  if (_) {
    const W = _.getScopeData();
    og(E, W);
  }
  const N = [...(n.attachments || []), ...E.attachments];
  (N.length && (n.attachments = N), n0(h, E));
  const P = [...y, ...E.eventProcessors];
  return ed(P, h, n).then(
    (W) => (W && f0(W), typeof c == "number" && c > 0 ? p0(W, c, d) : W),
  );
}
function l0(e, t) {
  const { environment: n, release: o, dist: s, maxValueLength: u = 250 } = t;
  ((e.environment = e.environment || n || Fd),
    !e.release && o && (e.release = o),
    !e.dist && s && (e.dist = s),
    e.message && (e.message = Do(e.message, u)));
  const c = e.exception && e.exception.values && e.exception.values[0];
  c && c.value && (c.value = Do(c.value, u));
  const d = e.request;
  d && d.url && (d.url = Do(d.url, u));
}
function c0(e, t) {
  const n = t0(t);
  try {
    e.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((s) => {
        n && s.filename && (s.debug_id = n[s.filename]);
      });
    });
  } catch {}
}
function f0(e) {
  const t = {};
  try {
    e.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((s) => {
        s.debug_id &&
          (s.abs_path
            ? (t[s.abs_path] = s.debug_id)
            : s.filename && (t[s.filename] = s.debug_id),
          delete s.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  const n = e.debug_meta.images;
  Object.entries(t).forEach(([o, s]) => {
    n.push({ type: "sourcemap", code_file: o, debug_id: s });
  });
}
function d0(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function p0(e, t, n) {
  if (!e) return null;
  const o = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((s) => ({
        ...s,
        ...(s.data && { data: hr(s.data, t, n) }),
      })),
    }),
    ...(e.user && { user: hr(e.user, t, n) }),
    ...(e.contexts && { contexts: hr(e.contexts, t, n) }),
    ...(e.extra && { extra: hr(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      o.contexts &&
      ((o.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (o.contexts.trace.data = hr(e.contexts.trace.data, t, n))),
    e.spans &&
      (o.spans = e.spans.map((s) => ({
        ...s,
        ...(s.data && { data: hr(s.data, t, n) }),
      }))),
    e.contexts &&
      e.contexts.flags &&
      o.contexts &&
      (o.contexts.flags = hr(e.contexts.flags, 3, n)),
    o
  );
}
function h0(e, t) {
  if (!t) return e;
  const n = e ? e.clone() : new yi();
  return (n.update(t), n);
}
function m0(e) {
  if (e)
    return g0(e) ? { captureContext: e } : y0(e) ? { captureContext: e } : e;
}
function g0(e) {
  return e instanceof yi || typeof e == "function";
}
const _0 = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext",
];
function y0(e) {
  return Object.keys(e).some((t) => _0.includes(t));
}
function Vs(e, t) {
  return ar().captureException(e, m0(t));
}
function v0(e, t) {
  const n = t;
  return ar().captureMessage(e, n, void 0);
}
function Q_(e, t) {
  return ar().captureEvent(e, t);
}
function E0(e, t) {
  Ei().setContext(e, t);
}
function J_() {
  return Ei().lastEventId();
}
function S0(e) {
  Ei().addEventProcessor(e);
}
function sg(e) {
  const t = Ft(),
    n = Ei(),
    o = ar(),
    { release: s, environment: u = Fd } = (t && t.getOptions()) || {},
    { userAgent: c } = gt.navigator || {},
    d = aT({
      release: s,
      environment: u,
      user: o.getUser() || n.getUser(),
      ...(c && { userAgent: c }),
      ...e,
    }),
    h = n.getSession();
  return (
    h && h.status === "ok" && hl(h, { status: "exited" }),
    ey(),
    n.setSession(d),
    o.setSession(d),
    d
  );
}
function ey() {
  const e = Ei(),
    t = ar(),
    n = t.getSession() || e.getSession();
  (n && uT(n), ty(), e.setSession(), t.setSession());
}
function ty() {
  const e = Ei(),
    t = ar(),
    n = Ft(),
    o = t.getSession() || e.getSession();
  o && n && n.captureSession(o);
}
function ag(e = !1) {
  if (e) {
    ey();
    return;
  }
  ty();
}
function T0(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function w0(e, t) {
  const n = GT(e);
  if (!n) return "";
  const o = `${T0(n)}embed/error-page/`;
  let s = `dsn=${Y_(n)}`;
  for (const u in t)
    if (u !== "dsn" && u !== "onClose")
      if (u === "user") {
        const c = t.user;
        if (!c) continue;
        (c.name && (s += `&name=${encodeURIComponent(c.name)}`),
          c.email && (s += `&email=${encodeURIComponent(c.email)}`));
      } else s += `&${encodeURIComponent(u)}=${encodeURIComponent(t[u])}`;
  return `${o}?${s}`;
}
const k0 = 60 * 1e3;
function R0(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const o = Date.parse(`${e}`);
  return isNaN(o) ? k0 : o - t;
}
function I0(e, t) {
  return e[t] || e.all || 0;
}
function C0(e, t, n = Date.now()) {
  return I0(e, t) > n;
}
function O0(e, { statusCode: t, headers: n }, o = Date.now()) {
  const s = { ...e },
    u = n && n["x-sentry-rate-limits"],
    c = n && n["retry-after"];
  if (u)
    for (const d of u.trim().split(",")) {
      const [h, m, , , _] = d.split(":", 5),
        y = parseInt(h, 10),
        E = (isNaN(y) ? 60 : y) * 1e3;
      if (!m) s.all = o + E;
      else
        for (const N of m.split(";"))
          N === "metric_bucket"
            ? (!_ || _.split(";").includes("custom")) && (s[N] = o + E)
            : (s[N] = o + E);
    }
  else c ? (s.all = o + R0(c, o)) : t === 429 && (s.all = o + 60 * 1e3);
  return s;
}
function b0(e, t) {
  const n = t && t.getDsn(),
    o = t && t.getOptions().tunnel;
  return N0(e, n) || x0(e, o);
}
function x0(e, t) {
  return t ? ug(e) === ug(t) : !1;
}
function N0(e, t) {
  return t ? e.includes(t.host) : !1;
}
function ug(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}
const A0 = 100;
function vi(e, t) {
  const n = Ft(),
    o = Ei();
  if (!n) return;
  const { beforeBreadcrumb: s = null, maxBreadcrumbs: u = A0 } = n.getOptions();
  if (u <= 0) return;
  const d = { timestamp: pl(), ...e },
    h = s ? ul(() => s(d, t)) : d;
  h !== null &&
    (n.emit && n.emit("beforeAddBreadcrumb", h, t), o.addBreadcrumb(h, u));
}
let lg;
const P0 = "FunctionToString",
  cg = new WeakMap(),
  L0 = () => ({
    name: P0,
    setupOnce() {
      lg = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          const t = Ld(this),
            n = cg.has(Ft()) && t !== void 0 ? t : this;
          return lg.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      cg.set(e, !0);
    },
  }),
  MP = L0,
  M0 = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    "undefined is not an object (evaluating 'a.L')",
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
  ],
  D0 = "InboundFilters",
  F0 = (e = {}) => ({
    name: D0,
    processEvent(t, n, o) {
      const s = o.getOptions(),
        u = U0(e, s);
      return j0(t, u) ? null : t;
    },
  }),
  DP = F0;
function U0(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : M0),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function j0(e, t) {
  return t.ignoreInternal && G0(e)
    ? (ir &&
        st.warn(`Event dropped due to being internal Sentry Error.
Event: ${fi(e)}`),
      !0)
    : B0(e, t.ignoreErrors)
      ? (ir &&
          st.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${fi(e)}`),
        !0)
      : X0(e)
        ? (ir &&
            st.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${fi(e)}`),
          !0)
        : H0(e, t.ignoreTransactions)
          ? (ir &&
              st.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${fi(e)}`),
            !0)
          : z0(e, t.denyUrls)
            ? (ir &&
                st.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${fi(e)}.
Url: ${Hu(e)}`),
              !0)
            : $0(e, t.allowUrls)
              ? !1
              : (ir &&
                  st.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${fi(e)}.
Url: ${Hu(e)}`),
                !0);
}
function B0(e, t) {
  return e.type || !t || !t.length ? !1 : W0(e).some((n) => na(n, t));
}
function H0(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? na(n, t) : !1;
}
function z0(e, t) {
  if (!t || !t.length) return !1;
  const n = Hu(e);
  return n ? na(n, t) : !1;
}
function $0(e, t) {
  if (!t || !t.length) return !0;
  const n = Hu(e);
  return n ? na(n, t) : !0;
}
function W0(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    t
  );
}
function G0(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function V0(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function Hu(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? V0(t) : null;
  } catch {
    return (ir && st.error(`Cannot extract url for event ${fi(e)}`), null);
  }
}
function X0(e) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    e.exception.values.length === 0
    ? !1
    : !e.message &&
        !e.exception.values.some(
          (t) => t.stacktrace || (t.type && t.type !== "Error") || t.value,
        );
}
function q0(e, t, n = 250, o, s, u, c) {
  if (
    !u.exception ||
    !u.exception.values ||
    !c ||
    !Gi(c.originalException, Error)
  )
    return;
  const d =
    u.exception.values.length > 0
      ? u.exception.values[u.exception.values.length - 1]
      : void 0;
  d &&
    (u.exception.values = Y0(
      td(e, t, s, c.originalException, o, u.exception.values, d, 0),
      n,
    ));
}
function td(e, t, n, o, s, u, c, d) {
  if (u.length >= n + 1) return u;
  let h = [...u];
  if (Gi(o[s], Error)) {
    fg(c, d);
    const m = e(t, o[s]),
      _ = h.length;
    (dg(m, s, _, d), (h = td(e, t, n, o[s], s, [m, ...h], m, _)));
  }
  return (
    Array.isArray(o.errors) &&
      o.errors.forEach((m, _) => {
        if (Gi(m, Error)) {
          fg(c, d);
          const y = e(t, m),
            E = h.length;
          (dg(y, `errors[${_}]`, E, d),
            (h = td(e, t, n, m, s, [y, ...h], y, E)));
        }
      }),
    h
  );
}
function fg(e, t) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      ...(e.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    }));
}
function dg(e, t, n, o) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: o,
    }));
}
function Y0(e, t) {
  return e.map((n) => (n.value && (n.value = Do(n.value, t)), n));
}
function gf(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  const n = t[6] || "",
    o = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: o,
    relative: t[5] + n + o,
  };
}
function K0(e) {
  const t = "console";
  (Yi(t, e), Ki(t, Z0));
}
function Z0() {
  "console" in gt &&
    Xf.forEach(function (e) {
      e in gt.console &&
        An(gt.console, e, function (t) {
          return (
            (Bu[e] = t),
            function (...n) {
              sr("console", { args: n, level: e });
              const s = Bu[e];
              s && s.apply(gt.console, n);
            }
          );
        });
    });
}
function ny(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
      ? e
      : "log";
}
const Q0 = "Dedupe",
  J0 = () => {
    let e;
    return {
      name: Q0,
      processEvent(t) {
        if (t.type) return t;
        try {
          if (ew(t, e))
            return (
              ir &&
                st.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (e = t);
      },
    };
  },
  FP = J0;
function ew(e, t) {
  return t ? !!(tw(e, t) || nw(e, t)) : !1;
}
function tw(e, t) {
  const n = e.message,
    o = t.message;
  return !(
    (!n && !o) ||
    (n && !o) ||
    (!n && o) ||
    n !== o ||
    !iy(e, t) ||
    !ry(e, t)
  );
}
function nw(e, t) {
  const n = pg(t),
    o = pg(e);
  return !(
    !n ||
    !o ||
    n.type !== o.type ||
    n.value !== o.value ||
    !iy(e, t) ||
    !ry(e, t)
  );
}
function ry(e, t) {
  let n = Wm(e),
    o = Wm(t);
  if (!n && !o) return !0;
  if ((n && !o) || (!n && o) || ((n = n), (o = o), o.length !== n.length))
    return !1;
  for (let s = 0; s < o.length; s++) {
    const u = o[s],
      c = n[s];
    if (
      u.filename !== c.filename ||
      u.lineno !== c.lineno ||
      u.colno !== c.colno ||
      u.function !== c.function
    )
      return !1;
  }
  return !0;
}
function iy(e, t) {
  let n = e.fingerprint,
    o = t.fingerprint;
  if (!n && !o) return !0;
  if ((n && !o) || (!n && o)) return !1;
  ((n = n), (o = o));
  try {
    return n.join("") === o.join("");
  } catch {
    return !1;
  }
}
function pg(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function oy(e) {
  if (e !== void 0)
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
const nd = gt;
function rw() {
  if (!("fetch" in nd)) return !1;
  try {
    return (
      new Headers(),
      new Request("http://www.example.com"),
      new Response(),
      !0
    );
  } catch {
    return !1;
  }
}
function rd(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function iw() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!rw()) return !1;
  if (rd(nd.fetch)) return !0;
  let e = !1;
  const t = nd.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      ((n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = rd(n.contentWindow.fetch)),
        t.head.removeChild(n));
    } catch (n) {
      qi &&
        st.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n,
        );
    }
  return e;
}
function ow(e, t) {
  const n = "fetch";
  (Yi(n, e), Ki(n, () => sw(void 0, t)));
}
function sw(e, t = !1) {
  (t && !iw()) ||
    An(gt, "fetch", function (n) {
      return function (...o) {
        const s = new Error(),
          { method: u, url: c } = aw(o),
          d = {
            args: o,
            fetchData: { method: u, url: c },
            startTimestamp: Wr() * 1e3,
            virtualError: s,
          };
        return (
          e || sr("fetch", { ...d }),
          n.apply(gt, o).then(
            async (h) => (
              e
                ? e(h)
                : sr("fetch", { ...d, endTimestamp: Wr() * 1e3, response: h }),
              h
            ),
            (h) => {
              throw (
                sr("fetch", { ...d, endTimestamp: Wr() * 1e3, error: h }),
                ll(h) &&
                  h.stack === void 0 &&
                  ((h.stack = s.stack), Bo(h, "framesToPop", 1)),
                h
              );
            },
          )
        );
      };
    });
}
function id(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function hg(e) {
  return typeof e == "string"
    ? e
    : e
      ? id(e, "url")
        ? e.url
        : e.toString
          ? e.toString()
          : ""
      : "";
}
function aw(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, o] = e;
    return {
      url: hg(n),
      method: id(o, "method") ? String(o.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: hg(t),
    method: id(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function uw() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function lw() {
  return (
    !uw() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function mg() {
  return typeof window < "u" && (!lw() || cw());
}
function cw() {
  const e = gt.process;
  return !!e && e.type === "renderer";
}
const vu = gt;
function fw() {
  const e = vu.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in vu && !!vu.history.pushState && !!vu.history.replaceState;
  return !t && n;
}
function dw(e, t) {
  return e ?? t();
}
function Lu(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
const Zt = gt;
let od = 0;
function sy() {
  return od > 0;
}
function pw() {
  (od++,
    setTimeout(() => {
      od--;
    }));
}
function zo(e, t = {}) {
  function n(s) {
    return typeof s == "function";
  }
  if (!n(e)) return e;
  try {
    const s = e.__sentry_wrapped__;
    if (s) return typeof s == "function" ? s : e;
    if (Ld(e)) return e;
  } catch {
    return e;
  }
  const o = function (...s) {
    try {
      const u = s.map((c) => zo(c, t));
      return e.apply(this, u);
    } catch (u) {
      throw (
        pw(),
        V_((c) => {
          (c.addEventProcessor(
            (d) => (
              t.mechanism && (Yf(d, void 0), Ws(d, t.mechanism)),
              (d.extra = { ...d.extra, arguments: s }),
              d
            ),
          ),
            Vs(u));
        }),
        u
      );
    }
  };
  try {
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
  } catch {}
  (z_(o, e), Bo(e, "__sentry_wrapped__", o));
  try {
    Object.getOwnPropertyDescriptor(o, "name").configurable &&
      Object.defineProperty(o, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return o;
}
const Fo = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ud(e, t) {
  const n = jd(e, t),
    o = { type: yw(t), value: vw(t) };
  return (
    n.length && (o.stacktrace = { frames: n }),
    o.type === void 0 &&
      o.value === "" &&
      (o.value = "Unrecoverable error caught"),
    o
  );
}
function hw(e, t, n, o) {
  const s = Ft(),
    u = s && s.getOptions().normalizeDepth,
    c = Tw(t),
    d = { __serialized__: Z_(t, u) };
  if (c) return { exception: { values: [Ud(e, c)] }, extra: d };
  const h = {
    exception: {
      values: [
        {
          type: fl(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
          value: Ew(t, { isUnhandledRejection: o }),
        },
      ],
    },
    extra: d,
  };
  if (n) {
    const m = jd(e, n);
    m.length && (h.exception.values[0].stacktrace = { frames: m });
  }
  return h;
}
function _f(e, t) {
  return { exception: { values: [Ud(e, t)] } };
}
function jd(e, t) {
  const n = t.stacktrace || t.stack || "",
    o = gw(t),
    s = _w(t);
  try {
    return e(n, o, s);
  } catch {}
  return [];
}
const mw = /Minified React error #\d+;/i;
function gw(e) {
  return e && mw.test(e.message) ? 1 : 0;
}
function _w(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function ay(e) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
    ? e instanceof WebAssembly.Exception
    : !1;
}
function yw(e) {
  const t = e && e.name;
  return !t && ay(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function vw(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : ay(e) && Array.isArray(e.message) && e.message.length == 2
        ? e.message[1]
        : t
    : "No error message";
}
function uy(e, t, n, o, s) {
  let u;
  if (F_(t) && t.error) return _f(e, t.error);
  if (Vm(t) || YS(t)) {
    const c = t;
    if ("stack" in t) u = _f(e, t);
    else {
      const d = c.name || (Vm(c) ? "DOMError" : "DOMException"),
        h = c.message ? `${d}: ${c.message}` : d;
      ((u = gg(e, h, n, o)), Yf(u, h));
    }
    return (
      "code" in c && (u.tags = { ...u.tags, "DOMException.code": `${c.code}` }),
      u
    );
  }
  return ll(t)
    ? _f(e, t)
    : cl(t) || fl(t)
      ? ((u = hw(e, t, n, s)), Ws(u, { synthetic: !0 }), u)
      : ((u = gg(e, t, n, o)), Yf(u, `${t}`), Ws(u, { synthetic: !0 }), u);
}
function gg(e, t, n, o) {
  const s = {};
  if (o && n) {
    const u = jd(e, n);
    (u.length &&
      (s.exception = { values: [{ value: t, stacktrace: { frames: u } }] }),
      Ws(s, { synthetic: !0 }));
  }
  if (U_(t)) {
    const { __sentry_template_string__: u, __sentry_template_values__: c } = t;
    return ((s.logentry = { message: u, params: c }), s);
  }
  return ((s.message = t), s);
}
function Ew(e, { isUnhandledRejection: t }) {
  const n = rT(e),
    o = t ? "promise rejection" : "exception";
  return F_(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : fl(e)
      ? `Event \`${Sw(e)}\` (type=${e.type}) captured as ${o}`
      : `Object captured as ${o} with keys: ${n}`;
}
function Sw(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function Tw(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const n = e[t];
      if (n instanceof Error) return n;
    }
}
const ly = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ww = (e, t) => (e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"),
  ra = (e, t, n, o) => {
    let s, u;
    return (c) => {
      t.value >= 0 &&
        (c || o) &&
        ((u = t.value - (s || 0)),
        (u || s === void 0) &&
          ((s = t.value), (t.delta = u), (t.rating = ww(t.value, n)), e(t)));
    };
  },
  tt = gt,
  kw = () =>
    `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  cy = (e = !0) => {
    const t =
      tt.performance &&
      tt.performance.getEntriesByType &&
      tt.performance.getEntriesByType("navigation")[0];
    if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
      return t;
  },
  Bd = () => {
    const e = cy();
    return (e && e.activationStart) || 0;
  },
  ia = (e, t) => {
    const n = cy();
    let o = "navigate";
    return (
      n &&
        ((tt.document && tt.document.prerendering) || Bd() > 0
          ? (o = "prerender")
          : tt.document && tt.document.wasDiscarded
            ? (o = "restore")
            : n.type && (o = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: kw(),
        navigationType: o,
      }
    );
  },
  Zi = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const o = new PerformanceObserver((s) => {
          Promise.resolve().then(() => {
            t(s.getEntries());
          });
        });
        return (
          o.observe(Object.assign({ type: e, buffered: !0 }, n || {})),
          o
        );
      }
    } catch {}
  },
  oa = (e) => {
    const t = (n) => {
      (n.type === "pagehide" ||
        (tt.document && tt.document.visibilityState === "hidden")) &&
        e(n);
    };
    tt.document &&
      (addEventListener("visibilitychange", t, !0),
      addEventListener("pagehide", t, !0));
  },
  yl = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  };
let Ds = -1;
const Rw = () =>
    tt.document.visibilityState === "hidden" && !tt.document.prerendering
      ? 0
      : 1 / 0,
  zu = (e) => {
    tt.document.visibilityState === "hidden" &&
      Ds > -1 &&
      ((Ds = e.type === "visibilitychange" ? e.timeStamp : 0), Cw());
  },
  Iw = () => {
    (addEventListener("visibilitychange", zu, !0),
      addEventListener("prerenderingchange", zu, !0));
  },
  Cw = () => {
    (removeEventListener("visibilitychange", zu, !0),
      removeEventListener("prerenderingchange", zu, !0));
  },
  Hd = () => (
    tt.document && Ds < 0 && ((Ds = Rw()), Iw()),
    {
      get firstHiddenTime() {
        return Ds;
      },
    }
  ),
  vl = (e) => {
    tt.document && tt.document.prerendering
      ? addEventListener("prerenderingchange", () => e(), !0)
      : e();
  },
  Ow = [1800, 3e3],
  bw = (e, t = {}) => {
    vl(() => {
      const n = Hd(),
        o = ia("FCP");
      let s;
      const c = Zi("paint", (d) => {
        d.forEach((h) => {
          h.name === "first-contentful-paint" &&
            (c.disconnect(),
            h.startTime < n.firstHiddenTime &&
              ((o.value = Math.max(h.startTime - Bd(), 0)),
              o.entries.push(h),
              s(!0)));
        });
      });
      c && (s = ra(e, o, Ow, t.reportAllChanges));
    });
  },
  xw = [0.1, 0.25],
  Nw = (e, t = {}) => {
    bw(
      yl(() => {
        const n = ia("CLS", 0);
        let o,
          s = 0,
          u = [];
        const c = (h) => {
            (h.forEach((m) => {
              if (!m.hadRecentInput) {
                const _ = u[0],
                  y = u[u.length - 1];
                s &&
                _ &&
                y &&
                m.startTime - y.startTime < 1e3 &&
                m.startTime - _.startTime < 5e3
                  ? ((s += m.value), u.push(m))
                  : ((s = m.value), (u = [m]));
              }
            }),
              s > n.value && ((n.value = s), (n.entries = u), o()));
          },
          d = Zi("layout-shift", c);
        d &&
          ((o = ra(e, n, xw, t.reportAllChanges)),
          oa(() => {
            (c(d.takeRecords()), o(!0));
          }),
          setTimeout(o, 0));
      }),
    );
  },
  Aw = [100, 300],
  Pw = (e, t = {}) => {
    vl(() => {
      const n = Hd(),
        o = ia("FID");
      let s;
      const u = (h) => {
          h.startTime < n.firstHiddenTime &&
            ((o.value = h.processingStart - h.startTime),
            o.entries.push(h),
            s(!0));
        },
        c = (h) => {
          h.forEach(u);
        },
        d = Zi("first-input", c);
      ((s = ra(e, o, Aw, t.reportAllChanges)),
        d &&
          oa(
            yl(() => {
              (c(d.takeRecords()), d.disconnect());
            }),
          ));
    });
  };
let fy = 0,
  yf = 1 / 0,
  Eu = 0;
const Lw = (e) => {
  e.forEach((t) => {
    t.interactionId &&
      ((yf = Math.min(yf, t.interactionId)),
      (Eu = Math.max(Eu, t.interactionId)),
      (fy = Eu ? (Eu - yf) / 7 + 1 : 0));
  });
};
let sd;
const Mw = () => (sd ? fy : performance.interactionCount || 0),
  Dw = () => {
    "interactionCount" in performance ||
      sd ||
      (sd = Zi("event", Lw, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  Fr = [],
  vf = new Map(),
  Fw = 40;
let Uw = 0;
const jw = () => Mw() - Uw,
  Bw = () => {
    const e = Math.min(Fr.length - 1, Math.floor(jw() / 50));
    return Fr[e];
  },
  Ef = 10,
  Hw = [],
  zw = (e) => {
    if (
      (Hw.forEach((o) => o(e)),
      !(e.interactionId || e.entryType === "first-input"))
    )
      return;
    const t = Fr[Fr.length - 1],
      n = vf.get(e.interactionId);
    if (n || Fr.length < Ef || (t && e.duration > t.latency)) {
      if (n)
        e.duration > n.latency
          ? ((n.entries = [e]), (n.latency = e.duration))
          : e.duration === n.latency &&
            e.startTime === (n.entries[0] && n.entries[0].startTime) &&
            n.entries.push(e);
      else {
        const o = { id: e.interactionId, latency: e.duration, entries: [e] };
        (vf.set(o.id, o), Fr.push(o));
      }
      (Fr.sort((o, s) => s.latency - o.latency),
        Fr.length > Ef && Fr.splice(Ef).forEach((o) => vf.delete(o.id)));
    }
  },
  dy = (e) => {
    const t = tt.requestIdleCallback || tt.setTimeout;
    let n = -1;
    return (
      (e = yl(e)),
      tt.document && tt.document.visibilityState === "hidden"
        ? e()
        : ((n = t(e)), oa(e)),
      n
    );
  },
  $w = [200, 500],
  Ww = (e, t = {}) => {
    "PerformanceEventTiming" in tt &&
      "interactionId" in PerformanceEventTiming.prototype &&
      vl(() => {
        Dw();
        const n = ia("INP");
        let o;
        const s = (c) => {
            dy(() => {
              c.forEach(zw);
              const d = Bw();
              d &&
                d.latency !== n.value &&
                ((n.value = d.latency), (n.entries = d.entries), o());
            });
          },
          u = Zi("event", s, {
            durationThreshold:
              t.durationThreshold != null ? t.durationThreshold : Fw,
          });
        ((o = ra(e, n, $w, t.reportAllChanges)),
          u &&
            (u.observe({ type: "first-input", buffered: !0 }),
            oa(() => {
              (s(u.takeRecords()), o(!0));
            })));
      });
  },
  Gw = [2500, 4e3],
  _g = {},
  Vw = (e, t = {}) => {
    vl(() => {
      const n = Hd(),
        o = ia("LCP");
      let s;
      const u = (d) => {
          (t.reportAllChanges || (d = d.slice(-1)),
            d.forEach((h) => {
              h.startTime < n.firstHiddenTime &&
                ((o.value = Math.max(h.startTime - Bd(), 0)),
                (o.entries = [h]),
                s());
            }));
        },
        c = Zi("largest-contentful-paint", u);
      if (c) {
        s = ra(e, o, Gw, t.reportAllChanges);
        const d = yl(() => {
          _g[o.id] ||
            (u(c.takeRecords()), c.disconnect(), (_g[o.id] = !0), s(!0));
        });
        (["keydown", "click"].forEach((h) => {
          tt.document &&
            addEventListener(h, () => dy(d), { once: !0, capture: !0 });
        }),
          oa(d));
      }
    });
  };
const Fs = {},
  $u = {};
let py, hy, my;
let gy;
function Xw(e, t = !1) {
  return El("cls", e, Qw, py, t);
}
function qw(e, t = !1) {
  return El("lcp", e, ek, my, t);
}
function Yw(e) {
  return El("fid", e, Jw, hy);
}
function Kw(e) {
  return El("inp", e, tk, gy);
}
function Zw(e, t) {
  return (_y(e, t), $u[e] || (nk(e), ($u[e] = !0)), yy(e, t));
}
function sa(e, t) {
  const n = Fs[e];
  if (!(!n || !n.length))
    for (const o of n)
      try {
        o(t);
      } catch (s) {
        ly &&
          st.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Vr(o)}
Error:`,
            s,
          );
      }
}
function Qw() {
  return Nw(
    (e) => {
      (sa("cls", { metric: e }), (py = e));
    },
    { reportAllChanges: !0 },
  );
}
function Jw() {
  return Pw((e) => {
    (sa("fid", { metric: e }), (hy = e));
  });
}
function ek() {
  return Vw(
    (e) => {
      (sa("lcp", { metric: e }), (my = e));
    },
    { reportAllChanges: !0 },
  );
}
function tk() {
  return Ww((e) => {
    (sa("inp", { metric: e }), (gy = e));
  });
}
function El(e, t, n, o, s = !1) {
  _y(e, t);
  let u;
  return (
    $u[e] || ((u = n()), ($u[e] = !0)),
    o && t({ metric: o }),
    yy(e, t, s ? u : void 0)
  );
}
function nk(e) {
  const t = {};
  (e === "event" && (t.durationThreshold = 0),
    Zi(
      e,
      (n) => {
        sa(e, { entries: n });
      },
      t,
    ));
}
function _y(e, t) {
  ((Fs[e] = Fs[e] || []), Fs[e].push(t));
}
function yy(e, t, n) {
  return () => {
    n && n();
    const o = Fs[e];
    if (!o) return;
    const s = o.indexOf(t);
    s !== -1 && o.splice(s, 1);
  };
}
const rk = 1e3;
let yg, ad, ud;
function vy(e) {
  (Yi("dom", e), Ki("dom", ik));
}
function ik() {
  if (!tt.document) return;
  const e = sr.bind(null, "dom"),
    t = vg(e, !0);
  (tt.document.addEventListener("click", t, !1),
    tt.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const s = tt[n],
        u = s && s.prototype;
      !u ||
        !u.hasOwnProperty ||
        !u.hasOwnProperty("addEventListener") ||
        (An(u, "addEventListener", function (c) {
          return function (d, h, m) {
            if (d === "click" || d == "keypress")
              try {
                const _ = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  y = (_[d] = _[d] || { refCount: 0 });
                if (!y.handler) {
                  const E = vg(e);
                  ((y.handler = E), c.call(this, d, E, m));
                }
                y.refCount++;
              } catch {}
            return c.call(this, d, h, m);
          };
        }),
        An(u, "removeEventListener", function (c) {
          return function (d, h, m) {
            if (d === "click" || d == "keypress")
              try {
                const _ = this.__sentry_instrumentation_handlers__ || {},
                  y = _[d];
                y &&
                  (y.refCount--,
                  y.refCount <= 0 &&
                    (c.call(this, d, y.handler, m),
                    (y.handler = void 0),
                    delete _[d]),
                  Object.keys(_).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return c.call(this, d, h, m);
          };
        }));
    }));
}
function ok(e) {
  if (e.type !== ad) return !1;
  try {
    if (!e.target || e.target._sentryId !== ud) return !1;
  } catch {}
  return !0;
}
function sk(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
      ? !0
      : !(
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable
        );
}
function vg(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const o = ak(n);
    if (sk(n.type, o)) return;
    (Bo(n, "_sentryCaptured", !0),
      o && !o._sentryId && Bo(o, "_sentryId", yr()));
    const s = n.type === "keypress" ? "input" : n.type;
    (ok(n) ||
      (e({ event: n, name: s, global: t }),
      (ad = n.type),
      (ud = o ? o._sentryId : void 0)),
      clearTimeout(yg),
      (yg = tt.setTimeout(() => {
        ((ud = void 0), (ad = void 0));
      }, rk)));
  };
}
function ak(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Su;
function zd(e) {
  const t = "history";
  (Yi(t, e), Ki(t, uk));
}
function uk() {
  if (!fw()) return;
  const e = tt.onpopstate;
  tt.onpopstate = function (...n) {
    const o = tt.location.href,
      s = Su;
    if (((Su = o), sr("history", { from: s, to: o }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...o) {
      const s = o.length > 2 ? o[2] : void 0;
      if (s) {
        const u = Su,
          c = String(s);
        ((Su = c), sr("history", { from: u, to: c }));
      }
      return n.apply(this, o);
    };
  }
  (An(tt.history, "pushState", t), An(tt.history, "replaceState", t));
}
const Sf = {};
function lk(e) {
  const t = Sf[e];
  if (t) return t;
  let n = tt[e];
  if (rd(n)) return (Sf[e] = n.bind(tt));
  const o = tt.document;
  if (o && typeof o.createElement == "function")
    try {
      const s = o.createElement("iframe");
      ((s.hidden = !0), o.head.appendChild(s));
      const u = s.contentWindow;
      (u && u[e] && (n = u[e]), o.head.removeChild(s));
    } catch (s) {
      ly &&
        st.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          s,
        );
    }
  return n && (Sf[e] = n.bind(tt));
}
function $o(...e) {
  return lk("setTimeout")(...e);
}
const No = "__sentry_xhr_v3__";
function ck(e) {
  (Yi("xhr", e), Ki("xhr", fk));
}
function fk() {
  if (!tt.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  ((e.open = new Proxy(e.open, {
    apply(t, n, o) {
      const s = new Error(),
        u = Wr() * 1e3,
        c = $r(o[0]) ? o[0].toUpperCase() : void 0,
        d = dk(o[1]);
      if (!c || !d) return t.apply(n, o);
      ((n[No] = { method: c, url: d, request_headers: {} }),
        c === "POST" &&
          d.match(/sentry_key/) &&
          (n.__sentry_own_request__ = !0));
      const h = () => {
        const m = n[No];
        if (m && n.readyState === 4) {
          try {
            m.status_code = n.status;
          } catch {}
          const _ = {
            endTimestamp: Wr() * 1e3,
            startTimestamp: u,
            xhr: n,
            virtualError: s,
          };
          sr("xhr", _);
        }
      };
      return (
        "onreadystatechange" in n && typeof n.onreadystatechange == "function"
          ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(m, _, y) {
                return (h(), m.apply(_, y));
              },
            }))
          : n.addEventListener("readystatechange", h),
        (n.setRequestHeader = new Proxy(n.setRequestHeader, {
          apply(m, _, y) {
            const [E, N] = y,
              P = _[No];
            return (
              P && $r(E) && $r(N) && (P.request_headers[E.toLowerCase()] = N),
              m.apply(_, y)
            );
          },
        })),
        t.apply(n, o)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(t, n, o) {
        const s = n[No];
        if (!s) return t.apply(n, o);
        o[0] !== void 0 && (s.body = o[0]);
        const u = { startTimestamp: Wr() * 1e3, xhr: n };
        return (sr("xhr", u), t.apply(n, o));
      },
    })));
}
function dk(e) {
  if ($r(e)) return e;
  try {
    return e.toString();
  } catch {}
}
const pk = 30,
  hk = 50;
function ld(e, t, n, o) {
  const s = { filename: e, function: t === "<anonymous>" ? Wi : t, in_app: !0 };
  return (n !== void 0 && (s.lineno = n), o !== void 0 && (s.colno = o), s);
}
const mk = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  gk =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  _k = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  yk = (e) => {
    const t = mk.exec(e);
    if (t) {
      const [, o, s, u] = t;
      return ld(o, Wi, +s, +u);
    }
    const n = gk.exec(e);
    if (n) {
      if (n[2] && n[2].indexOf("eval") === 0) {
        const c = _k.exec(n[2]);
        c && ((n[2] = c[1]), (n[3] = c[2]), (n[4] = c[3]));
      }
      const [s, u] = Ey(n[1] || Wi, n[2]);
      return ld(u, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
    }
  },
  vk = [pk, yk],
  Ek =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Sk = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Tk = (e) => {
    const t = Ek.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const u = Sk.exec(t[3]);
        u &&
          ((t[1] = t[1] || "eval"), (t[3] = u[1]), (t[4] = u[2]), (t[5] = ""));
      }
      let o = t[3],
        s = t[1] || Wi;
      return (
        ([s, o] = Ey(s, o)),
        ld(o, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  wk = [hk, Tk],
  kk = [vk, wk],
  UP = $S(...kk),
  Ey = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      o = e.indexOf("safari-web-extension") !== -1;
    return n || o
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : Wi,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  Tu = 1024,
  Rk = "Breadcrumbs",
  Ik = (e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: Rk,
      setup(n) {
        (t.console && K0(bk(n)),
          t.dom && vy(Ok(n, t.dom)),
          t.xhr && ck(xk(n)),
          t.fetch && ow(Nk(n)),
          t.history && zd(Ak(n)),
          t.sentry && n.on("beforeSendEvent", Ck(n)));
      },
    };
  },
  jP = Ik;
function Ck(e) {
  return function (n) {
    Ft() === e &&
      vi(
        {
          category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
          event_id: n.event_id,
          level: n.level,
          message: fi(n),
        },
        { event: n },
      );
  };
}
function Ok(e, t) {
  return function (o) {
    if (Ft() !== e) return;
    let s,
      u,
      c = typeof t == "object" ? t.serializeAttribute : void 0,
      d =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    (d &&
      d > Tu &&
      (Fo &&
        st.warn(
          `\`dom.maxStringLength\` cannot exceed ${Tu}, but a value of ${d} was configured. Sentry will use ${Tu} instead.`,
        ),
      (d = Tu)),
      typeof c == "string" && (c = [c]));
    try {
      const m = o.event,
        _ = Pk(m) ? m.target : m;
      ((s = dl(_, { keyAttrs: c, maxStringLength: d })), (u = tT(_)));
    } catch {
      s = "<unknown>";
    }
    if (s.length === 0) return;
    const h = { category: `ui.${o.name}`, message: s };
    (u && (h.data = { "ui.component_name": u }),
      vi(h, { event: o.event, name: o.name, global: o.global }));
  };
}
function bk(e) {
  return function (n) {
    if (Ft() !== e) return;
    const o = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: ny(n.level),
      message: Xm(n.args, " "),
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        ((o.message = `Assertion failed: ${Xm(n.args.slice(1), " ") || "console.assert"}`),
          (o.data.arguments = n.args.slice(1)));
      else return;
    vi(o, { input: n.args, level: n.level });
  };
}
function xk(e) {
  return function (n) {
    if (Ft() !== e) return;
    const { startTimestamp: o, endTimestamp: s } = n,
      u = n.xhr[No];
    if (!o || !s || !u) return;
    const { method: c, url: d, status_code: h, body: m } = u,
      _ = { method: c, url: d, status_code: h },
      y = { xhr: n.xhr, input: m, startTimestamp: o, endTimestamp: s },
      E = oy(h);
    vi({ category: "xhr", data: _, type: "http", level: E }, y);
  };
}
function Nk(e) {
  return function (n) {
    if (Ft() !== e) return;
    const { startTimestamp: o, endTimestamp: s } = n;
    if (
      s &&
      !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
    )
      if (n.error) {
        const u = n.fetchData,
          c = {
            data: n.error,
            input: n.args,
            startTimestamp: o,
            endTimestamp: s,
          };
        vi({ category: "fetch", data: u, level: "error", type: "http" }, c);
      } else {
        const u = n.response,
          c = { ...n.fetchData, status_code: u && u.status },
          d = {
            input: n.args,
            response: u,
            startTimestamp: o,
            endTimestamp: s,
          },
          h = oy(c.status_code);
        vi({ category: "fetch", data: c, type: "http", level: h }, d);
      }
  };
}
function Ak(e) {
  return function (n) {
    if (Ft() !== e) return;
    let o = n.from,
      s = n.to;
    const u = gf(Zt.location.href);
    let c = o ? gf(o) : void 0;
    const d = gf(s);
    ((!c || !c.path) && (c = u),
      u.protocol === d.protocol && u.host === d.host && (s = d.relative),
      u.protocol === c.protocol && u.host === c.host && (o = c.relative),
      vi({ category: "navigation", data: { from: o, to: s } }));
  };
}
function Pk(e) {
  return !!e && !!e.target;
}
const Lk = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  Mk = "BrowserApiErrors",
  Dk = (e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    };
    return {
      name: Mk,
      setupOnce() {
        (t.setTimeout && An(Zt, "setTimeout", Eg),
          t.setInterval && An(Zt, "setInterval", Eg),
          t.requestAnimationFrame && An(Zt, "requestAnimationFrame", Fk),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in Zt &&
            An(XMLHttpRequest.prototype, "send", Uk));
        const n = t.eventTarget;
        n && (Array.isArray(n) ? n : Lk).forEach(jk);
      },
    };
  },
  BP = Dk;
function Eg(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = zo(n, {
        mechanism: {
          data: { function: Vr(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function Fk(e) {
  return function (t) {
    return e.apply(this, [
      zo(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: Vr(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function Uk(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((s) => {
        s in n &&
          typeof n[s] == "function" &&
          An(n, s, function (u) {
            const c = {
                mechanism: {
                  data: { function: s, handler: Vr(u) },
                  handled: !1,
                  type: "instrument",
                },
              },
              d = Ld(u);
            return (d && (c.mechanism.data.handler = Vr(d)), zo(u, c));
          });
      }),
      e.apply(this, t)
    );
  };
}
function jk(e) {
  const n = Zt[e],
    o = n && n.prototype;
  !o ||
    !o.hasOwnProperty ||
    !o.hasOwnProperty("addEventListener") ||
    (An(o, "addEventListener", function (s) {
      return function (u, c, d) {
        try {
          Bk(c) &&
            (c.handleEvent = zo(c.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: Vr(c), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return s.apply(this, [
          u,
          zo(c, {
            mechanism: {
              data: { function: "addEventListener", handler: Vr(c), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          d,
        ]);
      };
    }),
    An(o, "removeEventListener", function (s) {
      return function (u, c, d) {
        try {
          const h = c.__sentry_wrapped__;
          h && s.call(this, u, h, d);
        } catch {}
        return s.call(this, u, c, d);
      };
    }));
}
function Bk(e) {
  return typeof e.handleEvent == "function";
}
const HP = () => ({
    name: "BrowserSession",
    setupOnce() {
      if (typeof Zt.document > "u") {
        Fo &&
          st.warn(
            "Using the `browserSessionIntegration` in non-browser environments is not supported.",
          );
        return;
      }
      (sg({ ignoreDuration: !0 }),
        ag(),
        zd(({ from: e, to: t }) => {
          e !== void 0 && e !== t && (sg({ ignoreDuration: !0 }), ag());
        }));
    },
  }),
  Hk = "GlobalHandlers",
  zk = (e = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: Hk,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        (t.onerror && ($k(n), Sg("onerror")),
          t.onunhandledrejection && (Wk(n), Sg("onunhandledrejection")));
      },
    };
  },
  zP = zk;
function $k(e) {
  GS((t) => {
    const { stackParser: n, attachStacktrace: o } = Sy();
    if (Ft() !== e || sy()) return;
    const { msg: s, url: u, line: c, column: d, error: h } = t,
      m = Xk(uy(n, h || s, void 0, o, !1), u, c, d);
    ((m.level = "error"),
      Q_(m, {
        originalException: h,
        mechanism: { handled: !1, type: "onerror" },
      }));
  });
}
function Wk(e) {
  XS((t) => {
    const { stackParser: n, attachStacktrace: o } = Sy();
    if (Ft() !== e || sy()) return;
    const s = Gk(t),
      u = j_(s) ? Vk(s) : uy(n, s, void 0, o, !0);
    ((u.level = "error"),
      Q_(u, {
        originalException: s,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      }));
  });
}
function Gk(e) {
  if (j_(e)) return e;
  try {
    if ("reason" in e) return e.reason;
    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function Vk(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function Xk(e, t, n, o) {
  const s = (e.exception = e.exception || {}),
    u = (s.values = s.values || []),
    c = (u[0] = u[0] || {}),
    d = (c.stacktrace = c.stacktrace || {}),
    h = (d.frames = d.frames || []),
    m = o,
    _ = n,
    y = $r(t) && t.length > 0 ? t : H_();
  return (
    h.length === 0 &&
      h.push({ colno: m, filename: y, function: Wi, in_app: !0, lineno: _ }),
    e
  );
}
function Sg(e) {
  Fo && st.log(`Global Handler attached: ${e}`);
}
function Sy() {
  const e = Ft();
  return (
    (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const $P = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
      if (!Zt.navigator && !Zt.location && !Zt.document) return;
      const t =
          (e.request && e.request.url) || (Zt.location && Zt.location.href),
        { referrer: n } = Zt.document || {},
        { userAgent: o } = Zt.navigator || {},
        s = {
          ...(e.request && e.request.headers),
          ...(n && { Referer: n }),
          ...(o && { "User-Agent": o }),
        },
        u = { ...e.request, ...(t && { url: t }), headers: s };
      e.request = u;
    },
  }),
  qk = "cause",
  Yk = 5,
  Kk = "LinkedErrors",
  Zk = (e = {}) => {
    const t = e.limit || Yk,
      n = e.key || qk;
    return {
      name: Kk,
      preprocessEvent(o, s, u) {
        const c = u.getOptions();
        q0(Ud, c.stackParser, c.maxValueLength, n, t, o, s);
      },
    };
  },
  WP = Zk;
function cd(e = {}) {
  if (!Zt.document) {
    Fo && st.error("Global document not defined in showReportDialog call");
    return;
  }
  const t = ar(),
    n = t.getClient(),
    o = n && n.getDsn();
  if (!o) {
    Fo && st.error("DSN not configured for showReportDialog call");
    return;
  }
  if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
    const d = J_();
    d && (e.eventId = d);
  }
  const s = Zt.document.createElement("script");
  ((s.async = !0),
    (s.crossOrigin = "anonymous"),
    (s.src = w0(o, e)),
    e.onLoad && (s.onload = e.onLoad));
  const { onClose: u } = e;
  if (u) {
    const d = (h) => {
      if (h.data === "__sentry_reportdialog_closed__")
        try {
          u();
        } finally {
          Zt.removeEventListener("message", d);
        }
    };
    Zt.addEventListener("message", d);
  }
  const c = Zt.document.head || Zt.document.body;
  c
    ? c.appendChild(s)
    : Fo &&
      st.error("Not injecting report dialog. No injection point found in HTML");
}
const bt = gt,
  $d = "sentryReplaySession",
  Qk = "replay_event",
  Wd = "Unable to send Replay",
  Jk = 3e5,
  eR = 9e5,
  tR = 5e3,
  nR = 5500,
  rR = 6e4,
  iR = 5e3,
  oR = 3,
  Tg = 15e4,
  wu = 5e3,
  sR = 3e3,
  aR = 300,
  Gd = 2e7,
  uR = 4999,
  lR = 15e3,
  wg = 36e5;
function fd(e, t) {
  return e ?? t();
}
function Xs(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
var nn;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(nn || (nn = {}));
function cR(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Us(e) {
  const t = Xs([e, "optionalAccess", (n) => n.host]);
  return Xs([t, "optionalAccess", (n) => n.shadowRoot]) === e;
}
function js(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function fR(e) {
  return (
    e.includes(" background-clip: text;") &&
      !e.includes(" -webkit-background-clip: text;") &&
      (e = e.replace(
        /\sbackground-clip:\s*text;/g,
        " -webkit-background-clip: text; background-clip: text;",
      )),
    e
  );
}
function dR(e) {
  const { cssText: t } = e;
  if (t.split('"').length < 3) return t;
  const n = ["@import", `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ""
      ? n.push("layer")
      : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
  );
}
function Wu(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? fR(Array.from(t, Ty).join("")) : null;
  } catch {
    return null;
  }
}
function pR(e) {
  let t = "";
  for (let n = 0; n < e.style.length; n++) {
    const o = e.style,
      s = o[n],
      u = o.getPropertyPriority(s);
    t += `${s}:${o.getPropertyValue(s)}${u ? " !important" : ""};`;
  }
  return `${e.selectorText} { ${t} }`;
}
function Ty(e) {
  let t;
  if (mR(e))
    try {
      t = Wu(e.styleSheet) || dR(e);
    } catch {}
  else if (gR(e)) {
    let n = e.cssText;
    const o = e.selectorText.includes(":"),
      s = typeof e.style.all == "string" && e.style.all;
    if ((s && (n = pR(e)), o && (n = hR(n)), o || s)) return n;
  }
  return t || e.cssText;
}
function hR(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2");
}
function mR(e) {
  return "styleSheet" in e;
}
function gR(e) {
  return "selectorText" in e;
}
class wy {
  constructor() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
  getId(t) {
    if (!t) return -1;
    const n = Xs([
      this,
      "access",
      (o) => o.getMeta,
      "call",
      (o) => o(t),
      "optionalAccess",
      (o) => o.id,
    ]);
    return fd(n, () => -1);
  }
  getNode(t) {
    return this.idNodeMap.get(t) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(t) {
    return this.nodeMetaMap.get(t) || null;
  }
  removeNodeFromMap(t) {
    const n = this.getId(t);
    (this.idNodeMap.delete(n),
      t.childNodes && t.childNodes.forEach((o) => this.removeNodeFromMap(o)));
  }
  has(t) {
    return this.idNodeMap.has(t);
  }
  hasNode(t) {
    return this.nodeMetaMap.has(t);
  }
  add(t, n) {
    const o = n.id;
    (this.idNodeMap.set(o, t), this.nodeMetaMap.set(t, n));
  }
  replace(t, n) {
    const o = this.getNode(t);
    if (o) {
      const s = this.nodeMetaMap.get(o);
      s && this.nodeMetaMap.set(n, s);
    }
    this.idNodeMap.set(t, n);
  }
  reset() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
}
function _R() {
  return new wy();
}
function Sl({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    t === "OPTION" && (t = "SELECT"),
    !!(
      e[t.toLowerCase()] ||
      (n && e[n]) ||
      n === "password" ||
      (t === "INPUT" && !n && e.text)
    )
  );
}
function qs({ isMasked: e, element: t, value: n, maskInputFn: o }) {
  let s = n || "";
  return e ? (o && (s = o(s, t)), "*".repeat(s.length)) : s;
}
function Wo(e) {
  return e.toLowerCase();
}
function dd(e) {
  return e.toUpperCase();
}
const kg = "__rrweb_original__";
function yR(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const n = 50;
  for (let o = 0; o < e.width; o += n)
    for (let s = 0; s < e.height; s += n) {
      const u = t.getImageData,
        c = kg in u ? u[kg] : u;
      if (
        new Uint32Array(
          c.call(t, o, s, Math.min(n, e.width - o), Math.min(n, e.height - s))
            .data.buffer,
        ).some((h) => h !== 0)
      )
        return !1;
    }
  return !0;
}
function Vd(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? Wo(t) : null;
}
function Gu(e, t, n) {
  return t === "INPUT" && (n === "radio" || n === "checkbox")
    ? e.getAttribute("value") || ""
    : e.value;
}
function ky(e, t) {
  let n;
  try {
    n = new URL(
      e,
      fd(t, () => window.location.href),
    );
  } catch {
    return null;
  }
  const o = /\.([0-9a-z]+)(?:$)/i,
    s = n.pathname.match(o);
  return fd(Xs([s, "optionalAccess", (u) => u[1]]), () => null);
}
const Rg = {};
function Ry(e) {
  const t = Rg[e];
  if (t) return t;
  const n = window.document;
  let o = window[e];
  if (n && typeof n.createElement == "function")
    try {
      const s = n.createElement("iframe");
      ((s.hidden = !0), n.head.appendChild(s));
      const u = s.contentWindow;
      (u && u[e] && (o = u[e]), n.head.removeChild(s));
    } catch {}
  return (Rg[e] = o.bind(window));
}
function pd(...e) {
  return Ry("setTimeout")(...e);
}
function Iy(...e) {
  return Ry("clearTimeout")(...e);
}
function Cy(e) {
  try {
    return e.contentDocument;
  } catch {}
}
let vR = 1;
const ER = new RegExp("[^a-z0-9-_:]"),
  Ys = -2;
function Xd() {
  return vR++;
}
function SR(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = Wo(e.tagName);
  return ER.test(t) ? "div" : t;
}
function TR(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let Co, Ig;
const wR = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  kR = /^(?:[a-z+]+:)?\/\//i,
  RR = /^www\..*/i,
  IR = /^(data:)([^,]*),(.*)/i;
function Vu(e, t) {
  return (e || "").replace(wR, (n, o, s, u, c, d) => {
    const h = s || c || d,
      m = o || u || "";
    if (!h) return n;
    if (kR.test(h) || RR.test(h)) return `url(${m}${h}${m})`;
    if (IR.test(h)) return `url(${m}${h}${m})`;
    if (h[0] === "/") return `url(${m}${TR(t) + h}${m})`;
    const _ = t.split("/"),
      y = h.split("/");
    _.pop();
    for (const E of y) E !== "." && (E === ".." ? _.pop() : _.push(E));
    return `url(${m}${_.join("/")}${m})`;
  });
}
const CR = /^[^ \t\n\r\u000c]+/,
  OR = /^[, \t\n\r\u000c]+/;
function bR(e, t) {
  if (t.trim() === "") return t;
  let n = 0;
  function o(u) {
    let c;
    const d = u.exec(t.substring(n));
    return d ? ((c = d[0]), (n += c.length), c) : "";
  }
  const s = [];
  for (; o(OR), !(n >= t.length); ) {
    let u = o(CR);
    if (u.slice(-1) === ",")
      ((u = Ao(e, u.substring(0, u.length - 1))), s.push(u));
    else {
      let c = "";
      u = Ao(e, u);
      let d = !1;
      for (;;) {
        const h = t.charAt(n);
        if (h === "") {
          s.push((u + c).trim());
          break;
        } else if (d) h === ")" && (d = !1);
        else if (h === ",") {
          ((n += 1), s.push((u + c).trim()));
          break;
        } else h === "(" && (d = !0);
        ((c += h), (n += 1));
      }
    }
  }
  return s.join(", ");
}
const Cg = new WeakMap();
function Ao(e, t) {
  return !t || t.trim() === "" ? t : Tl(e, t);
}
function xR(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function Tl(e, t) {
  let n = Cg.get(e);
  if ((n || ((n = e.createElement("a")), Cg.set(e, n)), !t)) t = "";
  else if (t.startsWith("blob:") || t.startsWith("data:")) return t;
  return (n.setAttribute("href", t), n.href);
}
function Oy(e, t, n, o, s, u) {
  return (
    o &&
    (n === "src" ||
    (n === "href" && !(t === "use" && o[0] === "#")) ||
    (n === "xlink:href" && o[0] !== "#") ||
    (n === "background" && (t === "table" || t === "td" || t === "th"))
      ? Ao(e, o)
      : n === "srcset"
        ? bR(e, o)
        : n === "style"
          ? Vu(o, Tl(e))
          : t === "object" && n === "data"
            ? Ao(e, o)
            : typeof u == "function"
              ? u(n, o, s)
              : o)
  );
}
function by(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
function NR(e, t, n, o) {
  try {
    if (o && e.matches(o)) return !1;
    if (typeof t == "string") {
      if (e.classList.contains(t)) return !0;
    } else
      for (let s = e.classList.length; s--; ) {
        const u = e.classList[s];
        if (t.test(u)) return !0;
      }
    if (n) return e.matches(n);
  } catch {}
  return !1;
}
function AR(e, t) {
  for (let n = e.classList.length; n--; ) {
    const o = e.classList[n];
    if (t.test(o)) return !0;
  }
  return !1;
}
function zi(e, t, n = 1 / 0, o = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || o > n
    ? -1
    : t(e)
      ? o
      : zi(e.parentNode, t, n, o + 1);
}
function Po(e, t) {
  return (n) => {
    const o = n;
    if (o === null) return !1;
    try {
      if (e) {
        if (typeof e == "string") {
          if (o.matches(`.${e}`)) return !0;
        } else if (AR(o, e)) return !0;
      }
      return !!(t && o.matches(t));
    } catch {
      return !1;
    }
  };
}
function Go(e, t, n, o, s, u) {
  try {
    const c = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (c === null) return !1;
    if (c.tagName === "INPUT") {
      const m = c.getAttribute("autocomplete");
      if (
        [
          "current-password",
          "new-password",
          "cc-number",
          "cc-exp",
          "cc-exp-month",
          "cc-exp-year",
          "cc-csc",
        ].includes(m)
      )
        return !0;
    }
    let d = -1,
      h = -1;
    if (u) {
      if (((h = zi(c, Po(o, s))), h < 0)) return !0;
      d = zi(c, Po(t, n), h >= 0 ? h : 1 / 0);
    } else {
      if (((d = zi(c, Po(t, n))), d < 0)) return !1;
      h = zi(c, Po(o, s), d >= 0 ? d : 1 / 0);
    }
    return d >= 0 ? (h >= 0 ? d <= h : !0) : h >= 0 ? !1 : !!u;
  } catch {}
  return !!u;
}
function PR(e, t, n) {
  const o = e.contentWindow;
  if (!o) return;
  let s = !1,
    u;
  try {
    u = o.document.readyState;
  } catch {
    return;
  }
  if (u !== "complete") {
    const d = pd(() => {
      s || (t(), (s = !0));
    }, n);
    e.addEventListener("load", () => {
      (Iy(d), (s = !0), t());
    });
    return;
  }
  const c = "about:blank";
  if (o.location.href !== c || e.src === c || e.src === "")
    return (pd(t, 0), e.addEventListener("load", t));
  e.addEventListener("load", t);
}
function LR(e, t, n) {
  let o = !1,
    s;
  try {
    s = e.sheet;
  } catch {
    return;
  }
  if (s) return;
  const u = pd(() => {
    o || (t(), (o = !0));
  }, n);
  e.addEventListener("load", () => {
    (Iy(u), (o = !0), t());
  });
}
function MR(e, t) {
  const {
      doc: n,
      mirror: o,
      blockClass: s,
      blockSelector: u,
      unblockSelector: c,
      maskAllText: d,
      maskAttributeFn: h,
      maskTextClass: m,
      unmaskTextClass: _,
      maskTextSelector: y,
      unmaskTextSelector: E,
      inlineStylesheet: N,
      maskInputOptions: P = {},
      maskTextFn: j,
      maskInputFn: W,
      dataURLOptions: z = {},
      inlineImages: H,
      recordCanvas: ie,
      keepIframeSrcFn: U,
      newlyAddedElement: C = !1,
    } = t,
    q = DR(n, o);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? { type: nn.Document, childNodes: [], compatMode: e.compatMode }
        : { type: nn.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: nn.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: q,
      };
    case e.ELEMENT_NODE:
      return UR(e, {
        doc: n,
        blockClass: s,
        blockSelector: u,
        unblockSelector: c,
        inlineStylesheet: N,
        maskAttributeFn: h,
        maskInputOptions: P,
        maskInputFn: W,
        dataURLOptions: z,
        inlineImages: H,
        recordCanvas: ie,
        keepIframeSrcFn: U,
        newlyAddedElement: C,
        rootId: q,
        maskTextClass: m,
        unmaskTextClass: _,
        maskTextSelector: y,
        unmaskTextSelector: E,
      });
    case e.TEXT_NODE:
      return FR(e, {
        doc: n,
        maskAllText: d,
        maskTextClass: m,
        unmaskTextClass: _,
        maskTextSelector: y,
        unmaskTextSelector: E,
        maskTextFn: j,
        maskInputOptions: P,
        maskInputFn: W,
        rootId: q,
      });
    case e.CDATA_SECTION_NODE:
      return { type: nn.CDATA, textContent: "", rootId: q };
    case e.COMMENT_NODE:
      return { type: nn.Comment, textContent: e.textContent || "", rootId: q };
    default:
      return !1;
  }
}
function DR(e, t) {
  if (!t.hasNode(e)) return;
  const n = t.getId(e);
  return n === 1 ? void 0 : n;
}
function FR(e, t) {
  const {
      maskAllText: n,
      maskTextClass: o,
      unmaskTextClass: s,
      maskTextSelector: u,
      unmaskTextSelector: c,
      maskTextFn: d,
      maskInputOptions: h,
      maskInputFn: m,
      rootId: _,
    } = t,
    y = e.parentNode && e.parentNode.tagName;
  let E = e.textContent;
  const N = y === "STYLE" ? !0 : void 0,
    P = y === "SCRIPT" ? !0 : void 0,
    j = y === "TEXTAREA" ? !0 : void 0;
  if (N && E) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (Xs([
          e,
          "access",
          (z) => z.parentNode,
          "access",
          (z) => z.sheet,
          "optionalAccess",
          (z) => z.cssRules,
        ]) &&
          (E = Wu(e.parentNode.sheet)));
    } catch (z) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${z}`,
        e,
      );
    }
    E = Vu(E, Tl(t.doc));
  }
  P && (E = "SCRIPT_PLACEHOLDER");
  const W = Go(e, o, u, s, c, n);
  if (
    (!N &&
      !P &&
      !j &&
      E &&
      W &&
      (E = d ? d(E, e.parentElement) : E.replace(/[\S]/g, "*")),
    j &&
      E &&
      (h.textarea || W) &&
      (E = m ? m(E, e.parentNode) : E.replace(/[\S]/g, "*")),
    y === "OPTION" && E)
  ) {
    const z = Sl({ type: null, tagName: y, maskInputOptions: h });
    E = qs({
      isMasked: Go(e, o, u, s, c, z),
      element: e,
      value: E,
      maskInputFn: m,
    });
  }
  return { type: nn.Text, textContent: E || "", isStyle: N, rootId: _ };
}
function UR(e, t) {
  const {
      doc: n,
      blockClass: o,
      blockSelector: s,
      unblockSelector: u,
      inlineStylesheet: c,
      maskInputOptions: d = {},
      maskAttributeFn: h,
      maskInputFn: m,
      dataURLOptions: _ = {},
      inlineImages: y,
      recordCanvas: E,
      keepIframeSrcFn: N,
      newlyAddedElement: P = !1,
      rootId: j,
      maskTextClass: W,
      unmaskTextClass: z,
      maskTextSelector: H,
      unmaskTextSelector: ie,
    } = t,
    U = NR(e, o, s, u),
    C = SR(e);
  let q = {};
  const ae = e.attributes.length;
  for (let ne = 0; ne < ae; ne++) {
    const ve = e.attributes[ne];
    ve.name &&
      !by(C, ve.name, ve.value) &&
      (q[ve.name] = Oy(n, C, Wo(ve.name), ve.value, e, h));
  }
  if (C === "link" && c) {
    const ne = Array.from(n.styleSheets).find((Ge) => Ge.href === e.href);
    let ve = null;
    (ne && (ve = Wu(ne)),
      ve &&
        ((q.rel = null),
        (q.href = null),
        (q.crossorigin = null),
        (q._cssText = Vu(ve, ne.href))));
  }
  if (
    C === "style" &&
    e.sheet &&
    !(e.innerText || e.textContent || "").trim().length
  ) {
    const ne = Wu(e.sheet);
    ne && (q._cssText = Vu(ne, Tl(n)));
  }
  if (C === "input" || C === "textarea" || C === "select" || C === "option") {
    const ne = e,
      ve = Vd(ne),
      Ge = Gu(ne, dd(C), ve),
      Ke = ne.checked;
    if (ve !== "submit" && ve !== "button" && Ge) {
      const nt = Go(
        ne,
        W,
        H,
        z,
        ie,
        Sl({ type: ve, tagName: dd(C), maskInputOptions: d }),
      );
      q.value = qs({ isMasked: nt, element: ne, value: Ge, maskInputFn: m });
    }
    Ke && (q.checked = Ke);
  }
  if (
    (C === "option" &&
      (e.selected && !d.select ? (q.selected = !0) : delete q.selected),
    C === "canvas" && E)
  ) {
    if (e.__context === "2d")
      yR(e) || (q.rr_dataURL = e.toDataURL(_.type, _.quality));
    else if (!("__context" in e)) {
      const ne = e.toDataURL(_.type, _.quality),
        ve = n.createElement("canvas");
      ((ve.width = e.width), (ve.height = e.height));
      const Ge = ve.toDataURL(_.type, _.quality);
      ne !== Ge && (q.rr_dataURL = ne);
    }
  }
  if (C === "img" && y) {
    Co || ((Co = n.createElement("canvas")), (Ig = Co.getContext("2d")));
    const ne = e,
      ve = ne.currentSrc || ne.getAttribute("src") || "<unknown-src>",
      Ge = ne.crossOrigin,
      Ke = () => {
        ne.removeEventListener("load", Ke);
        try {
          ((Co.width = ne.naturalWidth),
            (Co.height = ne.naturalHeight),
            Ig.drawImage(ne, 0, 0),
            (q.rr_dataURL = Co.toDataURL(_.type, _.quality)));
        } catch (nt) {
          if (ne.crossOrigin !== "anonymous") {
            ((ne.crossOrigin = "anonymous"),
              ne.complete && ne.naturalWidth !== 0
                ? Ke()
                : ne.addEventListener("load", Ke));
            return;
          } else console.warn(`Cannot inline img src=${ve}! Error: ${nt}`);
        }
        ne.crossOrigin === "anonymous" &&
          (Ge ? (q.crossOrigin = Ge) : ne.removeAttribute("crossorigin"));
      };
    ne.complete && ne.naturalWidth !== 0
      ? Ke()
      : ne.addEventListener("load", Ke);
  }
  if (
    ((C === "audio" || C === "video") &&
      ((q.rr_mediaState = e.paused ? "paused" : "played"),
      (q.rr_mediaCurrentTime = e.currentTime)),
    P ||
      (e.scrollLeft && (q.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (q.rr_scrollTop = e.scrollTop)),
    U)
  ) {
    const { width: ne, height: ve } = e.getBoundingClientRect();
    q = { class: q.class, rr_width: `${ne}px`, rr_height: `${ve}px` };
  }
  C === "iframe" &&
    !N(q.src) &&
    (!U && !Cy(e) && (q.rr_src = q.src), delete q.src);
  let ye;
  try {
    customElements.get(C) && (ye = !0);
  } catch {}
  return {
    type: nn.Element,
    tagName: C,
    attributes: q,
    childNodes: [],
    isSVG: xR(e) || void 0,
    needBlock: U,
    rootId: j,
    isCustom: ye,
  };
}
function Ot(e) {
  return e == null ? "" : e.toLowerCase();
}
function jR(e, t) {
  if (t.comment && e.type === nn.Comment) return !0;
  if (e.type === nn.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload")) ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          ky(e.attributes.href) === "js"))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (Ot(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            Ot(e.attributes.name) === "application-name" ||
            Ot(e.attributes.rel) === "icon" ||
            Ot(e.attributes.rel) === "apple-touch-icon" ||
            Ot(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        Ot(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (Ot(e.attributes.property).match(/^(og|twitter|fb):/) ||
          Ot(e.attributes.name).match(/^(og|twitter):/) ||
          Ot(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (Ot(e.attributes.name) === "robots" ||
          Ot(e.attributes.name) === "googlebot" ||
          Ot(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (Ot(e.attributes.name) === "author" ||
          Ot(e.attributes.name) === "generator" ||
          Ot(e.attributes.name) === "framework" ||
          Ot(e.attributes.name) === "publisher" ||
          Ot(e.attributes.name) === "progid" ||
          Ot(e.attributes.property).match(/^article:/) ||
          Ot(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (Ot(e.attributes.name) === "google-site-verification" ||
          Ot(e.attributes.name) === "yandex-verification" ||
          Ot(e.attributes.name) === "csrf-token" ||
          Ot(e.attributes.name) === "p:domain_verify" ||
          Ot(e.attributes.name) === "verify-v1" ||
          Ot(e.attributes.name) === "verification" ||
          Ot(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function Lo(e, t) {
  const {
    doc: n,
    mirror: o,
    blockClass: s,
    blockSelector: u,
    unblockSelector: c,
    maskAllText: d,
    maskTextClass: h,
    unmaskTextClass: m,
    maskTextSelector: _,
    unmaskTextSelector: y,
    skipChild: E = !1,
    inlineStylesheet: N = !0,
    maskInputOptions: P = {},
    maskAttributeFn: j,
    maskTextFn: W,
    maskInputFn: z,
    slimDOMOptions: H,
    dataURLOptions: ie = {},
    inlineImages: U = !1,
    recordCanvas: C = !1,
    onSerialize: q,
    onIframeLoad: ae,
    iframeLoadTimeout: ye = 5e3,
    onStylesheetLoad: ne,
    stylesheetLoadTimeout: ve = 5e3,
    keepIframeSrcFn: Ge = () => !1,
    newlyAddedElement: Ke = !1,
  } = t;
  let { preserveWhiteSpace: nt = !0 } = t;
  const at = MR(e, {
    doc: n,
    mirror: o,
    blockClass: s,
    blockSelector: u,
    maskAllText: d,
    unblockSelector: c,
    maskTextClass: h,
    unmaskTextClass: m,
    maskTextSelector: _,
    unmaskTextSelector: y,
    inlineStylesheet: N,
    maskInputOptions: P,
    maskAttributeFn: j,
    maskTextFn: W,
    maskInputFn: z,
    dataURLOptions: ie,
    inlineImages: U,
    recordCanvas: C,
    keepIframeSrcFn: Ge,
    newlyAddedElement: Ke,
  });
  if (!at) return (console.warn(e, "not serialized"), null);
  let xt;
  o.hasNode(e)
    ? (xt = o.getId(e))
    : jR(at, H) ||
        (!nt &&
          at.type === nn.Text &&
          !at.isStyle &&
          !at.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? (xt = Ys)
      : (xt = Xd());
  const be = Object.assign(at, { id: xt });
  if ((o.add(e, be), xt === Ys)) return null;
  q && q(e);
  let Xe = !E;
  if (be.type === nn.Element) {
    ((Xe = Xe && !be.needBlock), delete be.needBlock);
    const Y = e.shadowRoot;
    Y && js(Y) && (be.isShadowHost = !0);
  }
  if ((be.type === nn.Document || be.type === nn.Element) && Xe) {
    H.headWhitespace &&
      be.type === nn.Element &&
      be.tagName === "head" &&
      (nt = !1);
    const Y = {
      doc: n,
      mirror: o,
      blockClass: s,
      blockSelector: u,
      maskAllText: d,
      unblockSelector: c,
      maskTextClass: h,
      unmaskTextClass: m,
      maskTextSelector: _,
      unmaskTextSelector: y,
      skipChild: E,
      inlineStylesheet: N,
      maskInputOptions: P,
      maskAttributeFn: j,
      maskTextFn: W,
      maskInputFn: z,
      slimDOMOptions: H,
      dataURLOptions: ie,
      inlineImages: U,
      recordCanvas: C,
      preserveWhiteSpace: nt,
      onSerialize: q,
      onIframeLoad: ae,
      iframeLoadTimeout: ye,
      onStylesheetLoad: ne,
      stylesheetLoadTimeout: ve,
      keepIframeSrcFn: Ge,
    };
    for (const oe of Array.from(e.childNodes)) {
      const re = Lo(oe, Y);
      re && be.childNodes.push(re);
    }
    if (cR(e) && e.shadowRoot)
      for (const oe of Array.from(e.shadowRoot.childNodes)) {
        const re = Lo(oe, Y);
        re && (js(e.shadowRoot) && (re.isShadow = !0), be.childNodes.push(re));
      }
  }
  return (
    e.parentNode && Us(e.parentNode) && js(e.parentNode) && (be.isShadow = !0),
    be.type === nn.Element &&
      be.tagName === "iframe" &&
      PR(
        e,
        () => {
          const Y = Cy(e);
          if (Y && ae) {
            const oe = Lo(Y, {
              doc: Y,
              mirror: o,
              blockClass: s,
              blockSelector: u,
              unblockSelector: c,
              maskAllText: d,
              maskTextClass: h,
              unmaskTextClass: m,
              maskTextSelector: _,
              unmaskTextSelector: y,
              skipChild: !1,
              inlineStylesheet: N,
              maskInputOptions: P,
              maskAttributeFn: j,
              maskTextFn: W,
              maskInputFn: z,
              slimDOMOptions: H,
              dataURLOptions: ie,
              inlineImages: U,
              recordCanvas: C,
              preserveWhiteSpace: nt,
              onSerialize: q,
              onIframeLoad: ae,
              iframeLoadTimeout: ye,
              onStylesheetLoad: ne,
              stylesheetLoadTimeout: ve,
              keepIframeSrcFn: Ge,
            });
            oe && ae(e, oe);
          }
        },
        ye,
      ),
    be.type === nn.Element &&
      be.tagName === "link" &&
      typeof be.attributes.rel == "string" &&
      (be.attributes.rel === "stylesheet" ||
        (be.attributes.rel === "preload" &&
          typeof be.attributes.href == "string" &&
          ky(be.attributes.href) === "css")) &&
      LR(
        e,
        () => {
          if (ne) {
            const Y = Lo(e, {
              doc: n,
              mirror: o,
              blockClass: s,
              blockSelector: u,
              unblockSelector: c,
              maskAllText: d,
              maskTextClass: h,
              unmaskTextClass: m,
              maskTextSelector: _,
              unmaskTextSelector: y,
              skipChild: !1,
              inlineStylesheet: N,
              maskInputOptions: P,
              maskAttributeFn: j,
              maskTextFn: W,
              maskInputFn: z,
              slimDOMOptions: H,
              dataURLOptions: ie,
              inlineImages: U,
              recordCanvas: C,
              preserveWhiteSpace: nt,
              onSerialize: q,
              onIframeLoad: ae,
              iframeLoadTimeout: ye,
              onStylesheetLoad: ne,
              stylesheetLoadTimeout: ve,
              keepIframeSrcFn: Ge,
            });
            Y && ne(e, Y);
          }
        },
        ve,
      ),
    be
  );
}
function BR(e, t) {
  const {
    mirror: n = new wy(),
    blockClass: o = "rr-block",
    blockSelector: s = null,
    unblockSelector: u = null,
    maskAllText: c = !1,
    maskTextClass: d = "rr-mask",
    unmaskTextClass: h = null,
    maskTextSelector: m = null,
    unmaskTextSelector: _ = null,
    inlineStylesheet: y = !0,
    inlineImages: E = !1,
    recordCanvas: N = !1,
    maskAllInputs: P = !1,
    maskAttributeFn: j,
    maskTextFn: W,
    maskInputFn: z,
    slimDOM: H = !1,
    dataURLOptions: ie,
    preserveWhiteSpace: U,
    onSerialize: C,
    onIframeLoad: q,
    iframeLoadTimeout: ae,
    onStylesheetLoad: ye,
    stylesheetLoadTimeout: ne,
    keepIframeSrcFn: ve = () => !1,
  } = t || {};
  return Lo(e, {
    doc: e,
    mirror: n,
    blockClass: o,
    blockSelector: s,
    unblockSelector: u,
    maskAllText: c,
    maskTextClass: d,
    unmaskTextClass: h,
    maskTextSelector: m,
    unmaskTextSelector: _,
    skipChild: !1,
    inlineStylesheet: y,
    maskInputOptions:
      P === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : P === !1
          ? {}
          : P,
    maskAttributeFn: j,
    maskTextFn: W,
    maskInputFn: z,
    slimDOMOptions:
      H === !0 || H === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: H === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : H === !1
          ? {}
          : H,
    dataURLOptions: ie,
    inlineImages: E,
    recordCanvas: N,
    preserveWhiteSpace: U,
    onSerialize: C,
    onIframeLoad: q,
    iframeLoadTimeout: ae,
    onStylesheetLoad: ye,
    stylesheetLoadTimeout: ne,
    keepIframeSrcFn: ve,
    newlyAddedElement: !1,
  });
}
function di(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
function Sn(e, t, n = document) {
  const o = { capture: !0, passive: !0 };
  return (n.addEventListener(e, t, o), () => n.removeEventListener(e, t, o));
}
const xo = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Og = {
  map: {},
  getId() {
    return (console.error(xo), -1);
  },
  getNode() {
    return (console.error(xo), null);
  },
  removeNodeFromMap() {
    console.error(xo);
  },
  has() {
    return (console.error(xo), !1);
  },
  reset() {
    console.error(xo);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (Og = new Proxy(Og, {
    get(e, t, n) {
      return (t === "map" && console.error(xo), Reflect.get(e, t, n));
    },
  }));
function Ks(e, t, n = {}) {
  let o = null,
    s = 0;
  return function (...u) {
    const c = Date.now();
    !s && n.leading === !1 && (s = c);
    const d = t - (c - s),
      h = this;
    d <= 0 || d > t
      ? (o && (XR(o), (o = null)), (s = c), e.apply(h, u))
      : !o &&
        n.trailing !== !1 &&
        (o = wl(() => {
          ((s = n.leading === !1 ? 0 : Date.now()), (o = null), e.apply(h, u));
        }, d));
  };
}
function xy(e, t, n, o, s = window) {
  const u = s.Object.getOwnPropertyDescriptor(e, t);
  return (
    s.Object.defineProperty(
      e,
      t,
      o
        ? n
        : {
            set(c) {
              (wl(() => {
                n.set.call(this, c);
              }, 0),
                u && u.set && u.set.call(this, c));
            },
          },
    ),
    () => xy(e, t, u || {}, !0)
  );
}
function qd(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const o = e[t],
      s = n(o);
    return (
      typeof s == "function" &&
        ((s.prototype = s.prototype || {}),
        Object.defineProperties(s, {
          __rrweb_original__: { enumerable: !1, value: o },
        })),
      (e[t] = s),
      () => {
        e[t] = o;
      }
    );
  } catch {
    return () => {};
  }
}
let Xu = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (Xu = () => new Date().getTime());
function Ny(e) {
  const t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : e.pageXOffset !== void 0
        ? e.pageXOffset
        : di([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollLeft,
          ]) ||
          di([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          di([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          0,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : e.pageYOffset !== void 0
        ? e.pageYOffset
        : di([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollTop,
          ]) ||
          di([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          di([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          0,
  };
}
function Ay() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Py() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function Ly(e) {
  return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function Bn(e, t, n, o, s) {
  if (!e) return !1;
  const u = Ly(e);
  if (!u) return !1;
  const c = Po(t, n);
  if (!s) {
    const m = o && u.matches(o);
    return c(u) && !m;
  }
  const d = zi(u, c);
  let h = -1;
  return d < 0
    ? !1
    : (o && (h = zi(u, Po(null, o))), d > -1 && h < 0 ? !0 : d < h);
}
function HR(e, t) {
  return t.getId(e) !== -1;
}
function Tf(e, t) {
  return t.getId(e) === Ys;
}
function My(e, t) {
  if (Us(e)) return !1;
  const n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
        ? My(e.parentNode, t)
        : !0
    : !0;
}
function hd(e) {
  return !!e.changedTouches;
}
function zR(e = window) {
  ("NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      }));
}
function Dy(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function Fy(e, t) {
  return !!(
    e.nodeName === "LINK" &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute("rel") === "stylesheet" &&
    t.getMeta(e)
  );
}
function md(e) {
  return !!di([e, "optionalAccess", (t) => t.shadowRoot]);
}
class $R {
  constructor() {
    ((this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()));
  }
  getId(t) {
    return dw(this.styleIDMap.get(t), () => -1);
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, n) {
    if (this.has(t)) return this.getId(t);
    let o;
    return (
      n === void 0 ? (o = this.id++) : (o = n),
      this.styleIDMap.set(t, o),
      this.idStyleMap.set(o, t),
      o
    );
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    ((this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1));
  }
  generateId() {
    return this.id++;
  }
}
function Uy(e) {
  let t = null;
  return (
    di([
      e,
      "access",
      (n) => n.getRootNode,
      "optionalCall",
      (n) => n(),
      "optionalAccess",
      (n) => n.nodeType,
    ]) === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function WR(e) {
  let t = e,
    n;
  for (; (n = Uy(t)); ) t = n;
  return t;
}
function GR(e) {
  const t = e.ownerDocument;
  if (!t) return !1;
  const n = WR(e);
  return t.contains(n);
}
function jy(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || GR(e) : !1;
}
const bg = {};
function Yd(e) {
  const t = bg[e];
  if (t) return t;
  const n = window.document;
  let o = window[e];
  if (n && typeof n.createElement == "function")
    try {
      const s = n.createElement("iframe");
      ((s.hidden = !0), n.head.appendChild(s));
      const u = s.contentWindow;
      (u && u[e] && (o = u[e]), n.head.removeChild(s));
    } catch {}
  return (bg[e] = o.bind(window));
}
function VR(...e) {
  return Yd("requestAnimationFrame")(...e);
}
function wl(...e) {
  return Yd("setTimeout")(...e);
}
function XR(...e) {
  return Yd("clearTimeout")(...e);
}
var Ye = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(Ye || {}),
  Be = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(Be || {}),
  vn = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(vn || {}),
  Mr = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Mr || {}),
  xg;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(xg || (xg = {}));
var Ng;
(function (e) {
  ((e[(e.PLACEHOLDER = 0)] = "PLACEHOLDER"),
    (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
    (e[(e.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
    (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
    (e[(e.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
    (e[(e.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
    (e[(e.ENTITY_NODE = 6)] = "ENTITY_NODE"),
    (e[(e.PROCESSING_INSTRUCTION_NODE = 7)] = "PROCESSING_INSTRUCTION_NODE"),
    (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE"),
    (e[(e.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
    (e[(e.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
    (e[(e.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE"));
})(Ng || (Ng = {}));
function Kd(e) {
  try {
    return e.contentDocument;
  } catch {}
}
function qR(e) {
  try {
    return e.contentWindow;
  } catch {}
}
function YR(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
function Ag(e) {
  return "__ln" in e;
}
class KR {
  constructor() {
    ((this.length = 0), (this.head = null), (this.tail = null));
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let n = this.head;
    for (let o = 0; o < t; o++)
      n = YR([n, "optionalAccess", (s) => s.next]) || null;
    return n;
  }
  addNode(t) {
    const n = { value: t, previous: null, next: null };
    if (((t.__ln = n), t.previousSibling && Ag(t.previousSibling))) {
      const o = t.previousSibling.__ln.next;
      ((n.next = o),
        (n.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = n),
        o && (o.previous = n));
    } else if (
      t.nextSibling &&
      Ag(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const o = t.nextSibling.__ln.previous;
      ((n.previous = o),
        (n.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = n),
        o && (o.next = n));
    } else
      (this.head && (this.head.previous = n),
        (n.next = this.head),
        (this.head = n));
    (n.next === null && (this.tail = n), this.length++);
  }
  removeNode(t) {
    const n = t.__ln;
    this.head &&
      (n.previous
        ? ((n.previous.next = n.next),
          n.next ? (n.next.previous = n.previous) : (this.tail = n.previous))
        : ((this.head = n.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const Pg = (e, t) => `${e}@${t}`;
class ZR {
  constructor() {
    ((this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.attributeMap = new WeakMap()),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        (t.forEach(this.processMutation), this.emit());
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          n = new Set(),
          o = new KR(),
          s = (h) => {
            let m = h,
              _ = Ys;
            for (; _ === Ys; )
              ((m = m && m.nextSibling), (_ = m && this.mirror.getId(m)));
            return _;
          },
          u = (h) => {
            if (!h.parentNode || !jy(h)) return;
            const m = Us(h.parentNode)
                ? this.mirror.getId(Uy(h))
                : this.mirror.getId(h.parentNode),
              _ = s(h);
            if (m === -1 || _ === -1) return o.addNode(h);
            const y = Lo(h, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (E) => {
                (Dy(E, this.mirror) &&
                  !Bn(
                    E,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) &&
                  this.iframeManager.addIframe(E),
                  Fy(E, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(E),
                  md(h) &&
                    this.shadowDomManager.addShadowRoot(
                      h.shadowRoot,
                      this.doc,
                    ));
              },
              onIframeLoad: (E, N) => {
                Bn(
                  E,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                  (this.iframeManager.attachIframe(E, N),
                  E.contentWindow &&
                    this.canvasManager.addWindow(E.contentWindow),
                  this.shadowDomManager.observeAttachShadow(E));
              },
              onStylesheetLoad: (E, N) => {
                this.stylesheetManager.attachLinkElement(E, N);
              },
            });
            y && (t.push({ parentId: m, nextId: _, node: y }), n.add(y.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const h of this.movedSet)
          (Lg(this.removes, h, this.mirror) &&
            !this.movedSet.has(h.parentNode)) ||
            u(h);
        for (const h of this.addedSet)
          (!Mg(this.droppedSet, h) && !Lg(this.removes, h, this.mirror)) ||
          Mg(this.movedSet, h)
            ? u(h)
            : this.droppedSet.add(h);
        let c = null;
        for (; o.length; ) {
          let h = null;
          if (c) {
            const m = this.mirror.getId(c.value.parentNode),
              _ = s(c.value);
            m !== -1 && _ !== -1 && (h = c);
          }
          if (!h) {
            let m = o.tail;
            for (; m; ) {
              const _ = m;
              if (((m = m.previous), _)) {
                const y = this.mirror.getId(_.value.parentNode);
                if (s(_.value) === -1) continue;
                if (y !== -1) {
                  h = _;
                  break;
                } else {
                  const N = _.value;
                  if (
                    N.parentNode &&
                    N.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const P = N.parentNode.host;
                    if (this.mirror.getId(P) !== -1) {
                      h = _;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!h) {
            for (; o.head; ) o.removeNode(o.head.value);
            break;
          }
          ((c = h.previous), o.removeNode(h.value), u(h.value));
        }
        const d = {
          texts: this.texts
            .map((h) => ({ id: this.mirror.getId(h.node), value: h.value }))
            .filter((h) => !n.has(h.id))
            .filter((h) => this.mirror.has(h.id)),
          attributes: this.attributes
            .map((h) => {
              const { attributes: m } = h;
              if (typeof m.style == "string") {
                const _ = JSON.stringify(h.styleDiff),
                  y = JSON.stringify(h._unchangedStyles);
                _.length < m.style.length &&
                  (_ + y).split("var(").length ===
                    m.style.split("var(").length &&
                  (m.style = h.styleDiff);
              }
              return { id: this.mirror.getId(h.node), attributes: m };
            })
            .filter((h) => !n.has(h.id))
            .filter((h) => this.mirror.has(h.id)),
          removes: this.removes,
          adds: t,
        };
        (!d.texts.length &&
          !d.attributes.length &&
          !d.removes.length &&
          !d.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(d));
      }),
      (this.processMutation = (t) => {
        if (!Tf(t.target, this.mirror))
          switch (t.type) {
            case "characterData": {
              const n = t.target.textContent;
              !Bn(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) &&
                n !== t.oldValue &&
                this.texts.push({
                  value:
                    Go(
                      t.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && n
                      ? this.maskTextFn
                        ? this.maskTextFn(n, Ly(t.target))
                        : n.replace(/[\S]/g, "*")
                      : n,
                  node: t.target,
                });
              break;
            }
            case "attributes": {
              const n = t.target;
              let o = t.attributeName,
                s = t.target.getAttribute(o);
              if (o === "value") {
                const c = Vd(n),
                  d = n.tagName;
                s = Gu(n, d, c);
                const h = Sl({
                    maskInputOptions: this.maskInputOptions,
                    tagName: d,
                    type: c,
                  }),
                  m = Go(
                    t.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    h,
                  );
                s = qs({
                  isMasked: m,
                  element: n,
                  value: s,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                Bn(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                s === t.oldValue
              )
                return;
              let u = this.attributeMap.get(t.target);
              if (
                n.tagName === "IFRAME" &&
                o === "src" &&
                !this.keepIframeSrcFn(s)
              )
                if (!Kd(n)) o = "rr_src";
                else return;
              if (
                (u ||
                  ((u = {
                    node: t.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(u),
                  this.attributeMap.set(t.target, u)),
                o === "type" &&
                  n.tagName === "INPUT" &&
                  (t.oldValue || "").toLowerCase() === "password" &&
                  n.setAttribute("data-rr-is-password", "true"),
                !by(n.tagName, o) &&
                  ((u.attributes[o] = Oy(
                    this.doc,
                    Wo(n.tagName),
                    Wo(o),
                    s,
                    n,
                    this.maskAttributeFn,
                  )),
                  o === "style"))
              ) {
                if (!this.unattachedDoc)
                  try {
                    this.unattachedDoc =
                      document.implementation.createHTMLDocument();
                  } catch {
                    this.unattachedDoc = this.doc;
                  }
                const c = this.unattachedDoc.createElement("span");
                t.oldValue && c.setAttribute("style", t.oldValue);
                for (const d of Array.from(n.style)) {
                  const h = n.style.getPropertyValue(d),
                    m = n.style.getPropertyPriority(d);
                  h !== c.style.getPropertyValue(d) ||
                  m !== c.style.getPropertyPriority(d)
                    ? m === ""
                      ? (u.styleDiff[d] = h)
                      : (u.styleDiff[d] = [h, m])
                    : (u._unchangedStyles[d] = [h, m]);
                }
                for (const d of Array.from(c.style))
                  n.style.getPropertyValue(d) === "" && (u.styleDiff[d] = !1);
              }
              break;
            }
            case "childList": {
              if (
                Bn(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0,
                )
              )
                return;
              (t.addedNodes.forEach((n) => this.genAdds(n, t.target)),
                t.removedNodes.forEach((n) => {
                  const o = this.mirror.getId(n),
                    s = Us(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                  Bn(
                    t.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) ||
                    Tf(n, this.mirror) ||
                    !HR(n, this.mirror) ||
                    (this.addedSet.has(n)
                      ? (gd(this.addedSet, n), this.droppedSet.add(n))
                      : (this.addedSet.has(t.target) && o === -1) ||
                        My(t.target, this.mirror) ||
                        (this.movedSet.has(n) && this.movedMap[Pg(o, s)]
                          ? gd(this.movedSet, n)
                          : this.removes.push({
                              parentId: s,
                              id: o,
                              isShadow:
                                Us(t.target) && js(t.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(n));
                }));
              break;
            }
          }
      }),
      (this.genAdds = (t, n) => {
        if (
          !this.processedNodeManager.inOtherBuffer(t, this) &&
          !(this.addedSet.has(t) || this.movedSet.has(t))
        ) {
          if (this.mirror.hasNode(t)) {
            if (Tf(t, this.mirror)) return;
            this.movedSet.add(t);
            let o = null;
            (n && this.mirror.hasNode(n) && (o = this.mirror.getId(n)),
              o &&
                o !== -1 &&
                (this.movedMap[Pg(this.mirror.getId(t), o)] = !0));
          } else (this.addedSet.add(t), this.droppedSet.delete(t));
          Bn(
            t,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (t.childNodes.forEach((o) => this.genAdds(o)),
            md(t) &&
              t.shadowRoot.childNodes.forEach((o) => {
                (this.processedNodeManager.add(o, this), this.genAdds(o, t));
              }));
        }
      }));
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    ((this.frozen = !0), this.canvasManager.freeze());
  }
  unfreeze() {
    ((this.frozen = !1), this.canvasManager.unfreeze(), this.emit());
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    ((this.locked = !0), this.canvasManager.lock());
  }
  unlock() {
    ((this.locked = !1), this.canvasManager.unlock(), this.emit());
  }
  reset() {
    (this.shadowDomManager.reset(), this.canvasManager.reset());
  }
}
function gd(e, t) {
  (e.delete(t), t.childNodes.forEach((n) => gd(e, n)));
}
function Lg(e, t, n) {
  return e.length === 0 ? !1 : QR(e, t, n);
}
function QR(e, t, n) {
  let o = t.parentNode;
  for (; o; ) {
    const s = n.getId(o);
    if (e.some((u) => u.id === s)) return !0;
    o = o.parentNode;
  }
  return !1;
}
function Mg(e, t) {
  return e.size === 0 ? !1 : By(e, t);
}
function By(e, t) {
  const { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : By(e, n)) : !1;
}
let Bs;
function JR(e) {
  Bs = e;
}
function eI() {
  Bs = void 0;
}
const ct = (e) =>
  Bs
    ? (...n) => {
        try {
          return e(...n);
        } catch (o) {
          if (Bs && Bs(o) === !0) return () => {};
          throw o;
        }
      }
    : e;
function or(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
const Mo = [];
function aa(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function Hy(e, t) {
  const n = new ZR();
  (Mo.push(n), n.init(e));
  let o = window.MutationObserver || window.__rrMutationObserver;
  const s = or([
    window,
    "optionalAccess",
    (c) => c.Zone,
    "optionalAccess",
    (c) => c.__symbol__,
    "optionalCall",
    (c) => c("MutationObserver"),
  ]);
  s && window[s] && (o = window[s]);
  const u = new o(
    ct((c) => {
      (e.onMutation && e.onMutation(c) === !1) || n.processMutations.bind(n)(c);
    }),
  );
  return (
    u.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    u
  );
}
function tI({ mousemoveCb: e, sampling: t, doc: n, mirror: o }) {
  if (t.mousemove === !1) return () => {};
  const s = typeof t.mousemove == "number" ? t.mousemove : 50,
    u = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let c = [],
    d;
  const h = Ks(
      ct((y) => {
        const E = Date.now() - d;
        (e(
          c.map((N) => ((N.timeOffset -= E), N)),
          y,
        ),
          (c = []),
          (d = null));
      }),
      u,
    ),
    m = ct(
      Ks(
        ct((y) => {
          const E = aa(y),
            { clientX: N, clientY: P } = hd(y) ? y.changedTouches[0] : y;
          (d || (d = Xu()),
            c.push({ x: N, y: P, id: o.getId(E), timeOffset: Xu() - d }),
            h(
              typeof DragEvent < "u" && y instanceof DragEvent
                ? Be.Drag
                : y instanceof MouseEvent
                  ? Be.MouseMove
                  : Be.TouchMove,
            ));
        }),
        s,
        { trailing: !1 },
      ),
    ),
    _ = [Sn("mousemove", m, n), Sn("touchmove", m, n), Sn("drag", m, n)];
  return ct(() => {
    _.forEach((y) => y());
  });
}
function nI({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: o,
  blockSelector: s,
  unblockSelector: u,
  sampling: c,
}) {
  if (c.mouseInteraction === !1) return () => {};
  const d =
      c.mouseInteraction === !0 || c.mouseInteraction === void 0
        ? {}
        : c.mouseInteraction,
    h = [];
  let m = null;
  const _ = (y) => (E) => {
    const N = aa(E);
    if (Bn(N, o, s, u, !0)) return;
    let P = null,
      j = y;
    if ("pointerType" in E) {
      switch (E.pointerType) {
        case "mouse":
          P = Mr.Mouse;
          break;
        case "touch":
          P = Mr.Touch;
          break;
        case "pen":
          P = Mr.Pen;
          break;
      }
      P === Mr.Touch
        ? vn[y] === vn.MouseDown
          ? (j = "TouchStart")
          : vn[y] === vn.MouseUp && (j = "TouchEnd")
        : Mr.Pen;
    } else hd(E) && (P = Mr.Touch);
    P !== null
      ? ((m = P),
        ((j.startsWith("Touch") && P === Mr.Touch) ||
          (j.startsWith("Mouse") && P === Mr.Mouse)) &&
          (P = null))
      : vn[y] === vn.Click && ((P = m), (m = null));
    const W = hd(E) ? E.changedTouches[0] : E;
    if (!W) return;
    const z = n.getId(N),
      { clientX: H, clientY: ie } = W;
    ct(e)({
      type: vn[j],
      id: z,
      x: H,
      y: ie,
      ...(P !== null && { pointerType: P }),
    });
  };
  return (
    Object.keys(vn)
      .filter(
        (y) =>
          Number.isNaN(Number(y)) && !y.endsWith("_Departed") && d[y] !== !1,
      )
      .forEach((y) => {
        let E = Wo(y);
        const N = _(y);
        if (window.PointerEvent)
          switch (vn[y]) {
            case vn.MouseDown:
            case vn.MouseUp:
              E = E.replace("mouse", "pointer");
              break;
            case vn.TouchStart:
            case vn.TouchEnd:
              return;
          }
        h.push(Sn(E, N, t));
      }),
    ct(() => {
      h.forEach((y) => y());
    })
  );
}
function zy({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: o,
  blockSelector: s,
  unblockSelector: u,
  sampling: c,
}) {
  const d = ct(
    Ks(
      ct((h) => {
        const m = aa(h);
        if (!m || Bn(m, o, s, u, !0)) return;
        const _ = n.getId(m);
        if (m === t && t.defaultView) {
          const y = Ny(t.defaultView);
          e({ id: _, x: y.left, y: y.top });
        } else e({ id: _, x: m.scrollLeft, y: m.scrollTop });
      }),
      c.scroll || 100,
    ),
  );
  return Sn("scroll", d, t);
}
function rI({ viewportResizeCb: e }, { win: t }) {
  let n = -1,
    o = -1;
  const s = ct(
    Ks(
      ct(() => {
        const u = Ay(),
          c = Py();
        (n !== u || o !== c) &&
          (e({ width: Number(c), height: Number(u) }), (n = u), (o = c));
      }),
      200,
    ),
  );
  return Sn("resize", s, t);
}
const iI = ["INPUT", "TEXTAREA", "SELECT"],
  Dg = new WeakMap();
function oI({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: o,
  blockSelector: s,
  unblockSelector: u,
  ignoreClass: c,
  ignoreSelector: d,
  maskInputOptions: h,
  maskInputFn: m,
  sampling: _,
  userTriggeredOnInput: y,
  maskTextClass: E,
  unmaskTextClass: N,
  maskTextSelector: P,
  unmaskTextSelector: j,
}) {
  function W(ae) {
    let ye = aa(ae);
    const ne = ae.isTrusted,
      ve = ye && dd(ye.tagName);
    if (
      (ve === "OPTION" && (ye = ye.parentElement),
      !ye || !ve || iI.indexOf(ve) < 0 || Bn(ye, o, s, u, !0))
    )
      return;
    const Ge = ye;
    if (Ge.classList.contains(c) || (d && Ge.matches(d))) return;
    const Ke = Vd(ye);
    let nt = Gu(Ge, ve, Ke),
      at = !1;
    const xt = Sl({ maskInputOptions: h, tagName: ve, type: Ke }),
      be = Go(ye, E, P, N, j, xt);
    ((Ke === "radio" || Ke === "checkbox") && (at = ye.checked),
      (nt = qs({ isMasked: be, element: ye, value: nt, maskInputFn: m })),
      z(
        ye,
        y
          ? { text: nt, isChecked: at, userTriggered: ne }
          : { text: nt, isChecked: at },
      ));
    const Xe = ye.name;
    Ke === "radio" &&
      Xe &&
      at &&
      t.querySelectorAll(`input[type="radio"][name="${Xe}"]`).forEach((Y) => {
        if (Y !== ye) {
          const oe = qs({
            isMasked: be,
            element: Y,
            value: Gu(Y, ve, Ke),
            maskInputFn: m,
          });
          z(
            Y,
            y
              ? { text: oe, isChecked: !at, userTriggered: !1 }
              : { text: oe, isChecked: !at },
          );
        }
      });
  }
  function z(ae, ye) {
    const ne = Dg.get(ae);
    if (!ne || ne.text !== ye.text || ne.isChecked !== ye.isChecked) {
      Dg.set(ae, ye);
      const ve = n.getId(ae);
      ct(e)({ ...ye, id: ve });
    }
  }
  const ie = (_.input === "last" ? ["change"] : ["input", "change"]).map((ae) =>
      Sn(ae, ct(W), t),
    ),
    U = t.defaultView;
  if (!U)
    return () => {
      ie.forEach((ae) => ae());
    };
  const C = U.Object.getOwnPropertyDescriptor(
      U.HTMLInputElement.prototype,
      "value",
    ),
    q = [
      [U.HTMLInputElement.prototype, "value"],
      [U.HTMLInputElement.prototype, "checked"],
      [U.HTMLSelectElement.prototype, "value"],
      [U.HTMLTextAreaElement.prototype, "value"],
      [U.HTMLSelectElement.prototype, "selectedIndex"],
      [U.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    C &&
      C.set &&
      ie.push(
        ...q.map((ae) =>
          xy(
            ae[0],
            ae[1],
            {
              set() {
                ct(W)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            U,
          ),
        ),
      ),
    ct(() => {
      ie.forEach((ae) => ae());
    })
  );
}
function qu(e) {
  const t = [];
  function n(o, s) {
    if (
      (ku("CSSGroupingRule") && o.parentRule instanceof CSSGroupingRule) ||
      (ku("CSSMediaRule") && o.parentRule instanceof CSSMediaRule) ||
      (ku("CSSSupportsRule") && o.parentRule instanceof CSSSupportsRule) ||
      (ku("CSSConditionRule") && o.parentRule instanceof CSSConditionRule)
    ) {
      const c = Array.from(o.parentRule.cssRules).indexOf(o);
      s.unshift(c);
    } else if (o.parentStyleSheet) {
      const c = Array.from(o.parentStyleSheet.cssRules).indexOf(o);
      s.unshift(c);
    }
    return s;
  }
  return n(e, t);
}
function pi(e, t, n) {
  let o, s;
  return e
    ? (e.ownerNode ? (o = t.getId(e.ownerNode)) : (s = n.getId(e)),
      { styleId: s, id: o })
    : {};
}
function sI(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
  { win: o },
) {
  if (!o.CSSStyleSheet || !o.CSSStyleSheet.prototype) return () => {};
  const s = o.CSSStyleSheet.prototype.insertRule;
  o.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
    apply: ct((_, y, E) => {
      const [N, P] = E,
        { id: j, styleId: W } = pi(y, t, n.styleMirror);
      return (
        ((j && j !== -1) || (W && W !== -1)) &&
          e({ id: j, styleId: W, adds: [{ rule: N, index: P }] }),
        _.apply(y, E)
      );
    }),
  });
  const u = o.CSSStyleSheet.prototype.deleteRule;
  o.CSSStyleSheet.prototype.deleteRule = new Proxy(u, {
    apply: ct((_, y, E) => {
      const [N] = E,
        { id: P, styleId: j } = pi(y, t, n.styleMirror);
      return (
        ((P && P !== -1) || (j && j !== -1)) &&
          e({ id: P, styleId: j, removes: [{ index: N }] }),
        _.apply(y, E)
      );
    }),
  });
  let c;
  o.CSSStyleSheet.prototype.replace &&
    ((c = o.CSSStyleSheet.prototype.replace),
    (o.CSSStyleSheet.prototype.replace = new Proxy(c, {
      apply: ct((_, y, E) => {
        const [N] = E,
          { id: P, styleId: j } = pi(y, t, n.styleMirror);
        return (
          ((P && P !== -1) || (j && j !== -1)) &&
            e({ id: P, styleId: j, replace: N }),
          _.apply(y, E)
        );
      }),
    })));
  let d;
  o.CSSStyleSheet.prototype.replaceSync &&
    ((d = o.CSSStyleSheet.prototype.replaceSync),
    (o.CSSStyleSheet.prototype.replaceSync = new Proxy(d, {
      apply: ct((_, y, E) => {
        const [N] = E,
          { id: P, styleId: j } = pi(y, t, n.styleMirror);
        return (
          ((P && P !== -1) || (j && j !== -1)) &&
            e({ id: P, styleId: j, replaceSync: N }),
          _.apply(y, E)
        );
      }),
    })));
  const h = {};
  Ru("CSSGroupingRule")
    ? (h.CSSGroupingRule = o.CSSGroupingRule)
    : (Ru("CSSMediaRule") && (h.CSSMediaRule = o.CSSMediaRule),
      Ru("CSSConditionRule") && (h.CSSConditionRule = o.CSSConditionRule),
      Ru("CSSSupportsRule") && (h.CSSSupportsRule = o.CSSSupportsRule));
  const m = {};
  return (
    Object.entries(h).forEach(([_, y]) => {
      ((m[_] = {
        insertRule: y.prototype.insertRule,
        deleteRule: y.prototype.deleteRule,
      }),
        (y.prototype.insertRule = new Proxy(m[_].insertRule, {
          apply: ct((E, N, P) => {
            const [j, W] = P,
              { id: z, styleId: H } = pi(N.parentStyleSheet, t, n.styleMirror);
            return (
              ((z && z !== -1) || (H && H !== -1)) &&
                e({
                  id: z,
                  styleId: H,
                  adds: [{ rule: j, index: [...qu(N), W || 0] }],
                }),
              E.apply(N, P)
            );
          }),
        })),
        (y.prototype.deleteRule = new Proxy(m[_].deleteRule, {
          apply: ct((E, N, P) => {
            const [j] = P,
              { id: W, styleId: z } = pi(N.parentStyleSheet, t, n.styleMirror);
            return (
              ((W && W !== -1) || (z && z !== -1)) &&
                e({ id: W, styleId: z, removes: [{ index: [...qu(N), j] }] }),
              E.apply(N, P)
            );
          }),
        })));
    }),
    ct(() => {
      ((o.CSSStyleSheet.prototype.insertRule = s),
        (o.CSSStyleSheet.prototype.deleteRule = u),
        c && (o.CSSStyleSheet.prototype.replace = c),
        d && (o.CSSStyleSheet.prototype.replaceSync = d),
        Object.entries(h).forEach(([_, y]) => {
          ((y.prototype.insertRule = m[_].insertRule),
            (y.prototype.deleteRule = m[_].deleteRule));
        }));
    })
  );
}
function $y({ mirror: e, stylesheetManager: t }, n) {
  let o = null;
  n.nodeName === "#document" ? (o = e.getId(n)) : (o = e.getId(n.host));
  const s =
      n.nodeName === "#document"
        ? or([
            n,
            "access",
            (c) => c.defaultView,
            "optionalAccess",
            (c) => c.Document,
          ])
        : or([
            n,
            "access",
            (c) => c.ownerDocument,
            "optionalAccess",
            (c) => c.defaultView,
            "optionalAccess",
            (c) => c.ShadowRoot,
          ]),
    u = or([s, "optionalAccess", (c) => c.prototype])
      ? Object.getOwnPropertyDescriptor(
          or([s, "optionalAccess", (c) => c.prototype]),
          "adoptedStyleSheets",
        )
      : void 0;
  return o === null || o === -1 || !s || !u
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: u.configurable,
        enumerable: u.enumerable,
        get() {
          return or([
            u,
            "access",
            (c) => c.get,
            "optionalAccess",
            (c) => c.call,
            "call",
            (c) => c(this),
          ]);
        },
        set(c) {
          const d = or([
            u,
            "access",
            (h) => h.set,
            "optionalAccess",
            (h) => h.call,
            "call",
            (h) => h(this, c),
          ]);
          if (o !== null && o !== -1)
            try {
              t.adoptStyleSheets(c, o);
            } catch {}
          return d;
        },
      }),
      ct(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: u.configurable,
          enumerable: u.enumerable,
          get: u.get,
          set: u.set,
        });
      }));
}
function aI(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: n,
    stylesheetManager: o,
  },
  { win: s },
) {
  const u = s.CSSStyleDeclaration.prototype.setProperty;
  s.CSSStyleDeclaration.prototype.setProperty = new Proxy(u, {
    apply: ct((d, h, m) => {
      const [_, y, E] = m;
      if (n.has(_)) return u.apply(h, [_, y, E]);
      const { id: N, styleId: P } = pi(
        or([
          h,
          "access",
          (j) => j.parentRule,
          "optionalAccess",
          (j) => j.parentStyleSheet,
        ]),
        t,
        o.styleMirror,
      );
      return (
        ((N && N !== -1) || (P && P !== -1)) &&
          e({
            id: N,
            styleId: P,
            set: { property: _, value: y, priority: E },
            index: qu(h.parentRule),
          }),
        d.apply(h, m)
      );
    }),
  });
  const c = s.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c, {
      apply: ct((d, h, m) => {
        const [_] = m;
        if (n.has(_)) return c.apply(h, [_]);
        const { id: y, styleId: E } = pi(
          or([
            h,
            "access",
            (N) => N.parentRule,
            "optionalAccess",
            (N) => N.parentStyleSheet,
          ]),
          t,
          o.styleMirror,
        );
        return (
          ((y && y !== -1) || (E && E !== -1)) &&
            e({
              id: y,
              styleId: E,
              remove: { property: _ },
              index: qu(h.parentRule),
            }),
          d.apply(h, m)
        );
      }),
    })),
    ct(() => {
      ((s.CSSStyleDeclaration.prototype.setProperty = u),
        (s.CSSStyleDeclaration.prototype.removeProperty = c));
    })
  );
}
function uI({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: o,
  mirror: s,
  sampling: u,
  doc: c,
}) {
  const d = ct((m) =>
      Ks(
        ct((_) => {
          const y = aa(_);
          if (!y || Bn(y, t, n, o, !0)) return;
          const { currentTime: E, volume: N, muted: P, playbackRate: j } = y;
          e({
            type: m,
            id: s.getId(y),
            currentTime: E,
            volume: N,
            muted: P,
            playbackRate: j,
          });
        }),
        u.media || 500,
      ),
    ),
    h = [
      Sn("play", d(0), c),
      Sn("pause", d(1), c),
      Sn("seeked", d(2), c),
      Sn("volumechange", d(3), c),
      Sn("ratechange", d(4), c),
    ];
  return ct(() => {
    h.forEach((m) => m());
  });
}
function lI({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n) return () => {};
  const o = [],
    s = new WeakMap(),
    u = n.FontFace;
  n.FontFace = function (h, m, _) {
    const y = new u(h, m, _);
    return (
      s.set(y, {
        family: h,
        buffer: typeof m != "string",
        descriptors: _,
        fontSource:
          typeof m == "string"
            ? m
            : JSON.stringify(Array.from(new Uint8Array(m))),
      }),
      y
    );
  };
  const c = qd(t.fonts, "add", function (d) {
    return function (h) {
      return (
        wl(
          ct(() => {
            const m = s.get(h);
            m && (e(m), s.delete(h));
          }),
          0,
        ),
        d.apply(this, [h])
      );
    };
  });
  return (
    o.push(() => {
      n.FontFace = u;
    }),
    o.push(c),
    ct(() => {
      o.forEach((d) => d());
    })
  );
}
function cI(e) {
  const {
    doc: t,
    mirror: n,
    blockClass: o,
    blockSelector: s,
    unblockSelector: u,
    selectionCb: c,
  } = e;
  let d = !0;
  const h = ct(() => {
    const m = t.getSelection();
    if (!m || (d && or([m, "optionalAccess", (E) => E.isCollapsed]))) return;
    d = m.isCollapsed || !1;
    const _ = [],
      y = m.rangeCount || 0;
    for (let E = 0; E < y; E++) {
      const N = m.getRangeAt(E),
        {
          startContainer: P,
          startOffset: j,
          endContainer: W,
          endOffset: z,
        } = N;
      Bn(P, o, s, u, !0) ||
        Bn(W, o, s, u, !0) ||
        _.push({
          start: n.getId(P),
          startOffset: j,
          end: n.getId(W),
          endOffset: z,
        });
    }
    c({ ranges: _ });
  });
  return (h(), Sn("selectionchange", h));
}
function fI({ doc: e, customElementCb: t }) {
  const n = e.defaultView;
  return !n || !n.customElements
    ? () => {}
    : qd(n.customElements, "define", function (s) {
        return function (u, c, d) {
          try {
            t({ define: { name: u } });
          } catch {}
          return s.apply(this, [u, c, d]);
        };
      });
}
function dI(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  let o;
  e.recordDOM && (o = Hy(e, e.doc));
  const s = tI(e),
    u = nI(e),
    c = zy(e),
    d = rI(e, { win: n }),
    h = oI(e),
    m = uI(e);
  let _ = () => {},
    y = () => {},
    E = () => {},
    N = () => {};
  e.recordDOM &&
    ((_ = sI(e, { win: n })),
    (y = $y(e, e.doc)),
    (E = aI(e, { win: n })),
    e.collectFonts && (N = lI(e)));
  const P = cI(e),
    j = fI(e),
    W = [];
  for (const z of e.plugins) W.push(z.observer(z.callback, n, z.options));
  return ct(() => {
    (Mo.forEach((z) => z.reset()),
      or([o, "optionalAccess", (z) => z.disconnect, "call", (z) => z()]),
      s(),
      u(),
      c(),
      d(),
      h(),
      m(),
      _(),
      y(),
      E(),
      N(),
      P(),
      j(),
      W.forEach((z) => z()));
  });
}
function ku(e) {
  return typeof window[e] < "u";
}
function Ru(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class _d {
  constructor(t) {
    ((this.generateIdFn = t),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap()));
  }
  getId(t, n, o, s) {
    const u = o || this.getIdToRemoteIdMap(t),
      c = s || this.getRemoteIdToIdMap(t);
    let d = u.get(n);
    return (d || ((d = this.generateIdFn()), u.set(n, d), c.set(d, n)), d);
  }
  getIds(t, n) {
    const o = this.getIdToRemoteIdMap(t),
      s = this.getRemoteIdToIdMap(t);
    return n.map((u) => this.getId(t, u, o, s));
  }
  getRemoteId(t, n, o) {
    const s = o || this.getRemoteIdToIdMap(t);
    if (typeof n != "number") return n;
    const u = s.get(n);
    return u || -1;
  }
  getRemoteIds(t, n) {
    const o = this.getRemoteIdToIdMap(t);
    return n.map((s) => this.getRemoteId(t, s, o));
  }
  reset(t) {
    if (!t) {
      ((this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap()));
      return;
    }
    (this.iframeIdToRemoteIdMap.delete(t),
      this.iframeRemoteIdToIdMap.delete(t));
  }
  getIdToRemoteIdMap(t) {
    let n = this.iframeIdToRemoteIdMap.get(t);
    return (n || ((n = new Map()), this.iframeIdToRemoteIdMap.set(t, n)), n);
  }
  getRemoteIdToIdMap(t) {
    let n = this.iframeRemoteIdToIdMap.get(t);
    return (n || ((n = new Map()), this.iframeRemoteIdToIdMap.set(t, n)), n);
  }
}
function Fg(e) {
  let t,
    n = e[0],
    o = 1;
  for (; o < e.length; ) {
    const s = e[o],
      u = e[o + 1];
    if (
      ((o += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = u(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = u((...c) => n.call(t, ...c))), (t = void 0));
  }
  return n;
}
class pI {
  constructor() {
    ((this.crossOriginIframeMirror = new _d(Xd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()));
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class hI {
  constructor(t) {
    ((this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new _d(Xd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = t.mutationCb),
      (this.wrappedEmit = t.wrappedEmit),
      (this.stylesheetManager = t.stylesheetManager),
      (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new _d(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror,
        ),
      )),
      (this.mirror = t.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this)));
  }
  addIframe(t) {
    (this.iframes.set(t, !0),
      t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t));
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    (this.mutationCb({
      adds: [{ parentId: this.mirror.getId(t), nextId: null, node: n }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      Fg([this, "access", (s) => s.loadListener, "optionalCall", (s) => s(t)]));
    const o = Kd(t);
    o &&
      o.adoptedStyleSheets &&
      o.adoptedStyleSheets.length > 0 &&
      this.stylesheetManager.adoptStyleSheets(
        o.adoptedStyleSheets,
        this.mirror.getId(o),
      );
  }
  handleMessage(t) {
    const n = t;
    if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
      return;
    const s = this.crossOriginIframeMap.get(t.source);
    if (!s) return;
    const u = this.transformCrossOriginEvent(s, n.data.event);
    u && this.wrappedEmit(u, n.data.isCheckout);
  }
  transformCrossOriginEvent(t, n) {
    switch (n.type) {
      case Ye.FullSnapshot: {
        (this.crossOriginIframeMirror.reset(t),
          this.crossOriginIframeStyleMirror.reset(t),
          this.replaceIdOnNode(n.data.node, t));
        const o = n.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(t, o),
          this.patchRootIdOnNode(n.data.node, o),
          {
            timestamp: n.timestamp,
            type: Ye.IncrementalSnapshot,
            data: {
              source: Be.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(t),
                  nextId: null,
                  node: n.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case Ye.Meta:
      case Ye.Load:
      case Ye.DomContentLoaded:
        return !1;
      case Ye.Plugin:
        return n;
      case Ye.Custom:
        return (
          this.replaceIds(n.data.payload, t, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          n
        );
      case Ye.IncrementalSnapshot:
        switch (n.data.source) {
          case Be.Mutation:
            return (
              n.data.adds.forEach((o) => {
                (this.replaceIds(o, t, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(o.node, t));
                const s = this.crossOriginIframeRootIdMap.get(t);
                s && this.patchRootIdOnNode(o.node, s);
              }),
              n.data.removes.forEach((o) => {
                this.replaceIds(o, t, ["parentId", "id"]);
              }),
              n.data.attributes.forEach((o) => {
                this.replaceIds(o, t, ["id"]);
              }),
              n.data.texts.forEach((o) => {
                this.replaceIds(o, t, ["id"]);
              }),
              n
            );
          case Be.Drag:
          case Be.TouchMove:
          case Be.MouseMove:
            return (
              n.data.positions.forEach((o) => {
                this.replaceIds(o, t, ["id"]);
              }),
              n
            );
          case Be.ViewportResize:
            return !1;
          case Be.MediaInteraction:
          case Be.MouseInteraction:
          case Be.Scroll:
          case Be.CanvasMutation:
          case Be.Input:
            return (this.replaceIds(n.data, t, ["id"]), n);
          case Be.StyleSheetRule:
          case Be.StyleDeclaration:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleId"]),
              n
            );
          case Be.Font:
            return n;
          case Be.Selection:
            return (
              n.data.ranges.forEach((o) => {
                this.replaceIds(o, t, ["start", "end"]);
              }),
              n
            );
          case Be.AdoptedStyleSheet:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleIds"]),
              Fg([
                n,
                "access",
                (o) => o.data,
                "access",
                (o) => o.styles,
                "optionalAccess",
                (o) => o.forEach,
                "call",
                (o) =>
                  o((s) => {
                    this.replaceStyleIds(s, t, ["styleId"]);
                  }),
              ]),
              n
            );
        }
    }
    return !1;
  }
  replace(t, n, o, s) {
    for (const u of s)
      (!Array.isArray(n[u]) && typeof n[u] != "number") ||
        (Array.isArray(n[u])
          ? (n[u] = t.getIds(o, n[u]))
          : (n[u] = t.getId(o, n[u])));
    return n;
  }
  replaceIds(t, n, o) {
    return this.replace(this.crossOriginIframeMirror, t, n, o);
  }
  replaceStyleIds(t, n, o) {
    return this.replace(this.crossOriginIframeStyleMirror, t, n, o);
  }
  replaceIdOnNode(t, n) {
    (this.replaceIds(t, n, ["id", "rootId"]),
      "childNodes" in t &&
        t.childNodes.forEach((o) => {
          this.replaceIdOnNode(o, n);
        }));
  }
  patchRootIdOnNode(t, n) {
    (t.type !== nn.Document && !t.rootId && (t.rootId = n),
      "childNodes" in t &&
        t.childNodes.forEach((o) => {
          this.patchRootIdOnNode(o, n);
        }));
  }
}
class mI {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class gI {
  constructor(t) {
    ((this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror),
      this.init());
  }
  init() {
    (this.reset(), this.patchAttachShadow(Element, document));
  }
  addShadowRoot(t, n) {
    if (!js(t) || this.shadowDoms.has(t)) return;
    (this.shadowDoms.add(t), this.bypassOptions.canvasManager.addShadowRoot(t));
    const o = Hy(
      {
        ...this.bypassOptions,
        doc: n,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      },
      t,
    );
    (this.restoreHandlers.push(() => o.disconnect()),
      this.restoreHandlers.push(
        zy({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror,
        }),
      ),
      wl(() => {
        (t.adoptedStyleSheets &&
          t.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            t.adoptedStyleSheets,
            this.mirror.getId(t.host),
          ),
          this.restoreHandlers.push(
            $y(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              t,
            ),
          ));
      }, 0));
  }
  observeAttachShadow(t) {
    const n = Kd(t),
      o = qR(t);
    !n || !o || this.patchAttachShadow(o.Element, n);
  }
  patchAttachShadow(t, n) {
    const o = this;
    this.restoreHandlers.push(
      qd(t.prototype, "attachShadow", function (s) {
        return function (u) {
          const c = s.call(this, u);
          return (
            this.shadowRoot && jy(this) && o.addShadowRoot(this.shadowRoot, n),
            c
          );
        };
      }),
    );
  }
  reset() {
    (this.restoreHandlers.forEach((t) => {
      try {
        t();
      } catch {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet()),
      this.bypassOptions.canvasManager.resetShadowRoots());
  }
}
class Ug {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
  addWindow() {}
  addShadowRoot() {}
  resetShadowRoots() {}
}
class _I {
  constructor(t) {
    ((this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new $R()),
      (this.mutationCb = t.mutationCb),
      (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb));
  }
  attachLinkElement(t, n) {
    ("_cssText" in n.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: n.id, attributes: n.attributes }],
      }),
      this.trackLinkElement(t));
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) ||
      (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, n) {
    if (t.length === 0) return;
    const o = { id: n, styleIds: [] },
      s = [];
    for (const u of t) {
      let c;
      (this.styleMirror.has(u)
        ? (c = this.styleMirror.getId(u))
        : ((c = this.styleMirror.add(u)),
          s.push({
            styleId: c,
            rules: Array.from(u.rules || CSSRule, (d, h) => ({
              rule: Ty(d),
              index: h,
            })),
          })),
        o.styleIds.push(c));
    }
    (s.length > 0 && (o.styles = s), this.adoptedStyleSheetCb(o));
  }
  reset() {
    (this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet()));
  }
  trackStylesheetInLinkElement(t) {}
}
class yI {
  constructor() {
    ((this.nodeMap = new WeakMap()), (this.active = !1));
  }
  inOtherBuffer(t, n) {
    const o = this.nodeMap.get(t);
    return o && Array.from(o).some((s) => s !== n);
  }
  add(t, n) {
    (this.active ||
      ((this.active = !0),
      VR(() => {
        ((this.nodeMap = new WeakMap()), (this.active = !1));
      })),
      this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(n)));
  }
  destroy() {}
}
let Wt, Yu;
try {
  if (Array.from([1], (e) => e * 2)[0] !== 2) {
    const e = document.createElement("iframe");
    (document.body.appendChild(e),
      (Array.from =
        Lu([
          e,
          "access",
          (t) => t.contentWindow,
          "optionalAccess",
          (t) => t.Array,
          "access",
          (t) => t.from,
        ]) || Array.from),
      document.body.removeChild(e));
  }
} catch (e) {
  console.debug("Unable to override Array.from", e);
}
const rr = _R();
function Gr(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: o,
    blockClass: s = "rr-block",
    blockSelector: u = null,
    unblockSelector: c = null,
    ignoreClass: d = "rr-ignore",
    ignoreSelector: h = null,
    maskAllText: m = !1,
    maskTextClass: _ = "rr-mask",
    unmaskTextClass: y = null,
    maskTextSelector: E = null,
    unmaskTextSelector: N = null,
    inlineStylesheet: P = !0,
    maskAllInputs: j,
    maskInputOptions: W,
    slimDOMOptions: z,
    maskAttributeFn: H,
    maskInputFn: ie,
    maskTextFn: U,
    maxCanvasSize: C = null,
    packFn: q,
    sampling: ae = {},
    dataURLOptions: ye = {},
    mousemoveWait: ne,
    recordDOM: ve = !0,
    recordCanvas: Ge = !1,
    recordCrossOriginIframes: Ke = !1,
    recordAfter: nt = e.recordAfter === "DOMContentLoaded"
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: at = !1,
    collectFonts: xt = !1,
    inlineImages: be = !1,
    plugins: Xe,
    keepIframeSrcFn: Y = () => !1,
    ignoreCSSAttributes: oe = new Set([]),
    errorHandler: re,
    onMutation: k,
    getCanvasManager: $,
  } = e;
  JR(re);
  const ke = Ke ? window.parent === window : !0;
  let De = !1;
  if (!ke)
    try {
      window.parent.document && (De = !1);
    } catch {
      De = !0;
    }
  if (ke && !t) throw new Error("emit function is required");
  if (!ke && !De) return () => {};
  (ne !== void 0 && ae.mousemove === void 0 && (ae.mousemove = ne), rr.reset());
  const Ve =
      j === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : W !== void 0
          ? W
          : {},
    Ze =
      z === !0 || z === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: z === "all",
            headMetaDescKeywords: z === "all",
          }
        : z || {};
  zR();
  let dt,
    rt = 0;
  const _t = (qe) => {
    for (const Ut of Xe || [])
      Ut.eventProcessor && (qe = Ut.eventProcessor(qe));
    return (q && !De && (qe = q(qe)), qe);
  };
  Wt = (qe, Ut) => {
    const Fe = qe;
    if (
      ((Fe.timestamp = Xu()),
      Lu([
        Mo,
        "access",
        (Tt) => Tt[0],
        "optionalAccess",
        (Tt) => Tt.isFrozen,
        "call",
        (Tt) => Tt(),
      ]) &&
        Fe.type !== Ye.FullSnapshot &&
        !(
          Fe.type === Ye.IncrementalSnapshot && Fe.data.source === Be.Mutation
        ) &&
        Mo.forEach((Tt) => Tt.unfreeze()),
      ke)
    )
      Lu([t, "optionalCall", (Tt) => Tt(_t(Fe), Ut)]);
    else if (De) {
      const Tt = {
        type: "rrweb",
        event: _t(Fe),
        origin: window.location.origin,
        isCheckout: Ut,
      };
      window.parent.postMessage(Tt, "*");
    }
    if (Fe.type === Ye.FullSnapshot) ((dt = Fe), (rt = 0));
    else if (Fe.type === Ye.IncrementalSnapshot) {
      if (Fe.data.source === Be.Mutation && Fe.data.isAttachIframe) return;
      rt++;
      const Tt = o && rt >= o,
        it = n && dt && Fe.timestamp - dt.timestamp > n;
      (Tt || it) && kr(!0);
    }
  };
  const Nt = (qe) => {
      Wt({
        type: Ye.IncrementalSnapshot,
        data: { source: Be.Mutation, ...qe },
      });
    },
    Er = (qe) =>
      Wt({ type: Ye.IncrementalSnapshot, data: { source: Be.Scroll, ...qe } }),
    cn = (qe) =>
      Wt({
        type: Ye.IncrementalSnapshot,
        data: { source: Be.CanvasMutation, ...qe },
      }),
    Sr = (qe) =>
      Wt({
        type: Ye.IncrementalSnapshot,
        data: { source: Be.AdoptedStyleSheet, ...qe },
      }),
    Tn = new _I({ mutationCb: Nt, adoptedStyleSheetCb: Sr }),
    Pn =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new pI()
        : new hI({
            mirror: rr,
            mutationCb: Nt,
            stylesheetManager: Tn,
            recordCrossOriginIframes: Ke,
            wrappedEmit: Wt,
          });
  for (const qe of Xe || [])
    qe.getMirror &&
      qe.getMirror({
        nodeMirror: rr,
        crossOriginIframeMirror: Pn.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Pn.crossOriginIframeStyleMirror,
      });
  const Tr = new yI(),
    wr = EI($, {
      mirror: rr,
      win: window,
      mutationCb: (qe) =>
        Wt({
          type: Ye.IncrementalSnapshot,
          data: { source: Be.CanvasMutation, ...qe },
        }),
      recordCanvas: Ge,
      blockClass: s,
      blockSelector: u,
      unblockSelector: c,
      maxCanvasSize: C,
      sampling: ae.canvas,
      dataURLOptions: ye,
      errorHandler: re,
    }),
    ur =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new mI()
        : new gI({
            mutationCb: Nt,
            scrollCb: Er,
            bypassOptions: {
              onMutation: k,
              blockClass: s,
              blockSelector: u,
              unblockSelector: c,
              maskAllText: m,
              maskTextClass: _,
              unmaskTextClass: y,
              maskTextSelector: E,
              unmaskTextSelector: N,
              inlineStylesheet: P,
              maskInputOptions: Ve,
              dataURLOptions: ye,
              maskAttributeFn: H,
              maskTextFn: U,
              maskInputFn: ie,
              recordCanvas: Ge,
              inlineImages: be,
              sampling: ae,
              slimDOMOptions: Ze,
              iframeManager: Pn,
              stylesheetManager: Tn,
              canvasManager: wr,
              keepIframeSrcFn: Y,
              processedNodeManager: Tr,
            },
            mirror: rr,
          }),
    kr = (qe = !1) => {
      if (!ve) return;
      (Wt(
        {
          type: Ye.Meta,
          data: { href: window.location.href, width: Py(), height: Ay() },
        },
        qe,
      ),
        Tn.reset(),
        ur.init(),
        Mo.forEach((Fe) => Fe.lock()));
      const Ut = BR(document, {
        mirror: rr,
        blockClass: s,
        blockSelector: u,
        unblockSelector: c,
        maskAllText: m,
        maskTextClass: _,
        unmaskTextClass: y,
        maskTextSelector: E,
        unmaskTextSelector: N,
        inlineStylesheet: P,
        maskAllInputs: Ve,
        maskAttributeFn: H,
        maskInputFn: ie,
        maskTextFn: U,
        slimDOM: Ze,
        dataURLOptions: ye,
        recordCanvas: Ge,
        inlineImages: be,
        onSerialize: (Fe) => {
          (Dy(Fe, rr) && Pn.addIframe(Fe),
            Fy(Fe, rr) && Tn.trackLinkElement(Fe),
            md(Fe) && ur.addShadowRoot(Fe.shadowRoot, document));
        },
        onIframeLoad: (Fe, Tt) => {
          (Pn.attachIframe(Fe, Tt),
            Fe.contentWindow && wr.addWindow(Fe.contentWindow),
            ur.observeAttachShadow(Fe));
        },
        onStylesheetLoad: (Fe, Tt) => {
          Tn.attachLinkElement(Fe, Tt);
        },
        keepIframeSrcFn: Y,
      });
      if (!Ut) return console.warn("Failed to snapshot the document");
      (Wt({
        type: Ye.FullSnapshot,
        data: { node: Ut, initialOffset: Ny(window) },
      }),
        Mo.forEach((Fe) => Fe.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Tn.adoptStyleSheets(document.adoptedStyleSheets, rr.getId(document)));
    };
  Yu = kr;
  try {
    const qe = [],
      Ut = (Tt) =>
        ct(dI)(
          {
            onMutation: k,
            mutationCb: Nt,
            mousemoveCb: (it, Hn) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Hn, positions: it },
              }),
            mouseInteractionCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.MouseInteraction, ...it },
              }),
            scrollCb: Er,
            viewportResizeCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.ViewportResize, ...it },
              }),
            inputCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.Input, ...it },
              }),
            mediaInteractionCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.MediaInteraction, ...it },
              }),
            styleSheetRuleCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.StyleSheetRule, ...it },
              }),
            styleDeclarationCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.StyleDeclaration, ...it },
              }),
            canvasMutationCb: cn,
            fontCb: (it) =>
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.Font, ...it },
              }),
            selectionCb: (it) => {
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.Selection, ...it },
              });
            },
            customElementCb: (it) => {
              Wt({
                type: Ye.IncrementalSnapshot,
                data: { source: Be.CustomElement, ...it },
              });
            },
            blockClass: s,
            ignoreClass: d,
            ignoreSelector: h,
            maskAllText: m,
            maskTextClass: _,
            unmaskTextClass: y,
            maskTextSelector: E,
            unmaskTextSelector: N,
            maskInputOptions: Ve,
            inlineStylesheet: P,
            sampling: ae,
            recordDOM: ve,
            recordCanvas: Ge,
            inlineImages: be,
            userTriggeredOnInput: at,
            collectFonts: xt,
            doc: Tt,
            maskAttributeFn: H,
            maskInputFn: ie,
            maskTextFn: U,
            keepIframeSrcFn: Y,
            blockSelector: u,
            unblockSelector: c,
            slimDOMOptions: Ze,
            dataURLOptions: ye,
            mirror: rr,
            iframeManager: Pn,
            stylesheetManager: Tn,
            shadowDomManager: ur,
            processedNodeManager: Tr,
            canvasManager: wr,
            ignoreCSSAttributes: oe,
            plugins:
              Lu([
                Xe,
                "optionalAccess",
                (it) => it.filter,
                "call",
                (it) => it((Hn) => Hn.observer),
                "optionalAccess",
                (it) => it.map,
                "call",
                (it) =>
                  it((Hn) => ({
                    observer: Hn.observer,
                    options: Hn.options,
                    callback: (Si) =>
                      Wt({
                        type: Ye.Plugin,
                        data: { plugin: Hn.name, payload: Si },
                      }),
                  })),
              ]) || [],
          },
          {},
        );
    Pn.addLoadListener((Tt) => {
      try {
        qe.push(Ut(Tt.contentDocument));
      } catch (it) {
        console.warn(it);
      }
    });
    const Fe = () => {
      (kr(), qe.push(Ut(document)));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? Fe()
        : (qe.push(
            Sn("DOMContentLoaded", () => {
              (Wt({ type: Ye.DomContentLoaded, data: {} }),
                nt === "DOMContentLoaded" && Fe());
            }),
          ),
          qe.push(
            Sn(
              "load",
              () => {
                (Wt({ type: Ye.Load, data: {} }), nt === "load" && Fe());
              },
              window,
            ),
          )),
      () => {
        (qe.forEach((Tt) => Tt()), Tr.destroy(), (Yu = void 0), eI());
      }
    );
  } catch (qe) {
    console.warn(qe);
  }
}
function vI(e) {
  if (!Yu) throw new Error("please take full snapshot after start recording");
  Yu(e);
}
Gr.mirror = rr;
Gr.takeFullSnapshot = vI;
function EI(e, t) {
  try {
    return e ? e(t) : new Ug();
  } catch {
    return (console.warn("Unable to initialize CanvasManager"), new Ug());
  }
}
const SI = 3,
  TI = 5;
function Zd(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function wf(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function ua(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: Ye.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: hr(t, 10, 1e3) },
        }),
        t.category === "console"
      ),
    ));
}
const wI = "button,a";
function Wy(e) {
  return e.closest(wI) || e;
}
function Gy(e) {
  const t = Vy(e);
  return !t || !(t instanceof Element) ? t : Wy(t);
}
function Vy(e) {
  return kI(e) ? e.target : e;
}
function kI(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let hi;
function RI(e) {
  return (
    hi || ((hi = []), II()),
    hi.push(e),
    () => {
      const t = hi ? hi.indexOf(e) : -1;
      t > -1 && hi.splice(t, 1);
    }
  );
}
function II() {
  An(bt, "open", function (e) {
    return function (...t) {
      if (hi)
        try {
          hi.forEach((n) => n());
        } catch {}
      return e.apply(bt, t);
    };
  });
}
const CI = new Set([
  Be.Mutation,
  Be.StyleSheetRule,
  Be.StyleDeclaration,
  Be.AdoptedStyleSheet,
  Be.CanvasMutation,
  Be.Selection,
  Be.MediaInteraction,
]);
function OI(e, t, n) {
  e.handleClick(t, n);
}
class bI {
  constructor(t, n, o = ua) {
    ((this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = n.timeout / 1e3),
      (this._threshold = n.threshold / 1e3),
      (this._scrollTimeout = n.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = n.ignoreSelector),
      (this._addBreadcrumbEvent = o));
  }
  addListeners() {
    const t = RI(() => {
      this._lastMutation = jg();
    });
    this._teardown = () => {
      (t(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0));
    };
  }
  removeListeners() {
    (this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout));
  }
  handleClick(t, n) {
    if (NI(n, this._ignoreSelector) || !AI(t)) return;
    const o = {
      timestamp: wf(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: n,
    };
    this._clicks.some(
      (s) => s.node === o.node && Math.abs(s.timestamp - o.timestamp) < 1,
    ) ||
      (this._clicks.push(o),
      this._clicks.length === 1 && this._scheduleCheckClicks());
  }
  registerMutation(t = Date.now()) {
    this._lastMutation = wf(t);
  }
  registerScroll(t = Date.now()) {
    this._lastScroll = wf(t);
  }
  registerClick(t) {
    const n = Wy(t);
    this._handleMultiClick(n);
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach((n) => {
      n.clickCount++;
    });
  }
  _getClicks(t) {
    return this._clicks.filter((n) => n.node === t);
  }
  _checkClicks() {
    const t = [],
      n = jg();
    this._clicks.forEach((o) => {
      (!o.mutationAfter &&
        this._lastMutation &&
        (o.mutationAfter =
          o.timestamp <= this._lastMutation
            ? this._lastMutation - o.timestamp
            : void 0),
        !o.scrollAfter &&
          this._lastScroll &&
          (o.scrollAfter =
            o.timestamp <= this._lastScroll
              ? this._lastScroll - o.timestamp
              : void 0),
        o.timestamp + this._timeout <= n && t.push(o));
    });
    for (const o of t) {
      const s = this._clicks.indexOf(o);
      s > -1 && (this._generateBreadcrumbs(o), this._clicks.splice(s, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const n = this._replay,
      o = t.scrollAfter && t.scrollAfter <= this._scrollTimeout,
      s = t.mutationAfter && t.mutationAfter <= this._threshold,
      u = !o && !s,
      { clickCount: c, clickBreadcrumb: d } = t;
    if (u) {
      const h = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        m = h < this._timeout * 1e3 ? "mutation" : "timeout",
        _ = {
          type: "default",
          message: d.message,
          timestamp: d.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...d.data,
            url: bt.location.href,
            route: n.getCurrentRoute(),
            timeAfterClickMs: h,
            endReason: m,
            clickCount: c || 1,
          },
        };
      this._addBreadcrumbEvent(n, _);
      return;
    }
    if (c > 1) {
      const h = {
        type: "default",
        message: d.message,
        timestamp: d.timestamp,
        category: "ui.multiClick",
        data: {
          ...d.data,
          url: bt.location.href,
          route: n.getCurrentRoute(),
          clickCount: c,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(n, h);
    }
  }
  _scheduleCheckClicks() {
    (this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = $o(() => this._checkClicks(), 1e3)));
  }
}
const xI = ["A", "BUTTON", "INPUT"];
function NI(e, t) {
  return !!(
    !xI.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function AI(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function jg() {
  return Date.now() / 1e3;
}
function PI(e, t) {
  try {
    if (!LI(t)) return;
    const { source: n } = t.data;
    if (
      (CI.has(n) && e.registerMutation(t.timestamp),
      n === Be.Scroll && e.registerScroll(t.timestamp),
      MI(t))
    ) {
      const { type: o, id: s } = t.data,
        u = Gr.mirror.getNode(s);
      u instanceof HTMLElement && o === vn.Click && e.registerClick(u);
    }
  } catch {}
}
function LI(e) {
  return e.type === SI;
}
function MI(e) {
  return e.data.source === Be.MouseInteraction;
}
function _r(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var Ku;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(Ku || (Ku = {}));
const DI = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component",
]);
function FI(e) {
  const t = {};
  !e["data-sentry-component"] &&
    e["data-sentry-element"] &&
    (e["data-sentry-component"] = e["data-sentry-element"]);
  for (const n in e)
    if (DI.has(n)) {
      let o = n;
      ((n === "data-testid" || n === "data-test-id") && (o = "testId"),
        (t[o] = e[n]));
    }
  return t;
}
const UI = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = jI(t);
  if (!n) return;
  const o = t.name === "click",
    s = o ? t.event : void 0;
  (o &&
    e.clickDetector &&
    s &&
    s.target &&
    !s.altKey &&
    !s.metaKey &&
    !s.ctrlKey &&
    !s.shiftKey &&
    OI(e.clickDetector, n, Gy(t.event)),
    ua(e, n));
};
function Xy(e, t) {
  const n = Gr.mirror.getId(e),
    o = n && Gr.mirror.getNode(n),
    s = o && Gr.mirror.getMeta(o),
    u = s && HI(s) ? s : null;
  return {
    message: t,
    data: u
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: u.tagName,
            textContent: Array.from(u.childNodes)
              .map((c) => c.type === Ku.Text && c.textContent)
              .filter(Boolean)
              .map((c) => c.trim())
              .join(""),
            attributes: FI(u.attributes),
          },
        }
      : {},
  };
}
function jI(e) {
  const { target: t, message: n } = BI(e);
  return _r({ category: `ui.${e.name}`, ...Xy(t, n) });
}
function BI(e) {
  const t = e.name === "click";
  let n,
    o = null;
  try {
    ((o = t ? Gy(e.event) : Vy(e.event)),
      (n = dl(o, { maxStringLength: 200 }) || "<unknown>"));
  } catch {
    n = "<unknown>";
  }
  return { target: o, message: n };
}
function HI(e) {
  return e.type === Ku.Element;
}
function zI(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const n = $I(t);
  n && ua(e, n);
}
function $I(e) {
  const {
    metaKey: t,
    shiftKey: n,
    ctrlKey: o,
    altKey: s,
    key: u,
    target: c,
  } = e;
  if (!c || WI(c) || !u) return null;
  const d = t || o || s,
    h = u.length === 1;
  if (!d && h) return null;
  const m = dl(c, { maxStringLength: 200 }) || "<unknown>",
    _ = Xy(c, m);
  return _r({
    category: "ui.keyDown",
    message: m,
    data: { ..._.data, metaKey: t, shiftKey: n, ctrlKey: o, altKey: s, key: u },
  });
}
function WI(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const GI = { resource: KI, paint: qI, navigation: YI };
function Iu(e, t) {
  return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
}
function VI(e) {
  return e.map(XI).filter(Boolean);
}
function XI(e) {
  const t = GI[e.entryType];
  return t ? t(e) : null;
}
function Vo(e) {
  return ((sT || bt.performance.timeOrigin) + e) / 1e3;
}
function qI(e) {
  const { duration: t, entryType: n, name: o, startTime: s } = e,
    u = Vo(s);
  return { type: n, name: o, start: u, end: u + t, data: void 0 };
}
function YI(e) {
  const {
    entryType: t,
    name: n,
    decodedBodySize: o,
    duration: s,
    domComplete: u,
    encodedBodySize: c,
    domContentLoadedEventStart: d,
    domContentLoadedEventEnd: h,
    domInteractive: m,
    loadEventStart: _,
    loadEventEnd: y,
    redirectCount: E,
    startTime: N,
    transferSize: P,
    type: j,
  } = e;
  return s === 0
    ? null
    : {
        type: `${t}.${j}`,
        start: Vo(N),
        end: Vo(u),
        name: n,
        data: {
          size: P,
          decodedBodySize: o,
          encodedBodySize: c,
          duration: s,
          domInteractive: m,
          domContentLoadedEventStart: d,
          domContentLoadedEventEnd: h,
          loadEventStart: _,
          loadEventEnd: y,
          domComplete: u,
          redirectCount: E,
        },
      };
}
function KI(e) {
  const {
    entryType: t,
    initiatorType: n,
    name: o,
    responseEnd: s,
    startTime: u,
    decodedBodySize: c,
    encodedBodySize: d,
    responseStatus: h,
    transferSize: m,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: Vo(u),
        end: Vo(s),
        name: o,
        data: {
          size: m,
          statusCode: h,
          decodedBodySize: c,
          encodedBodySize: d,
        },
      };
}
function ZI(e) {
  const t = e.entries[e.entries.length - 1],
    n = t && t.element ? [t.element] : void 0;
  return kl(e, "largest-contentful-paint", n);
}
function QI(e) {
  return e.sources !== void 0;
}
function JI(e) {
  const t = [],
    n = [];
  for (const o of e.entries)
    if (QI(o)) {
      const s = [];
      for (const u of o.sources)
        if (u.node) {
          n.push(u.node);
          const c = Gr.mirror.getId(u.node);
          c && s.push(c);
        }
      t.push({ value: o.value, nodeIds: s.length ? s : void 0 });
    }
  return kl(e, "cumulative-layout-shift", n, t);
}
function eC(e) {
  const t = e.entries[e.entries.length - 1],
    n = t && t.target ? [t.target] : void 0;
  return kl(e, "first-input-delay", n);
}
function tC(e) {
  const t = e.entries[e.entries.length - 1],
    n = t && t.target ? [t.target] : void 0;
  return kl(e, "interaction-to-next-paint", n);
}
function kl(e, t, n, o) {
  const s = e.value,
    u = e.rating,
    c = Vo(s);
  return {
    type: "web-vital",
    name: t,
    start: c,
    end: c,
    data: {
      value: s,
      size: s,
      rating: u,
      nodeIds: n ? n.map((d) => Gr.mirror.getId(d)) : void 0,
      attributions: o,
    },
  };
}
function nC(e) {
  function t(s) {
    e.performanceEntries.includes(s) || e.performanceEntries.push(s);
  }
  function n({ entries: s }) {
    s.forEach(t);
  }
  const o = [];
  return (
    ["navigation", "paint", "resource"].forEach((s) => {
      o.push(Zw(s, n));
    }),
    o.push(qw(Iu(ZI, e)), Xw(Iu(JI, e)), Yw(Iu(eC, e)), Kw(Iu(tC, e))),
    () => {
      o.forEach((s) => s());
    }
  );
}
const Ne = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  rC =
    'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function iC() {
  const e = new Blob([rC]);
  return URL.createObjectURL(e);
}
const Bg = ["info", "warn", "error", "log"],
  Mu = "[Replay] ";
function kf(e, t = "info") {
  vi(
    {
      category: "console",
      data: { logger: "replay" },
      level: t,
      message: `${Mu}${e}`,
    },
    { level: t },
  );
}
function oC() {
  let e = !1,
    t = !1;
  const n = {
    exception: () => {},
    infoTick: () => {},
    setConfig: (o) => {
      ((e = o.captureExceptions), (t = o.traceInternals));
    },
  };
  return (
    Ne
      ? (Bg.forEach((o) => {
          n[o] = (...s) => {
            (st[o](Mu, ...s), t && kf(s.join(""), ny(o)));
          };
        }),
        (n.exception = (o, ...s) => {
          (s.length && n.error && n.error(...s),
            st.error(Mu, o),
            e ? Vs(o) : t && kf(o, "error"));
        }),
        (n.infoTick = (...o) => {
          (st.info(Mu, ...o), t && setTimeout(() => kf(o[0]), 0));
        }))
      : Bg.forEach((o) => {
          n[o] = () => {};
        }),
    n
  );
}
const Me = oC();
class Qd extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Gd}.`);
  }
}
class qy {
  constructor() {
    ((this.events = []),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1));
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const n = JSON.stringify(t).length;
    if (((this._totalSize += n), this._totalSize > Gd)) throw new Qd();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const n = this.events;
      (this.clear(), t(JSON.stringify(n)));
    });
  }
  clear() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  getEarliestTimestamp() {
    const t = this.events.map((n) => n.timestamp).sort()[0];
    return t ? Zd(t) : null;
  }
}
class sC {
  constructor(t) {
    ((this._worker = t), (this._id = 0));
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, n) => {
          (this._worker.addEventListener(
            "message",
            ({ data: o }) => {
              o.success ? t() : n();
            },
            { once: !0 },
          ),
            this._worker.addEventListener(
              "error",
              (o) => {
                n(o);
              },
              { once: !0 },
            ));
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    (Ne && Me.info("Destroying compression worker"), this._worker.terminate());
  }
  postMessage(t, n) {
    const o = this._getAndIncrementId();
    return new Promise((s, u) => {
      const c = ({ data: d }) => {
        const h = d;
        if (h.method === t && h.id === o) {
          if ((this._worker.removeEventListener("message", c), !h.success)) {
            (Ne && Me.error("Error in compression worker: ", h.response),
              u(new Error("Error in compression worker")));
            return;
          }
          s(h.response);
        }
      };
      (this._worker.addEventListener("message", c),
        this._worker.postMessage({ id: o, method: t, arg: n }));
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class aC {
  constructor(t) {
    ((this._worker = new sC(t)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1));
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const n = Zd(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) &&
      (this._earliestTimestamp = n);
    const o = JSON.stringify(t);
    return (
      (this._totalSize += o.length),
      this._totalSize > Gd
        ? Promise.reject(new Qd())
        : this._sendEventToWorker(o)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    ((this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear").then(null, (t) => {
        Ne && Me.exception(t, 'Sending "clear" message to worker failed', t);
      }));
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return ((this._earliestTimestamp = null), (this._totalSize = 0), t);
  }
}
class uC {
  constructor(t) {
    ((this._fallback = new qy()),
      (this._compression = new aC(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()));
  }
  get waitForCheckout() {
    return this._used.waitForCheckout;
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(t) {
    this._used.hasCheckout = t;
  }
  set waitForCheckout(t) {
    this._used.waitForCheckout = t;
  }
  destroy() {
    (this._fallback.destroy(), this._compression.destroy());
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return (await this.ensureWorkerIsLoaded(), this._used.finish());
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch (t) {
      Ne &&
        Me.exception(
          t,
          "Failed to load the compression worker, falling back to simple buffer",
        );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t, hasCheckout: n, waitForCheckout: o } = this._fallback,
      s = [];
    for (const u of t) s.push(this._compression.addEvent(u));
    ((this._compression.hasCheckout = n),
      (this._compression.waitForCheckout = o),
      (this._used = this._compression));
    try {
      (await Promise.all(s), this._fallback.clear());
    } catch (u) {
      Ne && Me.exception(u, "Failed to add events when switching buffers.");
    }
  }
}
function lC({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    const n = cC(t);
    if (n) return n;
  }
  return (Ne && Me.info("Using simple buffer"), new qy());
}
function cC(e) {
  try {
    const t = e || fC();
    if (!t) return;
    Ne && Me.info(`Using compression worker${e ? ` from ${e}` : ""}`);
    const n = new Worker(t);
    return new uC(n);
  } catch (t) {
    Ne && Me.exception(t, "Failed to create compression worker");
  }
}
function fC() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? iC()
    : "";
}
function Jd() {
  try {
    return "sessionStorage" in bt && !!bt.sessionStorage;
  } catch {
    return !1;
  }
}
function dC(e) {
  (pC(), (e.session = void 0));
}
function pC() {
  if (Jd())
    try {
      bt.sessionStorage.removeItem($d);
    } catch {}
}
function Yy(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function Ky(e) {
  const t = Date.now(),
    n = e.id || yr(),
    o = e.started || t,
    s = e.lastActivity || t,
    u = e.segmentId || 0,
    c = e.sampled,
    d = e.previousSessionId;
  return {
    id: n,
    started: o,
    lastActivity: s,
    segmentId: u,
    sampled: c,
    previousSessionId: d,
  };
}
function ep(e) {
  if (Jd())
    try {
      bt.sessionStorage.setItem($d, JSON.stringify(e));
    } catch {}
}
function hC(e, t) {
  return Yy(e) ? "session" : t ? "buffer" : !1;
}
function Hg(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: o } = {},
) {
  const s = hC(e, t),
    u = Ky({ sampled: s, previousSessionId: o });
  return (n && ep(u), u);
}
function mC() {
  if (!Jd()) return null;
  try {
    const e = bt.sessionStorage.getItem($d);
    if (!e) return null;
    const t = JSON.parse(e);
    return (Ne && Me.infoTick("Loading existing session"), Ky(t));
  } catch {
    return null;
  }
}
function yd(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function Zy(
  e,
  { maxReplayDuration: t, sessionIdleExpire: n, targetTime: o = Date.now() },
) {
  return yd(e.started, t, o) || yd(e.lastActivity, n, o);
}
function Qy(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return !(
    !Zy(e, { sessionIdleExpire: t, maxReplayDuration: n }) ||
    (e.sampled === "buffer" && e.segmentId === 0)
  );
}
function Rf(
  { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
  o,
) {
  const s = o.stickySession && mC();
  return s
    ? Qy(s, { sessionIdleExpire: e, maxReplayDuration: t })
      ? (Ne &&
          Me.infoTick(
            "Session in sessionStorage is expired, creating new one...",
          ),
        Hg(o, { previousSessionId: s.id }))
      : s
    : (Ne && Me.infoTick("Creating new session"),
      Hg(o, { previousSessionId: n }));
}
function gC(e) {
  return e.type === Ye.Custom;
}
function tp(e, t, n) {
  return ev(e, t) ? (Jy(e, t, n), !0) : !1;
}
function _C(e, t, n) {
  return ev(e, t) ? Jy(e, t, n) : Promise.resolve(null);
}
async function Jy(e, t, n) {
  const { eventBuffer: o } = e;
  if (!o || (o.waitForCheckout && !n)) return null;
  const s = e.recordingMode === "buffer";
  try {
    (n && s && o.clear(),
      n && ((o.hasCheckout = !0), (o.waitForCheckout = !1)));
    const u = e.getOptions(),
      c = yC(t, u.beforeAddRecordingEvent);
    return c ? await o.addEvent(c) : void 0;
  } catch (u) {
    const c = u && u instanceof Qd,
      d = c ? "addEventSizeExceeded" : "addEvent";
    if (c && s) return (o.clear(), (o.waitForCheckout = !0), null);
    (e.handleException(u), await e.stop({ reason: d }));
    const h = Ft();
    h && h.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function ev(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = Zd(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
      ? (Ne &&
          Me.infoTick(
            `Skipping event with timestamp ${n} because it is after maxReplayDuration`,
          ),
        !1)
      : !0;
}
function yC(e, t) {
  try {
    if (typeof t == "function" && gC(e)) return t(e);
  } catch (n) {
    return (
      Ne &&
        Me.exception(
          n,
          "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...",
        ),
      null
    );
  }
  return e;
}
function np(e) {
  return !e.type;
}
function vd(e) {
  return e.type === "transaction";
}
function vC(e) {
  return e.type === "replay_event";
}
function zg(e) {
  return e.type === "feedback";
}
function EC(e) {
  return (t, n) => {
    if (!e.isEnabled() || (!np(t) && !vd(t))) return;
    const o = n && n.statusCode;
    if (!(!o || o < 200 || o >= 300)) {
      if (vd(t)) {
        SC(e, t);
        return;
      }
      TC(e, t);
    }
  };
}
function SC(e, t) {
  const n = e.getContext();
  t.contexts &&
    t.contexts.trace &&
    t.contexts.trace.trace_id &&
    n.traceIds.size < 100 &&
    n.traceIds.add(t.contexts.trace.trace_id);
}
function TC(e, t) {
  const n = e.getContext();
  if (
    (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
  )
    return;
  const { beforeErrorSampling: o } = e.getOptions();
  (typeof o == "function" && !o(t)) ||
    $o(async () => {
      try {
        await e.sendBufferedReplayOrFlush();
      } catch (s) {
        e.handleException(s);
      }
    });
}
function wC(e) {
  return (t) => {
    !e.isEnabled() || !np(t) || kC(e, t);
  };
}
function kC(e, t) {
  const n =
    t.exception &&
    t.exception.values &&
    t.exception.values[0] &&
    t.exception.values[0].value;
  if (
    typeof n == "string" &&
    (n.match(
      /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
    ) ||
      n.match(
        /(does not match server-rendered HTML|Hydration failed because)/i,
      ))
  ) {
    const o = _r({ category: "replay.hydrate-error", data: { url: H_() } });
    ua(e, o);
  }
}
function RC(e) {
  const t = Ft();
  t && t.on("beforeAddBreadcrumb", (n) => IC(e, n));
}
function IC(e, t) {
  if (!e.isEnabled() || !tv(t)) return;
  const n = CC(t);
  n && ua(e, n);
}
function CC(e) {
  return !tv(e) ||
    ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
      e.category,
    ) ||
    e.category.startsWith("ui.")
    ? null
    : e.category === "console"
      ? OC(e)
      : _r(e);
}
function OC(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return _r(e);
  let n = !1;
  const o = t.map((s) => {
    if (!s) return s;
    if (typeof s == "string")
      return s.length > wu ? ((n = !0), `${s.slice(0, wu)}…`) : s;
    if (typeof s == "object")
      try {
        const u = hr(s, 7);
        return JSON.stringify(u).length > wu
          ? ((n = !0), `${JSON.stringify(u, null, 2).slice(0, wu)}…`)
          : u;
      } catch {}
    return s;
  });
  return _r({
    ...e,
    data: {
      ...e.data,
      arguments: o,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function tv(e) {
  return !!e.category;
}
function bC(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : !!(t.originalException && t.originalException.__rrweb__);
}
function nv() {
  const e = ar().getPropagationContext().dsc;
  e && delete e.replay_id;
  const t = Dd();
  if (t) {
    const n = q_(t);
    delete n.replay_id;
  }
}
function xC(e, t) {
  (e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: Ye.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              tag: "breadcrumb",
              payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0,
    ));
}
function NC(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === Wd ||
    !t.exception ||
    t.type
    ? !1
    : Yy(e.getOptions().errorSampleRate);
}
function AC(e) {
  return Object.assign(
    (t, n) =>
      !e.isEnabled() || e.isPaused()
        ? t
        : vC(t)
          ? (delete t.breadcrumbs, t)
          : !np(t) && !vd(t) && !zg(t)
            ? t
            : e.checkAndHandleExpiredSession()
              ? zg(t)
                ? (e.flush(),
                  (t.contexts.feedback.replay_id = e.getSessionId()),
                  xC(e, t),
                  t)
                : bC(t, n) && !e.getOptions()._experiments.captureExceptions
                  ? (Ne && Me.log("Ignoring error from rrweb internals", t),
                    null)
                  : ((NC(e, t) || e.recordingMode === "session") &&
                      (t.tags = { ...t.tags, replayId: e.getSessionId() }),
                    t)
              : (nv(), t),
    { id: "Replay" },
  );
}
function Rl(e, t) {
  return t.map(({ type: n, start: o, end: s, name: u, data: c }) => {
    const d = e.throttledAddEvent({
      type: Ye.Custom,
      timestamp: o,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: u,
          startTimestamp: o,
          endTimestamp: s,
          data: c,
        },
      },
    });
    return typeof d == "string" ? Promise.resolve(null) : d;
  });
}
function PC(e) {
  const { from: t, to: n } = e,
    o = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: o,
    end: o,
    name: n,
    data: { previous: t },
  };
}
function LC(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = PC(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (Rl(e, [n]), !1)));
  };
}
function MC(e, t) {
  return Ne && e.getOptions()._experiments.traceInternals ? !1 : b0(t, Ft());
}
function rv(e, t) {
  e.isEnabled() &&
    t !== null &&
    (MC(e, t.name) || e.addUpdate(() => (Rl(e, [t]), !0)));
}
function Il(e) {
  if (!e) return;
  const t = new TextEncoder();
  try {
    if (typeof e == "string") return t.encode(e).length;
    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
    if (e instanceof FormData) {
      const n = av(e);
      return t.encode(n).length;
    }
    if (e instanceof Blob) return e.size;
    if (e instanceof ArrayBuffer) return e.byteLength;
  } catch {}
}
function iv(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function ov(e) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof URLSearchParams) return [e.toString()];
    if (e instanceof FormData) return [av(e)];
    if (!e) return [void 0];
  } catch (t) {
    return (
      Ne && Me.exception(t, "Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    Ne && Me.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function Zu(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const n = { ...e._meta },
    o = n.warnings || [];
  return ((n.warnings = [...o, t]), (e._meta = n), e);
}
function sv(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: o,
    url: s,
    method: u,
    statusCode: c,
    request: d,
    response: h,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: o / 1e3,
    name: s,
    data: Yn({ method: u, statusCode: c, request: d, response: h }),
  };
}
function Zs(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function _i(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const o = { headers: e, size: t },
    { body: s, warnings: u } = DC(n);
  return ((o.body = s), u && u.length > 0 && (o._meta = { warnings: u }), o);
}
function Ed(e, t) {
  return Object.entries(e).reduce((n, [o, s]) => {
    const u = o.toLowerCase();
    return (t.includes(u) && e[o] && (n[u] = s), n);
  }, {});
}
function av(e) {
  return new URLSearchParams(e).toString();
}
function DC(e) {
  if (!e || typeof e != "string") return { body: e };
  const t = e.length > Tg,
    n = FC(e);
  if (t) {
    const o = e.slice(0, Tg);
    return n
      ? { body: o, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${o}…`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (n)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function FC(e) {
  const t = e[0],
    n = e[e.length - 1];
  return (t === "[" && n === "]") || (t === "{" && n === "}");
}
function Qu(e, t) {
  const n = UC(e);
  return na(n, t);
}
function UC(e, t = bt.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(bt.location.origin)
  )
    return e;
  const n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  const o = n.href;
  return !e.endsWith("/") && o.endsWith("/") ? o.slice(0, -1) : o;
}
async function jC(e, t, n) {
  try {
    const o = await HC(e, t, n),
      s = sv("resource.fetch", o);
    rv(n.replay, s);
  } catch (o) {
    Ne && Me.exception(o, "Failed to capture fetch breadcrumb");
  }
}
function BC(e, t) {
  const { input: n, response: o } = t,
    s = n ? uv(n) : void 0,
    u = Il(s),
    c = o ? iv(o.headers.get("content-length")) : void 0;
  (u !== void 0 && (e.data.request_body_size = u),
    c !== void 0 && (e.data.response_body_size = c));
}
async function HC(e, t, n) {
  const o = Date.now(),
    { startTimestamp: s = o, endTimestamp: u = o } = t,
    {
      url: c,
      method: d,
      status_code: h = 0,
      request_body_size: m,
      response_body_size: _,
    } = e.data,
    y = Qu(c, n.networkDetailAllowUrls) && !Qu(c, n.networkDetailDenyUrls),
    E = y ? zC(n, t.input, m) : Zs(m),
    N = await $C(y, n, t.response, _);
  return {
    startTimestamp: s,
    endTimestamp: u,
    url: c,
    method: d,
    statusCode: h,
    request: E,
    response: N,
  };
}
function zC({ networkCaptureBodies: e, networkRequestHeaders: t }, n, o) {
  const s = n ? VC(n, t) : {};
  if (!e) return _i(s, o, void 0);
  const u = uv(n),
    [c, d] = ov(u),
    h = _i(s, o, c);
  return d ? Zu(h, d) : h;
}
async function $C(
  e,
  { networkCaptureBodies: t, networkResponseHeaders: n },
  o,
  s,
) {
  if (!e && s !== void 0) return Zs(s);
  const u = o ? lv(o.headers, n) : {};
  if (!o || (!t && s !== void 0)) return _i(u, s, void 0);
  const [c, d] = await GC(o),
    h = WC(c, {
      networkCaptureBodies: t,
      responseBodySize: s,
      captureDetails: e,
      headers: u,
    });
  return d ? Zu(h, d) : h;
}
function WC(
  e,
  {
    networkCaptureBodies: t,
    responseBodySize: n,
    captureDetails: o,
    headers: s,
  },
) {
  try {
    const u = e && e.length && n === void 0 ? Il(e) : n;
    return o ? (t ? _i(s, u, e) : _i(s, u, void 0)) : Zs(u);
  } catch (u) {
    return (
      Ne && Me.exception(u, "Failed to serialize response body"),
      _i(s, n, void 0)
    );
  }
}
async function GC(e) {
  const t = XC(e);
  if (!t) return [void 0, "BODY_PARSE_ERROR"];
  try {
    return [await qC(t)];
  } catch (n) {
    return n instanceof Error && n.message.indexOf("Timeout") > -1
      ? (Ne && Me.warn("Parsing text body from response timed out"),
        [void 0, "BODY_PARSE_TIMEOUT"])
      : (Ne && Me.exception(n, "Failed to get text body from response"),
        [void 0, "BODY_PARSE_ERROR"]);
  }
}
function uv(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function lv(e, t) {
  const n = {};
  return (
    t.forEach((o) => {
      e.get(o) && (n[o] = e.get(o));
    }),
    n
  );
}
function VC(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? $g(e[0], t)
    : e.length === 2
      ? $g(e[1], t)
      : {};
}
function $g(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? lv(n, t)
      : Array.isArray(n)
        ? {}
        : Ed(n, t)
    : {};
}
function XC(e) {
  try {
    return e.clone();
  } catch (t) {
    Ne && Me.exception(t, "Failed to clone response body");
  }
}
function qC(e) {
  return new Promise((t, n) => {
    const o = $o(
      () => n(new Error("Timeout while trying to read response body")),
      500,
    );
    YC(e)
      .then(
        (s) => t(s),
        (s) => n(s),
      )
      .finally(() => clearTimeout(o));
  });
}
async function YC(e) {
  return await e.text();
}
async function KC(e, t, n) {
  try {
    const o = QC(e, t, n),
      s = sv("resource.xhr", o);
    rv(n.replay, s);
  } catch (o) {
    Ne && Me.exception(o, "Failed to capture xhr breadcrumb");
  }
}
function ZC(e, t) {
  const { xhr: n, input: o } = t;
  if (!n) return;
  const s = Il(o),
    u = n.getResponseHeader("content-length")
      ? iv(n.getResponseHeader("content-length"))
      : nO(n.response, n.responseType);
  (s !== void 0 && (e.data.request_body_size = s),
    u !== void 0 && (e.data.response_body_size = u));
}
function QC(e, t, n) {
  const o = Date.now(),
    { startTimestamp: s = o, endTimestamp: u = o, input: c, xhr: d } = t,
    {
      url: h,
      method: m,
      status_code: _ = 0,
      request_body_size: y,
      response_body_size: E,
    } = e.data;
  if (!h) return null;
  if (
    !d ||
    !Qu(h, n.networkDetailAllowUrls) ||
    Qu(h, n.networkDetailDenyUrls)
  ) {
    const q = Zs(y),
      ae = Zs(E);
    return {
      startTimestamp: s,
      endTimestamp: u,
      url: h,
      method: m,
      statusCode: _,
      request: q,
      response: ae,
    };
  }
  const N = d[No],
    P = N ? Ed(N.request_headers, n.networkRequestHeaders) : {},
    j = Ed(JC(d), n.networkResponseHeaders),
    [W, z] = n.networkCaptureBodies ? ov(c) : [void 0],
    [H, ie] = n.networkCaptureBodies ? eO(d) : [void 0],
    U = _i(P, y, W),
    C = _i(j, E, H);
  return {
    startTimestamp: s,
    endTimestamp: u,
    url: h,
    method: m,
    statusCode: _,
    request: z ? Zu(U, z) : U,
    response: ie ? Zu(C, ie) : C,
  };
}
function JC(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`,
        )
        .reduce((n, o) => {
          const [s, u] = o.split(": ");
          return (u && (n[s.toLowerCase()] = u), n);
        }, {})
    : {};
}
function eO(e) {
  const t = [];
  try {
    return [e.responseText];
  } catch (n) {
    t.push(n);
  }
  try {
    return tO(e.response, e.responseType);
  } catch (n) {
    t.push(n);
  }
  return (Ne && Me.warn("Failed to get xhr response body", ...t), [void 0]);
}
function tO(e, t) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof Document) return [e.body.outerHTML];
    if (t === "json" && e && typeof e == "object") return [JSON.stringify(e)];
    if (!e) return [void 0];
  } catch (n) {
    return (
      Ne && Me.exception(n, "Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    Ne && Me.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function nO(e, t) {
  try {
    const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
    return Il(n);
  } catch {
    return;
  }
}
function rO(e) {
  const t = Ft();
  try {
    const {
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: o,
        networkCaptureBodies: s,
        networkRequestHeaders: u,
        networkResponseHeaders: c,
      } = e.getOptions(),
      d = {
        replay: e,
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: o,
        networkCaptureBodies: s,
        networkRequestHeaders: u,
        networkResponseHeaders: c,
      };
    t && t.on("beforeAddBreadcrumb", (h, m) => iO(d, h, m));
  } catch {}
}
function iO(e, t, n) {
  if (t.data)
    try {
      (oO(t) && aO(n) && (ZC(t, n), KC(t, n, e)),
        sO(t) && uO(n) && (BC(t, n), jC(t, n, e)));
    } catch (o) {
      Ne && Me.exception(o, "Error when enriching network breadcrumb");
    }
}
function oO(e) {
  return e.category === "xhr";
}
function sO(e) {
  return e.category === "fetch";
}
function aO(e) {
  return e && e.xhr;
}
function uO(e) {
  return e && e.response;
}
function lO(e) {
  const t = Ft();
  (vy(UI(e)), zd(LC(e)), RC(e), rO(e));
  const n = AC(e);
  (S0(n),
    t &&
      (t.on("beforeSendEvent", wC(e)),
      t.on("afterSendEvent", EC(e)),
      t.on("createDsc", (o) => {
        const s = e.getSessionId();
        s &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          e.checkAndHandleExpiredSession() &&
          (o.replay_id = s);
      }),
      t.on("spanStart", (o) => {
        e.lastActiveSpan = o;
      }),
      t.on("spanEnd", (o) => {
        e.lastActiveSpan = o;
      }),
      t.on("beforeSendFeedback", (o, s) => {
        const u = e.getSessionId();
        s &&
          s.includeReplay &&
          e.isEnabled() &&
          u &&
          o.contexts &&
          o.contexts.feedback &&
          (o.contexts.feedback.replay_id = u);
      })));
}
async function cO(e) {
  try {
    return Promise.all(Rl(e, [fO(bt.performance.memory)]));
  } catch {
    return [];
  }
}
function fO(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: o } = e,
    s = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: s,
    end: s,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: o },
    },
  };
}
function dO(e, t, n) {
  let o, s, u;
  const c = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function d() {
    return (h(), (o = e()), o);
  }
  function h() {
    (s !== void 0 && clearTimeout(s),
      u !== void 0 && clearTimeout(u),
      (s = u = void 0));
  }
  function m() {
    return s !== void 0 || u !== void 0 ? d() : o;
  }
  function _() {
    return (
      s && clearTimeout(s),
      (s = $o(d, t)),
      c && u === void 0 && (u = $o(d, c)),
      o
    );
  }
  return ((_.cancel = h), (_.flush = m), _);
}
const ji = gt.navigator;
function pO() {
  return /iPhone|iPad|iPod/i.test((ji && ji.userAgent) || "") ||
    (/Macintosh/i.test((ji && ji.userAgent) || "") &&
      ji &&
      ji.maxTouchPoints &&
      ji.maxTouchPoints > 1)
    ? { sampling: { mousemove: !1 } }
    : {};
}
function hO(e) {
  let t = !1;
  return (n, o) => {
    if (!e.checkAndHandleExpiredSession()) {
      Ne && Me.warn("Received replay event after session expired.");
      return;
    }
    const s = o || !t;
    ((t = !0),
      e.clickDetector && PI(e.clickDetector, n),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && s && e.setInitialState(),
          !tp(e, n, s))
        )
          return !0;
        if (!s) return !1;
        const u = e.session;
        if ((gO(e, s), e.recordingMode === "buffer" && u && e.eventBuffer)) {
          const c = e.eventBuffer.getEarliestTimestamp();
          c &&
            (Ne &&
              Me.info(
                `Updating session start time to earliest event in buffer to ${new Date(c)}`,
              ),
            (u.started = c),
            e.getOptions().stickySession && ep(u));
        }
        return (
          (u && u.previousSessionId) ||
            (e.recordingMode === "session" && e.flush()),
          !0
        );
      }));
  };
}
function mO(e) {
  const t = e.getOptions();
  return {
    type: Ye.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: e.isRecordingCanvas(),
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function gO(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || tp(e, mO(e), !1);
}
function _O(e, t, n, o) {
  return ZT(JT(e, QT(e), o, n), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function yO({ recordingData: e, headers: t }) {
  let n;
  const o = `${JSON.stringify(t)}
`;
  if (typeof e == "string") n = `${o}${e}`;
  else {
    const u = new TextEncoder().encode(o);
    ((n = new Uint8Array(u.length + e.length)), n.set(u), n.set(e, u.length));
  }
  return n;
}
async function vO({ client: e, scope: t, replayId: n, event: o }) {
  const s =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    u = { event_id: n, integrations: s };
  e.emit("preprocessEvent", o, u);
  const c = await u0(e.getOptions(), o, u, t, e, Ei());
  if (!c) return null;
  c.platform = c.platform || "javascript";
  const d = e.getSdkMetadata(),
    { name: h, version: m } = (d && d.sdk) || {};
  return (
    (c.sdk = {
      ...c.sdk,
      name: h || "sentry.javascript.unknown",
      version: m || "0.0.0",
    }),
    c
  );
}
async function EO({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: o,
  timestamp: s,
  session: u,
}) {
  const c = yO({ recordingData: e, headers: { segment_id: n } }),
    { urls: d, errorIds: h, traceIds: m, initialTimestamp: _ } = o,
    y = Ft(),
    E = ar(),
    N = y && y.getTransport(),
    P = y && y.getDsn();
  if (!y || !N || !P || !u.sampled) return Km({});
  const j = {
      type: Qk,
      replay_start_timestamp: _ / 1e3,
      timestamp: s / 1e3,
      error_ids: h,
      trace_ids: m,
      urls: d,
      replay_id: t,
      segment_id: n,
      replay_type: u.sampled,
    },
    W = await vO({ scope: E, client: y, replayId: t, event: j });
  if (!W)
    return (
      y.recordDroppedEvent("event_processor", "replay", j),
      Ne && Me.info("An event processor returned `null`, will not send event."),
      Km({})
    );
  delete W.sdkProcessingMetadata;
  const z = _O(W, c, P, y.getOptions().tunnel);
  let H;
  try {
    H = await N.send(z);
  } catch (U) {
    const C = new Error(Wd);
    try {
      C.cause = U;
    } catch {}
    throw C;
  }
  if (
    typeof H.statusCode == "number" &&
    (H.statusCode < 200 || H.statusCode >= 300)
  )
    throw new cv(H.statusCode);
  const ie = O0({}, H);
  if (C0(ie, "replay")) throw new rp(ie);
  return H;
}
class cv extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
class rp extends Error {
  constructor(t) {
    (super("Rate limit hit"), (this.rateLimits = t));
  }
}
async function fv(e, t = { count: 0, interval: iR }) {
  const { recordingData: n, onError: o } = e;
  if (n.length)
    try {
      return (await EO(e), !0);
    } catch (s) {
      if (s instanceof cv || s instanceof rp) throw s;
      if ((E0("Replays", { _retryCount: t.count }), o && o(s), t.count >= oR)) {
        const u = new Error(`${Wd} - max retries exceeded`);
        try {
          u.cause = s;
        } catch {}
        throw u;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((u, c) => {
          $o(async () => {
            try {
              (await fv(e, t), u(!0));
            } catch (d) {
              c(d);
            }
          }, t.interval);
        })
      );
    }
}
const dv = "__THROTTLED",
  SO = "__SKIPPED";
function TO(e, t, n) {
  const o = new Map(),
    s = (d) => {
      const h = d - n;
      o.forEach((m, _) => {
        _ < h && o.delete(_);
      });
    },
    u = () => [...o.values()].reduce((d, h) => d + h, 0);
  let c = !1;
  return (...d) => {
    const h = Math.floor(Date.now() / 1e3);
    if ((s(h), u() >= t)) {
      const _ = c;
      return ((c = !0), _ ? SO : dv);
    }
    c = !1;
    const m = o.get(h) || 0;
    return (o.set(h, m + 1), e(...d));
  };
}
class mi {
  constructor({ options: t, recordingOptions: n }) {
    (mi.prototype.__init.call(this),
      mi.prototype.__init2.call(this),
      mi.prototype.__init3.call(this),
      mi.prototype.__init4.call(this),
      mi.prototype.__init5.call(this),
      mi.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: Jk, sessionIdleExpire: eR }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._requiresManualStart = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = n),
      (this._options = t),
      (this._debouncedFlush = dO(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay },
      )),
      (this._throttledAddEvent = TO((c, d) => _C(this, c, d), 300, 5)));
    const { slowClickTimeout: o, slowClickIgnoreSelectors: s } =
        this.getOptions(),
      u = o
        ? {
            threshold: Math.min(sR, o),
            timeout: o,
            scrollTimeout: aR,
            ignoreSelector: s ? s.join(",") : "",
          }
        : void 0;
    if ((u && (this.clickDetector = new bI(this, u)), Ne)) {
      const c = t._experiments;
      Me.setConfig({
        captureExceptions: !!c.captureExceptions,
        traceInternals: !!c.traceInternals,
      });
    }
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return !!this._canvas;
  }
  getOptions() {
    return this._options;
  }
  handleException(t) {
    (Ne && Me.exception(t), this._options.onError && this._options.onError(t));
  }
  initializeSampling(t) {
    const { errorSampleRate: n, sessionSampleRate: o } = this._options,
      s = n <= 0 && o <= 0;
    if (((this._requiresManualStart = s), !s)) {
      if ((this._initializeSessionForSampling(t), !this.session)) {
        Ne &&
          Me.exception(new Error("Unable to initialize and create session"));
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        Ne && Me.infoTick(`Starting replay in ${this.recordingMode} mode`),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session") {
      Ne && Me.info("Recording is already in progress");
      return;
    }
    if (this._isEnabled && this.recordingMode === "buffer") {
      Ne &&
        Me.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    (Ne && Me.infoTick("Starting replay in session mode"),
      this._updateUserActivity());
    const t = Rf(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      },
    );
    ((this.session = t), this._initializeRecording());
  }
  startBuffering() {
    if (this._isEnabled) {
      Ne &&
        Me.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    Ne && Me.infoTick("Starting replay in buffer mode");
    const t = Rf(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      },
    );
    ((this.session = t),
      (this.recordingMode = "buffer"),
      this._initializeRecording());
  }
  startRecording() {
    try {
      const t = this._canvas;
      this._stopRecording = Gr({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer"
          ? { checkoutEveryNms: rR }
          : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: Math.max(
                36e4,
                this._options._experiments.continuousCheckout,
              ),
            }),
        emit: hO(this),
        ...pO(),
        onMutation: this._onMutationHandler,
        ...(t
          ? {
              recordCanvas: t.recordCanvas,
              getCanvasManager: t.getCanvasManager,
              sampling: t.sampling,
              dataURLOptions: t.dataURLOptions,
            }
          : {}),
      });
    } catch (t) {
      this.handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return (this.handleException(t), !1);
    }
  }
  async stop({ forceFlush: t = !1, reason: n } = {}) {
    if (this._isEnabled) {
      this._isEnabled = !1;
      try {
        (Ne && Me.info(`Stopping Replay${n ? ` triggered by ${n}` : ""}`),
          nv(),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          t && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          dC(this));
      } catch (o) {
        this.handleException(o);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      Ne && Me.info("Pausing replay"));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      Ne && Me.info("Resuming replay"));
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const n = Date.now();
    (Ne && Me.info("Converting buffer to session"),
      await this.flushImmediate());
    const o = this.stopRecording();
    !t ||
      !o ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(n),
          this._updateSessionActivity(n),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(t) {
    const n = t();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    (this.checkAndHandleExpiredSession(), this._updateSessionActivity());
  }
  updateUserActivity() {
    (this._updateUserActivity(), this._updateSessionActivity());
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return (this._debouncedFlush(), this._debouncedFlush.flush());
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      yd(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    const t = `${bt.location.pathname}${bt.location.hash}${bt.location.search}`,
      n = `${bt.location.origin}${t}`;
    ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n));
  }
  throttledAddEvent(t, n) {
    const o = this._throttledAddEvent(t, n);
    if (o === dv) {
      const s = _r({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !tp(this, {
            type: TI,
            timestamp: s.timestamp || 0,
            data: { tag: "breadcrumb", payload: s, metric: !0 },
          }),
      );
    }
    return o;
  }
  getCurrentRoute() {
    const t = this.lastActiveSpan || Dd(),
      n = t && _l(t),
      s = ((n && Gs(n).data) || {})[X_];
    if (!(!n || !s || !["route", "custom"].includes(s)))
      return Gs(n).description;
  }
  _initializeRecording() {
    (this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = lC({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording());
  }
  _initializeSessionForSampling(t) {
    const n = this._options.errorSampleRate > 0,
      o = Rf(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          previousSessionId: t,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: n,
        },
      );
    this.session = o;
  }
  _checkSession() {
    if (!this.session) return !1;
    const t = this.session;
    return Qy(t, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(t), !1)
      : !0;
  }
  async _refreshSession(t) {
    this._isEnabled &&
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(t.id));
  }
  _addListeners() {
    try {
      (bt.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        bt.addEventListener("blur", this._handleWindowBlur),
        bt.addEventListener("focus", this._handleWindowFocus),
        bt.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (lO(this), (this._hasInitializedCoreListeners = !0)));
    } catch (t) {
      this.handleException(t);
    }
    this._performanceCleanupCallback = nC(this);
  }
  _removeListeners() {
    try {
      (bt.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        bt.removeEventListener("blur", this._handleWindowBlur),
        bt.removeEventListener("focus", this._handleWindowFocus),
        bt.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback());
    } catch (t) {
      this.handleException(t);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      bt.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = _r({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = _r({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (t) => {
      zI(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    !this.session ||
      Zy(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      Ne && Me.info("Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: Ye.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    let t = VI(this.performanceEntries).concat(this.replayPerformanceEntries);
    if (
      ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._requiresManualStart)
    ) {
      const n = this._context.initialTimestamp / 1e3;
      t = t.filter((o) => o.start >= n);
    }
    return Promise.all(Rl(this, t));
  }
  _clearContext() {
    (this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []));
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: n } = this;
    if (!t || !n || this._requiresManualStart || t.segmentId) return;
    const o = n.getEarliestTimestamp();
    o &&
      o < this._context.initialTimestamp &&
      (this._context.initialTimestamp = o);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return (this._clearContext(), t);
  }
  async _runFlush() {
    const t = this.getSessionId();
    if (!this.session || !this.eventBuffer || !t) {
      Ne && Me.error("No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await cO(this), !!this.eventBuffer && t === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const n = Date.now();
        if (
          n - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        const o = this._popEventContext(),
          s = this.session.segmentId++;
        this._maybeSaveSession();
        const u = await this.eventBuffer.finish();
        await fv({
          replayId: t,
          recordingData: u,
          segmentId: s,
          eventContext: o,
          session: this.session,
          timestamp: n,
          onError: (c) => this.handleException(c),
        });
      } catch (n) {
        (this.handleException(n), this.stop({ reason: "sendReplay" }));
        const o = Ft();
        if (o) {
          const s = n instanceof rp ? "ratelimit_backoff" : "send_error";
          o.recordDroppedEvent(s, "replay");
        }
      }
  }
  __init5() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        Ne &&
          Me.error("Attempting to finish replay event after session expired.");
        return;
      }
      if (!this.session) return;
      const n = this.session.started,
        s = Date.now() - n;
      this._debouncedFlush.cancel();
      const u = s < this._options.minReplayDuration,
        c = s > this._options.maxReplayDuration + 5e3;
      if (u || c) {
        (Ne &&
          Me.info(
            `Session duration (${Math.floor(s / 1e3)}s) is too ${u ? "short" : "long"}, not sending replay.`,
          ),
          u && this._debouncedFlush());
        return;
      }
      const d = this.eventBuffer;
      d &&
        this.session.segmentId === 0 &&
        !d.hasCheckout &&
        Ne &&
        Me.info("Flushing initial segment without checkout.");
      const h = !!this._flushLock;
      this._flushLock || (this._flushLock = this._runFlush());
      try {
        await this._flushLock;
      } catch (m) {
        this.handleException(m);
      } finally {
        ((this._flushLock = void 0), h && this._debouncedFlush());
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && ep(this.session);
  }
  __init6() {
    this._onMutationHandler = (t) => {
      const n = t.length,
        o = this._options.mutationLimit,
        s = this._options.mutationBreadcrumbLimit,
        u = o && n > o;
      if (n > s || u) {
        const c = _r({
          category: "replay.mutations",
          data: { count: n, limit: u },
        });
        this._createCustomBreadcrumb(c);
      }
      return u
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
}
function bs(e, t) {
  return [...e, ...t].join(",");
}
function wO({ mask: e, unmask: t, block: n, unblock: o, ignore: s }) {
  const u = ["base", "iframe[srcdoc]:not([src])"],
    c = bs(e, [".sentry-mask", "[data-sentry-mask]"]),
    d = bs(t, []);
  return {
    maskTextSelector: c,
    unmaskTextSelector: d,
    blockSelector: bs(n, [".sentry-block", "[data-sentry-block]", ...u]),
    unblockSelector: bs(o, []),
    ignoreSelector: bs(s, [
      ".sentry-ignore",
      "[data-sentry-ignore]",
      'input[type="file"]',
    ]),
  };
}
function kO({
  el: e,
  key: t,
  maskAttributes: n,
  maskAllText: o,
  privacyOptions: s,
  value: u,
}) {
  return !o || (s.unmaskTextSelector && e.matches(s.unmaskTextSelector))
    ? u
    : n.includes(t) ||
        (t === "value" &&
          e.tagName === "INPUT" &&
          ["submit", "button"].includes(e.getAttribute("type") || ""))
      ? u.replace(/[\S]/g, "*")
      : u;
}
const Wg =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  RO = ["content-length", "content-type", "accept"];
let Gg = !1;
class ip {
  static __initStatic() {
    this.id = "Replay";
  }
  constructor({
    flushMinDelay: t = tR,
    flushMaxDelay: n = nR,
    minReplayDuration: o = uR,
    maxReplayDuration: s = wg,
    stickySession: u = !0,
    useCompression: c = !0,
    workerUrl: d,
    _experiments: h = {},
    maskAllText: m = !0,
    maskAllInputs: _ = !0,
    blockAllMedia: y = !0,
    mutationBreadcrumbLimit: E = 750,
    mutationLimit: N = 1e4,
    slowClickTimeout: P = 7e3,
    slowClickIgnoreSelectors: j = [],
    networkDetailAllowUrls: W = [],
    networkDetailDenyUrls: z = [],
    networkCaptureBodies: H = !0,
    networkRequestHeaders: ie = [],
    networkResponseHeaders: U = [],
    mask: C = [],
    maskAttributes: q = ["title", "placeholder"],
    unmask: ae = [],
    block: ye = [],
    unblock: ne = [],
    ignore: ve = [],
    maskFn: Ge,
    beforeAddRecordingEvent: Ke,
    beforeErrorSampling: nt,
    onError: at,
  } = {}) {
    this.name = ip.id;
    const xt = wO({ mask: C, unmask: ae, block: ye, unblock: ne, ignore: ve });
    if (
      ((this._recordingOptions = {
        maskAllInputs: _,
        maskAllText: m,
        maskInputOptions: { password: !0 },
        maskTextFn: Ge,
        maskInputFn: Ge,
        maskAttributeFn: (be, Xe, Y) =>
          kO({
            maskAttributes: q,
            maskAllText: m,
            privacyOptions: xt,
            key: be,
            value: Xe,
            el: Y,
          }),
        ...xt,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (be) => {
          try {
            be.__rrweb__ = !0;
          } catch {}
        },
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: n,
        minReplayDuration: Math.min(o, lR),
        maxReplayDuration: Math.min(s, wg),
        stickySession: u,
        useCompression: c,
        workerUrl: d,
        blockAllMedia: y,
        maskAllInputs: _,
        maskAllText: m,
        mutationBreadcrumbLimit: E,
        mutationLimit: N,
        slowClickTimeout: P,
        slowClickIgnoreSelectors: j,
        networkDetailAllowUrls: W,
        networkDetailDenyUrls: z,
        networkCaptureBodies: H,
        networkRequestHeaders: Vg(ie),
        networkResponseHeaders: Vg(U),
        beforeAddRecordingEvent: Ke,
        beforeErrorSampling: nt,
        onError: at,
        _experiments: h,
      }),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${Wg}`
          : Wg),
      this._isInitialized && mg())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported",
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return Gg;
  }
  set _isInitialized(t) {
    Gg = t;
  }
  afterAllSetup(t) {
    !mg() || this._replay || (this._setup(t), this._initialize(t));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay
      ? this._replay.stop({
          forceFlush: this._replay.recordingMode === "session",
        })
      : Promise.resolve();
  }
  flush(t) {
    return this._replay
      ? this._replay.isEnabled()
        ? this._replay.sendBufferedReplayOrFlush(t)
        : (this._replay.start(), Promise.resolve())
      : Promise.resolve();
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  getRecordingMode() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.recordingMode;
  }
  _initialize(t) {
    this._replay &&
      (this._maybeLoadFromReplayCanvasIntegration(t),
      this._replay.initializeSampling());
  }
  _setup(t) {
    const n = IO(this._initialOptions, t);
    this._replay = new mi({
      options: n,
      recordingOptions: this._recordingOptions,
    });
  }
  _maybeLoadFromReplayCanvasIntegration(t) {
    try {
      const n = t.getIntegrationByName("ReplayCanvas");
      if (!n) return;
      this._replay._canvas = n.getOptions();
    } catch {}
  }
}
ip.__initStatic();
function IO(e, t) {
  const n = t.getOptions(),
    o = { sessionSampleRate: 0, errorSampleRate: 0, ...Yn(e) },
    s = rg(n.replaysSessionSampleRate),
    u = rg(n.replaysOnErrorSampleRate);
  return (
    s == null &&
      u == null &&
      ul(() => {
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
        );
      }),
    s != null && (o.sessionSampleRate = s),
    u != null && (o.errorSampleRate = u),
    o
  );
}
function Vg(e) {
  return [...RO, ...e.map((t) => t.toLowerCase())];
}
const CO = {
  traceFetch: !0,
  traceXHR: !0,
  enableHTTPTimings: !0,
  trackFetchStreamPerformance: !1,
};
const GP = {
  ...e0,
  instrumentNavigation: !0,
  instrumentPageLoad: !0,
  markBackgroundSpan: !0,
  enableLongTask: !0,
  enableLongAnimationFrame: !0,
  enableInp: !0,
  _experiments: {},
  ...CO,
};
function OO(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function bO(e, t) {
  const n = new WeakSet();
  function o(s, u) {
    if (!n.has(s)) {
      if (s.cause) return (n.add(s), o(s.cause, u));
      s.cause = u;
    }
  }
  o(e, t);
}
function xO(e, { componentStack: t }, n) {
  if (OO(tn.version) && ll(e) && t) {
    const o = new Error(e.message);
    ((o.name = `React ErrorBoundary ${e.name}`), (o.stack = t), bO(e, o));
  }
  return Vs(e, {
    ...n,
    captureContext: { contexts: { react: { componentStack: t } } },
  });
}
var If = { exports: {} },
  Et = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg;
function NO() {
  if (Xg) return Et;
  Xg = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    n = e ? Symbol.for("react.portal") : 60106,
    o = e ? Symbol.for("react.fragment") : 60107,
    s = e ? Symbol.for("react.strict_mode") : 60108,
    u = e ? Symbol.for("react.profiler") : 60114,
    c = e ? Symbol.for("react.provider") : 60109,
    d = e ? Symbol.for("react.context") : 60110,
    h = e ? Symbol.for("react.async_mode") : 60111,
    m = e ? Symbol.for("react.concurrent_mode") : 60111,
    _ = e ? Symbol.for("react.forward_ref") : 60112,
    y = e ? Symbol.for("react.suspense") : 60113,
    E = e ? Symbol.for("react.suspense_list") : 60120,
    N = e ? Symbol.for("react.memo") : 60115,
    P = e ? Symbol.for("react.lazy") : 60116,
    j = e ? Symbol.for("react.block") : 60121,
    W = e ? Symbol.for("react.fundamental") : 60117,
    z = e ? Symbol.for("react.responder") : 60118,
    H = e ? Symbol.for("react.scope") : 60119;
  function ie(C) {
    if (typeof C == "object" && C !== null) {
      var q = C.$$typeof;
      switch (q) {
        case t:
          switch (((C = C.type), C)) {
            case h:
            case m:
            case o:
            case u:
            case s:
            case y:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case d:
                case _:
                case P:
                case N:
                case c:
                  return C;
                default:
                  return q;
              }
          }
        case n:
          return q;
      }
    }
  }
  function U(C) {
    return ie(C) === m;
  }
  return (
    (Et.AsyncMode = h),
    (Et.ConcurrentMode = m),
    (Et.ContextConsumer = d),
    (Et.ContextProvider = c),
    (Et.Element = t),
    (Et.ForwardRef = _),
    (Et.Fragment = o),
    (Et.Lazy = P),
    (Et.Memo = N),
    (Et.Portal = n),
    (Et.Profiler = u),
    (Et.StrictMode = s),
    (Et.Suspense = y),
    (Et.isAsyncMode = function (C) {
      return U(C) || ie(C) === h;
    }),
    (Et.isConcurrentMode = U),
    (Et.isContextConsumer = function (C) {
      return ie(C) === d;
    }),
    (Et.isContextProvider = function (C) {
      return ie(C) === c;
    }),
    (Et.isElement = function (C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }),
    (Et.isForwardRef = function (C) {
      return ie(C) === _;
    }),
    (Et.isFragment = function (C) {
      return ie(C) === o;
    }),
    (Et.isLazy = function (C) {
      return ie(C) === P;
    }),
    (Et.isMemo = function (C) {
      return ie(C) === N;
    }),
    (Et.isPortal = function (C) {
      return ie(C) === n;
    }),
    (Et.isProfiler = function (C) {
      return ie(C) === u;
    }),
    (Et.isStrictMode = function (C) {
      return ie(C) === s;
    }),
    (Et.isSuspense = function (C) {
      return ie(C) === y;
    }),
    (Et.isValidElementType = function (C) {
      return (
        typeof C == "string" ||
        typeof C == "function" ||
        C === o ||
        C === m ||
        C === u ||
        C === s ||
        C === y ||
        C === E ||
        (typeof C == "object" &&
          C !== null &&
          (C.$$typeof === P ||
            C.$$typeof === N ||
            C.$$typeof === c ||
            C.$$typeof === d ||
            C.$$typeof === _ ||
            C.$$typeof === W ||
            C.$$typeof === z ||
            C.$$typeof === H ||
            C.$$typeof === j))
      );
    }),
    (Et.typeOf = ie),
    Et
  );
}
var qg;
function AO() {
  return (qg || ((qg = 1), (If.exports = NO())), If.exports);
}
var Cf, Yg;
function PO() {
  if (Yg) return Cf;
  Yg = 1;
  var e = AO(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    n = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    o = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  ((u[e.ForwardRef] = o), (u[e.Memo] = s));
  function c(P) {
    return e.isMemo(P) ? s : u[P.$$typeof] || t;
  }
  var d = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    _ = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    E = Object.prototype;
  function N(P, j, W) {
    if (typeof j != "string") {
      if (E) {
        var z = y(j);
        z && z !== E && N(P, z, W);
      }
      var H = h(j);
      m && (H = H.concat(m(j)));
      for (var ie = c(P), U = c(j), C = 0; C < H.length; ++C) {
        var q = H[C];
        if (!n[q] && !(W && W[q]) && !(U && U[q]) && !(ie && ie[q])) {
          var ae = _(j, q);
          try {
            d(P, q, ae);
          } catch {}
        }
      }
    }
    return P;
  }
  return ((Cf = N), Cf);
}
PO();
const LO = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Kg = { componentStack: null, error: null, eventId: null };
class op extends tn.Component {
  constructor(t) {
    (super(t),
      op.prototype.__init.call(this),
      (this.state = Kg),
      (this._openFallbackReportDialog = !0));
    const n = Ft();
    n &&
      t.showDialog &&
      ((this._openFallbackReportDialog = !1),
      (this._cleanupHook = n.on("afterSendEvent", (o) => {
        !o.type &&
          this._lastEventId &&
          o.event_id === this._lastEventId &&
          cd({ ...t.dialogOptions, eventId: this._lastEventId });
      })));
  }
  componentDidCatch(t, n) {
    const { componentStack: o } = n,
      s = o ?? void 0,
      {
        beforeCapture: u,
        onError: c,
        showDialog: d,
        dialogOptions: h,
      } = this.props;
    V_((m) => {
      u && u(m, t, s);
      const _ =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback,
        y = xO(t, n, { mechanism: { handled: _ } });
      (c && c(t, s, y),
        d &&
          ((this._lastEventId = y),
          this._openFallbackReportDialog && cd({ ...h, eventId: y })),
        this.setState({ error: t, componentStack: o, eventId: y }));
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: n, eventId: o } = this.state,
      { onUnmount: s } = this.props;
    (s && s(t, n, o),
      this._cleanupHook && (this._cleanupHook(), (this._cleanupHook = void 0)));
  }
  __init() {
    this.resetErrorBoundary = () => {
      const { onReset: t } = this.props,
        { error: n, componentStack: o, eventId: s } = this.state;
      (t && t(n, o, s), this.setState(Kg));
    };
  }
  render() {
    const { fallback: t, children: n } = this.props,
      o = this.state;
    if (o.error) {
      let s;
      return (
        typeof t == "function"
          ? (s = tn.createElement(t, {
              error: o.error,
              componentStack: o.componentStack,
              resetError: this.resetErrorBoundary,
              eventId: o.eventId,
            }))
          : (s = t),
        tn.isValidElement(s)
          ? s
          : (t &&
              LO &&
              st.warn("fallback did not produce a valid ReactElement"),
            null)
      );
    }
    return typeof n == "function" ? n() : n;
  }
}
var MO =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
        ? self
        : typeof window == "object"
          ? window
          : typeof global == "object"
            ? global
            : {},
  $i = "1.9.0",
  Zg = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function DO(e) {
  var t = new Set([e]),
    n = new Set(),
    o = e.match(Zg);
  if (!o)
    return function () {
      return !1;
    };
  var s = { major: +o[1], minor: +o[2], patch: +o[3], prerelease: o[4] };
  if (s.prerelease != null)
    return function (h) {
      return h === e;
    };
  function u(d) {
    return (n.add(d), !1);
  }
  function c(d) {
    return (t.add(d), !0);
  }
  return function (h) {
    if (t.has(h)) return !0;
    if (n.has(h)) return !1;
    var m = h.match(Zg);
    if (!m) return u(h);
    var _ = { major: +m[1], minor: +m[2], patch: +m[3], prerelease: m[4] };
    return _.prerelease != null || s.major !== _.major
      ? u(h)
      : s.major === 0
        ? s.minor === _.minor && s.patch <= _.patch
          ? c(h)
          : u(h)
        : s.minor <= _.minor
          ? c(h)
          : u(h);
  };
}
var FO = DO($i),
  UO = $i.split(".")[0],
  Qs = Symbol.for("opentelemetry.js.api." + UO),
  Js = MO;
function la(e, t, n, o) {
  var s;
  o === void 0 && (o = !1);
  var u = (Js[Qs] =
    (s = Js[Qs]) !== null && s !== void 0 ? s : { version: $i });
  if (!o && u[e]) {
    var c = new Error(
      "@opentelemetry/api: Attempted duplicate registration of API: " + e,
    );
    return (n.error(c.stack || c.message), !1);
  }
  if (u.version !== $i) {
    var c = new Error(
      "@opentelemetry/api: Registration of version v" +
        u.version +
        " for " +
        e +
        " does not match previously registered API v" +
        $i,
    );
    return (n.error(c.stack || c.message), !1);
  }
  return (
    (u[e] = t),
    n.debug(
      "@opentelemetry/api: Registered a global for " + e + " v" + $i + ".",
    ),
    !0
  );
}
function Vi(e) {
  var t,
    n,
    o = (t = Js[Qs]) === null || t === void 0 ? void 0 : t.version;
  if (!(!o || !FO(o)))
    return (n = Js[Qs]) === null || n === void 0 ? void 0 : n[e];
}
function ca(e, t) {
  t.debug(
    "@opentelemetry/api: Unregistering a global for " + e + " v" + $i + ".",
  );
  var n = Js[Qs];
  n && delete n[e];
}
var jO = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  BO = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  HO = (function () {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return (
      (e.prototype.debug = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return xs("debug", this._namespace, t);
      }),
      (e.prototype.error = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return xs("error", this._namespace, t);
      }),
      (e.prototype.info = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return xs("info", this._namespace, t);
      }),
      (e.prototype.warn = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return xs("warn", this._namespace, t);
      }),
      (e.prototype.verbose = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return xs("verbose", this._namespace, t);
      }),
      e
    );
  })();
function xs(e, t, n) {
  var o = Vi("diag");
  if (o) return (n.unshift(t), o[e].apply(o, BO([], jO(n), !1)));
}
var Xt;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"),
    (e[(e.ERROR = 30)] = "ERROR"),
    (e[(e.WARN = 50)] = "WARN"),
    (e[(e.INFO = 60)] = "INFO"),
    (e[(e.DEBUG = 70)] = "DEBUG"),
    (e[(e.VERBOSE = 80)] = "VERBOSE"),
    (e[(e.ALL = 9999)] = "ALL"));
})(Xt || (Xt = {}));
function zO(e, t) {
  (e < Xt.NONE ? (e = Xt.NONE) : e > Xt.ALL && (e = Xt.ALL), (t = t || {}));
  function n(o, s) {
    var u = t[o];
    return typeof u == "function" && e >= s ? u.bind(t) : function () {};
  }
  return {
    error: n("error", Xt.ERROR),
    warn: n("warn", Xt.WARN),
    info: n("info", Xt.INFO),
    debug: n("debug", Xt.DEBUG),
    verbose: n("verbose", Xt.VERBOSE),
  };
}
var $O = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  WO = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  GO = "diag",
  vr = (function () {
    function e() {
      function t(s) {
        return function () {
          for (var u = [], c = 0; c < arguments.length; c++)
            u[c] = arguments[c];
          var d = Vi("diag");
          if (d) return d[s].apply(d, WO([], $O(u), !1));
        };
      }
      var n = this,
        o = function (s, u) {
          var c, d, h;
          if ((u === void 0 && (u = { logLevel: Xt.INFO }), s === n)) {
            var m = new Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
            );
            return (
              n.error((c = m.stack) !== null && c !== void 0 ? c : m.message),
              !1
            );
          }
          typeof u == "number" && (u = { logLevel: u });
          var _ = Vi("diag"),
            y = zO((d = u.logLevel) !== null && d !== void 0 ? d : Xt.INFO, s);
          if (_ && !u.suppressOverrideMessage) {
            var E =
              (h = new Error().stack) !== null && h !== void 0
                ? h
                : "<failed to generate stacktrace>";
            (_.warn("Current logger will be overwritten from " + E),
              y.warn(
                "Current logger will overwrite one already registered from " +
                  E,
              ));
          }
          return la("diag", y, n, !0);
        };
      ((n.setLogger = o),
        (n.disable = function () {
          ca(GO, n);
        }),
        (n.createComponentLogger = function (s) {
          return new HO(s);
        }),
        (n.verbose = t("verbose")),
        (n.debug = t("debug")),
        (n.info = t("info")),
        (n.warn = t("warn")),
        (n.error = t("error")));
    }
    return (
      (e.instance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      e
    );
  })(),
  VO = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  XO = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  qO = (function () {
    function e(t) {
      this._entries = t ? new Map(t) : new Map();
    }
    return (
      (e.prototype.getEntry = function (t) {
        var n = this._entries.get(t);
        if (n) return Object.assign({}, n);
      }),
      (e.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (t) {
          var n = VO(t, 2),
            o = n[0],
            s = n[1];
          return [o, s];
        });
      }),
      (e.prototype.setEntry = function (t, n) {
        var o = new e(this._entries);
        return (o._entries.set(t, n), o);
      }),
      (e.prototype.removeEntry = function (t) {
        var n = new e(this._entries);
        return (n._entries.delete(t), n);
      }),
      (e.prototype.removeEntries = function () {
        for (var t, n, o = [], s = 0; s < arguments.length; s++)
          o[s] = arguments[s];
        var u = new e(this._entries);
        try {
          for (var c = XO(o), d = c.next(); !d.done; d = c.next()) {
            var h = d.value;
            u._entries.delete(h);
          }
        } catch (m) {
          t = { error: m };
        } finally {
          try {
            d && !d.done && (n = c.return) && n.call(c);
          } finally {
            if (t) throw t.error;
          }
        }
        return u;
      }),
      (e.prototype.clear = function () {
        return new e();
      }),
      e
    );
  })(),
  YO = Symbol("BaggageEntryMetadata"),
  KO = vr.instance();
function ZO(e) {
  return (e === void 0 && (e = {}), new qO(new Map(Object.entries(e))));
}
function QO(e) {
  return (
    typeof e != "string" &&
      (KO.error(
        "Cannot create baggage metadata from unknown type: " + typeof e,
      ),
      (e = "")),
    {
      __TYPE__: YO,
      toString: function () {
        return e;
      },
    }
  );
}
function sp(e) {
  return Symbol.for(e);
}
var JO = (function () {
    function e(t) {
      var n = this;
      ((n._currentContext = t ? new Map(t) : new Map()),
        (n.getValue = function (o) {
          return n._currentContext.get(o);
        }),
        (n.setValue = function (o, s) {
          var u = new e(n._currentContext);
          return (u._currentContext.set(o, s), u);
        }),
        (n.deleteValue = function (o) {
          var s = new e(n._currentContext);
          return (s._currentContext.delete(o), s);
        }));
    }
    return e;
  })(),
  jr = new JO(),
  Qi = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  e1 = (function () {
    function e() {}
    return (
      (e.prototype.createGauge = function (t, n) {
        return c1;
      }),
      (e.prototype.createHistogram = function (t, n) {
        return f1;
      }),
      (e.prototype.createCounter = function (t, n) {
        return l1;
      }),
      (e.prototype.createUpDownCounter = function (t, n) {
        return d1;
      }),
      (e.prototype.createObservableGauge = function (t, n) {
        return h1;
      }),
      (e.prototype.createObservableCounter = function (t, n) {
        return p1;
      }),
      (e.prototype.createObservableUpDownCounter = function (t, n) {
        return m1;
      }),
      (e.prototype.addBatchObservableCallback = function (t, n) {}),
      (e.prototype.removeBatchObservableCallback = function (t) {}),
      e
    );
  })(),
  Cl = (function () {
    function e() {}
    return e;
  })(),
  t1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return ((t.prototype.add = function (n, o) {}), t);
  })(Cl),
  n1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return ((t.prototype.add = function (n, o) {}), t);
  })(Cl),
  r1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return ((t.prototype.record = function (n, o) {}), t);
  })(Cl),
  i1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return ((t.prototype.record = function (n, o) {}), t);
  })(Cl),
  ap = (function () {
    function e() {}
    return (
      (e.prototype.addCallback = function (t) {}),
      (e.prototype.removeCallback = function (t) {}),
      e
    );
  })(),
  o1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return t;
  })(ap),
  s1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return t;
  })(ap),
  a1 = (function (e) {
    Qi(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return t;
  })(ap),
  u1 = new e1(),
  l1 = new t1(),
  c1 = new r1(),
  f1 = new i1(),
  d1 = new n1(),
  p1 = new o1(),
  h1 = new s1(),
  m1 = new a1(),
  g1 = {
    get: function (e, t) {
      if (e != null) return e[t];
    },
    keys: function (e) {
      return e == null ? [] : Object.keys(e);
    },
  },
  _1 = {
    set: function (e, t, n) {
      e != null && (e[t] = n);
    },
  },
  y1 = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  v1 = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  E1 = (function () {
    function e() {}
    return (
      (e.prototype.active = function () {
        return jr;
      }),
      (e.prototype.with = function (t, n, o) {
        for (var s = [], u = 3; u < arguments.length; u++)
          s[u - 3] = arguments[u];
        return n.call.apply(n, v1([o], y1(s), !1));
      }),
      (e.prototype.bind = function (t, n) {
        return n;
      }),
      (e.prototype.enable = function () {
        return this;
      }),
      (e.prototype.disable = function () {
        return this;
      }),
      e
    );
  })(),
  S1 = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  T1 = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Of = "context",
  w1 = new E1(),
  Ol = (function () {
    function e() {}
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalContextManager = function (t) {
        return la(Of, t, vr.instance());
      }),
      (e.prototype.active = function () {
        return this._getContextManager().active();
      }),
      (e.prototype.with = function (t, n, o) {
        for (var s, u = [], c = 3; c < arguments.length; c++)
          u[c - 3] = arguments[c];
        return (s = this._getContextManager()).with.apply(
          s,
          T1([t, n, o], S1(u), !1),
        );
      }),
      (e.prototype.bind = function (t, n) {
        return this._getContextManager().bind(t, n);
      }),
      (e.prototype._getContextManager = function () {
        return Vi(Of) || w1;
      }),
      (e.prototype.disable = function () {
        (this._getContextManager().disable(), ca(Of, vr.instance()));
      }),
      e
    );
  })(),
  Xr;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED"));
})(Xr || (Xr = {}));
var pv = "0000000000000000",
  hv = "00000000000000000000000000000000",
  mv = { traceId: hv, spanId: pv, traceFlags: Xr.NONE },
  Hs = (function () {
    function e(t) {
      (t === void 0 && (t = mv), (this._spanContext = t));
    }
    return (
      (e.prototype.spanContext = function () {
        return this._spanContext;
      }),
      (e.prototype.setAttribute = function (t, n) {
        return this;
      }),
      (e.prototype.setAttributes = function (t) {
        return this;
      }),
      (e.prototype.addEvent = function (t, n) {
        return this;
      }),
      (e.prototype.addLink = function (t) {
        return this;
      }),
      (e.prototype.addLinks = function (t) {
        return this;
      }),
      (e.prototype.setStatus = function (t) {
        return this;
      }),
      (e.prototype.updateName = function (t) {
        return this;
      }),
      (e.prototype.end = function (t) {}),
      (e.prototype.isRecording = function () {
        return !1;
      }),
      (e.prototype.recordException = function (t, n) {}),
      e
    );
  })(),
  up = sp("OpenTelemetry Context Key SPAN");
function lp(e) {
  return e.getValue(up) || void 0;
}
function k1() {
  return lp(Ol.getInstance().active());
}
function cp(e, t) {
  return e.setValue(up, t);
}
function R1(e) {
  return e.deleteValue(up);
}
function I1(e, t) {
  return cp(e, new Hs(t));
}
function gv(e) {
  var t;
  return (t = lp(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var C1 = /^([0-9a-f]{32})$/i,
  O1 = /^[0-9a-f]{16}$/i;
function _v(e) {
  return C1.test(e) && e !== hv;
}
function b1(e) {
  return O1.test(e) && e !== pv;
}
function bl(e) {
  return _v(e.traceId) && b1(e.spanId);
}
function x1(e) {
  return new Hs(e);
}
var bf = Ol.getInstance(),
  yv = (function () {
    function e() {}
    return (
      (e.prototype.startSpan = function (t, n, o) {
        o === void 0 && (o = bf.active());
        var s = !!(n != null && n.root);
        if (s) return new Hs();
        var u = o && gv(o);
        return N1(u) && bl(u) ? new Hs(u) : new Hs();
      }),
      (e.prototype.startActiveSpan = function (t, n, o, s) {
        var u, c, d;
        if (!(arguments.length < 2)) {
          arguments.length === 2
            ? (d = n)
            : arguments.length === 3
              ? ((u = n), (d = o))
              : ((u = n), (c = o), (d = s));
          var h = c ?? bf.active(),
            m = this.startSpan(t, u, h),
            _ = cp(h, m);
          return bf.with(_, d, void 0, m);
        }
      }),
      e
    );
  })();
function N1(e) {
  return (
    typeof e == "object" &&
    typeof e.spanId == "string" &&
    typeof e.traceId == "string" &&
    typeof e.traceFlags == "number"
  );
}
var A1 = new yv(),
  P1 = (function () {
    function e(t, n, o, s) {
      ((this._provider = t),
        (this.name = n),
        (this.version = o),
        (this.options = s));
    }
    return (
      (e.prototype.startSpan = function (t, n, o) {
        return this._getTracer().startSpan(t, n, o);
      }),
      (e.prototype.startActiveSpan = function (t, n, o, s) {
        var u = this._getTracer();
        return Reflect.apply(u.startActiveSpan, u, arguments);
      }),
      (e.prototype._getTracer = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateTracer(
          this.name,
          this.version,
          this.options,
        );
        return t ? ((this._delegate = t), this._delegate) : A1;
      }),
      e
    );
  })(),
  L1 = (function () {
    function e() {}
    return (
      (e.prototype.getTracer = function (t, n, o) {
        return new yv();
      }),
      e
    );
  })(),
  M1 = new L1(),
  Qg = (function () {
    function e() {}
    return (
      (e.prototype.getTracer = function (t, n, o) {
        var s;
        return (s = this.getDelegateTracer(t, n, o)) !== null && s !== void 0
          ? s
          : new P1(this, t, n, o);
      }),
      (e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : M1;
      }),
      (e.prototype.setDelegate = function (t) {
        this._delegate = t;
      }),
      (e.prototype.getDelegateTracer = function (t, n, o) {
        var s;
        return (s = this._delegate) === null || s === void 0
          ? void 0
          : s.getTracer(t, n, o);
      }),
      e
    );
  })(),
  Ju;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
})(Ju || (Ju = {}));
var el;
(function (e) {
  ((e[(e.INTERNAL = 0)] = "INTERNAL"),
    (e[(e.SERVER = 1)] = "SERVER"),
    (e[(e.CLIENT = 2)] = "CLIENT"),
    (e[(e.PRODUCER = 3)] = "PRODUCER"),
    (e[(e.CONSUMER = 4)] = "CONSUMER"));
})(el || (el = {}));
var Sd;
(function (e) {
  ((e[(e.UNSET = 0)] = "UNSET"),
    (e[(e.OK = 1)] = "OK"),
    (e[(e.ERROR = 2)] = "ERROR"));
})(Sd || (Sd = {}));
var Nn = Ol.getInstance(),
  et = vr.instance(),
  D1 = (function () {
    function e() {}
    return (
      (e.prototype.getMeter = function (t, n, o) {
        return u1;
      }),
      e
    );
  })(),
  F1 = new D1(),
  xf = "metrics",
  U1 = (function () {
    function e() {}
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalMeterProvider = function (t) {
        return la(xf, t, vr.instance());
      }),
      (e.prototype.getMeterProvider = function () {
        return Vi(xf) || F1;
      }),
      (e.prototype.getMeter = function (t, n, o) {
        return this.getMeterProvider().getMeter(t, n, o);
      }),
      (e.prototype.disable = function () {
        ca(xf, vr.instance());
      }),
      e
    );
  })(),
  vv = U1.getInstance(),
  j1 = (function () {
    function e() {}
    return (
      (e.prototype.inject = function (t, n) {}),
      (e.prototype.extract = function (t, n) {
        return t;
      }),
      (e.prototype.fields = function () {
        return [];
      }),
      e
    );
  })(),
  fp = sp("OpenTelemetry Baggage Key");
function Ev(e) {
  return e.getValue(fp) || void 0;
}
function B1() {
  return Ev(Ol.getInstance().active());
}
function H1(e, t) {
  return e.setValue(fp, t);
}
function z1(e) {
  return e.deleteValue(fp);
}
var Nf = "propagation",
  $1 = new j1(),
  W1 = (function () {
    function e() {
      ((this.createBaggage = ZO),
        (this.getBaggage = Ev),
        (this.getActiveBaggage = B1),
        (this.setBaggage = H1),
        (this.deleteBaggage = z1));
    }
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalPropagator = function (t) {
        return la(Nf, t, vr.instance());
      }),
      (e.prototype.inject = function (t, n, o) {
        return (
          o === void 0 && (o = _1),
          this._getGlobalPropagator().inject(t, n, o)
        );
      }),
      (e.prototype.extract = function (t, n, o) {
        return (
          o === void 0 && (o = g1),
          this._getGlobalPropagator().extract(t, n, o)
        );
      }),
      (e.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
      }),
      (e.prototype.disable = function () {
        ca(Nf, vr.instance());
      }),
      (e.prototype._getGlobalPropagator = function () {
        return Vi(Nf) || $1;
      }),
      e
    );
  })(),
  Br = W1.getInstance(),
  Af = "trace",
  G1 = (function () {
    function e() {
      ((this._proxyTracerProvider = new Qg()),
        (this.wrapSpanContext = x1),
        (this.isSpanContextValid = bl),
        (this.deleteSpan = R1),
        (this.getSpan = lp),
        (this.getActiveSpan = k1),
        (this.getSpanContext = gv),
        (this.setSpan = cp),
        (this.setSpanContext = I1));
    }
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalTracerProvider = function (t) {
        var n = la(Af, this._proxyTracerProvider, vr.instance());
        return (n && this._proxyTracerProvider.setDelegate(t), n);
      }),
      (e.prototype.getTracerProvider = function () {
        return Vi(Af) || this._proxyTracerProvider;
      }),
      (e.prototype.getTracer = function (t, n) {
        return this.getTracerProvider().getTracer(t, n);
      }),
      (e.prototype.disable = function () {
        (ca(Af, vr.instance()), (this._proxyTracerProvider = new Qg()));
      }),
      e
    );
  })(),
  En = G1.getInstance();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Sv = (...e) =>
    e
      .filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = tn.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: u,
      iconNode: c,
      ...d
    },
    h,
  ) =>
    tn.createElement(
      "svg",
      {
        ref: h,
        ...X1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: o ? (Number(n) * 24) / Number(t) : n,
        className: Sv("lucide", s),
        ...d,
      },
      [
        ...c.map(([m, _]) => tn.createElement(m, _)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kn = (e, t) => {
  const n = tn.forwardRef(({ className: o, ...s }, u) =>
    tn.createElement(q1, {
      ref: u,
      iconNode: t,
      className: Sv(`lucide-${V1(e)}`, o),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = Kn("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cu = Kn("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pf = Kn("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = Kn("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = Kn("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e_ = Kn("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lf = Kn("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = Kn("FileDown", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t_ = Kn("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = Kn("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = Kn("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eb = Kn("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  Ns = "http://localhost:3000",
  n_ = "http://localhost:16686",
  Mf = En.getTracer("delineate-frontend");
function tb() {
  var z, H, ie;
  const [e, t] = tn.useState(null),
    [n, o] = tn.useState(!1),
    [s, u] = tn.useState([]),
    [c, d] = tn.useState([]),
    [h, m] = tn.useState(!1),
    [_, y] = tn.useState("10000, 20000, 30000"),
    E = tn.useCallback(async () => {
      const U = Mf.startSpan("fetchHealth");
      o(!0);
      try {
        const C = await fetch(`${Ns}/health`);
        if (!C.ok) throw new Error(`HTTP ${C.status}`);
        const q = await C.json();
        (t(q), U.setStatus({ code: 1 }));
      } catch (C) {
        (console.error("Health check failed:", C),
          N("Health check failed: " + C.message),
          t(null),
          U.setStatus({ code: 2, message: C.message }));
      } finally {
        (o(!1), U.end());
      }
    }, []),
    N = (U, C) => {
      const q = {
        id: crypto.randomUUID(),
        message: U,
        timestamp: new Date().toISOString(),
        traceId: C,
      };
      d((ae) => [q, ...ae].slice(0, 10));
    },
    P = async () => {
      const U = Mf.startSpan("createExportJob");
      m(!0);
      try {
        const C = _.split(",").map((ne) => parseInt(ne.trim(), 10)),
          q = await fetch(`${Ns}/v1/export/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_ids: C, user_id: "dashboard-user" }),
          });
        if (!q.ok) throw new Error(`HTTP ${q.status}: ${q.statusText}`);
        const ae = await q.json(),
          ye = {
            jobId: ae.jobId,
            status: ae.status,
            progress: null,
            result: null,
            error: null,
            createdAt: new Date().toISOString(),
          };
        (u((ne) => [ye, ...ne]), U.setStatus({ code: 1 }), j(ae.jobId));
      } catch (C) {
        (console.error("Create job failed:", C),
          Vs(C),
          N("Create job failed: " + C.message, U.spanContext().traceId),
          U.setStatus({ code: 2, message: C.message }));
      } finally {
        (m(!1), U.end());
      }
    },
    j = async (U) => {
      const C = async () => {
        try {
          const q = await fetch(`${Ns}/v1/export/status/${U}`);
          if (!q.ok) return;
          const ae = await q.json();
          (u((ye) =>
            ye.map((ne) =>
              ne.jobId === U
                ? {
                    ...ne,
                    status: ae.status,
                    progress: ae.progress,
                    result: ae.result,
                    error: ae.error,
                  }
                : ne,
            ),
          ),
            ae.status !== "completed" &&
              ae.status !== "failed" &&
              setTimeout(C, 2e3));
        } catch (q) {
          console.error("Poll failed:", q);
        }
      };
      C();
    },
    W = async () => {
      const U = Mf.startSpan("triggerSentryTest");
      try {
        const q = await (
          await fetch(`${Ns}/v1/download/check?sentry_test=true`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: 7e4 }),
          })
        ).json();
        (N(q.message || "Sentry test error triggered", U.spanContext().traceId),
          v0("Sentry test triggered from dashboard", "info"));
      } catch (C) {
        (N("Sentry test failed: " + C.message, U.spanContext().traceId), Vs(C));
      } finally {
        U.end();
      }
    };
  return (
    tn.useEffect(() => {
      E();
    }, [E]),
    tn.useEffect(() => {
      const U = setInterval(E, 3e4);
      return () => clearInterval(U);
    }, [E]),
    X.jsx("div", {
      className: "min-h-screen bg-slate-900 p-6",
      children: X.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          X.jsx("header", {
            className: "mb-8",
            children: X.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                X.jsxs("div", {
                  children: [
                    X.jsxs("h1", {
                      className:
                        "text-3xl font-bold text-white flex items-center gap-3",
                      children: [
                        X.jsx(eb, { className: "w-8 h-8 text-blue-500" }),
                        "Delineate Observability Dashboard",
                      ],
                    }),
                    X.jsx("p", {
                      className: "text-slate-400 mt-1",
                      children:
                        "Challenge 4: Real-time monitoring with Sentry & OpenTelemetry",
                    }),
                  ],
                }),
                X.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    X.jsxs("a", {
                      href: n_,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium flex items-center gap-2",
                      children: [
                        X.jsx(Lf, { className: "w-4 h-4" }),
                        "Jaeger UI",
                      ],
                    }),
                    X.jsxs("a", {
                      href: `${Ns}/docs`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium flex items-center gap-2",
                      children: [
                        X.jsx(Lf, { className: "w-4 h-4" }),
                        "API Docs",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          X.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
              X.jsxs("div", {
                className:
                  "bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm",
                children: [
                  X.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      X.jsxs("h2", {
                        className:
                          "text-lg font-semibold text-white flex items-center gap-2",
                        children: [
                          X.jsx(J1, { className: "w-5 h-5" }),
                          "API Health",
                        ],
                      }),
                      X.jsx("button", {
                        onClick: E,
                        disabled: n,
                        className:
                          "text-slate-400 hover:text-white transition-colors",
                        children: X.jsx(Q1, {
                          className: `w-4 h-4 ${n ? "animate-spin" : ""}`,
                        }),
                      }),
                    ],
                  }),
                  e
                    ? X.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          X.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              X.jsx("span", {
                                className: "text-slate-400",
                                children: "Status",
                              }),
                              X.jsxs("span", {
                                className: `flex items-center gap-2 font-medium ${e.status === "healthy" ? "text-green-400" : "text-red-400"}`,
                                children: [
                                  e.status === "healthy"
                                    ? X.jsx(Pf, { className: "w-4 h-4" })
                                    : X.jsx(Jg, { className: "w-4 h-4" }),
                                  e.status,
                                ],
                              }),
                            ],
                          }),
                          X.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              X.jsx("span", {
                                className: "text-slate-400",
                                children: "Storage",
                              }),
                              X.jsxs("span", {
                                className: `flex items-center gap-2 font-medium ${((z = e.checks) == null ? void 0 : z.storage) === "ok" ? "text-green-400" : "text-red-400"}`,
                                children: [
                                  ((H = e.checks) == null
                                    ? void 0
                                    : H.storage) === "ok"
                                    ? X.jsx(Pf, { className: "w-4 h-4" })
                                    : X.jsx(Jg, { className: "w-4 h-4" }),
                                  ((ie = e.checks) == null
                                    ? void 0
                                    : ie.storage) || "unknown",
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : X.jsx("div", {
                        className:
                          "text-slate-500 flex items-center gap-2 py-4 justify-center",
                        children: n
                          ? X.jsxs(X.Fragment, {
                              children: [
                                X.jsx(t_, {
                                  className: "w-4 h-4 animate-spin",
                                }),
                                "Connecting...",
                              ],
                            })
                          : X.jsx("span", {
                              className: "text-red-400",
                              children: "Offline",
                            }),
                      }),
                ],
              }),
              X.jsxs("div", {
                className:
                  "bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm",
                children: [
                  X.jsxs("h2", {
                    className:
                      "text-lg font-semibold text-white flex items-center gap-2 mb-4",
                    children: [
                      X.jsx(Z1, { className: "w-5 h-5" }),
                      "Create Export Job",
                    ],
                  }),
                  X.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      X.jsxs("div", {
                        children: [
                          X.jsx("label", {
                            className: "text-sm text-slate-400 block mb-1",
                            children: "File IDs (comma-separated)",
                          }),
                          X.jsx("input", {
                            type: "text",
                            value: _,
                            onChange: (U) => y(U.target.value),
                            className:
                              "w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "10000, 20000, 30000",
                          }),
                        ],
                      }),
                      X.jsxs("button", {
                        onClick: P,
                        disabled: h,
                        className:
                          "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                          h
                            ? X.jsx(t_, { className: "w-4 h-4 animate-spin" })
                            : X.jsx(e_, { className: "w-4 h-4" }),
                          h ? "Creating..." : "Create Job",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              X.jsxs("div", {
                className:
                  "bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm",
                children: [
                  X.jsxs("h2", {
                    className:
                      "text-lg font-semibold text-white flex items-center gap-2 mb-4",
                    children: [
                      X.jsx(Cu, { className: "w-5 h-5" }),
                      "Sentry Integration",
                    ],
                  }),
                  X.jsx("p", {
                    className: "text-slate-400 text-sm mb-4",
                    children:
                      "Test Sentry error tracking by triggering an intentional API error.",
                  }),
                  X.jsxs("button", {
                    onClick: W,
                    className:
                      "w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors",
                    children: [
                      X.jsx(Cu, { className: "w-4 h-4" }),
                      "Trigger Test Error",
                    ],
                  }),
                ],
              }),
            ],
          }),
          X.jsx("div", {
            className: "mt-6",
            children: X.jsxs("div", {
              className:
                "bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm",
              children: [
                X.jsxs("h2", {
                  className:
                    "text-lg font-semibold text-white flex items-center gap-2 mb-4",
                  children: [
                    X.jsx(Y1, { className: "w-5 h-5" }),
                    "Export Jobs (",
                    s.length,
                    ")",
                  ],
                }),
                s.length > 0
                  ? X.jsx("div", {
                      className: "space-y-3 max-h-96 overflow-y-auto pr-2",
                      children: s.map((U) =>
                        X.jsxs(
                          "div",
                          {
                            className:
                              "bg-slate-700/50 rounded-lg p-4 border border-slate-600",
                            children: [
                              X.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  X.jsxs("span", {
                                    className:
                                      "font-mono text-sm text-slate-300",
                                    children: [U.jobId.slice(0, 8), "..."],
                                  }),
                                  X.jsx("span", {
                                    className: `px-2 py-1 rounded text-xs font-medium ${U.status === "completed" ? "bg-green-500/20 text-green-400" : U.status === "failed" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`,
                                    children: U.status,
                                  }),
                                ],
                              }),
                              U.progress &&
                                X.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    X.jsxs("div", {
                                      className:
                                        "flex justify-between text-xs text-slate-400 mb-1",
                                      children: [
                                        X.jsx("span", {
                                          children: U.progress.message,
                                        }),
                                        X.jsxs("span", {
                                          children: [U.progress.percent, "%"],
                                        }),
                                      ],
                                    }),
                                    X.jsx("div", {
                                      className:
                                        "w-full bg-slate-600 rounded-full h-2",
                                      children: X.jsx("div", {
                                        className:
                                          "bg-blue-500 rounded-full h-2 transition-all duration-300",
                                        style: {
                                          width: `${U.progress.percent}%`,
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                              U.result &&
                                X.jsxs("div", {
                                  className:
                                    "mt-2 text-sm text-slate-400 flex items-center gap-2",
                                  children: [
                                    X.jsx(Pf, {
                                      className: "w-4 h-4 text-green-400",
                                    }),
                                    X.jsxs("span", {
                                      children: [
                                        U.result.processedFiles,
                                        " files (",
                                        Math.round(U.result.fileSize / 1024),
                                        " KB)",
                                      ],
                                    }),
                                    U.result.downloadUrl &&
                                      X.jsxs("a", {
                                        href: U.result.downloadUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "ml-auto text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1",
                                        children: [
                                          X.jsx(e_, { className: "w-3 h-3" }),
                                          "Download",
                                        ],
                                      }),
                                  ],
                                }),
                              U.error &&
                                X.jsxs("div", {
                                  className:
                                    "mt-2 text-sm text-red-400 flex items-center gap-2",
                                  children: [
                                    X.jsx(Cu, { className: "w-4 h-4" }),
                                    "Error: ",
                                    U.error,
                                  ],
                                }),
                            ],
                          },
                          U.jobId,
                        ),
                      ),
                    })
                  : X.jsx("p", {
                      className: "text-slate-500 text-center py-8",
                      children: "No jobs yet. Create one above to get started.",
                    }),
              ],
            }),
          }),
          X.jsx("div", {
            className: "mt-6",
            children: X.jsxs("div", {
              className:
                "bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm",
              children: [
                X.jsxs("h2", {
                  className:
                    "text-lg font-semibold text-white flex items-center gap-2 mb-4",
                  children: [
                    X.jsx(Cu, { className: "w-5 h-5 text-red-400" }),
                    "Error Log (",
                    c.length,
                    ")",
                  ],
                }),
                c.length > 0
                  ? X.jsx("div", {
                      className: "space-y-2",
                      children: c.map((U) =>
                        X.jsxs(
                          "div",
                          {
                            className:
                              "bg-red-500/10 border border-red-500/30 rounded-lg p-3",
                            children: [
                              X.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  X.jsx("span", {
                                    className:
                                      "text-red-400 text-sm font-medium",
                                    children: U.message,
                                  }),
                                  X.jsxs("span", {
                                    className:
                                      "text-slate-500 text-xs flex items-center gap-1",
                                    children: [
                                      X.jsx(K1, { className: "w-3 h-3" }),
                                      new Date(
                                        U.timestamp,
                                      ).toLocaleTimeString(),
                                    ],
                                  }),
                                ],
                              }),
                              U.traceId &&
                                X.jsx("div", {
                                  className: "mt-1",
                                  children: X.jsxs("a", {
                                    href: `${n_}/trace/${U.traceId}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-xs text-blue-400 hover:underline flex items-center gap-1",
                                    children: [
                                      X.jsx(Lf, { className: "w-3 h-3" }),
                                      "Trace: ",
                                      U.traceId.slice(0, 8),
                                      "...",
                                    ],
                                  }),
                                }),
                            ],
                          },
                          U.id,
                        ),
                      ),
                    })
                  : X.jsx("p", {
                      className: "text-slate-500 text-center py-4",
                      children: "No errors captured.",
                    }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
var Tv = sp("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function nb(e) {
  return e.setValue(Tv, !0);
}
function dp(e) {
  return e.getValue(Tv) === !0;
}
var rb = "=",
  Td = ";",
  wd = ",",
  Df = "baggage",
  ib = 180,
  ob = 4096,
  sb = 8192,
  ab = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  };
function ub(e) {
  return e.reduce(function (t, n) {
    var o = "" + t + (t !== "" ? wd : "") + n;
    return o.length > sb ? t : o;
  }, "");
}
function lb(e) {
  return e.getAllEntries().map(function (t) {
    var n = ab(t, 2),
      o = n[0],
      s = n[1],
      u = encodeURIComponent(o) + "=" + encodeURIComponent(s.value);
    return (s.metadata !== void 0 && (u += Td + s.metadata.toString()), u);
  });
}
function cb(e) {
  var t = e.split(Td);
  if (!(t.length <= 0)) {
    var n = t.shift();
    if (n) {
      var o = n.indexOf(rb);
      if (!(o <= 0)) {
        var s = decodeURIComponent(n.substring(0, o).trim()),
          u = decodeURIComponent(n.substring(o + 1).trim()),
          c;
        return (
          t.length > 0 && (c = QO(t.join(Td))),
          { key: s, value: u, metadata: c }
        );
      }
    }
  }
}
var fb = (function () {
    function e() {}
    return (
      (e.prototype.inject = function (t, n, o) {
        var s = Br.getBaggage(t);
        if (!(!s || dp(t))) {
          var u = lb(s)
              .filter(function (d) {
                return d.length <= ob;
              })
              .slice(0, ib),
            c = ub(u);
          c.length > 0 && o.set(n, Df, c);
        }
      }),
      (e.prototype.extract = function (t, n, o) {
        var s = o.get(n, Df),
          u = Array.isArray(s) ? s.join(wd) : s;
        if (!u) return t;
        var c = {};
        if (u.length === 0) return t;
        var d = u.split(wd);
        return (
          d.forEach(function (h) {
            var m = cb(h);
            if (m) {
              var _ = { value: m.value };
              (m.metadata && (_.metadata = m.metadata), (c[m.key] = _));
            }
          }),
          Object.entries(c).length === 0
            ? t
            : Br.setBaggage(t, Br.createBaggage(c))
        );
      }),
      (e.prototype.fields = function () {
        return [Df];
      }),
      e
    );
  })(),
  wv = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  db = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  };
function Du(e) {
  var t,
    n,
    o = {};
  if (typeof e != "object" || e == null) return o;
  try {
    for (var s = wv(Object.entries(e)), u = s.next(); !u.done; u = s.next()) {
      var c = db(u.value, 2),
        d = c[0],
        h = c[1];
      if (!pb(d)) {
        et.warn("Invalid attribute key: " + d);
        continue;
      }
      if (!kv(h)) {
        et.warn("Invalid attribute value set for key: " + d);
        continue;
      }
      Array.isArray(h) ? (o[d] = h.slice()) : (o[d] = h);
    }
  } catch (m) {
    t = { error: m };
  } finally {
    try {
      u && !u.done && (n = s.return) && n.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function pb(e) {
  return typeof e == "string" && e.length > 0;
}
function kv(e) {
  return e == null ? !0 : Array.isArray(e) ? hb(e) : Rv(e);
}
function hb(e) {
  var t, n, o;
  try {
    for (var s = wv(e), u = s.next(); !u.done; u = s.next()) {
      var c = u.value;
      if (c != null) {
        if (!o) {
          if (Rv(c)) {
            o = typeof c;
            continue;
          }
          return !1;
        }
        if (typeof c !== o) return !1;
      }
    }
  } catch (d) {
    t = { error: d };
  } finally {
    try {
      u && !u.done && (n = s.return) && n.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return !0;
}
function Rv(e) {
  switch (typeof e) {
    case "number":
    case "boolean":
    case "string":
      return !0;
  }
  return !1;
}
function mb() {
  return function (e) {
    et.error(gb(e));
  };
}
function gb(e) {
  return typeof e == "string" ? e : JSON.stringify(_b(e));
}
function _b(e) {
  for (var t = {}, n = e; n !== null; )
    (Object.getOwnPropertyNames(n).forEach(function (o) {
      if (!t[o]) {
        var s = n[o];
        s && (t[o] = String(s));
      }
    }),
      (n = Object.getPrototypeOf(n)));
  return t;
}
var yb = mb();
function Xo(e) {
  try {
    yb(e);
  } catch {}
}
var gr;
(function (e) {
  ((e.AlwaysOff = "always_off"),
    (e.AlwaysOn = "always_on"),
    (e.ParentBasedAlwaysOff = "parentbased_always_off"),
    (e.ParentBasedAlwaysOn = "parentbased_always_on"),
    (e.ParentBasedTraceIdRatio = "parentbased_traceidratio"),
    (e.TraceIdRatio = "traceidratio"));
})(gr || (gr = {}));
var vb = ",",
  Eb = ["OTEL_SDK_DISABLED"];
function Sb(e) {
  return Eb.indexOf(e) > -1;
}
var Tb = [
  "OTEL_BSP_EXPORT_TIMEOUT",
  "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
  "OTEL_BSP_MAX_QUEUE_SIZE",
  "OTEL_BSP_SCHEDULE_DELAY",
  "OTEL_BLRP_EXPORT_TIMEOUT",
  "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
  "OTEL_BLRP_MAX_QUEUE_SIZE",
  "OTEL_BLRP_SCHEDULE_DELAY",
  "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_SPAN_EVENT_COUNT_LIMIT",
  "OTEL_SPAN_LINK_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
  "OTEL_EXPORTER_OTLP_TIMEOUT",
  "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
  "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
  "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
  "OTEL_EXPORTER_JAEGER_AGENT_PORT",
];
function wb(e) {
  return Tb.indexOf(e) > -1;
}
var kb = [
  "OTEL_NO_PATCH_MODULES",
  "OTEL_PROPAGATORS",
  "OTEL_SEMCONV_STABILITY_OPT_IN",
];
function Rb(e) {
  return kb.indexOf(e) > -1;
}
var Fu = 1 / 0,
  Uu = 128,
  Ib = 128,
  Cb = 128,
  Iv = {
    OTEL_SDK_DISABLED: !1,
    CONTAINER_NAME: "",
    ECS_CONTAINER_METADATA_URI_V4: "",
    ECS_CONTAINER_METADATA_URI: "",
    HOSTNAME: "",
    KUBERNETES_SERVICE_HOST: "",
    NAMESPACE: "",
    OTEL_BSP_EXPORT_TIMEOUT: 3e4,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5e3,
    OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
    OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
    OTEL_BLRP_SCHEDULE_DELAY: 5e3,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
    OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
    OTEL_EXPORTER_JAEGER_ENDPOINT: "",
    OTEL_EXPORTER_JAEGER_PASSWORD: "",
    OTEL_EXPORTER_JAEGER_USER: "",
    OTEL_EXPORTER_OTLP_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_HEADERS: "",
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
    OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
    OTEL_LOG_LEVEL: Xt.INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: ["tracecontext", "baggage"],
    OTEL_RESOURCE_ATTRIBUTES: "",
    OTEL_SERVICE_NAME: "",
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Fu,
    OTEL_ATTRIBUTE_COUNT_LIMIT: Uu,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Fu,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: Uu,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: Fu,
    OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: Uu,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: Ib,
    OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: Cb,
    OTEL_TRACES_EXPORTER: "",
    OTEL_TRACES_SAMPLER: gr.ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: "",
    OTEL_LOGS_EXPORTER: "",
    OTEL_EXPORTER_OTLP_INSECURE: "",
    OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
    OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
    OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
    OTEL_EXPORTER_OTLP_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
    OTEL_SEMCONV_STABILITY_OPT_IN: [],
  };
function Ob(e, t, n) {
  if (!(typeof n[e] > "u")) {
    var o = String(n[e]);
    t[e] = o.toLowerCase() === "true";
  }
}
function bb(e, t, n, o, s) {
  if (
    (o === void 0 && (o = -1 / 0),
    s === void 0 && (s = 1 / 0),
    typeof n[e] < "u")
  ) {
    var u = Number(n[e]);
    isNaN(u) || (u < o ? (t[e] = o) : u > s ? (t[e] = s) : (t[e] = u));
  }
}
function xb(e, t, n, o) {
  o === void 0 && (o = vb);
  var s = n[e];
  typeof s == "string" &&
    (t[e] = s.split(o).map(function (u) {
      return u.trim();
    }));
}
var Nb = {
  ALL: Xt.ALL,
  VERBOSE: Xt.VERBOSE,
  DEBUG: Xt.DEBUG,
  INFO: Xt.INFO,
  WARN: Xt.WARN,
  ERROR: Xt.ERROR,
  NONE: Xt.NONE,
};
function Ab(e, t, n) {
  var o = n[e];
  if (typeof o == "string") {
    var s = Nb[o.toUpperCase()];
    s != null && (t[e] = s);
  }
}
function Cv(e) {
  var t = {};
  for (var n in Iv) {
    var o = n;
    switch (o) {
      case "OTEL_LOG_LEVEL":
        Ab(o, t, e);
        break;
      default:
        if (Sb(o)) Ob(o, t, e);
        else if (wb(o)) bb(o, t, e);
        else if (Rb(o)) xb(o, t, e);
        else {
          var s = e[o];
          typeof s < "u" && s !== null && (t[o] = String(s));
        }
    }
  }
  return t;
}
var zs =
  typeof globalThis == "object"
    ? globalThis
    : typeof self == "object"
      ? self
      : typeof window == "object"
        ? window
        : typeof global == "object"
          ? global
          : {};
function ea() {
  var e = Cv(zs);
  return Object.assign({}, Iv, e);
}
function Pb() {
  return Cv(zs);
}
function r_(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55;
}
function pp(e) {
  for (
    var t = new Uint8Array(e.length / 2), n = 0, o = 0;
    o < e.length;
    o += 2
  ) {
    var s = r_(e.charCodeAt(o)),
      u = r_(e.charCodeAt(o + 1));
    t[n++] = (s << 4) | u;
  }
  return t;
}
var Uo = performance,
  Lb = "1.30.1",
  Mb = "process.runtime.name",
  Db = "telemetry.sdk.name",
  Fb = "telemetry.sdk.language",
  Ub = "telemetry.sdk.version",
  jb = Mb,
  Bb = Db,
  Hb = Fb,
  zb = Ub,
  $b = "webjs",
  Wb = $b,
  Oo,
  Ff =
    ((Oo = {}),
    (Oo[Bb] = "opentelemetry"),
    (Oo[jb] = "browser"),
    (Oo[Hb] = Wb),
    (Oo[zb] = Lb),
    Oo);
var Gb = 9,
  Vb = 6,
  Xb = Math.pow(10, Vb),
  tl = Math.pow(10, Gb);
function Hr(e) {
  var t = e / 1e3,
    n = Math.trunc(t),
    o = Math.round((e % 1e3) * Xb);
  return [n, o];
}
function hp() {
  var e = Uo.timeOrigin;
  if (typeof e != "number") {
    var t = Uo;
    e = t.timing && t.timing.fetchStart;
  }
  return e;
}
function nl(e) {
  var t = Hr(hp()),
    n = Hr(typeof e == "number" ? e : Uo.now());
  return Ov(t, n);
}
function $s(e) {
  if (mp(e)) return e;
  if (typeof e == "number") return e < hp() ? nl(e) : Hr(e);
  if (e instanceof Date) return Hr(e.getTime());
  throw TypeError("Invalid input type");
}
function qb(e, t) {
  var n = t[0] - e[0],
    o = t[1] - e[1];
  return (o < 0 && ((n -= 1), (o += tl)), [n, o]);
}
function zr(e) {
  return e[0] * tl + e[1];
}
function mp(e) {
  return (
    Array.isArray(e) &&
    e.length === 2 &&
    typeof e[0] == "number" &&
    typeof e[1] == "number"
  );
}
function i_(e) {
  return mp(e) || typeof e == "number" || e instanceof Date;
}
function Ov(e, t) {
  var n = [e[0] + t[0], e[1] + t[1]];
  return (n[1] >= tl && ((n[1] -= tl), (n[0] += 1)), n);
}
var mr;
(function (e) {
  ((e[(e.SUCCESS = 0)] = "SUCCESS"), (e[(e.FAILED = 1)] = "FAILED"));
})(mr || (mr = {}));
var Yb = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  Kb = (function () {
    function e(t) {
      t === void 0 && (t = {});
      var n;
      ((this._propagators =
        (n = t.propagators) !== null && n !== void 0 ? n : []),
        (this._fields = Array.from(
          new Set(
            this._propagators
              .map(function (o) {
                return typeof o.fields == "function" ? o.fields() : [];
              })
              .reduce(function (o, s) {
                return o.concat(s);
              }, []),
          ),
        )));
    }
    return (
      (e.prototype.inject = function (t, n, o) {
        var s, u;
        try {
          for (
            var c = Yb(this._propagators), d = c.next();
            !d.done;
            d = c.next()
          ) {
            var h = d.value;
            try {
              h.inject(t, n, o);
            } catch (m) {
              et.warn(
                "Failed to inject with " +
                  h.constructor.name +
                  ". Err: " +
                  m.message,
              );
            }
          }
        } catch (m) {
          s = { error: m };
        } finally {
          try {
            d && !d.done && (u = c.return) && u.call(c);
          } finally {
            if (s) throw s.error;
          }
        }
      }),
      (e.prototype.extract = function (t, n, o) {
        return this._propagators.reduce(function (s, u) {
          try {
            return u.extract(s, n, o);
          } catch (c) {
            et.warn(
              "Failed to extract with " +
                u.constructor.name +
                ". Err: " +
                c.message,
            );
          }
          return s;
        }, t);
      }),
      (e.prototype.fields = function () {
        return this._fields.slice();
      }),
      e
    );
  })(),
  kd = "[_0-9a-z-*/]",
  Zb = "[a-z]" + kd + "{0,255}",
  Qb = "[a-z0-9]" + kd + "{0,240}@[a-z]" + kd + "{0,13}",
  Jb = new RegExp("^(?:" + Zb + "|" + Qb + ")$"),
  ex = /^[ -~]{0,255}[!-~]$/,
  tx = /,|=/;
function nx(e) {
  return Jb.test(e);
}
function rx(e) {
  return ex.test(e) && !tx.test(e);
}
var o_ = 32,
  ix = 512,
  s_ = ",",
  a_ = "=",
  ox = (function () {
    function e(t) {
      ((this._internalState = new Map()), t && this._parse(t));
    }
    return (
      (e.prototype.set = function (t, n) {
        var o = this._clone();
        return (
          o._internalState.has(t) && o._internalState.delete(t),
          o._internalState.set(t, n),
          o
        );
      }),
      (e.prototype.unset = function (t) {
        var n = this._clone();
        return (n._internalState.delete(t), n);
      }),
      (e.prototype.get = function (t) {
        return this._internalState.get(t);
      }),
      (e.prototype.serialize = function () {
        var t = this;
        return this._keys()
          .reduce(function (n, o) {
            return (n.push(o + a_ + t.get(o)), n);
          }, [])
          .join(s_);
      }),
      (e.prototype._parse = function (t) {
        t.length > ix ||
          ((this._internalState = t
            .split(s_)
            .reverse()
            .reduce(function (n, o) {
              var s = o.trim(),
                u = s.indexOf(a_);
              if (u !== -1) {
                var c = s.slice(0, u),
                  d = s.slice(u + 1, o.length);
                nx(c) && rx(d) && n.set(c, d);
              }
              return n;
            }, new Map())),
          this._internalState.size > o_ &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, o_),
            )));
      }),
      (e.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
      }),
      (e.prototype._clone = function () {
        var t = new e();
        return ((t._internalState = new Map(this._internalState)), t);
      }),
      e
    );
  })(),
  Uf = "traceparent",
  jf = "tracestate",
  sx = "00",
  ax = "(?!ff)[\\da-f]{2}",
  ux = "(?![0]{32})[\\da-f]{32}",
  lx = "(?![0]{16})[\\da-f]{16}",
  cx = "[\\da-f]{2}",
  fx = new RegExp(
    "^\\s?(" + ax + ")-(" + ux + ")-(" + lx + ")-(" + cx + ")(-.*)?\\s?$",
  );
function dx(e) {
  var t = fx.exec(e);
  return !t || (t[1] === "00" && t[5])
    ? null
    : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
}
var px = (function () {
    function e() {}
    return (
      (e.prototype.inject = function (t, n, o) {
        var s = En.getSpanContext(t);
        if (!(!s || dp(t) || !bl(s))) {
          var u =
            sx +
            "-" +
            s.traceId +
            "-" +
            s.spanId +
            "-0" +
            Number(s.traceFlags || Xr.NONE).toString(16);
          (o.set(n, Uf, u),
            s.traceState && o.set(n, jf, s.traceState.serialize()));
        }
      }),
      (e.prototype.extract = function (t, n, o) {
        var s = o.get(n, Uf);
        if (!s) return t;
        var u = Array.isArray(s) ? s[0] : s;
        if (typeof u != "string") return t;
        var c = dx(u);
        if (!c) return t;
        c.isRemote = !0;
        var d = o.get(n, jf);
        if (d) {
          var h = Array.isArray(d) ? d.join(",") : d;
          c.traceState = new ox(typeof h == "string" ? h : void 0);
        }
        return En.setSpanContext(t, c);
      }),
      (e.prototype.fields = function () {
        return [Uf, jf];
      }),
      e
    );
  })(),
  hx = "[object Object]",
  mx = "[object Null]",
  gx = "[object Undefined]",
  _x = Function.prototype,
  bv = _x.toString,
  yx = bv.call(Object),
  vx = Ex(Object.getPrototypeOf, Object),
  xv = Object.prototype,
  Nv = xv.hasOwnProperty,
  Bi = Symbol ? Symbol.toStringTag : void 0,
  Av = xv.toString;
function Ex(e, t) {
  return function (n) {
    return e(t(n));
  };
}
function u_(e) {
  if (!Sx(e) || Tx(e) !== hx) return !1;
  var t = vx(e);
  if (t === null) return !0;
  var n = Nv.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && bv.call(n) === yx;
}
function Sx(e) {
  return e != null && typeof e == "object";
}
function Tx(e) {
  return e == null
    ? e === void 0
      ? gx
      : mx
    : Bi && Bi in Object(e)
      ? wx(e)
      : kx(e);
}
function wx(e) {
  var t = Nv.call(e, Bi),
    n = e[Bi],
    o = !1;
  try {
    ((e[Bi] = void 0), (o = !0));
  } catch {}
  var s = Av.call(e);
  return (o && (t ? (e[Bi] = n) : delete e[Bi]), s);
}
function kx(e) {
  return Av.call(e);
}
var Rx = 20;
function Ix() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e.shift(), o = new WeakMap(); e.length > 0; )
    n = Pv(n, e.shift(), 0, o);
  return n;
}
function Bf(e) {
  return rl(e) ? e.slice() : e;
}
function Pv(e, t, n, o) {
  n === void 0 && (n = 0);
  var s;
  if (!(n > Rx)) {
    if ((n++, ju(e) || ju(t) || Lv(t))) s = Bf(t);
    else if (rl(e)) {
      if (((s = e.slice()), rl(t)))
        for (var u = 0, c = t.length; u < c; u++) s.push(Bf(t[u]));
      else if (As(t))
        for (var d = Object.keys(t), u = 0, c = d.length; u < c; u++) {
          var h = d[u];
          s[h] = Bf(t[h]);
        }
    } else if (As(e))
      if (As(t)) {
        if (!Cx(e, t)) return t;
        s = Object.assign({}, e);
        for (var d = Object.keys(t), u = 0, c = d.length; u < c; u++) {
          var h = d[u],
            m = t[h];
          if (ju(m)) typeof m > "u" ? delete s[h] : (s[h] = m);
          else {
            var _ = s[h],
              y = m;
            if (l_(e, h, o) || l_(t, h, o)) delete s[h];
            else {
              if (As(_) && As(y)) {
                var E = o.get(_) || [],
                  N = o.get(y) || [];
                (E.push({ obj: e, key: h }),
                  N.push({ obj: t, key: h }),
                  o.set(_, E),
                  o.set(y, N));
              }
              s[h] = Pv(s[h], m, n, o);
            }
          }
        }
      } else s = t;
    return s;
  }
}
function l_(e, t, n) {
  for (var o = n.get(e[t]) || [], s = 0, u = o.length; s < u; s++) {
    var c = o[s];
    if (c.key === t && c.obj === e) return !0;
  }
  return !1;
}
function rl(e) {
  return Array.isArray(e);
}
function Lv(e) {
  return typeof e == "function";
}
function As(e) {
  return !ju(e) && !rl(e) && !Lv(e) && typeof e == "object";
}
function ju(e) {
  return (
    typeof e == "string" ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e > "u" ||
    e instanceof Date ||
    e instanceof RegExp ||
    e === null
  );
}
function Cx(e, t) {
  return !(!u_(e) || !u_(t));
}
var Ox = function (e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    o = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && o >= e.length && (e = void 0),
          { value: e && e[o++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
};
function Mv(e, t) {
  return typeof t == "string" ? e === t : !!e.match(t);
}
function bx(e, t) {
  var n, o;
  if (!t) return !1;
  try {
    for (var s = Ox(t), u = s.next(); !u.done; u = s.next()) {
      var c = u.value;
      if (Mv(e, c)) return !0;
    }
  } catch (d) {
    n = { error: d };
  } finally {
    try {
      u && !u.done && (o = s.return) && o.call(s);
    } finally {
      if (n) throw n.error;
    }
  }
  return !1;
}
var xx = (function () {
    function e() {
      var t = this;
      this._promise = new Promise(function (n, o) {
        ((t._resolve = n), (t._reject = o));
      });
    }
    return (
      Object.defineProperty(e.prototype, "promise", {
        get: function () {
          return this._promise;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.resolve = function (t) {
        this._resolve(t);
      }),
      (e.prototype.reject = function (t) {
        this._reject(t);
      }),
      e
    );
  })(),
  Nx = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  Ax = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Px = (function () {
    function e(t, n) {
      ((this._callback = t),
        (this._that = n),
        (this._isCalled = !1),
        (this._deferred = new xx()));
    }
    return (
      Object.defineProperty(e.prototype, "isCalled", {
        get: function () {
          return this._isCalled;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "promise", {
        get: function () {
          return this._deferred.promise;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.call = function () {
        for (var t, n = this, o = [], s = 0; s < arguments.length; s++)
          o[s] = arguments[s];
        if (!this._isCalled) {
          this._isCalled = !0;
          try {
            Promise.resolve(
              (t = this._callback).call.apply(t, Ax([this._that], Nx(o), !1)),
            ).then(
              function (u) {
                return n._deferred.resolve(u);
              },
              function (u) {
                return n._deferred.reject(u);
              },
            );
          } catch (u) {
            this._deferred.reject(u);
          }
        }
        return this._deferred.promise;
      }),
      e
    );
  })(),
  Lx = "exception.type",
  Mx = "exception.message",
  Dx = "exception.stacktrace",
  Hf = Lx,
  zf = Mx,
  Fx = Dx,
  Ux = "exception",
  Rd = function () {
    return (
      (Rd =
        Object.assign ||
        function (e) {
          for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
      Rd.apply(this, arguments)
    );
  },
  jx = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  c_ = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  Bx = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Hx = (function () {
    function e(t, n, o, s, u, c, d, h, m, _) {
      (d === void 0 && (d = []),
        (this.attributes = {}),
        (this.links = []),
        (this.events = []),
        (this._droppedAttributesCount = 0),
        (this._droppedEventsCount = 0),
        (this._droppedLinksCount = 0),
        (this.status = { code: Sd.UNSET }),
        (this.endTime = [0, 0]),
        (this._ended = !1),
        (this._duration = [-1, -1]),
        (this.name = o),
        (this._spanContext = s),
        (this.parentSpanId = c),
        (this.kind = u),
        (this.links = d));
      var y = Date.now();
      ((this._performanceStartTime = Uo.now()),
        (this._performanceOffset = y - (this._performanceStartTime + hp())),
        (this._startTimeProvided = h != null),
        (this.startTime = this._getTime(h ?? y)),
        (this.resource = t.resource),
        (this.instrumentationLibrary = t.instrumentationLibrary),
        (this._spanLimits = t.getSpanLimits()),
        (this._attributeValueLengthLimit =
          this._spanLimits.attributeValueLengthLimit || 0),
        _ != null && this.setAttributes(_),
        (this._spanProcessor = t.getActiveSpanProcessor()),
        this._spanProcessor.onStart(this, n));
    }
    return (
      (e.prototype.spanContext = function () {
        return this._spanContext;
      }),
      (e.prototype.setAttribute = function (t, n) {
        return n == null || this._isSpanEnded()
          ? this
          : t.length === 0
            ? (et.warn("Invalid attribute key: " + t), this)
            : kv(n)
              ? Object.keys(this.attributes).length >=
                  this._spanLimits.attributeCountLimit &&
                !Object.prototype.hasOwnProperty.call(this.attributes, t)
                ? (this._droppedAttributesCount++, this)
                : ((this.attributes[t] = this._truncateToSize(n)), this)
              : (et.warn("Invalid attribute value set for key: " + t), this);
      }),
      (e.prototype.setAttributes = function (t) {
        var n, o;
        try {
          for (
            var s = jx(Object.entries(t)), u = s.next();
            !u.done;
            u = s.next()
          ) {
            var c = c_(u.value, 2),
              d = c[0],
              h = c[1];
            this.setAttribute(d, h);
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            u && !u.done && (o = s.return) && o.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return this;
      }),
      (e.prototype.addEvent = function (t, n, o) {
        if (this._isSpanEnded()) return this;
        if (this._spanLimits.eventCountLimit === 0)
          return (
            et.warn("No events allowed."),
            this._droppedEventsCount++,
            this
          );
        (this.events.length >= this._spanLimits.eventCountLimit &&
          (this._droppedEventsCount === 0 && et.debug("Dropping extra events."),
          this.events.shift(),
          this._droppedEventsCount++),
          i_(n) && (i_(o) || (o = n), (n = void 0)));
        var s = Du(n);
        return (
          this.events.push({
            name: t,
            attributes: s,
            time: this._getTime(o),
            droppedAttributesCount: 0,
          }),
          this
        );
      }),
      (e.prototype.addLink = function (t) {
        return (this.links.push(t), this);
      }),
      (e.prototype.addLinks = function (t) {
        var n;
        return ((n = this.links).push.apply(n, Bx([], c_(t), !1)), this);
      }),
      (e.prototype.setStatus = function (t) {
        return this._isSpanEnded()
          ? this
          : ((this.status = Rd({}, t)),
            this.status.message != null &&
              typeof t.message != "string" &&
              (et.warn(
                "Dropping invalid status.message of type '" +
                  typeof t.message +
                  "', expected 'string'",
              ),
              delete this.status.message),
            this);
      }),
      (e.prototype.updateName = function (t) {
        return this._isSpanEnded() ? this : ((this.name = t), this);
      }),
      (e.prototype.end = function (t) {
        if (this._isSpanEnded()) {
          et.error(
            this.name +
              " " +
              this._spanContext.traceId +
              "-" +
              this._spanContext.spanId +
              " - You can only call end() on a span once.",
          );
          return;
        }
        ((this._ended = !0),
          (this.endTime = this._getTime(t)),
          (this._duration = qb(this.startTime, this.endTime)),
          this._duration[0] < 0 &&
            (et.warn(
              "Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.",
              this.startTime,
              this.endTime,
            ),
            (this.endTime = this.startTime.slice()),
            (this._duration = [0, 0])),
          this._droppedEventsCount > 0 &&
            et.warn(
              "Dropped " +
                this._droppedEventsCount +
                " events because eventCountLimit reached",
            ),
          this._spanProcessor.onEnd(this));
      }),
      (e.prototype._getTime = function (t) {
        if (typeof t == "number" && t <= Uo.now())
          return nl(t + this._performanceOffset);
        if (typeof t == "number") return Hr(t);
        if (t instanceof Date) return Hr(t.getTime());
        if (mp(t)) return t;
        if (this._startTimeProvided) return Hr(Date.now());
        var n = Uo.now() - this._performanceStartTime;
        return Ov(this.startTime, Hr(n));
      }),
      (e.prototype.isRecording = function () {
        return this._ended === !1;
      }),
      (e.prototype.recordException = function (t, n) {
        var o = {};
        (typeof t == "string"
          ? (o[zf] = t)
          : t &&
            (t.code ? (o[Hf] = t.code.toString()) : t.name && (o[Hf] = t.name),
            t.message && (o[zf] = t.message),
            t.stack && (o[Fx] = t.stack)),
          o[Hf] || o[zf]
            ? this.addEvent(Ux, o, n)
            : et.warn("Failed to record an exception " + t));
      }),
      Object.defineProperty(e.prototype, "duration", {
        get: function () {
          return this._duration;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "ended", {
        get: function () {
          return this._ended;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "droppedAttributesCount", {
        get: function () {
          return this._droppedAttributesCount;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "droppedEventsCount", {
        get: function () {
          return this._droppedEventsCount;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "droppedLinksCount", {
        get: function () {
          return this._droppedLinksCount;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._isSpanEnded = function () {
        return (
          this._ended &&
            et.warn(
              "Can not execute the operation on ended Span {traceId: " +
                this._spanContext.traceId +
                ", spanId: " +
                this._spanContext.spanId +
                "}",
            ),
          this._ended
        );
      }),
      (e.prototype._truncateToLimitUtil = function (t, n) {
        return t.length <= n ? t : t.substring(0, n);
      }),
      (e.prototype._truncateToSize = function (t) {
        var n = this,
          o = this._attributeValueLengthLimit;
        return o <= 0
          ? (et.warn("Attribute value limit must be positive, got " + o), t)
          : typeof t == "string"
            ? this._truncateToLimitUtil(t, o)
            : Array.isArray(t)
              ? t.map(function (s) {
                  return typeof s == "string"
                    ? n._truncateToLimitUtil(s, o)
                    : s;
                })
              : t;
      }),
      e
    );
  })(),
  qo;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
})(qo || (qo = {}));
var il = (function () {
    function e() {}
    return (
      (e.prototype.shouldSample = function () {
        return { decision: qo.NOT_RECORD };
      }),
      (e.prototype.toString = function () {
        return "AlwaysOffSampler";
      }),
      e
    );
  })(),
  jo = (function () {
    function e() {}
    return (
      (e.prototype.shouldSample = function () {
        return { decision: qo.RECORD_AND_SAMPLED };
      }),
      (e.prototype.toString = function () {
        return "AlwaysOnSampler";
      }),
      e
    );
  })(),
  $f = (function () {
    function e(t) {
      var n, o, s, u;
      ((this._root = t.root),
        this._root ||
          (Xo(
            new Error("ParentBasedSampler must have a root sampler configured"),
          ),
          (this._root = new jo())),
        (this._remoteParentSampled =
          (n = t.remoteParentSampled) !== null && n !== void 0 ? n : new jo()),
        (this._remoteParentNotSampled =
          (o = t.remoteParentNotSampled) !== null && o !== void 0
            ? o
            : new il()),
        (this._localParentSampled =
          (s = t.localParentSampled) !== null && s !== void 0 ? s : new jo()),
        (this._localParentNotSampled =
          (u = t.localParentNotSampled) !== null && u !== void 0
            ? u
            : new il()));
    }
    return (
      (e.prototype.shouldSample = function (t, n, o, s, u, c) {
        var d = En.getSpanContext(t);
        return !d || !bl(d)
          ? this._root.shouldSample(t, n, o, s, u, c)
          : d.isRemote
            ? d.traceFlags & Xr.SAMPLED
              ? this._remoteParentSampled.shouldSample(t, n, o, s, u, c)
              : this._remoteParentNotSampled.shouldSample(t, n, o, s, u, c)
            : d.traceFlags & Xr.SAMPLED
              ? this._localParentSampled.shouldSample(t, n, o, s, u, c)
              : this._localParentNotSampled.shouldSample(t, n, o, s, u, c);
      }),
      (e.prototype.toString = function () {
        return (
          "ParentBased{root=" +
          this._root.toString() +
          ", remoteParentSampled=" +
          this._remoteParentSampled.toString() +
          ", remoteParentNotSampled=" +
          this._remoteParentNotSampled.toString() +
          ", localParentSampled=" +
          this._localParentSampled.toString() +
          ", localParentNotSampled=" +
          this._localParentNotSampled.toString() +
          "}"
        );
      }),
      e
    );
  })(),
  f_ = (function () {
    function e(t) {
      (t === void 0 && (t = 0),
        (this._ratio = t),
        (this._ratio = this._normalize(t)),
        (this._upperBound = Math.floor(this._ratio * 4294967295)));
    }
    return (
      (e.prototype.shouldSample = function (t, n) {
        return {
          decision:
            _v(n) && this._accumulate(n) < this._upperBound
              ? qo.RECORD_AND_SAMPLED
              : qo.NOT_RECORD,
        };
      }),
      (e.prototype.toString = function () {
        return "TraceIdRatioBased{" + this._ratio + "}";
      }),
      (e.prototype._normalize = function (t) {
        return typeof t != "number" || isNaN(t)
          ? 0
          : t >= 1
            ? 1
            : t <= 0
              ? 0
              : t;
      }),
      (e.prototype._accumulate = function (t) {
        for (var n = 0, o = 0; o < t.length / 8; o++) {
          var s = o * 8,
            u = parseInt(t.slice(s, s + 8), 16);
          n = (n ^ u) >>> 0;
        }
        return n;
      }),
      e
    );
  })(),
  zx = gr.AlwaysOn,
  bo = 1;
function Dv() {
  var e = ea();
  return {
    sampler: Fv(e),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: e.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: e.OTEL_ATTRIBUTE_COUNT_LIMIT,
    },
    spanLimits: {
      attributeValueLengthLimit: e.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: e.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
      linkCountLimit: e.OTEL_SPAN_LINK_COUNT_LIMIT,
      eventCountLimit: e.OTEL_SPAN_EVENT_COUNT_LIMIT,
      attributePerEventCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
      attributePerLinkCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
    },
    mergeResourceWithDefaults: !0,
  };
}
function Fv(e) {
  switch ((e === void 0 && (e = ea()), e.OTEL_TRACES_SAMPLER)) {
    case gr.AlwaysOn:
      return new jo();
    case gr.AlwaysOff:
      return new il();
    case gr.ParentBasedAlwaysOn:
      return new $f({ root: new jo() });
    case gr.ParentBasedAlwaysOff:
      return new $f({ root: new il() });
    case gr.TraceIdRatio:
      return new f_(d_(e));
    case gr.ParentBasedTraceIdRatio:
      return new $f({ root: new f_(d_(e)) });
    default:
      return (
        et.error(
          'OTEL_TRACES_SAMPLER value "' +
            e.OTEL_TRACES_SAMPLER +
            " invalid, defaulting to " +
            zx +
            '".',
        ),
        new jo()
      );
  }
}
function d_(e) {
  if (e.OTEL_TRACES_SAMPLER_ARG === void 0 || e.OTEL_TRACES_SAMPLER_ARG === "")
    return (
      et.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + bo + "."),
      bo
    );
  var t = Number(e.OTEL_TRACES_SAMPLER_ARG);
  return isNaN(t)
    ? (et.error(
        "OTEL_TRACES_SAMPLER_ARG=" +
          e.OTEL_TRACES_SAMPLER_ARG +
          " was given, but it is invalid, defaulting to " +
          bo +
          ".",
      ),
      bo)
    : t < 0 || t > 1
      ? (et.error(
          "OTEL_TRACES_SAMPLER_ARG=" +
            e.OTEL_TRACES_SAMPLER_ARG +
            " was given, but it is out of range ([0..1]), defaulting to " +
            bo +
            ".",
        ),
        bo)
      : t;
}
function $x(e) {
  var t = { sampler: Fv() },
    n = Dv(),
    o = Object.assign({}, n, t, e);
  return (
    (o.generalLimits = Object.assign(
      {},
      n.generalLimits,
      e.generalLimits || {},
    )),
    (o.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
    o
  );
}
function Wx(e) {
  var t,
    n,
    o,
    s,
    u,
    c,
    d,
    h,
    m,
    _,
    y,
    E,
    N = Object.assign({}, e.spanLimits),
    P = Pb();
  return (
    (N.attributeCountLimit =
      (c =
        (u =
          (s =
            (n =
              (t = e.spanLimits) === null || t === void 0
                ? void 0
                : t.attributeCountLimit) !== null && n !== void 0
              ? n
              : (o = e.generalLimits) === null || o === void 0
                ? void 0
                : o.attributeCountLimit) !== null && s !== void 0
            ? s
            : P.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && u !== void 0
          ? u
          : P.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && c !== void 0
        ? c
        : Uu),
    (N.attributeValueLengthLimit =
      (E =
        (y =
          (_ =
            (h =
              (d = e.spanLimits) === null || d === void 0
                ? void 0
                : d.attributeValueLengthLimit) !== null && h !== void 0
              ? h
              : (m = e.generalLimits) === null || m === void 0
                ? void 0
                : m.attributeValueLengthLimit) !== null && _ !== void 0
            ? _
            : P.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && y !== void 0
          ? y
          : P.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && E !== void 0
        ? E
        : Fu),
    Object.assign({}, e, { spanLimits: N })
  );
}
var Gx = (function () {
    function e(t, n) {
      ((this._exporter = t),
        (this._isExporting = !1),
        (this._finishedSpans = []),
        (this._droppedSpansCount = 0));
      var o = ea();
      ((this._maxExportBatchSize =
        typeof (n == null ? void 0 : n.maxExportBatchSize) == "number"
          ? n.maxExportBatchSize
          : o.OTEL_BSP_MAX_EXPORT_BATCH_SIZE),
        (this._maxQueueSize =
          typeof (n == null ? void 0 : n.maxQueueSize) == "number"
            ? n.maxQueueSize
            : o.OTEL_BSP_MAX_QUEUE_SIZE),
        (this._scheduledDelayMillis =
          typeof (n == null ? void 0 : n.scheduledDelayMillis) == "number"
            ? n.scheduledDelayMillis
            : o.OTEL_BSP_SCHEDULE_DELAY),
        (this._exportTimeoutMillis =
          typeof (n == null ? void 0 : n.exportTimeoutMillis) == "number"
            ? n.exportTimeoutMillis
            : o.OTEL_BSP_EXPORT_TIMEOUT),
        (this._shutdownOnce = new Px(this._shutdown, this)),
        this._maxExportBatchSize > this._maxQueueSize &&
          (et.warn(
            "BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize",
          ),
          (this._maxExportBatchSize = this._maxQueueSize)));
    }
    return (
      (e.prototype.forceFlush = function () {
        return this._shutdownOnce.isCalled
          ? this._shutdownOnce.promise
          : this._flushAll();
      }),
      (e.prototype.onStart = function (t, n) {}),
      (e.prototype.onEnd = function (t) {
        this._shutdownOnce.isCalled ||
          ((t.spanContext().traceFlags & Xr.SAMPLED) !== 0 &&
            this._addToBuffer(t));
      }),
      (e.prototype.shutdown = function () {
        return this._shutdownOnce.call();
      }),
      (e.prototype._shutdown = function () {
        var t = this;
        return Promise.resolve()
          .then(function () {
            return t.onShutdown();
          })
          .then(function () {
            return t._flushAll();
          })
          .then(function () {
            return t._exporter.shutdown();
          });
      }),
      (e.prototype._addToBuffer = function (t) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
          (this._droppedSpansCount === 0 &&
            et.debug("maxQueueSize reached, dropping spans"),
            this._droppedSpansCount++);
          return;
        }
        (this._droppedSpansCount > 0 &&
          (et.warn(
            "Dropped " +
              this._droppedSpansCount +
              " spans because maxQueueSize reached",
          ),
          (this._droppedSpansCount = 0)),
          this._finishedSpans.push(t),
          this._maybeStartTimer());
      }),
      (e.prototype._flushAll = function () {
        var t = this;
        return new Promise(function (n, o) {
          for (
            var s = [],
              u = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize),
              c = 0,
              d = u;
            c < d;
            c++
          )
            s.push(t._flushOneBatch());
          Promise.all(s)
            .then(function () {
              n();
            })
            .catch(o);
        });
      }),
      (e.prototype._flushOneBatch = function () {
        var t = this;
        return (
          this._clearTimer(),
          this._finishedSpans.length === 0
            ? Promise.resolve()
            : new Promise(function (n, o) {
                var s = setTimeout(function () {
                  o(new Error("Timeout"));
                }, t._exportTimeoutMillis);
                Nn.with(nb(Nn.active()), function () {
                  var u;
                  t._finishedSpans.length <= t._maxExportBatchSize
                    ? ((u = t._finishedSpans), (t._finishedSpans = []))
                    : (u = t._finishedSpans.splice(0, t._maxExportBatchSize));
                  for (
                    var c = function () {
                        return t._exporter.export(u, function (y) {
                          var E;
                          (clearTimeout(s),
                            y.code === mr.SUCCESS
                              ? n()
                              : o(
                                  (E = y.error) !== null && E !== void 0
                                    ? E
                                    : new Error(
                                        "BatchSpanProcessor: span export failed",
                                      ),
                                ));
                        });
                      },
                      d = null,
                      h = 0,
                      m = u.length;
                    h < m;
                    h++
                  ) {
                    var _ = u[h];
                    _.resource.asyncAttributesPending &&
                      _.resource.waitForAsyncAttributes &&
                      (d ?? (d = []),
                      d.push(_.resource.waitForAsyncAttributes()));
                  }
                  d === null
                    ? c()
                    : Promise.all(d).then(c, function (y) {
                        (Xo(y), o(y));
                      });
                });
              })
        );
      }),
      (e.prototype._maybeStartTimer = function () {
        var t = this;
        if (!this._isExporting) {
          var n = function () {
            ((t._isExporting = !0),
              t
                ._flushOneBatch()
                .finally(function () {
                  ((t._isExporting = !1),
                    t._finishedSpans.length > 0 &&
                      (t._clearTimer(), t._maybeStartTimer()));
                })
                .catch(function (o) {
                  ((t._isExporting = !1), Xo(o));
                }));
          };
          if (this._finishedSpans.length >= this._maxExportBatchSize)
            return n();
          this._timer === void 0 &&
            ((this._timer = setTimeout(function () {
              return n();
            }, this._scheduledDelayMillis)),
            this._timer,
            void 0);
        }
      }),
      (e.prototype._clearTimer = function () {
        this._timer !== void 0 &&
          (clearTimeout(this._timer), (this._timer = void 0));
      }),
      e
    );
  })(),
  Vx = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  Uv = (function (e) {
    Vx(t, e);
    function t(n, o) {
      var s = e.call(this, n, o) || this;
      return (s.onInit(o), s);
    }
    return (
      (t.prototype.onInit = function (n) {
        var o = this;
        (n == null ? void 0 : n.disableAutoFlushOnDocumentHide) !== !0 &&
          typeof document < "u" &&
          ((this._visibilityChangeListener = function () {
            document.visibilityState === "hidden" &&
              o.forceFlush().catch(function (s) {
                Xo(s);
              });
          }),
          (this._pageHideListener = function () {
            o.forceFlush().catch(function (s) {
              Xo(s);
            });
          }),
          document.addEventListener(
            "visibilitychange",
            this._visibilityChangeListener,
          ),
          document.addEventListener("pagehide", this._pageHideListener));
      }),
      (t.prototype.onShutdown = function () {
        typeof document < "u" &&
          (this._visibilityChangeListener &&
            document.removeEventListener(
              "visibilitychange",
              this._visibilityChangeListener,
            ),
          this._pageHideListener &&
            document.removeEventListener("pagehide", this._pageHideListener));
      }),
      t
    );
  })(Gx),
  Xx = 8,
  qx = 16,
  Yx = (function () {
    function e() {
      ((this.generateTraceId = p_(qx)), (this.generateSpanId = p_(Xx)));
    }
    return e;
  })(),
  Ou = Array(32);
function p_(e) {
  return function () {
    for (var n = 0; n < e * 2; n++)
      ((Ou[n] = Math.floor(Math.random() * 16) + 48),
        Ou[n] >= 58 && (Ou[n] += 39));
    return String.fromCharCode.apply(null, Ou.slice(0, e * 2));
  };
}
var Kx = (function () {
    function e(t, n, o) {
      this._tracerProvider = o;
      var s = $x(n);
      ((this._sampler = s.sampler),
        (this._generalLimits = s.generalLimits),
        (this._spanLimits = s.spanLimits),
        (this._idGenerator = n.idGenerator || new Yx()),
        (this.resource = o.resource),
        (this.instrumentationLibrary = t));
    }
    return (
      (e.prototype.startSpan = function (t, n, o) {
        var s, u, c;
        (n === void 0 && (n = {}),
          o === void 0 && (o = Nn.active()),
          n.root && (o = En.deleteSpan(o)));
        var d = En.getSpan(o);
        if (dp(o)) {
          et.debug("Instrumentation suppressed, returning Noop Span");
          var h = En.wrapSpanContext(mv);
          return h;
        }
        var m = d == null ? void 0 : d.spanContext(),
          _ = this._idGenerator.generateSpanId(),
          y,
          E,
          N;
        !m || !En.isSpanContextValid(m)
          ? (y = this._idGenerator.generateTraceId())
          : ((y = m.traceId), (E = m.traceState), (N = m.spanId));
        var P = (s = n.kind) !== null && s !== void 0 ? s : el.INTERNAL,
          j = ((u = n.links) !== null && u !== void 0 ? u : []).map(
            function (q) {
              return { context: q.context, attributes: Du(q.attributes) };
            },
          ),
          W = Du(n.attributes),
          z = this._sampler.shouldSample(o, y, t, P, W, j);
        E = (c = z.traceState) !== null && c !== void 0 ? c : E;
        var H = z.decision === Ju.RECORD_AND_SAMPLED ? Xr.SAMPLED : Xr.NONE,
          ie = { traceId: y, spanId: _, traceFlags: H, traceState: E };
        if (z.decision === Ju.NOT_RECORD) {
          et.debug(
            "Recording is off, propagating context in a non-recording span",
          );
          var h = En.wrapSpanContext(ie);
          return h;
        }
        var U = Du(Object.assign(W, z.attributes)),
          C = new Hx(this, o, t, ie, P, N, j, n.startTime, void 0, U);
        return C;
      }),
      (e.prototype.startActiveSpan = function (t, n, o, s) {
        var u, c, d;
        if (!(arguments.length < 2)) {
          arguments.length === 2
            ? (d = n)
            : arguments.length === 3
              ? ((u = n), (d = o))
              : ((u = n), (c = o), (d = s));
          var h = c ?? Nn.active(),
            m = this.startSpan(t, u, h),
            _ = En.setSpan(h, m);
          return Nn.with(_, d, void 0, m);
        }
      }),
      (e.prototype.getGeneralLimits = function () {
        return this._generalLimits;
      }),
      (e.prototype.getSpanLimits = function () {
        return this._spanLimits;
      }),
      (e.prototype.getActiveSpanProcessor = function () {
        return this._tracerProvider.getActiveSpanProcessor();
      }),
      e
    );
  })(),
  Zx = "service.name",
  Qx = "telemetry.sdk.name",
  Jx = "telemetry.sdk.language",
  eN = "telemetry.sdk.version",
  tN = Zx,
  h_ = Qx,
  m_ = Jx,
  g_ = eN;
function nN() {
  return "unknown_service";
}
var gi = function () {
    return (
      (gi =
        Object.assign ||
        function (e) {
          for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
      gi.apply(this, arguments)
    );
  },
  rN = function (e, t, n, o) {
    function s(u) {
      return u instanceof n
        ? u
        : new n(function (c) {
            c(u);
          });
    }
    return new (n || (n = Promise))(function (u, c) {
      function d(_) {
        try {
          m(o.next(_));
        } catch (y) {
          c(y);
        }
      }
      function h(_) {
        try {
          m(o.throw(_));
        } catch (y) {
          c(y);
        }
      }
      function m(_) {
        _.done ? u(_.value) : s(_.value).then(d, h);
      }
      m((o = o.apply(e, t || [])).next());
    });
  },
  iN = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      u,
      c;
    return (
      (c = { next: d(0), throw: d(1), return: d(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function d(m) {
      return function (_) {
        return h([m, _]);
      };
    }
    function h(m) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (u =
                m[0] & 2
                  ? s.return
                  : m[0]
                    ? s.throw || ((u = s.return) && u.call(s), 0)
                    : s.next) &&
              !(u = u.call(s, m[1])).done)
          )
            return u;
          switch (((s = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return (n.label++, { value: m[1], done: !1 });
            case 5:
              (n.label++, (s = m[1]), (m = [0]));
              continue;
            case 7:
              ((m = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((u = n.trys),
                !(u = u.length > 0 && u[u.length - 1]) &&
                  (m[0] === 6 || m[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                n.label = m[1];
                break;
              }
              if (m[0] === 6 && n.label < u[1]) {
                ((n.label = u[1]), (u = m));
                break;
              }
              if (u && n.label < u[2]) {
                ((n.label = u[2]), n.ops.push(m));
                break;
              }
              (u[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          m = t.call(e, n);
        } catch (_) {
          ((m = [6, _]), (s = 0));
        } finally {
          o = u = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  },
  oN = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  Id = (function () {
    function e(t, n) {
      var o = this,
        s;
      ((this._attributes = t),
        (this.asyncAttributesPending = n != null),
        (this._syncAttributes =
          (s = this._attributes) !== null && s !== void 0 ? s : {}),
        (this._asyncAttributesPromise =
          n == null
            ? void 0
            : n.then(
                function (u) {
                  return (
                    (o._attributes = Object.assign({}, o._attributes, u)),
                    (o.asyncAttributesPending = !1),
                    u
                  );
                },
                function (u) {
                  return (
                    et.debug(
                      "a resource's async attributes promise rejected: %s",
                      u,
                    ),
                    (o.asyncAttributesPending = !1),
                    {}
                  );
                },
              )));
    }
    return (
      (e.empty = function () {
        return e.EMPTY;
      }),
      (e.default = function () {
        var t;
        return new e(
          ((t = {}),
          (t[tN] = nN()),
          (t[m_] = Ff[m_]),
          (t[h_] = Ff[h_]),
          (t[g_] = Ff[g_]),
          t),
        );
      }),
      Object.defineProperty(e.prototype, "attributes", {
        get: function () {
          var t;
          return (
            this.asyncAttributesPending &&
              et.error(
                "Accessing resource attributes before async attributes settled",
              ),
            (t = this._attributes) !== null && t !== void 0 ? t : {}
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.waitForAsyncAttributes = function () {
        return rN(this, void 0, void 0, function () {
          return iN(this, function (t) {
            switch (t.label) {
              case 0:
                return this.asyncAttributesPending
                  ? [4, this._asyncAttributesPromise]
                  : [3, 2];
              case 1:
                (t.sent(), (t.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.prototype.merge = function (t) {
        var n = this,
          o;
        if (!t) return this;
        var s = gi(
          gi({}, this._syncAttributes),
          (o = t._syncAttributes) !== null && o !== void 0 ? o : t.attributes,
        );
        if (!this._asyncAttributesPromise && !t._asyncAttributesPromise)
          return new e(s);
        var u = Promise.all([
          this._asyncAttributesPromise,
          t._asyncAttributesPromise,
        ]).then(function (c) {
          var d,
            h = oN(c, 2),
            m = h[0],
            _ = h[1];
          return gi(
            gi(
              gi(gi({}, n._syncAttributes), m),
              (d = t._syncAttributes) !== null && d !== void 0
                ? d
                : t.attributes,
            ),
            _,
          );
        });
        return new e(s, u);
      }),
      (e.EMPTY = new e({})),
      e
    );
  })(),
  bu = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  __ = (function () {
    function e(t) {
      this._spanProcessors = t;
    }
    return (
      (e.prototype.forceFlush = function () {
        var t,
          n,
          o = [];
        try {
          for (
            var s = bu(this._spanProcessors), u = s.next();
            !u.done;
            u = s.next()
          ) {
            var c = u.value;
            o.push(c.forceFlush());
          }
        } catch (d) {
          t = { error: d };
        } finally {
          try {
            u && !u.done && (n = s.return) && n.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return new Promise(function (d) {
          Promise.all(o)
            .then(function () {
              d();
            })
            .catch(function (h) {
              (Xo(h || new Error("MultiSpanProcessor: forceFlush failed")),
                d());
            });
        });
      }),
      (e.prototype.onStart = function (t, n) {
        var o, s;
        try {
          for (
            var u = bu(this._spanProcessors), c = u.next();
            !c.done;
            c = u.next()
          ) {
            var d = c.value;
            d.onStart(t, n);
          }
        } catch (h) {
          o = { error: h };
        } finally {
          try {
            c && !c.done && (s = u.return) && s.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
      }),
      (e.prototype.onEnd = function (t) {
        var n, o;
        try {
          for (
            var s = bu(this._spanProcessors), u = s.next();
            !u.done;
            u = s.next()
          ) {
            var c = u.value;
            c.onEnd(t);
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            u && !u.done && (o = s.return) && o.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
      }),
      (e.prototype.shutdown = function () {
        var t,
          n,
          o = [];
        try {
          for (
            var s = bu(this._spanProcessors), u = s.next();
            !u.done;
            u = s.next()
          ) {
            var c = u.value;
            o.push(c.shutdown());
          }
        } catch (d) {
          t = { error: d };
        } finally {
          try {
            u && !u.done && (n = s.return) && n.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return new Promise(function (d, h) {
          Promise.all(o).then(function () {
            d();
          }, h);
        });
      }),
      e
    );
  })(),
  sN = (function () {
    function e() {}
    return (
      (e.prototype.onStart = function (t, n) {}),
      (e.prototype.onEnd = function (t) {}),
      (e.prototype.shutdown = function () {
        return Promise.resolve();
      }),
      (e.prototype.forceFlush = function () {
        return Promise.resolve();
      }),
      e
    );
  })(),
  aN = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  uN = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Hi;
(function (e) {
  ((e[(e.resolved = 0)] = "resolved"),
    (e[(e.timeout = 1)] = "timeout"),
    (e[(e.error = 2)] = "error"),
    (e[(e.unresolved = 3)] = "unresolved"));
})(Hi || (Hi = {}));
var lN = (function () {
    function e(t) {
      t === void 0 && (t = {});
      var n, o;
      ((this._registeredSpanProcessors = []), (this._tracers = new Map()));
      var s = Ix({}, Dv(), Wx(t));
      if (
        ((this.resource =
          (n = s.resource) !== null && n !== void 0 ? n : Id.empty()),
        s.mergeResourceWithDefaults &&
          (this.resource = Id.default().merge(this.resource)),
        (this._config = Object.assign({}, s, { resource: this.resource })),
        !((o = t.spanProcessors) === null || o === void 0) && o.length)
      )
        ((this._registeredSpanProcessors = uN([], aN(t.spanProcessors), !1)),
          (this.activeSpanProcessor = new __(this._registeredSpanProcessors)));
      else {
        var u = this._buildExporterFromEnv();
        if (u !== void 0) {
          var c = new Uv(u);
          this.activeSpanProcessor = c;
        } else this.activeSpanProcessor = new sN();
      }
    }
    return (
      (e.prototype.getTracer = function (t, n, o) {
        var s =
          t +
          "@" +
          (n || "") +
          ":" +
          ((o == null ? void 0 : o.schemaUrl) || "");
        return (
          this._tracers.has(s) ||
            this._tracers.set(
              s,
              new Kx(
                {
                  name: t,
                  version: n,
                  schemaUrl: o == null ? void 0 : o.schemaUrl,
                },
                this._config,
                this,
              ),
            ),
          this._tracers.get(s)
        );
      }),
      (e.prototype.addSpanProcessor = function (t) {
        (this._registeredSpanProcessors.length === 0 &&
          this.activeSpanProcessor.shutdown().catch(function (n) {
            return et.error(
              "Error while trying to shutdown current span processor",
              n,
            );
          }),
          this._registeredSpanProcessors.push(t),
          (this.activeSpanProcessor = new __(this._registeredSpanProcessors)));
      }),
      (e.prototype.getActiveSpanProcessor = function () {
        return this.activeSpanProcessor;
      }),
      (e.prototype.register = function (t) {
        (t === void 0 && (t = {}),
          En.setGlobalTracerProvider(this),
          t.propagator === void 0 &&
            (t.propagator = this._buildPropagatorFromEnv()),
          t.contextManager && Nn.setGlobalContextManager(t.contextManager),
          t.propagator && Br.setGlobalPropagator(t.propagator));
      }),
      (e.prototype.forceFlush = function () {
        var t = this._config.forceFlushTimeoutMillis,
          n = this._registeredSpanProcessors.map(function (o) {
            return new Promise(function (s) {
              var u,
                c = setTimeout(function () {
                  (s(
                    new Error(
                      "Span processor did not completed within timeout period of " +
                        t +
                        " ms",
                    ),
                  ),
                    (u = Hi.timeout));
                }, t);
              o.forceFlush()
                .then(function () {
                  (clearTimeout(c),
                    u !== Hi.timeout && ((u = Hi.resolved), s(u)));
                })
                .catch(function (d) {
                  (clearTimeout(c), (u = Hi.error), s(d));
                });
            });
          });
        return new Promise(function (o, s) {
          Promise.all(n)
            .then(function (u) {
              var c = u.filter(function (d) {
                return d !== Hi.resolved;
              });
              c.length > 0 ? s(c) : o();
            })
            .catch(function (u) {
              return s([u]);
            });
        });
      }),
      (e.prototype.shutdown = function () {
        return this.activeSpanProcessor.shutdown();
      }),
      (e.prototype._getPropagator = function (t) {
        var n;
        return (n = this.constructor._registeredPropagators.get(t)) === null ||
          n === void 0
          ? void 0
          : n();
      }),
      (e.prototype._getSpanExporter = function (t) {
        var n;
        return (n = this.constructor._registeredExporters.get(t)) === null ||
          n === void 0
          ? void 0
          : n();
      }),
      (e.prototype._buildPropagatorFromEnv = function () {
        var t = this,
          n = Array.from(new Set(ea().OTEL_PROPAGATORS)),
          o = n.map(function (u) {
            var c = t._getPropagator(u);
            return (
              c ||
                et.warn(
                  'Propagator "' +
                    u +
                    '" requested through environment variable is unavailable.',
                ),
              c
            );
          }),
          s = o.reduce(function (u, c) {
            return (c && u.push(c), u);
          }, []);
        if (s.length !== 0)
          return n.length === 1 ? s[0] : new Kb({ propagators: s });
      }),
      (e.prototype._buildExporterFromEnv = function () {
        var t = ea().OTEL_TRACES_EXPORTER;
        if (!(t === "none" || t === "")) {
          var n = this._getSpanExporter(t);
          return (
            n ||
              et.error(
                'Exporter "' +
                  t +
                  '" requested through environment variable is unavailable.',
              ),
            n
          );
        }
      }),
      (e._registeredPropagators = new Map([
        [
          "tracecontext",
          function () {
            return new px();
          },
        ],
        [
          "baggage",
          function () {
            return new fb();
          },
        ],
      ])),
      (e._registeredExporters = new Map()),
      e
    );
  })(),
  cN = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  fN = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  dN = (function () {
    function e() {
      ((this._enabled = !1), (this._currentContext = jr));
    }
    return (
      (e.prototype._bindFunction = function (t, n) {
        t === void 0 && (t = jr);
        var o = this,
          s = function () {
            for (var u = this, c = [], d = 0; d < arguments.length; d++)
              c[d] = arguments[d];
            return o.with(t, function () {
              return n.apply(u, c);
            });
          };
        return (
          Object.defineProperty(s, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: n.length,
          }),
          s
        );
      }),
      (e.prototype.active = function () {
        return this._currentContext;
      }),
      (e.prototype.bind = function (t, n) {
        return (
          t === void 0 && (t = this.active()),
          typeof n == "function" ? this._bindFunction(t, n) : n
        );
      }),
      (e.prototype.disable = function () {
        return ((this._currentContext = jr), (this._enabled = !1), this);
      }),
      (e.prototype.enable = function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), (this._currentContext = jr), this);
      }),
      (e.prototype.with = function (t, n, o) {
        for (var s = [], u = 3; u < arguments.length; u++)
          s[u - 3] = arguments[u];
        var c = this._currentContext;
        this._currentContext = t || jr;
        try {
          return n.call.apply(n, fN([o], cN(s), !1));
        } finally {
          this._currentContext = c;
        }
      }),
      e
    );
  })(),
  pN = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  hN = (function (e) {
    pN(t, e);
    function t(n) {
      n === void 0 && (n = {});
      var o = e.call(this, n) || this;
      if (n.contextManager)
        throw "contextManager should be defined in register method not in constructor";
      if (n.propagator)
        throw "propagator should be defined in register method not in constructor";
      return o;
    }
    return (
      (t.prototype.register = function (n) {
        (n === void 0 && (n = {}),
          n.contextManager === void 0 && (n.contextManager = new dN()),
          n.contextManager && n.contextManager.enable(),
          e.prototype.register.call(this, n));
      }),
      t
    );
  })(lN),
  Mt;
(function (e) {
  ((e.CONNECT_END = "connectEnd"),
    (e.CONNECT_START = "connectStart"),
    (e.DECODED_BODY_SIZE = "decodedBodySize"),
    (e.DOM_COMPLETE = "domComplete"),
    (e.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd"),
    (e.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart"),
    (e.DOM_INTERACTIVE = "domInteractive"),
    (e.DOMAIN_LOOKUP_END = "domainLookupEnd"),
    (e.DOMAIN_LOOKUP_START = "domainLookupStart"),
    (e.ENCODED_BODY_SIZE = "encodedBodySize"),
    (e.FETCH_START = "fetchStart"),
    (e.LOAD_EVENT_END = "loadEventEnd"),
    (e.LOAD_EVENT_START = "loadEventStart"),
    (e.NAVIGATION_START = "navigationStart"),
    (e.REDIRECT_END = "redirectEnd"),
    (e.REDIRECT_START = "redirectStart"),
    (e.REQUEST_START = "requestStart"),
    (e.RESPONSE_END = "responseEnd"),
    (e.RESPONSE_START = "responseStart"),
    (e.SECURE_CONNECTION_START = "secureConnectionStart"),
    (e.UNLOAD_EVENT_END = "unloadEventEnd"),
    (e.UNLOAD_EVENT_START = "unloadEventStart"));
})(Mt || (Mt = {}));
var mN = "http.response_content_length",
  gN = "http.response_content_length_uncompressed",
  _N = mN,
  yN = gN,
  Wf;
function vN() {
  return (Wf || (Wf = document.createElement("a")), Wf);
}
function Cd(e, t) {
  return t in e;
}
function Lr(e, t, n, o) {
  var s = void 0,
    u = void 0;
  Cd(n, t) && typeof n[t] == "number" && (s = n[t]);
  var c = Mt.FETCH_START;
  if (
    (Cd(n, c) && typeof n[c] == "number" && (u = n[c]),
    s !== void 0 && u !== void 0 && s >= u)
  )
    return (e.addEvent(t, s), e);
}
function y_(e, t, n) {
  (n === void 0 && (n = !1),
    n ||
      (Lr(e, Mt.FETCH_START, t),
      Lr(e, Mt.DOMAIN_LOOKUP_START, t),
      Lr(e, Mt.DOMAIN_LOOKUP_END, t),
      Lr(e, Mt.CONNECT_START, t),
      Cd(t, "name") &&
        t.name.startsWith("https:") &&
        Lr(e, Mt.SECURE_CONNECTION_START, t),
      Lr(e, Mt.CONNECT_END, t),
      Lr(e, Mt.REQUEST_START, t),
      Lr(e, Mt.RESPONSE_START, t),
      Lr(e, Mt.RESPONSE_END, t)));
  var o = t[Mt.ENCODED_BODY_SIZE];
  o !== void 0 && e.setAttribute(_N, o);
  var s = t[Mt.DECODED_BODY_SIZE];
  s !== void 0 && o !== s && e.setAttribute(yN, s);
}
function EN(e) {
  return e.slice().sort(function (t, n) {
    var o = t[Mt.FETCH_START],
      s = n[Mt.FETCH_START];
    return o > s ? 1 : o < s ? -1 : 0;
  });
}
function jv() {
  return typeof location < "u" ? location.origin : void 0;
}
function SN(e, t, n, o, s, u) {
  s === void 0 && (s = new WeakSet());
  var c = ol(e);
  e = c.toString();
  var d = wN(e, t, n, o, s, u);
  if (d.length === 0) return { mainRequest: void 0 };
  if (d.length === 1) return { mainRequest: d[0] };
  var h = EN(d);
  if (c.origin !== jv() && h.length > 1) {
    var m = h[0],
      _ = TN(h, m[Mt.RESPONSE_END], n),
      y = m[Mt.RESPONSE_END],
      E = _[Mt.FETCH_START];
    return (
      E < y && ((_ = m), (m = void 0)),
      { corsPreFlightRequest: m, mainRequest: _ }
    );
  } else return { mainRequest: d[0] };
}
function TN(e, t, n) {
  for (
    var o = zr(n), s = zr($s(t)), u = e[1], c, d = e.length, h = 1;
    h < d;
    h++
  ) {
    var m = e[h],
      _ = zr($s(m[Mt.FETCH_START])),
      y = zr($s(m[Mt.RESPONSE_END])),
      E = o - y;
    _ >= s && (!c || E < c) && ((c = E), (u = m));
  }
  return u;
}
function wN(e, t, n, o, s, u) {
  var c = zr(t),
    d = zr(n),
    h = o.filter(function (m) {
      var _ = zr($s(m[Mt.FETCH_START])),
        y = zr($s(m[Mt.RESPONSE_END]));
      return (
        m.initiatorType.toLowerCase() === u && m.name === e && _ >= c && y <= d
      );
    });
  return (
    h.length > 0 &&
      (h = h.filter(function (m) {
        return !s.has(m);
      })),
    h
  );
}
function ol(e) {
  if (typeof URL == "function")
    return new URL(
      e,
      typeof document < "u"
        ? document.baseURI
        : typeof location < "u"
          ? location.href
          : void 0,
    );
  var t = vN();
  return ((t.href = e), t);
}
function kN(e, t) {
  var n = t || [];
  (typeof n == "string" || n instanceof RegExp) && (n = [n]);
  var o = ol(e);
  return o.origin === jv()
    ? !0
    : n.some(function (s) {
        return Mv(e, s);
      });
}
var RN = (function () {
    function e(t) {
      this._delegate = t;
    }
    return (
      (e.prototype.export = function (t, n) {
        this._delegate.export(t, n);
      }),
      (e.prototype.forceFlush = function () {
        return this._delegate.forceFlush();
      }),
      (e.prototype.shutdown = function () {
        return this._delegate.shutdown();
      }),
      e
    );
  })(),
  IN = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  v_ = (function (e) {
    IN(t, e);
    function t(n, o, s) {
      var u = e.call(this, n) || this;
      return ((u.name = "OTLPExporterError"), (u.data = s), (u.code = o), u);
    }
    return t;
  })(Error);
function CN(e) {
  if (!Number.isNaN(e) && Number.isFinite(e) && e > 0) return e;
  throw new Error(
    "Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '" +
      e +
      "')",
  );
}
function ON(e) {
  if (e != null)
    return function () {
      return e;
    };
}
function bN(e, t, n) {
  var o, s, u, c, d, h;
  return {
    timeoutMillis: CN(
      (s =
        (o = e.timeoutMillis) !== null && o !== void 0
          ? o
          : t.timeoutMillis) !== null && s !== void 0
        ? s
        : n.timeoutMillis,
    ),
    concurrencyLimit:
      (c =
        (u = e.concurrencyLimit) !== null && u !== void 0
          ? u
          : t.concurrencyLimit) !== null && c !== void 0
        ? c
        : n.concurrencyLimit,
    compression:
      (h = (d = e.compression) !== null && d !== void 0 ? d : t.compression) !==
        null && h !== void 0
        ? h
        : n.compression,
  };
}
function xN() {
  return { timeoutMillis: 1e4, concurrencyLimit: 30, compression: "none" };
}
var NN = function (e, t, n, o) {
    function s(u) {
      return u instanceof n
        ? u
        : new n(function (c) {
            c(u);
          });
    }
    return new (n || (n = Promise))(function (u, c) {
      function d(_) {
        try {
          m(o.next(_));
        } catch (y) {
          c(y);
        }
      }
      function h(_) {
        try {
          m(o.throw(_));
        } catch (y) {
          c(y);
        }
      }
      function m(_) {
        _.done ? u(_.value) : s(_.value).then(d, h);
      }
      m((o = o.apply(e, t || [])).next());
    });
  },
  AN = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      u,
      c;
    return (
      (c = { next: d(0), throw: d(1), return: d(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function d(m) {
      return function (_) {
        return h([m, _]);
      };
    }
    function h(m) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (u =
                m[0] & 2
                  ? s.return
                  : m[0]
                    ? s.throw || ((u = s.return) && u.call(s), 0)
                    : s.next) &&
              !(u = u.call(s, m[1])).done)
          )
            return u;
          switch (((s = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return (n.label++, { value: m[1], done: !1 });
            case 5:
              (n.label++, (s = m[1]), (m = [0]));
              continue;
            case 7:
              ((m = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((u = n.trys),
                !(u = u.length > 0 && u[u.length - 1]) &&
                  (m[0] === 6 || m[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                n.label = m[1];
                break;
              }
              if (m[0] === 6 && n.label < u[1]) {
                ((n.label = u[1]), (u = m));
                break;
              }
              if (u && n.label < u[2]) {
                ((n.label = u[2]), n.ops.push(m));
                break;
              }
              (u[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          m = t.call(e, n);
        } catch (_) {
          ((m = [6, _]), (s = 0));
        } finally {
          o = u = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  },
  PN = (function () {
    function e(t) {
      ((this._sendingPromises = []), (this._concurrencyLimit = t));
    }
    return (
      (e.prototype.pushPromise = function (t) {
        var n = this;
        if (this.hasReachedLimit())
          throw new Error("Concurrency Limit reached");
        this._sendingPromises.push(t);
        var o = function () {
          var s = n._sendingPromises.indexOf(t);
          n._sendingPromises.splice(s, 1);
        };
        t.then(o, o);
      }),
      (e.prototype.hasReachedLimit = function () {
        return this._sendingPromises.length >= this._concurrencyLimit;
      }),
      (e.prototype.awaitAll = function () {
        return NN(this, void 0, void 0, function () {
          return AN(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all(this._sendingPromises)];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      }),
      e
    );
  })();
function LN(e) {
  return new PN(e.concurrencyLimit);
}
function MN(e) {
  return Object.prototype.hasOwnProperty.call(e, "partialSuccess");
}
function DN() {
  return {
    handleResponse: function (e) {
      e == null ||
        !MN(e) ||
        e.partialSuccess == null ||
        Object.keys(e.partialSuccess).length === 0 ||
        et.warn(
          "Received Partial Success response:",
          JSON.stringify(e.partialSuccess),
        );
    },
  };
}
var FN = function (e, t, n, o) {
    function s(u) {
      return u instanceof n
        ? u
        : new n(function (c) {
            c(u);
          });
    }
    return new (n || (n = Promise))(function (u, c) {
      function d(_) {
        try {
          m(o.next(_));
        } catch (y) {
          c(y);
        }
      }
      function h(_) {
        try {
          m(o.throw(_));
        } catch (y) {
          c(y);
        }
      }
      function m(_) {
        _.done ? u(_.value) : s(_.value).then(d, h);
      }
      m((o = o.apply(e, t || [])).next());
    });
  },
  UN = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      u,
      c;
    return (
      (c = { next: d(0), throw: d(1), return: d(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function d(m) {
      return function (_) {
        return h([m, _]);
      };
    }
    function h(m) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (u =
                m[0] & 2
                  ? s.return
                  : m[0]
                    ? s.throw || ((u = s.return) && u.call(s), 0)
                    : s.next) &&
              !(u = u.call(s, m[1])).done)
          )
            return u;
          switch (((s = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return (n.label++, { value: m[1], done: !1 });
            case 5:
              (n.label++, (s = m[1]), (m = [0]));
              continue;
            case 7:
              ((m = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((u = n.trys),
                !(u = u.length > 0 && u[u.length - 1]) &&
                  (m[0] === 6 || m[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                n.label = m[1];
                break;
              }
              if (m[0] === 6 && n.label < u[1]) {
                ((n.label = u[1]), (u = m));
                break;
              }
              if (u && n.label < u[2]) {
                ((n.label = u[2]), n.ops.push(m));
                break;
              }
              (u[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          m = t.call(e, n);
        } catch (_) {
          ((m = [6, _]), (s = 0));
        } finally {
          o = u = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  },
  jN = (function () {
    function e(t, n, o, s, u) {
      ((this._transport = t),
        (this._serializer = n),
        (this._responseHandler = o),
        (this._promiseQueue = s),
        (this._timeout = u),
        (this._diagLogger = et.createComponentLogger({
          namespace: "OTLPExportDelegate",
        })));
    }
    return (
      (e.prototype.export = function (t, n) {
        var o = this;
        if (
          (this._diagLogger.debug("items to be sent", t),
          this._promiseQueue.hasReachedLimit())
        ) {
          n({
            code: mr.FAILED,
            error: new Error("Concurrent export limit reached"),
          });
          return;
        }
        var s = this._serializer.serializeRequest(t);
        if (s == null) {
          n({ code: mr.FAILED, error: new Error("Nothing to send") });
          return;
        }
        this._promiseQueue.pushPromise(
          this._transport.send(s, this._timeout).then(
            function (u) {
              if (u.status === "success") {
                if (u.data != null)
                  try {
                    o._responseHandler.handleResponse(
                      o._serializer.deserializeResponse(u.data),
                    );
                  } catch (c) {
                    o._diagLogger.warn(
                      "Export succeeded but could not deserialize response - is the response specification compliant?",
                      c,
                      u.data,
                    );
                  }
                n({ code: mr.SUCCESS });
                return;
              } else if (u.status === "failure" && u.error) {
                n({ code: mr.FAILED, error: u.error });
                return;
              } else
                u.status === "retryable"
                  ? n({
                      code: mr.FAILED,
                      error: new v_("Export failed with retryable status"),
                    })
                  : n({
                      code: mr.FAILED,
                      error: new v_("Export failed with unknown error"),
                    });
            },
            function (u) {
              return n({ code: mr.FAILED, error: u });
            },
          ),
        );
      }),
      (e.prototype.forceFlush = function () {
        return this._promiseQueue.awaitAll();
      }),
      (e.prototype.shutdown = function () {
        return FN(this, void 0, void 0, function () {
          return UN(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  this._diagLogger.debug("shutdown started"),
                  [4, this.forceFlush()]
                );
              case 1:
                return (t.sent(), this._transport.shutdown(), [2]);
            }
          });
        });
      }),
      e
    );
  })();
function BN(e, t) {
  return new jN(e.transport, e.serializer, DN(), e.promiseHandler, t.timeout);
}
function Bv(e, t, n) {
  return BN(
    { transport: n, serializer: t, promiseHandler: LN(e) },
    { timeout: e.timeoutMillis },
  );
}
function Hv(e) {
  var t = BigInt(1e9);
  return BigInt(e[0]) * t + BigInt(e[1]);
}
function HN(e) {
  var t = Number(BigInt.asUintN(32, e)),
    n = Number(BigInt.asUintN(32, e >> BigInt(32)));
  return { low: t, high: n };
}
function zv(e) {
  var t = Hv(e);
  return HN(t);
}
function zN(e) {
  var t = Hv(e);
  return t.toString();
}
var $N = typeof BigInt < "u" ? zN : zr;
function E_(e) {
  return e;
}
function $v(e) {
  if (e !== void 0) return pp(e);
}
var WN = {
  encodeHrTime: zv,
  encodeSpanContext: pp,
  encodeOptionalSpanContext: $v,
};
function GN(e) {
  var t, n;
  if (e === void 0) return WN;
  var o = (t = e.useLongBits) !== null && t !== void 0 ? t : !0,
    s = (n = e.useHex) !== null && n !== void 0 ? n : !1;
  return {
    encodeHrTime: o ? zv : $N,
    encodeSpanContext: s ? E_ : pp,
    encodeOptionalSpanContext: s ? E_ : $v,
  };
}
var VN = function (e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e),
    s,
    u = [],
    c;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; ) u.push(s.value);
  } catch (d) {
    c = { error: d };
  } finally {
    try {
      s && !s.done && (n = o.return) && n.call(o);
    } finally {
      if (c) throw c.error;
    }
  }
  return u;
};
function XN(e) {
  return { attributes: xl(e.attributes), droppedAttributesCount: 0 };
}
function qN(e) {
  return { name: e.name, version: e.version };
}
function xl(e) {
  return Object.keys(e).map(function (t) {
    return Wv(t, e[t]);
  });
}
function Wv(e, t) {
  return { key: e, value: Gv(t) };
}
function Gv(e) {
  var t = typeof e;
  return t === "string"
    ? { stringValue: e }
    : t === "number"
      ? Number.isInteger(e)
        ? { intValue: e }
        : { doubleValue: e }
      : t === "boolean"
        ? { boolValue: e }
        : e instanceof Uint8Array
          ? { bytesValue: e }
          : Array.isArray(e)
            ? { arrayValue: { values: e.map(Gv) } }
            : t === "object" && e != null
              ? {
                  kvlistValue: {
                    values: Object.entries(e).map(function (n) {
                      var o = VN(n, 2),
                        s = o[0],
                        u = o[1];
                      return Wv(s, u);
                    }),
                  },
                }
              : {};
}
var YN = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  KN = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  };
function ZN(e, t) {
  var n,
    o = e.spanContext(),
    s = e.status;
  return {
    traceId: t.encodeSpanContext(o.traceId),
    spanId: t.encodeSpanContext(o.spanId),
    parentSpanId: t.encodeOptionalSpanContext(e.parentSpanId),
    traceState:
      (n = o.traceState) === null || n === void 0 ? void 0 : n.serialize(),
    name: e.name,
    kind: e.kind == null ? 0 : e.kind + 1,
    startTimeUnixNano: t.encodeHrTime(e.startTime),
    endTimeUnixNano: t.encodeHrTime(e.endTime),
    attributes: xl(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    events: e.events.map(function (u) {
      return JN(u, t);
    }),
    droppedEventsCount: e.droppedEventsCount,
    status: { code: s.code, message: s.message },
    links: e.links.map(function (u) {
      return QN(u, t);
    }),
    droppedLinksCount: e.droppedLinksCount,
  };
}
function QN(e, t) {
  var n;
  return {
    attributes: e.attributes ? xl(e.attributes) : [],
    spanId: t.encodeSpanContext(e.context.spanId),
    traceId: t.encodeSpanContext(e.context.traceId),
    traceState:
      (n = e.context.traceState) === null || n === void 0
        ? void 0
        : n.serialize(),
    droppedAttributesCount: e.droppedAttributesCount || 0,
  };
}
function JN(e, t) {
  return {
    attributes: e.attributes ? xl(e.attributes) : [],
    name: e.name,
    timeUnixNano: t.encodeHrTime(e.time),
    droppedAttributesCount: e.droppedAttributesCount || 0,
  };
}
function eA(e, t) {
  var n = GN(t);
  return { resourceSpans: nA(e, n) };
}
function tA(e) {
  var t,
    n,
    o = new Map();
  try {
    for (var s = YN(e), u = s.next(); !u.done; u = s.next()) {
      var c = u.value,
        d = o.get(c.resource);
      d || ((d = new Map()), o.set(c.resource, d));
      var h =
          c.instrumentationLibrary.name +
          "@" +
          (c.instrumentationLibrary.version || "") +
          ":" +
          (c.instrumentationLibrary.schemaUrl || ""),
        m = d.get(h);
      (m || ((m = []), d.set(h, m)), m.push(c));
    }
  } catch (_) {
    t = { error: _ };
  } finally {
    try {
      u && !u.done && (n = s.return) && n.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function nA(e, t) {
  for (var n = tA(e), o = [], s = n.entries(), u = s.next(); !u.done; ) {
    for (
      var c = KN(u.value, 2),
        d = c[0],
        h = c[1],
        m = [],
        _ = h.values(),
        y = _.next();
      !y.done;
    ) {
      var E = y.value;
      if (E.length > 0) {
        var N = E.map(function (j) {
          return ZN(j, t);
        });
        m.push({
          scope: qN(E[0].instrumentationLibrary),
          spans: N,
          schemaUrl: E[0].instrumentationLibrary.schemaUrl,
        });
      }
      y = _.next();
    }
    var P = { resource: XN(d), scopeSpans: m, schemaUrl: void 0 };
    (o.push(P), (u = s.next()));
  }
  return o;
}
var rA = {
    serializeRequest: function (e) {
      var t = eA(e, { useHex: !0, useLongBits: !1 }),
        n = new TextEncoder();
      return n.encode(JSON.stringify(t));
    },
    deserializeResponse: function (e) {
      var t = new TextDecoder();
      return JSON.parse(t.decode(e));
    },
  },
  iA = function (e, t, n, o) {
    function s(u) {
      return u instanceof n
        ? u
        : new n(function (c) {
            c(u);
          });
    }
    return new (n || (n = Promise))(function (u, c) {
      function d(_) {
        try {
          m(o.next(_));
        } catch (y) {
          c(y);
        }
      }
      function h(_) {
        try {
          m(o.throw(_));
        } catch (y) {
          c(y);
        }
      }
      function m(_) {
        _.done ? u(_.value) : s(_.value).then(d, h);
      }
      m((o = o.apply(e, t || [])).next());
    });
  },
  oA = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      u,
      c;
    return (
      (c = { next: d(0), throw: d(1), return: d(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function d(m) {
      return function (_) {
        return h([m, _]);
      };
    }
    function h(m) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (u =
                m[0] & 2
                  ? s.return
                  : m[0]
                    ? s.throw || ((u = s.return) && u.call(s), 0)
                    : s.next) &&
              !(u = u.call(s, m[1])).done)
          )
            return u;
          switch (((s = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return (n.label++, { value: m[1], done: !1 });
            case 5:
              (n.label++, (s = m[1]), (m = [0]));
              continue;
            case 7:
              ((m = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((u = n.trys),
                !(u = u.length > 0 && u[u.length - 1]) &&
                  (m[0] === 6 || m[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                n.label = m[1];
                break;
              }
              if (m[0] === 6 && n.label < u[1]) {
                ((n.label = u[1]), (u = m));
                break;
              }
              if (u && n.label < u[2]) {
                ((n.label = u[2]), n.ops.push(m));
                break;
              }
              (u[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          m = t.call(e, n);
        } catch (_) {
          ((m = [6, _]), (s = 0));
        } finally {
          o = u = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  },
  sA = 5,
  aA = 1e3,
  uA = 5e3,
  lA = 1.5,
  S_ = 0.2;
function cA() {
  return Math.random() * (2 * S_) - S_;
}
var fA = (function () {
  function e(t) {
    this._transport = t;
  }
  return (
    (e.prototype.retry = function (t, n, o) {
      var s = this;
      return new Promise(function (u, c) {
        setTimeout(function () {
          s._transport.send(t, n).then(u, c);
        }, o);
      });
    }),
    (e.prototype.send = function (t, n) {
      var o;
      return iA(this, void 0, void 0, function () {
        var s, u, c, d, h, m, _;
        return oA(this, function (y) {
          switch (y.label) {
            case 0:
              return ((s = Date.now() + n), [4, this._transport.send(t, n)]);
            case 1:
              ((u = y.sent()), (c = sA), (d = aA), (y.label = 2));
            case 2:
              return u.status === "retryable" && c > 0
                ? (c--,
                  (h = Math.max(Math.min(d, uA) + cA(), 0)),
                  (d = d * lA),
                  (m = (o = u.retryInMillis) !== null && o !== void 0 ? o : h),
                  (_ = s - Date.now()),
                  m > _ ? [2, u] : [4, this.retry(t, _, m)])
                : [3, 4];
            case 3:
              return ((u = y.sent()), [3, 2]);
            case 4:
              return [2, u];
          }
        });
      });
    }),
    (e.prototype.shutdown = function () {
      return this._transport.shutdown();
    }),
    e
  );
})();
function Vv(e) {
  return new fA(e.transport);
}
function dA(e) {
  var t = [429, 502, 503, 504];
  return t.includes(e);
}
function pA(e) {
  if (e != null) {
    var t = Number.parseInt(e, 10);
    if (Number.isInteger(t)) return t > 0 ? t * 1e3 : -1;
    var n = new Date(e).getTime() - Date.now();
    return n >= 0 ? n : 0;
  }
}
var hA = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  mA = (function () {
    function e(t) {
      this._parameters = t;
    }
    return (
      (e.prototype.send = function (t, n) {
        var o = this;
        return new Promise(function (s) {
          var u = new XMLHttpRequest();
          ((u.timeout = n), u.open("POST", o._parameters.url));
          var c = o._parameters.headers();
          (Object.entries(c).forEach(function (d) {
            var h = hA(d, 2),
              m = h[0],
              _ = h[1];
            u.setRequestHeader(m, _);
          }),
            (u.ontimeout = function (d) {
              s({
                status: "failure",
                error: new Error("XHR request timed out"),
              });
            }),
            (u.onreadystatechange = function () {
              u.status >= 200 && u.status <= 299
                ? (et.debug("XHR success"), s({ status: "success" }))
                : u.status && dA(u.status)
                  ? s({
                      status: "retryable",
                      retryInMillis: pA(u.getResponseHeader("Retry-After")),
                    })
                  : u.status !== 0 &&
                    s({
                      status: "failure",
                      error: new Error(
                        "XHR request failed with non-retryable status",
                      ),
                    });
            }),
            (u.onabort = function () {
              s({ status: "failure", error: new Error("XHR request aborted") });
            }),
            (u.onerror = function () {
              s({ status: "failure", error: new Error("XHR request errored") });
            }),
            u.send(t));
        });
      }),
      (e.prototype.shutdown = function () {}),
      e
    );
  })();
function gA(e) {
  return new mA(e);
}
var _A = (function () {
  function e(t) {
    this._params = t;
  }
  return (
    (e.prototype.send = function (t) {
      var n = this;
      return new Promise(function (o) {
        navigator.sendBeacon(
          n._params.url,
          new Blob([t], { type: n._params.blobType }),
        )
          ? (et.debug("SendBeacon success"), o({ status: "success" }))
          : o({ status: "failure", error: new Error("SendBeacon failed") });
      });
    }),
    (e.prototype.shutdown = function () {}),
    e
  );
})();
function yA(e) {
  return new _A(e);
}
function vA(e, t) {
  return Bv(e, t, Vv({ transport: gA(e) }));
}
function EA(e, t) {
  return Bv(
    e,
    t,
    Vv({
      transport: yA({ url: e.url, blobType: e.headers()["Content-Type"] }),
    }),
  );
}
var SA = function (e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e),
    s,
    u = [],
    c;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; ) u.push(s.value);
  } catch (d) {
    c = { error: d };
  } finally {
    try {
      s && !s.done && (n = o.return) && n.call(o);
    } finally {
      if (c) throw c.error;
    }
  }
  return u;
};
function TA(e) {
  return function () {
    var t,
      n = {};
    return (
      Object.entries(
        (t = e == null ? void 0 : e()) !== null && t !== void 0 ? t : {},
      ).forEach(function (o) {
        var s = SA(o, 2),
          u = s[0],
          c = s[1];
        typeof c < "u"
          ? (n[u] = String(c))
          : et.warn(
              'Header "' +
                u +
                '" has invalid value (' +
                c +
                ") and will be ignored",
            );
      }),
      n
    );
  };
}
var Xi = function () {
  return (
    (Xi =
      Object.assign ||
      function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
          t = arguments[n];
          for (var s in t)
            Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        }
        return e;
      }),
    Xi.apply(this, arguments)
  );
};
function wA(e, t, n) {
  var o = Xi({}, n()),
    s = {};
  return function () {
    return (
      t != null && Object.assign(s, t()),
      e != null && Object.assign(s, e()),
      Object.assign(s, o)
    );
  };
}
function kA(e) {
  if (e != null)
    try {
      return (new URL(e), e);
    } catch {
      throw new Error(
        "Configuration: Could not parse user-provided export URL: '" + e + "'",
      );
    }
}
function RA(e, t, n) {
  var o, s, u, c;
  return Xi(Xi({}, bN(e, t, n)), {
    headers: wA(TA(e.headers), t.headers, n.headers),
    url:
      (s = (o = kA(e.url)) !== null && o !== void 0 ? o : t.url) !== null &&
      s !== void 0
        ? s
        : n.url,
    agentOptions:
      (c =
        (u = e.agentOptions) !== null && u !== void 0 ? u : t.agentOptions) !==
        null && c !== void 0
        ? c
        : n.agentOptions,
  });
}
function IA(e, t) {
  return Xi(Xi({}, xN()), {
    headers: function () {
      return e;
    },
    url: "http://localhost:4318/" + t,
    agentOptions: { keepAlive: !0 },
  });
}
function CA(e, t, n) {
  return RA(
    {
      url: e.url,
      timeoutMillis: e.timeoutMillis,
      headers: ON(e.headers),
      concurrencyLimit: e.concurrencyLimit,
    },
    {},
    IA(n, t),
  );
}
function OA(e, t, n, o) {
  var s = !!e.headers || typeof navigator.sendBeacon != "function",
    u = CA(e, n, o);
  return s ? vA(u, t) : EA(u, t);
}
var bA = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  xA = (function (e) {
    bA(t, e);
    function t(n) {
      return (
        n === void 0 && (n = {}),
        e.call(
          this,
          OA(n, rA, "v1/traces", { "Content-Type": "application/json" }),
        ) || this
      );
    }
    return t;
  })(RN);
function NA(e) {
  return (
    e === void 0 && (e = {}),
    typeof e.addEventListener == "function" &&
      typeof e.removeEventListener == "function"
  );
}
var T_ = "OT_ZONE_CONTEXT",
  AA = (function () {
    function e() {
      ((this._enabled = !1), (this._zoneCounter = 0));
    }
    return (
      (e.prototype._activeContextFromZone = function (t) {
        return (t && t.get(T_)) || jr;
      }),
      (e.prototype._bindFunction = function (t, n) {
        var o = this,
          s = function () {
            for (var u = this, c = [], d = 0; d < arguments.length; d++)
              c[d] = arguments[d];
            return o.with(t, function () {
              return n.apply(u, c);
            });
          };
        return (
          Object.defineProperty(s, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: n.length,
          }),
          s
        );
      }),
      (e.prototype._bindListener = function (t, n) {
        var o = n;
        return (
          o.__ot_listeners !== void 0 ||
            ((o.__ot_listeners = {}),
            typeof o.addEventListener == "function" &&
              (o.addEventListener = this._patchAddEventListener(
                o,
                o.addEventListener,
                t,
              )),
            typeof o.removeEventListener == "function" &&
              (o.removeEventListener = this._patchRemoveEventListener(
                o,
                o.removeEventListener,
              ))),
          n
        );
      }),
      (e.prototype._createZoneName = function () {
        this._zoneCounter++;
        var t = Math.random();
        return this._zoneCounter + "-" + t;
      }),
      (e.prototype._createZone = function (t, n) {
        var o;
        return Zone.current.fork({
          name: t,
          properties: ((o = {}), (o[T_] = n), o),
        });
      }),
      (e.prototype._getActiveZone = function () {
        return Zone.current;
      }),
      (e.prototype._patchAddEventListener = function (t, n, o) {
        var s = this;
        return function (u, c, d) {
          t.__ot_listeners === void 0 && (t.__ot_listeners = {});
          var h = t.__ot_listeners[u];
          h === void 0 && ((h = new WeakMap()), (t.__ot_listeners[u] = h));
          var m = s.bind(o, c);
          return (h.set(c, m), n.call(this, u, m, d));
        };
      }),
      (e.prototype._patchRemoveEventListener = function (t, n) {
        return function (o, s) {
          if (t.__ot_listeners === void 0 || t.__ot_listeners[o] === void 0)
            return n.call(this, o, s);
          var u = t.__ot_listeners[o],
            c = u.get(s);
          return (u.delete(s), n.call(this, o, c || s));
        };
      }),
      (e.prototype.active = function () {
        if (!this._enabled) return jr;
        var t = this._getActiveZone(),
          n = this._activeContextFromZone(t);
        return n || jr;
      }),
      (e.prototype.bind = function (t, n) {
        return (
          t === void 0 && (t = this.active()),
          typeof n == "function"
            ? this._bindFunction(t, n)
            : (NA(n) && this._bindListener(t, n), n)
        );
      }),
      (e.prototype.disable = function () {
        return ((this._enabled = !1), this);
      }),
      (e.prototype.enable = function () {
        return ((this._enabled = !0), this);
      }),
      (e.prototype.with = function (t, n, o) {
        for (var s = [], u = 3; u < arguments.length; u++)
          s[u - 3] = arguments[u];
        var c = this._createZoneName(),
          d = this._createZone(c, t);
        return d.run(n, o, s);
      }),
      e
    );
  })(),
  w_ = {},
  k_;
function PA() {
  if (k_) return w_;
  k_ = 1;
  /**
   * @license Angular v<unknown>
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   */ const e = globalThis;
  function t(w) {
    return (e.__Zone_symbol_prefix || "__zone_symbol__") + w;
  }
  function n() {
    const w = e.performance;
    function I(mt) {
      w && w.mark && w.mark(mt);
    }
    function B(mt, b) {
      w && w.measure && w.measure(mt, b);
    }
    I("Zone");
    const Gt = class Gt {
      static assertZonePatched() {
        if (e.Promise !== ze.ZoneAwarePromise)
          throw new Error(
            "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)",
          );
      }
      static get root() {
        let b = Gt.current;
        for (; b.parent; ) b = b.parent;
        return b;
      }
      static get current() {
        return Ie.zone;
      }
      static get currentTask() {
        return Ue;
      }
      static __load_patch(b, D, L = !1) {
        if (ze.hasOwnProperty(b)) {
          const we = e[t("forceDuplicateZoneCheck")] === !0;
          if (!L && we) throw Error("Already loaded patch: " + b);
        } else if (!e["__Zone_disable_" + b]) {
          const we = "Zone:" + b;
          (I(we), (ze[b] = D(e, Gt, Pe)), B(we, we));
        }
      }
      get parent() {
        return this._parent;
      }
      get name() {
        return this._name;
      }
      constructor(b, D) {
        ((this._parent = b),
          (this._name = D ? D.name || "unnamed" : "<root>"),
          (this._properties = (D && D.properties) || {}),
          (this._zoneDelegate = new Q(
            this,
            this._parent && this._parent._zoneDelegate,
            D,
          )));
      }
      get(b) {
        const D = this.getZoneWith(b);
        if (D) return D._properties[b];
      }
      getZoneWith(b) {
        let D = this;
        for (; D; ) {
          if (D._properties.hasOwnProperty(b)) return D;
          D = D._parent;
        }
        return null;
      }
      fork(b) {
        if (!b) throw new Error("ZoneSpec required!");
        return this._zoneDelegate.fork(this, b);
      }
      wrap(b, D) {
        if (typeof b != "function")
          throw new Error("Expecting function got: " + b);
        const L = this._zoneDelegate.intercept(this, b, D),
          we = this;
        return function () {
          return we.runGuarded(L, this, arguments, D);
        };
      }
      run(b, D, L, we) {
        Ie = { parent: Ie, zone: this };
        try {
          return this._zoneDelegate.invoke(this, b, D, L, we);
        } finally {
          Ie = Ie.parent;
        }
      }
      runGuarded(b, D = null, L, we) {
        Ie = { parent: Ie, zone: this };
        try {
          try {
            return this._zoneDelegate.invoke(this, b, D, L, we);
          } catch (lt) {
            if (this._zoneDelegate.handleError(this, lt)) throw lt;
          }
        } finally {
          Ie = Ie.parent;
        }
      }
      runTask(b, D, L) {
        if (b.zone != this)
          throw new Error(
            "A task can only be run in the zone of creation! (Creation: " +
              (b.zone || rn).name +
              "; Execution: " +
              this.name +
              ")",
          );
        const we = b,
          {
            type: lt,
            data: { isPeriodic: Qe = !1, isRefreshable: Ln = !1 } = {},
          } = b;
        if (b.state === Rt && (lt === It || lt === de)) return;
        const wn = b.state != ut;
        wn && we._transitionTo(ut, se);
        const qt = Ue;
        ((Ue = we), (Ie = { parent: Ie, zone: this }));
        try {
          lt == de && b.data && !Qe && !Ln && (b.cancelFn = void 0);
          try {
            return this._zoneDelegate.invokeTask(this, we, D, L);
          } catch (Mn) {
            if (this._zoneDelegate.handleError(this, Mn)) throw Mn;
          }
        } finally {
          const Mn = b.state;
          if (Mn !== Rt && Mn !== jt)
            if (lt == It || Qe || (Ln && Mn === Se))
              wn && we._transitionTo(se, ut, Se);
            else {
              const Z = we._zoneDelegates;
              (this._updateTaskCount(we, -1),
                wn && we._transitionTo(Rt, ut, Rt),
                Ln && (we._zoneDelegates = Z));
            }
          ((Ie = Ie.parent), (Ue = qt));
        }
      }
      scheduleTask(b) {
        if (b.zone && b.zone !== this) {
          let L = this;
          for (; L; ) {
            if (L === b.zone)
              throw Error(
                `can not reschedule task to ${this.name} which is descendants of the original zone ${b.zone.name}`,
              );
            L = L.parent;
          }
        }
        b._transitionTo(Se, Rt);
        const D = [];
        ((b._zoneDelegates = D), (b._zone = this));
        try {
          b = this._zoneDelegate.scheduleTask(this, b);
        } catch (L) {
          throw (
            b._transitionTo(jt, Se, Rt),
            this._zoneDelegate.handleError(this, L),
            L
          );
        }
        return (
          b._zoneDelegates === D && this._updateTaskCount(b, 1),
          b.state == Se && b._transitionTo(se, Se),
          b
        );
      }
      scheduleMicroTask(b, D, L, we) {
        return this.scheduleTask(new me(kt, b, D, L, we, void 0));
      }
      scheduleMacroTask(b, D, L, we, lt) {
        return this.scheduleTask(new me(de, b, D, L, we, lt));
      }
      scheduleEventTask(b, D, L, we, lt) {
        return this.scheduleTask(new me(It, b, D, L, we, lt));
      }
      cancelTask(b) {
        if (b.zone != this)
          throw new Error(
            "A task can only be cancelled in the zone of creation! (Creation: " +
              (b.zone || rn).name +
              "; Execution: " +
              this.name +
              ")",
          );
        if (!(b.state !== se && b.state !== ut)) {
          b._transitionTo(yt, se, ut);
          try {
            this._zoneDelegate.cancelTask(this, b);
          } catch (D) {
            throw (
              b._transitionTo(jt, yt),
              this._zoneDelegate.handleError(this, D),
              D
            );
          }
          return (
            this._updateTaskCount(b, -1),
            b._transitionTo(Rt, yt),
            (b.runCount = -1),
            b
          );
        }
      }
      _updateTaskCount(b, D) {
        const L = b._zoneDelegates;
        D == -1 && (b._zoneDelegates = null);
        for (let we = 0; we < L.length; we++) L[we]._updateTaskCount(b.type, D);
      }
    };
    Gt.__symbol__ = t;
    let R = Gt;
    const F = {
      name: "",
      onHasTask: (mt, b, D, L) => mt.hasTask(D, L),
      onScheduleTask: (mt, b, D, L) => mt.scheduleTask(D, L),
      onInvokeTask: (mt, b, D, L, we, lt) => mt.invokeTask(D, L, we, lt),
      onCancelTask: (mt, b, D, L) => mt.cancelTask(D, L),
    };
    class Q {
      get zone() {
        return this._zone;
      }
      constructor(b, D, L) {
        ((this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
          (this._zone = b),
          (this._parentDelegate = D),
          (this._forkZS = L && (L && L.onFork ? L : D._forkZS)),
          (this._forkDlgt = L && (L.onFork ? D : D._forkDlgt)),
          (this._forkCurrZone = L && (L.onFork ? this._zone : D._forkCurrZone)),
          (this._interceptZS = L && (L.onIntercept ? L : D._interceptZS)),
          (this._interceptDlgt = L && (L.onIntercept ? D : D._interceptDlgt)),
          (this._interceptCurrZone =
            L && (L.onIntercept ? this._zone : D._interceptCurrZone)),
          (this._invokeZS = L && (L.onInvoke ? L : D._invokeZS)),
          (this._invokeDlgt = L && (L.onInvoke ? D : D._invokeDlgt)),
          (this._invokeCurrZone =
            L && (L.onInvoke ? this._zone : D._invokeCurrZone)),
          (this._handleErrorZS = L && (L.onHandleError ? L : D._handleErrorZS)),
          (this._handleErrorDlgt =
            L && (L.onHandleError ? D : D._handleErrorDlgt)),
          (this._handleErrorCurrZone =
            L && (L.onHandleError ? this._zone : D._handleErrorCurrZone)),
          (this._scheduleTaskZS =
            L && (L.onScheduleTask ? L : D._scheduleTaskZS)),
          (this._scheduleTaskDlgt =
            L && (L.onScheduleTask ? D : D._scheduleTaskDlgt)),
          (this._scheduleTaskCurrZone =
            L && (L.onScheduleTask ? this._zone : D._scheduleTaskCurrZone)),
          (this._invokeTaskZS = L && (L.onInvokeTask ? L : D._invokeTaskZS)),
          (this._invokeTaskDlgt =
            L && (L.onInvokeTask ? D : D._invokeTaskDlgt)),
          (this._invokeTaskCurrZone =
            L && (L.onInvokeTask ? this._zone : D._invokeTaskCurrZone)),
          (this._cancelTaskZS = L && (L.onCancelTask ? L : D._cancelTaskZS)),
          (this._cancelTaskDlgt =
            L && (L.onCancelTask ? D : D._cancelTaskDlgt)),
          (this._cancelTaskCurrZone =
            L && (L.onCancelTask ? this._zone : D._cancelTaskCurrZone)),
          (this._hasTaskZS = null),
          (this._hasTaskDlgt = null),
          (this._hasTaskDlgtOwner = null),
          (this._hasTaskCurrZone = null));
        const we = L && L.onHasTask,
          lt = D && D._hasTaskZS;
        (we || lt) &&
          ((this._hasTaskZS = we ? L : F),
          (this._hasTaskDlgt = D),
          (this._hasTaskDlgtOwner = this),
          (this._hasTaskCurrZone = this._zone),
          L.onScheduleTask ||
            ((this._scheduleTaskZS = F),
            (this._scheduleTaskDlgt = D),
            (this._scheduleTaskCurrZone = this._zone)),
          L.onInvokeTask ||
            ((this._invokeTaskZS = F),
            (this._invokeTaskDlgt = D),
            (this._invokeTaskCurrZone = this._zone)),
          L.onCancelTask ||
            ((this._cancelTaskZS = F),
            (this._cancelTaskDlgt = D),
            (this._cancelTaskCurrZone = this._zone)));
      }
      fork(b, D) {
        return this._forkZS
          ? this._forkZS.onFork(this._forkDlgt, this.zone, b, D)
          : new R(b, D);
      }
      intercept(b, D, L) {
        return this._interceptZS
          ? this._interceptZS.onIntercept(
              this._interceptDlgt,
              this._interceptCurrZone,
              b,
              D,
              L,
            )
          : D;
      }
      invoke(b, D, L, we, lt) {
        return this._invokeZS
          ? this._invokeZS.onInvoke(
              this._invokeDlgt,
              this._invokeCurrZone,
              b,
              D,
              L,
              we,
              lt,
            )
          : D.apply(L, we);
      }
      handleError(b, D) {
        return this._handleErrorZS
          ? this._handleErrorZS.onHandleError(
              this._handleErrorDlgt,
              this._handleErrorCurrZone,
              b,
              D,
            )
          : !0;
      }
      scheduleTask(b, D) {
        let L = D;
        if (this._scheduleTaskZS)
          (this._hasTaskZS && L._zoneDelegates.push(this._hasTaskDlgtOwner),
            (L = this._scheduleTaskZS.onScheduleTask(
              this._scheduleTaskDlgt,
              this._scheduleTaskCurrZone,
              b,
              D,
            )),
            L || (L = D));
        else if (D.scheduleFn) D.scheduleFn(D);
        else if (D.type == kt) wt(D);
        else throw new Error("Task is missing scheduleFn.");
        return L;
      }
      invokeTask(b, D, L, we) {
        return this._invokeTaskZS
          ? this._invokeTaskZS.onInvokeTask(
              this._invokeTaskDlgt,
              this._invokeTaskCurrZone,
              b,
              D,
              L,
              we,
            )
          : D.callback.apply(L, we);
      }
      cancelTask(b, D) {
        let L;
        if (this._cancelTaskZS)
          L = this._cancelTaskZS.onCancelTask(
            this._cancelTaskDlgt,
            this._cancelTaskCurrZone,
            b,
            D,
          );
        else {
          if (!D.cancelFn) throw Error("Task is not cancelable");
          L = D.cancelFn(D);
        }
        return L;
      }
      hasTask(b, D) {
        try {
          this._hasTaskZS &&
            this._hasTaskZS.onHasTask(
              this._hasTaskDlgt,
              this._hasTaskCurrZone,
              b,
              D,
            );
        } catch (L) {
          this.handleError(b, L);
        }
      }
      _updateTaskCount(b, D) {
        const L = this._taskCounts,
          we = L[b],
          lt = (L[b] = we + D);
        if (lt < 0) throw new Error("More tasks executed then were scheduled.");
        if (we == 0 || lt == 0) {
          const Qe = {
            microTask: L.microTask > 0,
            macroTask: L.macroTask > 0,
            eventTask: L.eventTask > 0,
            change: b,
          };
          this.hasTask(this._zone, Qe);
        }
      }
    }
    class me {
      constructor(b, D, L, we, lt, Qe) {
        if (
          ((this._zone = null),
          (this.runCount = 0),
          (this._zoneDelegates = null),
          (this._state = "notScheduled"),
          (this.type = b),
          (this.source = D),
          (this.data = we),
          (this.scheduleFn = lt),
          (this.cancelFn = Qe),
          !L)
        )
          throw new Error("callback is not defined");
        this.callback = L;
        const Ln = this;
        b === It && we && we.useG
          ? (this.invoke = me.invokeTask)
          : (this.invoke = function () {
              return me.invokeTask.call(e, Ln, this, arguments);
            });
      }
      static invokeTask(b, D, L) {
        (b || (b = this), on++);
        try {
          return (b.runCount++, b.zone.runTask(b, D, L));
        } finally {
          (on == 1 && zt(), on--);
        }
      }
      get zone() {
        return this._zone;
      }
      get state() {
        return this._state;
      }
      cancelScheduleRequest() {
        this._transitionTo(Rt, Se);
      }
      _transitionTo(b, D, L) {
        if (this._state === D || this._state === L)
          ((this._state = b), b == Rt && (this._zoneDelegates = null));
        else
          throw new Error(
            `${this.type} '${this.source}': can not transition to '${b}', expecting state '${D}'${L ? " or '" + L + "'" : ""}, was '${this._state}'.`,
          );
      }
      toString() {
        return this.data && typeof this.data.handleId < "u"
          ? this.data.handleId.toString()
          : Object.prototype.toString.call(this);
      }
      toJSON() {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount,
        };
      }
    }
    const ge = t("setTimeout"),
      Ee = t("Promise"),
      Ae = t("then");
    let pe = [],
      xe = !1,
      He;
    function ot(mt) {
      if ((He || (e[Ee] && (He = e[Ee].resolve(0))), He)) {
        let b = He[Ae];
        (b || (b = He.then), b.call(He, mt));
      } else e[ge](mt, 0);
    }
    function wt(mt) {
      (on === 0 && pe.length === 0 && ot(zt), mt && pe.push(mt));
    }
    function zt() {
      if (!xe) {
        for (xe = !0; pe.length; ) {
          const mt = pe;
          pe = [];
          for (let b = 0; b < mt.length; b++) {
            const D = mt[b];
            try {
              D.zone.runTask(D, null, null);
            } catch (L) {
              Pe.onUnhandledError(L);
            }
          }
        }
        (Pe.microtaskDrainDone(), (xe = !1));
      }
    }
    const rn = { name: "NO ZONE" },
      Rt = "notScheduled",
      Se = "scheduling",
      se = "scheduled",
      ut = "running",
      yt = "canceling",
      jt = "unknown",
      kt = "microTask",
      de = "macroTask",
      It = "eventTask",
      ze = {},
      Pe = {
        symbol: t,
        currentZoneFrame: () => Ie,
        onUnhandledError: At,
        microtaskDrainDone: At,
        scheduleMicroTask: wt,
        showUncaughtError: () => !R[t("ignoreConsoleErrorUncaughtError")],
        patchEventTarget: () => [],
        patchOnProperties: At,
        patchMethod: () => At,
        bindArguments: () => [],
        patchThen: () => At,
        patchMacroTask: () => At,
        patchEventPrototype: () => At,
        isIEOrEdge: () => !1,
        getGlobalObjects: () => {},
        ObjectDefineProperty: () => At,
        ObjectGetOwnPropertyDescriptor: () => {},
        ObjectCreate: () => {},
        ArraySlice: () => [],
        patchClass: () => At,
        wrapWithCurrentZone: () => At,
        filterProperties: () => [],
        attachOriginToPatched: () => At,
        _redefineProperty: () => At,
        patchCallbacks: () => At,
        nativeScheduleMicroTask: ot,
      };
    let Ie = { parent: null, zone: new R(null, null) },
      Ue = null,
      on = 0;
    function At() {}
    return (B("Zone", "Zone"), R);
  }
  function o() {
    const w = globalThis,
      I = w[t("forceDuplicateZoneCheck")] === !0;
    if (w.Zone && (I || typeof w.Zone.__symbol__ != "function"))
      throw new Error("Zone already loaded.");
    return (w.Zone ?? (w.Zone = n()), w.Zone);
  }
  const s = Object.getOwnPropertyDescriptor,
    u = Object.defineProperty,
    c = Object.getPrototypeOf,
    d = Object.create,
    h = Array.prototype.slice,
    m = "addEventListener",
    _ = "removeEventListener",
    y = t(m),
    E = t(_),
    N = "true",
    P = "false",
    j = t("");
  function W(w, I) {
    return Zone.current.wrap(w, I);
  }
  function z(w, I, B, R, F) {
    return Zone.current.scheduleMacroTask(w, I, B, R, F);
  }
  const H = t,
    ie = typeof window < "u",
    U = ie ? window : void 0,
    C = (ie && U) || globalThis,
    q = "removeAttribute";
  function ae(w, I) {
    for (let B = w.length - 1; B >= 0; B--)
      typeof w[B] == "function" && (w[B] = W(w[B], I + "_" + B));
    return w;
  }
  function ye(w, I) {
    const B = w.constructor.name;
    for (let R = 0; R < I.length; R++) {
      const F = I[R],
        Q = w[F];
      if (Q) {
        const me = s(w, F);
        if (!ne(me)) continue;
        w[F] = ((ge) => {
          const Ee = function () {
            return ge.apply(this, ae(arguments, B + "." + F));
          };
          return (ke(Ee, ge), Ee);
        })(Q);
      }
    }
  }
  function ne(w) {
    return w
      ? w.writable === !1
        ? !1
        : !(typeof w.get == "function" && typeof w.set > "u")
      : !0;
  }
  const ve =
      typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
    Ge =
      !("nw" in C) &&
      typeof C.process < "u" &&
      C.process.toString() === "[object process]",
    Ke = !Ge && !ve && !!(ie && U.HTMLElement),
    nt =
      typeof C.process < "u" &&
      C.process.toString() === "[object process]" &&
      !ve &&
      !!(ie && U.HTMLElement),
    at = {},
    xt = H("enable_beforeunload"),
    be = function (w) {
      if (((w = w || C.event), !w)) return;
      let I = at[w.type];
      I || (I = at[w.type] = H("ON_PROPERTY" + w.type));
      const B = this || w.target || C,
        R = B[I];
      let F;
      if (Ke && B === U && w.type === "error") {
        const Q = w;
        ((F =
          R && R.call(this, Q.message, Q.filename, Q.lineno, Q.colno, Q.error)),
          F === !0 && w.preventDefault());
      } else
        ((F = R && R.apply(this, arguments)),
          w.type === "beforeunload" && C[xt] && typeof F == "string"
            ? (w.returnValue = F)
            : F != null && !F && w.preventDefault());
      return F;
    };
  function Xe(w, I, B) {
    let R = s(w, I);
    if (
      (!R && B && s(B, I) && (R = { enumerable: !0, configurable: !0 }),
      !R || !R.configurable)
    )
      return;
    const F = H("on" + I + "patched");
    if (w.hasOwnProperty(F) && w[F]) return;
    (delete R.writable, delete R.value);
    const Q = R.get,
      me = R.set,
      ge = I.slice(2);
    let Ee = at[ge];
    (Ee || (Ee = at[ge] = H("ON_PROPERTY" + ge)),
      (R.set = function (Ae) {
        let pe = this;
        if ((!pe && w === C && (pe = C), !pe)) return;
        (typeof pe[Ee] == "function" && pe.removeEventListener(ge, be),
          me && me.call(pe, null),
          (pe[Ee] = Ae),
          typeof Ae == "function" && pe.addEventListener(ge, be, !1));
      }),
      (R.get = function () {
        let Ae = this;
        if ((!Ae && w === C && (Ae = C), !Ae)) return null;
        const pe = Ae[Ee];
        if (pe) return pe;
        if (Q) {
          let xe = Q.call(this);
          if (xe)
            return (
              R.set.call(this, xe),
              typeof Ae[q] == "function" && Ae.removeAttribute(I),
              xe
            );
        }
        return null;
      }),
      u(w, I, R),
      (w[F] = !0));
  }
  function Y(w, I, B) {
    if (I) for (let R = 0; R < I.length; R++) Xe(w, "on" + I[R], B);
    else {
      const R = [];
      for (const F in w) F.slice(0, 2) == "on" && R.push(F);
      for (let F = 0; F < R.length; F++) Xe(w, R[F], B);
    }
  }
  const oe = H("originalInstance");
  function re(w) {
    const I = C[w];
    if (!I) return;
    ((C[H(w)] = I),
      (C[w] = function () {
        const F = ae(arguments, w);
        switch (F.length) {
          case 0:
            this[oe] = new I();
            break;
          case 1:
            this[oe] = new I(F[0]);
            break;
          case 2:
            this[oe] = new I(F[0], F[1]);
            break;
          case 3:
            this[oe] = new I(F[0], F[1], F[2]);
            break;
          case 4:
            this[oe] = new I(F[0], F[1], F[2], F[3]);
            break;
          default:
            throw new Error("Arg list too long.");
        }
      }),
      ke(C[w], I));
    const B = new I(function () {});
    let R;
    for (R in B)
      (w === "XMLHttpRequest" && R === "responseBlob") ||
        (function (F) {
          typeof B[F] == "function"
            ? (C[w].prototype[F] = function () {
                return this[oe][F].apply(this[oe], arguments);
              })
            : u(C[w].prototype, F, {
                set: function (Q) {
                  typeof Q == "function"
                    ? ((this[oe][F] = W(Q, w + "." + F)), ke(this[oe][F], Q))
                    : (this[oe][F] = Q);
                },
                get: function () {
                  return this[oe][F];
                },
              });
        })(R);
    for (R in I) R !== "prototype" && I.hasOwnProperty(R) && (C[w][R] = I[R]);
  }
  function k(w, I, B) {
    let R = w;
    for (; R && !R.hasOwnProperty(I); ) R = c(R);
    !R && w[I] && (R = w);
    const F = H(I);
    let Q = null;
    if (R && (!(Q = R[F]) || !R.hasOwnProperty(F))) {
      Q = R[F] = R[I];
      const me = R && s(R, I);
      if (ne(me)) {
        const ge = B(Q, F, I);
        ((R[I] = function () {
          return ge(this, arguments);
        }),
          ke(R[I], Q));
      }
    }
    return Q;
  }
  function $(w, I, B) {
    let R = null;
    function F(Q) {
      const me = Q.data;
      return (
        (me.args[me.cbIdx] = function () {
          Q.invoke.apply(this, arguments);
        }),
        R.apply(me.target, me.args),
        Q
      );
    }
    R = k(
      w,
      I,
      (Q) =>
        function (me, ge) {
          const Ee = B(me, ge);
          return Ee.cbIdx >= 0 && typeof ge[Ee.cbIdx] == "function"
            ? z(Ee.name, ge[Ee.cbIdx], Ee, F)
            : Q.apply(me, ge);
        },
    );
  }
  function ke(w, I) {
    w[H("OriginalDelegate")] = I;
  }
  let De = !1,
    Ve = !1;
  function Ze() {
    try {
      const w = U.navigator.userAgent;
      if (w.indexOf("MSIE ") !== -1 || w.indexOf("Trident/") !== -1) return !0;
    } catch {}
    return !1;
  }
  function dt() {
    if (De) return Ve;
    De = !0;
    try {
      const w = U.navigator.userAgent;
      (w.indexOf("MSIE ") !== -1 ||
        w.indexOf("Trident/") !== -1 ||
        w.indexOf("Edge/") !== -1) &&
        (Ve = !0);
    } catch {}
    return Ve;
  }
  function rt(w) {
    return typeof w == "function";
  }
  function _t(w) {
    return typeof w == "number";
  }
  let Nt = !1;
  if (typeof window < "u")
    try {
      const w = Object.defineProperty({}, "passive", {
        get: function () {
          Nt = !0;
        },
      });
      (window.addEventListener("test", w, w),
        window.removeEventListener("test", w, w));
    } catch {
      Nt = !1;
    }
  const Er = { useG: !0 },
    cn = {},
    Sr = {},
    Tn = new RegExp("^" + j + "(\\w+)(true|false)$"),
    Pn = H("propagationStopped");
  function Tr(w, I) {
    const B = (I ? I(w) : w) + P,
      R = (I ? I(w) : w) + N,
      F = j + B,
      Q = j + R;
    ((cn[w] = {}), (cn[w][P] = F), (cn[w][N] = Q));
  }
  function wr(w, I, B, R) {
    const F = (R && R.add) || m,
      Q = (R && R.rm) || _,
      me = (R && R.listeners) || "eventListeners",
      ge = (R && R.rmAll) || "removeAllListeners",
      Ee = H(F),
      Ae = "." + F + ":",
      pe = "prependListener",
      xe = "." + pe + ":",
      He = function (Se, se, ut) {
        if (Se.isRemoved) return;
        const yt = Se.callback;
        typeof yt == "object" &&
          yt.handleEvent &&
          ((Se.callback = (de) => yt.handleEvent(de)),
          (Se.originalDelegate = yt));
        let jt;
        try {
          Se.invoke(Se, se, [ut]);
        } catch (de) {
          jt = de;
        }
        const kt = Se.options;
        if (kt && typeof kt == "object" && kt.once) {
          const de = Se.originalDelegate ? Se.originalDelegate : Se.callback;
          se[Q].call(se, ut.type, de, kt);
        }
        return jt;
      };
    function ot(Se, se, ut) {
      if (((se = se || w.event), !se)) return;
      const yt = Se || se.target || w,
        jt = yt[cn[se.type][ut ? N : P]];
      if (jt) {
        const kt = [];
        if (jt.length === 1) {
          const de = He(jt[0], yt, se);
          de && kt.push(de);
        } else {
          const de = jt.slice();
          for (let It = 0; It < de.length && !(se && se[Pn] === !0); It++) {
            const ze = He(de[It], yt, se);
            ze && kt.push(ze);
          }
        }
        if (kt.length === 1) throw kt[0];
        for (let de = 0; de < kt.length; de++) {
          const It = kt[de];
          I.nativeScheduleMicroTask(() => {
            throw It;
          });
        }
      }
    }
    const wt = function (Se) {
        return ot(this, Se, !1);
      },
      zt = function (Se) {
        return ot(this, Se, !0);
      };
    function rn(Se, se) {
      if (!Se) return !1;
      let ut = !0;
      se && se.useG !== void 0 && (ut = se.useG);
      const yt = se && se.vh;
      let jt = !0;
      se && se.chkDup !== void 0 && (jt = se.chkDup);
      let kt = !1;
      se && se.rt !== void 0 && (kt = se.rt);
      let de = Se;
      for (; de && !de.hasOwnProperty(F); ) de = c(de);
      if ((!de && Se[F] && (de = Se), !de || de[Ee])) return !1;
      const It = se && se.eventNameToString,
        ze = {},
        Pe = (de[Ee] = de[F]),
        Ie = (de[H(Q)] = de[Q]),
        Ue = (de[H(me)] = de[me]),
        on = (de[H(ge)] = de[ge]);
      let At;
      se && se.prepend && (At = de[H(se.prepend)] = de[se.prepend]);
      function Gt(M, te) {
        return !Nt && typeof M == "object" && M
          ? !!M.capture
          : !Nt || !te
            ? M
            : typeof M == "boolean"
              ? { capture: M, passive: !0 }
              : M
                ? typeof M == "object" && M.passive !== !1
                  ? { ...M, passive: !0 }
                  : M
                : { passive: !0 };
      }
      const mt = function (M) {
          if (!ze.isExisting)
            return Pe.call(
              ze.target,
              ze.eventName,
              ze.capture ? zt : wt,
              ze.options,
            );
        },
        b = function (M) {
          if (!M.isRemoved) {
            const te = cn[M.eventName];
            let Te;
            te && (Te = te[M.capture ? N : P]);
            const Re = Te && M.target[Te];
            if (Re) {
              for (let ce = 0; ce < Re.length; ce++)
                if (Re[ce] === M) {
                  (Re.splice(ce, 1),
                    (M.isRemoved = !0),
                    M.removeAbortListener &&
                      (M.removeAbortListener(), (M.removeAbortListener = null)),
                    Re.length === 0 &&
                      ((M.allRemoved = !0), (M.target[Te] = null)));
                  break;
                }
            }
          }
          if (M.allRemoved)
            return Ie.call(
              M.target,
              M.eventName,
              M.capture ? zt : wt,
              M.options,
            );
        },
        D = function (M) {
          return Pe.call(ze.target, ze.eventName, M.invoke, ze.options);
        },
        L = function (M) {
          return At.call(ze.target, ze.eventName, M.invoke, ze.options);
        },
        we = function (M) {
          return Ie.call(M.target, M.eventName, M.invoke, M.options);
        },
        lt = ut ? mt : D,
        Qe = ut ? b : we,
        Ln = function (M, te) {
          const Te = typeof te;
          return (
            (Te === "function" && M.callback === te) ||
            (Te === "object" && M.originalDelegate === te)
          );
        },
        wn = se && se.diff ? se.diff : Ln,
        qt = Zone[H("UNPATCHED_EVENTS")],
        Mn = w[H("PASSIVE_EVENTS")];
      function Z(M) {
        if (typeof M == "object" && M !== null) {
          const te = { ...M };
          return (M.signal && (te.signal = M.signal), te);
        }
        return M;
      }
      const ee = function (M, te, Te, Re, ce = !1, je = !1) {
        return function () {
          const $e = this || w;
          let We = arguments[0];
          se && se.transferEventName && (We = se.transferEventName(We));
          let vt = arguments[1];
          if (!vt) return M.apply(this, arguments);
          if (Ge && We === "uncaughtException") return M.apply(this, arguments);
          let St = !1;
          if (typeof vt != "function") {
            if (!vt.handleEvent) return M.apply(this, arguments);
            St = !0;
          }
          if (yt && !yt(M, vt, $e, arguments)) return;
          const zn = Nt && !!Mn && Mn.indexOf(We) !== -1,
            sn = Z(Gt(arguments[2], zn)),
            lr = sn == null ? void 0 : sn.signal;
          if (lr != null && lr.aborted) return;
          if (qt) {
            for (let Qt = 0; Qt < qt.length; Qt++)
              if (We === qt[Qt])
                return zn ? M.call($e, We, vt, sn) : M.apply(this, arguments);
          }
          const ki = sn ? (typeof sn == "boolean" ? !0 : sn.capture) : !1,
            pt = sn && typeof sn == "object" ? sn.once : !1,
            ha = Zone.current;
          let to = cn[We];
          to || (Tr(We, It), (to = cn[We]));
          const no = to[ki ? N : P];
          let Rr = $e[no],
            Ko = !1;
          if (Rr) {
            if (((Ko = !0), jt)) {
              for (let Qt = 0; Qt < Rr.length; Qt++) if (wn(Rr[Qt], vt)) return;
            }
          } else Rr = $e[no] = [];
          let Ri;
          const ro = $e.constructor.name,
            Ii = Sr[ro];
          (Ii && (Ri = Ii[We]),
            Ri || (Ri = ro + te + (It ? It(We) : We)),
            (ze.options = sn),
            pt && (ze.options.once = !1),
            (ze.target = $e),
            (ze.capture = ki),
            (ze.eventName = We),
            (ze.isExisting = Ko));
          const kn = ut ? Er : void 0;
          (kn && (kn.taskData = ze), lr && (ze.options.signal = void 0));
          const Yt = ha.scheduleEventTask(Ri, vt, kn, Te, Re);
          if (lr) {
            ze.options.signal = lr;
            const Qt = () => Yt.zone.cancelTask(Yt);
            (M.call(lr, "abort", Qt, { once: !0 }),
              (Yt.removeAbortListener = () =>
                lr.removeEventListener("abort", Qt)));
          }
          if (
            ((ze.target = null),
            kn && (kn.taskData = null),
            pt && (ze.options.once = !0),
            (!Nt && typeof Yt.options == "boolean") || (Yt.options = sn),
            (Yt.target = $e),
            (Yt.capture = ki),
            (Yt.eventName = We),
            St && (Yt.originalDelegate = vt),
            je ? Rr.unshift(Yt) : Rr.push(Yt),
            ce)
          )
            return $e;
        };
      };
      return (
        (de[F] = ee(Pe, Ae, lt, Qe, kt)),
        At && (de[pe] = ee(At, xe, L, Qe, kt, !0)),
        (de[Q] = function () {
          const M = this || w;
          let te = arguments[0];
          se && se.transferEventName && (te = se.transferEventName(te));
          const Te = arguments[2],
            Re = Te ? (typeof Te == "boolean" ? !0 : Te.capture) : !1,
            ce = arguments[1];
          if (!ce) return Ie.apply(this, arguments);
          if (yt && !yt(Ie, ce, M, arguments)) return;
          const je = cn[te];
          let $e;
          je && ($e = je[Re ? N : P]);
          const We = $e && M[$e];
          if (We)
            for (let vt = 0; vt < We.length; vt++) {
              const St = We[vt];
              if (wn(St, ce)) {
                if (
                  (We.splice(vt, 1),
                  (St.isRemoved = !0),
                  We.length === 0 &&
                    ((St.allRemoved = !0),
                    (M[$e] = null),
                    !Re && typeof te == "string"))
                ) {
                  const zn = j + "ON_PROPERTY" + te;
                  M[zn] = null;
                }
                return (St.zone.cancelTask(St), kt ? M : void 0);
              }
            }
          return Ie.apply(this, arguments);
        }),
        (de[me] = function () {
          const M = this || w;
          let te = arguments[0];
          se && se.transferEventName && (te = se.transferEventName(te));
          const Te = [],
            Re = ur(M, It ? It(te) : te);
          for (let ce = 0; ce < Re.length; ce++) {
            const je = Re[ce];
            let $e = je.originalDelegate ? je.originalDelegate : je.callback;
            Te.push($e);
          }
          return Te;
        }),
        (de[ge] = function () {
          const M = this || w;
          let te = arguments[0];
          if (te) {
            se && se.transferEventName && (te = se.transferEventName(te));
            const Te = cn[te];
            if (Te) {
              const Re = Te[P],
                ce = Te[N],
                je = M[Re],
                $e = M[ce];
              if (je) {
                const We = je.slice();
                for (let vt = 0; vt < We.length; vt++) {
                  const St = We[vt];
                  let zn = St.originalDelegate
                    ? St.originalDelegate
                    : St.callback;
                  this[Q].call(this, te, zn, St.options);
                }
              }
              if ($e) {
                const We = $e.slice();
                for (let vt = 0; vt < We.length; vt++) {
                  const St = We[vt];
                  let zn = St.originalDelegate
                    ? St.originalDelegate
                    : St.callback;
                  this[Q].call(this, te, zn, St.options);
                }
              }
            }
          } else {
            const Te = Object.keys(M);
            for (let Re = 0; Re < Te.length; Re++) {
              const ce = Te[Re],
                je = Tn.exec(ce);
              let $e = je && je[1];
              $e && $e !== "removeListener" && this[ge].call(this, $e);
            }
            this[ge].call(this, "removeListener");
          }
          if (kt) return this;
        }),
        ke(de[F], Pe),
        ke(de[Q], Ie),
        on && ke(de[ge], on),
        Ue && ke(de[me], Ue),
        !0
      );
    }
    let Rt = [];
    for (let Se = 0; Se < B.length; Se++) Rt[Se] = rn(B[Se], R);
    return Rt;
  }
  function ur(w, I) {
    if (!I) {
      const Q = [];
      for (let me in w) {
        const ge = Tn.exec(me);
        let Ee = ge && ge[1];
        if (Ee && (!I || Ee === I)) {
          const Ae = w[me];
          if (Ae) for (let pe = 0; pe < Ae.length; pe++) Q.push(Ae[pe]);
        }
      }
      return Q;
    }
    let B = cn[I];
    B || (Tr(I), (B = cn[I]));
    const R = w[B[P]],
      F = w[B[N]];
    return R ? (F ? R.concat(F) : R.slice()) : F ? F.slice() : [];
  }
  function kr(w, I) {
    const B = w.Event;
    B &&
      B.prototype &&
      I.patchMethod(
        B.prototype,
        "stopImmediatePropagation",
        (R) =>
          function (F, Q) {
            ((F[Pn] = !0), R && R.apply(F, Q));
          },
      );
  }
  function qe(w, I) {
    I.patchMethod(
      w,
      "queueMicrotask",
      (B) =>
        function (R, F) {
          Zone.current.scheduleMicroTask("queueMicrotask", F[0]);
        },
    );
  }
  const Ut = H("zoneTask");
  function Fe(w, I, B, R) {
    let F = null,
      Q = null;
    ((I += R), (B += R));
    const me = {};
    function ge(Ae) {
      const pe = Ae.data;
      pe.args[0] = function () {
        return Ae.invoke.apply(this, arguments);
      };
      const xe = F.apply(w, pe.args);
      return (
        _t(xe)
          ? (pe.handleId = xe)
          : ((pe.handle = xe), (pe.isRefreshable = rt(xe.refresh))),
        Ae
      );
    }
    function Ee(Ae) {
      const { handle: pe, handleId: xe } = Ae.data;
      return Q.call(w, pe ?? xe);
    }
    ((F = k(
      w,
      I,
      (Ae) =>
        function (pe, xe) {
          if (rt(xe[0])) {
            const He = {
                isRefreshable: !1,
                isPeriodic: R === "Interval",
                delay:
                  R === "Timeout" || R === "Interval" ? xe[1] || 0 : void 0,
                args: xe,
              },
              ot = xe[0];
            xe[0] = function () {
              try {
                return ot.apply(this, arguments);
              } finally {
                const {
                  handle: ut,
                  handleId: yt,
                  isPeriodic: jt,
                  isRefreshable: kt,
                } = He;
                !jt && !kt && (yt ? delete me[yt] : ut && (ut[Ut] = null));
              }
            };
            const wt = z(I, xe[0], He, ge, Ee);
            if (!wt) return wt;
            const {
              handleId: zt,
              handle: rn,
              isRefreshable: Rt,
              isPeriodic: Se,
            } = wt.data;
            if (zt) me[zt] = wt;
            else if (rn && ((rn[Ut] = wt), Rt && !Se)) {
              const se = rn.refresh;
              rn.refresh = function () {
                const { zone: ut, state: yt } = wt;
                return (
                  yt === "notScheduled"
                    ? ((wt._state = "scheduled"), ut._updateTaskCount(wt, 1))
                    : yt === "running" && (wt._state = "scheduling"),
                  se.call(this)
                );
              };
            }
            return rn ?? zt ?? wt;
          } else return Ae.apply(w, xe);
        },
    )),
      (Q = k(
        w,
        B,
        (Ae) =>
          function (pe, xe) {
            const He = xe[0];
            let ot;
            (_t(He)
              ? ((ot = me[He]), delete me[He])
              : ((ot = He == null ? void 0 : He[Ut]),
                ot ? (He[Ut] = null) : (ot = He)),
              ot != null && ot.type
                ? ot.cancelFn && ot.zone.cancelTask(ot)
                : Ae.apply(w, xe));
          },
      )));
  }
  function Tt(w, I) {
    const { isBrowser: B, isMix: R } = I.getGlobalObjects();
    if ((!B && !R) || !w.customElements || !("customElements" in w)) return;
    const F = [
      "connectedCallback",
      "disconnectedCallback",
      "adoptedCallback",
      "attributeChangedCallback",
      "formAssociatedCallback",
      "formDisabledCallback",
      "formResetCallback",
      "formStateRestoreCallback",
    ];
    I.patchCallbacks(I, w.customElements, "customElements", "define", F);
  }
  function it(w, I) {
    if (Zone[I.symbol("patchEventTarget")]) return;
    const {
      eventNames: B,
      zoneSymbolEventNames: R,
      TRUE_STR: F,
      FALSE_STR: Q,
      ZONE_SYMBOL_PREFIX: me,
    } = I.getGlobalObjects();
    for (let Ee = 0; Ee < B.length; Ee++) {
      const Ae = B[Ee],
        pe = Ae + Q,
        xe = Ae + F,
        He = me + pe,
        ot = me + xe;
      ((R[Ae] = {}), (R[Ae][Q] = He), (R[Ae][F] = ot));
    }
    const ge = w.EventTarget;
    if (!(!ge || !ge.prototype))
      return (I.patchEventTarget(w, I, [ge && ge.prototype]), !0);
  }
  function Hn(w, I) {
    I.patchEventPrototype(w, I);
  }
  function Si(w, I, B) {
    if (!B || B.length === 0) return I;
    const R = B.filter((Q) => Q.target === w);
    if (!R || R.length === 0) return I;
    const F = R[0].ignoreProperties;
    return I.filter((Q) => F.indexOf(Q) === -1);
  }
  function Ji(w, I, B, R) {
    if (!w) return;
    const F = Si(w, I, B);
    Y(w, F, R);
  }
  function qr(w) {
    return Object.getOwnPropertyNames(w)
      .filter((I) => I.startsWith("on") && I.length > 2)
      .map((I) => I.substring(2));
  }
  function fa(w, I) {
    if ((Ge && !nt) || Zone[w.symbol("patchEvents")]) return;
    const B = I.__Zone_ignore_on_properties;
    let R = [];
    if (Ke) {
      const F = window;
      R = R.concat([
        "Document",
        "SVGElement",
        "Element",
        "HTMLElement",
        "HTMLBodyElement",
        "HTMLMediaElement",
        "HTMLFrameSetElement",
        "HTMLFrameElement",
        "HTMLIFrameElement",
        "HTMLMarqueeElement",
        "Worker",
      ]);
      const Q = Ze() ? [{ target: F, ignoreProperties: ["error"] }] : [];
      Ji(F, qr(F), B && B.concat(Q), c(F));
    }
    R = R.concat([
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "IDBIndex",
      "IDBRequest",
      "IDBOpenDBRequest",
      "IDBDatabase",
      "IDBTransaction",
      "IDBCursor",
      "WebSocket",
    ]);
    for (let F = 0; F < R.length; F++) {
      const Q = I[R[F]];
      Q && Q.prototype && Ji(Q.prototype, qr(Q.prototype), B);
    }
  }
  function Ti(w) {
    (w.__load_patch("legacy", (I) => {
      const B = I[w.__symbol__("legacyPatch")];
      B && B();
    }),
      w.__load_patch("timers", (I) => {
        const R = "clear";
        (Fe(I, "set", R, "Timeout"),
          Fe(I, "set", R, "Interval"),
          Fe(I, "set", R, "Immediate"));
      }),
      w.__load_patch("requestAnimationFrame", (I) => {
        (Fe(I, "request", "cancel", "AnimationFrame"),
          Fe(I, "mozRequest", "mozCancel", "AnimationFrame"),
          Fe(I, "webkitRequest", "webkitCancel", "AnimationFrame"));
      }),
      w.__load_patch("blocking", (I, B) => {
        const R = ["alert", "prompt", "confirm"];
        for (let F = 0; F < R.length; F++) {
          const Q = R[F];
          k(
            I,
            Q,
            (me, ge, Ee) =>
              function (Ae, pe) {
                return B.current.run(me, I, pe, Ee);
              },
          );
        }
      }),
      w.__load_patch("EventTarget", (I, B, R) => {
        (Hn(I, R), it(I, R));
        const F = I.XMLHttpRequestEventTarget;
        F && F.prototype && R.patchEventTarget(I, R, [F.prototype]);
      }),
      w.__load_patch("MutationObserver", (I, B, R) => {
        (re("MutationObserver"), re("WebKitMutationObserver"));
      }),
      w.__load_patch("IntersectionObserver", (I, B, R) => {
        re("IntersectionObserver");
      }),
      w.__load_patch("FileReader", (I, B, R) => {
        re("FileReader");
      }),
      w.__load_patch("on_property", (I, B, R) => {
        fa(R, I);
      }),
      w.__load_patch("customElements", (I, B, R) => {
        Tt(I, R);
      }),
      w.__load_patch("XHR", (I, B) => {
        Ae(I);
        const R = H("xhrTask"),
          F = H("xhrSync"),
          Q = H("xhrListener"),
          me = H("xhrScheduled"),
          ge = H("xhrURL"),
          Ee = H("xhrErrorBeforeScheduled");
        function Ae(pe) {
          const xe = pe.XMLHttpRequest;
          if (!xe) return;
          const He = xe.prototype;
          function ot(Pe) {
            return Pe[R];
          }
          let wt = He[y],
            zt = He[E];
          if (!wt) {
            const Pe = pe.XMLHttpRequestEventTarget;
            if (Pe) {
              const Ie = Pe.prototype;
              ((wt = Ie[y]), (zt = Ie[E]));
            }
          }
          const rn = "readystatechange",
            Rt = "scheduled";
          function Se(Pe) {
            const Ie = Pe.data,
              Ue = Ie.target;
            ((Ue[me] = !1), (Ue[Ee] = !1));
            const on = Ue[Q];
            (wt || ((wt = Ue[y]), (zt = Ue[E])), on && zt.call(Ue, rn, on));
            const At = (Ue[Q] = () => {
              if (Ue.readyState === Ue.DONE)
                if (!Ie.aborted && Ue[me] && Pe.state === Rt) {
                  const mt = Ue[B.__symbol__("loadfalse")];
                  if (Ue.status !== 0 && mt && mt.length > 0) {
                    const b = Pe.invoke;
                    ((Pe.invoke = function () {
                      const D = Ue[B.__symbol__("loadfalse")];
                      for (let L = 0; L < D.length; L++)
                        D[L] === Pe && D.splice(L, 1);
                      !Ie.aborted && Pe.state === Rt && b.call(Pe);
                    }),
                      mt.push(Pe));
                  } else Pe.invoke();
                } else !Ie.aborted && Ue[me] === !1 && (Ue[Ee] = !0);
            });
            return (
              wt.call(Ue, rn, At),
              Ue[R] || (Ue[R] = Pe),
              It.apply(Ue, Ie.args),
              (Ue[me] = !0),
              Pe
            );
          }
          function se() {}
          function ut(Pe) {
            const Ie = Pe.data;
            return ((Ie.aborted = !0), ze.apply(Ie.target, Ie.args));
          }
          const yt = k(
              He,
              "open",
              () =>
                function (Pe, Ie) {
                  return (
                    (Pe[F] = Ie[2] == !1),
                    (Pe[ge] = Ie[1]),
                    yt.apply(Pe, Ie)
                  );
                },
            ),
            jt = "XMLHttpRequest.send",
            kt = H("fetchTaskAborting"),
            de = H("fetchTaskScheduling"),
            It = k(
              He,
              "send",
              () =>
                function (Pe, Ie) {
                  if (B.current[de] === !0 || Pe[F]) return It.apply(Pe, Ie);
                  {
                    const Ue = {
                        target: Pe,
                        url: Pe[ge],
                        isPeriodic: !1,
                        args: Ie,
                        aborted: !1,
                      },
                      on = z(jt, se, Ue, Se, ut);
                    Pe &&
                      Pe[Ee] === !0 &&
                      !Ue.aborted &&
                      on.state === Rt &&
                      on.invoke();
                  }
                },
            ),
            ze = k(
              He,
              "abort",
              () =>
                function (Pe, Ie) {
                  const Ue = ot(Pe);
                  if (Ue && typeof Ue.type == "string") {
                    if (Ue.cancelFn == null || (Ue.data && Ue.data.aborted))
                      return;
                    Ue.zone.cancelTask(Ue);
                  } else if (B.current[kt] === !0) return ze.apply(Pe, Ie);
                },
            );
        }
      }),
      w.__load_patch("geolocation", (I) => {
        I.navigator &&
          I.navigator.geolocation &&
          ye(I.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
      }),
      w.__load_patch("PromiseRejectionEvent", (I, B) => {
        function R(F) {
          return function (Q) {
            ur(I, F).forEach((ge) => {
              const Ee = I.PromiseRejectionEvent;
              if (Ee) {
                const Ae = new Ee(F, {
                  promise: Q.promise,
                  reason: Q.rejection,
                });
                ge.invoke(Ae);
              }
            });
          };
        }
        I.PromiseRejectionEvent &&
          ((B[H("unhandledPromiseRejectionHandler")] = R("unhandledrejection")),
          (B[H("rejectionHandledHandler")] = R("rejectionhandled")));
      }),
      w.__load_patch("queueMicrotask", (I, B, R) => {
        qe(I, R);
      }));
  }
  function wi(w) {
    w.__load_patch("ZoneAwarePromise", (I, B, R) => {
      const F = Object.getOwnPropertyDescriptor,
        Q = Object.defineProperty;
      function me(Z) {
        if (Z && Z.toString === Object.prototype.toString) {
          const ee = Z.constructor && Z.constructor.name;
          return (ee || "") + ": " + JSON.stringify(Z);
        }
        return Z ? Z.toString() : Object.prototype.toString.call(Z);
      }
      const ge = R.symbol,
        Ee = [],
        Ae = I[ge("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1,
        pe = ge("Promise"),
        xe = ge("then"),
        He = "__creationTrace__";
      ((R.onUnhandledError = (Z) => {
        if (R.showUncaughtError()) {
          const ee = Z && Z.rejection;
          ee
            ? console.error(
                "Unhandled Promise rejection:",
                ee instanceof Error ? ee.message : ee,
                "; Zone:",
                Z.zone.name,
                "; Task:",
                Z.task && Z.task.source,
                "; Value:",
                ee,
                ee instanceof Error ? ee.stack : void 0,
              )
            : console.error(Z);
        }
      }),
        (R.microtaskDrainDone = () => {
          for (; Ee.length; ) {
            const Z = Ee.shift();
            try {
              Z.zone.runGuarded(() => {
                throw Z.throwOriginal ? Z.rejection : Z;
              });
            } catch (ee) {
              wt(ee);
            }
          }
        }));
      const ot = ge("unhandledPromiseRejectionHandler");
      function wt(Z) {
        R.onUnhandledError(Z);
        try {
          const ee = B[ot];
          typeof ee == "function" && ee.call(this, Z);
        } catch {}
      }
      function zt(Z) {
        return Z && Z.then;
      }
      function rn(Z) {
        return Z;
      }
      function Rt(Z) {
        return Qe.reject(Z);
      }
      const Se = ge("state"),
        se = ge("value"),
        ut = ge("finally"),
        yt = ge("parentPromiseValue"),
        jt = ge("parentPromiseState"),
        kt = "Promise.then",
        de = null,
        It = !0,
        ze = !1,
        Pe = 0;
      function Ie(Z, ee) {
        return (M) => {
          try {
            Gt(Z, ee, M);
          } catch (te) {
            Gt(Z, !1, te);
          }
        };
      }
      const Ue = function () {
          let Z = !1;
          return function (M) {
            return function () {
              Z || ((Z = !0), M.apply(null, arguments));
            };
          };
        },
        on = "Promise resolved with itself",
        At = ge("currentTaskTrace");
      function Gt(Z, ee, M) {
        const te = Ue();
        if (Z === M) throw new TypeError(on);
        if (Z[Se] === de) {
          let Te = null;
          try {
            (typeof M == "object" || typeof M == "function") &&
              (Te = M && M.then);
          } catch (Re) {
            return (
              te(() => {
                Gt(Z, !1, Re);
              })(),
              Z
            );
          }
          if (
            ee !== ze &&
            M instanceof Qe &&
            M.hasOwnProperty(Se) &&
            M.hasOwnProperty(se) &&
            M[Se] !== de
          )
            (b(M), Gt(Z, M[Se], M[se]));
          else if (ee !== ze && typeof Te == "function")
            try {
              Te.call(M, te(Ie(Z, ee)), te(Ie(Z, !1)));
            } catch (Re) {
              te(() => {
                Gt(Z, !1, Re);
              })();
            }
          else {
            Z[Se] = ee;
            const Re = Z[se];
            if (
              ((Z[se] = M),
              Z[ut] === ut && ee === It && ((Z[Se] = Z[jt]), (Z[se] = Z[yt])),
              ee === ze && M instanceof Error)
            ) {
              const ce =
                B.currentTask && B.currentTask.data && B.currentTask.data[He];
              ce &&
                Q(M, At, {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: ce,
                });
            }
            for (let ce = 0; ce < Re.length; )
              D(Z, Re[ce++], Re[ce++], Re[ce++], Re[ce++]);
            if (Re.length == 0 && ee == ze) {
              Z[Se] = Pe;
              let ce = M;
              try {
                throw new Error(
                  "Uncaught (in promise): " +
                    me(M) +
                    (M && M.stack
                      ? `
` + M.stack
                      : ""),
                );
              } catch (je) {
                ce = je;
              }
              (Ae && (ce.throwOriginal = !0),
                (ce.rejection = M),
                (ce.promise = Z),
                (ce.zone = B.current),
                (ce.task = B.currentTask),
                Ee.push(ce),
                R.scheduleMicroTask());
            }
          }
        }
        return Z;
      }
      const mt = ge("rejectionHandledHandler");
      function b(Z) {
        if (Z[Se] === Pe) {
          try {
            const ee = B[mt];
            ee &&
              typeof ee == "function" &&
              ee.call(this, { rejection: Z[se], promise: Z });
          } catch {}
          Z[Se] = ze;
          for (let ee = 0; ee < Ee.length; ee++)
            Z === Ee[ee].promise && Ee.splice(ee, 1);
        }
      }
      function D(Z, ee, M, te, Te) {
        b(Z);
        const Re = Z[Se],
          ce = Re
            ? typeof te == "function"
              ? te
              : rn
            : typeof Te == "function"
              ? Te
              : Rt;
        ee.scheduleMicroTask(
          kt,
          () => {
            try {
              const je = Z[se],
                $e = !!M && ut === M[ut];
              $e && ((M[yt] = je), (M[jt] = Re));
              const We = ee.run(
                ce,
                void 0,
                $e && ce !== Rt && ce !== rn ? [] : [je],
              );
              Gt(M, !0, We);
            } catch (je) {
              Gt(M, !1, je);
            }
          },
          M,
        );
      }
      const L = "function ZoneAwarePromise() { [native code] }",
        we = function () {},
        lt = I.AggregateError;
      class Qe {
        static toString() {
          return L;
        }
        static resolve(ee) {
          return ee instanceof Qe ? ee : Gt(new this(null), It, ee);
        }
        static reject(ee) {
          return Gt(new this(null), ze, ee);
        }
        static withResolvers() {
          const ee = {};
          return (
            (ee.promise = new Qe((M, te) => {
              ((ee.resolve = M), (ee.reject = te));
            })),
            ee
          );
        }
        static any(ee) {
          if (!ee || typeof ee[Symbol.iterator] != "function")
            return Promise.reject(new lt([], "All promises were rejected"));
          const M = [];
          let te = 0;
          try {
            for (let ce of ee) (te++, M.push(Qe.resolve(ce)));
          } catch {
            return Promise.reject(new lt([], "All promises were rejected"));
          }
          if (te === 0)
            return Promise.reject(new lt([], "All promises were rejected"));
          let Te = !1;
          const Re = [];
          return new Qe((ce, je) => {
            for (let $e = 0; $e < M.length; $e++)
              M[$e].then(
                (We) => {
                  Te || ((Te = !0), ce(We));
                },
                (We) => {
                  (Re.push(We),
                    te--,
                    te === 0 &&
                      ((Te = !0),
                      je(new lt(Re, "All promises were rejected"))));
                },
              );
          });
        }
        static race(ee) {
          let M,
            te,
            Te = new this((je, $e) => {
              ((M = je), (te = $e));
            });
          function Re(je) {
            M(je);
          }
          function ce(je) {
            te(je);
          }
          for (let je of ee)
            (zt(je) || (je = this.resolve(je)), je.then(Re, ce));
          return Te;
        }
        static all(ee) {
          return Qe.allWithCallback(ee);
        }
        static allSettled(ee) {
          return (
            this && this.prototype instanceof Qe ? this : Qe
          ).allWithCallback(ee, {
            thenCallback: (te) => ({ status: "fulfilled", value: te }),
            errorCallback: (te) => ({ status: "rejected", reason: te }),
          });
        }
        static allWithCallback(ee, M) {
          let te,
            Te,
            Re = new this((We, vt) => {
              ((te = We), (Te = vt));
            }),
            ce = 2,
            je = 0;
          const $e = [];
          for (let We of ee) {
            zt(We) || (We = this.resolve(We));
            const vt = je;
            try {
              We.then(
                (St) => {
                  (($e[vt] = M ? M.thenCallback(St) : St),
                    ce--,
                    ce === 0 && te($e));
                },
                (St) => {
                  M
                    ? (($e[vt] = M.errorCallback(St)), ce--, ce === 0 && te($e))
                    : Te(St);
                },
              );
            } catch (St) {
              Te(St);
            }
            (ce++, je++);
          }
          return ((ce -= 2), ce === 0 && te($e), Re);
        }
        constructor(ee) {
          const M = this;
          if (!(M instanceof Qe))
            throw new Error("Must be an instanceof Promise.");
          ((M[Se] = de), (M[se] = []));
          try {
            const te = Ue();
            ee && ee(te(Ie(M, It)), te(Ie(M, ze)));
          } catch (te) {
            Gt(M, !1, te);
          }
        }
        get [Symbol.toStringTag]() {
          return "Promise";
        }
        get [Symbol.species]() {
          return Qe;
        }
        then(ee, M) {
          var ce;
          let te =
            (ce = this.constructor) == null ? void 0 : ce[Symbol.species];
          (!te || typeof te != "function") && (te = this.constructor || Qe);
          const Te = new te(we),
            Re = B.current;
          return (
            this[Se] == de
              ? this[se].push(Re, Te, ee, M)
              : D(this, Re, Te, ee, M),
            Te
          );
        }
        catch(ee) {
          return this.then(null, ee);
        }
        finally(ee) {
          var Re;
          let M = (Re = this.constructor) == null ? void 0 : Re[Symbol.species];
          (!M || typeof M != "function") && (M = Qe);
          const te = new M(we);
          te[ut] = ut;
          const Te = B.current;
          return (
            this[Se] == de
              ? this[se].push(Te, te, ee, ee)
              : D(this, Te, te, ee, ee),
            te
          );
        }
      }
      ((Qe.resolve = Qe.resolve),
        (Qe.reject = Qe.reject),
        (Qe.race = Qe.race),
        (Qe.all = Qe.all));
      const Ln = (I[pe] = I.Promise);
      I.Promise = Qe;
      const wn = ge("thenPatched");
      function qt(Z) {
        const ee = Z.prototype,
          M = F(ee, "then");
        if (M && (M.writable === !1 || !M.configurable)) return;
        const te = ee.then;
        ((ee[xe] = te),
          (Z.prototype.then = function (Te, Re) {
            return new Qe((je, $e) => {
              te.call(this, je, $e);
            }).then(Te, Re);
          }),
          (Z[wn] = !0));
      }
      R.patchThen = qt;
      function Mn(Z) {
        return function (ee, M) {
          let te = Z.apply(ee, M);
          if (te instanceof Qe) return te;
          let Te = te.constructor;
          return (Te[wn] || qt(Te), te);
        };
      }
      return (
        Ln && (qt(Ln), k(I, "fetch", (Z) => Mn(Z))),
        (Promise[B.__symbol__("uncaughtPromiseErrors")] = Ee),
        Qe
      );
    });
  }
  function Nl(w) {
    w.__load_patch("toString", (I) => {
      const B = Function.prototype.toString,
        R = H("OriginalDelegate"),
        F = H("Promise"),
        Q = H("Error"),
        me = function () {
          if (typeof this == "function") {
            const pe = this[R];
            if (pe)
              return typeof pe == "function"
                ? B.call(pe)
                : Object.prototype.toString.call(pe);
            if (this === Promise) {
              const xe = I[F];
              if (xe) return B.call(xe);
            }
            if (this === Error) {
              const xe = I[Q];
              if (xe) return B.call(xe);
            }
          }
          return B.call(this);
        };
      ((me[R] = B), (Function.prototype.toString = me));
      const ge = Object.prototype.toString,
        Ee = "[object Promise]";
      Object.prototype.toString = function () {
        return typeof Promise == "function" && this instanceof Promise
          ? Ee
          : ge.call(this);
      };
    });
  }
  function da(w, I, B, R, F) {
    const Q = Zone.__symbol__(R);
    if (I[Q]) return;
    const me = (I[Q] = I[R]);
    ((I[R] = function (ge, Ee, Ae) {
      return (
        Ee &&
          Ee.prototype &&
          F.forEach(function (pe) {
            const xe = `${B}.${R}::` + pe,
              He = Ee.prototype;
            try {
              if (He.hasOwnProperty(pe)) {
                const ot = w.ObjectGetOwnPropertyDescriptor(He, pe);
                ot && ot.value
                  ? ((ot.value = w.wrapWithCurrentZone(ot.value, xe)),
                    w._redefineProperty(Ee.prototype, pe, ot))
                  : He[pe] && (He[pe] = w.wrapWithCurrentZone(He[pe], xe));
              } else He[pe] && (He[pe] = w.wrapWithCurrentZone(He[pe], xe));
            } catch {}
          }),
        me.call(I, ge, Ee, Ae)
      );
    }),
      w.attachOriginToPatched(I[R], me));
  }
  function pa(w) {
    w.__load_patch("util", (I, B, R) => {
      const F = qr(I);
      ((R.patchOnProperties = Y),
        (R.patchMethod = k),
        (R.bindArguments = ae),
        (R.patchMacroTask = $));
      const Q = B.__symbol__("BLACK_LISTED_EVENTS"),
        me = B.__symbol__("UNPATCHED_EVENTS");
      (I[me] && (I[Q] = I[me]),
        I[Q] && (B[Q] = B[me] = I[Q]),
        (R.patchEventPrototype = kr),
        (R.patchEventTarget = wr),
        (R.isIEOrEdge = dt),
        (R.ObjectDefineProperty = u),
        (R.ObjectGetOwnPropertyDescriptor = s),
        (R.ObjectCreate = d),
        (R.ArraySlice = h),
        (R.patchClass = re),
        (R.wrapWithCurrentZone = W),
        (R.filterProperties = Si),
        (R.attachOriginToPatched = ke),
        (R._redefineProperty = Object.defineProperty),
        (R.patchCallbacks = da),
        (R.getGlobalObjects = () => ({
          globalSources: Sr,
          zoneSymbolEventNames: cn,
          eventNames: F,
          isBrowser: Ke,
          isMix: nt,
          isNode: Ge,
          TRUE_STR: N,
          FALSE_STR: P,
          ZONE_SYMBOL_PREFIX: j,
          ADD_EVENT_LISTENER_STR: m,
          REMOVE_EVENT_LISTENER_STR: _,
        })));
    });
  }
  function Al(w) {
    (wi(w), Nl(w), pa(w));
  }
  const eo = o();
  return (Al(eo), Ti(eo), w_);
}
PA();
var Xv = (function () {
    function e() {}
    return ((e.prototype.emit = function (t) {}), e);
  })(),
  LA = new Xv(),
  MA = (function () {
    function e() {}
    return (
      (e.prototype.getLogger = function (t, n, o) {
        return new Xv();
      }),
      e
    );
  })(),
  qv = new MA(),
  DA = (function () {
    function e(t, n, o, s) {
      ((this._provider = t),
        (this.name = n),
        (this.version = o),
        (this.options = s));
    }
    return (
      (e.prototype.emit = function (t) {
        this._getLogger().emit(t);
      }),
      (e.prototype._getLogger = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateLogger(
          this.name,
          this.version,
          this.options,
        );
        return t ? ((this._delegate = t), this._delegate) : LA;
      }),
      e
    );
  })(),
  R_ = (function () {
    function e() {}
    return (
      (e.prototype.getLogger = function (t, n, o) {
        var s;
        return (s = this.getDelegateLogger(t, n, o)) !== null && s !== void 0
          ? s
          : new DA(this, t, n, o);
      }),
      (e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : qv;
      }),
      (e.prototype.setDelegate = function (t) {
        this._delegate = t;
      }),
      (e.prototype.getDelegateLogger = function (t, n, o) {
        var s;
        return (s = this._delegate) === null || s === void 0
          ? void 0
          : s.getLogger(t, n, o);
      }),
      e
    );
  })(),
  FA =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
        ? self
        : typeof window == "object"
          ? window
          : typeof global == "object"
            ? global
            : {},
  xu = Symbol.for("io.opentelemetry.js.api.logs"),
  Ps = FA;
function UA(e, t, n) {
  return function (o) {
    return o === e ? t : n;
  };
}
var I_ = 1,
  jA = (function () {
    function e() {
      this._proxyLoggerProvider = new R_();
    }
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalLoggerProvider = function (t) {
        return Ps[xu]
          ? this.getLoggerProvider()
          : ((Ps[xu] = UA(I_, t, qv)),
            this._proxyLoggerProvider.setDelegate(t),
            t);
      }),
      (e.prototype.getLoggerProvider = function () {
        var t, n;
        return (n =
          (t = Ps[xu]) === null || t === void 0 ? void 0 : t.call(Ps, I_)) !==
          null && n !== void 0
          ? n
          : this._proxyLoggerProvider;
      }),
      (e.prototype.getLogger = function (t, n, o) {
        return this.getLoggerProvider().getLogger(t, n, o);
      }),
      (e.prototype.disable = function () {
        (delete Ps[xu], (this._proxyLoggerProvider = new R_()));
      }),
      e
    );
  })(),
  BA = jA.getInstance(),
  Gf,
  C_;
function HA() {
  if (C_) return Gf;
  C_ = 1;
  function e(h) {
    return typeof h == "function";
  }
  var t = console.error.bind(console);
  function n(h, m, _) {
    var y = !!h[m] && h.propertyIsEnumerable(m);
    Object.defineProperty(h, m, {
      configurable: !0,
      enumerable: y,
      writable: !0,
      value: _,
    });
  }
  function o(h) {
    h &&
      h.logger &&
      (e(h.logger)
        ? (t = h.logger)
        : t("new logger isn't a function, not replacing"));
  }
  function s(h, m, _) {
    if (!h || !h[m]) {
      t("no original function " + m + " to wrap");
      return;
    }
    if (!_) {
      (t("no wrapper function"), t(new Error().stack));
      return;
    }
    if (!e(h[m]) || !e(_)) {
      t("original object and wrapper must be functions");
      return;
    }
    var y = h[m],
      E = _(y, m);
    return (
      n(E, "__original", y),
      n(E, "__unwrap", function () {
        h[m] === E && n(h, m, y);
      }),
      n(E, "__wrapped", !0),
      n(h, m, E),
      E
    );
  }
  function u(h, m, _) {
    if (h) Array.isArray(h) || (h = [h]);
    else {
      (t("must provide one or more modules to patch"), t(new Error().stack));
      return;
    }
    if (!(m && Array.isArray(m))) {
      t("must provide one or more functions to wrap on modules");
      return;
    }
    h.forEach(function (y) {
      m.forEach(function (E) {
        s(y, E, _);
      });
    });
  }
  function c(h, m) {
    if (!h || !h[m]) {
      (t("no function to unwrap."), t(new Error().stack));
      return;
    }
    if (!h[m].__unwrap)
      t("no original to unwrap to -- has " + m + " already been unwrapped?");
    else return h[m].__unwrap();
  }
  function d(h, m) {
    if (h) Array.isArray(h) || (h = [h]);
    else {
      (t("must provide one or more modules to patch"), t(new Error().stack));
      return;
    }
    if (!(m && Array.isArray(m))) {
      t("must provide one or more functions to unwrap on modules");
      return;
    }
    h.forEach(function (_) {
      m.forEach(function (y) {
        c(_, y);
      });
    });
  }
  return (
    (o.wrap = s),
    (o.massWrap = u),
    (o.unwrap = c),
    (o.massUnwrap = d),
    (Gf = o),
    Gf
  );
}
var Nu = HA(),
  Od = function () {
    return (
      (Od =
        Object.assign ||
        function (e) {
          for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
      Od.apply(this, arguments)
    );
  },
  zA = (function () {
    function e(t, n, o) {
      ((this.instrumentationName = t),
        (this.instrumentationVersion = n),
        (this._config = {}),
        (this._wrap = Nu.wrap),
        (this._unwrap = Nu.unwrap),
        (this._massWrap = Nu.massWrap),
        (this._massUnwrap = Nu.massUnwrap),
        this.setConfig(o),
        (this._diag = et.createComponentLogger({ namespace: t })),
        (this._tracer = En.getTracer(t, n)),
        (this._meter = vv.getMeter(t, n)),
        (this._logger = BA.getLogger(t, n)),
        this._updateMetricInstruments());
    }
    return (
      Object.defineProperty(e.prototype, "meter", {
        get: function () {
          return this._meter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.setMeterProvider = function (t) {
        ((this._meter = t.getMeter(
          this.instrumentationName,
          this.instrumentationVersion,
        )),
          this._updateMetricInstruments());
      }),
      Object.defineProperty(e.prototype, "logger", {
        get: function () {
          return this._logger;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.setLoggerProvider = function (t) {
        this._logger = t.getLogger(
          this.instrumentationName,
          this.instrumentationVersion,
        );
      }),
      (e.prototype.getModuleDefinitions = function () {
        var t,
          n = (t = this.init()) !== null && t !== void 0 ? t : [];
        return Array.isArray(n) ? n : [n];
      }),
      (e.prototype._updateMetricInstruments = function () {}),
      (e.prototype.getConfig = function () {
        return this._config;
      }),
      (e.prototype.setConfig = function (t) {
        this._config = Od({ enabled: !0 }, t);
      }),
      (e.prototype.setTracerProvider = function (t) {
        this._tracer = t.getTracer(
          this.instrumentationName,
          this.instrumentationVersion,
        );
      }),
      Object.defineProperty(e.prototype, "tracer", {
        get: function () {
          return this._tracer;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._runSpanCustomizationHook = function (t, n, o, s) {
        if (t)
          try {
            t(o, s);
          } catch (u) {
            this._diag.error(
              "Error running span customization hook due to exception in handler",
              { triggerName: n },
              u,
            );
          }
      }),
      e
    );
  })(),
  $A = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  WA = (function (e) {
    $A(t, e);
    function t(n, o, s) {
      var u = e.call(this, n, o, s) || this;
      return (u._config.enabled && u.enable(), u);
    }
    return t;
  })(zA);
function GA(e, t, n) {
  var o, s;
  try {
    s = e();
  } catch (u) {
    o = u;
  } finally {
    return (t(o, s), s);
  }
}
function VA(e) {
  return (
    typeof e == "function" &&
    typeof e.__original == "function" &&
    typeof e.__unwrap == "function" &&
    e.__wrapped === !0
  );
}
var sl;
(function (e) {
  ((e.COMPONENT = "component"),
    (e.HTTP_ERROR_NAME = "http.error_name"),
    (e.HTTP_STATUS_TEXT = "http.status_text"));
})(sl || (sl = {}));
var XA = "http.method",
  qA = "http.url",
  YA = "http.host",
  KA = "http.scheme",
  ZA = "http.status_code",
  QA = "http.user_agent",
  JA = "http.request_content_length_uncompressed",
  eP = XA,
  tP = qA,
  nP = YA,
  rP = KA,
  iP = ZA,
  oP = QA,
  sP = JA,
  aP = function (e, t, n, o) {
    function s(u) {
      return u instanceof n
        ? u
        : new n(function (c) {
            c(u);
          });
    }
    return new (n || (n = Promise))(function (u, c) {
      function d(_) {
        try {
          m(o.next(_));
        } catch (y) {
          c(y);
        }
      }
      function h(_) {
        try {
          m(o.throw(_));
        } catch (y) {
          c(y);
        }
      }
      function m(_) {
        _.done ? u(_.value) : s(_.value).then(d, h);
      }
      m((o = o.apply(e, t || [])).next());
    });
  },
  uP = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: [],
      },
      o,
      s,
      u,
      c;
    return (
      (c = { next: d(0), throw: d(1), return: d(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function d(m) {
      return function (_) {
        return h([m, _]);
      };
    }
    function h(m) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((o = 1),
            s &&
              (u =
                m[0] & 2
                  ? s.return
                  : m[0]
                    ? s.throw || ((u = s.return) && u.call(s), 0)
                    : s.next) &&
              !(u = u.call(s, m[1])).done)
          )
            return u;
          switch (((s = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return (n.label++, { value: m[1], done: !1 });
            case 5:
              (n.label++, (s = m[1]), (m = [0]));
              continue;
            case 7:
              ((m = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((u = n.trys),
                !(u = u.length > 0 && u[u.length - 1]) &&
                  (m[0] === 6 || m[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                n.label = m[1];
                break;
              }
              if (m[0] === 6 && n.label < u[1]) {
                ((n.label = u[1]), (u = m));
                break;
              }
              if (u && n.label < u[2]) {
                ((n.label = u[2]), n.ops.push(m));
                break;
              }
              (u[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          m = t.call(e, n);
        } catch (_) {
          ((m = [6, _]), (s = 0));
        } finally {
          o = u = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  },
  lP = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      o = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0),
            { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  },
  cP = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  Yv = et.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-fetch/utils",
  });
function fP() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  if (e[0] instanceof URL || typeof e[0] == "string") {
    var n = e[1];
    if (!(n != null && n.body)) return Promise.resolve();
    if (n.body instanceof ReadableStream) {
      var o = dP(n.body),
        s = o.body,
        u = o.length;
      return ((n.body = s), u);
    } else return Promise.resolve(pP(n.body));
  } else {
    var c = e[0];
    return c != null && c.body
      ? c
          .clone()
          .text()
          .then(function (d) {
            return bd(d);
          })
      : Promise.resolve();
  }
}
function dP(e) {
  if (!e.pipeThrough)
    return (
      Yv.warn("Platform has ReadableStream but not pipeThrough!"),
      { body: e, length: Promise.resolve(void 0) }
    );
  var t = 0,
    n,
    o = new Promise(function (u) {
      n = u;
    }),
    s = new TransformStream({
      start: function () {},
      transform: function (u, c) {
        return aP(this, void 0, void 0, function () {
          var d;
          return uP(this, function (h) {
            switch (h.label) {
              case 0:
                return [4, u];
              case 1:
                return ((d = h.sent()), (t += d.byteLength), c.enqueue(u), [2]);
            }
          });
        });
      },
      flush: function () {
        n(t);
      },
    });
  return { body: e.pipeThrough(s), length: o };
}
function pP(e) {
  if (typeof Document < "u" && e instanceof Document)
    return new XMLSerializer().serializeToString(document).length;
  if (e instanceof Blob) return e.size;
  if (e.byteLength !== void 0) return e.byteLength;
  if (e instanceof FormData) return mP(e);
  if (e instanceof URLSearchParams) return bd(e.toString());
  if (typeof e == "string") return bd(e);
  Yv.warn("unknown body type");
}
var hP = new TextEncoder();
function bd(e) {
  return hP.encode(e).byteLength;
}
function mP(e) {
  var t,
    n,
    o = 0;
  try {
    for (var s = lP(e.entries()), u = s.next(); !u.done; u = s.next()) {
      var c = cP(u.value, 2),
        d = c[0],
        h = c[1];
      ((o += d.length), h instanceof Blob ? (o += h.size) : (o += h.length));
    }
  } catch (m) {
    t = { error: m };
  } finally {
    try {
      u && !u.done && (n = s.return) && n.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
var O_ = "0.57.2",
  gP = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (o, s) {
              o.__proto__ = s;
            }) ||
          function (o, s) {
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function o() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    };
  })(),
  _P = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var o = n.call(e),
      s,
      u = [],
      c;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
        u.push(s.value);
    } catch (d) {
      c = { error: d };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (c) throw c.error;
      }
    }
    return u;
  },
  yP = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, s = t.length, u; o < s; o++)
        (u || !(o in t)) &&
          (u || (u = Array.prototype.slice.call(t, 0, o)), (u[o] = t[o]));
    return e.concat(u || Array.prototype.slice.call(t));
  },
  Vf,
  vP = 300,
  b_ =
    typeof process == "object" &&
    ((Vf = process.release) === null || Vf === void 0 ? void 0 : Vf.name) ===
      "node",
  EP = (function (e) {
    gP(t, e);
    function t(n) {
      n === void 0 && (n = {});
      var o =
        e.call(this, "@opentelemetry/instrumentation-fetch", O_, n) || this;
      return (
        (o.component = "fetch"),
        (o.version = O_),
        (o.moduleName = o.component),
        (o._usedResources = new WeakSet()),
        (o._tasksCount = 0),
        o
      );
    }
    return (
      (t.prototype.init = function () {}),
      (t.prototype._addChildSpan = function (n, o) {
        var s = this.tracer.startSpan(
          "CORS Preflight",
          { startTime: o[Mt.FETCH_START] },
          En.setSpan(Nn.active(), n),
        );
        (y_(s, o, this.getConfig().ignoreNetworkEvents),
          s.end(o[Mt.RESPONSE_END]));
      }),
      (t.prototype._addFinalSpanAttributes = function (n, o) {
        var s = ol(o.url);
        (n.setAttribute(iP, o.status),
          o.statusText != null &&
            n.setAttribute(sl.HTTP_STATUS_TEXT, o.statusText),
          n.setAttribute(nP, s.host),
          n.setAttribute(rP, s.protocol.replace(":", "")),
          typeof navigator < "u" && n.setAttribute(oP, navigator.userAgent));
      }),
      (t.prototype._addHeaders = function (n, o) {
        if (!kN(o, this.getConfig().propagateTraceHeaderCorsUrls)) {
          var s = {};
          (Br.inject(Nn.active(), s),
            Object.keys(s).length > 0 &&
              this._diag.debug("headers inject skipped due to CORS policy"));
          return;
        }
        if (n instanceof Request)
          Br.inject(Nn.active(), n.headers, {
            set: function (u, c, d) {
              return u.set(c, typeof d == "string" ? d : String(d));
            },
          });
        else if (n.headers instanceof Headers)
          Br.inject(Nn.active(), n.headers, {
            set: function (u, c, d) {
              return u.set(c, typeof d == "string" ? d : String(d));
            },
          });
        else if (n.headers instanceof Map)
          Br.inject(Nn.active(), n.headers, {
            set: function (u, c, d) {
              return u.set(c, typeof d == "string" ? d : String(d));
            },
          });
        else {
          var s = {};
          (Br.inject(Nn.active(), s),
            (n.headers = Object.assign({}, s, n.headers || {})));
        }
      }),
      (t.prototype._clearResources = function () {
        this._tasksCount === 0 &&
          this.getConfig().clearTimingResources &&
          (performance.clearResourceTimings(),
          (this._usedResources = new WeakSet()));
      }),
      (t.prototype._createSpan = function (n, o) {
        var s;
        if ((o === void 0 && (o = {}), bx(n, this.getConfig().ignoreUrls))) {
          this._diag.debug("ignoring span as url matches ignored url");
          return;
        }
        var u = (o.method || "GET").toUpperCase(),
          c = "HTTP " + u;
        return this.tracer.startSpan(c, {
          kind: el.CLIENT,
          attributes:
            ((s = {}),
            (s[sl.COMPONENT] = this.moduleName),
            (s[eP] = u),
            (s[tP] = n),
            s),
        });
      }),
      (t.prototype._findResourceAndAddNetworkEvents = function (n, o, s) {
        var u = o.entries;
        if (!u.length) {
          if (!performance.getEntriesByType) return;
          u = performance.getEntriesByType("resource");
        }
        var c = SN(o.spanUrl, o.startTime, s, u, this._usedResources, "fetch");
        if (c.mainRequest) {
          var d = c.mainRequest;
          this._markResourceAsUsed(d);
          var h = c.corsPreFlightRequest;
          (h && (this._addChildSpan(n, h), this._markResourceAsUsed(h)),
            y_(n, d, this.getConfig().ignoreNetworkEvents));
        }
      }),
      (t.prototype._markResourceAsUsed = function (n) {
        this._usedResources.add(n);
      }),
      (t.prototype._endSpan = function (n, o, s) {
        var u = this,
          c = Hr(Date.now()),
          d = nl();
        (this._addFinalSpanAttributes(n, s),
          setTimeout(function () {
            var h;
            ((h = o.observer) === null || h === void 0 || h.disconnect(),
              u._findResourceAndAddNetworkEvents(n, o, d),
              u._tasksCount--,
              u._clearResources(),
              n.end(c));
          }, vP));
      }),
      (t.prototype._patchConstructor = function () {
        var n = this;
        return function (o) {
          var s = n;
          return function () {
            for (var c = [], d = 0; d < arguments.length; d++)
              c[d] = arguments[d];
            var h = this,
              m = ol(c[0] instanceof Request ? c[0].url : String(c[0])).href,
              _ = c[0] instanceof Request ? c[0] : c[1] || {},
              y = s._createSpan(m, _);
            if (!y) return o.apply(this, c);
            var E = s._prepareSpanData(m);
            s.getConfig().measureRequestSize &&
              fP
                .apply(void 0, yP([], _P(c), !1))
                .then(function (z) {
                  z && y.setAttribute(sP, z);
                })
                .catch(function (z) {
                  s._diag.warn("getFetchBodyLength", z);
                });
            function N(z, H) {
              (s._applyAttributesAfterFetch(z, _, H),
                s._endSpan(z, E, {
                  status: H.status || 0,
                  statusText: H.message,
                  url: m,
                }));
            }
            function P(z, H) {
              (s._applyAttributesAfterFetch(z, _, H),
                H.status >= 200 && H.status < 400
                  ? s._endSpan(z, E, H)
                  : s._endSpan(z, E, {
                      status: H.status,
                      statusText: H.statusText,
                      url: m,
                    }));
            }
            function j(z, H, ie) {
              try {
                var U = ie.clone(),
                  C = ie.clone(),
                  q = U.body;
                if (q) {
                  var ae = q.getReader(),
                    ye = function () {
                      ae.read().then(
                        function (ne) {
                          var ve = ne.done;
                          ve ? P(z, C) : ye();
                        },
                        function (ne) {
                          N(z, ne);
                        },
                      );
                    };
                  ye();
                } else P(z, ie);
              } finally {
                H(ie);
              }
            }
            function W(z, H, ie) {
              try {
                N(z, ie);
              } finally {
                H(ie);
              }
            }
            return new Promise(function (z, H) {
              return Nn.with(En.setSpan(Nn.active(), y), function () {
                return (
                  s._addHeaders(_, m),
                  s._tasksCount++,
                  o
                    .apply(h, _ instanceof Request ? [_] : [m, _])
                    .then(j.bind(h, y, z), W.bind(h, y, H))
                );
              });
            });
          };
        };
      }),
      (t.prototype._applyAttributesAfterFetch = function (n, o, s) {
        var u = this,
          c = this.getConfig().applyCustomAttributesOnSpan;
        c &&
          GA(
            function () {
              return c(n, o, s);
            },
            function (d) {
              d && u._diag.error("applyCustomAttributesOnSpan", d);
            },
          );
      }),
      (t.prototype._prepareSpanData = function (n) {
        var o = nl(),
          s = [];
        if (typeof PerformanceObserver != "function")
          return { entries: s, startTime: o, spanUrl: n };
        var u = new PerformanceObserver(function (c) {
          var d = c.getEntries();
          d.forEach(function (h) {
            h.initiatorType === "fetch" && h.name === n && s.push(h);
          });
        });
        return (
          u.observe({ entryTypes: ["resource"] }),
          { entries: s, observer: u, startTime: o, spanUrl: n }
        );
      }),
      (t.prototype.enable = function () {
        if (b_) {
          this._diag.warn(
            "this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()",
          );
          return;
        }
        (VA(fetch) &&
          (this._unwrap(zs, "fetch"),
          this._diag.debug("removing previous patch for constructor")),
          this._wrap(zs, "fetch", this._patchConstructor()));
      }),
      (t.prototype.disable = function () {
        b_ ||
          (this._unwrap(zs, "fetch"), (this._usedResources = new WeakSet()));
      }),
      t
    );
  })(WA),
  Kv = (function () {
    function e() {}
    return ((e.prototype.emit = function (t) {}), e);
  })(),
  SP = new Kv(),
  TP = (function () {
    function e() {}
    return (
      (e.prototype.getLogger = function (t, n, o) {
        return new Kv();
      }),
      e
    );
  })(),
  Zv = new TP(),
  wP = (function () {
    function e(t, n, o, s) {
      ((this._provider = t),
        (this.name = n),
        (this.version = o),
        (this.options = s));
    }
    return (
      (e.prototype.emit = function (t) {
        this._getLogger().emit(t);
      }),
      (e.prototype._getLogger = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateLogger(
          this.name,
          this.version,
          this.options,
        );
        return t ? ((this._delegate = t), this._delegate) : SP;
      }),
      e
    );
  })(),
  x_ = (function () {
    function e() {}
    return (
      (e.prototype.getLogger = function (t, n, o) {
        var s;
        return (s = this.getDelegateLogger(t, n, o)) !== null && s !== void 0
          ? s
          : new wP(this, t, n, o);
      }),
      (e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : Zv;
      }),
      (e.prototype.setDelegate = function (t) {
        this._delegate = t;
      }),
      (e.prototype.getDelegateLogger = function (t, n, o) {
        var s;
        return (s = this._delegate) === null || s === void 0
          ? void 0
          : s.getLogger(t, n, o);
      }),
      e
    );
  })(),
  kP =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
        ? self
        : typeof window == "object"
          ? window
          : typeof global == "object"
            ? global
            : {},
  Au = Symbol.for("io.opentelemetry.js.api.logs"),
  Ls = kP;
function RP(e, t, n) {
  return function (o) {
    return o === e ? t : n;
  };
}
var N_ = 1,
  IP = (function () {
    function e() {
      this._proxyLoggerProvider = new x_();
    }
    return (
      (e.getInstance = function () {
        return (this._instance || (this._instance = new e()), this._instance);
      }),
      (e.prototype.setGlobalLoggerProvider = function (t) {
        return Ls[Au]
          ? this.getLoggerProvider()
          : ((Ls[Au] = RP(N_, t, Zv)),
            this._proxyLoggerProvider.setDelegate(t),
            t);
      }),
      (e.prototype.getLoggerProvider = function () {
        var t, n;
        return (n =
          (t = Ls[Au]) === null || t === void 0 ? void 0 : t.call(Ls, N_)) !==
          null && n !== void 0
          ? n
          : this._proxyLoggerProvider;
      }),
      (e.prototype.getLogger = function (t, n, o) {
        return this.getLoggerProvider().getLogger(t, n, o);
      }),
      (e.prototype.disable = function () {
        (delete Ls[Au], (this._proxyLoggerProvider = new x_()));
      }),
      e
    );
  })(),
  CP = IP.getInstance();
function OP(e, t, n, o) {
  for (var s = 0, u = e.length; s < u; s++) {
    var c = e[s];
    (t && c.setTracerProvider(t),
      n && c.setMeterProvider(n),
      o && c.setLoggerProvider && c.setLoggerProvider(o),
      c.getConfig().enabled || c.enable());
  }
}
function bP(e) {
  e.forEach(function (t) {
    return t.disable();
  });
}
function xP(e) {
  var t,
    n,
    o = e.tracerProvider || En.getTracerProvider(),
    s = e.meterProvider || vv.getMeterProvider(),
    u = e.loggerProvider || CP.getLoggerProvider(),
    c =
      (n =
        (t = e.instrumentations) === null || t === void 0
          ? void 0
          : t.flat()) !== null && n !== void 0
        ? n
        : [];
  return (
    OP(c, o, s, u),
    function () {
      bP(c);
    }
  );
}
const NP = "service.name",
  AP = void 0;
try {
  AP ||
    console.warn("[Delineate] Sentry DSN not found - error tracking disabled");
} catch (e) {
  console.error("[Delineate] Sentry initialization failed:", e);
}
const A_ = "http://localhost:4318/v1/traces";
try {
  const e = new Id({ [NP]: "delineate-frontend" }),
    t = new hN({ resource: e }),
    n = new xA({ url: A_ });
  (t.addSpanProcessor(new Uv(n)),
    t.register({ contextManager: new AA() }),
    xP({
      instrumentations: [
        new EP({
          propagateTraceHeaderCorsUrls: [
            /http:\/\/localhost:3000.*/,
            /http:\/\/delineate-app:3000.*/,
          ],
        }),
      ],
    }),
    console.log("[Delineate] OpenTelemetry initialized with endpoint:", A_));
} catch (e) {
  console.error("[Delineate] OpenTelemetry initialization failed:", e);
}
console.log("[Delineate] Starting React app...");
function PP({ error: e, resetError: t }) {
  return X.jsx("div", {
    className: "min-h-screen bg-slate-900 flex items-center justify-center p-8",
    children: X.jsxs("div", {
      className:
        "bg-slate-800 p-8 rounded-lg shadow-xl max-w-lg w-full text-center border border-slate-700",
      children: [
        X.jsx("div", {
          className: "text-red-500 text-6xl mb-4",
          children: "⚠️",
        }),
        X.jsx("h1", {
          className: "text-2xl font-bold text-white mb-2",
          children: "Something went wrong",
        }),
        X.jsx("p", {
          className:
            "text-slate-400 mb-6 font-mono text-sm bg-slate-900 p-3 rounded text-left overflow-auto max-h-32",
          children: e.message,
        }),
        X.jsxs("div", {
          className: "flex justify-center gap-4",
          children: [
            X.jsx("button", {
              onClick: t,
              className:
                "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium",
              children: "Try again",
            }),
            X.jsx("button", {
              onClick: () => cd({ eventId: J_() }),
              className:
                "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium",
              children: "Report feedback",
            }),
          ],
        }),
      ],
    }),
  });
}
const P_ = document.getElementById("root");
P_
  ? (BS.createRoot(P_).render(
      X.jsx(PS.StrictMode, {
        children: X.jsx(op, {
          fallback: ({ error: e, resetError: t }) =>
            X.jsx(PP, { error: e, resetError: t }),
          onError: (e) => {
            console.error("[Delineate] Caught error in ErrorBoundary:", e);
          },
          children: X.jsx(tb, {}),
        }),
      }),
    ),
    console.log("[Delineate] React app mounted"))
  : console.error("[Delineate] Root element not found!");
//# sourceMappingURL=index-D5s_RfTt.js.map
