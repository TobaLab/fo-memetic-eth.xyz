var Pu = (e) => {
  throw TypeError(e);
};
var Ss = (e, t, n) => t.has(e) || Pu("Cannot " + n);
var T = (e, t, n) => (
    Ss(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  K = (e, t, n) =>
    t.has(e)
      ? Pu("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  F = (e, t, n, r) => (
    Ss(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ge = (e, t, n) => (Ss(e, t, "access private method"), n);
var jo = (e, t, n, r) => ({
  set _(o) {
    F(e, t, o, n);
  },
  get _() {
    return T(e, t, r);
  },
});
function Cm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sd = { exports: {} },
  Ki = {},
  Ed = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var To = Symbol.for("react.element"),
  km = Symbol.for("react.portal"),
  Pm = Symbol.for("react.fragment"),
  Tm = Symbol.for("react.strict_mode"),
  Nm = Symbol.for("react.profiler"),
  Rm = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  bm = Symbol.for("react.forward_ref"),
  Om = Symbol.for("react.suspense"),
  Am = Symbol.for("react.memo"),
  Mm = Symbol.for("react.lazy"),
  Tu = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tu && e[Tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kd = Object.assign,
  Pd = {};
function kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pd),
    (this.updater = n || Cd);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Td() {}
Td.prototype = kr.prototype;
function ia(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pd),
    (this.updater = n || Cd);
}
var sa = (ia.prototype = new Td());
sa.constructor = ia;
kd(sa, kr.prototype);
sa.isPureReactComponent = !0;
var Nu = Array.isArray,
  Nd = Object.prototype.hasOwnProperty,
  la = { current: null },
  Rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function _d(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nd.call(t, r) && !Rd.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: To,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: la.current,
  };
}
function Lm(e, t) {
  return {
    $$typeof: To,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === To;
}
function Dm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ru = /\/+/g;
function Es(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dm("" + e.key)
    : t.toString(36);
}
function ni(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case To:
          case km:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Es(s, 0) : r),
      Nu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ru, "$&/") + "/"),
          ni(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (aa(o) &&
            (o = Lm(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ru, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Nu(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Es(i, l);
      s += ni(i, t, n, a, o);
    }
  else if (((a = jm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Es(i, l++)), (s += ni(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Lo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ni(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Im(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  ri = { transition: null },
  Fm = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ri,
    ReactCurrentOwner: la,
  };
function bd() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: Lo,
  forEach: function (e, t, n) {
    Lo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Lo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!aa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = kr;
B.Fragment = Pm;
B.Profiler = Nm;
B.PureComponent = ia;
B.StrictMode = Tm;
B.Suspense = Om;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
B.act = bd;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kd({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = la.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Nd.call(t, a) &&
        !Rd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: To, type: e.type, key: o, ref: i, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: _m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rm, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = _d;
B.createFactory = function (e) {
  var t = _d.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: bm, render: e };
};
B.isValidElement = aa;
B.lazy = function (e) {
  return { $$typeof: Mm, _payload: { _status: -1, _result: e }, _init: Im };
};
B.memo = function (e, t) {
  return { $$typeof: Am, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ri.transition;
  ri.transition = {};
  try {
    e();
  } finally {
    ri.transition = t;
  }
};
B.unstable_act = bd;
B.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Te.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
B.useId = function () {
  return Te.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Te.current.useRef(e);
};
B.useState = function (e) {
  return Te.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Te.current.useTransition();
};
B.version = "18.3.1";
Ed.exports = B;
var v = Ed.exports;
const Ut = xd(v),
  zm = Cm({ __proto__: null, default: Ut }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m = v,
  Um = Symbol.for("react.element"),
  Bm = Symbol.for("react.fragment"),
  Vm = Object.prototype.hasOwnProperty,
  Wm = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Od(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Vm.call(t, r) && !Hm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Um,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Wm.current,
  };
}
Ki.Fragment = Bm;
Ki.jsx = Od;
Ki.jsxs = Od;
Sd.exports = Ki;
var x = Sd.exports,
  Ad = { exports: {} },
  Be = {},
  Md = { exports: {} },
  jd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, b) {
    var D = N.length;
    N.push(b);
    e: for (; 0 < D; ) {
      var $ = (D - 1) >>> 1,
        J = N[$];
      if (0 < o(J, b)) (N[$] = b), (N[D] = J), (D = $);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var b = N[0],
      D = N.pop();
    if (D !== b) {
      N[0] = D;
      e: for (var $ = 0, J = N.length, Ze = J >>> 1; $ < Ze; ) {
        var We = 2 * ($ + 1) - 1,
          br = N[We],
          Ct = We + 1,
          yn = N[Ct];
        if (0 > o(br, D))
          Ct < J && 0 > o(yn, br)
            ? ((N[$] = yn), (N[Ct] = D), ($ = Ct))
            : ((N[$] = br), (N[We] = D), ($ = We));
        else if (Ct < J && 0 > o(yn, D)) (N[$] = yn), (N[Ct] = D), ($ = Ct);
        else break e;
      }
    }
    return b;
  }
  function o(N, b) {
    var D = N.sortIndex - b.sortIndex;
    return D !== 0 ? D : N.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    y = !1,
    w = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= N)
        r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function E(N) {
    if (((g = !1), m(N), !w))
      if (n(a) !== null) (w = !0), U(C);
      else {
        var b = n(u);
        b !== null && H(E, b.startTime - N);
      }
  }
  function C(N, b) {
    (w = !1), g && ((g = !1), p(R), (R = -1)), (y = !0);
    var D = h;
    try {
      for (
        m(b), f = n(a);
        f !== null && (!(f.expirationTime > b) || (N && !z()));

      ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var J = $(f.expirationTime <= b);
          (b = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(a) && r(a),
            m(b);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Ze = !0;
      else {
        var We = n(u);
        We !== null && H(E, We.startTime - b), (Ze = !1);
      }
      return Ze;
    } finally {
      (f = null), (h = D), (y = !1);
    }
  }
  var k = !1,
    P = null,
    R = -1,
    j = 5,
    A = -1;
  function z() {
    return !(e.unstable_now() - A < j);
  }
  function L() {
    if (P !== null) {
      var N = e.unstable_now();
      A = N;
      var b = !0;
      try {
        b = P(!0, N);
      } finally {
        b ? V() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var V;
  if (typeof d == "function")
    V = function () {
      d(L);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      Q = M.port2;
    (M.port1.onmessage = L),
      (V = function () {
        Q.postMessage(null);
      });
  } else
    V = function () {
      S(L, 0);
    };
  function U(N) {
    (P = N), k || ((k = !0), V());
  }
  function H(N, b) {
    R = S(function () {
      N(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = h;
      }
      var D = h;
      h = b;
      try {
        return N();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, b) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = h;
      h = N;
      try {
        return b();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, b, D) {
      var $ = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? $ + D : $))
          : (D = $),
        N)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = D + J),
        (N = {
          id: c++,
          callback: b,
          priorityLevel: N,
          startTime: D,
          expirationTime: J,
          sortIndex: -1,
        }),
        D > $
          ? ((N.sortIndex = D),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (g ? (p(R), (R = -1)) : (g = !0), H(E, D - $)))
          : ((N.sortIndex = J), t(a, N), w || y || ((w = !0), U(C))),
        N
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (N) {
      var b = h;
      return function () {
        var D = h;
        h = b;
        try {
          return N.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(jd);
Md.exports = jd;
var Qm = Md.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km = v,
  Ue = Qm;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ld = new Set(),
  no = {};
function Dn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (no[e] = t, e = 0; e < t.length; e++) Ld.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rl = Object.prototype.hasOwnProperty,
  Gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _u = {},
  bu = {};
function Ym(e) {
  return rl.call(bu, e)
    ? !0
    : rl.call(_u, e)
    ? !1
    : Gm.test(e)
    ? (bu[e] = !0)
    : ((_u[e] = !0), !1);
}
function Xm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qm(e, t, n, r) {
  if (t === null || typeof t > "u" || Xm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ua = /[\-:]([a-z])/g;
function ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ua, ca);
    me[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ua, ca);
    me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ua, ca);
  me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function da(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qm(t, n, o, r) && (n = null),
    r || o === null
      ? Ym(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Do = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  fa = Symbol.for("react.strict_mode"),
  ol = Symbol.for("react.profiler"),
  Dd = Symbol.for("react.provider"),
  Id = Symbol.for("react.context"),
  pa = Symbol.for("react.forward_ref"),
  il = Symbol.for("react.suspense"),
  sl = Symbol.for("react.suspense_list"),
  ha = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  Fd = Symbol.for("react.offscreen"),
  Ou = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Cs;
function Br(e) {
  if (Cs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cs = (t && t[1]) || "";
    }
  return (
    `
` +
    Cs +
    e
  );
}
var ks = !1;
function Ps(e, t) {
  if (!e || ks) return "";
  ks = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function Zm(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ps(e.type, !1)), e;
    case 11:
      return (e = Ps(e.type.render, !1)), e;
    case 1:
      return (e = Ps(e.type, !0)), e;
    default:
      return "";
  }
}
function ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case zn:
      return "Portal";
    case ol:
      return "Profiler";
    case fa:
      return "StrictMode";
    case il:
      return "Suspense";
    case sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Id:
        return (e.displayName || "Context") + ".Consumer";
      case Dd:
        return (e._context.displayName || "Context") + ".Provider";
      case pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ha:
        return (
          (t = e.displayName || null), t !== null ? t : ll(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return ll(e(t));
        } catch {}
    }
  return null;
}
function Jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ll(t);
    case 8:
      return t === fa ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function eg(e) {
  var t = zd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Io(e) {
  e._valueTracker || (e._valueTracker = eg(e));
}
function $d(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function al(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ud(e, t) {
  (t = t.checked), t != null && da(e, "checked", t, !1);
}
function ul(e, t) {
  Ud(e, t);
  var n = un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? cl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && cl(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function cl(e, t, n) {
  (t !== "number" || yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ju(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Bd(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fo,
  Wd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement("div"),
          Fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ro(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
  tg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
  tg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function Hd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ng = re(
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
  }
);
function pl(e, t) {
  if (t) {
    if (ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function hl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ml = null;
function ma(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gl = null,
  Zn = null,
  Jn = null;
function Du(e) {
  if ((e = _o(e))) {
    if (typeof gl != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Zi(t)), gl(e.stateNode, e.type, t));
  }
}
function Kd(e) {
  Zn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Zn = e);
}
function Gd() {
  if (Zn) {
    var e = Zn,
      t = Jn;
    if (((Jn = Zn = null), Du(e), t)) for (e = 0; e < t.length; e++) Du(t[e]);
  }
}
function Yd(e, t) {
  return e(t);
}
function Xd() {}
var Ts = !1;
function qd(e, t, n) {
  if (Ts) return e(t, n);
  Ts = !0;
  try {
    return Yd(e, t, n);
  } finally {
    (Ts = !1), (Zn !== null || Jn !== null) && (Xd(), Gd());
  }
}
function oo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var yl = !1;
if (Ot)
  try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", {
      get: function () {
        yl = !0;
      },
    }),
      window.addEventListener("test", Mr, Mr),
      window.removeEventListener("test", Mr, Mr);
  } catch {
    yl = !1;
  }
function rg(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Kr = !1,
  vi = null,
  wi = !1,
  vl = null,
  og = {
    onError: function (e) {
      (Kr = !0), (vi = e);
    },
  };
function ig(e, t, n, r, o, i, s, l, a) {
  (Kr = !1), (vi = null), rg.apply(og, arguments);
}
function sg(e, t, n, r, o, i, s, l, a) {
  if ((ig.apply(this, arguments), Kr)) {
    if (Kr) {
      var u = vi;
      (Kr = !1), (vi = null);
    } else throw Error(_(198));
    wi || ((wi = !0), (vl = u));
  }
}
function In(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Iu(e) {
  if (In(e) !== e) throw Error(_(188));
}
function lg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Iu(o), e;
        if (i === r) return Iu(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Jd(e) {
  return (e = lg(e)), e !== null ? ef(e) : null;
}
function ef(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ef(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tf = Ue.unstable_scheduleCallback,
  Fu = Ue.unstable_cancelCallback,
  ag = Ue.unstable_shouldYield,
  ug = Ue.unstable_requestPaint,
  se = Ue.unstable_now,
  cg = Ue.unstable_getCurrentPriorityLevel,
  ga = Ue.unstable_ImmediatePriority,
  nf = Ue.unstable_UserBlockingPriority,
  xi = Ue.unstable_NormalPriority,
  dg = Ue.unstable_LowPriority,
  rf = Ue.unstable_IdlePriority,
  Gi = null,
  yt = null;
function fg(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : mg,
  pg = Math.log,
  hg = Math.LN2;
function mg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pg(e) / hg) | 0)) | 0;
}
var zo = 64,
  $o = 4194304;
function Wr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Si(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Wr(l)) : ((i &= s), i !== 0 && (r = Wr(i)));
  } else (s = n & ~o), s !== 0 ? (r = Wr(s)) : i !== 0 && (r = Wr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function gg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function yg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - it(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = gg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function of() {
  var e = zo;
  return (zo <<= 1), !(zo & 4194240) && (zo = 64), e;
}
function Ns(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function No(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function vg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ya(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lf,
  va,
  af,
  uf,
  cf,
  xl = !1,
  Uo = [],
  en = null,
  tn = null,
  nn = null,
  io = new Map(),
  so = new Map(),
  Ht = [],
  wg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function jr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = _o(t)), t !== null && va(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function xg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (en = jr(en, e, t, n, r, o)), !0;
    case "dragenter":
      return (tn = jr(tn, e, t, n, r, o)), !0;
    case "mouseover":
      return (nn = jr(nn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return io.set(i, jr(io.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), so.set(i, jr(so.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function df(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zd(n)), t !== null)) {
          (e.blockedOn = t),
            cf(e.priority, function () {
              af(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ml = r), n.target.dispatchEvent(r), (ml = null);
    } else return (t = _o(n)), t !== null && va(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  oi(e) && n.delete(t);
}
function Sg() {
  (xl = !1),
    en !== null && oi(en) && (en = null),
    tn !== null && oi(tn) && (tn = null),
    nn !== null && oi(nn) && (nn = null),
    io.forEach($u),
    so.forEach($u);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xl ||
      ((xl = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Sg)));
}
function lo(e) {
  function t(o) {
    return Lr(o, e);
  }
  if (0 < Uo.length) {
    Lr(Uo[0], e);
    for (var n = 1; n < Uo.length; n++) {
      var r = Uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && Lr(en, e),
      tn !== null && Lr(tn, e),
      nn !== null && Lr(nn, e),
      io.forEach(t),
      so.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    df(n), n.blockedOn === null && Ht.shift();
}
var er = It.ReactCurrentBatchConfig,
  Ei = !0;
function Eg(e, t, n, r) {
  var o = G,
    i = er.transition;
  er.transition = null;
  try {
    (G = 1), wa(e, t, n, r);
  } finally {
    (G = o), (er.transition = i);
  }
}
function Cg(e, t, n, r) {
  var o = G,
    i = er.transition;
  er.transition = null;
  try {
    (G = 4), wa(e, t, n, r);
  } finally {
    (G = o), (er.transition = i);
  }
}
function wa(e, t, n, r) {
  if (Ei) {
    var o = Sl(e, t, n, r);
    if (o === null) Is(e, t, r, Ci, n), zu(e, r);
    else if (xg(o, e, t, n, r)) r.stopPropagation();
    else if ((zu(e, r), t & 4 && -1 < wg.indexOf(e))) {
      for (; o !== null; ) {
        var i = _o(o);
        if (
          (i !== null && lf(i),
          (i = Sl(e, t, n, r)),
          i === null && Is(e, t, r, Ci, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Is(e, t, r, null, n);
  }
}
var Ci = null;
function Sl(e, t, n, r) {
  if (((Ci = null), (e = ma(r)), (e = xn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function ff(e) {
  switch (e) {
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
      switch (cg()) {
        case ga:
          return 1;
        case nf:
          return 4;
        case xi:
        case dg:
          return 16;
        case rf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  xa = null,
  ii = null;
function pf() {
  if (ii) return ii;
  var e,
    t = xa,
    n = t.length,
    r,
    o = "value" in Zt ? Zt.value : Zt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ii = o.slice(e, 1 < r ? 1 - r : void 0));
}
function si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bo() {
  return !0;
}
function Uu() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Bo
        : Uu),
      (this.isPropagationStopped = Uu),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bo));
      },
      persist: function () {},
      isPersistent: Bo,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sa = Ve(Pr),
  Ro = re({}, Pr, { view: 0, detail: 0 }),
  kg = Ve(Ro),
  Rs,
  _s,
  Dr,
  Yi = re({}, Ro, {
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
    getModifierState: Ea,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Dr &&
            (Dr && e.type === "mousemove"
              ? ((Rs = e.screenX - Dr.screenX), (_s = e.screenY - Dr.screenY))
              : (_s = Rs = 0),
            (Dr = e)),
          Rs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _s;
    },
  }),
  Bu = Ve(Yi),
  Pg = re({}, Yi, { dataTransfer: 0 }),
  Tg = Ve(Pg),
  Ng = re({}, Ro, { relatedTarget: 0 }),
  bs = Ve(Ng),
  Rg = re({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _g = Ve(Rg),
  bg = re({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Og = Ve(bg),
  Ag = re({}, Pr, { data: 0 }),
  Vu = Ve(Ag),
  Mg = {
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
  jg = {
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
  Lg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lg[e]) ? !!t[e] : !1;
}
function Ea() {
  return Dg;
}
var Ig = re({}, Ro, {
    key: function (e) {
      if (e.key) {
        var t = Mg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jg[e.keyCode] || "Unidentified"
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
    getModifierState: Ea,
    charCode: function (e) {
      return e.type === "keypress" ? si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Fg = Ve(Ig),
  zg = re({}, Yi, {
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
  Wu = Ve(zg),
  $g = re({}, Ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea,
  }),
  Ug = Ve($g),
  Bg = re({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vg = Ve(Bg),
  Wg = re({}, Yi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hg = Ve(Wg),
  Qg = [9, 13, 27, 32],
  Ca = Ot && "CompositionEvent" in window,
  Gr = null;
Ot && "documentMode" in document && (Gr = document.documentMode);
var Kg = Ot && "TextEvent" in window && !Gr,
  hf = Ot && (!Ca || (Gr && 8 < Gr && 11 >= Gr)),
  Hu = " ",
  Qu = !1;
function mf(e, t) {
  switch (e) {
    case "keyup":
      return Qg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Gg(e, t) {
  switch (e) {
    case "compositionend":
      return gf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qu = !0), Hu);
    case "textInput":
      return (e = t.data), e === Hu && Qu ? null : e;
    default:
      return null;
  }
}
function Yg(e, t) {
  if (Un)
    return e === "compositionend" || (!Ca && mf(e, t))
      ? ((e = pf()), (ii = xa = Zt = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xg = {
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
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xg[e.type] : t === "textarea";
}
function yf(e, t, n, r) {
  Kd(r),
    (t = ki(t, "onChange")),
    0 < t.length &&
      ((n = new Sa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  ao = null;
function qg(e) {
  Rf(e, 0);
}
function Xi(e) {
  var t = Wn(e);
  if ($d(t)) return e;
}
function Zg(e, t) {
  if (e === "change") return t;
}
var vf = !1;
if (Ot) {
  var Os;
  if (Ot) {
    var As = "oninput" in document;
    if (!As) {
      var Gu = document.createElement("div");
      Gu.setAttribute("oninput", "return;"),
        (As = typeof Gu.oninput == "function");
    }
    Os = As;
  } else Os = !1;
  vf = Os && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
  Yr && (Yr.detachEvent("onpropertychange", wf), (ao = Yr = null));
}
function wf(e) {
  if (e.propertyName === "value" && Xi(ao)) {
    var t = [];
    yf(t, ao, e, ma(e)), qd(qg, t);
  }
}
function Jg(e, t, n) {
  e === "focusin"
    ? (Yu(), (Yr = t), (ao = n), Yr.attachEvent("onpropertychange", wf))
    : e === "focusout" && Yu();
}
function ey(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xi(ao);
}
function ty(e, t) {
  if (e === "click") return Xi(t);
}
function ny(e, t) {
  if (e === "input" || e === "change") return Xi(t);
}
function ry(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : ry;
function uo(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!rl.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function Xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qu(e, t) {
  var n = Xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xu(n);
  }
}
function xf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sf() {
  for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yi(e.document);
  }
  return t;
}
function ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function oy(e) {
  var t = Sf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ka(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = qu(n, i));
        var s = qu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var iy = Ot && "documentMode" in document && 11 >= document.documentMode,
  Bn = null,
  El = null,
  Xr = null,
  Cl = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cl ||
    Bn == null ||
    Bn !== yi(r) ||
    ((r = Bn),
    "selectionStart" in r && ka(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xr && uo(Xr, r)) ||
      ((Xr = r),
      (r = ki(El, "onSelect")),
      0 < r.length &&
        ((t = new Sa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bn))));
}
function Vo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vn = {
    animationend: Vo("Animation", "AnimationEnd"),
    animationiteration: Vo("Animation", "AnimationIteration"),
    animationstart: Vo("Animation", "AnimationStart"),
    transitionend: Vo("Transition", "TransitionEnd"),
  },
  Ms = {},
  Ef = {};
Ot &&
  ((Ef = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function qi(e) {
  if (Ms[e]) return Ms[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ef) return (Ms[e] = t[n]);
  return e;
}
var Cf = qi("animationend"),
  kf = qi("animationiteration"),
  Pf = qi("animationstart"),
  Tf = qi("transitionend"),
  Nf = new Map(),
  Ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  Nf.set(e, t), Dn(t, [e]);
}
for (var js = 0; js < Ju.length; js++) {
  var Ls = Ju[js],
    sy = Ls.toLowerCase(),
    ly = Ls[0].toUpperCase() + Ls.slice(1);
  hn(sy, "on" + ly);
}
hn(Cf, "onAnimationEnd");
hn(kf, "onAnimationIteration");
hn(Pf, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Tf, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function ec(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sg(r, t, void 0, e), (e.currentTarget = null);
}
function Rf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          ec(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          ec(o, l, u), (i = a);
        }
    }
  }
  if (wi) throw ((e = vl), (wi = !1), (vl = null), e);
}
function q(e, t) {
  var n = t[Rl];
  n === void 0 && (n = t[Rl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_f(t, e, 2, !1), n.add(r));
}
function Ds(e, t, n) {
  var r = 0;
  t && (r |= 4), _f(n, e, r, t);
}
var Wo = "_reactListening" + Math.random().toString(36).slice(2);
function co(e) {
  if (!e[Wo]) {
    (e[Wo] = !0),
      Ld.forEach(function (n) {
        n !== "selectionchange" && (ay.has(n) || Ds(n, !1, e), Ds(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wo] || ((t[Wo] = !0), Ds("selectionchange", !1, t));
  }
}
function _f(e, t, n, r) {
  switch (ff(t)) {
    case 1:
      var o = Eg;
      break;
    case 4:
      o = Cg;
      break;
    default:
      o = wa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !yl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Is(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = xn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qd(function () {
    var u = i,
      c = ma(n),
      f = [];
    e: {
      var h = Nf.get(e);
      if (h !== void 0) {
        var y = Sa,
          w = e;
        switch (e) {
          case "keypress":
            if (si(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Fg;
            break;
          case "focusin":
            (w = "focus"), (y = bs);
            break;
          case "focusout":
            (w = "blur"), (y = bs);
            break;
          case "beforeblur":
          case "afterblur":
            y = bs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Tg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ug;
            break;
          case Cf:
          case kf:
          case Pf:
            y = _g;
            break;
          case Tf:
            y = Vg;
            break;
          case "scroll":
            y = kg;
            break;
          case "wheel":
            y = Hg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Og;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Wu;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          p = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              p !== null && ((E = oo(d, p)), E != null && g.push(fo(d, E, m)))),
            S)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((h = new y(h, w, null, n, c)), f.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ml &&
            (w = n.relatedTarget || n.fromElement) &&
            (xn(w) || w[At]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? xn(w) : null),
              w !== null &&
                ((S = In(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((g = Bu),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Wu),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (S = y == null ? h : Wn(y)),
            (m = w == null ? h : Wn(w)),
            (h = new g(E, d + "leave", y, n, c)),
            (h.target = S),
            (h.relatedTarget = m),
            (E = null),
            xn(c) === u &&
              ((g = new g(p, d + "enter", w, n, c)),
              (g.target = m),
              (g.relatedTarget = S),
              (E = g)),
            (S = E),
            y && w)
          )
            t: {
              for (g = y, p = w, d = 0, m = g; m; m = Fn(m)) d++;
              for (m = 0, E = p; E; E = Fn(E)) m++;
              for (; 0 < d - m; ) (g = Fn(g)), d--;
              for (; 0 < m - d; ) (p = Fn(p)), m--;
              for (; d--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Fn(g)), (p = Fn(p));
              }
              g = null;
            }
          else g = null;
          y !== null && tc(f, h, y, g, !1),
            w !== null && S !== null && tc(f, S, w, g, !0);
        }
      }
      e: {
        if (
          ((h = u ? Wn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var C = Zg;
        else if (Ku(h))
          if (vf) C = ny;
          else {
            C = ey;
            var k = Jg;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = ty);
        if (C && (C = C(e, u))) {
          yf(f, C, n, c);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            cl(h, "number", h.value);
      }
      switch (((k = u ? Wn(u) : window), e)) {
        case "focusin":
          (Ku(k) || k.contentEditable === "true") &&
            ((Bn = k), (El = u), (Xr = null));
          break;
        case "focusout":
          Xr = El = Bn = null;
          break;
        case "mousedown":
          Cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Cl = !1), Zu(f, n, c);
          break;
        case "selectionchange":
          if (iy) break;
        case "keydown":
        case "keyup":
          Zu(f, n, c);
      }
      var P;
      if (Ca)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Un
          ? mf(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (hf &&
          n.locale !== "ko" &&
          (Un || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Un && (P = pf())
            : ((Zt = c),
              (xa = "value" in Zt ? Zt.value : Zt.textContent),
              (Un = !0))),
        (k = ki(u, R)),
        0 < k.length &&
          ((R = new Vu(R, e, null, n, c)),
          f.push({ event: R, listeners: k }),
          P ? (R.data = P) : ((P = gf(n)), P !== null && (R.data = P)))),
        (P = Kg ? Gg(e, n) : Yg(e, n)) &&
          ((u = ki(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Rf(f, t);
  });
}
function fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = oo(e, n)),
      i != null && r.unshift(fo(e, i, o)),
      (i = oo(e, t)),
      i != null && r.push(fo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = oo(n, i)), a != null && s.unshift(fo(n, a, l)))
        : o || ((a = oo(n, i)), a != null && s.push(fo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var uy = /\r\n?/g,
  cy = /\u0000|\uFFFD/g;
function nc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uy,
      `
`
    )
    .replace(cy, "");
}
function Ho(e, t, n) {
  if (((t = nc(t)), nc(e) !== t && n)) throw Error(_(425));
}
function Pi() {}
var kl = null,
  Pl = null;
function Tl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nl = typeof setTimeout == "function" ? setTimeout : void 0,
  dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rc = typeof Promise == "function" ? Promise : void 0,
  fy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rc < "u"
      ? function (e) {
          return rc.resolve(null).then(e).catch(py);
        }
      : Nl;
function py(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  lo(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function oc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + Tr,
  po = "__reactProps$" + Tr,
  At = "__reactContainer$" + Tr,
  Rl = "__reactEvents$" + Tr,
  hy = "__reactListeners$" + Tr,
  my = "__reactHandles$" + Tr;
function xn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = oc(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = oc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _o(e) {
  return (
    (e = e[gt] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Zi(e) {
  return e[po] || null;
}
var _l = [],
  Hn = -1;
function mn(e) {
  return { current: e };
}
function Z(e) {
  0 > Hn || ((e.current = _l[Hn]), (_l[Hn] = null), Hn--);
}
function Y(e, t) {
  Hn++, (_l[Hn] = e.current), (e.current = t);
}
var cn = {},
  Se = mn(cn),
  be = mn(!1),
  _n = cn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ti() {
  Z(be), Z(Se);
}
function ic(e, t, n) {
  if (Se.current !== cn) throw Error(_(168));
  Y(Se, t), Y(be, n);
}
function bf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Jm(e) || "Unknown", o));
  return re({}, n, r);
}
function Ni(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn),
    (_n = Se.current),
    Y(Se, e),
    Y(be, be.current),
    !0
  );
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = bf(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(be),
      Z(Se),
      Y(Se, e))
    : Z(be),
    Y(be, n);
}
var Nt = null,
  Ji = !1,
  zs = !1;
function Of(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function gy(e) {
  (Ji = !0), Of(e);
}
function gn() {
  if (!zs && Nt !== null) {
    zs = !0;
    var e = 0,
      t = G;
    try {
      var n = Nt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Ji = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), tf(ga, gn), o);
    } finally {
      (G = t), (zs = !1);
    }
  }
  return null;
}
var Qn = [],
  Kn = 0,
  Ri = null,
  _i = 0,
  Qe = [],
  Ke = 0,
  bn = null,
  Rt = 1,
  _t = "";
function vn(e, t) {
  (Qn[Kn++] = _i), (Qn[Kn++] = Ri), (Ri = e), (_i = t);
}
function Af(e, t, n) {
  (Qe[Ke++] = Rt), (Qe[Ke++] = _t), (Qe[Ke++] = bn), (bn = e);
  var r = Rt;
  e = _t;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Rt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (_t = i + e);
  } else (Rt = (1 << i) | (n << o) | r), (_t = e);
}
function Pa(e) {
  e.return !== null && (vn(e, 1), Af(e, 1, 0));
}
function Ta(e) {
  for (; e === Ri; )
    (Ri = Qn[--Kn]), (Qn[Kn] = null), (_i = Qn[--Kn]), (Qn[Kn] = null);
  for (; e === bn; )
    (bn = Qe[--Ke]),
      (Qe[Ke] = null),
      (_t = Qe[--Ke]),
      (Qe[Ke] = null),
      (Rt = Qe[--Ke]),
      (Qe[Ke] = null);
}
var ze = null,
  Fe = null,
  ee = !1,
  ot = null;
function Mf(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Fe = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bn !== null ? { id: Rt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ol(e) {
  if (ee) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (bl(e)) throw Error(_(418));
        t = rn(n.nextSibling);
        var r = ze;
        t && lc(e, t)
          ? Mf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (ze = e));
      }
    } else {
      if (bl(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (ze = e);
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Qo(e) {
  if (e !== ze) return !1;
  if (!ee) return ac(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (bl(e)) throw (jf(), Error(_(418)));
    for (; t; ) Mf(e, t), (t = rn(t.nextSibling));
  }
  if ((ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = ze ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function jf() {
  for (var e = Fe; e; ) e = rn(e.nextSibling);
}
function gr() {
  (Fe = ze = null), (ee = !1);
}
function Na(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var yy = It.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function uc(e) {
  var t = e._init;
  return t(e._payload);
}
function Lf(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = an(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, d, m, E) {
    return d === null || d.tag !== 6
      ? ((d = Qs(m, p.mode, E)), (d.return = p), d)
      : ((d = o(d, m)), (d.return = p), d);
  }
  function a(p, d, m, E) {
    var C = m.type;
    return C === $n
      ? c(p, d, m.props.children, E, m.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Vt &&
            uc(C) === d.type))
      ? ((E = o(d, m.props)), (E.ref = Ir(p, d, m)), (E.return = p), E)
      : ((E = pi(m.type, m.key, m.props, null, p.mode, E)),
        (E.ref = Ir(p, d, m)),
        (E.return = p),
        E);
  }
  function u(p, d, m, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Ks(m, p.mode, E)), (d.return = p), d)
      : ((d = o(d, m.children || [])), (d.return = p), d);
  }
  function c(p, d, m, E, C) {
    return d === null || d.tag !== 7
      ? ((d = Rn(m, p.mode, E, C)), (d.return = p), d)
      : ((d = o(d, m)), (d.return = p), d);
  }
  function f(p, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Qs("" + d, p.mode, m)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Do:
          return (
            (m = pi(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = Ir(p, null, d)),
            (m.return = p),
            m
          );
        case zn:
          return (d = Ks(d, p.mode, m)), (d.return = p), d;
        case Vt:
          var E = d._init;
          return f(p, E(d._payload), m);
      }
      if (Vr(d) || Ar(d))
        return (d = Rn(d, p.mode, m, null)), (d.return = p), d;
      Ko(p, d);
    }
    return null;
  }
  function h(p, d, m, E) {
    var C = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(p, d, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Do:
          return m.key === C ? a(p, d, m, E) : null;
        case zn:
          return m.key === C ? u(p, d, m, E) : null;
        case Vt:
          return (C = m._init), h(p, d, C(m._payload), E);
      }
      if (Vr(m) || Ar(m)) return C !== null ? null : c(p, d, m, E, null);
      Ko(p, m);
    }
    return null;
  }
  function y(p, d, m, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(m) || null), l(d, p, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Do:
          return (p = p.get(E.key === null ? m : E.key) || null), a(d, p, E, C);
        case zn:
          return (p = p.get(E.key === null ? m : E.key) || null), u(d, p, E, C);
        case Vt:
          var k = E._init;
          return y(p, d, m, k(E._payload), C);
      }
      if (Vr(E) || Ar(E)) return (p = p.get(m) || null), c(d, p, E, C, null);
      Ko(d, E);
    }
    return null;
  }
  function w(p, d, m, E) {
    for (
      var C = null, k = null, P = d, R = (d = 0), j = null;
      P !== null && R < m.length;
      R++
    ) {
      P.index > R ? ((j = P), (P = null)) : (j = P.sibling);
      var A = h(p, P, m[R], E);
      if (A === null) {
        P === null && (P = j);
        break;
      }
      e && P && A.alternate === null && t(p, P),
        (d = i(A, d, R)),
        k === null ? (C = A) : (k.sibling = A),
        (k = A),
        (P = j);
    }
    if (R === m.length) return n(p, P), ee && vn(p, R), C;
    if (P === null) {
      for (; R < m.length; R++)
        (P = f(p, m[R], E)),
          P !== null &&
            ((d = i(P, d, R)), k === null ? (C = P) : (k.sibling = P), (k = P));
      return ee && vn(p, R), C;
    }
    for (P = r(p, P); R < m.length; R++)
      (j = y(P, p, R, m[R], E)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? R : j.key),
          (d = i(j, d, R)),
          k === null ? (C = j) : (k.sibling = j),
          (k = j));
    return (
      e &&
        P.forEach(function (z) {
          return t(p, z);
        }),
      ee && vn(p, R),
      C
    );
  }
  function g(p, d, m, E) {
    var C = Ar(m);
    if (typeof C != "function") throw Error(_(150));
    if (((m = C.call(m)), m == null)) throw Error(_(151));
    for (
      var k = (C = null), P = d, R = (d = 0), j = null, A = m.next();
      P !== null && !A.done;
      R++, A = m.next()
    ) {
      P.index > R ? ((j = P), (P = null)) : (j = P.sibling);
      var z = h(p, P, A.value, E);
      if (z === null) {
        P === null && (P = j);
        break;
      }
      e && P && z.alternate === null && t(p, P),
        (d = i(z, d, R)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (P = j);
    }
    if (A.done) return n(p, P), ee && vn(p, R), C;
    if (P === null) {
      for (; !A.done; R++, A = m.next())
        (A = f(p, A.value, E)),
          A !== null &&
            ((d = i(A, d, R)), k === null ? (C = A) : (k.sibling = A), (k = A));
      return ee && vn(p, R), C;
    }
    for (P = r(p, P); !A.done; R++, A = m.next())
      (A = y(P, p, R, A.value, E)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? R : A.key),
          (d = i(A, d, R)),
          k === null ? (C = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        P.forEach(function (L) {
          return t(p, L);
        }),
      ee && vn(p, R),
      C
    );
  }
  function S(p, d, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === $n &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Do:
          e: {
            for (var C = m.key, k = d; k !== null; ) {
              if (k.key === C) {
                if (((C = m.type), C === $n)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (d = o(k, m.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Vt &&
                    uc(C) === k.type)
                ) {
                  n(p, k.sibling),
                    (d = o(k, m.props)),
                    (d.ref = Ir(p, k, m)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            m.type === $n
              ? ((d = Rn(m.props.children, p.mode, E, m.key)),
                (d.return = p),
                (p = d))
              : ((E = pi(m.type, m.key, m.props, null, p.mode, E)),
                (E.ref = Ir(p, d, m)),
                (E.return = p),
                (p = E));
          }
          return s(p);
        case zn:
          e: {
            for (k = m.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, m.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = Ks(m, p.mode, E)), (d.return = p), (p = d);
          }
          return s(p);
        case Vt:
          return (k = m._init), S(p, d, k(m._payload), E);
      }
      if (Vr(m)) return w(p, d, m, E);
      if (Ar(m)) return g(p, d, m, E);
      Ko(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, m)), (d.return = p), (p = d))
          : (n(p, d), (d = Qs(m, p.mode, E)), (d.return = p), (p = d)),
        s(p))
      : n(p, d);
  }
  return S;
}
var yr = Lf(!0),
  Df = Lf(!1),
  bi = mn(null),
  Oi = null,
  Gn = null,
  Ra = null;
function _a() {
  Ra = Gn = Oi = null;
}
function ba(e) {
  var t = bi.current;
  Z(bi), (e._currentValue = t);
}
function Al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tr(e, t) {
  (Oi = e),
    (Ra = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (Oi === null) throw Error(_(308));
      (Gn = e), (Oi.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var Sn = null;
function Oa(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function If(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Oa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Mt(e, r)
  );
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Aa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ff(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Mt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Oa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Mt(e, n)
  );
}
function li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
function cc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ai(e, t, n, r) {
  var o = e.updateQueue;
  Wt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        y = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            g = l;
          switch (((h = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                f = w.call(y, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (h = typeof w == "function" ? w.call(y, f, h) : w),
                h == null)
              )
                break e;
              f = re({}, f, h);
              break e;
            case 2:
              Wt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = f)) : (c = c.next = y),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (An |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function dc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var bo = {},
  vt = mn(bo),
  ho = mn(bo),
  mo = mn(bo);
function En(e) {
  if (e === bo) throw Error(_(174));
  return e;
}
function Ma(e, t) {
  switch ((Y(mo, t), Y(ho, e), Y(vt, bo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fl(t, e));
  }
  Z(vt), Y(vt, t);
}
function vr() {
  Z(vt), Z(ho), Z(mo);
}
function zf(e) {
  En(mo.current);
  var t = En(vt.current),
    n = fl(t, e.type);
  t !== n && (Y(ho, e), Y(vt, n));
}
function ja(e) {
  ho.current === e && (Z(vt), Z(ho));
}
var te = mn(0);
function Mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $s = [];
function La() {
  for (var e = 0; e < $s.length; e++)
    $s[e]._workInProgressVersionPrimary = null;
  $s.length = 0;
}
var ai = It.ReactCurrentDispatcher,
  Us = It.ReactCurrentBatchConfig,
  On = 0,
  ne = null,
  ae = null,
  de = null,
  ji = !1,
  qr = !1,
  go = 0,
  vy = 0;
function ye() {
  throw Error(_(321));
}
function Da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Ia(e, t, n, r, o, i) {
  if (
    ((On = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ai.current = e === null || e.memoizedState === null ? Ey : Cy),
    (e = n(r, o)),
    qr)
  ) {
    i = 0;
    do {
      if (((qr = !1), (go = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (ai.current = ky),
        (e = n(r, o));
    } while (qr);
  }
  if (
    ((ai.current = Li),
    (t = ae !== null && ae.next !== null),
    (On = 0),
    (de = ae = ne = null),
    (ji = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Fa() {
  var e = go !== 0;
  return (go = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ne.memoizedState = de = e) : (de = de.next = e), de;
}
function qe() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ne.memoizedState : de.next;
  if (t !== null) (de = t), (ae = e);
  else {
    if (e === null) throw Error(_(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ne.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((On & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ne.lanes |= c),
          (An |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      lt(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (An |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    lt(i, t.memoizedState) || (_e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function $f() {}
function Uf(e, t) {
  var n = ne,
    r = qe(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (_e = !0)),
    (r = r.queue),
    za(Wf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vo(9, Vf.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(_(349));
    On & 30 || Bf(n, t, o);
  }
  return o;
}
function Bf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hf(t) && Qf(e);
}
function Wf(e, t, n) {
  return n(function () {
    Hf(t) && Qf(e);
  });
}
function Hf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Qf(e) {
  var t = Mt(e, 1);
  t !== null && st(t, e, 1, -1);
}
function fc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sy.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function vo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kf() {
  return qe().memoizedState;
}
function ui(e, t, n, r) {
  var o = ft();
  (ne.flags |= e),
    (o.memoizedState = vo(1 | t, n, void 0, r === void 0 ? null : r));
}
function es(e, t, n, r) {
  var o = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((i = s.destroy), r !== null && Da(r, s.deps))) {
      o.memoizedState = vo(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = vo(1 | t, n, i, r));
}
function pc(e, t) {
  return ui(8390656, 8, e, t);
}
function za(e, t) {
  return es(2048, 8, e, t);
}
function Gf(e, t) {
  return es(4, 2, e, t);
}
function Yf(e, t) {
  return es(4, 4, e, t);
}
function Xf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), es(4, 4, Xf.bind(null, t, e), n)
  );
}
function $a() {}
function Zf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ep(e, t, n) {
  return On & 21
    ? (lt(n, t) || ((n = of()), (ne.lanes |= n), (An |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function wy(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Us.transition;
  Us.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Us.transition = r);
  }
}
function tp() {
  return qe().memoizedState;
}
function xy(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    np(e))
  )
    rp(t, n);
  else if (((n = If(e, t, n, r)), n !== null)) {
    var o = Pe();
    st(n, e, r, o), op(n, t, r);
  }
}
function Sy(e, t, n) {
  var r = ln(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (np(e)) rp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), lt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Oa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = If(e, t, o, r)),
      n !== null && ((o = Pe()), st(n, e, r, o), op(n, t, r));
  }
}
function np(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function rp(e, t) {
  qr = ji = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function op(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
var Li = {
    readContext: Xe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  Ey = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ui(4194308, 4, Xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = xy.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fc,
    useDebugValue: $a,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = fc(!1),
        t = e[0];
      return (e = wy.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = ft();
      if (ee) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(_(349));
        On & 30 || Bf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        pc(Wf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vo(9, Vf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = fe.identifierPrefix;
      if (ee) {
        var n = _t,
          r = Rt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = go++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = vy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: Xe,
    useCallback: Zf,
    useContext: Xe,
    useEffect: za,
    useImperativeHandle: qf,
    useInsertionEffect: Gf,
    useLayoutEffect: Yf,
    useMemo: Jf,
    useReducer: Bs,
    useRef: Kf,
    useState: function () {
      return Bs(yo);
    },
    useDebugValue: $a,
    useDeferredValue: function (e) {
      var t = qe();
      return ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Bs(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: Xe,
    useCallback: Zf,
    useContext: Xe,
    useEffect: za,
    useImperativeHandle: qf,
    useInsertionEffect: Gf,
    useLayoutEffect: Yf,
    useMemo: Jf,
    useReducer: Vs,
    useRef: Kf,
    useState: function () {
      return Vs(yo);
    },
    useDebugValue: $a,
    useDeferredValue: function (e) {
      var t = qe();
      return ae === null ? (t.memoizedState = e) : ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ml(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ts = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = ln(e),
      i = bt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, o)),
      t !== null && (st(t, e, o, r), li(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = ln(e),
      i = bt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, o)),
      t !== null && (st(t, e, o, r), li(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = ln(e),
      o = bt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = on(e, o, r)),
      t !== null && (st(t, e, r, n), li(t, e, r));
  },
};
function hc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !uo(n, r) || !uo(o, i)
      : !0
  );
}
function ip(e, t, n) {
  var r = !1,
    o = cn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Xe(i))
      : ((o = Oe(t) ? _n : Se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? mr(e, o) : cn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ts),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ts.enqueueReplaceState(t, t.state, null);
}
function jl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Aa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Xe(i))
    : ((i = Oe(t) ? _n : Se.current), (o.context = mr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ml(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ts.enqueueReplaceState(o, o.state, null),
      Ai(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Zm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Py = typeof WeakMap == "function" ? WeakMap : Map;
function sp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ii || ((Ii = !0), (Hl = r)), Ll(e, t);
    }),
    n
  );
}
function lp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ll(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ll(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function gc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Py();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = zy.bind(null, e, t, n)), t.then(e, e));
}
function yc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bt(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ty = It.ReactCurrentOwner,
  _e = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Df(t, null, n, r) : yr(t, e.child, n, r);
}
function wc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    tr(t, o),
    (r = Ia(e, t, n, r, i, o)),
    (n = Fa()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (ee && n && Pa(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function xc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ga(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ap(e, t, i, r, o))
      : ((e = pi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : uo), n(s, r) && e.ref === t.ref)
    )
      return jt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = an(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ap(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (uo(i, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), jt(e, t, o);
  }
  return Dl(e, t, n, r, o);
}
function up(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Xn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Xn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Xn, De),
        (De |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Xn, De),
      (De |= r);
  return Ce(e, t, o, n), t.child;
}
function cp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Dl(e, t, n, r, o) {
  var i = Oe(n) ? _n : Se.current;
  return (
    (i = mr(t, i)),
    tr(t, o),
    (n = Ia(e, t, n, r, i, o)),
    (r = Fa()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (ee && r && Pa(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function Sc(e, t, n, r, o) {
  if (Oe(n)) {
    var i = !0;
    Ni(t);
  } else i = !1;
  if ((tr(t, o), t.stateNode === null))
    ci(e, t), ip(t, n, r), jl(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xe(u))
      : ((u = Oe(n) ? _n : Se.current), (u = mr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && mc(t, s, r, u)),
      (Wt = !1);
    var h = t.memoizedState;
    (s.state = h),
      Ai(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || be.current || Wt
        ? (typeof c == "function" && (Ml(t, n, c, r), (a = t.memoizedState)),
          (l = Wt || hc(t, n, l, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ff(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : et(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Xe(a))
        : ((a = Oe(n) ? _n : Se.current), (a = mr(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && mc(t, s, r, a)),
      (Wt = !1),
      (h = t.memoizedState),
      (s.state = h),
      Ai(t, r, s, o);
    var w = t.memoizedState;
    l !== f || h !== w || be.current || Wt
      ? (typeof y == "function" && (Ml(t, n, y, r), (w = t.memoizedState)),
        (u = Wt || hc(t, n, u, r, h, w, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Il(e, t, n, r, i, o);
}
function Il(e, t, n, r, o, i) {
  cp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && sc(t, n, !1), jt(e, t, i);
  (r = t.stateNode), (Ty.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = yr(t, e.child, null, i)), (t.child = yr(t, null, l, i)))
      : Ce(e, t, l, i),
    (t.memoizedState = r.state),
    o && sc(t, n, !0),
    t.child
  );
}
function dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ic(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ic(e, t.context, !1),
    Ma(e, t.containerInfo);
}
function Ec(e, t, n, r, o) {
  return gr(), Na(o), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fp(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(te, o & 1),
    e === null)
  )
    return (
      Ol(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = os(s, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zl(n)),
              (t.memoizedState = Fl),
              e)
            : Ua(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Ny(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = an(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = an(l, i)) : ((i = Rn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? zl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = an(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ua(e, t) {
  return (
    (t = os({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Go(e, t, n, r) {
  return (
    r !== null && Na(r),
    yr(t, e.child, null, n),
    (e = Ua(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ny(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ws(Error(_(422)))), Go(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = os({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Rn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, s),
        (t.child.memoizedState = zl(s)),
        (t.memoizedState = Fl),
        i);
  if (!(t.mode & 1)) return Go(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(_(419))), (r = Ws(i, r, void 0)), Go(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), _e || l)) {
    if (((r = fe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Mt(e, o), st(r, e, o, -1));
    }
    return Ka(), (r = Ws(Error(_(421)))), Go(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $y.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Fe = rn(o.nextSibling)),
      (ze = t),
      (ee = !0),
      (ot = null),
      e !== null &&
        ((Qe[Ke++] = Rt),
        (Qe[Ke++] = _t),
        (Qe[Ke++] = bn),
        (Rt = e.id),
        (_t = e.overflow),
        (bn = t)),
      (t = Ua(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Al(e.return, t, n);
}
function Hs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function pp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ce(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cc(e, n, t);
        else if (e.tag === 19) Cc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Mi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Hs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Hs(t, !0, n, null, i);
        break;
      case "together":
        Hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ci(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (An |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ry(e, t, n) {
  switch (t.tag) {
    case 3:
      dp(t), gr();
      break;
    case 5:
      zf(t);
      break;
    case 1:
      Oe(t.type) && Ni(t);
      break;
    case 4:
      Ma(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Y(bi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fp(e, t, n)
          : (Y(te, te.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), up(e, t, n);
  }
  return jt(e, t, n);
}
var hp, $l, mp, gp;
hp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$l = function () {};
mp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), En(vt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = al(e, o)), (r = al(e, r)), (i = []);
        break;
      case "select":
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = dl(e, o)), (r = dl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pi);
    }
    pl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (no.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (no.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _y(e, t, n) {
  var r = t.pendingProps;
  switch ((Ta(t), t.tag)) {
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
      return ve(t), null;
    case 1:
      return Oe(t.type) && Ti(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        Z(be),
        Z(Se),
        La(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Gl(ot), (ot = null)))),
        $l(e, t),
        ve(t),
        null
      );
    case 5:
      ja(t);
      var o = En(mo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ve(t), null;
        }
        if (((e = En(vt.current)), Qo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[po] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Hr.length; o++) q(Hr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Au(r, i), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              ju(r, i), q("invalid", r);
          }
          pl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ho(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ho(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : no.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Io(r), Mu(r, i, !0);
              break;
            case "textarea":
              Io(r), Lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[gt] = t),
            (e[po] = r),
            hp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = hl(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hr.length; o++) q(Hr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (o = r);
                break;
              case "details":
                q("toggle", e), (o = r);
                break;
              case "input":
                Au(e, r), (o = al(e, r)), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                ju(e, r), (o = dl(e, r)), q("invalid", e);
                break;
              default:
                o = r;
            }
            pl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Qd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Wd(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ro(e, a)
                    : typeof a == "number" && ro(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (no.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && q("scroll", e)
                      : a != null && da(e, i, a, s));
              }
            switch (n) {
              case "input":
                Io(e), Mu(e, r, !1);
                break;
              case "textarea":
                Io(e), Lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = En(mo.current)), En(vt.current), Qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ho(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ho(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (Z(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128))
          jf(), gr(), (t.flags |= 98560), (i = !1);
        else if (((i = Qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[gt] = t;
          } else
            gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (i = !1);
        } else ot !== null && (Gl(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Ka())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        vr(), $l(e, t), e === null && co(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return ba(t.type._context), ve(t), null;
    case 17:
      return Oe(t.type) && Ti(), ve(t), null;
    case 19:
      if ((Z(te), (i = t.memoizedState), i === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Fr(i, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Fr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > xr &&
            ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ee)
            )
              return ve(t), null;
          } else
            2 * se() - i.renderingStartTime > xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = te.current),
          Y(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        Qa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function by(e, t) {
  switch ((Ta(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && Ti(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        Z(be),
        Z(Se),
        La(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ja(t), null;
    case 13:
      if ((Z(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(te), null;
    case 4:
      return vr(), null;
    case 10:
      return ba(t.type._context), null;
    case 22:
    case 23:
      return Qa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yo = !1,
  xe = !1,
  Oy = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Ul(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var kc = !1;
function Ay(e, t) {
  if (((kl = Ei), (e = Sf()), ka(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (h = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pl = { focusedElem: e, selectionRange: n }, Ei = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    S = w.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : et(t.type, g),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (E) {
          ie(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (w = kc), (kc = !1), w;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ul(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ns(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[po], delete t[Rl], delete t[hy], delete t[my])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling);
}
function Wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling);
}
var pe = null,
  rt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) wp(e, t, n), (n = n.sibling);
}
function wp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Yn(n, t);
    case 6:
      var r = pe,
        o = rt;
      (pe = null),
        Ft(e, t, n),
        (pe = r),
        (rt = o),
        pe !== null &&
          (rt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (rt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fs(e.parentNode, n)
              : e.nodeType === 1 && Fs(e, n),
            lo(e))
          : Fs(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (o = rt),
        (pe = n.stateNode.containerInfo),
        (rt = !0),
        Ft(e, t, n),
        (pe = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Ul(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ie(n, t, l);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Ft(e, t, n), (xe = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Tc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Oy()),
      t.forEach(function (r) {
        var o = Uy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (pe = l.stateNode), (rt = !1);
              break e;
            case 3:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (pe === null) throw Error(_(160));
        wp(i, s, o), (pe = null), (rt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xp(t, e), (t = t.sibling);
}
function xp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), dt(e), r & 4)) {
        try {
          Zr(3, e, e.return), ns(3, e);
        } catch (g) {
          ie(e, e.return, g);
        }
        try {
          Zr(5, e, e.return);
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      break;
    case 1:
      Je(t, e), dt(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        dt(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ro(o, "");
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Ud(o, i),
              hl(l, s);
            var u = hl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Qd(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Wd(o, f)
                : c === "children"
                ? ro(o, f)
                : da(o, c, f, u);
            }
            switch (l) {
              case "input":
                ul(o, i);
                break;
              case "textarea":
                Bd(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? qn(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(o, !!i.multiple, i.defaultValue, !0)
                      : qn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[po] = i;
          } catch (g) {
            ie(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Je(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          lo(t.containerInfo);
        } catch (g) {
          ie(e, e.return, g);
        }
      break;
    case 4:
      Je(t, e), dt(e);
      break;
    case 13:
      Je(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wa = se())),
        r & 4 && Tc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || c), Je(t, e), (xe = u)) : Je(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (f = O = c; O !== null; ) {
              switch (((h = O), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, h, h.return);
                  break;
                case 1:
                  Yn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      ie(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Yn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Rc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (O = y)) : Rc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Hd("display", s)));
              } catch (g) {
                ie(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                ie(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), dt(e), r & 4 && Tc(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ro(o, ""), (r.flags &= -33));
          var i = Pc(e);
          Wl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Pc(e);
          Vl(e, l, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function My(e, t, n) {
  (O = e), Sp(e);
}
function Sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Yo;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || xe;
        l = Yo;
        var u = xe;
        if (((Yo = s), (xe = a) && !u))
          for (O = o; O !== null; )
            (s = O),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? _c(o)
                : a !== null
                ? ((a.return = s), (O = a))
                : _c(o);
        for (; i !== null; ) (O = i), Sp(i), (i = i.sibling);
        (O = o), (Yo = l), (xe = u);
      }
      Nc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : Nc(e);
  }
}
function Nc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && dc(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && lo(f);
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
              throw Error(_(163));
          }
        xe || (t.flags & 512 && Bl(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Rc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function _c(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ns(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, o, a);
            }
          }
          var i = t.return;
          try {
            Bl(t);
          } catch (a) {
            ie(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Bl(t);
          } catch (a) {
            ie(t, s, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var jy = Math.ceil,
  Di = It.ReactCurrentDispatcher,
  Ba = It.ReactCurrentOwner,
  Ye = It.ReactCurrentBatchConfig,
  W = 0,
  fe = null,
  le = null,
  he = 0,
  De = 0,
  Xn = mn(0),
  ce = 0,
  wo = null,
  An = 0,
  rs = 0,
  Va = 0,
  Jr = null,
  Re = null,
  Wa = 0,
  xr = 1 / 0,
  Tt = null,
  Ii = !1,
  Hl = null,
  sn = null,
  Xo = !1,
  Jt = null,
  Fi = 0,
  eo = 0,
  Ql = null,
  di = -1,
  fi = 0;
function Pe() {
  return W & 6 ? se() : di !== -1 ? di : (di = se());
}
function ln(e) {
  return e.mode & 1
    ? W & 2 && he !== 0
      ? he & -he
      : yy.transition !== null
      ? (fi === 0 && (fi = of()), fi)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ff(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < eo) throw ((eo = 0), (Ql = null), Error(_(185)));
  No(e, n, r),
    (!(W & 2) || e !== fe) &&
      (e === fe && (!(W & 2) && (rs |= n), ce === 4 && Qt(e, he)),
      Ae(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((xr = se() + 500), Ji && gn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  yg(e, t);
  var r = Si(e, e === fe ? he : 0);
  if (r === 0)
    n !== null && Fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fu(n), t === 1))
      e.tag === 0 ? gy(bc.bind(null, e)) : Of(bc.bind(null, e)),
        fy(function () {
          !(W & 6) && gn();
        }),
        (n = null);
    else {
      switch (sf(r)) {
        case 1:
          n = ga;
          break;
        case 4:
          n = nf;
          break;
        case 16:
          n = xi;
          break;
        case 536870912:
          n = rf;
          break;
        default:
          n = xi;
      }
      n = _p(n, Ep.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ep(e, t) {
  if (((di = -1), (fi = 0), W & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = Si(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var i = kp();
    (fe !== e || he !== t) && ((Tt = null), (xr = se() + 500), Nn(e, t));
    do
      try {
        Iy();
        break;
      } catch (l) {
        Cp(e, l);
      }
    while (!0);
    _a(),
      (Di.current = i),
      (W = o),
      le !== null ? (t = 0) : ((fe = null), (he = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = wl(e)), o !== 0 && ((r = o), (t = Kl(e, o)))), t === 1)
    )
      throw ((n = wo), Nn(e, 0), Qt(e, r), Ae(e, se()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ly(o) &&
          ((t = zi(e, r)),
          t === 2 && ((i = wl(e)), i !== 0 && ((r = i), (t = Kl(e, i)))),
          t === 1))
      )
        throw ((n = wo), Nn(e, 0), Qt(e, r), Ae(e, se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          wn(e, Re, Tt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Wa + 500 - se()), 10 < t))
          ) {
            if (Si(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Nl(wn.bind(null, e, Re, Tt), t);
            break;
          }
          wn(e, Re, Tt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - it(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nl(wn.bind(null, e, Re, Tt), r);
            break;
          }
          wn(e, Re, Tt);
          break;
        case 5:
          wn(e, Re, Tt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ae(e, se()), e.callbackNode === n ? Ep.bind(null, e) : null;
}
function Kl(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = zi(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && Gl(t)),
    e
  );
}
function Gl(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function Ly(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~Va,
      t &= ~rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bc(e) {
  if (W & 6) throw Error(_(327));
  nr();
  var t = Si(e, 0);
  if (!(t & 1)) return Ae(e, se()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wl(e);
    r !== 0 && ((t = r), (n = Kl(e, r)));
  }
  if (n === 1) throw ((n = wo), Nn(e, 0), Qt(e, t), Ae(e, se()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, Re, Tt),
    Ae(e, se()),
    null
  );
}
function Ha(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((xr = se() + 500), Ji && gn());
  }
}
function Mn(e) {
  Jt !== null && Jt.tag === 0 && !(W & 6) && nr();
  var t = W;
  W |= 1;
  var n = Ye.transition,
    r = G;
  try {
    if (((Ye.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (Ye.transition = n), (W = t), !(W & 6) && gn();
  }
}
function Qa() {
  (De = Xn.current), Z(Xn);
}
function Nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dy(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ti();
          break;
        case 3:
          vr(), Z(be), Z(Se), La();
          break;
        case 5:
          ja(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          Z(te);
          break;
        case 19:
          Z(te);
          break;
        case 10:
          ba(r.type._context);
          break;
        case 22:
        case 23:
          Qa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = an(e.current, null)),
    (he = De = t),
    (ce = 0),
    (wo = null),
    (Va = rs = An = 0),
    (Re = Jr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Cp(e, t) {
  do {
    var n = le;
    try {
      if ((_a(), (ai.current = Li), ji)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ji = !1;
      }
      if (
        ((On = 0),
        (de = ae = ne = null),
        (qr = !1),
        (go = 0),
        (Ba.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (wo = t), (le = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = yc(s);
          if (y !== null) {
            (y.flags &= -257),
              vc(y, s, l, i, t),
              y.mode & 1 && gc(i, u, t),
              (t = y),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              gc(i, u, t), Ka();
              break e;
            }
            a = Error(_(426));
          }
        } else if (ee && l.mode & 1) {
          var S = yc(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              vc(S, s, l, i, t),
              Na(wr(a, l));
            break e;
          }
        }
        (i = a = wr(a, l)),
          ce !== 4 && (ce = 2),
          Jr === null ? (Jr = [i]) : Jr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = sp(i, a, t);
              cc(i, p);
              break e;
            case 1:
              l = a;
              var d = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (sn === null || !sn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = lp(i, l, t);
                cc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tp(n);
    } catch (C) {
      (t = C), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kp() {
  var e = Di.current;
  return (Di.current = Li), e === null ? Li : e;
}
function Ka() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(An & 268435455) && !(rs & 268435455)) || Qt(fe, he);
}
function zi(e, t) {
  var n = W;
  W |= 2;
  var r = kp();
  (fe !== e || he !== t) && ((Tt = null), Nn(e, t));
  do
    try {
      Dy();
      break;
    } catch (o) {
      Cp(e, o);
    }
  while (!0);
  if ((_a(), (W = n), (Di.current = r), le !== null)) throw Error(_(261));
  return (fe = null), (he = 0), ce;
}
function Dy() {
  for (; le !== null; ) Pp(le);
}
function Iy() {
  for (; le !== null && !ag(); ) Pp(le);
}
function Pp(e) {
  var t = Rp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tp(e) : (le = t),
    (Ba.current = null);
}
function Tp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = by(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (le = null);
        return;
      }
    } else if (((n = _y(n, t, De)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function wn(e, t, n) {
  var r = G,
    o = Ye.transition;
  try {
    (Ye.transition = null), (G = 1), Fy(e, t, n, r);
  } finally {
    (Ye.transition = o), (G = r);
  }
  return null;
}
function Fy(e, t, n, r) {
  do nr();
  while (Jt !== null);
  if (W & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (vg(e, i),
    e === fe && ((le = fe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xo ||
      ((Xo = !0),
      _p(xi, function () {
        return nr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ye.transition), (Ye.transition = null);
    var s = G;
    G = 1;
    var l = W;
    (W |= 4),
      (Ba.current = null),
      Ay(e, n),
      xp(n, e),
      oy(Pl),
      (Ei = !!kl),
      (Pl = kl = null),
      (e.current = n),
      My(n),
      ug(),
      (W = l),
      (G = s),
      (Ye.transition = i);
  } else e.current = n;
  if (
    (Xo && ((Xo = !1), (Jt = e), (Fi = o)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    fg(n.stateNode),
    Ae(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ii) throw ((Ii = !1), (e = Hl), (Hl = null), e);
  return (
    Fi & 1 && e.tag !== 0 && nr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ql ? eo++ : ((eo = 0), (Ql = e))) : (eo = 0),
    gn(),
    null
  );
}
function nr() {
  if (Jt !== null) {
    var e = sf(Fi),
      t = Ye.transition,
      n = G;
    try {
      if (((Ye.transition = null), (G = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (Fi = 0), W & 6)) throw Error(_(331));
        var o = W;
        for (W |= 4, O = e.current; O !== null; ) {
          var i = O,
            s = i.child;
          if (O.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (O = f);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var h = c.sibling,
                        y = c.return;
                      if ((yp(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (O = h);
                        break;
                      }
                      O = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (O = s);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (O = p);
                break e;
              }
              O = i.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          s = O;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (O = m);
          else
            e: for (s = d; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(9, l);
                  }
                } catch (C) {
                  ie(l, l.return, C);
                }
              if (l === s) {
                O = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (O = E);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((W = o), gn(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(Gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (Ye.transition = t);
    }
  }
  return !1;
}
function Oc(e, t, n) {
  (t = wr(n, t)),
    (t = sp(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Pe()),
    e !== null && (No(e, 1, t), Ae(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = wr(n, e)),
            (e = lp(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Pe()),
            t !== null && (No(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (he & n) === n &&
      (ce === 4 || (ce === 3 && (he & 130023424) === he && 500 > se() - Wa)
        ? Nn(e, 0)
        : (Va |= n)),
    Ae(e, t);
}
function Np(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
      : (t = 1));
  var n = Pe();
  (e = Mt(e, t)), e !== null && (No(e, t, n), Ae(e, n));
}
function $y(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Np(e, n);
}
function Uy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Np(e, n);
}
var Rp;
Rp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), Ry(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), ee && t.flags & 1048576 && Af(t, _i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ci(e, t), (e = t.pendingProps);
      var o = mr(t, Se.current);
      tr(t, n), (o = Ia(null, t, r, e, o, n));
      var i = Fa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((i = !0), Ni(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Aa(t),
            (o.updater = ts),
            (t.stateNode = o),
            (o._reactInternals = t),
            jl(t, r, e, n),
            (t = Il(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Pa(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ci(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Vy(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = Dl(null, t, r, e, n);
            break e;
          case 1:
            t = Sc(null, t, r, e, n);
            break e;
          case 11:
            t = wc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Dl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Sc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dp(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ff(e, t),
          Ai(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = wr(Error(_(423)), t)), (t = Ec(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = wr(Error(_(424)), t)), (t = Ec(e, t, r, n, o));
            break e;
          } else
            for (
              Fe = rn(t.stateNode.containerInfo.firstChild),
                ze = t,
                ee = !0,
                ot = null,
                n = Df(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gr(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zf(t),
        e === null && Ol(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Tl(r, o) ? (s = null) : i !== null && Tl(r, i) && (t.flags |= 32),
        cp(e, t),
        Ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ol(t), null;
    case 13:
      return fp(e, t, n);
    case 4:
      return (
        Ma(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        wc(e, t, r, o, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Y(bi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (lt(i.value, s)) {
            if (i.children === o.children && !be.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = bt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Al(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Al(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        tr(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        xc(e, t, r, o, n)
      );
    case 15:
      return ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        ci(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Ni(t)) : (e = !1),
        tr(t, n),
        ip(t, r, o),
        jl(t, r, o, n),
        Il(null, t, r, !0, e, n)
      );
    case 19:
      return pp(e, t, n);
    case 22:
      return up(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function _p(e, t) {
  return tf(e, t);
}
function By(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ge(e, t, n, r) {
  return new By(e, t, n, r);
}
function Ga(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vy(e) {
  if (typeof e == "function") return Ga(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pa)) return 11;
    if (e === ha) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function pi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ga(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case $n:
        return Rn(n.children, o, i, t);
      case fa:
        (s = 8), (o |= 8);
        break;
      case ol:
        return (
          (e = Ge(12, n, t, o | 2)), (e.elementType = ol), (e.lanes = i), e
        );
      case il:
        return (e = Ge(13, n, t, o)), (e.elementType = il), (e.lanes = i), e;
      case sl:
        return (e = Ge(19, n, t, o)), (e.elementType = sl), (e.lanes = i), e;
      case Fd:
        return os(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dd:
              s = 10;
              break e;
            case Id:
              s = 9;
              break e;
            case pa:
              s = 11;
              break e;
            case ha:
              s = 14;
              break e;
            case Vt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function os(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Fd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qs(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function Ks(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ns(0)),
    (this.expirationTimes = Ns(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ns(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ya(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Wy(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ge(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Aa(i),
    e
  );
}
function Hy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bp(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return bf(e, n, t);
  }
  return t;
}
function Op(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ya(n, r, !0, e, o, i, s, l, a)),
    (e.context = bp(null)),
    (n = e.current),
    (r = Pe()),
    (o = ln(n)),
    (i = bt(r, o)),
    (i.callback = t ?? null),
    on(n, i, o),
    (e.current.lanes = o),
    No(e, o, r),
    Ae(e, r),
    e
  );
}
function is(e, t, n, r) {
  var o = t.current,
    i = Pe(),
    s = ln(o);
  return (
    (n = bp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(o, t, s)),
    e !== null && (st(e, o, s, i), li(e, o, s)),
    s
  );
}
function $i(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xa(e, t) {
  Ac(e, t), (e = e.alternate) && Ac(e, t);
}
function Qy() {
  return null;
}
var Ap =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qa(e) {
  this._internalRoot = e;
}
ss.prototype.render = qa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  is(e, t, null, null);
};
ss.prototype.unmount = qa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      is(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function ss(e) {
  this._internalRoot = e;
}
ss.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && df(e);
  }
};
function Za(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ls(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mc() {}
function Ky(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $i(s);
        i.call(u);
      };
    }
    var s = Op(t, r, e, 0, null, !1, !1, "", Mc);
    return (
      (e._reactRootContainer = s),
      (e[At] = s.current),
      co(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = $i(a);
      l.call(u);
    };
  }
  var a = Ya(e, 0, !1, null, null, !1, !1, "", Mc);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      is(t, a, n, r);
    }),
    a
  );
}
function as(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = $i(s);
        l.call(a);
      };
    }
    is(t, s, e, o);
  } else s = Ky(n, t, e, o, r);
  return $i(s);
}
lf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wr(t.pendingLanes);
        n !== 0 &&
          (ya(t, n | 1), Ae(t, se()), !(W & 6) && ((xr = se() + 500), gn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = Pe();
          st(r, e, 1, o);
        }
      }),
        Xa(e, 1);
  }
};
va = function (e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      st(t, e, 134217728, n);
    }
    Xa(e, 134217728);
  }
};
af = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = Mt(e, t);
    if (n !== null) {
      var r = Pe();
      st(n, e, t, r);
    }
    Xa(e, t);
  }
};
uf = function () {
  return G;
};
cf = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
gl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ul(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Zi(r);
            if (!o) throw Error(_(90));
            $d(r), ul(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bd(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
Yd = Ha;
Xd = Mn;
var Gy = { usingClientEntryPoint: !1, Events: [_o, Wn, Zi, Kd, Gd, Ha] },
  zr = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Yy = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Qy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      (Gi = qo.inject(Yy)), (yt = qo);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Za(t)) throw Error(_(200));
  return Hy(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Za(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = Ap;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ya(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    new qa(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Jd(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return Mn(e);
};
Be.hydrate = function (e, t, n) {
  if (!ls(t)) throw Error(_(200));
  return as(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Za(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Ap;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Op(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[At] = t.current),
    co(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ss(t);
};
Be.render = function (e, t, n) {
  if (!ls(t)) throw Error(_(200));
  return as(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!ls(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Mn(function () {
        as(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = Ha;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ls(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return as(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp);
    } catch (e) {
      console.error(e);
    }
}
Mp(), (Ad.exports = Be);
var Oo = Ad.exports;
const Xy = xd(Oo);
var jp,
  jc = Oo;
(jp = jc.createRoot), jc.hydrateRoot;
function qy(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    o,
    i,
    s = [],
    l = "",
    a = e.split("/");
  for (a[0] || a.shift(); (o = a.shift()); )
    (n = o[0]),
      n === "*"
        ? (s.push(n), (l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
        ? ((r = o.indexOf("?", 1)),
          (i = o.indexOf(".", 1)),
          s.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
          (l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i)))
        : (l += "/" + o);
  return {
    keys: s,
    pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Lp = { exports: {} },
  Dp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = v;
function Zy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Jy = typeof Object.is == "function" ? Object.is : Zy,
  ev = Sr.useState,
  tv = Sr.useEffect,
  nv = Sr.useLayoutEffect,
  rv = Sr.useDebugValue;
function ov(e, t) {
  var n = t(),
    r = ev({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    nv(
      function () {
        (o.value = n), (o.getSnapshot = t), Gs(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    tv(
      function () {
        return (
          Gs(o) && i({ inst: o }),
          e(function () {
            Gs(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    rv(n),
    n
  );
}
function Gs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jy(e, n);
  } catch {
    return !0;
  }
}
function iv(e, t) {
  return t();
}
var sv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? iv
    : ov;
Dp.useSyncExternalStore =
  Sr.useSyncExternalStore !== void 0 ? Sr.useSyncExternalStore : sv;
Lp.exports = Dp;
var lv = Lp.exports;
const av = zm.useInsertionEffect,
  uv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  cv = uv ? v.useLayoutEffect : v.useEffect,
  dv = av || cv,
  Ip = (e) => {
    const t = v.useRef([e, (...n) => t[0](...n)]).current;
    return (
      dv(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  fv = "popstate",
  Ja = "pushState",
  eu = "replaceState",
  pv = "hashchange",
  Lc = [fv, Ja, eu, pv],
  hv = (e) => {
    for (const t of Lc) addEventListener(t, e);
    return () => {
      for (const t of Lc) removeEventListener(t, e);
    };
  },
  Fp = (e, t) => lv.useSyncExternalStore(hv, e, t),
  mv = () => location.search,
  gv = ({ ssrSearch: e = "" } = {}) => Fp(mv, () => e),
  Dc = () => location.pathname,
  yv = ({ ssrPath: e } = {}) => Fp(Dc, e ? () => e : Dc),
  vv = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? eu : Ja](n, "", e),
  wv = (e = {}) => [yv(e), vv],
  Ic = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ic] > "u") {
  for (const e of [Ja, eu]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return (r.arguments = arguments), dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Ic, { value: !0 });
}
const xv = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  zp = (e = "") => (e === "/" ? "" : e),
  Sv = (e, t) => (e[0] === "~" ? e.slice(1) : zp(t) + e),
  Ev = (e = "", t) => xv(Fc(zp(e)), Fc(t)),
  Fc = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  $p = {
    hook: wv,
    searchHook: gv,
    parser: qy,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  Up = v.createContext($p),
  us = () => v.useContext(Up),
  Bp = {},
  Vp = v.createContext(Bp),
  Cv = () => v.useContext(Vp),
  tu = (e) => {
    const [t, n] = e.hook(e);
    return [Ev(e.base, t), Ip((r, o) => n(Sv(r, e.base), o))];
  },
  Wp = (e, t, n, r) => {
    const { pattern: o, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      s = o.exec(n) || [],
      [l, ...a] = s;
    return l !== void 0
      ? [
          !0,
          (() => {
            const u =
              i !== !1
                ? Object.fromEntries(i.map((f, h) => [f, a[h]]))
                : s.groups;
            let c = { ...a };
            return u && Object.assign(c, u), c;
          })(),
          ...(r ? [l] : []),
        ]
      : [!1, null];
  },
  kv = ({ children: e, ...t }) => {
    var c, f;
    const n = us(),
      r = t.hook ? $p : n;
    let o = r;
    const [i, s] = ((c = t.ssrPath) == null ? void 0 : c.split("?")) ?? [];
    s && ((t.ssrSearch = s), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs));
    let l = v.useRef({}),
      a = l.current,
      u = a;
    for (let h in r) {
      const y = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      a === u && y !== u[h] && (l.current = u = { ...u }),
        (u[h] = y),
        y !== r[h] && (o = u);
    }
    return v.createElement(Up.Provider, { value: o, children: e });
  },
  zc = ({ children: e, component: t }, n) =>
    t ? v.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  Pv = (e) => {
    let t = v.useRef(Bp),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), (t.current = n);
  },
  $c = ({ path: e, nest: t, match: n, ...r }) => {
    const o = us(),
      [i] = tu(o),
      [s, l, a] = n ?? Wp(o.parser, e, i, t),
      u = Pv({ ...Cv(), ...l });
    if (!s) return null;
    const c = a ? v.createElement(kv, { base: a }, zc(r, u)) : zc(r, u);
    return v.createElement(Vp.Provider, { value: u, children: c });
  };
v.forwardRef((e, t) => {
  const n = us(),
    [r, o] = tu(n),
    {
      to: i = "",
      href: s = i,
      onClick: l,
      asChild: a,
      children: u,
      className: c,
      replace: f,
      state: h,
      ...y
    } = e,
    w = Ip((S) => {
      S.ctrlKey ||
        S.metaKey ||
        S.altKey ||
        S.shiftKey ||
        S.button !== 0 ||
        (l == null || l(S),
        S.defaultPrevented || (S.preventDefault(), o(s, e)));
    }),
    g = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
  return a && v.isValidElement(u)
    ? v.cloneElement(u, { onClick: w, href: g })
    : v.createElement("a", {
        ...y,
        onClick: w,
        href: g,
        className: c != null && c.call ? c(r === s) : c,
        children: u,
        ref: t,
      });
});
const Hp = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => Hp(t && t.type === v.Fragment ? t.props.children : t))
      : [e],
  Tv = ({ children: e, location: t }) => {
    const n = us(),
      [r] = tu(n);
    for (const o of Hp(e)) {
      let i = 0;
      if (
        v.isValidElement(o) &&
        (i = Wp(n.parser, o.props.path, t || r, o.props.nest))[0]
      )
        return v.cloneElement(o, { match: i });
    }
    return null;
  };
var cs = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ds = typeof window > "u" || "Deno" in globalThis;
function tt() {}
function Nv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rv(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function _v(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Uc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bc(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== nu(s, t.options)) return !1;
    } else if (!So(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Vc(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (xo(t.options.mutationKey) !== xo(i)) return !1;
    } else if (!So(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function nu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || xo)(e);
}
function xo(e) {
  return JSON.stringify(e, (t, n) =>
    Yl(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function So(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !So(e[n], t[n]))
    : !1;
}
function Qp(e, t) {
  if (e === t) return e;
  const n = Wc(e) && Wc(t);
  if (n || (Yl(e) && Yl(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const c = n ? u : i[u];
      ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((l[c] = void 0), a++)
        : ((l[c] = Qp(e[c], t[c])), l[c] === e[c] && e[c] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function Wc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yl(e) {
  if (!Hc(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Hc(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Hc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ov(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Av(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Qp(e, t)
    : t;
}
function Mv(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function jv(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ru = Symbol();
function Kp(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ru
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Cn,
  Kt,
  ir,
  fd,
  Lv =
    ((fd = class extends cs {
      constructor() {
        super();
        K(this, Cn);
        K(this, Kt);
        K(this, ir);
        F(this, ir, (t) => {
          if (!ds && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Kt) || this.setEventListener(T(this, ir));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Kt)) == null || t.call(this), F(this, Kt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, ir, t),
          (n = T(this, Kt)) == null || n.call(this),
          F(
            this,
            Kt,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        T(this, Cn) !== t && (F(this, Cn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, Cn) == "boolean"
          ? T(this, Cn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Cn = new WeakMap()),
    (Kt = new WeakMap()),
    (ir = new WeakMap()),
    fd),
  Gp = new Lv(),
  sr,
  Gt,
  lr,
  pd,
  Dv =
    ((pd = class extends cs {
      constructor() {
        super();
        K(this, sr, !0);
        K(this, Gt);
        K(this, lr);
        F(this, lr, (t) => {
          if (!ds && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Gt) || this.setEventListener(T(this, lr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Gt)) == null || t.call(this), F(this, Gt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, lr, t),
          (n = T(this, Gt)) == null || n.call(this),
          F(this, Gt, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        T(this, sr) !== t &&
          (F(this, sr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return T(this, sr);
      }
    }),
    (sr = new WeakMap()),
    (Gt = new WeakMap()),
    (lr = new WeakMap()),
    pd),
  Ui = new Dv();
function Iv() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Fv(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yp(e) {
  return (e ?? "online") === "online" ? Ui.isOnline() : !0;
}
var Xp = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ys(e) {
  return e instanceof Xp;
}
function qp(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Iv(),
    s = (g) => {
      var S;
      r || (h(new Xp(g)), (S = e.abort) == null || S.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Gp.isFocused() &&
      (e.networkMode === "always" || Ui.isOnline()) &&
      e.canRun(),
    c = () => Yp(e.networkMode) && e.canRun(),
    f = (g) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onSuccess) == null || S.call(e, g),
        o == null || o(),
        i.resolve(g));
    },
    h = (g) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onError) == null || S.call(e, g),
        o == null || o(),
        i.reject(g));
    },
    y = () =>
      new Promise((g) => {
        var S;
        (o = (p) => {
          (r || u()) && g(p);
        }),
          (S = e.onPause) == null || S.call(e);
      }).then(() => {
        var g;
        (o = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    w = () => {
      if (r) return;
      let g;
      const S = n === 0 ? e.initialPromise : void 0;
      try {
        g = S ?? e.fn();
      } catch (p) {
        g = Promise.reject(p);
      }
      Promise.resolve(g)
        .then(f)
        .catch((p) => {
          var k;
          if (r) return;
          const d = e.retry ?? (ds ? 0 : 3),
            m = e.retryDelay ?? Fv,
            E = typeof m == "function" ? m(n, p) : m,
            C =
              d === !0 ||
              (typeof d == "number" && n < d) ||
              (typeof d == "function" && d(n, p));
          if (t || !C) {
            h(p);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, p),
            Ov(E)
              .then(() => (u() ? void 0 : y()))
              .then(() => {
                t ? h(p) : w();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? w() : y().then(w), i),
  };
}
function zv() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var ke = zv(),
  kn,
  hd,
  Zp =
    ((hd = class {
      constructor() {
        K(this, kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Rv(this.gcTime) &&
            F(
              this,
              kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ds ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        T(this, kn) && (clearTimeout(T(this, kn)), F(this, kn, void 0));
      }
    }),
    (kn = new WeakMap()),
    hd),
  ar,
  ur,
  He,
  we,
  ko,
  Pn,
  nt,
  Pt,
  md,
  $v =
    ((md = class extends Zp {
      constructor(t) {
        super();
        K(this, nt);
        K(this, ar);
        K(this, ur);
        K(this, He);
        K(this, we);
        K(this, ko);
        K(this, Pn);
        F(this, Pn, !1),
          F(this, ko, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, He, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, ar, Bv(this.options)),
          (this.state = t.state ?? T(this, ar)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, we)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...T(this, ko), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, He).remove(this);
      }
      setData(t, n) {
        const r = Av(this.state.data, t, this.options);
        return (
          ge(this, nt, Pt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ge(this, nt, Pt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = T(this, we)) == null ? void 0 : r.promise;
        return (
          (o = T(this, we)) == null || o.cancel(t),
          n ? n.then(tt).catch(tt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(T(this, ar));
      }
      isActive() {
        return this.observers.some((t) => bv(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ru ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !_v(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, we)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, we)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, He).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (T(this, we) &&
              (T(this, Pn)
                ? T(this, we).cancel({ revert: !0 })
                : T(this, we).cancelRetry()),
            this.scheduleGc()),
          T(this, He).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ge(this, nt, Pt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, c;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, we))
            return T(this, we).continueRetry(), T(this, we).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (F(this, Pn, !0), r.signal),
            });
          },
          i = () => {
            const f = Kp(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(h),
              F(this, Pn, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          F(this, ur, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            ge(this, nt, Pt).call(this, {
              type: "fetch",
              meta: (c = s.fetchOptions) == null ? void 0 : c.meta,
            });
        const l = (f) => {
          var h, y, w, g;
          (Ys(f) && f.silent) ||
            ge(this, nt, Pt).call(this, { type: "error", error: f }),
            Ys(f) ||
              ((y = (h = T(this, He).config).onError) == null ||
                y.call(h, f, this),
              (g = (w = T(this, He).config).onSettled) == null ||
                g.call(w, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          F(
            this,
            we,
            qp({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, y, w, g;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (S) {
                  l(S);
                  return;
                }
                (y = (h = T(this, He).config).onSuccess) == null ||
                  y.call(h, f, this),
                  (g = (w = T(this, He).config).onSettled) == null ||
                    g.call(w, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                ge(this, nt, Pt).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                ge(this, nt, Pt).call(this, { type: "pause" });
              },
              onContinue: () => {
                ge(this, nt, Pt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          T(this, we).start()
        );
      }
    }),
    (ar = new WeakMap()),
    (ur = new WeakMap()),
    (He = new WeakMap()),
    (we = new WeakMap()),
    (ko = new WeakMap()),
    (Pn = new WeakMap()),
    (nt = new WeakSet()),
    (Pt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Uv(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Ys(o) && o.revert && T(this, ur)
              ? { ...T(this, ur), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        ke.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            T(this, He).notify({ query: this, type: "updated", action: t });
        });
    }),
    md);
function Uv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yp(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Bv(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pt,
  gd,
  Vv =
    ((gd = class extends cs {
      constructor(t = {}) {
        super();
        K(this, pt);
        (this.config = t), F(this, pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? nu(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new $v({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        T(this, pt).has(t.queryHash) ||
          (T(this, pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = T(this, pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && T(this, pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, pt).get(t);
      }
      getAll() {
        return [...T(this, pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Bc(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Bc(t, r)) : n;
      }
      notify(t) {
        ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (pt = new WeakMap()),
    gd),
  ht,
  Ee,
  Tn,
  mt,
  Bt,
  yd,
  Wv =
    ((yd = class extends Zp {
      constructor(t) {
        super();
        K(this, mt);
        K(this, ht);
        K(this, Ee);
        K(this, Tn);
        (this.mutationId = t.mutationId),
          F(this, Ee, t.mutationCache),
          F(this, ht, []),
          (this.state = t.state || Hv()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, ht).includes(t) ||
          (T(this, ht).push(t),
          this.clearGcTimeout(),
          T(this, Ee).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          ht,
          T(this, ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          T(this, Ee).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        T(this, ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, Ee).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, Tn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, l, a, u, c, f, h, y, w, g, S, p, d, m, E, C, k, P;
        F(
          this,
          Tn,
          qp({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, j) => {
              ge(this, mt, Bt).call(this, {
                type: "failed",
                failureCount: R,
                error: j,
              });
            },
            onPause: () => {
              ge(this, mt, Bt).call(this, { type: "pause" });
            },
            onContinue: () => {
              ge(this, mt, Bt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Ee).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !T(this, Tn).canStart();
        try {
          if (!n) {
            ge(this, mt, Bt).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = T(this, Ee).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const j = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            j !== this.state.context &&
              ge(this, mt, Bt).call(this, {
                type: "pending",
                context: j,
                variables: t,
                isPaused: r,
              });
          }
          const R = await T(this, Tn).start();
          return (
            await ((u = (a = T(this, Ee).config).onSuccess) == null
              ? void 0
              : u.call(a, R, t, this.state.context, this)),
            await ((f = (c = this.options).onSuccess) == null
              ? void 0
              : f.call(c, R, t, this.state.context)),
            await ((y = (h = T(this, Ee).config).onSettled) == null
              ? void 0
              : y.call(
                  h,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((g = (w = this.options).onSettled) == null
              ? void 0
              : g.call(w, R, null, t, this.state.context)),
            ge(this, mt, Bt).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              (await ((p = (S = T(this, Ee).config).onError) == null
                ? void 0
                : p.call(S, R, t, this.state.context, this)),
              await ((m = (d = this.options).onError) == null
                ? void 0
                : m.call(d, R, t, this.state.context)),
              await ((C = (E = T(this, Ee).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    R,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, R, t, this.state.context)),
              R)
            );
          } finally {
            ge(this, mt, Bt).call(this, { type: "error", error: R });
          }
        } finally {
          T(this, Ee).runNext(this);
        }
      }
    }),
    (ht = new WeakMap()),
    (Ee = new WeakMap()),
    (Tn = new WeakMap()),
    (mt = new WeakSet()),
    (Bt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        ke.batch(() => {
          T(this, ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            T(this, Ee).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    yd);
function Hv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Le,
  Po,
  vd,
  Qv =
    ((vd = class extends cs {
      constructor(t = {}) {
        super();
        K(this, Le);
        K(this, Po);
        (this.config = t), F(this, Le, new Map()), F(this, Po, Date.now());
      }
      build(t, n, r) {
        const o = new Wv({
          mutationCache: this,
          mutationId: ++jo(this, Po)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = Zo(t),
          r = T(this, Le).get(n) ?? [];
        r.push(t),
          T(this, Le).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = Zo(t);
        if (T(this, Le).has(n)) {
          const o =
            (r = T(this, Le).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? T(this, Le).delete(n) : T(this, Le).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = T(this, Le).get(Zo(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = T(this, Le).get(Zo(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...T(this, Le).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Vc(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Vc(t, n));
      }
      notify(t) {
        ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ke.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(tt)))
        );
      }
    }),
    (Le = new WeakMap()),
    (Po = new WeakMap()),
    vd);
function Zo(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Qc(e) {
  return {
    onFetch: (t, n) => {
      var c, f, h, y, w;
      const r = t.options,
        o =
          (h =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let g = !1;
        const S = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          p = Kp(t.options, t.fetchOptions),
          d = async (m, E, C) => {
            if (g) return Promise.reject();
            if (E == null && m.pages.length) return Promise.resolve(m);
            const k = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            S(k);
            const P = await p(k),
              { maxPages: R } = t.options,
              j = C ? jv : Mv;
            return {
              pages: j(m.pages, P, R),
              pageParams: j(m.pageParams, E, R),
            };
          };
        if (o && i.length) {
          const m = o === "backward",
            E = m ? Kv : Kc,
            C = { pages: i, pageParams: s },
            k = E(r, C);
          l = await d(C, k, m);
        } else {
          const m = e ?? i.length;
          do {
            const E = a === 0 ? s[0] ?? r.initialPageParam : Kc(r, l);
            if (a > 0 && E == null) break;
            (l = await d(l, E)), a++;
          } while (a < m);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, S;
            return (S = (g = t.options).persister) == null
              ? void 0
              : S.call(
                  g,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Kc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Kv(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var oe,
  Yt,
  Xt,
  cr,
  dr,
  qt,
  fr,
  pr,
  wd,
  Gv =
    ((wd = class {
      constructor(e = {}) {
        K(this, oe);
        K(this, Yt);
        K(this, Xt);
        K(this, cr);
        K(this, dr);
        K(this, qt);
        K(this, fr);
        K(this, pr);
        F(this, oe, e.queryCache || new Vv()),
          F(this, Yt, e.mutationCache || new Qv()),
          F(this, Xt, e.defaultOptions || {}),
          F(this, cr, new Map()),
          F(this, dr, new Map()),
          F(this, qt, 0);
      }
      mount() {
        jo(this, qt)._++,
          T(this, qt) === 1 &&
            (F(
              this,
              fr,
              Gp.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, oe).onFocus());
              })
            ),
            F(
              this,
              pr,
              Ui.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, oe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        jo(this, qt)._--,
          T(this, qt) === 0 &&
            ((e = T(this, fr)) == null || e.call(this),
            F(this, fr, void 0),
            (t = T(this, pr)) == null || t.call(this),
            F(this, pr, void 0));
      }
      isFetching(e) {
        return T(this, oe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, Yt).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, oe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = T(this, oe).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Uc(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return T(this, oe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = T(this, oe).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = Nv(t, i);
        if (s !== void 0)
          return T(this, oe)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ke.batch(() =>
          T(this, oe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, oe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = T(this, oe);
        ke.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = T(this, oe),
          r = { type: "active", ...e };
        return ke.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = ke.batch(() =>
            T(this, oe)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(tt).catch(tt);
      }
      invalidateQueries(e = {}, t = {}) {
        return ke.batch(() => {
          if (
            (T(this, oe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = ke.batch(() =>
            T(this, oe)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(tt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(tt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, oe).build(this, t);
        return n.isStaleByTime(Uc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(tt).catch(tt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Qc(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(tt).catch(tt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Qc(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ui.isOnline()
          ? T(this, Yt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, oe);
      }
      getMutationCache() {
        return T(this, Yt);
      }
      getDefaultOptions() {
        return T(this, Xt);
      }
      setDefaultOptions(e) {
        F(this, Xt, e);
      }
      setQueryDefaults(e, t) {
        T(this, cr).set(xo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, cr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            So(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        T(this, dr).set(xo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, dr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            So(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, Xt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = nu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === ru && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, Xt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        T(this, oe).clear(), T(this, Yt).clear();
      }
    }),
    (oe = new WeakMap()),
    (Yt = new WeakMap()),
    (Xt = new WeakMap()),
    (cr = new WeakMap()),
    (dr = new WeakMap()),
    (qt = new WeakMap()),
    (fr = new WeakMap()),
    (pr = new WeakMap()),
    wd),
  Yv = v.createContext(void 0),
  Xv = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    x.jsx(Yv.Provider, { value: e, children: t })
  );
async function qv(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const Zv =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t.join("/"), { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await qv(n), await n.json());
    },
  Jv = new Gv({
    defaultOptions: {
      queries: {
        queryFn: Zv({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  e0 = 1,
  t0 = 1e6;
let Xs = 0;
function n0() {
  return (Xs = (Xs + 1) % Number.MAX_SAFE_INTEGER), Xs.toString();
}
const qs = new Map(),
  Gc = (e) => {
    if (qs.has(e)) return;
    const t = setTimeout(() => {
      qs.delete(e), to({ type: "REMOVE_TOAST", toastId: e });
    }, t0);
    qs.set(e, t);
  },
  r0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, e0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Gc(n)
            : e.toasts.forEach((r) => {
                Gc(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  hi = [];
let mi = { toasts: [] };
function to(e) {
  (mi = r0(mi, e)),
    hi.forEach((t) => {
      t(mi);
    });
}
function o0({ ...e }) {
  const t = n0(),
    n = (o) => to({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => to({ type: "DISMISS_TOAST", toastId: t });
  return (
    to({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Jp() {
  const [e, t] = v.useState(mi);
  return (
    v.useEffect(
      () => (
        hi.push(t),
        () => {
          const n = hi.indexOf(t);
          n > -1 && hi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: o0,
      dismiss: (n) => to({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Yc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function eh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Yc(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Yc(e[o], null);
        }
      };
  };
}
function at(...e) {
  return v.useCallback(eh(...e), e);
}
function fs(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = v.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var p;
      const { scope: h, children: y, ...w } = f,
        g = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[a]) || l,
        S = v.useMemo(() => w, Object.values(w));
      return x.jsx(g.Provider, { value: S, children: y });
    };
    u.displayName = i + "Provider";
    function c(f, h) {
      var g;
      const y = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[a]) || l,
        w = v.useContext(y);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, i0(o, ...t)];
}
function i0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Bi(e) {
  const t = l0(e),
    n = v.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = v.Children.toArray(i),
        a = l.find(u0);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return x.jsx(t, {
          ...s,
          ref: o,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, c) : null,
        });
      }
      return x.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var s0 = Bi("Slot");
function l0(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (v.isValidElement(o)) {
      const s = d0(o),
        l = c0(i, o.props);
      return (
        o.type !== v.Fragment && (l.ref = r ? eh(r, s) : s),
        v.cloneElement(o, l)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var th = Symbol("radix.slottable");
function a0(e) {
  const t = ({ children: n }) => x.jsx(x.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = th), t;
}
function u0(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === th
  );
}
function c0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function d0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function f0(e) {
  const t = e + "CollectionProvider",
    [n, r] = fs(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: S, children: p } = g,
        d = Ut.useRef(null),
        m = Ut.useRef(new Map()).current;
      return x.jsx(o, { scope: S, itemMap: m, collectionRef: d, children: p });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Bi(l),
    u = Ut.forwardRef((g, S) => {
      const { scope: p, children: d } = g,
        m = i(l, p),
        E = at(S, m.collectionRef);
      return x.jsx(a, { ref: E, children: d });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = Bi(c),
    y = Ut.forwardRef((g, S) => {
      const { scope: p, children: d, ...m } = g,
        E = Ut.useRef(null),
        C = at(S, E),
        k = i(c, p);
      return (
        Ut.useEffect(
          () => (
            k.itemMap.set(E, { ref: E, ...m }), () => void k.itemMap.delete(E)
          )
        ),
        x.jsx(h, { [f]: "", ref: C, children: d })
      );
    });
  y.displayName = c;
  function w(g) {
    const S = i(e + "CollectionConsumer", g);
    return Ut.useCallback(() => {
      const d = S.collectionRef.current;
      if (!d) return [];
      const m = Array.from(d.querySelectorAll(`[${f}]`));
      return Array.from(S.itemMap.values()).sort(
        (k, P) => m.indexOf(k.ref.current) - m.indexOf(P.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: y }, w, r];
}
var p0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Me = p0.reduce((e, t) => {
    const n = Bi(`Primitive.${t}`),
      r = v.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          x.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function nh(e, t) {
  e && Oo.flushSync(() => e.dispatchEvent(t));
}
function xt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function h0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var m0 = "DismissableLayer",
  Xl = "dismissableLayer.update",
  g0 = "dismissableLayer.pointerDownOutside",
  y0 = "dismissableLayer.focusOutside",
  Xc,
  rh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ou = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = v.useContext(rh),
      [c, f] = v.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = v.useState({}),
      w = at(t, (P) => f(P)),
      g = Array.from(u.layers),
      [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = g.indexOf(S),
      d = c ? g.indexOf(c) : -1,
      m = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = d >= p,
      C = w0((P) => {
        const R = P.target,
          j = [...u.branches].some((A) => A.contains(R));
        !E ||
          j ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h),
      k = x0((P) => {
        const R = P.target;
        [...u.branches].some((A) => A.contains(R)) ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h);
    return (
      h0((P) => {
        d === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, h),
      v.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Xc = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            qc(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Xc);
            }
          );
      }, [c, h, n, u]),
      v.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            qc());
        },
        [c, u]
      ),
      v.useEffect(() => {
        const P = () => y({});
        return (
          document.addEventListener(Xl, P),
          () => document.removeEventListener(Xl, P)
        );
      }, []),
      x.jsx(Me.div, {
        ...a,
        ref: w,
        style: {
          pointerEvents: m ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ue(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ue(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ue(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
ou.displayName = m0;
var v0 = "DismissableLayerBranch",
  oh = v.forwardRef((e, t) => {
    const n = v.useContext(rh),
      r = v.useRef(null),
      o = at(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      x.jsx(Me.div, { ...e, ref: o })
    );
  });
oh.displayName = v0;
function w0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xt(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              ih(g0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function x0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          ih(y0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function qc() {
  const e = new CustomEvent(Xl);
  document.dispatchEvent(e);
}
function ih(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? nh(o, i) : o.dispatchEvent(i);
}
var S0 = ou,
  E0 = oh,
  jn = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  C0 = "Portal",
  sh = v.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = v.useState(!1);
    jn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Xy.createPortal(x.jsx(Me.div, { ...r, ref: t }), s) : null;
  });
sh.displayName = C0;
function k0(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var iu = (e) => {
  const { present: t, children: n } = e,
    r = P0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = at(r.ref, T0(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: i })
    : null;
};
iu.displayName = "Presence";
function P0(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    o = v.useRef(e),
    i = v.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = k0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = Jo(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    jn(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          y = Jo(u);
        e
          ? a("MOUNT")
          : y === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && h !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    jn(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (y) => {
            const g = Jo(r.current).includes(y.animationName);
            if (y.target === t && g && (a("ANIMATION_END"), !o.current)) {
              const S = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = S);
                }));
            }
          },
          h = (y) => {
            y.target === t && (i.current = Jo(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: v.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Jo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function T0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function N0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = R0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = xt(n),
    a = v.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && l(f);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function R0({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    o = v.useRef(r),
    i = xt(t);
  return (
    v.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var _0 = "VisuallyHidden",
  ps = v.forwardRef((e, t) =>
    x.jsx(Me.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
ps.displayName = _0;
var b0 = ps,
  su = "ToastProvider",
  [lu, O0, A0] = f0("Toast"),
  [lh, A1] = fs("Toast", [A0]),
  [M0, hs] = lh(su),
  ah = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = v.useState(null),
      [u, c] = v.useState(0),
      f = v.useRef(!1),
      h = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${su}\`. Expected non-empty \`string\`.`
        ),
      x.jsx(lu.Provider, {
        scope: t,
        children: x.jsx(M0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: v.useCallback(() => c((y) => y + 1), []),
          onToastRemove: v.useCallback(() => c((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: s,
        }),
      })
    );
  };
ah.displayName = su;
var uh = "ToastViewport",
  j0 = ["F8"],
  ql = "toast.viewportPause",
  Zl = "toast.viewportResume",
  ch = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = j0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = hs(uh, n),
      l = O0(n),
      a = v.useRef(null),
      u = v.useRef(null),
      c = v.useRef(null),
      f = v.useRef(null),
      h = at(t, f, s.onViewportChange),
      y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    v.useEffect(() => {
      const S = (p) => {
        var m;
        r.length !== 0 &&
          r.every((E) => p[E] || p.code === E) &&
          ((m = f.current) == null || m.focus());
      };
      return (
        document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
      );
    }, [r]),
      v.useEffect(() => {
        const S = a.current,
          p = f.current;
        if (w && S && p) {
          const d = () => {
              if (!s.isClosePausedRef.current) {
                const k = new CustomEvent(ql);
                p.dispatchEvent(k), (s.isClosePausedRef.current = !0);
              }
            },
            m = () => {
              if (s.isClosePausedRef.current) {
                const k = new CustomEvent(Zl);
                p.dispatchEvent(k), (s.isClosePausedRef.current = !1);
              }
            },
            E = (k) => {
              !S.contains(k.relatedTarget) && m();
            },
            C = () => {
              S.contains(document.activeElement) || m();
            };
          return (
            S.addEventListener("focusin", d),
            S.addEventListener("focusout", E),
            S.addEventListener("pointermove", d),
            S.addEventListener("pointerleave", C),
            window.addEventListener("blur", d),
            window.addEventListener("focus", m),
            () => {
              S.removeEventListener("focusin", d),
                S.removeEventListener("focusout", E),
                S.removeEventListener("pointermove", d),
                S.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", d),
                window.removeEventListener("focus", m);
            }
          );
        }
      }, [w, s.isClosePausedRef]);
    const g = v.useCallback(
      ({ tabbingDirection: S }) => {
        const d = l().map((m) => {
          const E = m.ref.current,
            C = [E, ...K0(E)];
          return S === "forwards" ? C : C.reverse();
        });
        return (S === "forwards" ? d.reverse() : d).flat();
      },
      [l]
    );
    return (
      v.useEffect(() => {
        const S = f.current;
        if (S) {
          const p = (d) => {
            var C, k, P;
            const m = d.altKey || d.ctrlKey || d.metaKey;
            if (d.key === "Tab" && !m) {
              const R = document.activeElement,
                j = d.shiftKey;
              if (d.target === S && j) {
                (C = u.current) == null || C.focus();
                return;
              }
              const L = g({ tabbingDirection: j ? "backwards" : "forwards" }),
                V = L.findIndex((M) => M === R);
              Zs(L.slice(V + 1))
                ? d.preventDefault()
                : j
                ? (k = u.current) == null || k.focus()
                : (P = c.current) == null || P.focus();
            }
          };
          return (
            S.addEventListener("keydown", p),
            () => S.removeEventListener("keydown", p)
          );
        }
      }, [l, g]),
      x.jsxs(E0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            x.jsx(Jl, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "forwards" });
                Zs(S);
              },
            }),
          x.jsx(lu.Slot, {
            scope: n,
            children: x.jsx(Me.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          w &&
            x.jsx(Jl, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "backwards" });
                Zs(S);
              },
            }),
        ],
      })
    );
  });
ch.displayName = uh;
var dh = "ToastFocusProxy",
  Jl = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = hs(dh, n);
    return x.jsx(ps, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Jl.displayName = dh;
var ms = "Toast",
  L0 = "toast.swipeStart",
  D0 = "toast.swipeMove",
  I0 = "toast.swipeCancel",
  F0 = "toast.swipeEnd",
  fh = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = N0({ prop: r, defaultProp: o, onChange: i });
    return x.jsx(iu, {
      present: n || l,
      children: x.jsx(U0, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: xt(e.onPause),
        onResume: xt(e.onResume),
        onSwipeStart: ue(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ue(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: ue(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ue(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
fh.displayName = ms;
var [z0, $0] = lh(ms, { onClose() {} }),
  U0 = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: y,
        ...w
      } = e,
      g = hs(ms, n),
      [S, p] = v.useState(null),
      d = at(t, (M) => p(M)),
      m = v.useRef(null),
      E = v.useRef(null),
      C = o || g.duration,
      k = v.useRef(0),
      P = v.useRef(C),
      R = v.useRef(0),
      { onToastAdd: j, onToastRemove: A } = g,
      z = xt(() => {
        var Q;
        (S == null ? void 0 : S.contains(document.activeElement)) &&
          ((Q = g.viewport) == null || Q.focus()),
          s();
      }),
      L = v.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(R.current),
            (k.current = new Date().getTime()),
            (R.current = window.setTimeout(z, M)));
        },
        [z]
      );
    v.useEffect(() => {
      const M = g.viewport;
      if (M) {
        const Q = () => {
            L(P.current), u == null || u();
          },
          U = () => {
            const H = new Date().getTime() - k.current;
            (P.current = P.current - H),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          M.addEventListener(ql, U),
          M.addEventListener(Zl, Q),
          () => {
            M.removeEventListener(ql, U), M.removeEventListener(Zl, Q);
          }
        );
      }
    }, [g.viewport, C, a, u, L]),
      v.useEffect(() => {
        i && !g.isClosePausedRef.current && L(C);
      }, [i, C, g.isClosePausedRef, L]),
      v.useEffect(() => (j(), () => A()), [j, A]);
    const V = v.useMemo(() => (S ? wh(S) : null), [S]);
    return g.viewport
      ? x.jsxs(x.Fragment, {
          children: [
            V &&
              x.jsx(B0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            x.jsx(z0, {
              scope: n,
              onClose: z,
              children: Oo.createPortal(
                x.jsx(lu.ItemSlot, {
                  scope: n,
                  children: x.jsx(S0, {
                    asChild: !0,
                    onEscapeKeyDown: ue(l, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || z(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: x.jsx(Me.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...w,
                      ref: d,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ue(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ue(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (m.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: ue(e.onPointerMove, (M) => {
                        if (!m.current) return;
                        const Q = M.clientX - m.current.x,
                          U = M.clientY - m.current.y,
                          H = !!E.current,
                          N = ["left", "right"].includes(g.swipeDirection),
                          b = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = N ? b(0, Q) : 0,
                          $ = N ? 0 : b(0, U),
                          J = M.pointerType === "touch" ? 10 : 2,
                          Ze = { x: D, y: $ },
                          We = { originalEvent: M, delta: Ze };
                        H
                          ? ((E.current = Ze), ei(D0, f, We, { discrete: !1 }))
                          : Zc(Ze, g.swipeDirection, J)
                          ? ((E.current = Ze),
                            ei(L0, c, We, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(Q) > J || Math.abs(U) > J) &&
                            (m.current = null);
                      }),
                      onPointerUp: ue(e.onPointerUp, (M) => {
                        const Q = E.current,
                          U = M.target;
                        if (
                          (U.hasPointerCapture(M.pointerId) &&
                            U.releasePointerCapture(M.pointerId),
                          (E.current = null),
                          (m.current = null),
                          Q)
                        ) {
                          const H = M.currentTarget,
                            N = { originalEvent: M, delta: Q };
                          Zc(Q, g.swipeDirection, g.swipeThreshold)
                            ? ei(F0, y, N, { discrete: !0 })
                            : ei(I0, h, N, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (b) => b.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  B0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = hs(ms, t),
      [i, s] = v.useState(!1),
      [l, a] = v.useState(!1);
    return (
      H0(() => s(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : x.jsx(sh, {
            asChild: !0,
            children: x.jsx(ps, {
              ...r,
              children:
                i && x.jsxs(x.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  V0 = "ToastTitle",
  ph = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return x.jsx(Me.div, { ...r, ref: t });
  });
ph.displayName = V0;
var W0 = "ToastDescription",
  hh = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return x.jsx(Me.div, { ...r, ref: t });
  });
hh.displayName = W0;
var mh = "ToastAction",
  gh = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? x.jsx(vh, {
          altText: n,
          asChild: !0,
          children: x.jsx(au, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${mh}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
gh.displayName = mh;
var yh = "ToastClose",
  au = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = $0(yh, n);
    return x.jsx(vh, {
      asChild: !0,
      children: x.jsx(Me.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ue(e.onClick, o.onClose),
      }),
    });
  });
au.displayName = yh;
var vh = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return x.jsx(Me.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function wh(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Q0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...wh(r));
      }
    }),
    t
  );
}
function ei(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? nh(o, i) : o.dispatchEvent(i);
}
var Zc = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function H0(e = () => {}) {
  const t = xt(e);
  jn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Q0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function K0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zs(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var G0 = ah,
  xh = ch,
  Sh = fh,
  Eh = ph,
  Ch = hh,
  kh = gh,
  Ph = au;
function Th(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Th(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Nh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Th(e)) && (r && (r += " "), (r += t));
  return r;
}
const Jc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  ed = Nh,
  Rh = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ed(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = Jc(c) || Jc(f);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, h] = c;
          return h === void 0 || (u[f] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: h, ...y } = c;
              return Object.entries(y).every((w) => {
                let [g, S] = w;
                return Array.isArray(S)
                  ? S.includes({ ...i, ...l }[g])
                  : { ...i, ...l }[g] === S;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return ed(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _h = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var X0 = {
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
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q0 = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    v.createElement(
      "svg",
      {
        ref: a,
        ...X0,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: _h("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => v.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bh = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, i) =>
    v.createElement(q0, {
      ref: i,
      iconNode: t,
      className: _h(`lucide-${Y0(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = bh("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = bh("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  uu = "-",
  ew = (e) => {
    const t = nw(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(uu);
        return l[0] === "" && l.length !== 1 && l.shift(), Oh(l, t) || tw(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  Oh = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Oh(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(uu);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  td = /^\[(.+)\]$/,
  tw = (e) => {
    if (td.test(e)) {
      const t = td.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  nw = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      ow(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        ea(s, r, i, t);
      }),
      r
    );
  },
  ea = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : nd(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (rw(o)) {
          ea(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        ea(s, nd(t, i), n, r);
      });
    });
  },
  nd = (e, t) => {
    let n = e;
    return (
      t.split(uu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  rw = (e) => e.isThemeGetter,
  ow = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  iw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Ah = "!",
  sw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let S = 0; S < l.length; S++) {
          let p = l[S];
          if (u === 0) {
            if (p === o && (r || l.slice(S, S + i) === t)) {
              a.push(l.slice(c, S)), (c = S + i);
              continue;
            }
            if (p === "/") {
              f = S;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(c),
          y = h.startsWith(Ah),
          w = y ? h.substring(1) : h,
          g = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: y,
          baseClassName: w,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  lw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  aw = (e) => ({ cache: iw(e.cacheSize), parseClassName: sw(e), ...ew(e) }),
  uw = /\s+/,
  cw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(uw);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: y,
        } = n(u);
      let w = !!y,
        g = r(w ? h.substring(0, y) : h);
      if (!g) {
        if (!w) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((g = r(h)), !g)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = !1;
      }
      const S = lw(c).join(":"),
        p = f ? S + Ah : S,
        d = p + g;
      if (i.includes(d)) continue;
      i.push(d);
      const m = o(g, w);
      for (let E = 0; E < m.length; ++E) {
        const C = m[E];
        i.push(p + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function dw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Mh(t)) && (r && (r += " "), (r += n));
  return r;
}
const Mh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Mh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function fw(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = aw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = cw(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(dw.apply(null, arguments));
  };
}
const X = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  jh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  pw = /^\d+\/\d+$/,
  hw = new Set(["px", "full", "screen"]),
  mw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  gw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  yw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  vw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ww =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  kt = (e) => rr(e) || hw.has(e) || pw.test(e),
  zt = (e) => Nr(e, "length", Nw),
  rr = (e) => !!e && !Number.isNaN(Number(e)),
  Js = (e) => Nr(e, "number", rr),
  $r = (e) => !!e && Number.isInteger(Number(e)),
  xw = (e) => e.endsWith("%") && rr(e.slice(0, -1)),
  I = (e) => jh.test(e),
  $t = (e) => mw.test(e),
  Sw = new Set(["length", "size", "percentage"]),
  Ew = (e) => Nr(e, Sw, Lh),
  Cw = (e) => Nr(e, "position", Lh),
  kw = new Set(["image", "url"]),
  Pw = (e) => Nr(e, kw, _w),
  Tw = (e) => Nr(e, "", Rw),
  Ur = () => !0,
  Nr = (e, t, n) => {
    const r = jh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Nw = (e) => gw.test(e) && !yw.test(e),
  Lh = () => !1,
  Rw = (e) => vw.test(e),
  _w = (e) => ww.test(e),
  bw = () => {
    const e = X("colors"),
      t = X("spacing"),
      n = X("blur"),
      r = X("brightness"),
      o = X("borderColor"),
      i = X("borderRadius"),
      s = X("borderSpacing"),
      l = X("borderWidth"),
      a = X("contrast"),
      u = X("grayscale"),
      c = X("hueRotate"),
      f = X("invert"),
      h = X("gap"),
      y = X("gradientColorStops"),
      w = X("gradientColorStopPositions"),
      g = X("inset"),
      S = X("margin"),
      p = X("opacity"),
      d = X("padding"),
      m = X("saturate"),
      E = X("scale"),
      C = X("sepia"),
      k = X("skew"),
      P = X("space"),
      R = X("translate"),
      j = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", I, t],
      L = () => [I, t],
      V = () => ["", kt, zt],
      M = () => ["auto", rr, I],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      b = () => ["", "0", I],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [rr, I];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ur],
        spacing: [kt, zt],
        blur: ["none", "", $t, I],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", $t, I],
        borderSpacing: L(),
        borderWidth: V(),
        contrast: $(),
        grayscale: b(),
        hueRotate: $(),
        invert: b(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [xw, zt],
        inset: z(),
        margin: z(),
        opacity: $(),
        padding: L(),
        saturate: $(),
        scale: $(),
        sepia: b(),
        skew: $(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", I] }],
        container: ["container"],
        columns: [{ columns: [$t] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), I] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: j() }],
        "overscroll-x": [{ "overscroll-x": j() }],
        "overscroll-y": [{ "overscroll-y": j() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", $r, I] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
        grow: [{ grow: b() }],
        shrink: [{ shrink: b() }],
        order: [{ order: ["first", "last", "none", $r, I] }],
        "grid-cols": [{ "grid-cols": [Ur] }],
        "col-start-end": [{ col: ["auto", { span: ["full", $r, I] }, I] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Ur] }],
        "row-start-end": [{ row: ["auto", { span: [$r, I] }, I] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [d] }],
        px: [{ px: [d] }],
        py: [{ py: [d] }],
        ps: [{ ps: [d] }],
        pe: [{ pe: [d] }],
        pt: [{ pt: [d] }],
        pr: [{ pr: [d] }],
        pb: [{ pb: [d] }],
        pl: [{ pl: [d] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] }],
        "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              I,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [$t] },
              $t,
            ],
          },
        ],
        h: [{ h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", $t, zt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Js,
            ],
          },
        ],
        "font-family": [{ font: [Ur] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              I,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", rr, Js] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              kt,
              I,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", I] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", kt, zt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", kt, I] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", I] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), Cw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ew] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Pw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [kt, I] }],
        "outline-w": [{ outline: [kt, zt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [kt, zt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", $t, Tw] }],
        "shadow-color": [{ shadow: [Ur] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", $t, I] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              I,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [$r, I] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              I,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", I] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [kt, zt, Js] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Ow = fw(bw);
function je(...e) {
  return Ow(Nh(e));
}
const Aw = G0,
  Dh = v.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(xh, {
      ref: n,
      className: je(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Dh.displayName = xh.displayName;
const Mw = Rh(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Ih = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    x.jsx(Sh, { ref: r, className: je(Mw({ variant: t }), e), ...n })
  );
Ih.displayName = Sh.displayName;
const jw = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(kh, {
    ref: n,
    className: je(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
jw.displayName = kh.displayName;
const Fh = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Ph, {
    ref: n,
    className: je(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: x.jsx(J0, { className: "h-4 w-4" }),
  })
);
Fh.displayName = Ph.displayName;
const zh = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Eh, { ref: n, className: je("text-sm font-semibold", e), ...t })
);
zh.displayName = Eh.displayName;
const $h = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(Ch, { ref: n, className: je("text-sm opacity-90", e), ...t })
);
$h.displayName = Ch.displayName;
function Lw() {
  const { toasts: e } = Jp();
  return x.jsxs(Aw, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return x.jsxs(
          Ih,
          {
            ...i,
            children: [
              x.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && x.jsx(zh, { children: n }),
                  r && x.jsx($h, { children: r }),
                ],
              }),
              o,
              x.jsx(Fh, {}),
            ],
          },
          t
        );
      }),
      x.jsx(Dh, {}),
    ],
  });
}
const Dw = ["top", "right", "bottom", "left"],
  dn = Math.min,
  Ie = Math.max,
  Vi = Math.round,
  ti = Math.floor,
  wt = (e) => ({ x: e, y: e }),
  Iw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Fw = { start: "end", end: "start" };
function ta(e, t, n) {
  return Ie(e, dn(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dt(e) {
  return e.split("-")[0];
}
function Rr(e) {
  return e.split("-")[1];
}
function cu(e) {
  return e === "x" ? "y" : "x";
}
function du(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  return ["top", "bottom"].includes(Dt(e)) ? "y" : "x";
}
function fu(e) {
  return cu(fn(e));
}
function zw(e, t, n) {
  n === void 0 && (n = !1);
  const r = Rr(e),
    o = fu(e),
    i = du(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Wi(s)), [s, Wi(s)];
}
function $w(e) {
  const t = Wi(e);
  return [na(e), t, na(t)];
}
function na(e) {
  return e.replace(/start|end/g, (t) => Fw[t]);
}
function Uw(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Bw(e, t, n, r) {
  const o = Rr(e);
  let i = Uw(Dt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(na)))), i
  );
}
function Wi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Iw[t]);
}
function Vw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Uh(e) {
  return typeof e != "number"
    ? Vw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Hi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function rd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = fn(t),
    s = fu(t),
    l = du(s),
    a = Dt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let y;
  switch (a) {
    case "top":
      y = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      y = { x: c, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: f };
      break;
    case "left":
      y = { x: r.x - o.width, y: f };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (Rr(t)) {
    case "start":
      y[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      y[s] += h * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const Ww = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = rd(u, r, a),
    h = r,
    y = {},
    w = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: S, fn: p } = l[g],
      {
        x: d,
        y: m,
        data: E,
        reset: C,
      } = await p({
        x: c,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: y,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = d ?? c),
      (f = m ?? f),
      (y = { ...y, [S]: { ...y[S], ...E } }),
      C &&
        w <= 50 &&
        (w++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: f } = rd(u, h, a))),
        (g = -1));
  }
  return { x: c, y: f, placement: h, strategy: o, middlewareData: y };
};
async function Eo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: y = 0,
    } = Lt(t, e),
    w = Uh(y),
    S = l[h ? (f === "floating" ? "reference" : "floating") : f],
    p = Hi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    d =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    m = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(m)))
      ? (await (i.getScale == null ? void 0 : i.getScale(m))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Hi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: d,
            offsetParent: m,
            strategy: a,
          })
        : d
    );
  return {
    top: (p.top - C.top + w.top) / E.y,
    bottom: (C.bottom - p.bottom + w.bottom) / E.y,
    left: (p.left - C.left + w.left) / E.x,
    right: (C.right - p.right + w.right) / E.x,
  };
}
const Hw = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Lt(e, t) || {};
      if (u == null) return {};
      const f = Uh(c),
        h = { x: n, y: r },
        y = fu(o),
        w = du(y),
        g = await s.getDimensions(u),
        S = y === "y",
        p = S ? "top" : "left",
        d = S ? "bottom" : "right",
        m = S ? "clientHeight" : "clientWidth",
        E = i.reference[w] + i.reference[y] - h[y] - i.floating[w],
        C = h[y] - i.reference[y],
        k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = k ? k[m] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
        (P = l.floating[m] || i.floating[w]);
      const R = E / 2 - C / 2,
        j = P / 2 - g[w] / 2 - 1,
        A = dn(f[p], j),
        z = dn(f[d], j),
        L = A,
        V = P - g[w] - z,
        M = P / 2 - g[w] / 2 + R,
        Q = ta(L, M, V),
        U =
          !a.arrow &&
          Rr(o) != null &&
          M !== Q &&
          i.reference[w] / 2 - (M < L ? A : z) - g[w] / 2 < 0,
        H = U ? (M < L ? M - L : M - V) : 0;
      return {
        [y]: h[y] + H,
        data: {
          [y]: Q,
          centerOffset: M - Q - H,
          ...(U && { alignmentOffset: H }),
        },
        reset: U,
      };
    },
  }),
  Qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: g = !0,
              ...S
            } = Lt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const p = Dt(o),
            d = fn(l),
            m = Dt(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = h || (m || !g ? [Wi(l)] : $w(l)),
            k = w !== "none";
          !h && k && C.push(...Bw(l, g, w, E));
          const P = [l, ...C],
            R = await Eo(t, S),
            j = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && j.push(R[p]), f)) {
            const M = zw(o, s, E);
            j.push(R[M[0]], R[M[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: j }]),
            !j.every((M) => M <= 0))
          ) {
            var z, L;
            const M = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = P[M];
            if (Q)
              return {
                data: { index: M, overflows: A },
                reset: { placement: Q },
              };
            let U =
              (L = A.filter((H) => H.overflows[0] <= 0).sort(
                (H, N) => H.overflows[1] - N.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!U)
              switch (y) {
                case "bestFit": {
                  var V;
                  const H =
                    (V = A.filter((N) => {
                      if (k) {
                        const b = fn(N.placement);
                        return b === d || b === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((b) => b > 0)
                          .reduce((b, D) => b + D, 0),
                      ])
                      .sort((N, b) => N[1] - b[1])[0]) == null
                      ? void 0
                      : V[0];
                  H && (U = H);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function od(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function id(e) {
  return Dw.some((t) => e[t] >= 0);
}
const Kw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Lt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Eo(t, { ...o, elementContext: "reference" }),
              s = od(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: id(s) },
            };
          }
          case "escaped": {
            const i = await Eo(t, { ...o, altBoundary: !0 }),
              s = od(i, n.floating);
            return { data: { escapedOffsets: s, escaped: id(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Gw(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Dt(n),
    l = Rr(n),
    a = fn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    f = Lt(t, e);
  let {
    mainAxis: h,
    crossAxis: y,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof w == "number" && (y = l === "end" ? w * -1 : w),
    a ? { x: y * c, y: h * u } : { x: h * u, y: y * c }
  );
}
const Yw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await Gw(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Xw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (S) => {
                  let { x: p, y: d } = S;
                  return { x: p, y: d };
                },
              },
              ...a
            } = Lt(e, t),
            u = { x: n, y: r },
            c = await Eo(t, a),
            f = fn(Dt(o)),
            h = cu(f);
          let y = u[h],
            w = u[f];
          if (i) {
            const S = h === "y" ? "top" : "left",
              p = h === "y" ? "bottom" : "right",
              d = y + c[S],
              m = y - c[p];
            y = ta(d, y, m);
          }
          if (s) {
            const S = f === "y" ? "top" : "left",
              p = f === "y" ? "bottom" : "right",
              d = w + c[S],
              m = w - c[p];
            w = ta(d, w, m);
          }
          const g = l.fn({ ...t, [h]: y, [f]: w });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [h]: i, [f]: s } },
          };
        },
      }
    );
  },
  qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Lt(e, t),
            c = { x: n, y: r },
            f = fn(o),
            h = cu(f);
          let y = c[h],
            w = c[f];
          const g = Lt(l, t),
            S =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const m = h === "y" ? "height" : "width",
              E = i.reference[h] - i.floating[m] + S.mainAxis,
              C = i.reference[h] + i.reference[m] - S.mainAxis;
            y < E ? (y = E) : y > C && (y = C);
          }
          if (u) {
            var p, d;
            const m = h === "y" ? "width" : "height",
              E = ["top", "left"].includes(Dt(o)),
              C =
                i.reference[f] -
                i.floating[m] +
                ((E && ((p = s.offset) == null ? void 0 : p[f])) || 0) +
                (E ? 0 : S.crossAxis),
              k =
                i.reference[f] +
                i.reference[m] +
                (E ? 0 : ((d = s.offset) == null ? void 0 : d[f]) || 0) -
                (E ? S.crossAxis : 0);
            w < C ? (w = C) : w > k && (w = k);
          }
          return { [h]: y, [f]: w };
        },
      }
    );
  },
  Zw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Lt(e, t),
            c = await Eo(t, u),
            f = Dt(o),
            h = Rr(o),
            y = fn(o) === "y",
            { width: w, height: g } = i.floating;
          let S, p;
          f === "top" || f === "bottom"
            ? ((S = f),
              (p =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = f), (S = h === "end" ? "top" : "bottom"));
          const d = g - c.top - c.bottom,
            m = w - c.left - c.right,
            E = dn(g - c[S], d),
            C = dn(w - c[p], m),
            k = !t.middlewareData.shift;
          let P = E,
            R = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = m),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = d),
            k && !h)
          ) {
            const A = Ie(c.left, 0),
              z = Ie(c.right, 0),
              L = Ie(c.top, 0),
              V = Ie(c.bottom, 0);
            y
              ? (R = w - 2 * (A !== 0 || z !== 0 ? A + z : Ie(c.left, c.right)))
              : (P =
                  g - 2 * (L !== 0 || V !== 0 ? L + V : Ie(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: P });
          const j = await s.getDimensions(l.floating);
          return w !== j.width || g !== j.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function gs() {
  return typeof window < "u";
}
function _r(e) {
  return Bh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $e(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Et(e) {
  var t;
  return (t = (Bh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Bh(e) {
  return gs() ? e instanceof Node || e instanceof $e(e).Node : !1;
}
function ut(e) {
  return gs() ? e instanceof Element || e instanceof $e(e).Element : !1;
}
function St(e) {
  return gs() ? e instanceof HTMLElement || e instanceof $e(e).HTMLElement : !1;
}
function sd(e) {
  return !gs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot;
}
function Ao(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Jw(e) {
  return ["table", "td", "th"].includes(_r(e));
}
function ys(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function pu(e) {
  const t = hu(),
    n = ut(e) ? ct(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function ex(e) {
  let t = pn(e);
  for (; St(t) && !Er(t); ) {
    if (pu(t)) return t;
    if (ys(t)) return null;
    t = pn(t);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Er(e) {
  return ["html", "body", "#document"].includes(_r(e));
}
function ct(e) {
  return $e(e).getComputedStyle(e);
}
function vs(e) {
  return ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function pn(e) {
  if (_r(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (sd(e) && e.host) || Et(e);
  return sd(t) ? t.host : t;
}
function Vh(e) {
  const t = pn(e);
  return Er(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : St(t) && Ao(t)
    ? t
    : Vh(t);
}
function Co(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Vh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = $e(o);
  if (i) {
    const l = ra(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Ao(o) ? o : [],
      l && n ? Co(l) : []
    );
  }
  return t.concat(o, Co(o, [], n));
}
function ra(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wh(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = St(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Vi(n) !== i || Vi(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function mu(e) {
  return ut(e) ? e : e.contextElement;
}
function or(e) {
  const t = mu(e);
  if (!St(t)) return wt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Wh(t);
  let s = (i ? Vi(n.width) : n.width) / r,
    l = (i ? Vi(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const tx = wt(0);
function Hh(e) {
  const t = $e(e);
  return !hu() || !t.visualViewport
    ? tx
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function nx(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $e(e)) ? !1 : t;
}
function Ln(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = mu(e);
  let s = wt(1);
  t && (r ? ut(r) && (s = or(r)) : (s = or(e)));
  const l = nx(i, n, r) ? Hh(i) : wt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const h = $e(i),
      y = r && ut(r) ? $e(r) : r;
    let w = h,
      g = ra(w);
    for (; g && r && y !== w; ) {
      const S = or(g),
        p = g.getBoundingClientRect(),
        d = ct(g),
        m = p.left + (g.clientLeft + parseFloat(d.paddingLeft)) * S.x,
        E = p.top + (g.clientTop + parseFloat(d.paddingTop)) * S.y;
      (a *= S.x),
        (u *= S.y),
        (c *= S.x),
        (f *= S.y),
        (a += m),
        (u += E),
        (w = $e(g)),
        (g = ra(w));
    }
  }
  return Hi({ width: c, height: f, x: a, y: u });
}
function gu(e, t) {
  const n = vs(e).scrollLeft;
  return t ? t.left + n : Ln(Et(e)).left + n;
}
function Qh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : gu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function rx(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Et(r),
    l = t ? ys(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = wt(1);
  const c = wt(0),
    f = St(r);
  if (
    (f || (!f && !i)) &&
    ((_r(r) !== "body" || Ao(s)) && (a = vs(r)), St(r))
  ) {
    const y = Ln(r);
    (u = or(r)), (c.x = y.x + r.clientLeft), (c.y = y.y + r.clientTop);
  }
  const h = s && !f && !i ? Qh(s, a, !0) : wt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
  };
}
function ox(e) {
  return Array.from(e.getClientRects());
}
function ix(e) {
  const t = Et(e),
    n = vs(e),
    r = e.ownerDocument.body,
    o = Ie(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ie(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + gu(e);
  const l = -n.scrollTop;
  return (
    ct(r).direction === "rtl" && (s += Ie(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function sx(e, t) {
  const n = $e(e),
    r = Et(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = hu();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function lx(e, t) {
  const n = Ln(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = St(e) ? or(e) : wt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function ld(e, t, n) {
  let r;
  if (t === "viewport") r = sx(e, n);
  else if (t === "document") r = ix(Et(e));
  else if (ut(t)) r = lx(t, n);
  else {
    const o = Hh(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Hi(r);
}
function Kh(e, t) {
  const n = pn(e);
  return n === t || !ut(n) || Er(n)
    ? !1
    : ct(n).position === "fixed" || Kh(n, t);
}
function ax(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Co(e, [], !1).filter((l) => ut(l) && _r(l) !== "body"),
    o = null;
  const i = ct(e).position === "fixed";
  let s = i ? pn(e) : e;
  for (; ut(s) && !Er(s); ) {
    const l = ct(s),
      a = pu(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ao(s) && !a && Kh(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = pn(s));
  }
  return t.set(e, r), r;
}
function ux(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? ys(t)
          ? []
          : ax(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, c) => {
      const f = ld(t, c, o);
      return (
        (u.top = Ie(f.top, u.top)),
        (u.right = dn(f.right, u.right)),
        (u.bottom = dn(f.bottom, u.bottom)),
        (u.left = Ie(f.left, u.left)),
        u
      );
    }, ld(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function cx(e) {
  const { width: t, height: n } = Wh(e);
  return { width: t, height: n };
}
function dx(e, t, n) {
  const r = St(t),
    o = Et(t),
    i = n === "fixed",
    s = Ln(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = wt(0);
  if (r || (!r && !i))
    if (((_r(t) !== "body" || Ao(o)) && (l = vs(t)), r)) {
      const h = Ln(t, !0, i, t);
      (a.x = h.x + t.clientLeft), (a.y = h.y + t.clientTop);
    } else o && (a.x = gu(o));
  const u = o && !r && !i ? Qh(o, l) : wt(0),
    c = s.left + l.scrollLeft - a.x - u.x,
    f = s.top + l.scrollTop - a.y - u.y;
  return { x: c, y: f, width: s.width, height: s.height };
}
function el(e) {
  return ct(e).position === "static";
}
function ad(e, t) {
  if (!St(e) || ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Et(e) === n && (n = n.ownerDocument.body), n;
}
function Gh(e, t) {
  const n = $e(e);
  if (ys(e)) return n;
  if (!St(e)) {
    let o = pn(e);
    for (; o && !Er(o); ) {
      if (ut(o) && !el(o)) return o;
      o = pn(o);
    }
    return n;
  }
  let r = ad(e, t);
  for (; r && Jw(r) && el(r); ) r = ad(r, t);
  return r && Er(r) && el(r) && !pu(r) ? n : r || ex(e) || n;
}
const fx = async function (e) {
  const t = this.getOffsetParent || Gh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: dx(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function px(e) {
  return ct(e).direction === "rtl";
}
const hx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rx,
  getDocumentElement: Et,
  getClippingRect: ux,
  getOffsetParent: Gh,
  getElementRects: fx,
  getClientRects: ox,
  getDimensions: cx,
  getScale: or,
  isElement: ut,
  isRTL: px,
};
function Yh(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function mx(e, t) {
  let n = null,
    r;
  const o = Et(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: h, height: y } = u;
    if ((l || t(), !h || !y)) return;
    const w = ti(f),
      g = ti(o.clientWidth - (c + h)),
      S = ti(o.clientHeight - (f + y)),
      p = ti(c),
      m = {
        rootMargin: -w + "px " + -g + "px " + -S + "px " + -p + "px",
        threshold: Ie(0, dn(1, a)) || 1,
      };
    let E = !0;
    function C(k) {
      const P = k[0].intersectionRatio;
      if (P !== a) {
        if (!E) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      P === 1 && !Yh(u, e.getBoundingClientRect()) && s(), (E = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, m);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function gx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = mu(e),
    c = o || i ? [...(u ? Co(u) : []), ...Co(t)] : [];
  c.forEach((p) => {
    o && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n);
  });
  const f = u && l ? mx(u, n) : null;
  let h = -1,
    y = null;
  s &&
    ((y = new ResizeObserver((p) => {
      let [d] = p;
      d &&
        d.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var m;
          (m = y) == null || m.observe(t);
        }))),
        n();
    })),
    u && !a && y.observe(u),
    y.observe(t));
  let w,
    g = a ? Ln(e) : null;
  a && S();
  function S() {
    const p = Ln(e);
    g && !Yh(g, p) && n(), (g = p), (w = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var p;
      c.forEach((d) => {
        o && d.removeEventListener("scroll", n),
          i && d.removeEventListener("resize", n);
      }),
        f == null || f(),
        (p = y) == null || p.disconnect(),
        (y = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const yx = Yw,
  vx = Xw,
  wx = Qw,
  xx = Zw,
  Sx = Kw,
  ud = Hw,
  Ex = qw,
  Cx = (e, t, n) => {
    const r = new Map(),
      o = { platform: hx, ...n },
      i = { ...o.platform, _c: r };
    return Ww(e, t, { ...o, platform: i });
  };
var gi = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function Qi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Qi(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xh(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cd(e, t) {
  const n = Xh(e);
  return Math.round(t * n) / n;
}
function tl(e) {
  const t = v.useRef(e);
  return (
    gi(() => {
      t.current = e;
    }),
    t
  );
}
function kx(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, f] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, y] = v.useState(r);
  Qi(h, r) || y(r);
  const [w, g] = v.useState(null),
    [S, p] = v.useState(null),
    d = v.useCallback((N) => {
      N !== k.current && ((k.current = N), g(N));
    }, []),
    m = v.useCallback((N) => {
      N !== P.current && ((P.current = N), p(N));
    }, []),
    E = i || w,
    C = s || S,
    k = v.useRef(null),
    P = v.useRef(null),
    R = v.useRef(c),
    j = a != null,
    A = tl(a),
    z = tl(o),
    L = tl(u),
    V = v.useCallback(() => {
      if (!k.current || !P.current) return;
      const N = { placement: t, strategy: n, middleware: h };
      z.current && (N.platform = z.current),
        Cx(k.current, P.current, N).then((b) => {
          const D = { ...b, isPositioned: L.current !== !1 };
          M.current &&
            !Qi(R.current, D) &&
            ((R.current = D),
            Oo.flushSync(() => {
              f(D);
            }));
        });
    }, [h, t, n, z, L]);
  gi(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const M = v.useRef(!1);
  gi(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    gi(() => {
      if ((E && (k.current = E), C && (P.current = C), E && C)) {
        if (A.current) return A.current(E, C, V);
        V();
      }
    }, [E, C, V, A, j]);
  const Q = v.useMemo(
      () => ({ reference: k, floating: P, setReference: d, setFloating: m }),
      [d, m]
    ),
    U = v.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    H = v.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!U.floating) return N;
      const b = cd(U.floating, c.x),
        D = cd(U.floating, c.y);
      return l
        ? {
            ...N,
            transform: "translate(" + b + "px, " + D + "px)",
            ...(Xh(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: b, top: D };
    }, [n, l, U.floating, c.x, c.y]);
  return v.useMemo(
    () => ({ ...c, update: V, refs: Q, elements: U, floatingStyles: H }),
    [c, V, Q, U, H]
  );
}
const Px = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ud({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ud({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  Tx = (e, t) => ({ ...yx(e), options: [e, t] }),
  Nx = (e, t) => ({ ...vx(e), options: [e, t] }),
  Rx = (e, t) => ({ ...Ex(e), options: [e, t] }),
  _x = (e, t) => ({ ...wx(e), options: [e, t] }),
  bx = (e, t) => ({ ...xx(e), options: [e, t] }),
  Ox = (e, t) => ({ ...Sx(e), options: [e, t] }),
  Ax = (e, t) => ({ ...Px(e), options: [e, t] });
var Mx = "Arrow",
  qh = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return x.jsx(Me.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : x.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
qh.displayName = Mx;
var jx = qh;
function Lx(e) {
  const [t, n] = v.useState(void 0);
  return (
    jn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Zh = "Popper",
  [Jh, em] = fs(Zh),
  [M1, tm] = Jh(Zh),
  nm = "PopperAnchor",
  rm = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = tm(nm, n),
      s = v.useRef(null),
      l = at(t, s);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : x.jsx(Me.div, { ...o, ref: l })
    );
  });
rm.displayName = nm;
var yu = "PopperContent",
  [Dx, Ix] = Jh(yu),
  om = v.forwardRef((e, t) => {
    var yn, wu, xu, Su, Eu, Cu;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: w,
        ...g
      } = e,
      S = tm(yu, n),
      [p, d] = v.useState(null),
      m = at(t, (Or) => d(Or)),
      [E, C] = v.useState(null),
      k = Lx(E),
      P = (k == null ? void 0 : k.width) ?? 0,
      R = (k == null ? void 0 : k.height) ?? 0,
      j = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      L = z.length > 0,
      V = { padding: A, boundary: z.filter(zx), altBoundary: L },
      {
        refs: M,
        floatingStyles: Q,
        placement: U,
        isPositioned: H,
        middlewareData: N,
      } = kx({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...Or) =>
          gx(...Or, { animationFrame: y === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          Tx({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            Nx({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? Rx() : void 0,
              ...V,
            }),
          a && _x({ ...V }),
          bx({
            ...V,
            apply: ({
              elements: Or,
              rects: ku,
              availableWidth: wm,
              availableHeight: xm,
            }) => {
              const { width: Sm, height: Em } = ku.reference,
                Mo = Or.floating.style;
              Mo.setProperty("--radix-popper-available-width", `${wm}px`),
                Mo.setProperty("--radix-popper-available-height", `${xm}px`),
                Mo.setProperty("--radix-popper-anchor-width", `${Sm}px`),
                Mo.setProperty("--radix-popper-anchor-height", `${Em}px`);
            },
          }),
          E && Ax({ element: E, padding: l }),
          $x({ arrowWidth: P, arrowHeight: R }),
          h && Ox({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [b, D] = lm(U),
      $ = xt(w);
    jn(() => {
      H && ($ == null || $());
    }, [H, $]);
    const J = (yn = N.arrow) == null ? void 0 : yn.x,
      Ze = (wu = N.arrow) == null ? void 0 : wu.y,
      We = ((xu = N.arrow) == null ? void 0 : xu.centerOffset) !== 0,
      [br, Ct] = v.useState();
    return (
      jn(() => {
        p && Ct(window.getComputedStyle(p).zIndex);
      }, [p]),
      x.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: H ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: br,
          "--radix-popper-transform-origin": [
            (Su = N.transformOrigin) == null ? void 0 : Su.x,
            (Eu = N.transformOrigin) == null ? void 0 : Eu.y,
          ].join(" "),
          ...(((Cu = N.hide) == null ? void 0 : Cu.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: x.jsx(Dx, {
          scope: n,
          placedSide: b,
          onArrowChange: C,
          arrowX: J,
          arrowY: Ze,
          shouldHideArrow: We,
          children: x.jsx(Me.div, {
            "data-side": b,
            "data-align": D,
            ...g,
            ref: m,
            style: { ...g.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
om.displayName = yu;
var im = "PopperArrow",
  Fx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  sm = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Ix(im, r),
      s = Fx[i.placedSide];
    return x.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: x.jsx(jx, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
sm.displayName = im;
function zx(e) {
  return e !== null;
}
var $x = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, p, d;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = lm(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + l / 2,
      y = (((d = o.arrow) == null ? void 0 : d.y) ?? 0) + a / 2;
    let w = "",
      g = "";
    return (
      u === "bottom"
        ? ((w = s ? f : `${h}px`), (g = `${-a}px`))
        : u === "top"
        ? ((w = s ? f : `${h}px`), (g = `${r.floating.height + a}px`))
        : u === "right"
        ? ((w = `${-a}px`), (g = s ? f : `${y}px`))
        : u === "left" &&
          ((w = `${r.floating.width + a}px`), (g = s ? f : `${y}px`)),
      { data: { x: w, y: g } }
    );
  },
});
function lm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ux = rm,
  Bx = om,
  Vx = sm,
  [ws, j1] = fs("Tooltip", [em]),
  vu = em(),
  am = "TooltipProvider",
  Wx = 700,
  dd = "tooltip.open",
  [Hx, um] = ws(am),
  cm = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Wx,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = v.useRef(!0),
      l = v.useRef(!1),
      a = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      x.jsx(Hx, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: v.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
cm.displayName = am;
var dm = "Tooltip",
  [L1, xs] = ws(dm),
  oa = "TooltipTrigger",
  Qx = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = xs(oa, n),
      i = um(oa, n),
      s = vu(n),
      l = v.useRef(null),
      a = at(t, l, o.onTriggerChange),
      u = v.useRef(!1),
      c = v.useRef(!1),
      f = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      x.jsx(Ux, {
        asChild: !0,
        ...s,
        children: x.jsx(Me.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ue(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ue(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ue(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ue(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ue(e.onBlur, o.onClose),
          onClick: ue(e.onClick, o.onClose),
        }),
      })
    );
  });
Qx.displayName = oa;
var Kx = "TooltipPortal",
  [D1, Gx] = ws(Kx, { forceMount: void 0 }),
  Cr = "TooltipContent",
  fm = v.forwardRef((e, t) => {
    const n = Gx(Cr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = xs(Cr, e.__scopeTooltip);
    return x.jsx(iu, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? x.jsx(pm, { side: o, ...i, ref: t })
        : x.jsx(Yx, { side: o, ...i, ref: t }),
    });
  }),
  Yx = v.forwardRef((e, t) => {
    const n = xs(Cr, e.__scopeTooltip),
      r = um(Cr, e.__scopeTooltip),
      o = v.useRef(null),
      i = at(t, o),
      [s, l] = v.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: f } = r,
      h = v.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      y = v.useCallback(
        (w, g) => {
          const S = w.currentTarget,
            p = { x: w.clientX, y: w.clientY },
            d = e1(p, S.getBoundingClientRect()),
            m = t1(p, d),
            E = n1(g.getBoundingClientRect()),
            C = o1([...m, ...E]);
          l(C), f(!0);
        },
        [f]
      );
    return (
      v.useEffect(() => () => h(), [h]),
      v.useEffect(() => {
        if (a && c) {
          const w = (S) => y(S, c),
            g = (S) => y(S, a);
          return (
            a.addEventListener("pointerleave", w),
            c.addEventListener("pointerleave", g),
            () => {
              a.removeEventListener("pointerleave", w),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [a, c, y, h]),
      v.useEffect(() => {
        if (s) {
          const w = (g) => {
            const S = g.target,
              p = { x: g.clientX, y: g.clientY },
              d =
                (a == null ? void 0 : a.contains(S)) ||
                (c == null ? void 0 : c.contains(S)),
              m = !r1(p, s);
            d ? h() : m && (h(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [a, c, s, u, h]),
      x.jsx(pm, { ...e, ref: i })
    );
  }),
  [Xx, qx] = ws(dm, { isInside: !1 }),
  Zx = a0("TooltipContent"),
  pm = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = xs(Cr, n),
      u = vu(n),
      { onClose: c } = a;
    return (
      v.useEffect(
        () => (
          document.addEventListener(dd, c),
          () => document.removeEventListener(dd, c)
        ),
        [c]
      ),
      v.useEffect(() => {
        if (a.trigger) {
          const f = (h) => {
            const y = h.target;
            y != null && y.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      x.jsx(ou, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: x.jsxs(Bx, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            x.jsx(Zx, { children: r }),
            x.jsx(Xx, {
              scope: n,
              isInside: !0,
              children: x.jsx(b0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
fm.displayName = Cr;
var hm = "TooltipArrow",
  Jx = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = vu(n);
    return qx(hm, n).isInside ? null : x.jsx(Vx, { ...o, ...r, ref: t });
  });
Jx.displayName = hm;
function e1(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function t1(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function n1(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function r1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      c = t[s].y;
    a > r != c > r && n < ((u - l) * (r - a)) / (c - a) + l && (o = !o);
  }
  return o;
}
function o1(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    i1(t)
  );
}
function i1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var s1 = cm,
  mm = fm;
const l1 = s1,
  a1 = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    x.jsx(mm, {
      ref: r,
      sideOffset: t,
      className: je(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e
      ),
      ...n,
    })
  );
a1.displayName = mm.displayName;
const gm = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: je(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
gm.displayName = "Card";
const u1 = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: je("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
u1.displayName = "CardHeader";
const c1 = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: je("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
c1.displayName = "CardTitle";
const d1 = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", {
    ref: n,
    className: je("text-sm text-muted-foreground", e),
    ...t,
  })
);
d1.displayName = "CardDescription";
const ym = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", { ref: n, className: je("p-6 pt-0", e), ...t })
);
ym.displayName = "CardContent";
const f1 = v.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("div", { ref: n, className: je("flex items-center p-6 pt-0", e), ...t })
);
f1.displayName = "CardFooter";
function p1() {
  return x.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: x.jsx(gm, {
      className: "w-full max-w-md mx-4",
      children: x.jsxs(ym, {
        className: "pt-6",
        children: [
          x.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              x.jsx(Z0, { className: "h-8 w-8 text-red-500" }),
              x.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          x.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const nl = "/assets/IMG_4564_1756192467429-DFfvCiPG.png";
function h1() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("div", {
        className: "fixed top-0 left-[10%] w-12 h-24 animate-float-rocket z-0",
        children: x.jsx("div", { className: "rocket-emoji", children: "🚀" }),
      }),
      x.jsx("div", {
        className:
          "fixed top-0 left-[25%] w-16 h-16 animate-float-rocket-delayed z-0",
        children: x.jsx("img", {
          src: nl,
          alt: "Crown Pepe",
          className: "w-full h-full object-contain opacity-80",
          style: { imageRendering: "auto" },
        }),
      }),
      x.jsx("div", {
        className:
          "fixed top-0 left-[45%] w-12 h-24 animate-float-rocket-slow z-0",
        children: x.jsx("div", { className: "rocket-emoji", children: "🚀" }),
      }),
      x.jsx("div", {
        className:
          "fixed top-0 left-[60%] w-14 h-14 animate-float-rocket-fast z-0",
        children: x.jsx("img", {
          src: nl,
          alt: "Crown Pepe",
          className: "w-full h-full object-contain opacity-70",
          style: { imageRendering: "auto" },
        }),
      }),
      x.jsx("div", {
        className:
          "fixed top-0 left-[75%] w-12 h-24 animate-float-rocket-medium z-0",
        children: x.jsx("div", { className: "rocket-emoji", children: "🚀" }),
      }),
      x.jsx("div", {
        className: "fixed top-0 left-[90%] w-18 h-18 animate-float-rocket z-0",
        children: x.jsx("img", {
          src: nl,
          alt: "Crown Pepe",
          className: "w-full h-full object-contain opacity-60",
          style: { imageRendering: "auto" },
        }),
      }),
    ],
  });
}
const m1 = Rh(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  vm = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? s0 : "button";
      return x.jsx(s, {
        className: je(m1({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
vm.displayName = "Button";
const g1 = "/assets/IMG_4552_1756187386608-BNJFaS9T.png",
  y1 = "/assets/IMG_4566_1756194072735-CBcy4sSj.png",
  v1 = "/assets/IMG_4587_1756254045692-C26P05II.png",
  w1 = "/assets/Untitled%20design_1756191494415-rtkpYNZZ.png",
  x1 = "/assets/IMG_4567_1756214312589-CLZtGX7Q.png",
  S1 = "/assets/IMG_4568_1756214312589-DOuq4kXL.png",
  E1 = "/assets/IMG_4572_1756214312589-GSq9rN9g.png",
  C1 = "/assets/Untitled%20design_1756214312589-64Kjsrkg.png",
  k1 = "/assets/IMG_4578_1756214312589-DwKEMMgs.png",
  P1 = "/assets/IMG_4583_1756214312589-BF96snih.png",
  T1 = "/assets/IMG_4585_1756214312589-CBQEDvmq.png",
  N1 = "/assets/IMG_4587_1756254045692-C26P05II.png";
function R1() {
  const [e, t] = v.useState(!1),
    { toast: n } = Jp(),
    r = () => {
      n(
        e
          ? {
              title: "🚀 Redirecting to DEX...",
              description: "Opening Uniswap to purchase $MEMETIC tokens!",
            }
          : {
              title: "🚀 Connect your wallet to buy $MEMETIC tokens! 🚀",
              description:
                "Please install MetaMask or another Web3 wallet to continue.",
            }
      );
    },
    o = async () => {
      const i = "0xTBA";
      try {
        await navigator.clipboard.writeText(i),
          n({
            title: "Contract address copied!",
            description:
              "The contract address has been copied to your clipboard.",
          });
      } catch (s) {
        console.error("Failed to copy contract address:", s);
      }
    };
  return x.jsxs("div", {
    className: "font-terminal text-degen-gold overflow-x-hidden relative",
    children: [
      x.jsx("nav", {
        className:
          "fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-b-2 border-fire-orange backdrop-blur-sm",
        children: x.jsx("div", {
          className: "max-w-7xl mx-auto px-4 py-2",
          children: x.jsx("div", {
            className: "flex items-center justify-start",
            children: x.jsx("img", {
              src: v1,
              alt: "$MEMETIC Header Logo",
              className: "h-16 md:h-20 lg:h-24 object-contain",
              style: { imageRendering: "auto" },
              "data-testid": "header-nav-logo",
            }),
          }),
        }),
      }),
      x.jsx(h1, {}),
      x.jsx("header", {
        style: { paddingTop: "150px" },
        className:
          "text-center py-12 mt-16 md:mt-20 bg-black bg-opacity-70 border-b-4 border-fire-orange relative z-10",
        children: x.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            x.jsx("img", {
              src: g1,
              alt: "MEMETIC - Pepe King Logo",
              className:
                "w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain mb-6 glow-border rounded-2xl glitch-effect",
              style: { imageRendering: "auto" },
              "data-testid": "header-logo",
            }),
            x.jsx("img", {
              src: y1,
              alt: "MEMETIC - Text Logo",
              className:
                "w-[32rem] h-auto md:w-[40rem] lg:w-[48rem] object-contain ml-auto mr-12 md:mr-16 lg:mr-20 float-animation glitch-effect",
              style: { imageRendering: "auto" },
              "data-testid": "header-text-logo",
            }),
            x.jsxs("p", {
              className:
                "text-xl md:text-2xl -mt-2 text-degen-gold font-bold typewriter-text",
              "data-testid": "header-tagline",
              children: [
                x.jsx("span", { className: "loading-dots", children: "..." }),
                x.jsx("span", {
                  className: "typewriter-content",
                  children: "the Origins of PEPE",
                }),
              ],
            }),
          ],
        }),
      }),
      x.jsxs("section", {
        id: "origins",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("div", {
            className: "text-center mb-8",
            children: x.jsx("img", {
              src: N1,
              alt: "The Origins of PEPE",
              className: "mx-auto h-40 md:h-48 lg:h-56 object-contain",
              style: { imageRendering: "auto" },
              "data-testid": "origins-title",
            }),
          }),
          x.jsxs("div", {
            className:
              "text-lg md:text-xl leading-relaxed space-y-6 text-degen-gold",
            children: [
              x.jsx("p", {
                "data-testid": "origins-paragraph-1",
                children:
                  "It all began in the chaos of 2016. The internet was already saturated with Pepe — a chill frog from Matt Furie's Boy's Club comics who had long since escaped into the meme wilds. By then, Pepe was everywhere: reaction faces, rage comics, inside jokes in every forum. But 2016 wasn't just another year of memes — it was the year Pepe got pulled into politics, weaponized, and splashed across news outlets worldwide.",
              }),
              x.jsx("p", {
                "data-testid": "origins-paragraph-2",
                children:
                  "Amid this storm, developers launched PepeCoin — not as a joke, but as a blockchain project with its own chain. The idea was simple but revolutionary: take the most viral meme in internet history and anchor it to a digital currency. A coin that didn't just trade value, but carried culture.",
              }),
              x.jsx("p", {
                "data-testid": "origins-paragraph-3",
                children:
                  "But controversy sells headlines faster than innovation. With Pepe being labeled everything from harmless frog to political symbol, exchanges hesitated. So when Bittrex finally picked it up in 2017, they did it under a camouflage: Memetic (ticker: MEME). A perfect disguise. The spirit of Pepe was alive in the blockchain, but the name gave it room to breathe in the market without headlines killing it before it could grow.",
              }),
              x.jsx("p", {
                "data-testid": "origins-paragraph-4",
                children:
                  "That stealth listing planted the seed. What started as PepeCoin → Memetic became a proof of concept: memes weren't just cultural artifacts, they were financial ecosystems. Years later, the cycle came full circle. Pepe broke free again, this time under its true name, and exploded into the mainstream. By 2023, it wasn't just another token — it was the meme coin of all meme coins, shattering billions in market cap and proving that Pepe wasn't a fad, but the backbone of meme culture itself.",
              }),
              x.jsx("div", {
                className: "text-center my-8",
                children: x.jsx("img", {
                  src: k1,
                  alt: "Crown Pepe meets Political Power",
                  className:
                    "max-w-full md:max-w-md mx-auto object-contain rounded-lg border-2 border-degen-gold meme-effects",
                  style: { imageRendering: "auto" },
                  "data-testid": "origins-meme",
                }),
              }),
              x.jsx("p", {
                className:
                  "text-center text-xl md:text-2xl font-bold text-pepe-green",
                "data-testid": "origins-conclusion",
                children:
                  "From underground frog comics → internet folklore → rebranded as Memetic → resurrected as PEPE — the path is clear. Pepe is more than a meme. It's the largest, most unstoppable cultural asset in internet history, now immortalized on-chain.",
              }),
            ],
          }),
        ],
      }),
      x.jsxs("section", {
        id: "buy",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("h2", {
            className:
              "text-4xl md:text-5xl text-center text-fire-orange font-bold mb-8 text-glow",
            "data-testid": "buy-section-title",
            children: "Buy MEMETIC",
          }),
          x.jsxs("div", {
            className: "text-center",
            children: [
              x.jsx("div", {
                className: "mb-8",
                children: x.jsx("img", {
                  src: E1,
                  alt: "Crown Pepe riding MEMETIC rocket to the moon",
                  className:
                    "max-w-full md:max-w-lg mx-auto object-contain rounded-lg border-2 border-fire-orange meme-effects",
                  style: { imageRendering: "auto" },
                  "data-testid": "buy-section-meme",
                }),
              }),
              x.jsx(vm, {
                className:
                  "bg-pepe-green text-black text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg uppercase transform transition-all duration-300 hover:scale-110 animate-glow-pulse cursor-pointer",
                onClick: () =>
                  window.open(
                    "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xTBA"
                  ),
                "data-testid": "button-buy-token",
                children: "BUY NOW",
              }),
              x.jsxs("div", {
                className:
                  "text-center text-lg md:text-xl text-degen-gold mt-6",
                "data-testid": "contract-address-section",
                children: [
                  x.jsx("span", {
                    className: "block text-fire-orange mb-2",
                    children: "Contract Address:",
                  }),
                  x.jsx("code", {
                    className:
                      "bg-gray-900 px-4 py-2 rounded text-sm md:text-base cursor-pointer hover:bg-gray-800 transition-colors break-all",
                    onClick: o,
                    "data-testid": "contract-address",
                    children: "0xTBA",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      x.jsxs("section", {
        id: "tokenomics",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("h2", {
            className:
              "text-4xl md:text-5xl text-center text-fire-orange font-bold mb-8 text-glow",
            "data-testid": "tokenomics-title",
            children: "Tokenomics",
          }),
          x.jsx("h3", {
            className: "text-2xl md:text-3xl text-center text-pepe-green mb-8",
            "data-testid": "tokenomics-subtitle",
            children: "MEMETIC - Ticker: $MEMETIC",
          }),
          x.jsx("div", {
            className: "mb-8 text-center",
            children: x.jsx("img", {
              src: S1,
              alt: "Muscular Crown Pepe in the city",
              className:
                "max-w-full md:max-w-lg mx-auto object-contain rounded-lg border-2 border-degen-gold meme-effects",
              style: { imageRendering: "auto" },
              "data-testid": "tokenomics-meme",
            }),
          }),
          x.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: [
              x.jsx("div", {
                className:
                  "bg-terminal-teal text-white px-6 py-4 border-2 border-green-400 uppercase text-lg md:text-xl font-bold shadow-lg",
                style: { boxShadow: "0 0 10px #00ff00" },
                "data-testid": "tokenomics-feature-taxes",
                children: "Zero Taxes",
              }),
              x.jsx("div", {
                className:
                  "bg-terminal-teal text-white px-6 py-4 border-2 border-green-400 uppercase text-lg md:text-xl font-bold shadow-lg",
                style: { boxShadow: "0 0 10px #00ff00" },
                "data-testid": "tokenomics-feature-renounced",
                children: "Contract Renounced",
              }),
              x.jsx("div", {
                className:
                  "bg-terminal-teal text-white px-6 py-4 border-2 border-green-400 uppercase text-lg md:text-xl font-bold shadow-lg",
                style: { boxShadow: "0 0 10px #00ff00" },
                "data-testid": "tokenomics-feature-liquidity",
                children: "Liquidity Burnt",
              }),
            ],
          }),
        ],
      }),
      x.jsxs("section", {
        id: "memonic-meme",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("h2", {
            className:
              "text-4xl md:text-5xl text-center text-fire-orange font-bold mb-8 text-glow",
            "data-testid": "meme-section-title",
            children: "MEMONIC Meme Section",
          }),
          x.jsxs("div", {
            className: "text-center",
            children: [
              x.jsx("img", {
                src: x1,
                alt: "Crown Pepe on throne with lightning power",
                className:
                  "max-w-full h-auto border-4 border-fire-orange shadow-2xl mx-auto rounded-lg object-contain meme-effects",
                style: { imageRendering: "auto" },
                "data-testid": "img-main-meme",
              }),
              x.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",
                children: [
                  x.jsx("img", {
                    src: C1,
                    alt: "Crown Pepe with command blocks",
                    className:
                      "w-full h-auto object-contain border-4 border-fire-orange shadow-lg rounded-lg meme-effects",
                    style: { imageRendering: "auto" },
                    "data-testid": "img-meme-1",
                  }),
                  x.jsx("img", {
                    src: P1,
                    alt: "Crown Pepe with royal court",
                    className:
                      "w-full h-auto object-contain border-4 border-fire-orange shadow-lg rounded-lg meme-effects",
                    style: { imageRendering: "auto" },
                    "data-testid": "img-meme-2",
                  }),
                  x.jsx("img", {
                    src: T1,
                    alt: "Dragon Crown Pepe breathing fire",
                    className:
                      "w-full h-auto object-contain border-4 border-fire-orange shadow-lg rounded-lg md:col-span-2 lg:col-span-1 meme-effects",
                    style: { imageRendering: "auto" },
                    "data-testid": "img-meme-3",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      x.jsxs("section", {
        id: "how-to-buy",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("h2", {
            className:
              "text-4xl md:text-5xl text-center text-fire-orange font-bold mb-8 text-glow",
            "data-testid": "how-to-buy-title",
            children: "How to Buy on Ethereum",
          }),
          x.jsx("div", {
            className: "max-w-3xl mx-auto",
            children: x.jsxs("ol", {
              className:
                "list-decimal list-inside text-lg md:text-xl space-y-4 leading-relaxed",
              children: [
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-1",
                  children: "Create an Ethereum wallet (e.g., MetaMask).",
                }),
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-2",
                  children:
                    "Buy ETH on an exchange and transfer to your wallet.",
                }),
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-3",
                  children: "Go to Uniswap or similar DEX.",
                }),
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-4",
                  children: "Paste the MEMETIC contract address.",
                }),
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-5",
                  children: "Swap ETH for $MEMETIC.",
                }),
                x.jsx("li", {
                  className:
                    "p-4 bg-gray-900 bg-opacity-50 rounded-lg border-l-4 border-pepe-green",
                  "data-testid": "step-6",
                  children: "Confirm transaction and enjoy the Memetic! 🚀",
                }),
              ],
            }),
          }),
        ],
      }),
      x.jsxs("section", {
        id: "socials",
        className:
          "max-w-6xl mx-auto my-12 p-8 bg-black bg-opacity-80 border-4 border-degen-gold rounded-lg glow-border relative z-10",
        children: [
          x.jsx("h2", {
            className:
              "text-4xl md:text-5xl text-center text-fire-orange font-bold mb-8 text-glow",
            "data-testid": "socials-title",
            children: "Degen Socials",
          }),
          x.jsxs("div", {
            className: "flex flex-wrap justify-center gap-6",
            children: [
              x.jsx("a", {
                href: "https://t.me/Memetic_eth",
                className:
                  "bg-fire-orange text-white p-6 rounded-full text-2xl font-bold transform transition-all duration-300 hover:scale-110 shadow-lg",
                style: { boxShadow: "0 0 15px #ffd700" },
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-telegram",
                children: "📱 Telegram",
              }),
              x.jsx("a", {
                href: "https://x.com/memetic_eth?s=21&t=7_ukHrFPInDX203u8cRIbA",
                className:
                  "bg-fire-orange text-white p-6 rounded-full text-2xl font-bold transform transition-all duration-300 hover:scale-110 shadow-lg",
                style: { boxShadow: "0 0 15px #ffd700" },
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-twitter",
                children: "❌ X (Twitter)",
              }),
              x.jsx("a", {
                href: "https://www.dextools.io/app/ether/pair-explorer/0xTBA",
                className:
                  "bg-fire-orange text-white p-6 rounded-full text-2xl font-bold transform transition-all duration-300 hover:scale-110 shadow-lg",
                style: { boxShadow: "0 0 15px #ffd700" },
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-dextools",
                children: "📊 Dextools",
              }),
            ],
          }),
          x.jsxs("div", {
            className: "mt-8 text-center",
            children: [
              x.jsx("p", {
                className: "text-lg mb-4",
                "data-testid": "community-text",
                children: "Join the Memetic Community:",
              }),
            ],
          }),
        ],
      }),
      x.jsxs("footer", {
        className:
          "text-center py-8 border-t-4 border-fire-orange bg-black bg-opacity-70 relative z-10",
        children: [
          x.jsx("div", {
            className: "mb-6",
            children: x.jsx("img", {
              src: w1,
              alt: "MEMETIC Footer Banner",
              className: "mx-auto max-w-full h-auto object-contain",
              style: { imageRendering: "auto" },
              "data-testid": "footer-banner",
            }),
          }),
          x.jsx("p", {
            className: "text-lg text-degen-gold",
            "data-testid": "footer-main-text",
            children: "🚀 MEMETIC - To the Memetic Moon! 🚀",
          }),
          x.jsx("p", {
            className: "text-sm mt-2 text-gray-400",
            "data-testid": "footer-disclaimer",
            children: "DYOR - Not Financial Advice - Degen Responsibly",
          }),
        ],
      }),
    ],
  });
}
function _1() {
  return x.jsxs(Tv, {
    children: [
      x.jsx($c, { path: "/", component: R1 }),
      x.jsx($c, { component: p1 }),
    ],
  });
}
function b1() {
  return x.jsx(Xv, {
    client: Jv,
    children: x.jsxs(l1, { children: [x.jsx(Lw, {}), x.jsx(_1, {})] }),
  });
}
jp(document.getElementById("root")).render(x.jsx(b1, {}));
