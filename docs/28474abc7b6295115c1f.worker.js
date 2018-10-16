!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var u = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var u in e)
          n.d(
            r,
            u,
            function(t) {
              return e[t];
            }.bind(null, u)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e) {
        return "#".concat(
          e
            .map(function(e) {
              return "0".concat(Math.floor(e).toString(16)).slice(-2);
            })
            .join("")
        );
      },
      u = function(e) {
        var t = e;
        return (
          "#" === e.slice(0, 1) && (t = e.slice(1)),
          3 === e.length &&
            (t =
              e.slice(0, 1) +
              e.slice(0, 1) +
              e.slice(1, 2) +
              e.slice(1, 2) +
              e.slice(2, 3) +
              e.slice(2, 3)),
          [t.slice(0, 2), t.slice(2, 4), t.slice(4, 6)].map(function(e) {
            return parseInt(e, 16);
          })
        );
      },
      s = function(e, t, n) {
        var r;
        return 6 * (r = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
          ? t + (n - t) * r * 6
          : 2 * r < 1
            ? n
            : 3 * r < 2
              ? t + (n - t) * (2 / 3 - r) * 6
              : t;
      },
      o = function(e) {
        var t = u(e),
          n = t[0] / 255,
          r = t[1] / 255,
          s = t[2] / 255;
        return (
          0.2126 *
            (n =
              n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) +
          0.7152 *
            (r =
              r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
          0.0722 *
            (s = s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4))
        );
      },
      a = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "#000000",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "#ffffff",
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0.43,
          u = t,
          s = n;
        return o(u) > o(s) && ((s = t), (u = n)), o(e) < r ? s : u;
      },
      c = function(e, t, n) {
        var s = u(e),
          o = u(t),
          a = (2 * (n / 100) - 1 + 1) / 2,
          c = 1 - a;
        return r([
          s[0] * a + o[0] * c,
          s[1] * a + o[1] * c,
          s[2] * a + o[2] * c
        ]);
      },
      i = function(e, t) {
        return c("#000000", e, t);
      },
      f = function(e, t) {
        var n = (function(e) {
            var t,
              n,
              r = e[0] / 255,
              u = e[1] / 255,
              s = e[2] / 255,
              o = Math.max(r, u, s),
              a = Math.min(r, u, s),
              c = o - a,
              i = (o + a) / 2;
            if (o === a) (t = 0), (n = 0);
            else {
              switch (((n = i > 0.5 ? c / (2 - o - a) : c / (o + a)), o)) {
                case r:
                  t = (u - s) / c + (u < s ? 6 : 0);
                  break;
                case u:
                  t = (s - r) / c + 2;
                  break;
                case s:
                  t = (r - u) / c + 4;
              }
              t /= 6;
            }
            return [360 * t, n, i];
          })(u(e)),
          o = (n[0] + t) % 360;
        return (
          (n[0] = o < 0 ? 360 + o : o),
          r(
            (function(e) {
              var t = (e[0] % 360) / 360,
                n = Math.min(1, Math.max(0, e[1])),
                r = Math.min(1, Math.max(0, e[2])),
                u = r <= 0.5 ? r * (n + 1) : r + n - r * n,
                o = 2 * r - u;
              return [
                255 * s(t + 1 / 3, o, u),
                255 * s(t, o, u),
                255 * s(t - 1 / 3, o, u)
              ];
            })(n)
          )
        );
      },
      b = function(e, t) {
        return c("#ffffff", e, t);
      };
    self.addEventListener("message", e => {
      const { n: t, main: n } = e.data;
      self.postMessage({
        [t]: ((e, t) => {
          switch (e) {
            case "1":
              return {
                sub1: t ? a(a(t), b(t, 48), i(t, 24)) : "",
                sub2: t ? a(t, b(t, 18), i(t, 16)) : "",
                sub3: t ? a(t, b(t, 36), i(t, 32)) : "",
                sub4: t ? a(t, b(t, 72), i(t, 64)) : "",
                sub5: t
                  ? `rgb(${100 * o(t)}%,${100 * o(t)}%,${100 * o(t)}%)`
                  : ""
              };
            case "2":
              return {
                sub1: t ? a(t, b(t, 52), i(t, 32)) : "",
                sub2: t ? f(t, 30) : "",
                sub3: t ? a(t, b(f(t, 30), 52), i(f(t, 30), 32)) : "",
                sub4: t ? f(t, -30) : "",
                sub5: t ? a(t, b(f(t, -30), 52), i(f(t, -30), 32)) : ""
              };
            case "3":
              return {
                sub1: t ? b(t, 68) : "",
                sub2: t ? i(t, 48) : "",
                sub3: t ? f(t, 180) : "",
                sub4: t ? b(f(t, 180), 68) : "",
                sub5: t ? i(f(t, 180), 48) : ""
              };
            case "4":
              return {
                sub1: t ? a(t, b(t, 52), i(t, 32)) : "",
                sub2: t ? f(t, 120) : "",
                sub3: t ? a(t, b(f(t, 120), 52), i(f(t, 120), 32)) : "",
                sub4: t ? f(t, -120) : "",
                sub5: t ? a(t, b(f(t, -120), 52), i(f(t, -120), 32)) : ""
              };
            case "5":
              return {
                sub1: t ? a(t, b(t, 52), i(t, 32)) : "",
                sub2: t ? f(t, 210) : "",
                sub3: t ? a(t, b(f(t, 210), 52), i(f(t, 210), 32)) : "",
                sub4: t ? f(t, 150) : "",
                sub5: t ? a(t, b(f(t, 150), 52), i(f(t, 150), 32)) : ""
              };
            case "6":
              return {
                sub1: t ? c(t, f(t, 180), 80) : "",
                sub2: t ? c(t, f(t, 180), 60) : "",
                sub3: t ? c(t, f(t, 180), 40) : "",
                sub4: t ? c(t, f(t, 180), 20) : "",
                sub5: t ? f(t, 180) : ""
              };
            case "7":
              return {
                sub1: t ? f(t, 60) : "",
                sub2: t ? f(t, 30) : "",
                sub3: t ? f(t, -30) : "",
                sub4: t ? f(t, -60) : "",
                sub5: t
                  ? `rgb(${100 * o(t)}%,${100 * o(t)}%,${100 * o(t)}%)`
                  : ""
              };
            default:
              return {};
          }
        })(t, n)
      });
    });
  }
]);
