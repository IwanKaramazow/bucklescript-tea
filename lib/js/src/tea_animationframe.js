// Generated by BUCKLESCRIPT VERSION 1.4.2 , PLEASE EDIT WITH CARE
'use strict';

var Web     = require("./web");
var Curry   = require("bs-platform/lib/js/curry");
var Tea_sub = require("./tea_sub");

function every($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var enableCall = function (callbacks) {
    var lastTime = [Date.now()];
    var id = [/* None */0];
    var onFrame = function () {
      var time = Date.now();
      var match = id[0];
      if (match) {
        var ret = /* float array */[
          time,
          time < lastTime[0] ? 0.0 : time - lastTime[0]
        ];
        lastTime[0] = time;
        Curry._1(callbacks[/* enqueue */0], Curry._1(tagger, ret));
        var match$1 = id[0];
        if (match$1) {
          id[0] = /* Some */[window.requestAnimationFrame(onFrame)];
          return /* () */0;
        }
        else {
          return /* () */0;
        }
      }
      else {
        return /* () */0;
      }
    };
    id[0] = /* Some */[window.requestAnimationFrame(onFrame)];
    return function () {
      var match = id[0];
      if (match) {
        window.cancelAnimationFrame(match[0]);
        id[0] = /* None */0;
        return /* () */0;
      }
      else {
        return /* () */0;
      }
    };
  };
  return Tea_sub.registration(key, enableCall);
}

function times($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  return every(/* None */0, function (ev) {
              return Curry._2(tagger, key, ev[/* time */0]);
            });
}

function diffs($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  return every(/* None */0, function (ev) {
              return Curry._2(tagger, key, ev[/* delta */1]);
            });
}

exports.every = every;
exports.times = times;
exports.diffs = diffs;
/* Web Not a pure module */
