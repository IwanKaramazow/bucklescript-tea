// Generated by BUCKLESCRIPT VERSION 1.4.2 , PLEASE EDIT WITH CARE
'use strict';

var Web          = require("./web");
var Block        = require("bs-platform/lib/js/block");
var Tea_cmd      = require("./tea_cmd");
var Js_primitive = require("bs-platform/lib/js/js_primitive");

function focus(id) {
  return /* EnqueueCall */Block.__(2, [function () {
              var match = document.getElementById(id);
              if (Js_primitive.js_is_nil_undef(match)) {
                console.log(/* tuple */[
                      "Attempted to focus a non-existant element of: ",
                      id
                    ]);
                return /* () */0;
              }
              else {
                var ecb = function () {
                  return match.focus();
                };
                var cb = function () {
                  window.requestAnimationFrame(ecb);
                  return /* () */0;
                };
                window.requestAnimationFrame(cb);
                return /* () */0;
              }
            }]);
}

exports.focus = focus;
/* Web Not a pure module */
